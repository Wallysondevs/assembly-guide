import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function RISCVInstrucoes() {
  return (
    <PageContainer title="Instruções RISC-V" subtitle="O conjunto base RV64I e pseudoinstruções" difficulty="intermediario" timeToRead="18 min">
      <p>RISC-V tem um conjunto de instruções muito limpo. A base RV64I tem apenas ~47 instruções. Pseudoinstruções são implementadas pelo assembler usando 1-2 instruções reais.</p>

      <h2>Instruções Aritméticas</h2>
      <CodeBlock language="bash" filename="arith.s" code={`# Formato R: OP rd, rs1, rs2
add  a0, a0, a1    # a0 = a0 + a1
sub  a0, a0, a1    # a0 = a0 - a1
and  a0, a0, a1    # a0 = a0 & a1
or   a0, a0, a1    # a0 = a0 | a1
xor  a0, a0, a1    # a0 = a0 ^ a1
sll  a0, a0, a1    # a0 = a0 << a1 (shift left logical)
srl  a0, a0, a1    # a0 = a0 >> a1 (shift right logical)
sra  a0, a0, a1    # a0 = a0 >> a1 (shift right arithmetic)
slt  a0, a1, a2    # a0 = (a1 < a2) ? 1 : 0 (signed)
sltu a0, a1, a2    # a0 = (a1 < a2) ? 1 : 0 (unsigned)

# Com M extension (multiplicação/divisão):
mul    a0, a0, a1  # a0 = a0 * a1 (low 64 bits)
mulh   a0, a0, a1  # a0 = (a0 * a1) >> 64 (high bits, signed)
mulhu  a0, a0, a1  # high bits, unsigned
div    a0, a0, a1  # a0 = a0 / a1 (signed)
divu   a0, a0, a1  # unsigned
rem    a0, a0, a1  # a0 = a0 % a1 (remainder, signed)
remu   a0, a0, a1  # unsigned

# Formato I: OP rd, rs1, imm (imediato de 12 bits, -2048 a 2047)
addi a0, a0, 10    # a0 += 10
addi sp, sp, -16   # sp -= 16 (alocar stack)
xori a0, a0, -1    # a0 = ~a0 (NOT via XOR com -1)
slli a0, a0, 3     # a0 <<= 3 (× 8)
srli a0, a0, 1     # a0 >>= 1 (unsigned)
srai a0, a0, 1     # a0 >>= 1 (signed, mantém sinal)
slti a0, a1, 100   # a0 = (a1 < 100) ? 1 : 0`} />

      <h2>LOAD e STORE</h2>
      <CodeBlock language="bash" filename="mem.s" code={`# LOAD: LD rd, offset(rs1)
ld   a0, 0(sp)     # a0 = *(sp + 0) — 64-bit
lw   a0, 4(sp)     # a0 = *(sp + 4) — 32-bit signed extend
lwu  a0, 4(sp)     # 32-bit zero extend
lh   a0, 2(sp)     # 16-bit signed extend
lhu  a0, 2(sp)     # 16-bit zero extend
lb   a0, 0(sp)     # 8-bit signed extend
lbu  a0, 0(sp)     # 8-bit zero extend

# STORE: ST rs2, offset(rs1)
sd   a0, 0(sp)     # *(sp + 0) = a0 — 64-bit
sw   a0, 4(sp)     # 32-bit store
sh   a0, 2(sp)     # 16-bit store
sb   a0, 0(sp)     # 8-bit store`} />

      <h2>Branches (Saltos Condicionais)</h2>
      <CodeBlock language="bash" filename="branch.s" code={`# Branches comparam dois registradores (não usa flags separadas!)
beq  a0, a1, label  # pula se a0 == a1
bne  a0, a1, label  # pula se a0 != a1
blt  a0, a1, label  # pula se a0 < a1 (signed)
bge  a0, a1, label  # pula se a0 >= a1 (signed)
bltu a0, a1, label  # pula se a0 < a1 (unsigned)
bgeu a0, a1, label  # pula se a0 >= a1 (unsigned)`} />

      <h2>Jump e Funções</h2>
      <CodeBlock language="bash" filename="jumps.s" code={`# JAL — Jump And Link (call function)
jal  ra, funcao     # ra = PC+4; PC = funcao
jal  x0, label      # pula sem salvar (como JMP incondicional)

# JALR — Jump And Link Register (return / indirect call)
jalr x0, ra, 0      # PC = ra (retorno de função)
jalr ra, t1, 0      # ra = PC+4; PC = t1 (call indireto)

# LUI — Load Upper Immediate (12 bits altos de endereço)
lui  a0, %hi(valor)        # a0 = upper 20 bits
addi a0, a0, %lo(valor)   # adiciona lower 12 bits

# AUIPC — Add Upper Immediate to PC (endereçamento PC-relativo)
auipc a0, %pcrel_hi(label)   # a0 = PC + upper 20 bits
addi  a0, a0, %pcrel_lo(label) # a0 = &label`} />

      <h2>Pseudoinstruções (Assembler Macros)</h2>
      <CodeBlock language="bash" filename="pseudo.s" code={`# Pseudoinstruções — o assembler converte para instruções reais

# Movimento e constantes:
li   a0, 42        # Load Immediate — addi/lui conforme necessário
la   a0, label     # Load Address
mv   a0, a1        # Move (→ addi a0, a1, 0)

# Comparação e desvio:
beqz a0, label     # pula se a0 == 0 (→ beq a0, x0, label)
bnez a0, label     # pula se a0 != 0
blez a0, label     # pula se a0 <= 0
bltz a0, label     # pula se a0 < 0
bgtz a0, label     # pula se a0 > 0
bgez a0, label     # pula se a0 >= 0

# Salto e chamadas:
j    label         # pulo (→ jal x0, label)
jr   ra            # retorno (→ jalr x0, ra, 0)
call funcao        # chamada de função longa (auipc+jalr)
ret                # retorno (→ jalr x0, ra, 0)
tail funcao        # tail call (sem salvar ra)

# Operações:
nop                # no-op (→ addi x0, x0, 0)
not  a0, a1        # a0 = ~a1 (→ xori a0, a1, -1)
neg  a0, a1        # a0 = -a1 (→ sub a0, x0, a1)
seqz a0, a1        # a0 = (a1 == 0) ? 1 : 0 (→ sltiu a0, a1, 1)
snez a0, a1        # a0 = (a1 != 0) ? 1 : 0`} />

      <AlertBox type="success" title="RISC-V é simples de aprender!">
        Com apenas ~47 instruções base, RISC-V é a arquitetura mais fácil para aprender os conceitos de Assembly. As pseudoinstruções tornam o código legível sem adicionar complexidade à ISA base.
      </AlertBox>
    </PageContainer>
  );
}
