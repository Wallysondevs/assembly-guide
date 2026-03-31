import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function HelloWorld() {
  return (
    <PageContainer title="Hello, World! em Assembly" subtitle="Seu primeiro programa — linha a linha, sem mistério" difficulty="iniciante" timeToRead="15 min">
      <p>O clássico "Hello, World!" em Assembly é muito mais revelador do que em outras linguagens. Cada linha faz algo específico e ensina como o sistema operacional e o processador trabalham juntos.</p>

      <h2>O Programa Completo</h2>
      <CodeBlock language="nasm" filename="hello.asm" code={`; hello.asm — Hello World em Assembly x86-64 Linux
; Compilar: nasm -f elf64 hello.asm -o hello.o
; Linkar:   ld hello.o -o hello
; Executar: ./hello

section .data
    mensagem db "Hello, World!", 10    ; string + newline (\n)
    tam_msg  equ $ - mensagem          ; tamanho = posição atual - início da string

section .text
    global _start                      ; ponto de entrada do programa

_start:
    ; write(1, mensagem, tam_msg)
    mov rax, 1          ; syscall número 1 = sys_write
    mov rdi, 1          ; argumento 1: fd = 1 (stdout)
    mov rsi, mensagem   ; argumento 2: ponteiro para a string
    mov rdx, tam_msg    ; argumento 3: número de bytes para escrever
    syscall             ; chama o kernel Linux

    ; exit(0)
    mov rax, 60         ; syscall número 60 = sys_exit
    xor rdi, rdi        ; argumento 1: exit code = 0
    syscall             ; chama o kernel Linux`} />

      <h2>Linha por Linha</h2>

      <h3>Seção .data</h3>
      <CodeBlock language="nasm" code={`mensagem db "Hello, World!", 10`} />
      <ul>
        <li><code>mensagem</code> é um <strong>label</strong> — um nome para o endereço de memória</li>
        <li><code>db</code> = "define bytes" — aloca bytes na memória</li>
        <li><code>"Hello, World!"</code> são 13 bytes de texto</li>
        <li><code>10</code> é o código ASCII de <code>\n</code> (newline)</li>
      </ul>
      <CodeBlock language="nasm" code={`tam_msg equ $ - mensagem`} />
      <ul>
        <li><code>equ</code> define uma constante em tempo de compilação</li>
        <li><code>$</code> representa o endereço atual (posição do cursor)</li>
        <li><code>$ - mensagem</code> = distância entre o cursor e o label = tamanho da string = 14</li>
      </ul>

      <h3>Syscall: write()</h3>
      <p>Em Linux, para escrever na tela, usamos a <strong>system call</strong> <code>write</code>. System calls são a forma de um programa pedir serviços ao kernel.</p>
      <CodeBlock language="c" code={`// Equivalente em C:
write(1, mensagem, tam_msg);
// write(fd, buf, count)
// fd=1: stdout (saída padrão)
// buf: endereço da string
// count: número de bytes`} />
      <CodeBlock language="nasm" code={`mov rax, 1          ; número da syscall write = 1
mov rdi, 1          ; 1º argumento: fd = stdout
mov rsi, mensagem   ; 2º argumento: endereço da string
mov rdx, tam_msg    ; 3º argumento: tamanho
syscall             ; executa a syscall`} />
      <AlertBox type="info" title="Convenção de syscalls Linux x86-64">
        Os argumentos da syscall vão em: <strong>RAX</strong> (número), <strong>RDI</strong> (1º), <strong>RSI</strong> (2º), <strong>RDX</strong> (3º), <strong>R10</strong> (4º), <strong>R8</strong> (5º), <strong>R9</strong> (6º). O retorno vem em RAX.
      </AlertBox>

      <h3>Syscall: exit()</h3>
      <CodeBlock language="nasm" code={`mov rax, 60         ; número da syscall exit = 60
xor rdi, rdi        ; exit code = 0 (xor reg, reg é a forma idiomática de zerar)
syscall`} />
      <p><code>xor rdi, rdi</code> é a forma idiomática de zerar um registrador. É mais eficiente que <code>mov rdi, 0</code> porque gera código menor e mais rápido.</p>

      <h2>Compilando e Executando</h2>
      <CodeBlock language="bash" code={`# Passo 1: Assemblar
nasm -f elf64 hello.asm -o hello.o

# Passo 2: Linkar
ld hello.o -o hello

# Passo 3: Executar
./hello
# Saída: Hello, World!

# Ver o exit code:
echo $?    # deve imprimir 0`} />

      <h2>Inspecionando o Binário</h2>
      <CodeBlock language="bash" code={`# Ver as seções do binário:
readelf -S hello

# Ver o código de máquina gerado:
objdump -d hello

# Saída do objdump:
# 0000000000401000 <_start>:
#   401000:  b8 01 00 00 00    mov eax,0x1
#   401005:  bf 01 00 00 00    mov edi,0x1
#   40100a:  48 be 00 20 40 00 00 00 00 00  movabs rsi,0x402000
#   401014:  ba 0e 00 00 00    mov edx,0xe
#   401019:  0f 05             syscall
#   40101b:  b8 3c 00 00 00    mov eax,0x3c
#   401020:  31 ff             xor edi,edi
#   401022:  0f 05             syscall`} />

      <h2>Versão com Número de Argumento</h2>
      <CodeBlock language="nasm" filename="hello_v2.asm" code={`; Hello World mais elaborado — imprime com contagem
section .data
    msg1 db "Tentativa ", 0
    msg2 db "de 3: Hello, World!", 10, 0

    msg_len1 equ $ - msg1 - 1    ; tamanho sem o null
    msg_len2 equ $ - msg2 - 1

section .text
    global _start

_start:
    ; Escrever "Tentativa "
    mov rax, 1
    mov rdi, 1
    mov rsi, msg1
    mov rdx, msg_len1
    syscall

    ; Escrever o número '1' (ASCII 49)
    mov rax, 1
    mov rdi, 1
    mov rsi, numero
    mov rdx, 1
    syscall

    ; Escrever " de 3: Hello, World!\n"
    mov rax, 1
    mov rdi, 1
    mov rsi, msg2
    mov rdx, msg_len2
    syscall

    ; exit(0)
    mov rax, 60
    xor rdi, rdi
    syscall

section .data
    numero db "1"`} />

      <h2>Variações Úteis</h2>
      <CodeBlock language="nasm" filename="exit_code.asm" code={`; Sair com código diferente de 0 (indica erro):
_start:
    mov rax, 60
    mov rdi, 1     ; exit code = 1 (erro genérico)
    syscall

; No shell:
; ./programa
; echo $?    → imprime 1`} />

      <AlertBox type="success" title="Parabéns!">
        Você escreveu seu primeiro programa Assembly! A partir daqui, cada conceito novo adiciona poder ao que você pode fazer. Continue para as instruções fundamentais.
      </AlertBox>
    </PageContainer>
  );
}
