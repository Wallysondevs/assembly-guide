import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ABI() {
  return (
    <PageContainer title="ABI — Application Binary Interface" subtitle="Struct layout, alinhamento e compatibilidade binária entre compiladores" difficulty="avancado" timeToRead="15 min">
      <p>A <strong>ABI</strong> (Application Binary Interface) define como funções se comunicam em nível binário: passagem de argumentos, valores de retorno, layout de structs, alinhamento e mais. Duas linguagens só podem se comunicar se seguirem a mesma ABI.</p>

      <h2>Componentes da ABI</h2>
      <ul>
        <li><strong>Calling convention:</strong> Como argumentos são passados e retornados</li>
        <li><strong>Register usage:</strong> Quais registradores são caller/callee-saved</li>
        <li><strong>Stack alignment:</strong> Requisito de alinhamento antes de CALL</li>
        <li><strong>Struct layout:</strong> Tamanho, alinhamento e padding de cada campo</li>
        <li><strong>Name mangling:</strong> Como nomes de funções são codificados no binário</li>
        <li><strong>Exception handling:</strong> Como exceções C++ propagam</li>
      </ul>

      <h2>Struct Layout e Alinhamento</h2>
      <CodeBlock language="bash" code={`# Regra geral do System V x86-64 ABI para structs:
# Cada campo é alinhado ao MENOR de: (seu tamanho, 8 bytes)
# A struct é alinhada ao maior alinhamento de seus campos

# Exemplo:
# struct A {
#   char   c;  // 1 byte, alinhado a 1 → offset 0
#              // padding: 3 bytes (para alinhar int)
#   int    i;  // 4 bytes, alinhado a 4 → offset 4
#   double d;  // 8 bytes, alinhado a 8 → offset 8
# };
# sizeof(A) = 16 bytes (c=1 + pad=3 + i=4 + d=8)

# Verificar com GCC:
python3 -c "
import ctypes
class A(ctypes.Structure):
    _fields_ = [('c', ctypes.c_char),
                ('i', ctypes.c_int),
                ('d', ctypes.c_double)]
print('sizeof A:', ctypes.sizeof(A))  # 16
print('offset i:', A.i.offset)        # 4
print('offset d:', A.d.offset)        # 8
"`} />

      <h2>Passar Structs como Argumento</h2>
      <CodeBlock language="bash" code={`# Structs pequenas (≤ 16 bytes) passadas em registradores:
# Struct de 2 campos (int, int) = 8 bytes → em RDI
# Struct de 2 campos (long, long) = 16 bytes → em RDI:RSI
# Struct > 16 bytes → caller aloca espaço e passa ponteiro

# Exemplo:
# struct Point { int x, y; };  → 8 bytes → passado em RDI (não na stack!)
# struct Point p = {1, 2};
# foo(p);   → foo(RDI=0x00000002_00000001) (little-endian!)

# Struct grande (> 16 bytes) → ponteiro implícito:
# struct Big { long a, b, c; };  → 24 bytes → caller passa &big em RDI
# void foo(struct Big b);  → compilado como: void foo(struct Big *b);
# "hidden first argument"`} />

      <h2>Name Mangling em C++</h2>
      <CodeBlock language="bash" code={`# C++ altera os nomes de funções para incluir tipos:
# Permite overloading mas complica interoperabilidade

# C:  void foo(int x);  → símbolo: "foo"
# C++: void foo(int x); → símbolo: "_Z3fooi" (mangled)
# C++: void foo(double x); → "_Z3food" (overload diferente!)

# Para chamar C de C++, use extern "C":
# extern "C" void minha_funcao_c(int x);  // sem mangling!
# extern "C" { ... }  // bloco inteiro

# Demangle com c++filt:
echo "_Z3fooi" | c++filt
# foo(int)

nm -D libstdc++.so | c++filt | grep "operator new"`} />

      <h2>Compatibilidade entre Compiladores</h2>
      <AlertBox type="warning" title="ABI Instability em C++">
        C++ não tem uma ABI estável e portável! GCC e Clang no Linux (System V ABI) são geralmente compatíveis. MSVC no Windows usa uma ABI diferente. Por isso, bibliotecas C++ muitas vezes fornecem uma interface C (extern "C") para interoperabilidade.
      </AlertBox>
      <CodeBlock language="c" filename="abi_stable.c" code={`// Interface ABI estável via C:
// lib.h — interface pública
#ifdef __cplusplus
extern "C" {
#endif

void* lib_create();        // ponteiro opaco (estável!)
void  lib_destroy(void *); // sem nome mangled
int   lib_compute(void *, int x, int y);

#ifdef __cplusplus
}
#endif

// Implementação pode ser C++ internamente
// mas a interface ABI é C — portável e estável!`} />

      <h2>GOT e PLT — Relações Dinâmicas</h2>
      <CodeBlock language="bash" code={`# GOT (Global Offset Table): tabela de ponteiros para símbolos externos
# PLT (Procedure Linkage Table): trampolins para lazy binding

# Como funciona:
# 1. printf@plt → jump [printf@GOT]
# 2. Primeira chamada: GOT aponta para _dl_runtime_resolve (lazy binding)
# 3. _dl_runtime_resolve encontra printf na libc, escreve no GOT
# 4. Chamadas seguintes: GOT aponta diretamente para printf (rápido!)

# Ver PLT e GOT:
objdump -d programa | grep -A3 "@plt"
objdump -R programa  # ver relocações (GOT entries)`} />
    </PageContainer>
  );
}
