import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";

export default function RISCVRegistradores() {
  return (
    <PageContainer title="Registradores RISC-V" subtitle="Os 32 registradores, convenções de nome e ABI" difficulty="intermediario" timeToRead="10 min">
      <p>RISC-V tem 32 registradores de propósito geral (x0-x31). Cada um tem um nome ABI que indica seu uso convencional.</p>

      <h2>Tabela de Registradores RISC-V</h2>
      <table>
        <thead><tr><th>Registrador</th><th>ABI Name</th><th>Uso</th><th>Salvo por</th></tr></thead>
        <tbody>
          {[
            ["x0","zero","Sempre zero (imutável)","N/A"],
            ["x1","ra","Return Address (endereço de retorno)","Caller"],
            ["x2","sp","Stack Pointer","Callee"],
            ["x3","gp","Global Pointer","N/A"],
            ["x4","tp","Thread Pointer","N/A"],
            ["x5","t0","Temporário / alternativo RA","Caller"],
            ["x6-x7","t1-t2","Temporários","Caller"],
            ["x8","s0/fp","Saved / Frame Pointer","Callee"],
            ["x9","s1","Saved register","Callee"],
            ["x10-x11","a0-a1","Args / Return values","Caller"],
            ["x12-x17","a2-a7","Argumentos 3-8","Caller"],
            ["x18-x27","s2-s11","Saved registers","Callee"],
            ["x28-x31","t3-t6","Temporários","Caller"],
          ].map(([r,n,u,s]) => <tr key={r}><td><code>{r}</code></td><td><code>{n}</code></td><td>{u}</td><td>{s}</td></tr>)}
        </tbody>
      </table>

      <h2>Registradores Mais Usados</h2>
      <CodeBlock language="bash" code={`# x0 (zero) — sempre retorna 0, escritas são descartadas:
add a0, x0, x0    # a0 = 0 + 0 = 0 (equivale a: li a0, 0)
addi a0, x0, 42   # a0 = 0 + 42 = 42 (equivale a: li a0, 42)

# ra (x1) — Return Address:
# CALL salva o endereço de retorno em ra automaticamente
# Se a função chama outra função, deve salvar/restaurar ra

# sp (x2) — Stack Pointer:
# Cresce para baixo (como x86)
addi sp, sp, -16    # alocar 16 bytes na stack
# ... uso da stack ...
addi sp, sp, 16     # desalocar

# a0-a7 (x10-x17) — Argumentos:
# a0 e a1 também são os registradores de retorno
# func(a, b, c) → a em a0, b em a1, c em a2
# retorno simples em a0, retorno de 128-bit em a0:a1`} />

      <h2>Registradores de Float (F e D extensions)</h2>
      <CodeBlock language="bash" code={`# Com extensão F (float) ou D (double):
# ft0-ft7: float temporaries (caller-saved)
# fa0-fa7: float arguments/return values
# fs0-fs11: float saved (callee-saved)
# (ft8-ft11: mais temporários)

# Total: 32 registradores float (f0-f31)
# Em RV64D, cada registrador é de 64-bit (double)
# Registradores float separados dos inteiros!`} />

      <h2>CSRs — Control and Status Registers</h2>
      <CodeBlock language="bash" code={`# CSRs são registradores de controle do sistema
# Acessados com instruções especiais:
csrr a0, mhartid    # ler hardware thread ID (RISC-V usa 'harts')
csrr a0, mstatus    # ler machine status register
csrw mstatus, a0    # escrever em CSR
csrrs a0, mstatus, a1  # ler e setar bits
csrrc a0, mstatus, a1  # ler e limpar bits

# CSRs importantes:
# mhartid:   ID do hart (hart = hardware thread = CPU core)
# mstatus:   Status do processador (modo, interrupt enable, etc.)
# mtvec:     Trap Vector (endereço do handler de exceção)
# mepc:      Machine Exception Program Counter
# mcause:    Causa da última exceção
# satp:      Supervisor Address Translation and Protection (paginação)`} />
    </PageContainer>
  );
}
