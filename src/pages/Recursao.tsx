import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Recursao() {
  return (
    <PageContainer title="Recursão em Assembly" subtitle="Funções que chamam a si mesmas — como a stack viabiliza recursão" difficulty="intermediario" timeToRead="15 min">
      <p>Recursão em Assembly funciona exatamente como em C — cada chamada de função empilha um novo frame na stack. Entender isso em Assembly revela como a recursão realmente funciona no hardware.</p>

      <h2>Como a Stack Viabiliza Recursão</h2>
      <p>Cada chamada de função cria um <strong>stack frame</strong>: um bloco na stack que contém o endereço de retorno e as variáveis locais. Chamadas recursivas empilham múltiplos frames.</p>
      <CodeBlock language="bash" code={`; Stack durante fatorial(3):
; fatorial(3) chama fatorial(2)
;   fatorial(2) chama fatorial(1)
;     fatorial(1) chama fatorial(0)
;       fatorial(0) retorna 1

; Estado da stack no ponto mais profundo:
; [endereço de retorno de fatorial(3)] ← RSP inicial
; [RSP de fatorial(3)]
; [endereço de retorno de fatorial(2)]
; [RSP de fatorial(2)]
; [endereço de retorno de fatorial(1)]
; [RSP de fatorial(1)]
; [endereço de retorno de fatorial(0)] ← RSP atual`} />

      <h2>Fatorial Recursivo</h2>
      <CodeBlock language="nasm" filename="fatorial.asm" code={`; fatorial(n) = n * fatorial(n-1)
; fatorial(0) = 1
; Argumento: rdi = n
; Retorno:   rax = n!

section .text
    global fatorial

fatorial:
    ; Prólogo — salva registradores que usaremos
    push rbp
    mov  rbp, rsp
    push rbx                ; salvamos rbx (callee-saved)

    ; Base case: if (n == 0) return 1
    cmp rdi, 0
    jne .recursivo
    mov rax, 1              ; return 1
    jmp .epilogo

.recursivo:
    ; Guardar n antes da chamada recursiva
    mov rbx, rdi            ; rbx = n (preservado)

    ; fatorial(n-1)
    dec rdi                 ; rdi = n - 1
    call fatorial           ; rax = fatorial(n-1)

    ; resultado = n * fatorial(n-1)
    imul rax, rbx           ; rax = rax * n

.epilogo:
    ; Epílogo — restaura registradores
    pop rbx
    pop rbp
    ret

; Programa principal:
section .text
    global _start
_start:
    mov rdi, 10             ; calcular 10!
    call fatorial
    ; rax = 3628800
    mov rdi, rax
    ; ... imprimir resultado ...
    mov rax, 60
    xor rdi, rdi
    syscall`} />

      <h2>Fibonacci Recursivo</h2>
      <CodeBlock language="nasm" filename="fibonacci.asm" code={`; fib(n) = fib(n-1) + fib(n-2)
; fib(0) = 0, fib(1) = 1
; Argumento: rdi = n
; Retorno:   rax = fib(n)

fibonacci:
    push rbp
    mov  rbp, rsp
    push rbx

    ; Base cases: if (n <= 1) return n
    cmp rdi, 1
    jle .base_case

    ; Salvar n
    mov rbx, rdi            ; rbx = n

    ; fib(n-1)
    dec rdi
    call fibonacci
    push rax                ; salvar fib(n-1) na stack!

    ; fib(n-2)
    lea rdi, [rbx - 2]      ; rdi = n-2
    call fibonacci
    ; rax = fib(n-2)

    ; resultado = fib(n-1) + fib(n-2)
    pop rbx                 ; rbx = fib(n-1) (recupera da stack)
    add rax, rbx            ; rax = fib(n-1) + fib(n-2)

    jmp .fim

.base_case:
    mov rax, rdi            ; return n (0 ou 1)

.fim:
    pop rbx
    pop rbp
    ret`} />

      <AlertBox type="warning" title="Stackoverflow!">
        Recursão profunda demais esgota o espaço da stack (tipicamente 8MB no Linux). Para n grande, use a versão iterativa ou <strong>tail call optimization</strong>.
      </AlertBox>

      <h2>Tail Call Optimization (TCO)</h2>
      <p>Quando a chamada recursiva é a <strong>última operação</strong> da função, podemos substituir CALL+RET por JMP, reutilizando o mesmo frame:</p>
      <CodeBlock language="nasm" filename="tail_call.asm" code={`; Fatorial com accumulator (tail-recursive):
; fatorial_tc(n, acc) = fatorial_tc(n-1, n*acc)
; fatorial_tc(0, acc) = acc
; fatorial(n) = fatorial_tc(n, 1)
;
; Argumentos: rdi = n, rsi = acc
; Retorno:    rax = n!

fatorial_tc:
    ; Base case:
    cmp rdi, 0
    jne .recursivo
    mov rax, rsi            ; return acc
    ret

.recursivo:
    ; Tail call: fatorial_tc(n-1, n*acc)
    imul rsi, rdi           ; acc = n * acc
    dec rdi                 ; n = n - 1
    ; Em vez de CALL + RET:
    jmp fatorial_tc         ; TCO! Sem novo frame na stack!
    ; Agora é O(1) de stack (iterativo na prática)`} />

      <h2>Quicksort Recursivo</h2>
      <CodeBlock language="nasm" filename="quicksort.asm" code={`; Quicksort em Assembly
; quicksort(arr, low, high)
; Argumentos: rdi=arr, rsi=low, rdx=high

quicksort:
    push rbp
    mov  rbp, rsp
    push rbx
    push r12
    push r13

    ; if (low >= high) return
    cmp rsi, rdx
    jge .fim

    ; Salvar argumentos
    mov rbx, rdi            ; rbx = arr
    mov r12, rsi            ; r12 = low
    mov r13, rdx            ; r13 = high

    ; pivot = arr[high]
    mov rcx, [rbx + r13*8]  ; pivot em rcx

    ; Particionar
    ; ... (implementação completa no capítulo ProjetoSort)

    ; Chamadas recursivas
    ; quicksort(arr, low, pivot_idx-1)
    ; quicksort(arr, pivot_idx+1, high)
    ; ...

.fim:
    pop r13
    pop r12
    pop rbx
    pop rbp
    ret`} />

      <h2>Hanoi Recursiva</h2>
      <CodeBlock language="nasm" filename="hanoi.asm" code={`; Torres de Hanoi — demonstra recursão elegante
; hanoi(n, from, to, via)
; Argumentos: rdi=n, rsi=from, rdx=to, rcx=via (strings)

section .data
    fmt_move db "Mover disco de peg %d para peg %d", 10, 0

section .text
    extern printf

hanoi:
    push rbp
    mov  rbp, rsp
    push rbx
    push r12
    push r13
    push r14

    ; if (n == 0) return
    cmp rdi, 0
    je  .fim

    ; Salvar argumentos
    mov rbx, rdi    ; n
    mov r12, rsi    ; from
    mov r13, rdx    ; to
    mov r14, rcx    ; via

    ; hanoi(n-1, from, via, to)
    lea rdi, [rbx - 1]
    mov rsi, r12
    mov rdx, r14    ; via
    mov rcx, r13    ; to
    call hanoi

    ; Imprimir movimento: from → to
    lea rdi, [rel fmt_move]
    mov rsi, r12
    mov rdx, r13
    call printf

    ; hanoi(n-1, via, to, from)
    lea rdi, [rbx - 1]
    mov rsi, r14    ; via
    mov rdx, r13    ; to
    mov rcx, r12    ; from
    call hanoi

.fim:
    pop r14
    pop r13
    pop r12
    pop rbx
    pop rbp
    ret`} />
    </PageContainer>
  );
}
