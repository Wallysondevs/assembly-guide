import { PageContainer } from "@/components/layout/PageContainer";
import { AlertBox } from "@/components/ui/AlertBox";
import { CodeBlock } from "@/components/ui/CodeBlock";

export default function Arquiteturas() {
  return (
    <PageContainer title="Arquiteturas de Processador" subtitle="x86, x86-64, ARM, RISC-V e as diferenças que importam" difficulty="iniciante" timeToRead="15 min">
      <p>Antes de escrever uma linha de Assembly, você precisa entender para qual processador está escrevendo. Cada arquitetura tem suas próprias instruções, convenções e quirks.</p>

      <h2>O que é uma ISA?</h2>
      <p><strong>ISA (Instruction Set Architecture)</strong> é o conjunto de instruções que um processador entende. É a "língua" do processador. Processadores diferentes têm ISAs diferentes — e Assembly para um não roda em outro.</p>
      <p>A ISA define:</p>
      <ul>
        <li>Quais instruções existem (<code>ADD</code>, <code>MOV</code>, <code>JMP</code>...)</li>
        <li>Quantos registradores existem e seus tamanhos</li>
        <li>Como a memória é endereçada</li>
        <li>Como interrupções e exceções funcionam</li>
        <li>O modelo de memória (little-endian, big-endian)</li>
      </ul>

      <h2>CISC vs RISC</h2>
      <p>A divisão mais fundamental no design de processadores:</p>
      <table>
        <thead><tr><th>Característica</th><th>CISC</th><th>RISC</th></tr></thead>
        <tbody>
          <tr><td>Exemplo</td><td>x86, x86-64</td><td>ARM, RISC-V, MIPS</td></tr>
          <tr><td>Instruções</td><td>Muitas, complexas, tamanho variável</td><td>Poucas, simples, tamanho fixo</td></tr>
          <tr><td>Ciclos por instrução</td><td>Variável (1-100+)</td><td>Geralmente 1</td></tr>
          <tr><td>Decodificação</td><td>Complexa e cara</td><td>Simples e rápida</td></tr>
          <tr><td>Registradores</td><td>Menos (x86: 16 gerais em 64-bit)</td><td>Mais (ARM64: 31, RISC-V: 32)</td></tr>
          <tr><td>Uso de memória</td><td>Código menor</td><td>Código maior, mais instruções</td></tr>
        </tbody>
      </table>

      <AlertBox type="info" title="CISC vs RISC hoje">
        Modernamente, a linha entre CISC e RISC borrou. Processadores x86-64 modernos internamente decodificam instruções CISC em micro-operações RISC. O x86 "parece" CISC para o programador, mas internamente é executado de forma RISC.
      </AlertBox>

      <h2>x86 — A Arquitetura Histórica</h2>
      <p>Começou com o Intel 8086 em 1978 (16-bit). Evoluiu para 32-bit com o 80386 em 1985 (também chamado de IA-32 ou i386). Mantém compatibilidade retroativa absurda — um binário DOS de 1985 ainda roda em Windows 11 (em modo de compatibilidade).</p>
      <ul>
        <li><strong>Registradores gerais 32-bit:</strong> EAX, EBX, ECX, EDX, ESI, EDI, ESP, EBP</li>
        <li><strong>Endereçamento:</strong> Little-endian, até 4GB de RAM em modo de 32 bits</li>
        <li><strong>Sintaxes:</strong> Intel (NASM) e AT&T (GAS) — duas formas de escrever o mesmo Assembly</li>
      </ul>

      <h2>x86-64 (AMD64) — O Foco deste Livro</h2>
      <p>Criado pela AMD em 2003, estende x86 para 64 bits. Intel adotou como EM64T. É o que roda em praticamente todo servidor, laptop e desktop em 2025.</p>
      <ul>
        <li><strong>Registradores gerais 64-bit:</strong> RAX, RBX, RCX, RDX, RSI, RDI, RSP, RBP, R8-R15 (16 total)</li>
        <li><strong>Espaço de endereçamento:</strong> Teoricamente 2^64 bytes, praticamente 256TB</li>
        <li><strong>Registradores SIMD:</strong> XMM0-XMM15 (128-bit), YMM0-YMM15 (256-bit), ZMM0-ZMM31 (512-bit)</li>
        <li><strong>Calling convention:</strong> System V AMD64 ABI no Linux, Microsoft x64 no Windows</li>
      </ul>

      <CodeBlock language="nasm" filename="x86_64.asm" code={`; x86-64 — sintaxe Intel (NASM)
section .text
global _start

_start:
    mov rax, 60       ; syscall number: exit
    xor rdi, rdi      ; exit code: 0
    syscall           ; chama o kernel`} />

      <h2>ARM — O Gigante Mobile</h2>
      <p>ARM (Advanced RISC Machine) domina smartphones, tablets e sistemas embarcados. O Apple Silicon M1/M2/M3 é ARM — e mostrou ao mundo que ARM pode competir com x86 em desktops.</p>

      <h3>ARMv7 (32-bit)</h3>
      <ul>
        <li>Registradores: R0-R15 (16 registradores de 32-bit)</li>
        <li>R13 = SP (Stack Pointer), R14 = LR (Link Register), R15 = PC (Program Counter)</li>
        <li>Suporte a modo Thumb (instruções de 16-bit para menor código)</li>
      </ul>

      <h3>AArch64 / ARM64 (64-bit)</h3>
      <ul>
        <li>Registradores: X0-X30 (31 registradores de 64-bit) + XZR (zero register)</li>
        <li>W0-W30: versões 32-bit dos mesmos registradores</li>
        <li>Muito mais limpo que ARMv7 — é o futuro do ARM</li>
      </ul>

      <CodeBlock language="nasm" filename="aarch64.s" code={`// AArch64 — sintaxe AT&T/GNU
.section .text
.global _start

_start:
    mov x0, #0       // exit code: 0
    mov x8, #93      // syscall: exit
    svc #0           // chama o kernel`} />

      <h2>RISC-V — O Open Source</h2>
      <p>RISC-V (pronuncia-se "risk five") é uma ISA open-source criada em Berkeley em 2010. Qualquer pessoa pode implementar um processador RISC-V sem pagar royalties.</p>
      <ul>
        <li><strong>RV32I:</strong> Base 32-bit com 47 instruções</li>
        <li><strong>RV64I:</strong> Extensão 64-bit</li>
        <li><strong>Extensões:</strong> M (multiplicação), A (atômico), F (float), D (double), C (compressed), V (vetorial)</li>
        <li><strong>32 registradores:</strong> x0-x31, onde x0 é sempre zero</li>
      </ul>

      <CodeBlock language="nasm" filename="riscv.s" code={`# RISC-V — Assembly
.section .text
.global _start

_start:
    li a0, 0          # exit code: 0
    li a7, 93         # syscall: exit
    ecall             # chama o kernel`} />

      <h2>Qual aprender primeiro?</h2>
      <AlertBox type="success" title="Recomendação">
        Comece com <strong>x86-64</strong>. É o mais usado em ambientes de desenvolvimento e segurança. Depois que os conceitos estão claros, migrar para ARM ou RISC-V é muito mais fácil — os conceitos são os mesmos, só a sintaxe e os detalhes mudam.
      </AlertBox>

      <table>
        <thead><tr><th>Se seu interesse é...</th><th>Foco em...</th></tr></thead>
        <tbody>
          <tr><td>Segurança / CTF</td><td>x86-64 (Linux)</td></tr>
          <tr><td>Desenvolvimento de sistemas/OS</td><td>x86-64</td></tr>
          <tr><td>Mobile / iOS</td><td>AArch64 (ARM64)</td></tr>
          <tr><td>Raspberry Pi / Embarcados ARM</td><td>ARMv7 / AArch64</td></tr>
          <tr><td>Educação / Open-source hardware</td><td>RISC-V</td></tr>
          <tr><td>Jogos retro / consoles</td><td>MIPS, 68000, 6502</td></tr>
        </tbody>
      </table>
    </PageContainer>
  );
}
