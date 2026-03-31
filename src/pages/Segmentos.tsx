import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Segmentos() {
  return (
    <PageContainer title="Segmentos de Memória" subtitle=".text, .data, .bss, .rodata e como o linker organiza um programa" difficulty="iniciante" timeToRead="15 min">
      <p>Um programa em Assembly é dividido em <strong>seções</strong> (ou segmentos), cada uma com propósito e permissões específicas. O linker organiza essas seções no executável final.</p>

      <h2>As Seções Principais</h2>

      <h3>.text — Código Executável</h3>
      <CodeBlock language="nasm" filename="texto.asm" code={`section .text
    global _start

_start:
    ; Código vai aqui
    ; Permissões: READ + EXECUTE (não escrevível)
    ; NX bit (No-eXecute) protege outras seções

    mov rax, 60
    xor rdi, rdi
    syscall`} />

      <h3>.data — Dados Inicializados</h3>
      <CodeBlock language="nasm" filename="data.asm" code={`section .data
    ; Dados que têm valor inicial e podem ser modificados em runtime
    ; Permissões: READ + WRITE (não executável)

    contador  dq 0          ; variável inteira inicializada com 0
    pi        dq 3.14       ; float
    mensagem  db "Hello!", 10, 0
    array     dq 1, 2, 3, 4, 5    ; array de 5 qwords
    matrix    times 9 dq 0         ; 9 qwords zerados (matriz 3×3)

    ; Declarações:
    ; db = define byte   (8-bit)
    ; dw = define word   (16-bit)
    ; dd = define dword  (32-bit)
    ; dq = define qword  (64-bit)
    ; dt = define tword  (80-bit, para x87 FPU)
    ; ddq = define dqword (128-bit, para XMM)
    ; do = define oword   (128-bit)`} />

      <h3>.rodata — Dados Somente Leitura</h3>
      <CodeBlock language="nasm" filename="rodata.asm" code={`section .rodata
    ; Dados que não mudam em runtime (constantes)
    ; Permissões: READ only (mais seguro — qualquer escrita causa segfault!)

    PI        dq 3.14159265358979
    MAX_SIZE  equ 1024            ; constante de compilação (não ocupa espaço)
    ERROR_MSG db "Erro fatal!", 0
    LOOKUP    db 0,1,1,2,3,5,8,13,21  ; tabela de Fibonacci

; Em NASM, .rodata é muitas vezes substituído por data (para simplicidade)
; GCC separa automaticamente: strings literais vão para .rodata`} />

      <h3>.bss — Dados Não Inicializados</h3>
      <CodeBlock language="nasm" filename="bss.asm" code={`section .bss
    ; Variáveis que são inicializadas com ZERO em runtime pelo OS
    ; Permissões: READ + WRITE
    ; VANTAGEM: não ocupa espaço no arquivo executável! (só na memória)
    ; O kernel zera essa região ao carregar o programa.

    buffer    resb 1024     ; reserva 1024 bytes
    intvar    resq 1        ; reserva 1 qword (8 bytes)
    floatvar  resq 1        ; reserva 8 bytes para um double

    ; res = "reserve":
    ; resb N = reserva N bytes
    ; resw N = reserva N words (2N bytes)
    ; resd N = reserva N dwords (4N bytes)
    ; resq N = reserva N qwords (8N bytes)`} />

      <h2>Layout Completo de um Programa</h2>
      <CodeBlock language="nasm" filename="layout_completo.asm" code={`; hello_completo.asm
section .rodata
    MSG db "Hello, World!", 10
    MSG_LEN equ $ - MSG

section .data
    contador dq 0

section .bss
    buffer resb 64

section .text
    global _start

_start:
    ; Incrementar contador
    inc qword [contador]

    ; Escrever mensagem
    mov rax, 1          ; sys_write
    mov rdi, 1          ; stdout
    lea rsi, [MSG]      ; ponteiro para string
    mov rdx, MSG_LEN    ; tamanho
    syscall

    ; Sair
    mov rax, 60
    xor rdi, rdi
    syscall`} />

      <h2>Verificando o Layout com readelf</h2>
      <CodeBlock language="bash" code={`$ readelf -S hello_completo
Section Headers:
  [Nr] Name      Type      Address          Off    Size    Flg
  [ 1] .rodata   PROGBITS  0000000000402000 002000 00000f  A
  [ 2] .data     PROGBITS  0000000000403000 003000 000008  WA
  [ 3] .bss      NOBITS    0000000000404000 004008 000040  WA
  [ 4] .text     PROGBITS  0000000000401000 001000 00002c  AX

; Flg (flags):
; A = Allocatable (mapeado na memória)
; W = Writable
; X = eXecutable
; NOBITS = .bss não tem dados no arquivo (apenas reserva memória)`} />

      <h2>Segmentos ELF (Program Headers)</h2>
      <CodeBlock language="bash" code={`$ readelf -l hello_completo

Program Headers:
  Type     Offset   VirtAddr           PhysAddr           FileSiz  MemSiz   Flg Align
  LOAD     0x000000 0x0000000000400000 0x0000000000400000 0x0000b0 0x0000b0 R   0x1000
  LOAD     0x001000 0x0000000000401000 0x0000000000401000 0x00002c 0x00002c R E 0x1000
  LOAD     0x002000 0x0000000000402000 0x0000000000402000 0x00000f 0x00000f R   0x1000
  LOAD     0x003000 0x0000000000403000 0x0000000000403000 0x000008 0x000048 RW  0x1000

; Múltiplos segmentos LOAD:
; R   = read-only (ELF headers)
; R E = read + execute (.text)
; R   = read-only (.rodata)
; RW  = read + write (.data + .bss)`} />

      <h2>TIMES — Repetição de Dados</h2>
      <CodeBlock language="nasm" filename="times.asm" code={`section .data
    ; TIMES N instrução — repete N vezes
    zeros   times 100 db 0     ; 100 bytes zeros
    ffs     times 32  db 0xFF  ; 32 bytes 0xFF
    
    ; Útil para alinhar dados:
    db "hello"
    times (16 - ($ - $$) % 16) db 0  ; pad para próximo múltiplo de 16`} />

      <AlertBox type="info" title="Diretiva EQU vs DB">
        <code>EQU</code> define uma constante em tempo de compilação — não aloca memória. <code>DB/DW/DD/DQ</code> aloca espaço em memória. Use EQU para constantes que você referencia pelo valor, não pelo endereço.
      </AlertBox>
    </PageContainer>
  );
}
