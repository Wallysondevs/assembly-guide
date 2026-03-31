import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ARMThumb() {
  return (
    <PageContainer title="Thumb e ARM Thumb-2" subtitle="Instruções compactas de 16-bit para código mais denso" difficulty="avancado" timeToRead="12 min">
      <p><strong>Thumb</strong> é um subconjunto de instruções ARM de 16 bits (vs 32 bits do ARM clássico). <strong>Thumb-2</strong> é uma extensão que mistura instruções de 16 e 32 bits. Muito usado em microcontroladores (STM32, Arduino) e kernels embarcados.</p>

      <h2>Por que Thumb?</h2>
      <ul>
        <li>Menor tamanho de código (~30% menor que ARM de 32-bit)</li>
        <li>Melhor densidade de código = mais instruções na cache = mais rápido em sistemas com cache pequena</li>
        <li>Arm Cortex-M (microcontroladores) só roda Thumb-2 — sem modo ARM clássico</li>
        <li>iOS e Android usam Thumb-2 extensivamente</li>
      </ul>

      <h2>Diferenças Thumb vs ARM (32-bit)</h2>
      <table>
        <thead><tr><th>Característica</th><th>ARM (A32)</th><th>Thumb (T16)</th></tr></thead>
        <tbody>
          {[
            ["Tamanho instrução","4 bytes","2 bytes"],
            ["Registradores disponíveis","R0-R15","R0-R7 (maioria)"],
            ["Execução condicional","Qualquer instrução","Apenas branches"],
            ["Barrel shifter","Em qualquer instrução","Operação separada"],
            ["MUL","R0 = Rm × Rs","MULS R0, R1 (result em R0)"],
          ].map(([c,a,t]) => <tr key={c}><td>{c}</td><td>{a}</td><td>{t}</td></tr>)}
        </tbody>
      </table>

      <h2>Hello World em Thumb-2 (Linux ARM 32-bit)</h2>
      <CodeBlock language="bash" filename="hello_thumb.s" code={`// hello_thumb.s — ARM 32-bit com Thumb-2
// Compilar: arm-linux-gnueabihf-as -mthumb -o hello.o hello_thumb.s
//           arm-linux-gnueabihf-ld -o hello hello.o

.syntax unified
.thumb                      // mudar para modo Thumb

.section .data
msg:    .ascii "Hello, Thumb!\\n"
msg_len = . - msg

.section .text
.global _start
.thumb_func                 // próxima função é Thumb

_start:
    // write(1, msg, msg_len)
    mov r7, #4              // syscall: sys_write (Linux ARM 32-bit)
    mov r0, #1              // fd = stdout
    ldr r1, =msg            // r1 = &msg
    mov r2, #msg_len        // r2 = tamanho
    svc #0                  // system call

    // exit(0)
    mov r7, #1              // syscall: sys_exit
    mov r0, #0
    svc #0`} />

      <h2>ARM Cortex-M — Thumb-2 Only</h2>
      <AlertBox type="info" title="Microcontroladores">
        Os populares STM32, Arduino (ATmega usa AVR, mas STM32 usa Thumb-2), e ESP32 (Xtensa, mas similar) são programados em Thumb-2. Se você desenvolve firmware embedded, é Thumb-2 que você usa.
      </AlertBox>
      <CodeBlock language="bash" filename="cortex_m.s" code={`// Exemplo STM32 — Piscar LED (Cortex-M4)
// Registradores de hardware do STM32F4:
.equ RCC_BASE,     0x40023800
.equ RCC_AHB1ENR,  0x30        // offset do clock enable register
.equ GPIOA_BASE,   0x40020000
.equ GPIOx_MODER,  0x00        // mode register
.equ GPIOx_ODR,    0x14        // output data register

.text
.thumb
.thumb_func
.global Reset_Handler

Reset_Handler:
    // 1. Habilitar clock do GPIOA:
    LDR R0, =RCC_BASE + RCC_AHB1ENR
    LDR R1, [R0]
    ORR R1, R1, #(1 << 0)      // bit 0 = GPIOA enable
    STR R1, [R0]

    // 2. Configurar PA5 como saída (LED):
    LDR R0, =GPIOA_BASE + GPIOx_MODER
    LDR R1, [R0]
    AND R1, R1, #~(3 << 10)    // limpar bits de modo PA5
    ORR R1, R1, #(1 << 10)     // setar como saída (01)
    STR R1, [R0]

    // 3. Loop infinito piscando:
loop:
    LDR R0, =GPIOA_BASE + GPIOx_ODR
    LDR R1, [R0]
    EOR R1, R1, #(1 << 5)      // toggle bit 5 (PA5)
    STR R1, [R0]

    LDR R1, =1000000            // delay simples
delay:
    SUBS R1, R1, #1
    BNE delay

    B loop`} />

      <h2>BKPT — Breakpoint em ARM</h2>
      <CodeBlock language="bash" code={`// Em ARM, breakpoints usam BKPT (não INT 3 como no x86):
BKPT #0         // software breakpoint
// O número (#0) é convenção — GDB usa BKPT #1 para seus breakpoints`} />
    </PageContainer>
  );
}
