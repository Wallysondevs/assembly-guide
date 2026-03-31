import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Memoria() {
  return (
    <PageContainer title="Memória e Endereçamento" subtitle="Como o processador acessa a memória RAM em x86-64" difficulty="intermediario" timeToRead="18 min">
      <p>Em Assembly, você gerencia a memória diretamente. Não há garbage collector, não há abstrações — você controla exatamente onde os dados ficam e como são acessados.</p>

      <h2>Modelo de Memória Virtual</h2>
      <p>Em sistemas modernos, cada processo tem seu próprio <strong>espaço de endereçamento virtual</strong> — uma ilusão de que tem acesso a toda a memória. O kernel (com ajuda da MMU) mapeia endereços virtuais para endereços físicos.</p>
      <CodeBlock language="bash" code={`# Layout típico de memória virtual em Linux x86-64:
# (endereços crescem de baixo para cima)

0x0000000000000000    # Endereço null (acesso causa segfault)
       ...
0x0000000000400000    # Código do programa (.text)
0x0000000000600000    # Dados inicializados (.data)
0x0000000000601000    # Dados não inicializados (.bss)
       ...
0x0000000001234000    # Heap (cresce para cima com brk/mmap)
       ...
0x00007fff00000000    # Stack (cresce para baixo!)
0x00007fffffff0000    # Argumentos e variáveis de ambiente
0xFFFF800000000000    # Espaço do kernel (inacessível para userspace)`} />

      <h2>Modos de Endereçamento x86-64</h2>
      <p>x86-64 tem modos de endereçamento muito flexíveis. A sintaxe NASM usa colchetes <code>[]</code> para indicar acesso à memória:</p>

      <h3>1. Imediato (Immediate)</h3>
      <CodeBlock language="nasm" code={`mov rax, 42        ; rax = 42 (constante, não acessa memória)`} />

      <h3>2. Registrador (Register)</h3>
      <CodeBlock language="nasm" code={`mov rax, rbx       ; rax = rbx (copia de registrador para registrador)`} />

      <h3>3. Direto (Direct / Absolute)</h3>
      <CodeBlock language="nasm" code={`mov rax, [0x601000]       ; rax = *((qword*)0x601000) — acessa endereço fixo
mov rax, [variavel]       ; rax = conteúdo da variável`} />

      <h3>4. Indireto por Registrador</h3>
      <CodeBlock language="nasm" code={`mov rax, [rbx]     ; rax = *(rbx) — lê da memória apontada por rbx
mov [rdx], rax     ; *(rdx) = rax — escreve na memória apontada por rdx`} />

      <h3>5. Base + Deslocamento</h3>
      <CodeBlock language="nasm" code={`mov rax, [rbx + 8]       ; rax = *(rbx + 8)
mov rax, [rbp - 16]      ; rax = *(rbp - 16) — variável local na stack
mov rax, [rbx + 0x20]    ; deslocamento em hex`} />

      <h3>6. Base + Índice × Escala</h3>
      <CodeBlock language="nasm" code={`; Fórmula: base + índice * escala + deslocamento
; Escala pode ser: 1, 2, 4, ou 8

mov rax, [rbx + rcx*8]         ; rax = *(rbx + rcx*8)   — array de qwords
mov rax, [rbx + rcx*4 + 16]    ; rax = *(rbx + rcx*4 + 16) — struct array

; Acesso a elemento de array:
; array[i] onde array é int (4 bytes)
; lea rdx, [array]          ; rdx = endereço base do array
; mov eax, [rdx + rsi*4]    ; rax = array[rsi]`} />

      <AlertBox type="info" title="A instrução LEA">
        <code>LEA</code> (Load Effective Address) calcula o endereço mas NÃO acessa a memória. É como fazer o cálculo entre colchetes sem ler o conteúdo. Muito útil para aritmética rápida!
      </AlertBox>
      <CodeBlock language="nasm" filename="lea.asm" code={`lea rax, [rbx + 16]    ; rax = rbx + 16  (aritmética, não memória!)
lea rax, [rbx*4 + rbx] ; rax = rbx*5     (truque de multiplicação!)
lea rax, [variavel]    ; rax = endereço de 'variavel'`} />

      <h2>Especificadores de Tamanho</h2>
      <p>Ao acessar memória, você precisa especificar o tamanho:</p>
      <CodeBlock language="nasm" filename="tamanhos_mem.asm" code={`mov rax, [rbx]          ; 64-bit (ambíguo se destino for claro)
mov rax, qword [rbx]    ; 64-bit explícito — lê 8 bytes
mov eax, dword [rbx]    ; 32-bit — lê 4 bytes
mov ax,  word  [rbx]    ; 16-bit — lê 2 bytes
mov al,  byte  [rbx]    ; 8-bit  — lê 1 byte

; NECESSÁRIO quando destino não deixa claro o tamanho:
mov byte  [rbx], 42     ; escreve 1 byte
mov word  [rbx], 42     ; escreve 2 bytes
mov dword [rbx], 42     ; escreve 4 bytes
mov qword [rbx], 42     ; escreve 8 bytes`} />

      <h2>A Stack (Pilha)</h2>
      <p>A stack é uma região de memória que <strong>cresce para baixo</strong> em x86-64. RSP (Stack Pointer) aponta para o topo (o byte mais recentemente empilhado).</p>
      <CodeBlock language="nasm" filename="stack.asm" code={`; PUSH: diminui RSP em 8 e escreve o valor
push rax    ; equivalente a: sub rsp, 8; mov [rsp], rax

; POP: lê o valor e aumenta RSP em 8
pop rbx     ; equivalente a: mov rbx, [rsp]; add rsp, 8

; Exemplo de stack:
; RSP inicial: 0x7fff5000

push rax    ; RSP = 0x7fff4FF8  ← topo da stack
push rbx    ; RSP = 0x7fff4FF0
push rcx    ; RSP = 0x7fff4FE8

; Memória (crescendo para baixo):
; 0x7fff4FE8 → rcx  (topo — RSP aponta aqui)
; 0x7fff4FF0 → rbx
; 0x7fff4FF8 → rax

pop rcx     ; RSP = 0x7fff4FF0
pop rbx     ; RSP = 0x7fff4FF8
pop rax     ; RSP = 0x7fff5000  ← volta ao original`} />

      <AlertBox type="warning" title="Stack Alignment">
        Em x86-64 (System V AMD64 ABI), a stack deve estar alinhada em 16 bytes antes de uma instrução CALL. Caso contrário, instruções SIMD podem causar falhas. O compilador cuida disso automaticamente — você precisa cuidar ao chamar funções manualmente.
      </AlertBox>

      <h2>Acesso a Arrays em Memória</h2>
      <CodeBlock language="nasm" filename="arrays.asm" code={`section .data
    array dq 10, 20, 30, 40, 50   ; array de 5 qwords (8 bytes cada)

section .text
    ; Acessar array[2] (terceiro elemento, índice base-0)
    lea rbx, [array]              ; rbx = endereço base do array
    mov rax, [rbx + 2*8]         ; rax = array[2] = 30

    ; Loop pelo array
    xor rcx, rcx                  ; rcx = 0 (índice)
.loop:
    mov rax, [rbx + rcx*8]       ; rax = array[rcx]
    ; ... processar rax ...
    inc rcx
    cmp rcx, 5                    ; array tem 5 elementos
    jl .loop                      ; loop enquanto rcx < 5`} />

      <h2>Heap e Alocação Dinâmica</h2>
      <p>Em Assembly puro, você pode usar syscalls para alocar memória no heap:</p>
      <CodeBlock language="nasm" filename="heap.asm" code={`; mmap — mapear memória anonima (equivalente ao malloc)
mov rax, 9           ; syscall: mmap
mov rdi, 0           ; addr: deixa o kernel escolher
mov rsi, 4096        ; length: 1 página (4KB)
mov rdx, 3           ; prot: PROT_READ | PROT_WRITE
mov r10, 0x22        ; flags: MAP_PRIVATE | MAP_ANONYMOUS
mov r8,  -1          ; fd: -1 (anônimo)
mov r9,  0           ; offset: 0
syscall              ; rax = ponteiro para a memória alocada

; Verificar erro
cmp rax, -1
je  .erro

mov [ponteiro], rax  ; salva o ponteiro`} />
    </PageContainer>
  );
}
