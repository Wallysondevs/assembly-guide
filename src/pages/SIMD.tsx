import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function SIMD() {
  return (
    <PageContainer title="Introdução a SIMD/SSE" subtitle="Single Instruction, Multiple Data — processamento paralelo no processador" difficulty="avancado" timeToRead="18 min">
      <p><strong>SIMD</strong> (Single Instruction, Multiple Data) é uma extensão do modelo convencional onde uma instrução opera em múltiplos dados simultaneamente. Em x86-64, as extensões SIMD são SSE, SSE2-4, AVX e AVX-512.</p>

      <h2>Por que SIMD?</h2>
      <ul>
        <li>Um loop que soma arrays de 1000 floats leva 1000 ciclos sem SIMD</li>
        <li>Com SSE (128-bit / 4 floats por operação): ~250 ciclos</li>
        <li>Com AVX (256-bit / 8 floats por operação): ~125 ciclos</li>
        <li>Com AVX-512 (512-bit / 16 floats por operação): ~63 ciclos</li>
        <li>Ganho de até 16× para operações com floats!</li>
      </ul>

      <h2>Registradores SIMD</h2>
      <table>
        <thead><tr><th>Extensão</th><th>Registradores</th><th>Tamanho</th><th>Capacidade</th></tr></thead>
        <tbody>
          <tr><td>SSE</td><td>XMM0-XMM15</td><td>128-bit</td><td>4×float ou 2×double ou 16×byte</td></tr>
          <tr><td>AVX</td><td>YMM0-YMM15</td><td>256-bit</td><td>8×float ou 4×double ou 32×byte</td></tr>
          <tr><td>AVX-512</td><td>ZMM0-ZMM31</td><td>512-bit</td><td>16×float ou 8×double ou 64×byte</td></tr>
        </tbody>
      </table>

      <AlertBox type="info" title="Relação entre XMM/YMM/ZMM">
        XMM0 são os bits 0-127 de YMM0, que são os bits 0-255 de ZMM0. Escrever em XMM0 (SSE) zera os bits superiores de YMM0/ZMM0. Escrever em YMM0 (AVX) zera os bits superiores de ZMM0.
      </AlertBox>

      <h2>Verificar Suporte a SSE/AVX</h2>
      <CodeBlock language="nasm" filename="check_simd.asm" code={`; CPUID para verificar suporte a SSE/AVX:
    mov eax, 1
    cpuid
    ; ECX e EDX contêm as feature flags

    ; SSE:  EDX bit 25
    bt  edx, 25
    jnc .no_sse

    ; SSE2: EDX bit 26
    bt  edx, 26
    jnc .no_sse2

    ; SSE3: ECX bit 0
    bt  ecx, 0
    jnc .no_sse3

    ; SSE4.1: ECX bit 19
    bt  ecx, 19
    jnc .no_sse41

    ; AVX: ECX bit 28
    bt  ecx, 28
    jnc .no_avx

    ; AVX-512: CPUID leaf 7, EBX bit 16
    mov eax, 7
    xor ecx, ecx
    cpuid
    bt  ebx, 16
    jnc .no_avx512`} />

      <h2>Primeiro Programa SSE</h2>
      <CodeBlock language="nasm" filename="sse_hello.asm" code={`; Somar 4 floats com SSE em vez de 4 operações separadas
section .data
    align 16               ; IMPORTANTE: dados SSE DEVEM ser alinhados a 16 bytes!
    a dd 1.0, 2.0, 3.0, 4.0    ; 4 floats
    b dd 5.0, 6.0, 7.0, 8.0    ; 4 floats
    
section .bss
    align 16
    result resd 4               ; resultado

section .text
_start:
    ; Carregar 4 floats de 'a' em XMM0:
    movaps xmm0, [a]           ; MOVAPS = move aligned packed single

    ; Carregar 4 floats de 'b' em XMM1:
    movaps xmm1, [b]

    ; Somar os 4 pares simultaneamente:
    addps  xmm0, xmm1          ; ADDPS = add packed single
    ; xmm0 agora contém: [1+5, 2+6, 3+7, 4+8] = [6, 8, 10, 12]

    ; Salvar resultado:
    movaps [result], xmm0

    ; Equivalente sem SIMD (4× mais lento!):
    ; movss xmm0, [a]
    ; addss xmm0, [b]
    ; movss [result], xmm0
    ; movss xmm0, [a+4]
    ; addss xmm0, [b+4]
    ; ... e assim por diante para cada par

    mov rax, 60
    xor rdi, rdi
    syscall`} />

      <h2>Sufixos de Instrução SIMD</h2>
      <table>
        <thead><tr><th>Sufixo</th><th>Significado</th><th>Exemplo</th></tr></thead>
        <tbody>
          {[
            ["ss","Scalar Single (1 float)","addss xmm0, xmm1"],
            ["sd","Scalar Double (1 double)","addsd xmm0, xmm1"],
            ["ps","Packed Single (4 floats)","addps xmm0, xmm1"],
            ["pd","Packed Double (2 doubles)","addpd xmm0, xmm1"],
            ["pi","Packed Integer","paddb xmm0, xmm1"],
            ["si","Scalar Integer",""],
          ].map(([s,m,e]) => <tr key={s}><td><code>{s}</code></td><td>{m}</td><td><code>{e}</code></td></tr>)}
        </tbody>
      </table>

      <h2>Prefixo MOV para SIMD</h2>
      <CodeBlock language="nasm" filename="mov_simd.asm" code={`; Carregamento alinhado (16-byte aligned) — mais rápido, causa #GP se não alinhado:
movaps xmm0, [addr]     ; Move Aligned Packed Single
movapd xmm0, [addr]     ; Move Aligned Packed Double
movdqa xmm0, [addr]     ; Move Double Quadword Aligned

; Carregamento não alinhado — mais lento, mas aceita qualquer endereço:
movups xmm0, [addr]     ; Move Unaligned Packed Single
movupd xmm0, [addr]     ; Move Unaligned Packed Double
movdqu xmm0, [addr]     ; Move Double Quadword Unaligned

; Scalar (apenas o valor baixo, não afeta outros):
movss  xmm0, [addr]     ; carrega 1 float (bits 0-31 de XMM0)
movsd  xmm0, [addr]     ; carrega 1 double (bits 0-63 de XMM0)`} />

      <h2>Loop Vetorizado com SSE</h2>
      <CodeBlock language="nasm" filename="loop_vetorizado.asm" code={`; C equivalente:
; void scale(float *arr, float scalar, int n) {
;   for (int i = 0; i < n; i++) arr[i] *= scalar;
; }
; Argumentos: rdi=arr, xmm0=scalar, rsi=n (múltiplo de 4)

scale_sse:
    ; Broadcast scalar para todos os 4 elementos de XMM1:
    shufps xmm0, xmm0, 0    ; xmm0 = [s, s, s, s]

    ; n em rsi, assumindo múltiplo de 4
    shr rsi, 2              ; rsi = n / 4 (número de iterações)
.loop:
    movaps xmm2, [rdi]      ; carrega 4 floats
    mulps  xmm2, xmm0       ; multiplica 4 × scalar
    movaps [rdi], xmm2      ; salva 4 floats
    add rdi, 16             ; avança 16 bytes (4 floats)
    dec rsi
    jnz .loop
    ret`} />
    </PageContainer>
  );
}
