import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Flags() {
  return (
    <PageContainer title="Registrador FLAGS" subtitle="As flags de status que controlam o fluxo do seu programa" difficulty="iniciante" timeToRead="12 min">
      <p>O registrador <strong>RFLAGS</strong> (64-bit) contém bits individuais que refletem o resultado de operações aritméticas e lógicas. As instruções de salto condicional (<code>JE</code>, <code>JG</code>, etc.) tomam decisões baseadas nessas flags.</p>

      <h2>Flags Mais Importantes</h2>

      <h3>Zero Flag (ZF) — Bit 6</h3>
      <p>Setada (1) quando o resultado de uma operação é <strong>zero</strong>.</p>
      <CodeBlock language="nasm" code={`mov rax, 5
sub rax, 5    ; rax = 0 → ZF = 1

mov rax, 5
sub rax, 3    ; rax = 2 → ZF = 0

; Usado com:
je  label     ; Jump if Equal (ZF = 1)
jne label     ; Jump if Not Equal (ZF = 0)
jz  label     ; Jump if Zero (ZF = 1) — mesmo que JE
jnz label     ; Jump if Not Zero (ZF = 0) — mesmo que JNE`} />

      <h3>Carry Flag (CF) — Bit 0</h3>
      <p>Setada quando há <strong>carry (transporte) ou borrow</strong> em operações sem sinal. Indica overflow para números unsigned.</p>
      <CodeBlock language="nasm" code={`; Unsigned overflow:
mov al, 255   ; al = 0xFF
add al, 1     ; al = 0x00 (overflow!), CF = 1

; Borrow:
mov al, 0
sub al, 1     ; al = 0xFF (borrow), CF = 1

; Usado com:
jc  label     ; Jump if Carry (CF = 1)
jnc label     ; Jump if No Carry (CF = 0)
jb  label     ; Jump if Below (unsigned <) — CF = 1
jae label     ; Jump if Above or Equal (unsigned >=) — CF = 0`} />

      <h3>Overflow Flag (OF) — Bit 11</h3>
      <p>Setada quando há <strong>overflow em operação com sinal</strong> (o resultado não cabe na representação de complemento de dois).</p>
      <CodeBlock language="nasm" code={`; Overflow em sinal:
mov al, 127   ; al = 0x7F (máximo positivo de 8-bit signed)
add al, 1     ; al = -128 (0x80), OF = 1!

mov al, -128  ; al = 0x80 (mínimo negativo)
sub al, 1     ; al = 127 (0x7F), OF = 1!

; Usado com:
jo  label     ; Jump if Overflow (OF = 1)
jno label     ; Jump if No Overflow (OF = 0)`} />

      <h3>Sign Flag (SF) — Bit 7</h3>
      <p>Cópia do bit mais significativo do resultado. Indica se o resultado é negativo (em representação com sinal).</p>
      <CodeBlock language="nasm" code={`mov rax, 5
sub rax, 10   ; rax = -5, SF = 1 (negativo)

mov rax, 10
sub rax, 5    ; rax = 5,  SF = 0 (positivo)

; Usado com:
js  label     ; Jump if Sign (SF = 1, resultado negativo)
jns label     ; Jump if No Sign (SF = 0, resultado positivo)`} />

      <h3>Parity Flag (PF) — Bit 2</h3>
      <p>Setada quando o byte menos significativo do resultado tem número par de bits 1. Usada em comunicação serial e cálculos de paridade.</p>
      <CodeBlock language="nasm" code={`mov al, 0b10110011   ; 4 bits 1 → PF = 1 (par)
mov al, 0b10110001   ; 3 bits 1 → PF = 0 (ímpar)

jp  label    ; Jump if Parity (PF = 1, par)
jnp label    ; Jump if No Parity (PF = 0, ímpar)`} />

      <h3>Auxiliary Carry Flag (AF) — Bit 4</h3>
      <p>Carry do nibble baixo para o alto. Usado principalmente em aritmética BCD (Binary-Coded Decimal).</p>

      <h3>Direction Flag (DF) — Bit 10</h3>
      <p>Controla a direção das operações de string (<code>MOVS</code>, <code>CMPS</code>, <code>SCAS</code>, <code>LODS</code>, <code>STOS</code>):</p>
      <CodeBlock language="nasm" code={`cld    ; Clear Direction Flag — DF = 0 → incrementa RSI/RDI
std    ; Set Direction Flag   — DF = 1 → decrementa RSI/RDI

; ABI exige que DF = 0 ao entrar/sair de funções!`} />

      <h2>Instrução CMP</h2>
      <p><code>CMP</code> realiza uma subtração mas <strong>descarta o resultado</strong>, mantendo apenas as flags:</p>
      <CodeBlock language="nasm" filename="cmp.asm" code={`cmp rax, rbx      ; calcula rax - rbx, seta flags, descarta resultado
; Se rax == rbx: ZF = 1, CF = 0
; Se rax <  rbx (unsigned): CF = 1
; Se rax >  rbx (unsigned): CF = 0, ZF = 0

cmp rax, 0        ; verifica se rax é zero
cmp byte [mem], 'A'  ; compara byte na memória com 'A'`} />

      <h2>Instrução TEST</h2>
      <p><code>TEST</code> realiza AND bit a bit mas <strong>descarta o resultado</strong>. Muito usado para verificar bits individuais:</p>
      <CodeBlock language="nasm" filename="test.asm" code={`test rax, rax      ; rax AND rax — seta ZF se rax = 0
                   ; MUITO mais curto que "cmp rax, 0"

test al, 1         ; verifica bit 0 (par/ímpar)
jz  .par           ; se ZF=1, bit 0 era 0 → par

test rax, 0x80     ; verifica bit 7 (sinal)
jnz .negativo      ; se ZF=0, bit 7 era 1 → negativo`} />

      <h2>Tabela de Saltos Condicionais</h2>
      <table>
        <thead><tr><th>Instrução</th><th>Condição</th><th>Flags</th><th>Tipo</th></tr></thead>
        <tbody>
          {[
            ["JE / JZ","Igual / Zero","ZF=1","signed/unsigned"],
            ["JNE / JNZ","Não igual / Não zero","ZF=0","signed/unsigned"],
            ["JL / JNGE","Menor que (signed)","SF≠OF","signed"],
            ["JLE / JNG","Menor ou igual (signed)","ZF=1 ou SF≠OF","signed"],
            ["JG / JNLE","Maior que (signed)","ZF=0 e SF=OF","signed"],
            ["JGE / JNL","Maior ou igual (signed)","SF=OF","signed"],
            ["JB / JNAE / JC","Abaixo (unsigned <)","CF=1","unsigned"],
            ["JBE / JNA","Abaixo ou igual (unsigned <=)","CF=1 ou ZF=1","unsigned"],
            ["JA / JNBE","Acima (unsigned >)","CF=0 e ZF=0","unsigned"],
            ["JAE / JNB / JNC","Acima ou igual (unsigned >=)","CF=0","unsigned"],
            ["JS","Sinal negativo","SF=1","qualquer"],
            ["JNS","Sinal positivo","SF=0","qualquer"],
            ["JO","Overflow","OF=1","qualquer"],
            ["JNO","Sem overflow","OF=0","qualquer"],
            ["JP / JPE","Paridade par","PF=1","qualquer"],
            ["JNP / JPO","Paridade ímpar","PF=0","qualquer"],
          ].map(([inst,cond,flags,tipo]) => (
            <tr key={inst}><td><code>{inst}</code></td><td>{cond}</td><td><code>{flags}</code></td><td>{tipo}</td></tr>
          ))}
        </tbody>
      </table>

      <AlertBox type="info" title="Signed vs Unsigned">
        Use JL/JG (signed) quando trabalhar com números que podem ser negativos. Use JB/JA (unsigned/below/above) quando trabalhar com valores sempre positivos (endereços, tamanhos, etc.).
      </AlertBox>

      <h2>Instrução SETCC — Condicional sem Salto</h2>
      <CodeBlock language="nasm" filename="setcc.asm" code={`; SETE, SETNE, SETL, SETG, etc. — settam um byte baseado em flags
cmp rax, rbx
sete al         ; al = 1 se rax == rbx, 0 caso contrário
setl al         ; al = 1 se rax < rbx (signed)
setb al         ; al = 1 se rax < rbx (unsigned)

; Útil para evitar branches em operações simples:
movzx eax, al   ; zero-extend o byte para 64-bit`} />

      <h2>LAHF e SAHF</h2>
      <CodeBlock language="nasm" code={`lahf    ; Load AH from Flags — copia SF,ZF,AF,PF,CF para AH
sahf    ; Store AH into Flags — restaura flags de AH

pushfq  ; Empilha RFLAGS na stack
popfq   ; Desempilha RFLAGS da stack`} />
    </PageContainer>
  );
}
