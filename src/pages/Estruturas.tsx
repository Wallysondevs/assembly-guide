import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Estruturas() {
  return (
    <PageContainer title="Estruturas (Structs)" subtitle="Implementando structs C em Assembly com offsets e macros" difficulty="intermediario" timeToRead="15 min">
      <p>Assembly não tem tipos — apenas bytes. Mas você pode implementar structs organizando dados em posições fixas e usando offsets para acessá-los.</p>

      <h2>Struct Simples</h2>
      <CodeBlock language="c" filename="pessoa.c" code={`// C struct:
struct Pessoa {
    long id;        // offset 0, 8 bytes
    long idade;     // offset 8, 8 bytes
    char nome[32];  // offset 16, 32 bytes
};  // total: 48 bytes`} />
      <CodeBlock language="nasm" filename="pessoa.asm" code={`; Definindo offsets como constantes:
PESSOA_ID      equ 0
PESSOA_IDADE   equ 8
PESSOA_NOME    equ 16
PESSOA_SIZE    equ 48

section .data
    ; Instância estática:
    joao:
        dq 1            ; id = 1
        dq 30           ; idade = 30
        db "João Silva", 0
        times (32 - ($ - joao - 16)) db 0  ; pad para 32 bytes

section .text
    ; Acessar campos:
    lea rbx, [joao]
    mov rax, [rbx + PESSOA_ID]     ; rax = joao.id = 1
    mov rax, [rbx + PESSOA_IDADE]  ; rax = joao.idade = 30
    lea rax, [rbx + PESSOA_NOME]   ; rax = &joao.nome

    ; Modificar campo:
    mov qword [rbx + PESSOA_IDADE], 31`} />

      <h2>Macros STRUC no NASM</h2>
      <CodeBlock language="nasm" filename="struc.asm" code={`; NASM tem suporte a structs com struc/endstruc:
struc Ponto
    .x: resq 1   ; 8 bytes
    .y: resq 1   ; 8 bytes
    .z: resq 1   ; 8 bytes
endstruc        ; Ponto_size = 24

; Usar:
section .data
    origem: istruc Ponto
        at Ponto.x, dq 0
        at Ponto.y, dq 0
        at Ponto.z, dq 0
    iend

    ponto1: istruc Ponto
        at Ponto.x, dq 10
        at Ponto.y, dq 20
        at Ponto.z, dq 30
    iend

section .text
    lea rbx, [ponto1]
    mov rax, [rbx + Ponto.x]    ; rax = 10
    mov rax, [rbx + Ponto.y]    ; rax = 20`} />

      <h2>Array de Structs</h2>
      <CodeBlock language="nasm" filename="array_structs.asm" code={`; Array de Pontos — [x0,y0,z0, x1,y1,z1, ...]
section .data
    pontos:
        dq 1, 2, 3    ; ponto[0]: x=1, y=2, z=3
        dq 4, 5, 6    ; ponto[1]: x=4, y=5, z=6
        dq 7, 8, 9    ; ponto[2]
    N_PONTOS equ 3

section .text
    ; Acessar ponto[1].y:
    lea rbx, [pontos]
    mov rax, [rbx + 1*Ponto_size + Ponto.y]  ; = 5

    ; Iterar e somar todos os x:
    xor rax, rax            ; soma = 0
    xor rcx, rcx            ; índice = 0
.loop:
    cmp rcx, N_PONTOS
    jge .fim
    add rax, [rbx + rcx*Ponto_size + Ponto.x]
    inc rcx
    jmp .loop
.fim:`} />

      <h2>Alinhamento e Padding</h2>
      <AlertBox type="warning" title="Alinhamento de Struct">
        Processadores acessam dados mais eficientemente quando estão alinhados ao seu tamanho (int em múltiplo de 4, long em múltiplo de 8). Compilers C inserem padding automaticamente. Em Assembly, você é responsável!
      </AlertBox>
      <CodeBlock language="nasm" filename="alinhamento.asm" code={`; Exemplo de struct com padding em C:
; struct Misto {
;     char c;   // 1 byte + 7 bytes padding!
;     long l;   // 8 bytes (precisa estar em offset múltiplo de 8)
;     int i;    // 4 bytes + 4 bytes padding
;     long l2;  // 8 bytes
; };  // total: 32 bytes (não 21!)

; Em Assembly, você controla o layout:
MISTO_C   equ 0   ; 1 byte
; 7 bytes de padding aqui (offsets 1-7)
MISTO_L   equ 8   ; 8 bytes
MISTO_I   equ 16  ; 4 bytes
; 4 bytes de padding (offsets 20-23)
MISTO_L2  equ 24  ; 8 bytes
MISTO_SIZE equ 32

; Para compactar sem padding (mas mais lento!):
; MISTO_C  equ 0  ; 1 byte
; MISTO_L  equ 1  ; 8 bytes (não alinhado!)
; MISTO_I  equ 9  ; 4 bytes (não alinhado!)
; MISTO_L2 equ 13 ; 8 bytes (não alinhado!)
; MISTO_SIZE equ 21`} />

      <h2>Lista Ligada em Assembly</h2>
      <CodeBlock language="nasm" filename="lista.asm" code={`; Node: { value: qword, next: ptr }
NODE_VAL  equ 0
NODE_NEXT equ 8
NODE_SIZE equ 16

; Alocar novo nó (via mmap):
; Argumento: RDI = valor
; Retorno: RAX = ponteiro para novo nó
alloc_node:
    push rbx
    mov rbx, rdi            ; salva valor

    ; mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANON, -1, 0)
    mov rax, 9              ; sys_mmap
    xor rdi, rdi
    mov rsi, 4096
    mov rdx, 3
    mov r10, 0x22
    mov r8, -1
    xor r9, r9
    syscall

    ; rax = ponteiro para o nó
    mov [rax + NODE_VAL], rbx   ; node->value = valor
    mov qword [rax + NODE_NEXT], 0  ; node->next = NULL

    pop rbx
    ret`} />
    </PageContainer>
  );
}
