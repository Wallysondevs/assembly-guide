import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ARMIntroducao() {
  return (
    <PageContainer title="Introdução ao ARM" subtitle="A arquitetura dominante em dispositivos móveis e embarcados" difficulty="intermediario" timeToRead="15 min">
      <p>ARM é a arquitetura de processadores mais popular do mundo — está em todos os smartphones, tablets, Raspberry Pi, e agora em servidores (AWS Graviton) e desktops (Apple M1/M2). É uma arquitetura RISC, bem diferente do x86-64.</p>

      <h2>ARM vs x86-64</h2>
      <table>
        <thead><tr><th>Característica</th><th>x86-64</th><th>ARM (AArch64)</th></tr></thead>
        <tbody>
          {[
            ["Tipo","CISC","RISC"],
            ["Registradores gerais","16 (RAX-R15)","31 (X0-X30) + XZR"],
            ["Tamanho das instruções","Variável (1-15 bytes)","Fixo (4 bytes em A64)"],
            ["Modos","16/32/64-bit","32-bit (T32/A32) + 64-bit (A64)"],
            ["Acesso à memória","Direto em qualquer instrução","LOAD/STORE exclusivo"],
            ["Flags","RFLAGS","NZCV (N,Z,C,V)"],
            ["Fabricantes","Intel, AMD","Qualcomm, Apple, Cortex-A..."],
            ["Licença","Próprio","Licenciado pela ARM Ltd."],
          ].map(([c,x,a]) => <tr key={c}><td>{c}</td><td>{x}</td><td>{a}</td></tr>)}
        </tbody>
      </table>

      <h2>Princípios RISC do ARM</h2>
      <ul>
        <li><strong>Load/Store:</strong> Apenas LOAD e STORE acessam memória. Todas as operações são entre registradores.</li>
        <li><strong>Instruções fixas:</strong> Toda instrução tem exatamente 4 bytes (em A64), facilitando fetch e decode.</li>
        <li><strong>Muitos registradores:</strong> 31 registradores gerais reduzem acesso à memória.</li>
        <li><strong>Operações de 3 operandos:</strong> ADD X0, X1, X2 (dest, src1, src2) — sem destrutividade.</li>
      </ul>

      <h2>Modos de Execução ARM</h2>
      <CodeBlock language="bash" code={`# ARM tem múltiplos estados de execução:
# A64 (AArch64): 64-bit, instruções de 4 bytes
# A32 (AArch32): 32-bit ARM clássico, instruções de 4 bytes
# T32 (Thumb-2): modo compacto de 32-bit, instruções de 2 ou 4 bytes
# T16 (Thumb): modo mais compacto, instruções de 2 bytes (ARM Cortex-M)

# No Linux, um processo é 32-bit ou 64-bit — não pode misturar no mesmo thread
# (exceto com chamadas especiais)

# Verificar em qual modo o código roda:
uname -m    # aarch64 = 64-bit, armv7l = 32-bit`} />

      <h2>Hello World em ARM64 (AArch64)</h2>
      <CodeBlock language="nasm" filename="hello_arm.s" code={`// hello_arm.s — AArch64 (ARM64) Linux
// Compilar: as -o hello.o hello_arm.s && ld -o hello hello.o
// Ou: gcc -nostdlib hello_arm.s -o hello

.section .data
msg:    .ascii "Hello, ARM64!\\n"
msg_len = . - msg

.section .text
.global _start

_start:
    // write(1, msg, msg_len)
    mov x8, #64         // syscall: sys_write (número DIFERENTE do x86!)
    mov x0, #1          // fd = stdout
    ldr x1, =msg        // x1 = endereço da mensagem
    mov x2, #msg_len    // x2 = tamanho
    svc #0              // system call (não 'syscall'!)

    // exit(0)
    mov x8, #93         // syscall: sys_exit
    mov x0, #0          // exit code = 0
    svc #0`} />

      <AlertBox type="info" title="SVC vs SYSCALL">
        Em ARM64, a instrução para fazer system call é <code>SVC #0</code> (Supervisor Call), não <code>syscall</code>. Os números de syscall também são diferentes! No AArch64 Linux: write=64, exit=93, read=63.
      </AlertBox>

      <h2>Toolchain ARM no Linux</h2>
      <CodeBlock language="bash" code={`# Instalar toolchain ARM64 cross-compiler (para compilar no x86):
sudo apt install gcc-aarch64-linux-gnu binutils-aarch64-linux-gnu
sudo apt install qemu-user    # para executar binários ARM no x86

# Compilar:
aarch64-linux-gnu-gcc -o programa programa.c
aarch64-linux-gnu-as -o programa.o programa.s
aarch64-linux-gnu-ld -o programa programa.o

# Executar no x86 via QEMU:
qemu-aarch64 ./programa
qemu-aarch64 -L /usr/aarch64-linux-gnu ./programa  # com shared libs

# No Raspberry Pi ou outro hardware ARM, compile diretamente:
gcc -o programa programa.c   # sem cross-compiler`} />
    </PageContainer>
  );
}
