import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Bootloader() {
  return (
    <PageContainer title="Projeto: Bootloader" subtitle="Escrevendo um bootloader do zero que inicia em modo protegido" difficulty="expert" timeToRead="30 min">
      <p>Um bootloader é o primeiro código que roda quando o computador liga. O BIOS carrega 512 bytes (MBR) do disco para 0x7C00 e pula para lá. Nosso bootloader vai fazer a transição para modo protegido 32-bit.</p>

      <AlertBox type="info" title="Requisitos">
        Você precisará de QEMU para testar: <code>sudo apt install qemu-system-x86</code>. Nunca teste em hardware real sem saber exatamente o que está fazendo — pode danificar o MBR do disco.
      </AlertBox>

      <h2>Estrutura do Bootloader</h2>
      <CodeBlock language="bash" code={`bootloader/
├── boot.asm        — MBR/Stage 1 (512 bytes)
├── stage2.asm      — Stage 2 (carregado pelo boot.asm)
└── Makefile

# Compilar e testar:
nasm -f bin boot.asm -o boot.bin
# Verificar que tem exatamente 512 bytes:
wc -c boot.bin   # deve ser 512

# Testar no QEMU:
qemu-system-i386 -drive format=raw,file=boot.bin -nographic`} />

      <h2>Boot Stage 1 — O MBR</h2>
      <CodeBlock language="nasm" filename="boot.asm" code={`; boot.asm — MBR bootloader (512 bytes)
; Carregado pelo BIOS em 0x7C00
; Objetivo: Configurar stack, carregar Stage 2, ir para modo protegido

bits 16
org 0x7C00

STAGE2_SEGMENT equ 0x0000
STAGE2_OFFSET  equ 0x8000   ; Stage 2 carregado em 0x8000

start:
    ; Desabilitar interrupções
    cli

    ; Configurar segmentos
    xor ax, ax
    mov ds, ax
    mov es, ax
    mov ss, ax
    mov sp, 0x7C00      ; stack cresce abaixo do nosso código

    ; Salvar número do drive de boot (BIOS passa em DL)
    mov [boot_drive], dl

    ; Exibir mensagem
    mov si, msg_boot
    call print_string

    ; Carregar Stage 2 do disco:
    ; INT 13h, AH=02: Ler setor
    mov ah, 0x02        ; função: ler
    mov al, 16          ; ler 16 setores (8KB)
    mov ch, 0           ; trilha 0
    mov cl, 2           ; setor 2 (o 1 é nós mesmos)
    mov dh, 0           ; cabeça 0
    mov dl, [boot_drive]
    mov bx, STAGE2_OFFSET  ; ES:BX = destino
    int 0x13
    jc  disk_error      ; CF=1 se falhou

    mov si, msg_ok
    call print_string

    ; Carregar GDT:
    lgdt [gdt_descriptor]

    ; Habilitar modo protegido:
    mov eax, cr0
    or  eax, 1
    mov cr0, eax

    ; Far jump para Stage 2 (em código 32-bit):
    jmp 0x08:STAGE2_OFFSET  ; 0x08 = code segment da GDT

; === Subrotinas 16-bit ===
print_string:
    .loop:
        lodsb
        test al, al
        jz .done
        mov ah, 0x0E
        int 0x10
        jmp .loop
    .done:
        ret

disk_error:
    mov si, msg_err
    call print_string
    hlt

; === Dados ===
msg_boot db "Iniciando boot...", 13, 10, 0
msg_ok   db "Stage 2 carregado!", 13, 10, 0
msg_err  db "ERRO: falha ao ler disco!", 13, 10, 0
boot_drive db 0

; === GDT ===
gdt_start:
    ; Null descriptor:
    dq 0

    ; Code segment (Ring 0, 32-bit):
    dw 0xFFFF, 0x0000
    db 0x00, 0x9A, 0xCF, 0x00

    ; Data segment (Ring 0, 32-bit):
    dw 0xFFFF, 0x0000
    db 0x00, 0x92, 0xCF, 0x00
gdt_end:

gdt_descriptor:
    dw gdt_end - gdt_start - 1
    dd gdt_start

; === Assinatura de boot ===
times 510 - ($ - $$) db 0
dw 0xAA55`} />

      <h2>Stage 2 — Kernel Mínimo 32-bit</h2>
      <CodeBlock language="nasm" filename="stage2.asm" code={`; stage2.asm — continuação do boot em modo protegido 32-bit
bits 32
org 0x8000

SCREEN_BASE equ 0xB8000  ; VGA text mode buffer

stage2_main:
    ; Configurar segmentos de dados:
    mov ax, 0x10        ; data segment
    mov ds, ax
    mov es, ax
    mov fs, ax
    mov gs, ax
    mov ss, ax
    mov esp, 0x90000    ; nova stack em 512KB

    ; Limpar tela:
    call clear_screen

    ; Imprimir mensagem:
    mov esi, msg_pm
    mov edi, SCREEN_BASE
    mov ecx, 0x0A       ; attribute: bright green on black
    call print_pm

    ; Loop infinito:
.halt:
    hlt
    jmp .halt

; Limpar tela VGA:
clear_screen:
    mov edi, SCREEN_BASE
    mov eax, 0x07200720  ; espaço com atributo branco
    mov ecx, 80*25/2     ; 80×25 / 2 dwords
    rep stosd
    ret

; Imprimir string em modo texto VGA:
; ESI = string, EDI = destino VGA, ECX = atributo
print_pm:
.loop:
    movzx eax, byte [esi]
    test eax, eax
    jz  .done
    mov ah, cl           ; atributo
    mov [edi], ax        ; char + atributo
    inc esi
    add edi, 2           ; cada célula VGA = 2 bytes (char + attr)
    jmp .loop
.done:
    ret

msg_pm db "Modo Protegido 32-bit ativo! Bem-vindo ao seu OS.", 0`} />

      <CodeBlock language="makefile" filename="Makefile" code={`# Makefile para o bootloader
NASM = nasm

all: boot.img

boot.bin: boot.asm
	$(NASM) -f bin $< -o $@

stage2.bin: stage2.asm
	$(NASM) -f bin $< -o $@

boot.img: boot.bin stage2.bin
	# Concatenar stage1 (512 bytes) com stage2
	cat boot.bin stage2.bin > boot.img
	# Preencher para 1MB (imagem completa)
	truncate -s 1M boot.img

run: boot.img
	qemu-system-i386 -drive format=raw,file=boot.img -nographic

clean:
	rm -f *.bin *.img`} />
    </PageContainer>
  );
}
