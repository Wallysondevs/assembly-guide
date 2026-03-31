import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function InlineAssembly() {
  return (
    <PageContainer title="Assembly Inline em C/C++" subtitle="Integrando Assembly diretamente no código C com asm() do GCC" difficulty="avancado" timeToRead="20 min">
      <p>Assembly inline permite inserir instruções Assembly diretamente dentro de código C/C++. É o caminho mais comum para otimizações pontuais sem reescrever um programa inteiro em Assembly.</p>

      <h2>Sintaxe Básica (GCC)</h2>
      <CodeBlock language="c" filename="inline_basico.c" code={`// Forma simples (sem operandos):
asm("instrução");
asm("nop");           // No-operation
asm("cli");           // Clear interrupt flag (kernel only)
asm("hlt");           // Halt
asm("cpuid");         // CPU identification

// Múltiplas instruções (use \\n\\t entre elas):
asm("xor %eax, %eax\\n\\t"
    "xor %ebx, %ebx\\n\\t"
    "xor %ecx, %ecx");

// __asm__ é sinônimo de asm (evita conflitos com código C++):
__asm__("nop");`} />

      <h2>Sintaxe Estendida com Operandos</h2>
      <CodeBlock language="c" filename="inline_extendido.c" code={`// Sintaxe completa:
asm volatile (
    "instruções"
    : outputs          // lista de saídas
    : inputs           // lista de entradas
    : clobbers         // registradores/memória modificados
);

// Exemplo: ler TSC (Time Stamp Counter) — ciclos de CPU
uint64_t rdtsc() {
    uint32_t lo, hi;
    asm volatile (
        "rdtsc"
        : "=a"(lo),    // output: EAX → lo
          "=d"(hi)     // output: EDX → hi
        :              // sem inputs
        :              // sem clobbers
    );
    return ((uint64_t)hi << 32) | lo;
}

// Exemplo: soma dois inteiros com ADD Assembly:
int soma_asm(int a, int b) {
    int resultado;
    asm volatile (
        "addl %2, %1"   // %1 = b, %2 = a: b += a
        : "=r"(resultado)  // output: qualquer registrador → resultado
        : "r"(b), "r"(a)   // inputs: b em %1, a em %2
    );
    return resultado;
}`} />

      <h2>Constraints (Restrições de Operandos)</h2>
      <CodeBlock language="bash" code={`# Constraints de OUTPUT:
"=r"(var)    # qualquer registrador geral
"=m"(var)    # operando de memória
"=a"(var)    # especificamente EAX/RAX
"=b"(var)    # especificamente EBX/RBX
"=c"(var)    # especificamente ECX/RCX
"=d"(var)    # especificamente EDX/RDX
"=S"(var)    # especificamente ESI/RSI
"=D"(var)    # especificamente EDI/RDI
"=q"(var)    # registrador de byte (a,b,c,d)
"=Q"(var)    # registrador com parte high byte (a,b,c,d)
"+"(var)     # input e output no mesmo registrador

# Constraints de INPUT:
"r"(var)     # qualquer registrador
"m"(var)     # operando de memória
"i"(val)     # imediato (constante)
"0"          # mesmo registrador que operando 0
"a"(var)     # especificamente EAX/RAX

# Clobbers:
"eax","rbx"  # modificamos esses registradores
"memory"     # modificamos memória (barreira de memória)
"cc"         # modificamos as flags (FLAGS register)`} />

      <h2>Exemplos Práticos</h2>
      <CodeBlock language="c" filename="inline_pratico.c" code={`#include <stdint.h>
#include <stdbool.h>

// Rotação de bits (sem operador nativo em C!)
uint32_t rotl32(uint32_t value, int shift) {
    uint32_t result;
    asm volatile (
        "roll %%cl, %0"
        : "=r"(result)
        : "0"(value), "c"(shift)  // "c" = especificamente CL/RCX
    );
    return result;
}

// Inverter ordem dos bytes (bswap):
uint64_t bswap64(uint64_t x) {
    asm volatile ("bswapq %0" : "+r"(x));
    return x;
}

// Ler CR3 (kernel mode only):
uint64_t get_cr3() {
    uint64_t cr3;
    asm volatile ("mov %%cr3, %0" : "=r"(cr3));
    return cr3;
}

// Teste de bit (BT instruction):
bool test_bit(uint64_t value, int bit) {
    bool result;
    asm volatile (
        "btq %2, %1\\n\\t"   // BT: bit de 'value' no índice 'bit' → CF
        "setc %0"            // SETC: CF → result (0 ou 1)
        : "=qm"(result)
        : "r"(value), "r"((uint64_t)bit)
        : "cc"
    );
    return result;
}

// CPUID:
void cpuid(uint32_t leaf, uint32_t *eax, uint32_t *ebx,
           uint32_t *ecx, uint32_t *edx) {
    asm volatile (
        "cpuid"
        : "=a"(*eax), "=b"(*ebx), "=c"(*ecx), "=d"(*edx)
        : "a"(leaf)
    );
}`} />

      <h2>volatile — Por que é Necessário</h2>
      <AlertBox type="warning" title="asm volatile">
        <code>asm volatile</code> diz ao compilador: "não otimize, mova, ou elimine esta instrução". Sem <code>volatile</code>, o compilador pode reordenar ou remover o bloco asm se achar que o resultado não é usado.
      </AlertBox>
      <CodeBlock language="c" filename="volatile.c" code={`// Sem volatile — PERIGOSO: compilador pode eliminar ou reordenar:
asm("mfence");         // barreira de memória — pode ser eliminada!

// Com volatile — SEGURO:
asm volatile("mfence" ::: "memory");  // garante execução E barreira de memória

// Sequência de operações que precisa ser preservada:
uint64_t start, end;
asm volatile("rdtsc" : "=A"(start));   // inicia medição
// ... código a medir ...
asm volatile("rdtsc" : "=A"(end));     // finaliza medição
// Sem volatile, o compilador poderia reordenar!`} />

      <h2>Sintaxe Intel no GCC Inline</h2>
      <CodeBlock language="c" filename="intel_inline.c" code={`// Usar sintaxe Intel no GCC inline (GCC 9+):
int main() {
    int x = 5;
    asm volatile (
        ".intel_syntax noprefix\\n\\t"
        "mov eax, %0\\n\\t"   // sintaxe Intel!
        "add eax, 3\\n\\t"
        ".att_syntax prefix\\n\\t"  // voltar para AT&T
        :
        : "r"(x)
        : "eax"
    );
    return 0;
}`} />
    </PageContainer>
  );
}
