import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";

export default function Diretivas() {
  return (
    <PageContainer title="Diretivas do NASM" subtitle="Comandos de controle do montador: seções, alinhamento e mais" difficulty="iniciante" timeToRead="12 min">
      <p>Diretivas são instruções para o <strong>montador</strong> (não para o processador). Elas controlam como o código é organizado, alinhado e gerado.</p>

      <h2>Diretivas de Seção</h2>
      <CodeBlock language="nasm" filename="secoes.asm" code={`; Mudar para seção .text (código):
section .text
    global _start
_start:
    ; código aqui

; Mudar para seção .data (dados inicializados):
section .data
    msg db "Hello", 10, 0
    num dq 42
    pi  dq 3.14159

; Mudar para seção .rodata (dados somente leitura):
section .rodata
    CONST_PI  dq 3.14159265358979
    ERROR_STR db "Erro: ", 0

; Mudar para seção .bss (dados não inicializados):
section .bss
    buffer resb 1024
    counter resq 1`} />

      <h2>Definição de Dados</h2>
      <CodeBlock language="nasm" filename="dados.asm" code={`section .data
    ; Define Byte — 8 bits:
    b1  db 0xFF             ; 1 byte = 255
    b2  db 'A'              ; 1 byte = 65 (código ASCII)
    b3  db "Hello", 0       ; 6 bytes: 72 65 6C 6C 6F 00
    b4  db 1, 2, 3, 4, 5    ; 5 bytes

    ; Define Word — 16 bits:
    w1  dw 0x1234           ; 2 bytes: 34 12 (little-endian!)
    w2  dw 65535            ; 2 bytes

    ; Define DWord — 32 bits:
    d1  dd 0x12345678       ; 4 bytes
    d2  dd 3.14             ; 4 bytes, float IEEE 754

    ; Define QWord — 64 bits:
    q1  dq 0x123456789ABCDEF0  ; 8 bytes
    q2  dq 3.141592653589793   ; 8 bytes, double IEEE 754

    ; TIMES — repetição:
    zeros times 100 db 0    ; 100 bytes de zero
    magic times 4 dd 0xDEADBEEF ; 4 DWORDs

section .bss
    ; Reserve Byte/Word/DWord/QWord:
    buf1 resb 256           ; 256 bytes
    buf2 resw 128           ; 128 words = 256 bytes
    buf3 resd 64            ; 64 dwords = 256 bytes
    buf4 resq 32            ; 32 qwords = 256 bytes`} />

      <h2>Constantes EQU</h2>
      <CodeBlock language="nasm" filename="equ.asm" code={`; EQU — constante de compilação (não aloca memória!)
STDIN          equ 0
STDOUT         equ 1
STDERR         equ 2
PAGE_SIZE      equ 4096
BUFFER_SIZE    equ PAGE_SIZE * 4    ; expressões são avaliadas!
MAX_FILES      equ 1024

; Diferença entre EQU e definir na memória:
A  equ 42         ; A é uma constante (valor 42, sem endereço)
B  dq 42          ; B é uma variável de 8 bytes com valor 42

; Usar:
    mov rax, A    ; rax = 42 (literal)
    mov rax, [B]  ; rax = conteúdo de B (lê da memória)`} />

      <h2>Diretivas de Alinhamento</h2>
      <CodeBlock language="nasm" filename="align.asm" code={`; ALIGN N — alinha para próximo múltiplo de N
; Insere bytes de padding (NOP para .text, zeros para .data)

section .text
    align 16             ; alinha para 16 bytes (bom para loops)
.loop:
    ; ... código ...

section .data
    align 4              ; alinha variável de 4 bytes a 4 bytes
    intvar  dd 42

    align 8              ; alinha de 8 bytes a 8 bytes
    longvar dq 100

    align 16             ; alinha para SSE (128-bit)
    xmmdata dq 1.0, 2.0

    align 32             ; alinha para AVX (256-bit)
    ymmdata times 8 dd 1.0`} />

      <h2>Controle de Arquivos</h2>
      <CodeBlock language="nasm" filename="includes.asm" code={`; Incluir outro arquivo:
%include "defines.inc"
%include "macros.inc"

; Diretivas de formato:
bits 16              ; gerar código de 16 bits (modo real)
bits 32              ; gerar código de 32 bits (modo protegido)
bits 64              ; gerar código de 64 bits (padrão no Linux)

; Especificar formato de saída (apenas no arquivo principal):
; (na linha de comando: nasm -f elf64 arquivo.asm)

; Controle de warning:
[warning -macro-defaults]  ; desativar aviso específico

; Posição de origem:
org 0x7C00           ; para bootloaders — diz ao NASM onde o código será carregado
; $ = posição atual
; $$ = início da seção atual
; $ - $$ = offset dentro da seção`} />

      <h2>Diretivas de Exportação</h2>
      <CodeBlock language="nasm" filename="export.asm" code={`; GLOBAL — exportar símbolo (visível ao linker):
global _start           ; ponto de entrada
global minha_funcao     ; exportar função
global variavel_publica ; exportar variável

; EXTERN — importar símbolo de outro módulo:
extern printf
extern malloc
extern free

; Exemplo completo:
section .text
    global funcao_publica
    extern funcao_privada_em_outro_modulo

funcao_publica:
    call funcao_privada_em_outro_modulo
    ret`} />
    </PageContainer>
  );
}
