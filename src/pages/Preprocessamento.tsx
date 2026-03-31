import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";

export default function Preprocessamento() {
  return (
    <PageContainer title="Preprocessamento NASM" subtitle="Incluir arquivos, condicionais e geração de código automática" difficulty="intermediario" timeToRead="10 min">
      <p>O preprocessador do NASM oferece recursos para organizar código em múltiplos arquivos, geração condicional de código e macros avançadas — similar ao CPP do C mas específico para Assembly.</p>

      <h2>Incluindo Arquivos</h2>
      <CodeBlock language="nasm" filename="main.asm" code={`; Incluir arquivo em tempo de compilação:
%include "defines.inc"      ; constantes e macros
%include "syscalls.inc"     ; wrappers de syscall
%include "utils.inc"        ; funções utilitárias

; Incluir apenas uma vez (guardas de inclusão):
%ifndef DEFINES_INC
%define DEFINES_INC
; ... conteúdo do defines.inc ...
%endif`} />

      <CodeBlock language="nasm" filename="defines.inc" code={`; defines.inc — constantes e macros comuns

; Syscalls Linux x86-64:
%define SYS_READ    0
%define SYS_WRITE   1
%define SYS_OPEN    2
%define SYS_CLOSE   3
%define SYS_EXIT    60

; File descriptors padrão:
%define STDIN   0
%define STDOUT  1
%define STDERR  2

; Proteções de memória:
%define PROT_READ  1
%define PROT_WRITE 2
%define PROT_EXEC  4

; Macros de syscall:
%macro WRITE 3              ; fd, buf, len
    mov rax, SYS_WRITE
    mov rdi, %1
    mov rsi, %2
    mov rdx, %3
    syscall
%endmacro

%macro EXIT 1
    mov rax, SYS_EXIT
    mov rdi, %1
    syscall
%endmacro`} />

      <h2>Compilação Condicional</h2>
      <CodeBlock language="nasm" filename="condicional.asm" code={`; Definir na linha de comando: nasm -DDEBUG=1 arquivo.asm

%ifdef DEBUG
    %define LOG_LEVEL 3
%elifdef RELEASE
    %define LOG_LEVEL 0
%else
    %define LOG_LEVEL 1
%endif

; Código condicional:
%if LOG_LEVEL > 0
    %macro DEBUG_LOG 1
        ; ... código de log ...
    %endmacro
%else
    %macro DEBUG_LOG 1
        ; versão vazia — sem overhead em release
    %endmacro
%endif

; Verificar arquitetura:
%ifdef __BITS__ == 64
    ; código 64-bit
%elif __BITS__ == 32
    ; código 32-bit  
%endif`} />

      <h2>Geração de Código com %rep</h2>
      <CodeBlock language="nasm" filename="geracao.asm" code={`; Gerar tabela de senos (simplificado):
section .data
    align 16

; Gerar tabela de Fibonacci:
section .data
fibonacci_table:
    %assign a 0
    %assign b 1
    %rep 20
        dq a
        %assign temp b
        %assign b (a + b)
        %assign a temp
    %endrep
; Gera: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

; Tabela de potências de 2:
section .data
pow2_table:
    %assign val 1
    %rep 64
        dq val
        %assign val (val * 2)
    %endrep

; Unroll de loop em compile-time:
section .text
%assign i 0
%rep 8
    mov rax, [rdi + i*8]
    add [rsi + i*8], rax
    %assign i (i + 1)
%endrep`} />

      <h2>Operações de String no Preprocessador</h2>
      <CodeBlock language="nasm" filename="str_preproc.asm" code={`; Concatenação de tokens (%+):
%define PREFIX_ mylib_
%define FUNC(name) PREFIX_ %+ name

FUNC(init):     ; → mylib_init:
    ret

; Conversão de string:
%define STRINGIZE(x) #x   ; (NASM não tem isso, use %+ diretamente)

; Contagem de argumentos (%0):
%macro DEBUG_N 0-*
    mov rax, %0   ; número de argumentos passados
%endmacro

DEBUG_N 1, 2, 3    ; rax = 3`} />
    </PageContainer>
  );
}
