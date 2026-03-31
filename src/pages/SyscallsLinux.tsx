import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function SyscallsLinux() {
  return (
    <PageContainer title="System Calls no Linux x86-64" subtitle="A interface entre seu programa Assembly e o kernel Linux" difficulty="intermediario" timeToRead="20 min">
      <p>System calls (syscalls) são a interface oficial entre programas de usuário e o kernel Linux. Em Assembly, você invoca syscalls diretamente com a instrução <code>syscall</code>.</p>

      <h2>Convenção de Syscall (x86-64 Linux)</h2>
      <CodeBlock language="bash" code={`# Registradores para syscall:
# RAX = número da syscall
# RDI = 1º argumento
# RSI = 2º argumento
# RDX = 3º argumento
# R10 = 4º argumento
# R8  = 5º argumento
# R9  = 6º argumento

# Retorno:
# RAX = valor de retorno (negativo em caso de erro: -errno)

# Instrução:
syscall    # executa a syscall

# ATENÇÃO: RC, R11 são destruídos pelo syscall!`} />

      <h2>Tabela das Syscalls Mais Usadas</h2>
      <table>
        <thead><tr><th>Num</th><th>Nome</th><th>Protótipo C</th><th>Retorno</th></tr></thead>
        <tbody>
          {[
            ["0","read","read(int fd, void *buf, size_t count)","bytes lidos"],
            ["1","write","write(int fd, const void *buf, size_t count)","bytes escritos"],
            ["2","open","open(const char *path, int flags, mode_t mode)","fd"],
            ["3","close","close(int fd)","0 ou -1"],
            ["4","stat","stat(const char *path, struct stat *statbuf)","0 ou -1"],
            ["8","lseek","lseek(int fd, off_t offset, int whence)","nova posição"],
            ["9","mmap","mmap(void *addr, size_t len, int prot, int flags, int fd, off_t off)","ponteiro"],
            ["10","mprotect","mprotect(void *addr, size_t len, int prot)","0 ou -1"],
            ["11","munmap","munmap(void *addr, size_t len)","0 ou -1"],
            ["12","brk","brk(void *addr)","novo brk"],
            ["22","pipe","pipe(int pipefd[2])","0 ou -1"],
            ["32","dup","dup(int fd)","novo fd"],
            ["33","dup2","dup2(int oldfd, int newfd)","newfd"],
            ["39","getpid","getpid()","PID"],
            ["57","fork","fork()","0 filho, PID pai, -1 erro"],
            ["59","execve","execve(const char *path, char **argv, char **envp)","nunca (sucesso) ou -1"],
            ["60","exit","exit(int status)","nunca retorna"],
            ["61","wait4","wait4(pid_t pid, int *wstatus, int opts, struct rusage *ru)","PID"],
            ["62","kill","kill(pid_t pid, int sig)","0 ou -1"],
            ["231","exit_group","exit_group(int status)","nunca retorna"],
          ].map(([n,name,proto,ret]) => (
            <tr key={n}><td><code>{n}</code></td><td><code>{name}</code></td><td><code style={{fontSize:'0.75em'}}>{proto}</code></td><td>{ret}</td></tr>
          ))}
        </tbody>
      </table>

      <h2>Exemplos Completos</h2>
      <h3>read — Ler da stdin</h3>
      <CodeBlock language="nasm" filename="read.asm" code={`section .bss
    buffer resb 256     ; buffer de 256 bytes

section .text
    ; read(STDIN=0, buffer, 256)
    mov rax, 0          ; sys_read
    mov rdi, 0          ; fd = stdin
    lea rsi, [buffer]   ; buffer
    mov rdx, 256        ; tamanho máximo
    syscall
    ; rax = bytes lidos (ou negativo se erro)

    ; Verificar erro:
    test rax, rax
    js  .erro           ; rax < 0 → erro`} />

      <h3>open/write/close — I/O de Arquivo</h3>
      <CodeBlock language="nasm" filename="file_io.asm" code={`; Constantes para open():
O_RDONLY equ 0
O_WRONLY equ 1
O_RDWR   equ 2
O_CREAT  equ 0x40
O_TRUNC  equ 0x200
O_APPEND equ 0x400

section .data
    nome_arquivo db "/tmp/teste.txt", 0
    conteudo     db "Hello, arquivo!", 10
    conteudo_len equ $ - conteudo

section .text
_start:
    ; Abrir (ou criar) arquivo para escrita:
    ; open("/tmp/teste.txt", O_WRONLY|O_CREAT|O_TRUNC, 0644)
    mov rax, 2              ; sys_open
    lea rdi, [nome_arquivo]
    mov rsi, O_WRONLY | O_CREAT | O_TRUNC
    mov rdx, 0o644          ; permissões: rw-r--r-- (octal!)
    syscall
    ; rax = fd (ou negativo se erro)

    test rax, rax
    js  .erro_open
    mov rbx, rax            ; salva fd

    ; Escrever no arquivo:
    mov rax, 1              ; sys_write
    mov rdi, rbx            ; fd
    lea rsi, [conteudo]
    mov rdx, conteudo_len
    syscall

    ; Fechar arquivo:
    mov rax, 3              ; sys_close
    mov rdi, rbx            ; fd
    syscall

    ; Sair:
    mov rax, 60
    xor rdi, rdi
    syscall

.erro_open:
    ; rax contém -errno
    neg rax                 ; rax = errno`} />

      <h3>fork e execve</h3>
      <CodeBlock language="nasm" filename="fork_exec.asm" code={`section .data
    prog    db "/bin/echo", 0
    arg0    db "/bin/echo", 0
    arg1    db "Hello from child!", 0

section .text
_start:
    ; fork()
    mov rax, 57
    syscall

    ; rax = 0 (filho) ou PID (pai) ou -1 (erro)
    test rax, rax
    jz  .filho          ; se rax == 0, somos o filho
    js  .erro

    ; Código do PAI:
    ; wait4(-1, NULL, 0, NULL) — espera qualquer filho
    mov rax, 61
    mov rdi, -1         ; qualquer filho
    xor rsi, rsi        ; não salva status
    xor rdx, rdx        ; sem opções
    xor r10, r10        ; sem rusage
    syscall

    jmp .fim_pai

.filho:
    ; execve("/bin/echo", argv, NULL)
    mov rax, 59         ; sys_execve
    lea rdi, [prog]     ; path
    ; montar argv no stack:
    push 0              ; NULL terminator
    lea rax, [rel arg1]
    push rax
    lea rax, [rel arg0]
    push rax
    mov rsi, rsp        ; argv = {arg0, arg1, NULL}
    xor rdx, rdx        ; envp = NULL
    syscall
    ; Se chegou aqui, execve falhou
    mov rax, 60
    mov rdi, 1
    syscall

.fim_pai:
.erro:
    mov rax, 60
    xor rdi, rdi
    syscall`} />

      <AlertBox type="info" title="Verificando números de syscall">
        Para ver todos os números de syscall: <code>cat /usr/include/asm/unistd_64.h | grep '#define __NR'</code>. Ou use o site <a href="https://syscalls.mebeim.net">syscalls.mebeim.net</a>.
      </AlertBox>

      <h2>Erros de Syscall</h2>
      <CodeBlock language="nasm" filename="erros.asm" code={`; Syscalls retornam valor negativo em caso de erro:
; -1  = EPERM (operação não permitida)
; -2  = ENOENT (arquivo não encontrado)
; -9  = EBADF (fd inválido)
; -13 = EACCES (permissão negada)
; -17 = EEXIST (arquivo já existe)
; -22 = EINVAL (argumento inválido)

; Verificar erro:
syscall
cmp rax, -4096          ; erros são maiores que -4096
jbe .sucesso
; rax contém -errno
neg rax                 ; rax = errno positivo`} />
    </PageContainer>
  );
}
