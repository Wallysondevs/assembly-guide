import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";

export default function ProjetoSort() {
  return (
    <PageContainer title="Projeto: Algoritmos de Ordenação" subtitle="Bubble Sort, Merge Sort e Quicksort em Assembly puro" difficulty="avancado" timeToRead="20 min">
      <p>Implementar algoritmos de ordenação em Assembly reforça o entendimento de ponteiros, recursão, e gerenciamento de stack. Comparando as implementações, você vê diretamente o custo de cada operação.</p>

      <h2>Bubble Sort</h2>
      <CodeBlock language="nasm" filename="bubble_sort.asm" code={`; bubble_sort(long *arr, long n)
; Ordena array de long em ordem crescente
; Entrada: rdi = arr, rsi = n

section .text
    global bubble_sort

bubble_sort:
    push rbp
    mov  rbp, rsp
    push rbx
    push r12
    push r13

    dec rsi             ; rsi = n-1 (número de passes)
    jle .fim            ; n <= 1, já está ordenado

    mov r12, rsi        ; r12 = outer loop counter

.outer:
    test r12, r12
    jle .fim

    xor r13, r13        ; r13 = inner index

.inner:
    cmp r13, r12
    jge .outer_next

    ; Comparar arr[i] e arr[i+1]:
    mov rax, [rdi + r13*8]
    mov rbx, [rdi + r13*8 + 8]
    cmp rax, rbx
    jle .no_swap

    ; Trocar arr[i] e arr[i+1]:
    mov [rdi + r13*8], rbx
    mov [rdi + r13*8 + 8], rax

.no_swap:
    inc r13
    jmp .inner

.outer_next:
    dec r12
    jmp .outer

.fim:
    pop r13
    pop r12
    pop rbx
    leave
    ret`} />

      <h2>Merge Sort</h2>
      <CodeBlock language="nasm" filename="merge_sort.asm" code={`; merge_sort(long *arr, long n)
; Divide e conquista — O(n log n)
; Entrada: rdi = arr, rsi = n

merge_sort:
    push rbp
    mov  rbp, rsp
    push rbx
    push r12
    push r13
    push r14

    cmp rsi, 1
    jle .base_case      ; n <= 1, já ordenado

    mov r12, rdi        ; salvar arr
    mov r13, rsi        ; salvar n

    ; mid = n/2:
    mov r14, rsi
    shr r14, 1          ; r14 = n/2

    ; Ordenar metade esquerda: merge_sort(arr, mid)
    mov rdi, r12
    mov rsi, r14
    call merge_sort

    ; Ordenar metade direita: merge_sort(arr + mid, n - mid)
    lea rdi, [r12 + r14*8]
    mov rsi, r13
    sub rsi, r14
    call merge_sort

    ; Merge das duas metades:
    mov rdi, r12
    mov rsi, r13
    mov rdx, r14
    call merge

.base_case:
    pop r14
    pop r13
    pop r12
    pop rbx
    leave
    ret

; merge(arr, n, mid) — merge das duas metades
; rdi = arr, rsi = n, rdx = mid
merge:
    push rbx
    push r12
    push r13
    push r14
    push r15

    ; Alocar buffer temporário (usa a stack):
    mov r12, rsi
    shl r12, 3          ; r12 = n * 8 bytes
    sub rsp, r12        ; alocar na stack

    ; Copiar para buffer:
    mov rdi, rsp        ; destino = buffer
    ; rdi original = arr
    ; (simplificado — implementação completa omite detalhes)

    ; Merge dos dois sub-arrays:
    xor r13, r13        ; índice esquerdo = 0
    mov r14, rdx        ; índice direito = mid
    xor r15, r15        ; índice do resultado = 0

.merge_loop:
    cmp r13, rdx        ; esq chegou ao meio?
    jge .copiar_restante_dir
    cmp r14, rsi        ; dir chegou ao fim?
    jge .copiar_restante_esq

    ; Comparar elementos:
    ; (implementação completa aqui)

.copiar_restante_esq:
.copiar_restante_dir:

    add rsp, r12        ; liberar buffer
    pop r15
    pop r14
    pop r13
    pop r12
    pop rbx
    ret`} />

      <h2>Quicksort</h2>
      <CodeBlock language="nasm" filename="quicksort.asm" code={`; quicksort(long *arr, long lo, long hi)
; Entrada: rdi = arr, rsi = lo, rdx = hi

quicksort:
    push rbp
    mov  rbp, rsp
    push rbx
    push r12
    push r13
    push r14
    push r15

    cmp rsi, rdx
    jge .fim            ; lo >= hi → done

    mov rbx, rdi        ; rbx = arr
    mov r12, rsi        ; r12 = lo
    mov r13, rdx        ; r13 = hi

    ; Partição (Lomuto partition scheme):
    ; pivot = arr[hi]
    mov r14, [rbx + r13*8]  ; r14 = pivot
    mov r15, r12             ; r15 = i = lo

.partition_loop:
    mov rax, r12             ; j loop
.j_loop:
    cmp rax, r13
    jge .partition_done

    cmp [rbx + rax*8], r14  ; arr[j] <= pivot?
    jg  .j_next

    ; Trocar arr[i] e arr[j]:
    mov rcx, [rbx + r15*8]
    mov rdx, [rbx + rax*8]
    mov [rbx + r15*8], rdx
    mov [rbx + rax*8], rcx
    inc r15

.j_next:
    inc rax
    jmp .j_loop

.partition_done:
    ; Colocar pivot na posição correta:
    mov rcx, [rbx + r15*8]
    mov rdx, [rbx + r13*8]
    mov [rbx + r15*8], rdx
    mov [rbx + r13*8], rcx
    ; r15 = pivot index

    ; Recursão na metade esquerda:
    mov rdi, rbx
    mov rsi, r12
    lea rdx, [r15 - 1]
    call quicksort

    ; Recursão na metade direita:
    mov rdi, rbx
    lea rsi, [r15 + 1]
    mov rdx, r13
    call quicksort

.fim:
    pop r15
    pop r14
    pop r13
    pop r12
    pop rbx
    leave
    ret`} />
    </PageContainer>
  );
}
