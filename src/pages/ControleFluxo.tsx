import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ControleFluxo() {
  return (
    <PageContainer title="Labels e Controle de Fluxo" subtitle="Estruturando programas com labels, if/else e desvios condicionais" difficulty="iniciante" timeToRead="12 min">
      <p>Em Assembly, não há <code>if</code>, <code>while</code> ou <code>for</code> — existem apenas labels e saltos. Toda estrutura de controle de alto nível é construída sobre esses blocos básicos.</p>

      <h2>Labels</h2>
      <CodeBlock language="nasm" filename="labels.asm" code={`; Labels são nomes para endereços de memória
; Podem ser globais (sem ponto) ou locais (com ponto)

_start:             ; label global — exportado ao linker
    jmp .loop       ; pula para label local

.loop:              ; label local — visível apenas no contexto atual
    ; ...

; Labels locais (com ponto) podem ser reutilizados:
funcao1:
    .loop:          ; .loop é local para funcao1
    ...

funcao2:
    .loop:          ; .loop diferente para funcao2
    ...`} />

      <h2>if — Condição Simples</h2>
      <CodeBlock language="nasm" filename="if_simple.asm" code={`; C: if (a == b) { a++; }
; Assembly:
;   a em rax, b em rbx
cmp rax, rbx
jne .fim_if         ; NÃO igual → pula o corpo
    inc rax         ; incrementa a
.fim_if:
; continua...`} />

      <h2>if/else</h2>
      <CodeBlock language="nasm" filename="if_else.asm" code={`; C: if (a > b) { resultado = a; } else { resultado = b; }
; a=rax, b=rbx, resultado=rcx
cmp rax, rbx        ; compara a com b
jle .else           ; se a <= b, vai para else
    ; -- if branch: a > b --
    mov rcx, rax    ; resultado = a
    jmp .fim
.else:
    ; -- else branch: a <= b --
    mov rcx, rbx    ; resultado = b
.fim:
; rcx = max(a, b)

; Versão mais eficiente com CMOV:
cmp rax, rbx
cmovle rax, rbx     ; rax = rbx se rax <= rbx
; rax = max(a, b) sem branch`} />

      <h2>if/else if/else</h2>
      <CodeBlock language="nasm" filename="elif.asm" code={`; C: if (x < 0) { neg(x); }
;    else if (x == 0) { x = 1; }
;    else { x *= 2; }
; x em rax

cmp rax, 0
jl  .negativo       ; se x < 0
jg  .positivo       ; se x > 0
; caso intermediário: x == 0
    mov rax, 1
    jmp .fim

.negativo:
    neg rax
    jmp .fim

.positivo:
    shl rax, 1      ; x *= 2

.fim:`} />

      <h2>while Loop</h2>
      <CodeBlock language="nasm" filename="while.asm" code={`; C: while (i < 10) { i++; }
; i em rcx
    xor rcx, rcx        ; i = 0
.while_cond:
    cmp rcx, 10
    jge .while_end      ; sai se i >= 10
    ; corpo do while:
    inc rcx             ; i++
    jmp .while_cond
.while_end:

; Alternativa mais eficiente (testa condição no final):
; C: do { i++; } while (i < 10);
    xor rcx, rcx
.do_while:
    inc rcx
    cmp rcx, 10
    jl .do_while`} />

      <h2>for Loop — Padrão Idiomático</h2>
      <CodeBlock language="nasm" filename="for.asm" code={`; C: for (int i = 0; i < N; i++) { ... }
; Padrão idiomático Assembly: contar para baixo (mais eficiente!)
; Contar de N-1 até 0 → usa apenas DEC e JNZ (sem CMP separado)

    mov rcx, N          ; rcx = N (contador)
.loop:
    ; ... corpo do loop ... (use rcx como índice se necessário)
    dec rcx             ; rcx--
    jnz .loop           ; se rcx != 0, repete

; Para acessar elementos por índice:
    mov rcx, 10         ; N = 10
    lea rbx, [array]    ; rbx = endereço do array
.loop:
    ; calcular índice atual: i = N - rcx
    ; (ou simplesmente iterar de trás para frente)
    mov rax, [rbx + rcx*8 - 8]  ; array[i-1] (índice 0-based)
    ; ... processar rax ...
    dec rcx
    jnz .loop`} />

      <h2>Implementando switch/case</h2>
      <CodeBlock language="nasm" filename="switch.asm" code={`; C: switch (cmd) {
;      case 0: ...; break;
;      case 1: ...; break;
;      case 2: ...; break;
;      default: ...;
;    }

; Método 1: Encadeamento de CMP/JE (simples, lento para muitos casos)
    cmp rdi, 0
    je  .case0
    cmp rdi, 1
    je  .case1
    cmp rdi, 2
    je  .case2
    jmp .default

.case0:
    ; ...
    jmp .fim
.case1:
    ; ...
    jmp .fim
.case2:
    ; ...
    jmp .fim
.default:
    ; ...
.fim:

; Método 2: Jump Table (rápido, constante O(1))
    cmp rdi, 2          ; verificar range
    ja  .default        ; se fora do range
    jmp [tabela + rdi*8] ; pular direto!

tabela:
    dq .case0
    dq .case1
    dq .case2`} />

      <h2>Estruturas Aninhadas</h2>
      <CodeBlock language="nasm" filename="aninhado.asm" code={`; Loop aninhado (matriz 3×3):
; for (int i = 0; i < 3; i++)
;   for (int j = 0; j < 3; j++)
;     matrix[i][j] = i * 3 + j;

    xor rbx, rbx        ; i = 0
.outer_loop:
    cmp rbx, 3
    jge .outer_end

    xor rcx, rcx        ; j = 0
.inner_loop:
    cmp rcx, 3
    jge .inner_end

    ; calcular índice: i*3 + j
    lea rax, [rbx + rbx*2] ; rax = i * 3
    add rax, rcx           ; rax = i*3 + j

    ; escrever: matrix[i*3 + j] = rax
    mov [matrix + rax*4], eax

    inc rcx
    jmp .inner_loop
.inner_end:

    inc rbx
    jmp .outer_loop
.outer_end:`} />

      <AlertBox type="info" title="Dica de Estilo">
        Use labels descritivos e consistentes. Convenções comuns: <code>.loop</code>, <code>.loop_end</code>, <code>.if_true</code>, <code>.else</code>, <code>.fim</code>, <code>.error</code>. O ponto no início indica label local.
      </AlertBox>
    </PageContainer>
  );
}
