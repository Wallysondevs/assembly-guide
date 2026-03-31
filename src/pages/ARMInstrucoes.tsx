import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ARMInstrucoes() {
  return (
    <PageContainer title="Instruções ARM64" subtitle="O conjunto completo de instruções AArch64" difficulty="intermediario" timeToRead="20 min">
      <p>ARM64 (AArch64) tem um conjunto de instruções limpo e regular. A principal diferença do x86-64 é a arquitetura LOAD/STORE: apenas LDR e STR acessam memória.</p>

      <h2>LOAD/STORE — Acesso à Memória</h2>
      <CodeBlock language="bash" filename="ldr_str.s" code={`// LDR — Load Register
LDR X0, [X1]          // X0 = *X1 (64-bit)
LDR W0, [X1]          // W0 = *(int*)X1 (32-bit, zero-extend)
LDRB W0, [X1]         // W0 = *(byte*)X1 (8-bit, zero-extend)
LDRH W0, [X1]         // W0 = *(short*)X1 (16-bit, zero-extend)
LDRSB X0, [X1]        // X0 = *(signed byte*)X1 (sign-extend)
LDRSH X0, [X1]        // X0 = *(signed short*)X1
LDRSW X0, [X1]        // X0 = *(signed int*)X1

// Modos de endereçamento:
LDR X0, [X1, #8]      // X0 = *(X1 + 8)  — offset imediato
LDR X0, [X1, X2]      // X0 = *(X1 + X2) — registro offset
LDR X0, [X1, X2, LSL #3]  // X0 = *(X1 + X2*8) — scaled offset

// Pre-indexado (atualiza X1 antes de ler):
LDR X0, [X1, #8]!     // X1 += 8; X0 = *X1

// Post-indexado (atualiza X1 depois de ler):
LDR X0, [X1], #8      // X0 = *X1; X1 += 8

// STR — Store Register
STR X0, [X1]          // *X1 = X0
STR W0, [X1, #8]      // *(X1+8) = W0 (32-bit)
STRB W0, [X1]         // *(byte*)X1 = W0

// Pair load/store (dois registradores de uma vez):
LDP X0, X1, [SP, #16]  // X0 = *(SP+16), X1 = *(SP+24)
STP X0, X1, [SP, #-16]! // SP -= 16; *(SP) = X0, *(SP+8) = X1`} />

      <h2>Operações Aritméticas</h2>
      <CodeBlock language="bash" filename="arith.s" code={`// Forma geral: OP Rd, Rn, Rm (ou imediato)
ADD X0, X1, X2         // X0 = X1 + X2
ADD X0, X1, #10        // X0 = X1 + 10
ADDS X0, X1, X2        // X0 = X1 + X2, seta flags (S = set flags)
SUB X0, X1, X2         // X0 = X1 - X2
SUBS X0, X1, X2        // seta flags
MUL X0, X1, X2         // X0 = X1 * X2 (low 64-bit)
UMULH X0, X1, X2       // X0 = (X1 * X2) >> 64 (high 64-bit, unsigned)
SMULH X0, X1, X2       // high 64-bit, signed
UDIV X0, X1, X2        // X0 = X1 / X2 (unsigned)
SDIV X0, X1, X2        // X0 = X1 / X2 (signed)
MSUB X0, X1, X2, X3   // X0 = X3 - X1 * X2 (multiply-subtract)
MADD X0, X1, X2, X3   // X0 = X3 + X1 * X2 (multiply-add)
// Módulo via: a - (a/b)*b:
UDIV X3, X0, X1        // X3 = a/b
MSUB X0, X3, X1, X0   // X0 = a - (a/b)*b = a % b`} />

      <h2>Shift e Bitwise</h2>
      <CodeBlock language="bash" filename="shifts.s" code={`// Shifts como modificadores de instrução:
LSL X0, X1, #3         // X0 = X1 << 3 (× 8)
LSR X0, X1, #3         // X0 = X1 >> 3 (unsigned)
ASR X0, X1, #3         // X0 = X1 >> 3 (signed, mantém sinal)
ROR X0, X1, #3         // X0 = rotate_right(X1, 3)

// Bitwise:
AND X0, X1, X2         // X0 = X1 & X2
ORR X0, X1, X2         // X0 = X1 | X2
EOR X0, X1, X2         // X0 = X1 ^ X2 (Exclusive OR)
BIC X0, X1, X2         // X0 = X1 & ~X2 (Bit Clear)
MVN X0, X1             // X0 = ~X1 (bitwise NOT)

// MOV e MOVZ/MOVN/MOVK:
MOV X0, X1             // X0 = X1
MOV X0, #42            // X0 = 42 (imediato pequeno)
MOVZ X0, #0x1234       // X0 = 0x0000000000001234 (zero outros)
MOVZ X0, #0x1234, LSL #16  // X0 = 0x0000000012340000
MOVK X0, #0x5678, LSL #32  // mantém outros bits, seta bits 32-47

// ADR — load address:
ADR X0, label          // X0 = endereço de 'label' (PC-relativo ±1MB)
ADRP X0, label         // X0 = página de 'label' (±4GB)
ADD X0, X0, :lo12:label // X0 = endereço completo de 'label'`} />

      <h2>Saltos e Chamadas</h2>
      <CodeBlock language="bash" filename="branch.s" code={`// Salto incondicional:
B label               // pula para label (não salva endereço de retorno)
BR X0                 // pula para endereço em X0

// Chamada de função (salva PC+4 em LR = X30):
BL label              // call label (branch and link)
BLR X0               // call via registrador

// Retorno:
RET                   // pula para X30 (LR)
RET X1               // pula para X1 (raramente usado)

// Saltos condicionais:
CMP X0, X1           // SUBS XZR, X0, X1
B.EQ label           // pula se igual (Z=1)
B.NE label           // pula se diferente
B.LT label           // pula se menor (signed)
B.GT label           // pula se maior (signed)
B.LE label           // menor ou igual
B.GE label           // maior ou igual
B.LO label           // menor (unsigned, =B.CC)
B.HI label           // maior (unsigned)
B.PL label           // positivo (N=0)
B.MI label           // negativo (N=1)

// Teste de bit:
TBZ X0, #5, label    // pula se bit 5 de X0 = 0
TBNZ X0, #5, label   // pula se bit 5 de X0 = 1
CBZ X0, label        // pula se X0 == 0
CBNZ X0, label       // pula se X0 != 0`} />

      <AlertBox type="info" title="Função Simples em ARM64">
        Diferente do x86-64, ARM64 não usa PUSH/POP para salvar o endereço de retorno. Em vez disso, BL salva o endereço de retorno em X30 (LR), e RET lê de X30. Se a função chama outra, precisa salvar X30 na stack manualmente com STP.
      </AlertBox>

      <h2>Funções em ARM64</h2>
      <CodeBlock language="bash" filename="funcao_arm.s" code={`.section .text
.global soma
.global fatorial

// long soma(long a, long b) — a=X0, b=X1, retorno=X0
soma:
    ADD X0, X0, X1          // X0 = a + b
    RET                     // retorna X0

// long fatorial(long n)
fatorial:
    // Prólogo — salvar LR e registradores callee-saved
    STP X29, X30, [SP, #-16]!   // salvar FP e LR, SP -= 16
    MOV X29, SP                  // FP = SP

    // Base case: if (n <= 1) return 1
    CMP X0, #1
    B.GT .recursivo
    MOV X0, #1
    LDP X29, X30, [SP], #16     // restaurar, SP += 16
    RET

.recursivo:
    // Salvar n (X0)
    STP X19, XZR, [SP, #-16]!  // salvar X19 (callee-saved)
    MOV X19, X0                 // X19 = n

    // fatorial(n-1)
    SUB X0, X0, #1
    BL fatorial                  // X0 = fatorial(n-1)

    // resultado = n * fatorial(n-1)
    MUL X0, X19, X0            // X0 = n * fatorial(n-1)

    // Epílogo
    LDP X19, XZR, [SP], #16
    LDP X29, X30, [SP], #16
    RET`} />
    </PageContainer>
  );
}
