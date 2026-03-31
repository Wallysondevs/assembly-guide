import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function EngReversaBasica() {
  return (
    <PageContainer title="Engenharia Reversa Básica" subtitle="Reconstituindo lógica de alto nível a partir de Assembly" difficulty="avancado" timeToRead="20 min">
      <p>Engenharia reversa (RE) é a arte de entender o comportamento de um programa a partir de seu código de máquina. É usada em análise de malware, pentesting e pesquisa de segurança.</p>

      <h2>Reconhecendo Padrões Comuns</h2>
      <h3>if/else em Assembly</h3>
      <CodeBlock language="nasm" filename="re_patterns.asm" code={`; Padrão de if/else (reconhecer no Ghidra/radare2):
cmp rax, 5       ; comparação
jl  .caso_menor  ; salto condicional
; bloco else: rax >= 5
jmp .fim
.caso_menor:
; bloco if: rax < 5
.fim:

; Tradução C:
; if (rax < 5) { /* caso_menor */ }
; else { /* caso else */ }

; Loop while:
.loop_head:
    cmp rcx, 0
    je  .loop_end
    ; corpo do loop
    dec rcx
    jmp .loop_head
.loop_end:
; C: while (rcx != 0) { ...; rcx--; }

; Acesso a struct (offset fixo):
mov rax, [rbx + 8]   ; rbx = ponteiro, 8 = offset de campo
; C: int val = ptr->campo2; (campo2 está no offset 8)`} />

      <h2>Reconhecendo Chamadas de Sistema</h2>
      <CodeBlock language="nasm" filename="re_syscalls.asm" code={`; Padrões de syscall comuns (Linux x86-64):

; read() — lendo entrada do usuário:
mov rax, 0          ; sys_read
mov rdi, 0          ; stdin
; ...
syscall

; write() — printando algo:
mov rax, 1          ; sys_write
mov rdi, 1          ; stdout
; ...
syscall

; execve() — executando outro programa (raro em código normal!):
mov rax, 59         ; sys_execve — SUSPEITO em malware!
; ...
syscall

; mmap() — alocando memória executável (suspeito!):
mov rax, 9          ; sys_mmap
; ...
mov rdx, 7          ; PROT_READ|PROT_WRITE|PROT_EXEC — MUITO SUSPEITO!
syscall`} />

      <h2>Entendendo Verificações de Senha</h2>
      <CodeBlock language="bash" code={`; Padrão clássico de verificação de senha (crackme):

; 1. strcmp simples (fácil de quebrar):
; As strings ficam no .rodata e podem ser vistas com 'strings'
cmp byte [password], 'A'   ; comparar caractere por caractere
jne .wrong
cmp byte [password + 1], 'd'
jne .wrong

; 2. Hash da senha (mais difícil):
call calcular_hash(password)  → rax
cmp rax, 0xDEADBEEF          ; compara com hash esperado
jne .wrong

; Como quebrar: procurar a comparação e ver o valor esperado (0xDEADBEEF)

; 3. XOR encryption (clássico em CTF):
; Comparar cada byte XOR'd com uma chave fixa
; Procurar: a XOR b JE/JNE — a chave está ali!`} />

      <h2>Crackme — Exercício Prático</h2>
      <AlertBox type="info" title="CTF e Crackmes">
        Crackmes são programas propositalmente difíceis de entender, usados para praticar reversão. Sites como crackmes.one oferecem centenas de desafios. CTF (Capture The Flag) competições têm challenges de RE.
      </AlertBox>
      <CodeBlock language="bash" code={`# Workflow típico de crackme:

# 1. Informações básicas:
file crackme
checksec --file=crackme
strings crackme | grep -v "^.$" | head -30

# 2. Análise estática:
r2 -A crackme
# No r2:
afl         # listar funções
pdf @main   # ver main
pdf @sym.check_password  # ver função de verificação

# 3. Encontrar string de sucesso:
strings crackme | grep -iE "(correct|valid|congrat|win|flag)"

# 4. Cross-reference (quem usa essa string):
# No radare2: axt @str.correct_password

# 5. Analisar a lógica de verificação

# 6. Patch binário (modificar para aceitar qualquer senha):
# No GDB: set {char}0x401234 = 0x90  (NOP um JE crucial)
# No r2: wx 90 @0x401234`} />

      <h2>Anti-Debug Techniques</h2>
      <CodeBlock language="nasm" filename="antidebug.asm" code={`; Programas protegidos usam técnicas anti-debug:

; 1. ptrace check — detecta GDB:
; GDB usa ptrace(PTRACE_TRACEME) internamente
mov rax, 101        ; sys_ptrace
mov rdi, 0          ; PTRACE_TRACEME
xor rsi, rsi
xor rdx, rdx
syscall
; Se rax < 0, estamos sendo debugados!

; 2. Timing check — GDB é muito mais lento:
rdtsc               ; lê timestamp
; ... executar código ...
rdtsc
; Se diferença > threshold, provavelmente em debug

; 3. INT3 + SIGTRAP:
; Em GDB, int3 causa SIGTRAP. Fora do GDB, o programa pode
; registrar um handler para SIGTRAP e continuar normalmente.
int3                ; breakpoint instruction

; Como bypassar: patch o binário ou use GDB com script para ignorar`} />
    </PageContainer>
  );
}
