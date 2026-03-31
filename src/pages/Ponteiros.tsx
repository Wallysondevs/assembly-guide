import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Ponteiros() {
  return (
    <PageContainer title="Ponteiros em Assembly" subtitle="Endereçamento indireto — a essência do que um ponteiro realmente é" difficulty="intermediario" timeToRead="15 min">
      <p>Em Assembly, não existe "tipo ponteiro" — existe um <strong>endereço de memória</strong>. Quando você coloca um endereço em um registrador e acessa o conteúdo desse endereço, está usando um ponteiro.</p>

      <h2>O que é um Ponteiro</h2>
      <CodeBlock language="nasm" filename="ponteiro_basico.asm" code={`section .data
    variavel dq 42      ; variável contendo 42

section .text
    ; Em Assembly, o "ponteiro" é simplesmente o endereço
    lea rax, [variavel] ; rax = ENDEREÇO de 'variavel' (isso é um ponteiro!)

    ; Dereferenciamento (acessar o valor apontado):
    mov rbx, [rax]      ; rbx = *rax = conteúdo em rax = 42

    ; Escrever via ponteiro:
    mov qword [rax], 100 ; *rax = 100 (variavel agora vale 100)`} />

      <h2>Ponteiros vs Valores em C e Assembly</h2>
      <CodeBlock language="c" filename="ponteiros.c" code={`// C
int variavel = 42;
int *ptr = &variavel;  // ptr = endereço de variavel
int val = *ptr;        // val = conteúdo de ptr = 42
*ptr = 100;            // escreve via ponteiro`} />
      <CodeBlock language="nasm" filename="ponteiros.asm" code={`; Assembly equivalente
section .data
    variavel dq 42

section .text
    lea rsi, [variavel]     ; rsi = &variavel (ponteiro)
    mov rdi, [rsi]          ; rdi = *rsi = 42
    mov qword [rsi], 100    ; *rsi = 100`} />

      <h2>Ponteiro para Ponteiro (Duplo Indirecionamento)</h2>
      <CodeBlock language="nasm" filename="ptr_ptr.asm" code={`section .data
    valor     dq 42
    ponteiro  dq valor      ; ponteiro contém o ENDEREÇO de valor

section .text
    ; Em C: int **pp = &pointer; int val = **pp;
    lea rax, [ponteiro]     ; rax = &ponteiro
    mov rbx, [rax]          ; rbx = *rax = endereço de 'valor'
    mov rcx, [rbx]          ; rcx = *rbx = 42 (duplo deref)`} />

      <h2>Ponteiro para Função</h2>
      <CodeBlock language="nasm" filename="func_ptr.asm" code={`section .data
    ; Ponteiro para função — contém o endereço da função
    fn_ptr dq minha_funcao   ; inicializado com o endereço da função

section .text

minha_funcao:
    mov rax, 42
    ret

_start:
    ; Chamar função via ponteiro:
    mov rax, [fn_ptr]        ; rax = endereço da função
    call rax                 ; chama a função indiretamente!
    ; rax = 42 (retorno)

    ; Ou diretamente:
    call [fn_ptr]            ; também funciona em NASM`} />

      <h2>Estrutura de Dados com Ponteiros</h2>
      <CodeBlock language="nasm" filename="lista_ligada.asm" code={`; Lista ligada simples em Assembly
; struct Node { long value; Node* next; }
;   [offset 0] = value (8 bytes)
;   [offset 8] = next  (8 bytes)

NODE_VALUE equ 0
NODE_NEXT  equ 8
NODE_SIZE  equ 16

section .data
    node3: dq 30, 0         ; value=30, next=NULL
    node2: dq 20, node3     ; value=20, next=&node3
    node1: dq 10, node2     ; value=10, next=&node2
    head:  dq node1         ; ponteiro para o início

section .text
; Iterar pela lista e somar valores:
    xor rax, rax             ; soma = 0
    mov rbx, [head]          ; rbx = head (ponteiro para node1)
.loop:
    test rbx, rbx            ; rbx == NULL?
    jz  .fim
    add rax, [rbx + NODE_VALUE]  ; soma += node->value
    mov rbx, [rbx + NODE_NEXT]   ; rbx = node->next
    jmp .loop
.fim:
    ; rax = 10 + 20 + 30 = 60`} />

      <h2>Ponteiros e Arrays</h2>
      <CodeBlock language="nasm" filename="array_ptr.asm" code={`section .data
    array dq 10, 20, 30, 40, 50   ; int array[5]

section .text
    ; Iterar com ponteiro (pointer arithmetic):
    lea rbx, [array]         ; rbx = &array[0] (ponteiro base)
    mov rcx, 5               ; contador

.loop:
    mov rax, [rbx]           ; rax = *ptr
    ; ... processar rax ...

    add rbx, 8               ; ptr++ (avança 8 bytes — tamanho de qword)
    dec rcx
    jnz .loop

    ; Acesso por índice com ponteiro base:
    lea rbx, [array]
    mov rax, [rbx + 2*8]    ; array[2] = 30`} />

      <AlertBox type="danger" title="Ponteiro Nulo">
        Acessar o endereço 0 (ponteiro nulo) causa um <strong>segmentation fault</strong> imediato. Sempre verifique ponteiros antes de desreferenciar!
      </AlertBox>
      <CodeBlock language="nasm" code={`; Verificar ponteiro nulo antes de usar:
    test rbx, rbx
    jz  .erro_ponteiro_nulo
    mov rax, [rbx]           ; seguro — rbx não é zero`} />

      <h2>Aritmética de Ponteiros</h2>
      <CodeBlock language="nasm" filename="ptr_arith.asm" code={`; Avançar ponteiro pelo tamanho do tipo:
; Para byte (1 byte):  add ptr, 1
; Para word (2 bytes): add ptr, 2
; Para dword (4 bytes): add ptr, 4
; Para qword (8 bytes): add ptr, 8

; Calcular diferença entre ponteiros:
    lea rax, [array]         ; rax = início
    lea rbx, [array + 4*8]  ; rbx = &array[4]
    sub rbx, rax             ; rbx = 4*8 = 32 (diferença em bytes)
    shr rbx, 3              ; rbx = 4 (número de elementos)`} />
    </PageContainer>
  );
}
