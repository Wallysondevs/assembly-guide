import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Aritmetica() {
  return (
    <PageContainer title="Operações Aritméticas" subtitle="ADD, SUB, MUL, DIV, IMUL, IDIV, INC, DEC e variações" difficulty="iniciante" timeToRead="20 min">
      <p>As instruções aritméticas são o coração de qualquer cálculo em Assembly. x86-64 tem instruções tanto para aritmética sem sinal quanto com sinal.</p>

      <h2>ADD — Adição</h2>
      <CodeBlock language="nasm" filename="add.asm" code={`; ADD destino, fonte  (destino = destino + fonte)
add rax, rbx         ; rax = rax + rbx
add rax, 10          ; rax = rax + 10
add rax, [mem]       ; rax = rax + conteúdo da memória
add [mem], rax       ; memória = memória + rax
add [mem], 5         ; memória = memória + 5

; Flags afetadas: CF, OF, SF, ZF, AF, PF

; Detectar overflow unsigned (carry):
add rax, rbx
jc  overflow_unsigned   ; CF=1 se houve carry

; Detectar overflow signed:
add rax, rbx
jo  overflow_signed     ; OF=1 se houve overflow`} />

      <h2>ADC — Adição com Carry</h2>
      <CodeBlock language="nasm" filename="adc.asm" code={`; ADC (Add with Carry) — usado para números maiores que 64-bit
; Simular adição de 128-bit:
; [rdx:rax] + [rbx:rcx]
add rax, rcx          ; soma os 64-bits baixos (pode gerar carry)
adc rdx, rbx          ; soma os 64-bits altos + carry do anterior`} />

      <h2>SUB — Subtração</h2>
      <CodeBlock language="nasm" filename="sub.asm" code={`; SUB destino, fonte  (destino = destino - fonte)
sub rax, rbx         ; rax = rax - rbx
sub rax, 5           ; rax = rax - 5
sub [mem], rax       ; memória = memória - rax

; Flags afetadas: CF, OF, SF, ZF, AF, PF
; CF = 1 se houve borrow (resultado negativo em unsigned)

; NEG — Negação (complemento de dois)
neg rax              ; rax = -rax (0 - rax)
neg [mem]            ; nega valor na memória`} />

      <h2>INC e DEC — Incremento e Decremento</h2>
      <CodeBlock language="nasm" filename="inc_dec.asm" code={`inc rax       ; rax = rax + 1 (NÃO afeta CF!)
dec rax       ; rax = rax - 1 (NÃO afeta CF!)
inc byte [mem]  ; incrementa byte na memória
dec word [mem]  ; decrementa word na memória

; ATENÇÃO: INC/DEC não afetam o Carry Flag (CF)!
; Por isso, para loops, às vezes ADD/SUB são preferidos
; para compatibilidade com verificações de overflow`} />

      <h2>MUL — Multiplicação sem Sinal</h2>
      <AlertBox type="info" title="MUL é diferente!">
        MUL só tem UM operando explícito. O outro operando está implicitamente em RAX. O resultado vai para RDX:RAX (128 bits)!
      </AlertBox>
      <CodeBlock language="nasm" filename="mul.asm" code={`; MUL fonte  (RDX:RAX = RAX × fonte)
; O multiplicador implícito é sempre AL/AX/EAX/RAX

; 8-bit: AX = AL × fonte8
mul bl         ; AX = AL × BL

; 16-bit: DX:AX = AX × fonte16
mul bx         ; DX:AX = AX × BX

; 32-bit: EDX:EAX = EAX × fonte32
mul ebx        ; EDX:EAX = EAX × EBX

; 64-bit: RDX:RAX = RAX × fonte64
mul rbx        ; RDX:RAX = RAX × RBX

; Exemplo prático — multiplicar rax × 5:
mov rax, 10
mov rbx, 5
mul rbx        ; RDX:RAX = 10 × 5 = 50
               ; RAX = 50, RDX = 0`} />

      <h2>IMUL — Multiplicação com Sinal</h2>
      <p>IMUL tem três formas — mais flexível que MUL:</p>
      <CodeBlock language="nasm" filename="imul.asm" code={`; Forma 1: como MUL (1 operando explícito)
; RDX:RAX = RAX × fonte (com sinal)
imul rbx

; Forma 2: 2 operandos
; dest = dest × fonte (overflow é perdido silenciosamente)
imul rax, rbx         ; rax = rax × rbx
imul rax, [mem]       ; rax = rax × memória

; Forma 3: 3 operandos (mais útil!)
; dest = fonte1 × imediato
imul rax, rbx, 5      ; rax = rbx × 5
imul rax, rbx, 100    ; rax = rbx × 100
imul rax, [mem], 7    ; rax = memória × 7

; A forma 3 é a mais usada pois permite multiplicação por constante
; sem usar um registrador extra e sem acumulador implícito`} />

      <h2>DIV — Divisão sem Sinal</h2>
      <AlertBox type="danger" title="Cuidado com divisão por zero!">
        Divisão por zero causa uma exceção #DE (Divide Error) que termina o programa. Sempre verifique o divisor antes de dividir!
      </AlertBox>
      <CodeBlock language="nasm" filename="div.asm" code={`; DIV fonte — divisão sem sinal
; Quociente → RAX (ou AL/AX/EAX dependendo do tamanho)
; Resto     → RDX (ou AH/DX/EDX)

; Antes de DIV, RDX deve ser zerado (ou conter parte alta do numerador)!

; Exemplo: 100 ÷ 7
xor rdx, rdx          ; zerar RDX (parte alta do numerador)
mov rax, 100          ; numerador em RAX
mov rbx, 7            ; divisor
div rbx               ; RAX = 100 ÷ 7 = 14, RDX = 100 % 7 = 2

; Tamanhos:
; 8-bit:  AX ÷ fonte8  → AL = quociente, AH = resto
; 16-bit: DX:AX ÷ fonte16 → AX = quociente, DX = resto
; 32-bit: EDX:EAX ÷ fonte32 → EAX = quociente, EDX = resto
; 64-bit: RDX:RAX ÷ fonte64 → RAX = quociente, RDX = resto

; Cuidado com divisão que gera quociente maior que o registrador destino!
; Ex: 1000 ÷ 1 com numerador em AX e RDX não zerado → overflow exception`} />

      <h2>IDIV — Divisão com Sinal</h2>
      <CodeBlock language="nasm" filename="idiv.asm" code={`; IDIV — como DIV mas com sinal
; Antes do IDIV, deve-se fazer extensão de sinal de RAX para RDX:RAX

; Extensão de sinal com CDQ/CQO:
mov rax, -17
cqo              ; sign-extend RAX → RDX:RAX (copia bit de sinal para RDX)
mov rbx, 5
idiv rbx         ; RAX = -17 ÷ 5 = -3, RDX = -17 % 5 = -2

; Instruções de extensão de sinal:
; CBW   — sign-extend AL → AX
; CWD   — sign-extend AX → DX:AX
; CDQ   — sign-extend EAX → EDX:EAX
; CQO   — sign-extend RAX → RDX:RAX`} />

      <h2>Otimizações com Shifts</h2>
      <CodeBlock language="nasm" filename="opt_arith.asm" code={`; Multiplicação por potência de 2 → SHL (muito mais rápido!)
shl rax, 1        ; rax = rax × 2
shl rax, 2        ; rax = rax × 4
shl rax, 3        ; rax = rax × 8
shl rax, 10       ; rax = rax × 1024

; Divisão por potência de 2 → SHR (sem sinal)
shr rax, 1        ; rax = rax ÷ 2
shr rax, 3        ; rax = rax ÷ 8

; Divisão com sinal → SAR (mantém bit de sinal)
sar rax, 2        ; rax = rax ÷ 4 (signed)

; LEA para multiplicação por números como 3, 5, 9:
lea rax, [rax + rax*2]   ; rax = rax + rax×2 = rax × 3
lea rax, [rax + rax*4]   ; rax = rax + rax×4 = rax × 5
lea rax, [rax + rax*8]   ; rax = rax + rax×8 = rax × 9`} />

      <h2>Exemplos Práticos</h2>
      <CodeBlock language="nasm" filename="exemplos_arit.asm" code={`; Calcular: resultado = (a + b) * c - d
; Assumindo: a=rdi, b=rsi, c=rdx, d=rcx

mov rax, rdi          ; rax = a
add rax, rsi          ; rax = a + b
imul rax, rdx         ; rax = (a + b) * c
sub rax, rcx          ; rax = (a + b) * c - d
; resultado em rax

; Verificar se número é par ou ímpar:
mov rax, numero
test rax, 1           ; AND com 1 (testa bit 0)
jz  .par              ; ZF=1 → bit 0 era 0 → par
; .impar:
jmp .impar
.par:
    ; é par

; Calcular valor absoluto:
mov rax, numero
cmp rax, 0
jge .positivo
neg rax               ; nega se negativo
.positivo:`} />
    </PageContainer>
  );
}
