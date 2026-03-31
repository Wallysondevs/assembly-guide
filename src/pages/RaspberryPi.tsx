import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function RaspberryPi() {
  return (
    <PageContainer title="Assembly no Raspberry Pi" subtitle="Programação bare-metal e GPIO com ARM Assembly" difficulty="avancado" timeToRead="15 min">
      <p>O Raspberry Pi usa processadores ARM Cortex-A e é uma plataforma perfeita para aprender Assembly ARM em hardware real. Você pode programar bare-metal (sem OS) ou escrever programas Assembly no Linux ARM64.</p>

      <AlertBox type="info" title="Modelos do Raspberry Pi">
        Pi 1/2/3 = ARM 32-bit (Cortex-A7/A53). Pi 4/5 = ARM 64-bit (Cortex-A72/A76). Use AArch64 no Pi 4/5 para programação moderna.
      </AlertBox>

      <h2>Configuração Inicial</h2>
      <CodeBlock language="bash" code={`# No Raspberry Pi OS (64-bit):
# Instalar ferramentas de desenvolvimento:
sudo apt update
sudo apt install build-essential gcc gdb

# Compilar Assembly ARM64:
as hello.s -o hello.o
ld hello.o -o hello
./hello

# Para cross-compilar do PC (x86):
sudo apt install gcc-aarch64-linux-gnu binutils-aarch64-linux-gnu qemu-user
aarch64-linux-gnu-as hello.s -o hello.o
aarch64-linux-gnu-ld hello.o -o hello
qemu-aarch64 ./hello`} />

      <h2>GPIO — Piscar LED (Bare Metal)</h2>
      <p>No Raspberry Pi, você pode controlar o GPIO acessando registradores de hardware diretamente em Assembly:</p>
      <CodeBlock language="bash" filename="gpio_blink.s" code={`// GPIO Blink no Raspberry Pi 4 (AArch64 Bare Metal)
// O GPIO do Pi 4 está mapeado em 0xFE200000

.equ GPIO_BASE,    0xFE200000
.equ GPFSEL1,      0x04    // GPIO Function Select 1 (pinos 10-19)
.equ GPSET0,       0x1C    // GPIO Pin Output Set 0
.equ GPCLR0,       0x28    // GPIO Pin Output Clear 0

// Pino GPIO 18 (bit 18 em GPSET0/GPCLR0)
// GPFSEL1 bits 24-26 controlam o modo do GPIO 18

.text
.global _start

_start:
    LDR X0, =GPIO_BASE

    // Configurar GPIO 18 como saída (FSEL18 = 001):
    LDR W1, [X0, #GPFSEL1]
    AND W1, W1, #~(7 << 24)     // limpar bits 24-26
    ORR W1, W1, #(1 << 24)      // setar como output (001)
    STR W1, [X0, #GPFSEL1]

blink_loop:
    // Acender LED (setar GPIO 18):
    MOV W1, #(1 << 18)
    STR W1, [X0, #GPSET0]

    // Delay:
    LDR X2, =2000000
delay1:
    SUBS X2, X2, #1
    B.NE delay1

    // Apagar LED (limpar GPIO 18):
    MOV W1, #(1 << 18)
    STR W1, [X0, #GPCLR0]

    LDR X2, =2000000
delay2:
    SUBS X2, X2, #1
    B.NE delay2

    B blink_loop`} />

      <h2>GPIO via /dev/mem (Linux)</h2>
      <CodeBlock language="bash" filename="gpio_mem.s" code={`// Via Linux — mmap do /dev/mem para acesso ao GPIO
// Mais seguro que bare metal para desenvolvimento

// Em C (mais fácil para o mmap):
// void *gpio = mmap(NULL, 4096, PROT_READ|PROT_WRITE,
//                  MAP_SHARED, fd, GPIO_BASE);
// Depois usa o ponteiro 'gpio' para acessar os registradores

// Em Assembly, você chamaria sys_mmap (9) e sys_open (2):
section .data
    devmem db "/dev/mem", 0

section .text
    ; sys_open("/dev/mem", O_RDWR|O_SYNC, 0)
    mov rax, 2
    lea rdi, [devmem]
    mov rsi, 0x1002     ; O_RDWR | O_SYNC
    xor rdx, rdx
    syscall
    mov rbx, rax        ; fd

    ; sys_mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_SHARED, fd, GPIO_BASE)
    mov rax, 9
    xor rdi, rdi
    mov rsi, 4096
    mov rdx, 3          ; PROT_READ | PROT_WRITE
    mov r10, 1          ; MAP_SHARED
    mov r8, rbx         ; fd
    mov r9, 0xFE200000  ; offset = GPIO_BASE
    syscall
    ; rax = ponteiro para GPIO mapeado`} />

      <h2>Usando UART para Debug</h2>
      <CodeBlock language="bash" filename="uart.s" code={`// Em sistemas bare metal, use UART para debug em vez de tela
// Pi 4 UART0 (PL011): 0xFE201000

.equ UART0_BASE, 0xFE201000
.equ UART0_DR,   0x00    // Data Register
.equ UART0_FR,   0x18    // Flag Register
.equ UART_FR_TXFF, (1 << 5)  // TX FIFO Full

// Enviar um char via UART:
uart_putchar:
    LDR X1, =UART0_BASE
.wait:
    LDR W2, [X1, #UART0_FR]     // ler flags
    TST W2, #UART_FR_TXFF       // TX FIFO cheia?
    B.NE .wait                   // espera se cheia
    STR W0, [X1, #UART0_DR]     // enviar byte
    RET`} />
    </PageContainer>
  );
}
