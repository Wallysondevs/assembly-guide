import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";

export default function ExportarFuncoes() {
  return (
    <PageContainer title="Exportando Funções" subtitle="Criando bibliotecas compartilhadas em Assembly" difficulty="avancado" timeToRead="12 min">
      <p>Funções Assembly podem ser empacotadas em bibliotecas compartilhadas (.so no Linux, .dll no Windows) para reutilização em qualquer linguagem.</p>

      <h2>Criando uma Biblioteca Compartilhada</h2>
      <CodeBlock language="nasm" filename="libmatix.asm" code={`; libmatix.asm — biblioteca de operações matemáticas em Assembly
section .text

; Exportar símbolos para uso externo:
global matix_soma
global matix_multiplica
global matix_fatorial
global matix_potencia

; long matix_soma(long a, long b)
matix_soma:
    lea rax, [rdi + rsi]
    ret

; long matix_multiplica(long a, long b)
matix_multiplica:
    mov rax, rdi
    imul rax, rsi
    ret

; long matix_fatorial(long n)
matix_fatorial:
    mov rax, 1          ; acumulador
    cmp rdi, 1
    jle .fim
.loop:
    imul rax, rdi
    dec rdi
    cmp rdi, 1
    jg .loop
.fim:
    ret

; long matix_potencia(long base, long exp)
matix_potencia:
    ; base = rdi, exp = rsi, resultado = rax
    mov rax, 1          ; rax = 1 (resultado)
    test rsi, rsi
    jz  .fim
.loop:
    imul rax, rdi       ; rax *= base
    dec rsi
    jnz .loop
.fim:
    ret`} />

      <CodeBlock language="bash" filename="build_lib.sh" code={`# Compilar a .so (shared object):
# -fPIC = Position Independent Code (obrigatório para .so)
nasm -f elf64 -fPIC libmatix.asm -o libmatix.o

# Criar a biblioteca compartilhada:
ld -shared -o libmatix.so libmatix.o

# Verificar símbolos exportados:
nm -D libmatix.so

# Usar a biblioteca em C:
gcc main.c -L. -lmatix -Wl,-rpath,. -o programa
./programa`} />

      <CodeBlock language="c" filename="main_lib.c" code={`// Usar a biblioteca Assembly em C:
#include <stdio.h>

extern long matix_soma(long a, long b);
extern long matix_multiplica(long a, long b);
extern long matix_fatorial(long n);
extern long matix_potencia(long base, long exp);

int main() {
    printf("Soma(10, 5) = %ld\\n", matix_soma(10, 5));         // 15
    printf("Mult(6, 7) = %ld\\n", matix_multiplica(6, 7));     // 42
    printf("Fat(10) = %ld\\n", matix_fatorial(10));            // 3628800
    printf("Pot(2, 10) = %ld\\n", matix_potencia(2, 10));      // 1024
    return 0;
}`} />

      <h2>Criando uma DLL no Windows</h2>
      <CodeBlock language="nasm" filename="libmatix_win.asm" code={`; libmatix_win.asm — DLL para Windows
global matix_soma
global matix_multiplica
global DllMain

section .text

; DllMain — ponto de entrada da DLL (obrigatório no Windows)
; hinstDLL = rcx, fdwReason = rdx, lpvReserved = r8
DllMain:
    mov eax, 1          ; return TRUE
    ret

; As funções usam Microsoft x64 ABI (rcx, rdx, r8, r9...)!
matix_soma:
    lea rax, [rcx + rdx]   ; a=rcx, b=rdx (não rdi, rsi!)
    ret

matix_multiplica:
    mov rax, rcx
    imul rax, rdx
    ret`} />

      <CodeBlock language="bash" code={`# No Windows com NASM e MinGW:
nasm -f win64 libmatix_win.asm -o libmatix_win.obj
gcc -shared -o libmatix.dll libmatix_win.obj -Wl,--kill-at`} />
    </PageContainer>
  );
}
