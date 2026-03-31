import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function StackFrame() {
  return (
    <PageContainer title="Stack Frame" subtitle="Anatomia completa de um frame de função na stack" difficulty="avancado" timeToRead="15 min">
      <p>O <strong>stack frame</strong> (ou activation record) é o bloco de memória que cada chamada de função reserva na stack. Entender sua estrutura é fundamental para debugging, exploits e otimização.</p>

      <h2>Anatomia de um Stack Frame</h2>
      <CodeBlock language="bash" code={`; Após o prólogo de uma função (push rbp; mov rbp, rsp; sub rsp, N):
;
; Endereços crescentes ↑
;
; [rbp + 8*n]  ← argumentos extras (7º, 8º...) se houver
; [rbp + 16]   ← 7º argumento (se passou pela stack)
; [rbp +  8]   ← endereço de retorno (empilhado pelo CALL)
; [rbp +  0]   ← RBP anterior (empilhado pelo push rbp) ← RBP aponta aqui
; [rbp -  8]   ← variável local 1
; [rbp - 16]   ← variável local 2
; [rbp - 24]   ← variável local 3
; ...
; [rsp +  0]   ← última variável local ← RSP aponta aqui
;
; Endereços decrescentes ↓`} />

      <h2>Exemplo Real com Debugger</h2>
      <CodeBlock language="nasm" filename="frame_exemplo.asm" code={`; Função com 3 variáveis locais e 2 argumentos de registrador
; C equivalente:
; long calcular(long a, long b) {
;   long x = a + b;
;   long y = a * b;
;   long z = x - y;
;   return z;
; }

calcular:
    ; --- PRÓLOGO ---
    push rbp          ; [rsp] = rbp antigo; rsp -= 8
    mov  rbp, rsp     ; rbp = rsp (= endereço do rbp antigo)
    sub  rsp, 24      ; reserva 24 bytes para 3 variáveis (alinhado a 16? 24 sim!)
    ; Agora: rbp = topo após push, rsp = rbp - 24

    ; Mapa de memória:
    ; [rbp + 8]  = endereço de retorno (automático pelo CALL)
    ; [rbp + 0]  = rbp anterior (nosso push rbp)
    ; [rbp - 8]  = variável x
    ; [rbp - 16] = variável y
    ; [rbp - 24] = variável z = rsp atual

    ; --- CORPO ---
    ; a = rdi, b = rsi
    mov rax, rdi
    add rax, rsi
    mov [rbp - 8], rax    ; x = a + b

    mov rax, rdi
    imul rax, rsi
    mov [rbp - 16], rax   ; y = a * b

    mov rax, [rbp - 8]
    sub rax, [rbp - 16]
    mov [rbp - 24], rax   ; z = x - y

    mov rax, [rbp - 24]   ; return z

    ; --- EPÍLOGO ---
    leave             ; mov rsp, rbp; pop rbp
    ret`} />

      <h2>Inspecionando a Stack no GDB</h2>
      <CodeBlock language="bash" filename="gdb_stack.txt" code={`(gdb) break calcular
(gdb) run

# Após o prólogo, inspecionar o frame:
(gdb) info frame
Stack level 0, frame at 0x7fffffffde80:
 rip = 0x401010 in calcular; saved rip = 0x401055
 Called by frame at 0x7fffffffde90
 Arglist at 0x7fffffffde78, args: a=10, b=5
 Locals at 0x7fffffffde78, Previous frame's sp at 0x7fffffffde88

(gdb) info locals
x = 0    # ainda não inicializado
y = 0
z = 0

(gdb) p $rbp
$1 = (void *) 0x7fffffffde78

(gdb) x/8gx $rbp - 24
# Ver 8 qwords ao redor do frame:
0x7fffffffde60: 0x0000000000000000  0x0000000000000000  # z, y
0x7fffffffde70: 0x0000000000000000  0x00007fffffffde90  # x, rbp antigo
0x7fffffffde80: 0x0000000000401055  0x0000000000000005  # ret addr, b=5
0x7fffffffde88: 0x000000000000000a  ...                 # a=10, ...`} />

      <h2>Omitting Frame Pointer (OFP)</h2>
      <AlertBox type="info" title="gcc -fomit-frame-pointer">
        Com otimização, o GCC frequentemente omite o frame pointer (RBP). Isso libera RBP para uso geral mas dificulta debugging. Use -fno-omit-frame-pointer para debugging mais fácil.
      </AlertBox>
      <CodeBlock language="nasm" filename="sem_frame.asm" code={`; Função sem frame pointer (comum com -O2):
funcao_otimizada:
    ; Sem push rbp, sem mov rbp rsp
    ; Variáveis locais relativas ao RSP:
    sub rsp, 24       ; reserva 3 variáveis

    ; Acessar via RSP:
    mov [rsp + 0],  rax    ; variável 1
    mov [rsp + 8],  rbx    ; variável 2
    mov [rsp + 16], rcx    ; variável 3

    ; Antes de qualquer CALL interno:
    ; RSP deve estar alinhado em 16!
    call outra_funcao       ; RSP deve ser múltiplo de 16 aqui

    add rsp, 24
    ret`} />

      <h2>Variáveis na Stack vs Registradores</h2>
      <CodeBlock language="nasm" filename="stack_vs_reg.asm" code={`; O compilador tenta manter variáveis em registradores (mais rápido)
; e usa a stack apenas quando:
; 1. Precisa de mais variáveis do que registradores disponíveis
; 2. Variável precisa de endereço (int x; &x)
; 3. Arrays locais (array no stack)
; 4. Estruturas grandes

; Exemplo: array local na stack
funcao_array:
    push rbp
    mov  rbp, rsp
    sub  rsp, 80        ; array de 10 ints (10 × 8 = 80 bytes)
    ; [rbp - 80] até [rbp - 8] = array

    ; inicializar array[0..9] = i*i
    xor rcx, rcx
.loop:
    cmp rcx, 10
    jge .fim
    mov rax, rcx
    imul rax, rax           ; rax = i*i
    mov [rbp + rcx*8 - 80], rax  ; array[i] = i*i
    inc rcx
    jmp .loop
.fim:
    leave
    ret`} />

      <h2>Stack Canary (Proteção contra Buffer Overflow)</h2>
      <CodeBlock language="nasm" filename="canary.asm" code={`; Stack canary: valor aleatório inserido entre variáveis locais e o endereço de retorno
; Se um buffer overflow sobrescrever o canary, o programa detecta e para.

; GCC com -fstack-protector gera algo assim:
funcao_protegida:
    push rbp
    mov  rbp, rsp
    sub  rsp, 32

    ; Ler canary do segmento FS (thread-local storage):
    mov rax, [fs:0x28]          ; lê canary global
    mov [rbp - 8], rax          ; salva na stack (acima das variáveis!)

    ; ... corpo da função (buffer em [rbp-32] a [rbp-16]) ...

    ; Antes de retornar, verificar canary:
    mov rax, [rbp - 8]          ; lê canary da stack
    xor rax, [fs:0x28]          ; compara com original
    jnz .stack_smash            ; se diferente → overflow detectado!

    leave
    ret

.stack_smash:
    call __stack_chk_fail       ; termina o programa com erro`} />
    </PageContainer>
  );
}
