import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function SyscallsWindows() {
  return (
    <PageContainer title="System Calls no Windows" subtitle="NtAPI, syscall numbers e como o Windows funciona por baixo" difficulty="avancado" timeToRead="15 min">
      <p>No Windows, programas geralmente usam a <strong>Win32 API</strong> (kernel32.dll etc.) em vez de syscalls diretas. Mas existe uma camada de syscall nativa — a <strong>Native API (NtAPI)</strong> — usada por malware e ferramentas avançadas.</p>

      <h2>Windows vs Linux: Diferenças Fundamentais</h2>
      <table>
        <thead><tr><th>Aspecto</th><th>Linux</th><th>Windows</th></tr></thead>
        <tbody>
          <tr><td>Interface oficial</td><td>syscall direto</td><td>Win32 API (DLLs)</td></tr>
          <tr><td>Instrução de syscall</td><td>syscall</td><td>syscall (x64) ou int 0x2E</td></tr>
          <tr><td>Números de syscall</td><td>Estáveis entre versões</td><td>MUDAM entre versões do Windows!</td></tr>
          <tr><td>Argumento 1</td><td>RDI</td><td>RCX</td></tr>
          <tr><td>Convenção</td><td>System V AMD64</td><td>Microsoft x64</td></tr>
        </tbody>
      </table>

      <h2>Win32 API em Assembly</h2>
      <CodeBlock language="nasm" filename="win32.asm" code={`; Windows Assembly x64 com NASM
; Compilar: nasm -f win64 programa.asm -o programa.obj
; Linkar: link /SUBSYSTEM:CONSOLE programa.obj kernel32.lib

extern GetStdHandle
extern WriteConsoleA
extern ExitProcess

section .data
    msg    db "Hello, Windows!", 13, 10, 0
    msg_len equ $ - msg - 1

section .bss
    bytes_written resd 1

section .text
    global WinMain

WinMain:
    sub rsp, 56         ; shadow space (32) + alinhamento

    ; GetStdHandle(STD_OUTPUT_HANDLE = -11)
    mov rcx, -11        ; STD_OUTPUT_HANDLE
    call GetStdHandle
    mov rbx, rax        ; rbx = stdout handle

    ; WriteConsoleA(handle, buf, len, &written, NULL)
    mov rcx, rbx                ; handle
    lea rdx, [rel msg]          ; buffer
    mov r8,  msg_len            ; tamanho
    lea r9,  [rel bytes_written] ; &bytesWritten
    push 0                      ; NULL (lpReserved) — arg na stack
    call WriteConsoleA
    add rsp, 8                  ; limpar arg

    ; ExitProcess(0)
    xor rcx, rcx
    call ExitProcess`} />

      <h2>Native API (NtAPI) — Syscalls Diretas</h2>
      <AlertBox type="warning" title="Números instáveis">
        Os números de syscall do Windows mudam a cada versão (e às vezes a cada service pack). Use NtAPI com cuidado e sempre verifique a versão do Windows antes.
      </AlertBox>
      <CodeBlock language="nasm" filename="ntapi.asm" code={`; NtWriteFile — syscall direta no Windows 10/11
; Os números variam — isso é para fins educacionais!

; Estrutura de syscall Windows x64:
; RAX = syscall number
; RCX = 1º argumento
; RDX = 2º argumento
; R8  = 3º argumento
; R9  = 4º argumento
; Stack para mais argumentos
; syscall
; R10 = RCX antes do syscall (kernel preserva)

; NtWriteFile (número exemplo — Windows 10 1809)
NT_WRITE_FILE equ 0x8  ; VARIA por versão!

; Em malware, os números são encontrados por:
; 1. Leitura do arquivo ntdll.dll
; 2. Análise em tempo de execução
; 3. Tabelas online por versão do Windows`} />

      <h2>Estruturas Importantes do Windows</h2>
      <CodeBlock language="bash" filename="estruturas.txt" code={`; TEB (Thread Environment Block) — apontado pelo GS:
; [GS:0x30] = PEB (Process Environment Block)
; [GS:0x00] = SEH (Structured Exception Handler) em 32-bit

; PEB (Process Environment Block):
; [PEB+0x10] = Ldr (loader data)
; [PEB+0x60] = OSMajorVersion
; [PEB+0x64] = OSMinorVersion
; [PEB+0x2A0] = Heap

; Técnica de carregamento de API sem imports (shellcode):
; 1. Ler GS para obter TEB
; 2. TEB+0x60 = PEB
; 3. PEB+0x18 = Ldr
; 4. Ldr+0x20 = InMemoryOrderModuleList
; 5. Iterar DLLs carregadas (ntdll, kernel32...)
; 6. Parsear export table da DLL
; 7. Resolver GetProcAddress, LoadLibrary, etc.`} />

      <CodeBlock language="nasm" filename="find_kernel32.asm" code={`; Técnica para encontrar kernel32.dll sem import table
; Usada em shellcode e técnicas anti-análise

find_kernel32:
    ; Via PEB:
    mov rax, [gs:0x60]          ; rax = PEB

    ; PEB->Ldr->InMemoryOrderModuleList
    mov rax, [rax + 0x18]       ; Ldr
    mov rax, [rax + 0x20]       ; InMemoryOrderModuleList.Flink

    ; O primeiro módulo é o executável, segundo é ntdll, terceiro é kernel32
    mov rax, [rax]              ; avança: Flink
    mov rax, [rax]              ; avança novamente
    mov rax, [rax + 0x20]       ; DllBase = ponteiro para kernel32.dll
    ret`} />
    </PageContainer>
  );
}
