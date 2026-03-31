import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";

export default function ARMRegistradores() {
  return (
    <PageContainer title="Registradores ARM64" subtitle="Os 31 registradores gerais, registradores de sistema e flags do AArch64" difficulty="intermediario" timeToRead="12 min">
      <p>ARM64 (AArch64) tem 31 registradores gerais de propósito geral (X0-X30) mais o registrador zero (XZR). Cada registrador de 64-bit (Xn) também tem um acesso de 32-bit (Wn).</p>

      <h2>Registradores Gerais</h2>
      <table>
        <thead><tr><th>64-bit</th><th>32-bit</th><th>Uso na ABI</th></tr></thead>
        <tbody>
          {[
            ["X0-X7","W0-W7","Argumentos 1-8 e valores de retorno"],
            ["X8","W8","Indirect result (ponteiro de retorno de struct)"],
            ["X9-X15","W9-W15","Caller-saved (temporários)"],
            ["X16-X17","W16-W17","IP0, IP1 (Intra-procedure calls)"],
            ["X18","W18","Platform register (reservado em alguns OS)"],
            ["X19-X28","W19-W28","Callee-saved"],
            ["X29","W29","Frame Pointer (FP)"],
            ["X30","W30","Link Register (LR — endereço de retorno)"],
            ["XZR/WZR","-","Zero register (leitura = 0, escrita = descartado)"],
            ["SP","-","Stack Pointer (64-bit, sem W)"],
            ["PC","-","Program Counter (não lido/escrito diretamente)"],
          ].map(([r64,r32,uso]) => <tr key={r64}><td><code>{r64}</code></td><td><code>{r32}</code></td><td>{uso}</td></tr>)}
        </tbody>
      </table>

      <h2>Registrador Zero (XZR/WZR)</h2>
      <CodeBlock language="bash" filename="xzr.s" code={`// XZR é sempre zero — leitura retorna 0, escritas são descartadas
MOV X0, XZR      // X0 = 0 (mais eficiente que MOV X0, #0)
ADD X0, X1, XZR  // X0 = X1 + 0 = X1

// CMP usa XZR internamente:
CMP X0, #0       // equivalente a SUBS XZR, X0, #0
// seta flags N, Z, C, V`} />

      <h2>Flags NZCV do ARM64</h2>
      <table>
        <thead><tr><th>Flag</th><th>Significado</th><th>Setado quando</th></tr></thead>
        <tbody>
          {[
            ["N","Negative","resultado é negativo (MSB=1)"],
            ["Z","Zero","resultado é zero"],
            ["C","Carry","houve carry (overflow unsigned)"],
            ["V","oVerflow","houve overflow (signed)"],
          ].map(([f,s,q]) => <tr key={f}><td><strong>{f}</strong></td><td>{s}</td><td>{q}</td></tr>)}
        </tbody>
      </table>

      <h2>Registradores de Sistema</h2>
      <CodeBlock language="bash" code={`// Registradores de sistema acessados com MRS/MSR:
// (não são registradores gerais — acesso especial)

MRS X0, NZCV         // ler flags
MSR NZCV, X0         // escrever flags

MRS X0, CurrentEL    // ler nível de exceção atual (EL0=user, EL1=kernel)
MRS X0, DAIF         // ler interrupt mask flags
MRS X0, SPSel        // ler qual SP está ativo

// CNTVCT_EL0 — contador de tempo (equivalente ao TSC do x86):
MRS X0, CNTVCT_EL0   // ler contador
MRS X1, CNTFRQ_EL0   // frequência do contador (Hz)`} />

      <h2>SIMD em ARM: Registradores NEON/SVE</h2>
      <CodeBlock language="bash" code={`// ARM tem também registradores SIMD:
// V0-V31: registradores de 128 bits (NEON/Advanced SIMD)
//   B0-B31: 8-bit (byte)
//   H0-H31: 16-bit (half)
//   S0-S31: 32-bit (single float)
//   D0-D31: 64-bit (double)
//   Q0-Q31: 128-bit (quad)

// Exemplo NEON:
LD1 {V0.4S}, [X0]     // carrega 4 floats de X0
LD1 {V1.4S}, [X1]     // carrega 4 floats de X1
FADD V2.4S, V0.4S, V1.4S  // soma 4 floats
ST1 {V2.4S}, [X2]     // salva resultado

// SVE (Scalable Vector Extension) — vetores de tamanho variável:
// Disponível em ARM Cortex-X2, Neoverse, Amazon Graviton 3
// Tamanho de vetor pode ser 128, 256, 512, ... até 2048 bits!`} />
    </PageContainer>
  );
}
