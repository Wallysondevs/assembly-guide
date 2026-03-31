import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Macros() {
  return (
    <PageContainer title="Macros em NASM" subtitle="Automatizando código repetitivo com o preprocessador do NASM" difficulty="intermediario" timeToRead="15 min">
      <p>NASM tem um sistema de macros poderoso que permite criar abstrações reutilizáveis e reduzir código repetitivo. Macros são expandidas pelo montador antes da geração de código.</p>

      <h2>Macros Simples (%define)</h2>
      <CodeBlock language="nasm" filename="macros.asm" code={`; %define — substituição de texto simples (como #define do C):
%define STDIN  0
%define STDOUT 1
%define STDERR 2
%define SYS_READ  0
%define SYS_WRITE 1
%define SYS_EXIT  60

; Usar as constantes:
    mov rax, SYS_WRITE
    mov rdi, STDOUT
    ; ...

; Macros com argumentos:
%define MAX(a, b)  ((a) > (b) ? (a) : (b))   ; só funciona em contextos de expressão
%define OFFSET_OF(tipo, campo)  tipo %+ _ %+ campo  ; concatenação

; Redefinir macros:
%define DEBUG_MSG(msg)  push rdi %n lea rdi, [msg] %n call print_debug %n pop rdi`} />

      <h2>Macros Multilinhas (%macro)</h2>
      <CodeBlock language="nasm" filename="macro_multi.asm" code={`; %macro nome num_args ... %endmacro
; %1, %2, ... = argumentos
; %0 = número de argumentos

; Macro sem argumentos:
%macro PROLOGUE 0
    push rbp
    mov  rbp, rsp
%endmacro

%macro EPILOGUE 0
    leave
    ret
%endmacro

; Macro com argumentos — chamar syscall:
%macro SYSCALL1 2       ; 2 argumentos: número e 1º argumento
    mov rax, %1
    mov rdi, %2
    syscall
%endmacro

%macro SYSCALL3 4       ; 4 args: número + 3 argumentos
    mov rax, %1
    mov rdi, %2
    mov rsi, %3
    mov rdx, %4
    syscall
%endmacro

; Usar:
    PROLOGUE
    SYSCALL3 SYS_WRITE, STDOUT, msg, msg_len
    EPILOGUE

; Macro para imprimir string literal:
%macro PRINT 1
    section .rodata
    %%str db %1, 10      ; %%str = label local único por expansão!
    %%len equ $ - %%str
    section .text
    mov rax, SYS_WRITE
    mov rdi, STDOUT
    lea rsi, [%%str]
    mov rdx, %%len
    syscall
%endmacro

    PRINT "Hello, Macro World!"`} />

      <h2>Labels Locais em Macros</h2>
      <CodeBlock language="nasm" filename="local_labels.asm" code={`; %% gera labels únicos para evitar conflitos:
%macro LOOP_N 1         ; %1 = número de iterações
    mov rcx, %1
%%loop_start:
    ; ... corpo do loop ...
    dec rcx
    jnz %%loop_start    ; %%loop_start é único para cada expansão
%endmacro

; Usar múltiplas vezes sem conflito de labels:
    LOOP_N 10    ; gera %%loop_start_1
    LOOP_N 20    ; gera %%loop_start_2 (label diferente!)`} />

      <h2>Condicional em Macros</h2>
      <CodeBlock language="nasm" filename="macro_cond.asm" code={`; %if, %elif, %else, %endif
%define DEBUG 1

%if DEBUG == 1
    %macro LOG 1
        push rsi
        push rdi
        push rax
        lea rdi, [%%label]
        call debug_print
        pop rax
        pop rdi
        pop rsi
        jmp %%skip
    %%label db %1, 0
    %%skip:
    %endmacro
%else
    %macro LOG 1
    %endmacro              ; versão vazia em release
%endif

; %ifdef / %ifndef — verificar se macro está definida:
%ifndef ARCH
    %define ARCH 64
%endif

%if ARCH == 64
    %define REG_SIZE 8
    %define PTR_SIZE 8
%else
    %define REG_SIZE 4
    %define PTR_SIZE 4
%endif`} />

      <h2>Macros Recursivas</h2>
      <CodeBlock language="nasm" filename="macro_rec.asm" code={`; Macro para gerar múltiplos NOPs:
%macro NOP_N 1
    %rep %1
        nop
    %endrep
%endmacro

    NOP_N 5              ; gera 5 instruções NOP

; %rep com %repcount:
    %assign i 0
    %rep 8
        db i
        %assign i i+1
    %endrep              ; gera: db 0, 1, 2, 3, 4, 5, 6, 7

; Gerar uma tabela de potências de 2:
    %assign val 1
    %rep 16
        dq val
        %assign val val * 2
    %endrep`} />

      <AlertBox type="info" title="Macros vs Funções">
        Macros são expandidas em cada uso (duplicam código). Funções são chamadas com CALL (overhead de stack frame mas código compartilhado). Use macros para código muito pequeno e frequente; use funções para lógica maior.
      </AlertBox>
    </PageContainer>
  );
}
