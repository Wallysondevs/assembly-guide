import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Otimizacao() {
  return (
    <PageContainer title="Otimização de Performance" subtitle="Técnicas práticas para extrair máxima velocidade do hardware" difficulty="expert" timeToRead="20 min">
      <p>Otimizar Assembly vai além de saber as instruções — é entender o hardware profundamente e escrever código que trabalha com, não contra, as características do processador.</p>

      <h2>1. Meça Antes de Otimizar</h2>
      <CodeBlock language="nasm" filename="benchmark.asm" code={`; Medir ciclos com RDTSC:
section .text
    global benchmark

benchmark:
    ; Leitura inicial:
    rdtsc                   ; EDX:EAX = TSC
    shl rdx, 32
    or  rax, rdx            ; rax = TSC inicial
    push rax                ; salvar

    ; ... código a medir ...
    call funcao_a_medir

    ; Leitura final:
    rdtsc
    shl rdx, 32
    or  rax, rdx            ; rax = TSC final

    pop rbx                 ; rbx = TSC inicial
    sub rax, rbx            ; rax = ciclos gastos
    ret

; Versão mais precisa com RDTSCP (serializado):
    rdtscp                  ; espera instruções anteriores completarem
    shl rdx, 32
    or  rax, rdx
    push rax
    ; ... código ...
    rdtscp
    shl rdx, 32
    or  rax, rdx
    pop rbx
    sub rax, rbx`} />

      <h2>2. Escolha de Instrução Correta</h2>
      <CodeBlock language="nasm" filename="inst_choice.asm" code={`; MULTIPLICAÇÃO POR CONSTANTE — nunca use MUL para potências de 2 ou pequenas:
; Ruim:
imul rax, rax, 8        ; latência 3 ciclos

; Bom:
shl rax, 3              ; latência 1 ciclo, throughput 0.5

; Para multiplicar por 3, 5, 6, 9, 10 — use LEA:
lea rax, [rax + rax*2]  ; rax * 3 — 1 ciclo
lea rax, [rax + rax*4]  ; rax * 5 — 1 ciclo
lea rax, [rax*2 + rax*4] ; rax * 6 — 1 ciclo + 1 ciclo
lea rax, [rax + rax*8]  ; rax * 9 — 1 ciclo

; ZERAGEM — use XOR não MOV:
xor eax, eax            ; 2 bytes, zero-extends rax
; mov rax, 0            ; 5-7 bytes, mais lento

; NOP — use os NOPs corretos:
nop                     ; 1 byte
xchg eax, eax           ; 1 byte (alternativo)
; Para alinhar loops (use NOPs multi-byte):
nop DWORD [eax]         ; 4 bytes, 1 ciclo de NOP
; GAS: .byte 0x0f, 0x1f, 0x44, 0x00, 0x00 — 5-byte NOP`} />

      <h2>3. Loop Unrolling</h2>
      <CodeBlock language="nasm" filename="unroll.asm" code={`; Loop normal — overhead do dec+jnz por iteração:
    mov rcx, N
.loop:
    mov rax, [rbx]
    add rax, [rbx + 8]
    mov [rdx], rax
    add rbx, 8
    add rdx, 8
    dec rcx
    jnz .loop

; Loop unrolled 4× — 4× menos overhead:
    shr rcx, 2          ; N/4 iterações
.loop_4x:
    mov rax, [rbx + 0]
    add rax, [rbx + 8]
    mov [rdx + 0], rax

    mov rax, [rbx + 16]
    add rax, [rbx + 24]
    mov [rdx + 8], rax

    mov rax, [rbx + 32]
    add rax, [rbx + 40]
    mov [rdx + 16], rax

    mov rax, [rbx + 48]
    add rax, [rbx + 56]
    mov [rdx + 24], rax

    add rbx, 64
    add rdx, 32
    dec rcx
    jnz .loop_4x
    ; Tratar os últimos (N % 4) elementos separadamente`} />

      <h2>4. Pressure de Registradores</h2>
      <CodeBlock language="nasm" filename="reg_pressure.asm" code={`; x86-64 tem 16 registradores gerais — use todos!
; Variáveis que não cabem em registradores vão para a stack (mais lento)

; Calcular com muitas variáveis:
mov rax, [a]          ; a
mov rbx, [b]          ; b
mov rcx, [c]          ; c
mov rdx, [d]          ; d
mov rsi, [e]          ; e
mov rdi, [f]          ; f
mov r8,  [g]          ; g
mov r9,  [h]          ; h
mov r10, [i]          ; i
mov r11, [j]          ; j (10 variáveis em registradores!)

; Operações com XMM para mais variáveis:
; movsd xmm0..15 = 16 variáveis float em registradores`} />

      <h2>5. Alinhamento de Código</h2>
      <CodeBlock language="nasm" filename="alinhamento.asm" code={`; Alinhar início de loops melhora fetch de instruções:
; (processador busca 16/32 bytes de cada vez)

    align 16               ; alinha próxima instrução a 16 bytes
.loop:
    ; ... corpo do loop ...
    dec rcx
    jnz .loop

; Alinhar funções:
    align 64               ; algumas CPUs buscam 64 bytes por vez
minha_funcao:
    push rbp
    mov rbp, rsp
    ; ...`} />

      <h2>6. Strength Reduction</h2>
      <CodeBlock language="nasm" filename="strength.asm" code={`; Substituir operações caras por equivalentes mais baratos:

; DIVISÃO → MULTIPLICAÇÃO PELO RECÍPROCO:
; div é muito lento! Multiplicar pelo recíproco é muito mais rápido.
; Para divisão por constante, o compilador faz isso automaticamente.

; x / 7 → x * (magic_number) >> shift
; O compilador C calcula magic_number para você!
; Em Assembly manual, você pode pré-calcular:
; x/7: multiply by 0x2492492492492493, shr 2 (para 64-bit)

; MÓDULO POR POTÊNCIA DE 2 → AND:
; x % 8  → x & 7    (mais rápido!)
; x % 16 → x & 15

; BRANCH-FREE min/max:
; min(a, b) com CMOV:
    cmp rax, rbx
    cmovg rax, rbx     ; rax = min(rax, rbx)

; VALOR ABSOLUTO:
    mov rbx, rax
    neg rbx
    test rax, rax
    cmovs rax, rbx`} />

      <AlertBox type="success" title="Profiler primeiro!">
        Antes de otimizar qualquer coisa, use um profiler (perf, VTune, gprof) para identificar exatamente qual parte do código é o gargalo. Otimizar o código errado é desperdício de tempo. 90% do tempo é gasto em 10% do código.
      </AlertBox>
    </PageContainer>
  );
}
