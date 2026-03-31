import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Loops() {
  return (
    <PageContainer title="Loops" subtitle="Implementando repetição em Assembly com contadores e condições" difficulty="iniciante" timeToRead="12 min">
      <p>Loops são implementados com saltos condicionais e contadores em Assembly. A chave é saber onde testar a condição para máxima eficiência.</p>

      <h2>Loop com Contador (Contando para Baixo)</h2>
      <AlertBox type="success" title="Idioma mais eficiente">
        Contar <strong>para baixo</strong> até zero é o padrão mais eficiente em x86-64. O <code>DEC reg; JNZ label</code> usa apenas 2 instruções e nenhuma comparação extra — o DEC já seta ZF!
      </AlertBox>
      <CodeBlock language="nasm" filename="loop_down.asm" code={`; Soma dos números de 1 a 100:
    xor rax, rax        ; rax = soma = 0
    mov rcx, 100        ; contador: de 100 até 1
.loop:
    add rax, rcx        ; soma += contador
    dec rcx             ; contador--
    jnz .loop           ; se contador != 0, repete

; Resultado em rax = 5050`} />

      <h2>Loop com Incremento</h2>
      <CodeBlock language="nasm" filename="loop_up.asm" code={`; Iterar array e imprimir (pseudocódigo)
; for (int i = 0; i < len; i++) { process(array[i]); }

    xor rbx, rbx        ; rbx = i = 0
    lea rcx, [array]    ; rcx = &array
    mov rdx, len        ; rdx = comprimento
.loop:
    cmp rbx, rdx        ; i < len?
    jge .loop_end       ; se i >= len, sai

    ; acessar array[i]:
    mov rax, [rcx + rbx*8]  ; rax = array[i]
    ; ... processar rax ...

    inc rbx             ; i++
    jmp .loop
.loop_end:`} />

      <h2>Loop LOOP (instrução dedicada)</h2>
      <CodeBlock language="nasm" filename="loop_inst.asm" code={`; Instrução LOOP usa RCX como contador implícito
; Decrementa RCX e pula se RCX != 0

    mov rcx, 5
.loop:
    ; corpo — executa 5 vezes
    loop .loop          ; rcx--; se rcx != 0, volta

; LOOP é mais lento que DEC/JNZ em CPUs modernas
; Use apenas quando a compactação de código importa mais que velocidade`} />

      <h2>Loop Infinito (daemon)</h2>
      <CodeBlock language="nasm" filename="loop_infinito.asm" code={`; Loop infinito — comum em ISRs e daemons
.loop:
    ; ... processar eventos ...
    jmp .loop

; Com HLT (halt — aguardar interrupção, economiza CPU)
.loop:
    hlt             ; para o processador até a próxima interrupção
    jmp .loop       ; continua após interrupção`} />

      <h2>Loop com Break Condicional</h2>
      <CodeBlock language="nasm" filename="loop_break.asm" code={`; Procurar primeiro zero em array:
    lea rbx, [array]
    xor rcx, rcx        ; índice = 0
.loop:
    mov al, [rbx + rcx] ; al = array[rcx]
    test al, al         ; al == 0?
    jz  .encontrou      ; sai se zero (break)
    inc rcx
    cmp rcx, 100        ; limite de 100 elementos
    jl  .loop
    ; não encontrou
    mov rcx, -1         ; retorna -1
    jmp .fim
.encontrou:
    ; rcx contém o índice
.fim:`} />

      <h2>Loop de String (REP prefix)</h2>
      <p>x86-64 tem um conjunto especial de instruções para operar em strings/arrays inteiros de forma eficiente:</p>
      <CodeBlock language="nasm" filename="rep.asm" code={`; MOVS — copiar bytes
; REP MOVSB — copia RCX bytes de [RSI] para [RDI]
    lea rsi, [origem]
    lea rdi, [destino]
    mov rcx, tamanho
    rep movsb           ; copia 1 byte por vez, RCX vezes
; variantes: rep movsw (word), rep movsd (dword), rep movsq (qword)

; STOS — preencher memória
; REP STOSB — preenche RCX bytes de [RDI] com AL
    lea rdi, [buffer]
    mov al, 0           ; valor a preencher
    mov rcx, 1024       ; quantos bytes
    rep stosb           ; memset(buffer, 0, 1024) em Assembly!
; variantes: stosw, stosd, stosq

; SCAS — procurar em string
; REPNE SCASB — procura AL em [RDI], RCX bytes, para quando encontra
    lea rdi, [string]
    mov al, 0           ; procurar null terminator
    mov rcx, -1         ; varremos até encontrar (ou -1 iterations)
    repne scasb         ; REPNE = "repeat while not equal"
    not rcx             ; rcx = comprimento (1-based)
    dec rcx             ; ajustar para 0-based

; CMPS — comparar strings
; REPE CMPSB — compara [RSI] com [RDI], RCX bytes
    lea rsi, [str1]
    lea rdi, [str2]
    mov rcx, len
    repe cmpsb          ; para quando diferem
    ; ZF=1 se iguais, ZF=0 se diferiram (RSI/RDI apontam para o byte que diferiu)`} />

      <h2>Loops com SIMD (Vetorização)</h2>
      <CodeBlock language="nasm" filename="simd_loop.asm" code={`; Loop vetorizado com SSE2 — processa 16 bytes por iteração!
; Equivale a: for (i=0; i<N; i++) dest[i] = src1[i] + src2[i] (byte adição)

    lea rsi, [src1]
    lea rdi, [src2]
    lea rdx, [dest]
    mov rcx, N / 16     ; N deve ser múltiplo de 16

.loop:
    movdqu xmm0, [rsi]   ; carrega 16 bytes de src1
    movdqu xmm1, [rdi]   ; carrega 16 bytes de src2
    paddb  xmm0, xmm1    ; soma 16 pares de bytes simultaneamente!
    movdqu [rdx], xmm0   ; salva 16 bytes no destino

    add rsi, 16
    add rdi, 16
    add rdx, 16
    dec rcx
    jnz .loop`} />

      <h2>Exemplos Clássicos</h2>
      <CodeBlock language="nasm" filename="exemplos_loops.asm" code={`; Fatorial de N (iterativo):
; n em rdi, resultado em rax
    mov rax, 1          ; rax = 1 (acumulador)
    cmp rdi, 0
    jle .fim            ; factorial(0) = 1
.loop:
    imul rax, rdi       ; rax *= n
    dec rdi             ; n--
    jnz .loop           ; enquanto n > 0
.fim:
    ; rax = n!

; Fibonacci iterativo (primeiros N termos):
    mov rcx, N          ; contador
    xor rax, rax        ; fib(0) = 0
    mov rbx, 1          ; fib(1) = 1
.fib_loop:
    ; rax = atual, rbx = próximo
    add rax, rbx        ; rax = atual + próximo
    xchg rax, rbx       ; swap: rbx = novo próximo, rax = anterior
    dec rcx
    jnz .fib_loop
    ; ao final, rax = fib(N-1), rbx = fib(N)`} />
    </PageContainer>
  );
}
