import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function InstalacaoGas() {
  return (
    <PageContainer title="GNU Assembler (GAS) e Sintaxe AT&T" subtitle="O assembler do projeto GNU — instalado por padrão com GCC" difficulty="intermediario" timeToRead="12 min">
      <p><strong>GAS</strong> (GNU Assembler) é o assembler padrão do projeto GNU. Usa a <strong>sintaxe AT&T</strong> — diferente da Intel usada pelo NASM. GAS é chamado automaticamente quando você usa <code>gcc</code> para compilar C.</p>

      <h2>Por que saber GAS?</h2>
      <ul>
        <li>Código de Assembly inline em C/C++ (<code>asm()</code>) usa sintaxe AT&T por padrão no GCC</li>
        <li>O GCC gera Assembly em sintaxe AT&T por padrão (<code>gcc -S</code>)</li>
        <li>Muitos projetos open-source (Linux kernel) usam GAS</li>
        <li>Entender a saída do compilador requer conhecer AT&T</li>
      </ul>

      <h2>Sintaxe AT&T vs Intel — Diferenças Principais</h2>
      <table>
        <thead><tr><th>Característica</th><th>Intel (NASM)</th><th>AT&T (GAS)</th></tr></thead>
        <tbody>
          <tr><td>Prefixo de registrador</td><td><code>rax</code></td><td><code>%rax</code></td></tr>
          <tr><td>Prefixo de imediato</td><td><code>42</code></td><td><code>$42</code></td></tr>
          <tr><td>Sufixo de tamanho</td><td>implícito no operando</td><td><code>b/w/l/q</code></td></tr>
          <tr><td>Ordem dos operandos</td><td>destino, fonte</td><td>fonte, destino</td></tr>
          <tr><td>Acesso à memória</td><td><code>[rax]</code></td><td><code>(%rax)</code></td></tr>
          <tr><td>Deslocamento</td><td><code>[rax + 8]</code></td><td><code>8(%rax)</code></td></tr>
          <tr><td>Comentários</td><td><code>; comentário</code></td><td><code>/* */ ou # ou //</code></td></tr>
        </tbody>
      </table>

      <h2>Exemplos Comparativos</h2>
      <CodeBlock language="nasm" filename="intel.asm" code={`; NASM (Sintaxe Intel)
mov rax, 42           ; rax = 42
mov rax, rbx          ; rax = rbx
mov rax, [rbx]        ; rax = *rbx
mov rax, [rbx + 8]    ; rax = *(rbx+8)
mov [rdi], rax        ; *rdi = rax
add rax, rbx          ; rax += rbx
movq rax, qword [rbx] ; move 64-bit`} />

      <CodeBlock language="bash" filename="att.s" code={`# GAS (Sintaxe AT&T)
movq $42, %rax        # rax = 42  (NOTA: fonte primeiro, destino segundo!)
movq %rbx, %rax       # rax = rbx
movq (%rbx), %rax     # rax = *rbx
movq 8(%rbx), %rax    # rax = *(rbx+8)
movq %rax, (%rdi)     # *rdi = rax
addq %rbx, %rax       # rax += rbx
movq (%rbx), %rax     # move 64-bit (sufixo 'q')`} />

      <AlertBox type="warning" title="Ordem invertida em AT&T!">
        Em AT&T, os operandos são <strong>fonte, destino</strong> (o oposto da Intel). <code>movq %rbx, %rax</code> significa "mova rbx para rax" (rax = rbx). Isso é a fonte de confusão mais comum para quem vem da sintaxe Intel.
      </AlertBox>

      <h2>Sufixos de Tamanho em AT&T</h2>
      <table>
        <thead><tr><th>Sufixo</th><th>Tamanho</th><th>Equivalente Intel</th></tr></thead>
        <tbody>
          <tr><td><code>b</code></td><td>byte (8-bit)</td><td><code>byte</code></td></tr>
          <tr><td><code>w</code></td><td>word (16-bit)</td><td><code>word</code></td></tr>
          <tr><td><code>l</code></td><td>long (32-bit)</td><td><code>dword</code></td></tr>
          <tr><td><code>q</code></td><td>quad (64-bit)</td><td><code>qword</code></td></tr>
        </tbody>
      </table>

      <h2>Hello World em GAS</h2>
      <CodeBlock language="bash" filename="hello.s" code={`# hello.s — Hello World em GAS (AT&T Syntax)
.section .data
    msg:     .asciz "Hello, World!\n"   # string com null terminator
    msg_len: .equ . - msg               # tamanho da string

.section .text
    .global _start

_start:
    # write(1, msg, msg_len)
    movq $1, %rax           # syscall: sys_write
    movq $1, %rdi           # fd: stdout (1)
    leaq msg(%rip), %rsi    # rsi = &msg (RIP-relative)
    movq $msg_len, %rdx     # rdx = tamanho
    syscall

    # exit(0)
    movq $60, %rax          # syscall: sys_exit
    xorq %rdi, %rdi         # exit code = 0
    syscall`} />

      <CodeBlock language="bash" code={`# Compilar com GAS:
as hello.s -o hello.o
ld hello.o -o hello
./hello`} />

      <h2>Usando GAS com GCC</h2>
      <CodeBlock language="bash" code={`# GCC como frontend para GAS:
gcc -nostdlib hello.s -o hello    # sem libc
gcc hello.s -o hello              # com libc (precisa de main, não _start)

# Ver Assembly gerado pelo GCC:
gcc -S -O2 programa.c -o programa.s
cat programa.s    # AT&T syntax por padrão

# Ver Assembly em sintaxe Intel:
gcc -S -O2 -masm=intel programa.c -o programa.s`} />

      <h2>Modo Intel no GAS</h2>
      <p>Você pode usar sintaxe Intel no GAS com a diretiva <code>.intel_syntax</code>:</p>
      <CodeBlock language="bash" filename="intel_gas.s" code={`.intel_syntax noprefix    # ativa sintaxe Intel, sem prefixo % nos regs

.section .text
.global _start

_start:
    mov rax, 60       # sintaxe Intel no GAS!
    xor rdi, rdi
    syscall

.att_syntax prefix    # volta para AT&T (boa prática)`} />

      <h2>Diretivas do GAS</h2>
      <CodeBlock language="bash" filename="diretivas.s" code={`.section .data        # seção de dados
.section .text        # seção de código
.section .bss         # seção BSS

.byte 42              # define 1 byte
.word 1000            # define 2 bytes
.long 100000          # define 4 bytes
.quad 10000000        # define 8 bytes
.ascii "hello"        # string SEM null terminator
.asciz "hello"        # string COM null terminator (\0)
.string "hello"       # igual a .asciz

.align 4              # alinha ao próximo múltiplo de 4 bytes
.balign 16            # alinha ao próximo múltiplo de 16 bytes
.space 64             # reserva 64 bytes zerados
.skip 64              # igual a .space

.equ CONST, 42        # define constante (equivalente a %define no NASM)
.set CONST, 42        # igual a .equ

.global _start        # exporta símbolo
.extern funcao        # declara símbolo externo
.type funcao, @function  # declara tipo do símbolo`} />

      <AlertBox type="info" title="GAS ou NASM?">
        Para aprendizado, NASM com sintaxe Intel é mais recomendado — mais legível e mais documentação disponível. Use GAS quando precisar de inline assembly em C ou quando analisar código gerado pelo GCC.
      </AlertBox>
    </PageContainer>
  );
}
