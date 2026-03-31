import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Registradores() {
  return (
    <PageContainer title="Registradores x86-64" subtitle="As variáveis do processador — rápidos, limitados e poderosos" difficulty="iniciante" timeToRead="20 min">
      <p>Registradores são <strong>armazenamentos internos do processador</strong>. São extremamente rápidos (sem latência de memória) mas em número limitado. Em x86-64, existem 16 registradores gerais de 64 bits, além de registradores especiais.</p>

      <h2>Registradores de Propósito Geral (64-bit)</h2>
      <table>
        <thead><tr><th>64-bit</th><th>32-bit</th><th>16-bit</th><th>8-bit alto</th><th>8-bit baixo</th><th>Uso convencional</th></tr></thead>
        <tbody>
          {[
            ["RAX","EAX","AX","AH","AL","Acumulador / valor de retorno / syscall number"],
            ["RBX","EBX","BX","BH","BL","Base (preserved across calls)"],
            ["RCX","ECX","CX","CH","CL","Contador / 4º argumento"],
            ["RDX","EDX","DX","DH","DL","Dados / 3º argumento"],
            ["RSI","ESI","SI","-","SIL","Source Index / 2º argumento"],
            ["RDI","EDI","DI","-","DIL","Destination Index / 1º argumento"],
            ["RSP","ESP","SP","-","SPL","Stack Pointer (topo da stack)"],
            ["RBP","EBP","BP","-","BPL","Base Pointer (frame da stack)"],
            ["R8","R8D","R8W","-","R8B","5º argumento"],
            ["R9","R9D","R9W","-","R9B","6º argumento"],
            ["R10","R10D","R10W","-","R10B","Temporário"],
            ["R11","R11D","R11W","-","R11B","Temporário"],
            ["R12","R12D","R12W","-","R12B","Preserved (callee-saved)"],
            ["R13","R13D","R13W","-","R13B","Preserved (callee-saved)"],
            ["R14","R14D","R14W","-","R14B","Preserved (callee-saved)"],
            ["R15","R15D","R15W","-","R15B","Preserved (callee-saved)"],
          ].map(([r64,r32,r16,r8h,r8l,desc]) => (
            <tr key={r64}>
              <td><code>{r64}</code></td><td><code>{r32}</code></td><td><code>{r16}</code></td>
              <td><code>{r8h}</code></td><td><code>{r8l}</code></td><td>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Partes do Mesmo Registrador</h2>
      <p>Os nomes diferentes (RAX, EAX, AX, AL, AH) referem-se a <strong>partes do mesmo registrador físico</strong>:</p>
      <CodeBlock language="bash" code={`RAX (64-bit):  [63.....32][31.....16][15..8][7....0]
                               EAX (32)
                                         AX (16)
                                         AH (8)  AL (8)

# Se RAX = 0x1122334455667788:
# EAX = 0x55667788
# AX  = 0x7788
# AH  = 0x77
# AL  = 0x88`} />

      <AlertBox type="warning" title="Comportamento de escrita em 32-bit">
        Escrever em EAX (32-bit) automaticamente <strong>zera os 32 bits superiores de RAX</strong>. Mas escrever em AX (16-bit) ou AL/AH (8-bit) NÃO zera os bits superiores. Isso pode causar bugs sutis!
      </AlertBox>
      <CodeBlock language="nasm" filename="registradores.asm" code={`mov rax, 0xFFFFFFFFFFFFFFFF   ; rax = -1 (todos os bits 1)
mov eax, 0x12345678            ; rax = 0x0000000012345678 ← zeros automáticos!
mov ax, 0xABCD                 ; rax = 0x000000001234ABCD ← superiores intactos!
mov al, 0xFF                   ; rax = 0x000000001234ABFF ← superiores intactos!`} />

      <h2>Registrador RIP (Instruction Pointer)</h2>
      <p>Também chamado de <strong>Program Counter</strong>. Aponta para a próxima instrução a ser executada. Você não pode usar RIP como registrador geral, mas pode referenciar memória relativa a ele:</p>
      <CodeBlock language="nasm" filename="rip.asm" code={`; Endereçamento relativo ao RIP (x86-64 específico)
lea rax, [rel mensagem]    ; rax = endereço de 'mensagem' relativo ao RIP
mov rax, [rel variavel]    ; lê variável com endereçamento relativo`} />

      <h2>Registrador RFLAGS</h2>
      <p>Um registrador de 64 bits onde cada bit é uma "flag" que reflete o resultado de operações anteriores:</p>
      <table>
        <thead><tr><th>Flag</th><th>Bit</th><th>Nome</th><th>Descrição</th></tr></thead>
        <tbody>
          <tr><td>CF</td><td>0</td><td>Carry Flag</td><td>Resultado gerou carry/borrow (unsigned overflow)</td></tr>
          <tr><td>PF</td><td>2</td><td>Parity Flag</td><td>Número de bits 1 no byte baixo é par</td></tr>
          <tr><td>AF</td><td>4</td><td>Aux Carry</td><td>Carry no nibble baixo (BCD)</td></tr>
          <tr><td>ZF</td><td>6</td><td>Zero Flag</td><td>Resultado foi zero</td></tr>
          <tr><td>SF</td><td>7</td><td>Sign Flag</td><td>Resultado foi negativo (bit mais alto = 1)</td></tr>
          <tr><td>TF</td><td>8</td><td>Trap Flag</td><td>Single-step para debugging</td></tr>
          <tr><td>IF</td><td>9</td><td>Interrupt Enable</td><td>Interrupções habilitadas</td></tr>
          <tr><td>DF</td><td>10</td><td>Direction Flag</td><td>Direção das operações de string</td></tr>
          <tr><td>OF</td><td>11</td><td>Overflow Flag</td><td>Overflow em operação com sinal</td></tr>
        </tbody>
      </table>

      <h2>Registradores de Segmento</h2>
      <p>Herança do modo real x86. Em modo 64-bit, a maioria é ignorada exceto FS e GS que são usados para thread-local storage:</p>
      <CodeBlock language="bash" code={`CS — Code Segment (segmento de código)
DS — Data Segment (segmento de dados)
SS — Stack Segment (segmento da stack)
ES — Extra Segment
FS — Extra Segment 2 (thread-local storage no Linux)
GS — Extra Segment 3 (thread-local storage no Windows)`} />

      <h2>Registradores de Controle</h2>
      <p>Usados apenas no kernel (ring 0), não em código de usuário:</p>
      <CodeBlock language="bash" code={`CR0 — Controle do modo do processador (real/protegido/paginação)
CR2 — Endereço que causou page fault
CR3 — Endereço do Page Table Directory
CR4 — Features estendidas (SSE, PAE, etc.)
EFER — Extended Feature Enable Register (long mode, NX bit)`} />

      <h2>Registradores SIMD</h2>
      <p>Para operações vetoriais (SSE/AVX):</p>
      <ul>
        <li><strong>XMM0-XMM15:</strong> 128 bits cada. SSE/SSE2. Scalar float/double ou 4×float, 2×double, 16×byte, etc.</li>
        <li><strong>YMM0-YMM15:</strong> 256 bits cada (inclui XMM nos bits baixos). Requer AVX.</li>
        <li><strong>ZMM0-ZMM31:</strong> 512 bits cada (inclui YMM nos bits baixos). Requer AVX-512.</li>
      </ul>
      <CodeBlock language="nasm" filename="simd_regs.asm" code={`; Carregar 4 floats em XMM0 de uma vez
movaps xmm0, [floats]    ; Carrega 4 floats alinhados (128 bits)
addps  xmm0, xmm1        ; Soma os 4 pares de floats simultaneamente!

; Resultado: 4 somas com 1 instrução (SIMD = Single Instruction Multiple Data)`} />

      <h2>Convenção de uso (System V AMD64)</h2>
      <p>No Linux/Mac, a convenção de chamada define quem salva quais registradores:</p>
      <CodeBlock language="bash" code={`# Caller-saved (quem chama deve salvar se precisar):
# RAX, RCX, RDX, RSI, RDI, R8, R9, R10, R11
# XMM0-XMM15

# Callee-saved (quem é chamado deve restaurar):
# RBX, RBP, R12, R13, R14, R15

# Argumentos de função (em ordem):
# 1º: RDI
# 2º: RSI
# 3º: RDX
# 4º: RCX
# 5º: R8
# 6º: R9
# 7º+: na stack

# Retorno:
# Inteiro: RAX (e RDX para valores de 128 bits)
# Float: XMM0`} />
    </PageContainer>
  );
}
