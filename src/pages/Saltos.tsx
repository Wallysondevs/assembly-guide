import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Saltos() {
  return (
    <PageContainer title="Comparações e Saltos" subtitle="CMP, JMP, JE, JNE, JG, JL e toda a família de instruções de salto" difficulty="iniciante" timeToRead="15 min">
      <p>Saltos são o mecanismo de controle de fluxo em Assembly. JMP é o goto, e a família JCC (Jump if Condition Code) implementa if/else e loops.</p>

      <h2>JMP — Salto Incondicional</h2>
      <CodeBlock language="nasm" filename="jmp.asm" code={`; JMP — sempre pula, sem condição
jmp label           ; pula para o label
jmp rax             ; pula para o endereço em rax (salto indireto)
jmp [tabela + rax*8] ; jump table (muito rápido para switch)

; Tipos de salto:
; Short  (2 bytes): offset -128 a +127 bytes
; Near   (5 bytes): offset -2GB a +2GB (modo de 64-bit)
; Far    (não comum em 64-bit): para outros segmentos

; Labels convencionais:
_start:
    jmp .loop
.loop:
    ; ...
    jmp .loop       ; ponto é convenção para label local`} />

      <h2>CMP — Comparação</h2>
      <CodeBlock language="nasm" filename="cmp.asm" code={`; CMP — subtrai e descarta, mantém flags
cmp rax, rbx        ; calcula rax - rbx → seta flags
cmp rax, 0          ; compara com zero
cmp byte [mem], 'A' ; compara byte com literal ASCII
cmp [mem], rax      ; compara memória com registrador

; Após CMP, use JCC correspondente:
; Para SIGNED (números que podem ser negativos):
;   je  / jne  — igual / não igual
;   jl  / jge  — menor que / maior ou igual
;   jle / jg   — menor ou igual / maior que

; Para UNSIGNED (endereços, tamanhos):
;   je  / jne  — igual / não igual
;   jb  / jae  — abaixo / acima ou igual (Below/Above or Equal)
;   jbe / ja   — abaixo ou igual / acima

; DICA: Signed usa L/G (Less/Greater), Unsigned usa B/A (Below/Above)`} />

      <h2>Exemplos de Estruturas if/else</h2>
      <CodeBlock language="nasm" filename="if_else.asm" code={`; if (rax == 10) { ... }
cmp rax, 10
jne .fim_if         ; pula se NÃO for igual
    ; corpo do if
.fim_if:

; if (rax > rbx) { ... } else { ... }
cmp rax, rbx
jle .else_part      ; se rax <= rbx, vai para else
    ; corpo do if
    jmp .fim
.else_part:
    ; corpo do else
.fim:

; if (rax >= 0 && rax < 100)  — condição composta
cmp rax, 0
jl  .fora_range     ; signed: se rax < 0
cmp rax, 100
jge .fora_range     ; signed: se rax >= 100
    ; está no range
.fora_range:

; switch/case implementado com jump table:
; switch (rax) { case 0: ... case 1: ... case 2: ... }
cmp rax, 2
ja  .default        ; se rax > 2, vai para default
jmp [tabela + rax*8] ; pula para o endereço na tabela

tabela:
    dq .case_0
    dq .case_1
    dq .case_2

.case_0:
    ; código para case 0
    jmp .fim_switch
.case_1:
    ; código para case 1
    jmp .fim_switch
.case_2:
    ; código para case 2
.default:
.fim_switch:`} />

      <h2>Tabela Completa de JCC</h2>
      <CodeBlock language="bash" code={`# Saltos após CMP:
JE / JZ     — Equal / Zero          (ZF=1)
JNE / JNZ   — Not Equal / Not Zero  (ZF=0)

# Signed (use com números que podem ser negativos):
JL / JNGE   — Less Than             (SF≠OF)
JLE / JNG   — Less or Equal         (ZF=1 ou SF≠OF)
JG / JNLE   — Greater Than          (ZF=0 e SF=OF)
JGE / JNL   — Greater or Equal      (SF=OF)

# Unsigned (use com endereços, índices, tamanhos):
JB / JNAE   — Below (unsigned <)    (CF=1)
JBE / JNA   — Below or Equal        (CF=1 ou ZF=1)
JA / JNBE   — Above (unsigned >)    (CF=0 e ZF=0)
JAE / JNB   — Above or Equal        (CF=0)

# Flags específicas:
JC          — Carry                 (CF=1)
JNC         — No Carry              (CF=0)
JO          — Overflow              (OF=1)
JNO         — No Overflow           (OF=0)
JS          — Sign (negativo)       (SF=1)
JNS         — No Sign               (SF=0)
JP / JPE    — Parity Even           (PF=1)
JNP / JPO   — Parity Odd            (PF=0)

# Especial:
JCXZ        — CX é zero
JECXZ       — ECX é zero
JRCXZ       — RCX é zero`} />

      <h2>LOOP — Instrução de Loop Dedicada</h2>
      <CodeBlock language="nasm" filename="loop.asm" code={`; LOOP usa RCX como contador (decrementa e salta se RCX != 0)
mov rcx, 10         ; executar 10 vezes
.loop:
    ; ... corpo do loop ...
    loop .loop      ; rcx-- ; se rcx != 0, pula para .loop

; Variantes:
; LOOPE  / LOOPZ   — loop enquanto ZF=1 e RCX != 0
; LOOPNE / LOOPNZ  — loop enquanto ZF=0 e RCX != 0

; NOTA: LOOP é mais lento que DEC/JNZ em CPUs modernas!
; Prefira:
mov rcx, 10
.loop:
    ; ...
    dec rcx
    jnz .loop       ; mais rápido que LOOP`} />

      <h2>Saltos Indiretos</h2>
      <CodeBlock language="nasm" filename="jump_indirect.asm" code={`; Salto para endereço em registrador:
jmp rax              ; pula para endereço em rax

; Salto via tabela (switch/dispatch table):
; Muito eficiente para switch com muitos casos
lea rbx, [jump_table]
cmp rdi, 5
jae .invalid
jmp [rbx + rdi*8]   ; jump table de qwords

jump_table:
    dq .case_0
    dq .case_1
    dq .case_2
    dq .case_3
    dq .case_4

.case_0: ; ...
.case_1: ; ...`} />

      <AlertBox type="info" title="Short vs Near Jump">
        Quando o destino está próximo (dentro de -128 a +127 bytes), o assembler gera um <strong>short jump</strong> (2 bytes). Para destinos mais distantes, gera um <strong>near jump</strong> (5 bytes). O NASM faz isso automaticamente — você não precisa se preocupar, mas é bom saber para entender o binário gerado.
      </AlertBox>
    </PageContainer>
  );
}
