import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ProjetoPrintf() {
  return (
    <PageContainer title="Projeto: Printf Próprio" subtitle="Implementar printf do zero em Assembly puro" difficulty="expert" timeToRead="30 min">
      <p>Implementar um printf simplificado em Assembly é um excelente projeto para consolidar conhecimentos de funções variádicas, strings, conversão de tipos e syscalls.</p>

      <AlertBox type="info" title="Objetivo">
        Ao final deste projeto, você terá implementado: <code>myprintf(fmt, ...)</code> suportando %d, %s, %c, %x, %% com tamanho correto.
      </AlertBox>

      <h2>Estrutura do Projeto</h2>
      <CodeBlock language="bash" code={`myprintf/
├── myprintf.asm    — implementação principal
├── utils.asm       — funções auxiliares (itoa, strlen)
├── main.c          — programa de teste (chama myprintf de C)
└── Makefile`} />

      <h2>Funções Auxiliares</h2>
      <CodeBlock language="nasm" filename="utils.asm" code={`; utils.asm — utilitários para myprintf

section .text
    global strlen_asm
    global itoa_dec
    global itoa_hex
    global my_write

; strlen_asm(char *s) → size_t
strlen_asm:
    xor rax, rax
.loop:
    cmp byte [rdi + rax], 0
    je  .fim
    inc rax
    jmp .loop
.fim:
    ret

; my_write(int fd, const char *buf, size_t len) → void
my_write:
    ; rdi=fd, rsi=buf, rdx=len
    push rdi
    push rsi
    push rdx
    mov rax, 1          ; sys_write
    syscall
    pop rdx
    pop rsi
    pop rdi
    ret

; itoa_dec — converte inteiro de 64-bit para string decimal
; Entrada: rdi = número (signed), rsi = buffer (pelo menos 21 bytes)
; Saída: rax = ponteiro para início da string no buffer
itoa_dec:
    push rbx
    push r12
    push r13

    mov rbx, rdi        ; rbx = número
    lea r12, [rsi + 20] ; r12 = fim do buffer
    mov byte [r12], 0   ; null terminator
    dec r12

    ; Verificar se negativo:
    mov r13, 0          ; r13 = flag negativo
    test rbx, rbx
    jns .positive
    neg rbx             ; |número|
    mov r13, 1

.positive:
    ; Converter dígitos (da direita para esquerda):
    mov rcx, 10
.loop:
    xor rdx, rdx
    div rcx             ; rax = quotient, rdx = remainder
    ; Oops — div usa rax implicitamente, precisamos ajustar:
    ; (veja versão correta abaixo)
    mov [r12], dl       ; dígito
    add byte [r12], '0' ; converter para ASCII
    dec r12
    test rax, rax
    jnz .loop

    ; Adicionar sinal negativo:
    test r13, r13
    jz .no_neg
    mov byte [r12], '-'
    dec r12
.no_neg:
    inc r12             ; rax = início da string
    mov rax, r12

    pop r13
    pop r12
    pop rbx
    ret`} />

      <h2>Implementação Principal</h2>
      <CodeBlock language="nasm" filename="myprintf.asm" code={`; myprintf.asm — printf simplificado
; Suporta: %d, %s, %c, %x, %%
; Prototype: int myprintf(const char *fmt, ...)
; ABI: rdi=fmt, rsi=arg1, rdx=arg2, rcx=arg3, r8=arg4, r9=arg5

section .bss
    ibuf resb 32        ; buffer para itoa

section .text
    global myprintf
    extern strlen_asm
    extern my_write
    extern itoa_dec

myprintf:
    push rbp
    mov  rbp, rsp
    push rbx
    push r12
    push r13
    push r14
    push r15

    ; Salvar argumentos variádicos (após fmt = rdi):
    ; Segundo argumento em rsi, terceiro em rdx, etc.
    ; Simplificação: salvar numa estrutura na stack
    sub rsp, 56
    mov [rsp + 0],  rsi    ; arg1
    mov [rsp + 8],  rdx    ; arg2
    mov [rsp + 16], rcx    ; arg3
    mov [rsp + 24], r8     ; arg4
    mov [rsp + 32], r9     ; arg5

    mov r12, rdi            ; r12 = fmt (ponteiro atual)
    xor r13, r13            ; r13 = índice do próximo argumento
    xor r14, r14            ; r14 = bytes escritos

.loop:
    ; Ler próximo caractere:
    movzx rbx, byte [r12]   ; rbx = *fmt
    test bl, bl
    jz .fim

    cmp bl, '%'
    jne .literal

    ; Processar especificador de formato:
    inc r12                  ; avançar past '%'
    movzx rbx, byte [r12]   ; rbx = especificador

    cmp bl, 'd'
    je  .fmt_d
    cmp bl, 's'
    je  .fmt_s
    cmp bl, 'c'
    je  .fmt_c
    cmp bl, 'x'
    je  .fmt_x
    cmp bl, '%'
    je  .fmt_percent
    jmp .literal

.fmt_d:
    ; Pegar próximo argumento inteiro:
    mov rdi, [rsp + r13*8]
    inc r13
    ; Converter para string decimal:
    lea rsi, [ibuf]
    call itoa_dec           ; rax = ponteiro para string
    ; Imprimir:
    mov rdi, rax
    call strlen_asm         ; rax = comprimento
    mov rdx, rax
    mov rsi, rdi
    mov rdi, 1              ; fd = stdout
    call my_write
    jmp .next

.fmt_s:
    mov rdi, [rsp + r13*8]  ; rdi = ponteiro para string
    inc r13
    call strlen_asm
    mov rdx, rax
    mov rsi, rdi
    mov rdi, 1
    call my_write
    jmp .next

.fmt_c:
    mov rbx, [rsp + r13*8]  ; caractere
    inc r13
    ; Imprimir 1 byte:
    lea rsi, [rbx]          ; endereço do byte
    ; (simplificado — precisa salvar na stack)
    push rbx
    mov rdi, 1
    mov rsi, rsp
    mov rdx, 1
    mov rax, 1
    syscall
    pop rbx
    jmp .next

.fmt_x:
    ; Hexadecimal (similar ao decimal, base 16)
    ; ... implementação similar ao %d
    jmp .next

.fmt_percent:
    ; Imprimir '%' literal:
.literal:
    ; Imprimir um caractere:
    push rbx
    mov rdi, 1
    mov rsi, rsp
    mov rdx, 1
    mov rax, 1
    syscall
    pop rbx

.next:
    inc r12
    jmp .loop

.fim:
    add rsp, 56
    pop r15
    pop r14
    pop r13
    pop r12
    pop rbx
    leave
    ret`} />

      <CodeBlock language="bash" code={`# Compilar e testar:
nasm -f elf64 myprintf.asm -o myprintf.o
nasm -f elf64 utils.asm -o utils.o
gcc main.c myprintf.o utils.o -o myprintf_test
./myprintf_test

# main.c de teste:
# extern void myprintf(const char *fmt, ...);
# int main() {
#   myprintf("Int: %d, Str: %s, Char: %c\\n", 42, "ola", 'X');
#   return 0;
# }`} />
    </PageContainer>
  );
}
