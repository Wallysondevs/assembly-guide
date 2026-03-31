import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function MASM() {
  return (
    <PageContainer title="MASM — Microsoft Assembler" subtitle="O montador padrão do Windows — sintaxe Intel diferenciada" difficulty="intermediario" timeToRead="12 min">
      <p>MASM (Microsoft Macro Assembler) é o montador padrão do ecossistema Windows. Inclui no Visual Studio e MSVC. Tem a mesma sintaxe Intel que o NASM, mas com diferenças importantes de diretivas e segmentação.</p>

      <AlertBox type="info" title="MASM vs NASM">
        MASM e NASM usam ambos a sintaxe Intel (dest, src), mas têm diretivas diferentes. MASM é exclusivo do Windows. NASM é multiplataforma. Neste guia, priorizamos NASM, mas MASM é importante se você trabalha com Visual Studio.
      </AlertBox>

      <h2>Hello World em MASM</h2>
      <CodeBlock language="bash" filename="hello_masm.asm" code={`; hello_masm.asm — Windows x64 com MASM
; Compilar: ml64 /c hello_masm.asm
; Linkar: link hello_masm.obj kernel32.lib /SUBSYSTEM:CONSOLE

.DATA
    msg DB "Hello, MASM!", 0Dh, 0Ah, 0   ; CR LF NUL

.CODE

; Declarações externas (MASM style):
EXTERN GetStdHandle:PROC
EXTERN WriteConsoleA:PROC
EXTERN ExitProcess:PROC

MAIN PROC
    ; Shadow space: reservar 32 bytes antes de qualquer CALL
    sub rsp, 56         ; 32 shadow + 16 alinhamento + 8 para parâmetro

    ; GetStdHandle(STD_OUTPUT_HANDLE = -11)
    mov rcx, -11
    call GetStdHandle
    mov rbx, rax        ; handle = stdout

    ; WriteConsoleA(handle, msg, len, &written, NULL)
    mov rcx, rbx                ; handle
    lea rdx, msg                ; MASM: não precisa de [rel]!
    mov r8, 15                  ; tamanho
    lea r9, QWORD PTR [rsp+32]  ; &bytesWritten (no shadow space)
    mov QWORD PTR [rsp+40], 0   ; 5º argumento na stack
    call WriteConsoleA

    ; ExitProcess(0)
    xor ecx, ecx
    call ExitProcess

MAIN ENDP

END`} />

      <h2>Diretivas MASM vs NASM</h2>
      <table>
        <thead><tr><th>Conceito</th><th>NASM</th><th>MASM</th></tr></thead>
        <tbody>
          {[
            ["Seção de código","section .text",".CODE"],
            ["Seção de dados","section .data",".DATA"],
            ["Seção BSS","section .bss",".DATA?"],
            ["Definir byte","db 0x41","DB 41h"],
            ["Definir dword","dd 42","DD 42"],
            ["Definir qword","dq 42","DQ 42"],
            ["Reservar bytes","resb 100","BYTE 100 DUP (?)"],
            ["Constante","MY_CONST equ 42","MY_CONST EQU 42"],
            ["Global","global foo","foo PROC (PUBLIC)"],
            ["Extern","extern bar","EXTERN bar:PROC"],
            ["Incluir arquivo","%include 'file.inc'","INCLUDE file.inc"],
          ].map(([c,n,m]) => <tr key={c}><td>{c}</td><td><code>{n}</code></td><td><code>{m}</code></td></tr>)}
        </tbody>
      </table>

      <h2>Macros MASM</h2>
      <CodeBlock language="bash" filename="macros_masm.asm" code={`; Macros em MASM (sintaxe diferente do NASM):
; Macro sem argumentos:
PRINT_NEWLINE MACRO
    push rcx
    push rdx
    push r8
    push r9
    sub rsp, 32
    ; ... escrever CRLF ...
    add rsp, 32
    pop r9
    pop r8
    pop rdx
    pop rcx
ENDM

; Macro com argumentos:
INVOKE_FUNC MACRO funcname, arg1, arg2
    mov rcx, arg1
    mov rdx, arg2
    call funcname
ENDM

; Usar:
INVOKE_FUNC MyFunction, rax, rbx

; INVOKE — equivalente de MASM para chamadas tipo C:
INVOKE ExitProcess, 0  ; substitui: mov ecx, 0; call ExitProcess`} />

      <h2>MASM com Visual Studio</h2>
      <CodeBlock language="bash" code={`# No Visual Studio:
# Project → Add → New Item → C++ File → renomear para .asm
# Project Properties → Custom Build Tool → Command: ml64 /c "%(FullPath)"

# Linha de comando com MASM:
# Abrir Developer Command Prompt for VS 2022
ml64 arquivo.asm               # assemblar e linkar
ml64 /c arquivo.asm            # apenas assemblar (gera .obj)
link arquivo.obj kernel32.lib  # linkar manualmente`} />
    </PageContainer>
  );
}
