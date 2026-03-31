import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function CallingConventions() {
  return (
    <PageContainer title="Calling Conventions" subtitle="System V AMD64, Microsoft x64 e as regras de como funções se comunicam" difficulty="avancado" timeToRead="20 min">
      <p>Uma <strong>calling convention</strong> é um conjunto de regras que define como argumentos são passados, como o retorno é feito, e quais registradores cada parte deve preservar. Sem seguir a convenção, funções não podem se comunicar.</p>

      <h2>System V AMD64 ABI — Linux/macOS</h2>
      <p>A convenção padrão no Linux, macOS e BSD para x86-64:</p>

      <h3>Passagem de Argumentos (inteiros e ponteiros)</h3>
      <table>
        <thead><tr><th>Argumento</th><th>Registrador</th><th>Exemplo</th></tr></thead>
        <tbody>
          <tr><td>1º</td><td>RDI</td><td>foo(a, ...)</td></tr>
          <tr><td>2º</td><td>RSI</td><td>foo(a, b, ...)</td></tr>
          <tr><td>3º</td><td>RDX</td><td>foo(a, b, c, ...)</td></tr>
          <tr><td>4º</td><td>RCX</td><td>foo(a, b, c, d, ...)</td></tr>
          <tr><td>5º</td><td>R8</td><td>foo(a, b, c, d, e, ...)</td></tr>
          <tr><td>6º</td><td>R9</td><td>foo(a, b, c, d, e, f, ...)</td></tr>
          <tr><td>7º+</td><td>Stack</td><td>empilhados da direita para esquerda</td></tr>
        </tbody>
      </table>

      <h3>Passagem de Floats/Doubles</h3>
      <table>
        <thead><tr><th>Argumento float</th><th>Registrador</th></tr></thead>
        <tbody>
          {["XMM0","XMM1","XMM2","XMM3","XMM4","XMM5","XMM6","XMM7"].map((r,i) => (
            <tr key={r}><td>{i+1}º float/double</td><td>{r}</td></tr>
          ))}
        </tbody>
      </table>

      <h3>Retorno de Valores</h3>
      <CodeBlock language="bash" code={`# Inteiros e ponteiros:
# Valor de 64-bit ou menor → RAX
# Valor de 128-bit → RDX:RAX

# Floats/doubles:
# 1 float/double → XMM0
# 2 floats/doubles (struct) → XMM0, XMM1

# Structs pequenas (≤ 16 bytes):
# passadas em RAX, RDX (ou XMM0, XMM1 se forem float)

# Structs grandes (> 16 bytes):
# caller aloca espaço e passa ponteiro em RDI (hidden first argument)
# todos os outros args deslocam um registrador`} />

      <h3>Registradores: Caller-Saved vs Callee-Saved</h3>
      <CodeBlock language="bash" code={`# Caller-Saved (scratch registers):
# RAX, RCX, RDX, RSI, RDI, R8, R9, R10, R11
# XMM0-XMM15
# Se você precisar desses valores após um CALL, salve-os ANTES do call!

# Callee-Saved (preserved registers):
# RBX, RBP, R12, R13, R14, R15
# Se uma função usar esses registradores, DEVE restaurá-los antes de RET
# (usando push no prólogo e pop no epílogo)

# Exemplo:
minha_funcao:
    push rbx     ; salvar registradores callee-saved que vou usar
    push r12
    push r13

    mov rbx, rdi     ; posso usar rbx livremente agora
    ; ... lógica ...

    pop r13      ; restaurar em ORDEM INVERSA
    pop r12
    pop rbx
    ret`} />

      <h2>Microsoft x64 ABI — Windows</h2>
      <AlertBox type="warning" title="Diferente do Linux!">
        Windows usa uma ABI diferente! Código compilado para Windows não é compatível com convenções Linux. Cuidado ao portar código Assembly.
      </AlertBox>

      <table>
        <thead><tr><th>Característica</th><th>System V (Linux)</th><th>Microsoft x64 (Windows)</th></tr></thead>
        <tbody>
          <tr><td>1º argumento int</td><td>RDI</td><td>RCX</td></tr>
          <tr><td>2º argumento int</td><td>RSI</td><td>RDX</td></tr>
          <tr><td>3º argumento int</td><td>RDX</td><td>R8</td></tr>
          <tr><td>4º argumento int</td><td>RCX</td><td>R9</td></tr>
          <tr><td>5º+ argumentos</td><td>R8, R9, stack</td><td>Stack (com shadow space!)</td></tr>
          <tr><td>1º argumento float</td><td>XMM0</td><td>XMM0</td></tr>
          <tr><td>Retorno int</td><td>RAX</td><td>RAX</td></tr>
          <tr><td>Retorno float</td><td>XMM0</td><td>XMM0</td></tr>
          <tr><td>Caller-saved</td><td>RAX,RCX,RDX,RSI,RDI,R8-R11,XMM0-15</td><td>RAX,RCX,RDX,R8-R11,XMM0-5</td></tr>
          <tr><td>Callee-saved</td><td>RBX,RBP,R12-R15</td><td>RBX,RBP,RDI,RSI,R12-R15,XMM6-15</td></tr>
          <tr><td>Red zone</td><td>128 bytes</td><td>NÃO existe</td></tr>
          <tr><td>Shadow space</td><td>NÃO existe</td><td>32 bytes obrigatórios</td></tr>
        </tbody>
      </table>

      <h3>Shadow Space no Windows</h3>
      <CodeBlock language="nasm" filename="windows_call.asm" code={`; Windows x64: SEMPRE reservar 32 bytes antes de qualquer CALL
; ("home space" ou "shadow space")

_start:
    sub rsp, 40       ; 32 bytes shadow + 8 bytes alinhamento (total=40)

    ; Chamar: MyFunc(1, 2, 3, 4)
    mov rcx, 1        ; 1º argumento (NOT rdi!)
    mov rdx, 2        ; 2º argumento
    mov r8,  3        ; 3º argumento
    mov r9,  4        ; 4º argumento
    call MyFunc

    add rsp, 40       ; restaurar stack

; Por que shadow space?
; A função chamada PODE escrever os registradores de args nesse espaço
; para facilitar debugging com argumentos variádicos`} />

      <h2>cdecl (32-bit Legacy)</h2>
      <CodeBlock language="nasm" filename="cdecl.asm" code={`; cdecl — convenção C de 32-bit
; Argumentos: na stack, da direita para esquerda
; Retorno: EAX (inteiros), EAX:EDX (64-bit), ST0 (float)
; Limpeza: responsabilidade do CALLER

; Chamada de printf("Hello %d", 42) em 32-bit:
push 42
push hello_fmt
call printf
add esp, 8          ; caller limpa a stack (2 argumentos × 4 bytes)`} />

      <h2>stdcall (32-bit Windows)</h2>
      <CodeBlock language="nasm" filename="stdcall.asm" code={`; stdcall — convenção padrão Win32 API
; Argumentos: na stack, da direita para esquerda
; Retorno: EAX
; Limpeza: responsabilidade do CALLEE (ret N)

MessageBoxA_stdcall:
    ; ... corpo ...
    ret 16          ; limpa 4 argumentos × 4 bytes = 16 bytes`} />

      <h2>Verificando a ABI com GCC</h2>
      <CodeBlock language="bash" code={`# Ver Assembly gerado pelo GCC para entender a ABI:
cat > teste.c << 'EOF'
int soma(int a, int b, int c, int d, int e, int f, int g) {
    return a+b+c+d+e+f+g;
}
EOF

gcc -S -O2 -masm=intel teste.c
cat teste.s

# Você verá que os primeiros 6 argumentos vêm de registradores
# e o 7º vem de [rbp+16] (stack)`} />
    </PageContainer>
  );
}
