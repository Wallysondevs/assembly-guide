import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function BranchPrediction() {
  return (
    <PageContainer title="Branch Prediction" subtitle="Como o processador prevê saltos e como tirar vantagem disso" difficulty="avancado" timeToRead="15 min">
      <p><strong>Branch prediction</strong> é a técnica do processador para adivinhar o destino de saltos condicionais antes de avaliar a condição. Uma previsão correta mantém o pipeline cheio. Uma previsão errada (misprediction) custa 15-20 ciclos.</p>

      <h2>Por que Branch Prediction é Necessária</h2>
      <CodeBlock language="bash" code={`; Sem branch prediction, o pipeline precisa parar a cada JCC:
; Ciclo 1: Fetch JNE
; Ciclos 2-4: Avaliar condição (stall!)
; Ciclo 5: Fetch próxima instrução

; Com branch prediction:
; Ciclo 1: Fetch JNE (prevê que vai pular)
; Ciclo 2: Fetch instrução no destino (especulativo!)
; ...
; Ciclo 3: Condição avaliada: previsão correta → continua
;          Condição avaliada: previsão ERRADA → descarta trabalho especulativo,
;                              recarrega pipeline (15-20 ciclos perdidos)`} />

      <h2>Tipos de Previsão</h2>
      <ul>
        <li><strong>Estática (Predicted Not Taken):</strong> Assume que o branch não é tomado. GCC usa isso colocando o código "provável" no caminho não-tomado.</li>
        <li><strong>Histórico:</strong> O hardware mantém um Buffer de Predição que registra se o branch foi tomado nas últimas N vezes.</li>
        <li><strong>Global History:</strong> Usa o histórico de múltiplos branches para prever o próximo.</li>
        <li><strong>Indireto (BTB):</strong> Branch Target Buffer prevê o destino de saltos indiretos (jmp rax).</li>
      </ul>

      <h2>Hints para o Compilador</h2>
      <CodeBlock language="c" filename="likely.c" code={`// GCC tem builtins para dar hints ao compilador:
#define likely(x)   __builtin_expect(!!(x), 1)
#define unlikely(x) __builtin_expect(!!(x), 0)

// Exemplo:
if (unlikely(ptr == NULL)) {  // NULL é raro
    handle_error();
    return -1;
}
// código normal continua aqui (caminho preferido no layout de código)`} />

      <h2>Branchless Programming</h2>
      <CodeBlock language="nasm" filename="branchless.asm" code={`; Substituir branches por operações aritméticas/CMOV:

; PROBLEMA: if (x < 0) x = -x; (valor absoluto)
; COM BRANCH (ruim se imprevisível):
    test rax, rax
    jns .positivo
    neg rax
.positivo:

; SEM BRANCH — sempre mesmo tempo:
    mov rbx, rax
    sar rbx, 63         ; rbx = all 0s (positivo) ou all 1s (negativo)
    xor rax, rbx        ; flip bits se negativo
    sub rax, rbx        ; ajusta (complemento de 2)
    ; rax = |x|

; AINDA MAIS SIMPLES com CMOV:
    test rax, rax
    js  .neg
    jmp .fim
.neg:
    neg rax
.fim:
    ; Melhor versão:
    mov rbx, rax
    neg rbx             ; rbx = -rax
    test rax, rax
    cmovs rax, rbx      ; se negativo, rax = -rax
    ; UM branch eliminado!

; CLAMP — limitar ao range [0, MAX]:
; C: x = (x < 0) ? 0 : (x > MAX ? MAX : x)
    xor rbx, rbx
    cmp rax, 0
    cmovl rax, rbx     ; if x < 0, x = 0
    mov rbx, MAX
    cmp rax, rbx
    cmovg rax, rbx     ; if x > MAX, x = MAX`} />

      <h2>Organização de Loop para Melhor Predição</h2>
      <CodeBlock language="nasm" filename="loop_predict.asm" code={`; Loops têm alta taxa de predição (loop quase sempre continua)
; exceto na última iteração

; BONS padrões para predição:
; 1. Loops com contagem fixa — previsível!
    mov rcx, 1000
.loop:
    ; ... corpo ...
    dec rcx
    jnz .loop          ; previsto: tomado 999/1000 vezes

; 2. Loops com condição simples:
.while_loop:
    cmp [ptr], 0       ; null terminator?
    je  .fim           ; previsto: não tomado (a maioria não é null)
    inc ptr
    jmp .while_loop

; RUIM para predição — branch aleatório:
    ; if (random_bit) goto A; else goto B;
    ; 50% de chance de misprediction → catastrophic!

; SOLUÇÃO para branch aleatório — lookup table:
    ; int f(int x) { return (x < 5) ? tabela_a[x] : tabela_b[x]; }
    lea rbx, [tabela_a]
    lea rcx, [tabela_b]
    cmp rdi, 5
    cmovge rbx, rcx    ; seleciona a tabela sem branch!
    mov rax, [rbx + rdi*8]`} />

      <AlertBox type="info" title="Spectre e Branch Prediction">
        O ataque Spectre (2018) explorou a execução especulativa após branch misprediction para ler memória arbitrária. O processador executa código especulativo, deixa rastros no cache, e o atacante mede os tempos de acesso ao cache para inferir os dados. Mitigações incluem LFENCE após branches críticos.
      </AlertBox>
    </PageContainer>
  );
}
