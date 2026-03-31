import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";

export default function Varargs() {
  return (
    <PageContainer title="Funções Variádicas" subtitle="Implementando funções com número variável de argumentos em Assembly" difficulty="avancado" timeToRead="12 min">
      <p>Funções variádicas (como printf) aceitam um número arbitrário de argumentos. Em x86-64, o System V AMD64 ABI define um protocolo específico para isso usando <code>va_list</code>.</p>

      <h2>Como Variádicos Funcionam</h2>
      <CodeBlock language="nasm" filename="varargs_intro.asm" code={`; printf("Formato: %d %d %s", 1, 2, "ola")
; Em Assembly (System V AMD64):

    lea rdi, [rel fmt]    ; format string
    mov rsi, 1            ; 1º arg variadic
    mov rdx, 2            ; 2º arg variadic
    lea rcx, [rel str]    ; 3º arg variadic
    xor eax, eax          ; IMPORTANTE: RAX = número de argumentos XMM usados
                          ; Para printf variádico sem floats: RAX = 0
    call printf`} />

      <h2>va_start, va_arg, va_end</h2>
      <CodeBlock language="nasm" filename="va_list.asm" code={`; Para implementar função variádica, devemos salvar todos os args possíveis
; A estrutura va_list no System V AMD64:
; typedef struct {
;   unsigned int gp_offset;   /* offset do próx int arg (inicialmente 6*8=48 se 6 regs usados) */
;   unsigned int fp_offset;   /* offset do próx float arg */
;   void *overflow_arg_area;  /* ponteiro para args na stack */
;   void *reg_save_area;      /* área onde args de regs foram salvos */
; } va_list[1];

; Exemplo: soma variádica de N inteiros
; int soma_n(int count, ...)
; Argumentos: rdi=count, rsi=arg1, rdx=arg2, rcx=arg3, r8=arg4, r9=arg5, stack=...

soma_n:
    push rbp
    mov  rbp, rsp
    sub  rsp, 192        ; 48 bytes para int regs + 128 para float + 16 para va_list

    ; Salvar registradores de argumento na reg_save_area:
    ; (só salvar os que vieram após 'count', que usou RDI)
    mov [rbp - 48],  rsi   ; reg_save_area[0]
    mov [rbp - 40],  rdx
    mov [rbp - 32],  rcx
    mov [rbp - 24],  r8
    mov [rbp - 16],  r9

    ; Inicializar va_list:
    ; gp_offset = 8 (pular o primeiro registrador — count já foi usado)
    ; overflow_arg_area = rbp + 16 (argumentos na stack)
    ; reg_save_area = rbp - 48

    ; ... iterar pelos argumentos ...

    leave
    ret`} />

      <h2>Exemplo: printf Simples</h2>
      <CodeBlock language="nasm" filename="printf_simples.asm" code={`; Chamar printf com diferentes tipos:

section .data
    fmt_int  db "Int: %d", 10, 0
    fmt_str  db "Str: %s", 10, 0
    fmt_hex  db "Hex: 0x%lx", 10, 0
    ola      db "Hello!", 0

section .text
    global _start
    extern printf, exit

_start:
    ; printf("Int: %d\n", 42)
    lea rdi, [rel fmt_int]
    mov rsi, 42
    xor eax, eax
    call printf

    ; printf("Str: %s\n", "Hello!")
    lea rdi, [rel fmt_str]
    lea rsi, [rel ola]
    xor eax, eax
    call printf

    ; printf("Hex: 0x%lx\n", 0xDEADBEEF)
    lea rdi, [rel fmt_hex]
    mov rsi, 0xDEADBEEF
    xor eax, eax
    call printf

    ; exit(0)
    xor edi, edi
    call exit`} />

      <h2>scanf — Lendo Dados</h2>
      <CodeBlock language="nasm" filename="scanf.asm" code={`section .data
    fmt_in  db "%d", 0     ; formato para scanf
    resultado dq 0         ; variável para guardar o resultado

section .text
    extern scanf, printf
    global _start

_start:
    ; scanf("%d", &resultado)
    lea rdi, [rel fmt_in]
    lea rsi, [rel resultado]   ; passar ENDEREÇO da variável!
    xor eax, eax
    call scanf

    ; Usar o valor lido:
    mov rax, [rel resultado]
    ; ... processar ...`} />
    </PageContainer>
  );
}
