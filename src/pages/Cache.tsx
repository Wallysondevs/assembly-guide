import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Cache() {
  return (
    <PageContainer title="Cache e Memória" subtitle="L1, L2, L3 cache, localidade e como otimizar acesso à memória" difficulty="avancado" timeToRead="18 min">
      <p>A hierarquia de cache é o fator mais importante para performance em código moderno. A diferença entre acerto no L1 e miss na RAM pode ser de 100× em latência.</p>

      <h2>Hierarquia de Memória</h2>
      <table>
        <thead><tr><th>Nível</th><th>Tamanho</th><th>Latência</th><th>Bandwidth</th></tr></thead>
        <tbody>
          {[
            ["Registradores","~1KB (16 regs × 8)","0 ciclos (instantâneo)","≈ 1TB/s"],
            ["L1 Cache","32-64 KB","4-5 ciclos","~1TB/s"],
            ["L2 Cache","256KB-1MB","12-15 ciclos","~400GB/s"],
            ["L3 Cache","8-64 MB","30-50 ciclos","~200GB/s"],
            ["RAM (DRAM)","8-64 GB","150-300 ciclos","~50GB/s"],
            ["SSD NVMe","500GB-8TB","~10000 ciclos","~5GB/s"],
            ["HDD","1-20 TB","~10.000.000 ciclos","~150MB/s"],
          ].map(([n,s,l,b]) => <tr key={n}><td>{n}</td><td>{s}</td><td>{l}</td><td>{b}</td></tr>)}
        </tbody>
      </table>

      <h2>Cache Lines</h2>
      <CodeBlock language="bash" code={`; Cache lines são blocos de 64 bytes movidos entre cache e memória
; Quando você acessa 1 byte, o processador traz 64 bytes para o cache

; Consequência prática:
; Se você acessa array[0], o cache traz array[0..15] (16 ints de 4 bytes)
; Acessar array[1] logo depois é grátis (já no cache)!

; Verificar tamanho da cache line:
cat /sys/devices/system/cpu/cpu0/cache/index0/coherency_line_size
# 64 (bytes)`} />

      <h2>Localidade Espacial</h2>
      <CodeBlock language="nasm" filename="loc_espacial.asm" code={`; BOM — acesso sequencial (todos na mesma cache line):
    xor rcx, rcx
    lea rbx, [array]
.loop:
    mov rax, [rbx + rcx*8]   ; acesso sequencial — cada linha traz 8 elementos
    ; processar...
    inc rcx
    cmp rcx, N
    jl .loop

; RUIM — acesso com stride grande (cache line desperdiçada):
    xor rcx, rcx
.loop:
    mov rax, [rbx + rcx*512]  ; stride de 512 bytes — cada acesso é um miss!
    ; processar...
    inc rcx
    cmp rcx, N
    jl .loop

; MATRIX TRAVERSAL — Column-major vs Row-major:
; Em C, arrays 2D são row-major: matrix[row][col]
; Iterar por linhas (row-major) → bom cache behavior
; Iterar por colunas (column-major) → cache thrashing!`} />

      <h2>Cache Thrashing — O Inimigo</h2>
      <CodeBlock language="nasm" filename="thrashing.asm" code={`; Exemplo de thrashing: acessar elementos que mapeiam para o mesmo cache set
; Em cache set-associative de 8 vias com stride de 4096:
;   elementos em: 0, 4096, 8192, 12288 → conflito na mesma cache set!

; Solução: padding para evitar conflito
; struct Padding { int data; char pad[60]; }; // total 64 bytes = 1 cache line

; Exemplo prático com prefetch:
    lea rbx, [array]
    mov rcx, N
.loop:
    ; Prefetch próximo elemento ANTES de precisar:
    prefetcht0 [rbx + 64]    ; pré-buscar 1 cache line à frente
    
    mov rax, [rbx]           ; usa elemento atual (já no cache)
    ; ... processar ...
    
    add rbx, 8
    dec rcx
    jnz .loop`} />

      <h2>Instruções de Prefetch</h2>
      <CodeBlock language="nasm" filename="prefetch.asm" code={`; Prefetch — sugere ao hardware trazer dados antes de precisar:
prefetcht0 [addr]   ; nível temporal 0 — traz para L1, L2, L3
prefetcht1 [addr]   ; nível 1 — traz para L2, L3
prefetcht2 [addr]   ; nível 2 — traz para L3
prefetchnta [addr]  ; non-temporal — traz para L1, evita poluir L2/L3

; Non-temporal stores — escrever diretamente na RAM sem passar pelo cache
; Útil para streaming de grandes blocos:
movnti [dest + rax*4], ecx    ; escreve sem passar pelo cache
movntps [dest], xmm0           ; escreve 4 floats sem cache
sfence                          ; garante que writes chegaram à memória

; Flush cache line:
clflush [addr]      ; remove cache line da cache (util para segurança)`} />

      <h2>CLFLUSH para Segurança</h2>
      <AlertBox type="warning" title="Side-channel attacks">
        Spectre e Meltdown exploram o comportamento do cache para extrair dados secretos. CLFLUSH e técnicas de "constant-time programming" são usadas para mitigar esses ataques.
      </AlertBox>
      <CodeBlock language="nasm" filename="clflush.asm" code={`; Limpar chave da memória após uso:
    ; 1. Zerar a chave na memória
    xor eax, eax
    lea rdi, [chave_privada]
    mov rcx, 32     ; 32 bytes de chave
    rep stosb       ; preenche com zeros
    
    ; 2. Flushes do cache para garantir que a chave não ficou em cache:
    lea rdi, [chave_privada]
    clflush [rdi]
    clflush [rdi + 64]   ; garantir flush de todas as cache lines

    ; 3. Barreira de memória:
    mfence`} />

      <h2>MFENCE, LFENCE, SFENCE</h2>
      <CodeBlock language="nasm" filename="fence.asm" code={`; Barreiras de memória — garantem ordering:
mfence    ; Memory Fence — todas as loads e stores anteriores foram completados
lfence    ; Load Fence — todas as loads anteriores foram completados
sfence    ; Store Fence — todos os stores anteriores foram completados

; Quando usar:
; mfence: após writes que devem ser visíveis para outros threads/cores
; lfence: antes de loads que devem ver escritas de outros cores
; sfence: entre writes com movnti (non-temporal) e reads subsequentes

; Lock prefix — operações atômicas:
lock add [mem], 1        ; soma atômica (thread-safe)
lock xchg [mem], rax     ; troca atômica
lock cmpxchg [mem], rbx  ; compare-and-swap atômico`} />
    </PageContainer>
  );
}
