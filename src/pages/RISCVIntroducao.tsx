import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function RISCVIntroducao() {
  return (
    <PageContainer title="Introdução ao RISC-V" subtitle="A ISA aberta e modular que está conquistando o mundo embedded e acadêmico" difficulty="intermediario" timeToRead="15 min">
      <p><strong>RISC-V</strong> (pronuncia-se "RISC five") é uma arquitetura de conjunto de instruções (ISA) aberta e livre de royalties, desenvolvida na UC Berkeley. É modular, extensível e está crescendo rapidamente em aplicações embedded, HPC e pesquisa acadêmica.</p>

      <h2>Por que RISC-V é Especial</h2>
      <ul>
        <li><strong>Open Source:</strong> Qualquer empresa pode implementar RISC-V sem pagar royalties</li>
        <li><strong>Modular:</strong> Base mínima (RV32I) + extensões opcionais (M, A, F, D, C...)</li>
        <li><strong>Limpo:</strong> Design moderno sem 40 anos de bagagem legada como x86</li>
        <li><strong>Crescimento:</strong> SiFive, RISC-V em chips NVIDIA, Google, Western Digital</li>
        <li><strong>Acadêmico:</strong> Plataforma padrão em cursos de arquitetura de computadores</li>
      </ul>

      <h2>Extensões RISC-V</h2>
      <table>
        <thead><tr><th>Extensão</th><th>Significado</th><th>Instruções adicionadas</th></tr></thead>
        <tbody>
          {[
            ["RV32I/RV64I","Base integer","Instruções inteiras básicas"],
            ["M","Multiply/Divide","MUL, DIV, REM"],
            ["A","Atomic","Load-reserved/Store-conditional"],
            ["F","Float","Ponto flutuante 32-bit"],
            ["D","Double","Ponto flutuante 64-bit"],
            ["C","Compressed","Instruções de 16-bit (como Thumb)"],
            ["V","Vector","Instruções SIMD vetoriais"],
            ["G","General","= IMAFD (conjunto completo padrão)"],
          ].map(([e,s,i]) => <tr key={e}><td><code>{e}</code></td><td>{s}</td><td>{i}</td></tr>)}
        </tbody>
      </table>

      <h2>Hello World em RISC-V (Linux)</h2>
      <CodeBlock language="bash" filename="hello_riscv.s" code={`# hello_riscv.s — RISC-V 64-bit Linux
# Compilar: riscv64-linux-gnu-as hello_riscv.s -o hello.o
#           riscv64-linux-gnu-ld hello.o -o hello
# Executar: qemu-riscv64 ./hello

.section .data
msg:    .ascii "Hello, RISC-V!\\n"
msg_len = . - msg

.section .text
.global _start

_start:
    # write(1, msg, msg_len)
    li a7, 64           # syscall: sys_write (RISC-V Linux)
    li a0, 1            # fd = stdout
    la a1, msg          # a1 = &msg
    li a2, msg_len      # a2 = tamanho
    ecall               # system call (não syscall nem svc!)

    # exit(0)
    li a7, 93           # syscall: sys_exit
    li a0, 0            # exit code = 0
    ecall`} />

      <AlertBox type="info" title="ECALL em RISC-V">
        Em RISC-V, a instrução para fazer system call é <code>ecall</code> (Environment Call). O número da syscall vai em <code>a7</code>, e os argumentos em <code>a0-a5</code>. O retorno vem em <code>a0</code>.
      </AlertBox>

      <h2>Ferramentas RISC-V</h2>
      <CodeBlock language="bash" code={`# Instalar toolchain RISC-V (Ubuntu):
sudo apt install gcc-riscv64-linux-gnu binutils-riscv64-linux-gnu
sudo apt install qemu-user    # para emulação

# Compilar:
riscv64-linux-gnu-gcc -march=rv64gc -o programa programa.c
riscv64-linux-gnu-as -march=rv64gc programa.s -o programa.o
riscv64-linux-gnu-ld programa.o -o programa

# Executar no x86 via QEMU:
qemu-riscv64 ./programa

# Emulador completo (QEMU system):
qemu-system-riscv64 -machine virt -bios fw_jump.bin -kernel Image ...

# Hardware real:
# - SiFive HiFive Unmatched (~$665)
# - Lichee Pi 4A (~$100)
# - StarFive VisionFive 2 (~$55)`} />

      <h2>RISC-V vs ARM vs x86</h2>
      <table>
        <thead><tr><th>Característica</th><th>x86-64</th><th>ARM64</th><th>RISC-V 64</th></tr></thead>
        <tbody>
          {[
            ["Tipo","CISC","RISC","RISC"],
            ["Registradores","16","31","32"],
            ["Tamanho instrução","1-15 bytes","4 bytes","2-4 bytes (com C)"],
            ["Licença","Intel/AMD","ARM Ltd.","Aberto/livre"],
            ["Syscall instrução","syscall","svc","ecall"],
            ["Zero register","implícito","XZR","x0"],
          ].map(([c,x,a,r]) => <tr key={c}><td>{c}</td><td>{x}</td><td>{a}</td><td>{r}</td></tr>)}
        </tbody>
      </table>
    </PageContainer>
  );
}
