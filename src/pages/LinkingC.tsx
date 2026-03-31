import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function LinkingC() {
  return (
    <PageContainer title="Linking com C" subtitle="Combinando módulos Assembly com código C para programas completos" difficulty="intermediario" timeToRead="15 min">
      <p>A integração entre Assembly e C é essencial para projetos reais. Você pode escrever funções críticas em Assembly e chamá-las de C, ou chamar funções da libc a partir do Assembly.</p>

      <h2>Chamando funções C a partir do Assembly</h2>
      <CodeBlock language="nasm" filename="call_c.asm" code={`; Chamar printf() da libc
section .data
    fmt db "Número: %d, Float: %f", 10, 0
    pi  dq 3.14159

section .text
    global _start
    extern printf, exit

_start:
    ; Alinhar stack (deve ser múltiplo de 16 antes do CALL)
    sub rsp, 8          ; alinhar (RSP estava alinhado, -8 = múltiplo de 16 após push retorno)

    ; printf("Número: %d, Float: %f\n", 42, 3.14159)
    lea rdi, [rel fmt]      ; 1º arg: format string
    mov rsi, 42             ; 2º arg: inteiro
    movsd xmm0, [rel pi]    ; float arg: pi
    mov rax, 1              ; IMPORTANTE: número de args XMM passados = 1
    call printf

    ; exit(0)
    xor edi, edi
    call exit`} />

      <h2>Função Assembly chamada de C</h2>
      <CodeBlock language="nasm" filename="funcao_asm.asm" code={`; funcao_asm.asm — funções Assembly para usar em C
section .text
    global soma_inteiros
    global multiplica
    global strlen_asm

; long soma_inteiros(long a, long b)
soma_inteiros:
    lea rax, [rdi + rsi]    ; rax = a + b
    ret

; long multiplica(long a, long b)  
multiplica:
    mov rax, rdi
    imul rax, rsi           ; rax = a * b
    ret

; size_t strlen_asm(const char *s)
strlen_asm:
    xor rax, rax            ; contador = 0
.loop:
    cmp byte [rdi + rax], 0 ; null terminator?
    je  .fim
    inc rax
    jmp .loop
.fim:
    ret`} />

      <CodeBlock language="c" filename="main.c" code={`// main.c — usa funções Assembly
#include <stdio.h>
#include <stddef.h>

// Declarações das funções Assembly:
extern long soma_inteiros(long a, long b);
extern long multiplica(long a, long b);
extern size_t strlen_asm(const char *s);

int main() {
    long s = soma_inteiros(10, 20);
    long m = multiplica(6, 7);
    size_t len = strlen_asm("Hello World");

    printf("Soma: %ld\\n", s);       // 30
    printf("Produto: %ld\\n", m);    // 42
    printf("Strlen: %zu\\n", len);   // 11
    return 0;
}`} />

      <CodeBlock language="bash" code={`# Compilar e linkar:
nasm -f elf64 funcao_asm.asm -o funcao_asm.o
gcc main.c funcao_asm.o -o programa
./programa`} />

      <h2>Makefile para Projetos Mistos</h2>
      <CodeBlock language="makefile" filename="Makefile" code={`CC = gcc
ASM = nasm
CFLAGS = -O2 -Wall -g
ASMFLAGS = -f elf64 -g

SRCS_C = main.c utils.c
SRCS_ASM = funcao_asm.asm strlen.asm

OBJS_C = $(SRCS_C:.c=.o)
OBJS_ASM = $(SRCS_ASM:.asm=.o)
OBJS = $(OBJS_C) $(OBJS_ASM)

programa: $(OBJS)
	$(CC) $(OBJS) -o $@

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

%.o: %.asm
	$(ASM) $(ASMFLAGS) $< -o $@

clean:
	rm -f $(OBJS) programa

.PHONY: clean`} />

      <h2>Usando libc sem _start</h2>
      <CodeBlock language="nasm" filename="com_libc.asm" code={`; Para usar libc (malloc, printf, etc.), use 'main' em vez de '_start'
; e linke com GCC (não ld diretamente)

section .data
    fmt db "Hello de Assembly via libc!", 10, 0

section .text
    global main
    extern printf

; int main(int argc, char *argv[])
; argc = edi (int), argv = rsi
main:
    push rbp
    mov  rbp, rsp
    sub  rsp, 16        ; alinhar stack

    lea rdi, [rel fmt]
    xor eax, eax        ; 0 args XMM
    call printf

    xor eax, eax        ; return 0
    leave
    ret`} />

      <CodeBlock language="bash" code={`# Linkar com GCC para obter libc:
nasm -f elf64 com_libc.asm -o com_libc.o
gcc com_libc.o -o programa    # GCC adiciona libc automaticamente
./programa`} />

      <AlertBox type="info" title="ld vs gcc para linkar">
        Use <code>ld</code> quando quiser controle total sem libc (para programas que usam syscalls diretamente). Use <code>gcc</code> para linkar quando quiser usar funções da libc (printf, malloc, etc.) — GCC adiciona os caminhos e bibliotecas necessários automaticamente.
      </AlertBox>
    </PageContainer>
  );
}
