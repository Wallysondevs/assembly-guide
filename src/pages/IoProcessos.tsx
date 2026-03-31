import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function IoProcessos() {
  return (
    <PageContainer title="I/O e Processos" subtitle="Pipes, sinais, file descriptors e controle de processos em Assembly" difficulty="avancado" timeToRead="15 min">
      <p>Assembly permite controle completo sobre I/O e processos através das system calls do Linux. Entender file descriptors, pipes e sinais é essencial para programação de sistemas.</p>

      <h2>File Descriptors</h2>
      <CodeBlock language="bash" code={`# File descriptors padrão (sempre disponíveis):
# 0 = stdin  (entrada padrão)
# 1 = stdout (saída padrão)
# 2 = stderr (saída de erro)`} />
      <CodeBlock language="nasm" filename="fd_basico.asm" code={`; Escrever na stderr:
    mov rax, 1          ; sys_write
    mov rdi, 2          ; fd = STDERR
    lea rsi, [msg_erro]
    mov rdx, msg_len
    syscall

; Duplicar fd (dup2):
    ; Redirecionar stdout para um arquivo:
    mov rax, 2          ; sys_open
    lea rdi, [filename]
    mov rsi, 0x241      ; O_WRONLY | O_CREAT | O_TRUNC
    mov rdx, 0o644
    syscall
    mov rbx, rax        ; rbx = file_fd

    ; dup2(file_fd, STDOUT=1) — substitui stdout pelo arquivo
    mov rax, 33         ; sys_dup2
    mov rdi, rbx        ; oldfd = file_fd
    mov rsi, 1          ; newfd = stdout
    syscall`} />

      <h2>Pipes — Comunicação entre Processos</h2>
      <CodeBlock language="nasm" filename="pipe.asm" code={`section .bss
    pipe_fds resq 2     ; [0]=read_end, [1]=write_end

section .data
    mensagem db "Dados via pipe!", 10

section .text
_start:
    ; Criar pipe:
    mov rax, 22         ; sys_pipe
    lea rdi, [pipe_fds]
    syscall

    ; Fork:
    mov rax, 57         ; sys_fork
    syscall

    test rax, rax
    jz  .filho
    jns .pai
    ; erro no fork
    jmp .fim

.filho:
    ; Fechar o lado de leitura do pipe
    mov rax, 3          ; sys_close
    mov rdi, [pipe_fds + 0]     ; read_end
    syscall

    ; Escrever no pipe
    mov rax, 1          ; sys_write
    mov rdi, [pipe_fds + 8]     ; write_end
    lea rsi, [mensagem]
    mov rdx, 16
    syscall

    ; Fechar write_end e sair
    mov rax, 3
    mov rdi, [pipe_fds + 8]
    syscall
    mov rax, 60
    xor rdi, rdi
    syscall

.pai:
    ; Fechar o lado de escrita do pipe
    mov rax, 3
    mov rdi, [pipe_fds + 8]     ; write_end
    syscall

    ; Ler do pipe:
    mov rax, 0          ; sys_read
    mov rdi, [pipe_fds + 0]     ; read_end
    lea rsi, [buffer]
    mov rdx, 64
    syscall
    ; rax = bytes lidos, buffer contém os dados

    ; Fechar read_end e esperar filho:
    mov rax, 3
    mov rdi, [pipe_fds + 0]
    syscall

    ; wait4(-1, NULL, 0, NULL)
    mov rax, 61
    mov rdi, -1
    xor rsi, rsi
    xor rdx, rdx
    xor r10, r10
    syscall

.fim:
    mov rax, 60
    xor rdi, rdi
    syscall`} />

      <h2>Sinais (Signals)</h2>
      <CodeBlock language="bash" code={`# Sinais importantes:
# SIGHUP  (1)  — terminal fechado
# SIGINT  (2)  — Ctrl+C
# SIGKILL (9)  — morte imediata (não pode ser ignorado)
# SIGSEGV (11) — segmentation fault
# SIGTERM (15) — terminação graciosa
# SIGCHLD (17) — filho terminou`} />
      <CodeBlock language="nasm" filename="signals.asm" code={`; Enviar sinal para processo:
    ; kill(pid, SIGTERM)
    mov rax, 62         ; sys_kill
    mov rdi, pid        ; PID alvo
    mov rsi, 15         ; SIGTERM
    syscall

; Ignorar SIGINT (Ctrl+C):
    ; sigaction(SIGINT, &act, NULL)
    ; Estrutura sigaction apontando para SIG_IGN (1):
    mov rax, 13         ; sys_rt_sigaction
    mov rdi, 2          ; SIGINT
    lea rsi, [sigaction_struct]  ; nova ação: SIG_IGN
    xor rdx, rdx        ; NULL (não salvar ação anterior)
    mov r10, 8          ; sizeof(sigset_t)
    syscall`} />

      <h2>Leitura de /proc</h2>
      <CodeBlock language="nasm" filename="proc.asm" code={`; Ler /proc/self/maps (mapa de memória do processo):
section .data
    maps_path db "/proc/self/maps", 0
    newline   db 10, 0

section .bss
    buf resb 4096

section .text
    ; Abrir /proc/self/maps:
    mov rax, 2          ; sys_open
    lea rdi, [maps_path]
    xor rsi, rsi        ; O_RDONLY = 0
    xor rdx, rdx
    syscall
    mov rbx, rax        ; rbx = fd

    ; Ler e imprimir:
.read_loop:
    mov rax, 0          ; sys_read
    mov rdi, rbx        ; fd
    lea rsi, [buf]
    mov rdx, 4096
    syscall
    test rax, rax
    jle .done

    ; Escrever no stdout:
    mov rdx, rax        ; bytes lidos
    mov rax, 1          ; sys_write
    mov rdi, 1          ; stdout
    lea rsi, [buf]
    syscall
    jmp .read_loop
.done:
    mov rax, 3
    mov rdi, rbx
    syscall`} />
    </PageContainer>
  );
}
