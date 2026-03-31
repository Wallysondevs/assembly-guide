import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function KernelMinimo() {
  return (
    <PageContainer title="Projeto: Kernel Mínimo" subtitle="Do bootloader a um mini-kernel 64-bit com IDT e teclado" difficulty="expert" timeToRead="35 min">
      <p>Após o bootloader, podemos expandir para um kernel mínimo que inicializa a IDT (tabela de interrupções) e responde a teclas do teclado — o coração de um sistema operacional.</p>

      <AlertBox type="info" title="Projeto Avançado">
        Este projeto requer conhecimento de GDT, IDT, paginação e modo protegido. Recomende completar os capítulos Modo Real, Modo Protegido e Long Mode antes de continuar.
      </AlertBox>

      <h2>Estrutura do Projeto</h2>
      <CodeBlock language="bash" code={`minikernel/
├── boot/
│   ├── boot.asm        — MBR + switch para long mode
│   └── gdt.asm         — GDT de 64-bit
├── kernel/
│   ├── kmain.c         — ponto de entrada C
│   ├── idt.asm         — IDT e handlers
│   ├── idt.c           — configuração da IDT
│   ├── keyboard.c      — driver de teclado
│   └── vga.c           — driver VGA texto
├── linker.ld           — script do linker
└── Makefile`} />

      <h2>IDT — Interrupt Descriptor Table</h2>
      <CodeBlock language="nasm" filename="idt.asm" code={`; IDT handlers em Assembly
; O hardware salva: SS, RSP, RFLAGS, CS, RIP automaticamente
; Nós precisamos salvar os outros registradores

bits 64

section .text
    global isr_handler_asm
    global irq_handler_asm
    extern isr_handler_c
    extern irq_handler_c

; Macro para criar stubs de ISR (sem error code):
%macro ISR_NOERRCODE 1
global isr%1
isr%1:
    push 0              ; error code falso
    push %1             ; número do interrupt
    jmp isr_common_stub
%endmacro

; Macro para ISR com error code (automático):
%macro ISR_ERRCODE 1
global isr%1
isr%1:
    push %1             ; número do interrupt (error code já está na stack)
    jmp isr_common_stub
%endmacro

; Macro para IRQ:
%macro IRQ 2
global irq%1
irq%1:
    push 0
    push %2
    jmp irq_common_stub
%endmacro

; Exceções padrão:
ISR_NOERRCODE 0    ; Division by zero
ISR_NOERRCODE 1    ; Debug
ISR_NOERRCODE 2    ; NMI
ISR_NOERRCODE 3    ; Breakpoint
ISR_NOERRCODE 4    ; Overflow
ISR_NOERRCODE 5    ; Bound range exceeded
ISR_NOERRCODE 6    ; Invalid opcode
ISR_NOERRCODE 7    ; FPU not available
ISR_ERRCODE   8    ; Double fault
ISR_NOERRCODE 9    ; Coprocessor segment overrun
ISR_ERRCODE   10   ; Invalid TSS
ISR_ERRCODE   11   ; Segment not present
ISR_ERRCODE   12   ; Stack segment fault
ISR_ERRCODE   13   ; General protection fault
ISR_ERRCODE   14   ; Page fault

; IRQs:
IRQ 0, 32   ; Timer
IRQ 1, 33   ; Keyboard
IRQ 2, 34   ; Cascade
; ... etc

; Stub comum para todos os ISR:
isr_common_stub:
    ; Salvar todos os registradores:
    push rax
    push rbx
    push rcx
    push rdx
    push rsi
    push rdi
    push rbp
    push r8
    push r9
    push r10
    push r11
    push r12
    push r13
    push r14
    push r15

    ; Chamar handler em C:
    mov rdi, rsp        ; rdi = ponteiro para struct com todos os registradores
    call isr_handler_c

    ; Restaurar registradores:
    pop r15
    pop r14
    pop r13
    pop r12
    pop r11
    pop r10
    pop r9
    pop r8
    pop rbp
    pop rdi
    pop rsi
    pop rdx
    pop rcx
    pop rbx
    pop rax

    add rsp, 16         ; remover error code e número do interrupt
    iretq               ; retornar da interrupção

irq_common_stub:
    ; Similar ao isr_common_stub...`} />

      <h2>Driver de Teclado</h2>
      <CodeBlock language="c" filename="keyboard.c" code={`// Driver de teclado PS/2 mínimo
#include <stdint.h>

#define KEYBOARD_DATA_PORT   0x60
#define KEYBOARD_STATUS_PORT 0x64

// Ler um byte do teclado:
static inline uint8_t inb(uint16_t port) {
    uint8_t val;
    asm volatile ("inb %1, %0" : "=a"(val) : "Nd"(port));
    return val;
}

// Tabela de scancodes (Set 1):
static const char scancode_table[] = {
    0, 0x1B, '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    '-', '=', '\\b', '\\t', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i',
    'o', 'p', '[', ']', '\\n', 0, 'a', 's', 'd', 'f', 'g', 'h',
    'j', 'k', 'l', ';', 39, 96, 0, '\\\\', 'z', 'x', 'c', 'v',
    'b', 'n', 'm', ',', '.', '/', 0, '*', 0, ' ',
};

void keyboard_handler(uint8_t scancode) {
    // Bit 7 = tecla solta, bit 0-6 = scancode
    if (scancode & 0x80) return;  // key release — ignorar

    if (scancode < sizeof(scancode_table)) {
        char c = scancode_table[scancode];
        if (c) {
            // Exibir o caractere:
            vga_putchar(c);
        }
    }
}

// Chamado pelo IRQ 1 handler:
void keyboard_irq_handler() {
    uint8_t scancode = inb(KEYBOARD_DATA_PORT);
    keyboard_handler(scancode);
    // Enviar EOI para o PIC:
    outb(0x20, 0x20);  // EOI para PIC master
}`} />
    </PageContainer>
  );
}
