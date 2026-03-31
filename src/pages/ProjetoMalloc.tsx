import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ProjetoMalloc() {
  return (
    <PageContainer title="Projeto: Malloc Próprio" subtitle="Implementar um alocador de memória simples em Assembly" difficulty="expert" timeToRead="25 min">
      <p>Implementar um alocador de memória (malloc/free) em Assembly é um projeto avançado que demonstra gerenciamento de heap, estruturas de dados e syscalls de forma integrada.</p>

      <h2>Estratégia: First-Fit com Free List</h2>
      <CodeBlock language="bash" code={`# Layout do nosso heap:
# Cada bloco tem um header:
# [size (8 bytes) | flags (8 bytes) | dados ...]
#
# flags bit 0: 1 = livre, 0 = alocado
#
# O heap cresce via sys_brk
# A "free list" é uma lista ligada implícita de blocos livres
# Algoritmo: First-Fit (primeiro bloco livre que cabe)`} />

      <h2>Inicialização e BRK</h2>
      <CodeBlock language="nasm" filename="mymalloc.asm" code={`; mymalloc.asm — alocador de memória simples

HEADER_SIZE equ 16      ; 8 bytes size + 8 bytes flags
FLAG_FREE   equ 1       ; bit 0 = livre

section .bss
    heap_start  resq 1  ; início do heap
    heap_end    resq 1  ; fim atual do heap

section .text
    global my_malloc
    global my_free

; Inicializar o heap (chamado automaticamente na primeira alocação):
init_heap:
    cmp qword [heap_start], 0
    jne .already_inited

    ; sys_brk(0) retorna o início do heap:
    mov rax, 12         ; sys_brk
    xor rdi, rdi        ; addr = 0 → retorna brk atual
    syscall
    mov [heap_start], rax
    mov [heap_end], rax
.already_inited:
    ret

; Expandir o heap por N bytes:
; Entrada: rdi = bytes a adicionar
; Saída: rax = ponteiro para nova área (ou -1 se falhar)
expand_heap:
    mov rax, [heap_end]     ; rax = brk atual
    add rax, rdi            ; rax = novo brk desejado
    
    ; sys_brk(novo_brk):
    mov rdi, rax
    mov rax, 12
    syscall
    
    ; Verificar se expandiu corretamente:
    cmp rax, rdi
    jne .falhou
    
    ; Salvar novo heap_end:
    mov [heap_end], rax
    ret
.falhou:
    mov rax, -1
    ret

; my_malloc(size_t size) → void*
; Entrada: rdi = tamanho solicitado
; Saída: rax = ponteiro para dados (ou NULL se falhar)
my_malloc:
    push rbx
    push r12
    
    call init_heap
    
    ; Alinhar tamanho para 8 bytes:
    add rdi, 7
    and rdi, ~7             ; rdi = aligned size
    
    mov r12, rdi            ; salvar tamanho
    
    ; Procurar bloco livre (first-fit):
    mov rbx, [heap_start]
.search:
    cmp rbx, [heap_end]
    jge .nao_encontrou
    
    ; Verificar se bloco é livre E grande o suficiente:
    test qword [rbx + 8], FLAG_FREE
    jz  .proximo            ; não é livre
    
    cmp qword [rbx], r12    ; tamanho >= solicitado?
    jl  .proximo
    
    ; ENCONTROU bloco livre!
    ; Marcar como alocado:
    and qword [rbx + 8], ~FLAG_FREE
    
    ; Retornar ponteiro para dados:
    lea rax, [rbx + HEADER_SIZE]
    jmp .fim

.proximo:
    ; Avançar para o próximo bloco:
    add rbx, HEADER_SIZE
    add rbx, [rbx - HEADER_SIZE] ; rbx += tamanho do bloco atual
    jmp .search

.nao_encontrou:
    ; Expandir o heap:
    lea rdi, [r12 + HEADER_SIZE]
    call expand_heap
    
    cmp rax, -1
    je  .falhou
    
    ; rax = antigo heap_end = início do novo bloco:
    ; (antes da expansão, heap_end era o antigo fim = novo bloco)
    ; Precisamos do endereço antes da expansão:
    mov rax, [heap_end]
    sub rax, r12
    sub rax, HEADER_SIZE         ; rax = endereço do novo bloco
    
    ; Escrever header:
    mov [rax], r12               ; size
    mov qword [rax + 8], 0       ; flags = alocado
    
    lea rax, [rax + HEADER_SIZE]
    jmp .fim

.falhou:
    xor rax, rax                 ; return NULL
    
.fim:
    pop r12
    pop rbx
    ret

; my_free(void *ptr)
; Entrada: rdi = ponteiro para dados (retornado pelo malloc)
my_free:
    test rdi, rdi
    jz  .fim                     ; free(NULL) é no-op
    
    ; Recuar para o header:
    sub rdi, HEADER_SIZE
    
    ; Marcar como livre:
    or qword [rdi + 8], FLAG_FREE
    
.fim:
    ret`} />

      <AlertBox type="info" title="Melhorias Possíveis">
        Este é um alocador mínimo para fins educacionais. Um malloc real inclui: coalescing (juntar blocos livres adjacentes), splitting (dividir blocos grandes), múltiplas estratégias (best-fit, buddy system), arenas por thread (thread-safety), e mmap para blocos grandes.
      </AlertBox>

      <h2>Testando o Alocador</h2>
      <CodeBlock language="c" filename="test_malloc.c" code={`// Testar o alocador Assembly:
extern void* my_malloc(size_t size);
extern void  my_free(void *ptr);

int main() {
    // Alocar arrays:
    int *arr1 = my_malloc(10 * sizeof(int));
    int *arr2 = my_malloc(20 * sizeof(int));
    
    // Usar:
    for (int i = 0; i < 10; i++) arr1[i] = i;
    for (int i = 0; i < 20; i++) arr2[i] = i * 2;
    
    // Liberar:
    my_free(arr1);
    my_free(arr2);
    
    // Re-alocar (deve reusar blocos livres):
    int *arr3 = my_malloc(8 * sizeof(int));  // pode pegar arr1 ou arr2
    my_free(arr3);
    
    return 0;
}`} />
    </PageContainer>
  );
}
