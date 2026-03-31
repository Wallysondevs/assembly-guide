import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Win32API() {
  return (
    <PageContainer title="Win32 API em Assembly" subtitle="Chamando funções do Windows diretamente de Assembly" difficulty="avancado" timeToRead="15 min">
      <p>A Win32 API é a interface de programação do Windows. Em Assembly, você pode chamar qualquer função Win32 diretamente, seguindo a convenção Microsoft x64.</p>

      <h2>Conceitos Fundamentais</h2>
      <ul>
        <li><strong>HANDLE:</strong> Identificador opaco (ponteiro de 64-bit) para objetos do sistema</li>
        <li><strong>BOOL:</strong> Inteiro de 32-bit (0=FALSE, não-zero=TRUE)</li>
        <li><strong>LPSTR/LPCSTR:</strong> Ponteiro para string (char*)</li>
        <li><strong>HWND, HINSTANCE:</strong> HANDLEs específicos para janelas</li>
        <li><strong>DLL:</strong> kernel32.dll, user32.dll, gdi32.dll são as DLLs base</li>
      </ul>

      <h2>Janela Win32 Básica</h2>
      <CodeBlock language="nasm" filename="janela.asm" code={`; Janela Win32 mínima em Assembly (NASM, Windows x64)
; Compilar: nasm -f win64 janela.asm -o janela.obj
; Linkar: link janela.obj kernel32.lib user32.lib /SUBSYSTEM:WINDOWS /ENTRY:WinMain

extern MessageBoxA
extern ExitProcess
extern GetModuleHandleA

section .data
    titulo  db "Assembly Windows", 0
    texto   db "Hello, Win32 API em Assembly!", 0

section .text
    global WinMain

WinMain:
    sub rsp, 40         ; shadow space + alinhamento

    ; MessageBoxA(hwnd, text, caption, type)
    xor ecx, ecx        ; hwnd = NULL
    lea rdx, [rel texto]    ; lpText
    lea r8,  [rel titulo]   ; lpCaption
    mov r9d, 0              ; MB_OK
    call MessageBoxA

    ; ExitProcess(0)
    xor ecx, ecx
    call ExitProcess`} />

      <h2>File I/O Win32</h2>
      <CodeBlock language="nasm" filename="file_win32.asm" code={`; Ler e escrever arquivo com Win32 API
extern CreateFileA
extern ReadFile
extern WriteFile
extern CloseHandle
extern ExitProcess

GENERIC_READ    equ 0x80000000
GENERIC_WRITE   equ 0x40000000
OPEN_EXISTING   equ 3
CREATE_ALWAYS   equ 2

section .data
    filename     db "C:\\teste.txt", 0
    write_data   db "Escrito pelo Assembly!", 0
    write_len    equ $ - write_data - 1

section .bss
    read_buf     resb 256
    bytes_rw     resd 1    ; DWORD para bytes read/written

section .text
    global _start

_start:
    sub rsp, 56

    ; CreateFileA(path, access, share, security, disp, attr, template)
    lea rcx, [rel filename]     ; lpFileName
    mov rdx, GENERIC_WRITE      ; dwDesiredAccess
    xor r8, r8                  ; dwShareMode = 0
    xor r9, r9                  ; lpSecurityAttributes = NULL
    mov QWORD [rsp+32], CREATE_ALWAYS  ; dwCreationDisposition
    mov QWORD [rsp+40], 0x80    ; dwFlagsAndAttributes = NORMAL
    mov QWORD [rsp+48], 0       ; hTemplateFile = NULL
    call CreateFileA
    ; rax = HANDLE (ou INVALID_HANDLE_VALUE = -1)
    cmp rax, -1
    je .erro
    mov rbx, rax                ; salva handle

    ; WriteFile(handle, buffer, size, &bytesWritten, NULL)
    mov rcx, rbx                ; hFile
    lea rdx, [rel write_data]   ; lpBuffer
    mov r8,  write_len          ; nNumberOfBytesToWrite
    lea r9,  [rel bytes_rw]     ; lpNumberOfBytesWritten
    mov QWORD [rsp+32], 0       ; lpOverlapped = NULL
    call WriteFile

    ; CloseHandle(handle)
    mov rcx, rbx
    call CloseHandle

.erro:
    ; ExitProcess(0)
    xor ecx, ecx
    call ExitProcess`} />

      <h2>LoadLibrary e GetProcAddress</h2>
      <CodeBlock language="nasm" filename="dynamic_lib.asm" code={`; Carregar DLL e função em tempo de execução:
extern LoadLibraryA
extern GetProcAddress

section .data
    lib_name db "user32.dll", 0
    fn_name  db "MessageBoxW", 0

section .text
    sub rsp, 32

    ; LoadLibraryA("user32.dll")
    lea rcx, [rel lib_name]
    call LoadLibraryA
    ; rax = HMODULE

    test rax, rax
    jz .erro
    mov rbx, rax            ; salva HMODULE

    ; GetProcAddress(hModule, "MessageBoxW")
    mov rcx, rbx
    lea rdx, [rel fn_name]
    call GetProcAddress
    ; rax = ponteiro para a função

    test rax, rax
    jz .erro

    ; Chamar a função encontrada:
    ; MessageBoxW(NULL, L"Hello", L"Title", MB_OK)
    mov r11, rax            ; salva ponteiro da função
    xor ecx, ecx
    ; ... configurar argumentos para MessageBoxW ...
    call r11                ; chama indiretamente!`} />
    </PageContainer>
  );
}
