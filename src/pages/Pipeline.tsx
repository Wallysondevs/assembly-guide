import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Pipeline() {
  return (
    <PageContainer title="Pipeline do Processador" subtitle="Como o processador executa múltiplas instruções em paralelo" difficulty="avancado" timeToRead="15 min">
      <p>O <strong>pipeline</strong> é a técnica que permite ao processador executar várias instruções simultaneamente, em diferentes estágios. Entender o pipeline é crucial para escrever código Assembly de alta performance.</p>

      <h2>Estágios do Pipeline Clássico</h2>
      <CodeBlock language="bash" code={`; Pipeline clássico de 5 estágios (RISC):
; IF  — Instruction Fetch: busca instrução na memória
; ID  — Instruction Decode: decodifica e lê registradores
; EX  — Execute: ALU executa a operação
; MEM — Memory: acessa a memória (load/store)
; WB  — Write Back: escreve resultado no registrador

; Tempo sem pipeline (5 instruções × 5 ciclos = 25 ciclos):
; Instr1: IF ID EX MEM WB
; Instr2:             IF ID EX MEM WB
; ...

; Com pipeline (início a cada ciclo):
; Ciclo:   1   2   3   4   5   6   7   8   9
; Instr1: IF  ID  EX MEM  WB
; Instr2:     IF  ID  EX MEM  WB
; Instr3:         IF  ID  EX MEM  WB
; Instr4:             IF  ID  EX MEM  WB
; Instr5:                 IF  ID  EX MEM  WB
; Throughput: 1 instrução por ciclo (depois que pipeline está cheio)`} />

      <h2>Pipeline do Intel Core (Moderno)</h2>
      <p>Processadores Intel modernos têm pipelines muito mais profundos (14-20 estágios) com execução out-of-order:</p>
      <ul>
        <li><strong>Frontend:</strong> Fetch → Decode → Micro-op Queue → Issue → Rename/Dispatch</li>
        <li><strong>Out-of-Order Engine:</strong> Scheduler → Execute (múltiplas ALUs)</li>
        <li><strong>Backend:</strong> Retire (reorder buffer → commit em ordem)</li>
      </ul>
      <CodeBlock language="bash" code={`; Execução Out-of-Order:
; O processador pode executar instruções FORA DE ORDEM
; desde que não haja dependências de dados!

; Exemplo — pode executar a e b em paralelo:
add rax, rbx       ; instrução a (sem dependência de b)
add rcx, rdx       ; instrução b (pode executar ao mesmo tempo!)

; Dependência RAW (Read After Write) — serializa:
add rax, rbx       ; escreve rax
imul rax, rcx      ; lê rax — DEVE aguardar a anterior!`} />

      <h2>Hazards do Pipeline</h2>
      <h3>Data Hazard (Dependência de Dados)</h3>
      <CodeBlock language="nasm" filename="hazards.asm" code={`; RAW — Read After Write (mais comum):
mov rax, [mem]     ; latência 4-5 ciclos (cache hit)
add rbx, rax       ; STALL! rbx precisa de rax que ainda não está pronto

; Solução: reorganizar código para inserir instruções independentes:
mov rax, [mem1]    ; carrega mem1
mov rcx, [mem2]    ; carrega mem2 (independente — pipeline continua!)
add rbx, rax       ; usa rax (já está pronto)
add rdx, rcx       ; usa rcx (já está pronto)

; WAW — Write After Write:
add rax, rbx       ; escreve rax
mov rax, 0         ; sobrescreve rax — primeira escrita foi inútil
; O processador pode detectar e eliminar a primeira instrução`} />

      <h3>Control Hazard (Branch Misprediction)</h3>
      <CodeBlock language="nasm" filename="branch.asm" code={`; Branch misprediction = esvaziar o pipeline!
; Pode custar 15-20 ciclos em CPUs modernas

; Código com branch (potencialmente lento se imprevisível):
cmp rax, 0
jne .diferente
    ; código para zero
    jmp .fim
.diferente:
    ; código para não-zero
.fim:

; Código sem branch (CMOV — sempre rápido):
xor rbx, rbx       ; rbx = 0 (valor para "zero")
mov rcx, rax       ; rcx = rax (valor para "não-zero")
test rax, rax      ; verifica rax
cmovz rcx, rbx    ; se zero, use rbx
; rcx = resultado final sem branch!`} />

      <h2>Throughput vs Latência</h2>
      <table>
        <thead><tr><th>Instrução</th><th>Latência</th><th>Throughput</th></tr></thead>
        <tbody>
          {[
            ["MOV reg, reg","1 ciclo","0.25 (4/ciclo)"],
            ["ADD/SUB","1 ciclo","0.25-0.33"],
            ["IMUL 64-bit","3 ciclos","1"],
            ["DIV 64-bit","35-90 ciclos","25-74"],
            ["JMP/CALL","1 ciclo","0.5"],
            ["MOV reg, [mem] (L1 hit)","4 ciclos","0.5"],
            ["MOV reg, [mem] (L2 hit)","12 ciclos",""],
            ["MOV reg, [mem] (L3 hit)","40 ciclos",""],
            ["MOV reg, [mem] (RAM miss)","200+ ciclos",""],
            ["ADDPS (SSE float)","4 ciclos","0.5"],
            ["VADDPS (AVX float)","4 ciclos","0.5"],
          ].map(([i,l,t]) => <tr key={i}><td><code>{i}</code></td><td>{l}</td><td>{t}</td></tr>)}
        </tbody>
      </table>

      <h2>Instruction-Level Parallelism (ILP)</h2>
      <CodeBlock language="nasm" filename="ilp.asm" code={`; Maximizar ILP: manter múltiplos caminhos independentes

; LENTO — encadeamento de dependências:
mov rax, [arr]
add rax, [arr+8]     ; depende do anterior
add rax, [arr+16]    ; depende do anterior
add rax, [arr+24]    ; depende do anterior (latência acumulada!)

; RÁPIDO — múltiplos acumuladores independentes:
mov rax, [arr]
mov rbx, [arr+8]     ; independente de rax!
add rax, [arr+16]    ; usa rax
add rbx, [arr+24]    ; usa rbx (executado em paralelo com linha acima!)
add rax, rbx         ; combinação final

; Em CPUs modernas, com 4+ unidades de execução,
; múltiplos acumuladores podem dar ganho de 4×!`} />

      <AlertBox type="success" title="Regra de ouro para performance">
        A maior limitação de performance em código moderno raramente é a CPU — é a <strong>memória</strong>. Uma cache miss pode custar 200+ ciclos, durante os quais a CPU executa nada. Minimize acesso à memória e maximize reutilização de dados em cache.
      </AlertBox>
    </PageContainer>
  );
}
