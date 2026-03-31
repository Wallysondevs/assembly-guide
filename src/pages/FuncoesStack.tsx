import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function FuncoesStack() {
  return (
    <PageContainer title="Funções e a Stack" subtitle="Como CALL, RET, e a stack trabalham juntas para implementar funções" difficulty="intermediario" timeToRead="18 min">
      <p>Funções em Assembly são implementadas pelas instruções CALL e RET, que usam a stack para salvar e restaurar o endereço de retorno. Entender isso é crucial para debugging e segurança.</p>

      <h2>CALL e RET — O Mecanismo</h2>
      <CodeBlock language="nasm" filename="call_ret.asm" code={`; CALL funcao equivale a:
;   push rip + 5      ; empilha próxima instrução (endereço de retorno)
;   jmp funcao        ; pula para a função

; RET equivale a:
;   pop rip           ; desempilha endereço de retorno
;   jmp rip           ; pula para ele

; Demonstração manual (para entender, não use assim!):
    call .proximo       ; truque: empilha endereço de .proximo
.proximo:
    pop rax             ; rax = endereço de .proximo (valor do RIP!)
; Isso é como o shellcode "jmp/call/pop" funciona`} />

      <h2>Uma Função Simples Completa</h2>
      <CodeBlock language="nasm" filename="funcao_simples.asm" code={`; Função: soma(a, b) → retorna a + b
; ABI Linux: a=rdi, b=rsi, retorno=rax

section .text

soma:
    ; Prólogo (mínimo — sem variáveis locais)
    push rbp            ; salva base pointer antigo
    mov  rbp, rsp       ; estabelece frame atual

    ; Corpo da função
    mov rax, rdi        ; rax = a
    add rax, rsi        ; rax = a + b
    ; resultado já está em rax — pronto para retornar

    ; Epílogo
    pop rbp             ; restaura base pointer antigo
    ret                 ; retorna para o chamador

; Alternativa mínima (sem frame pointer — válido para funções leaf):
soma_minima:
    lea rax, [rdi + rsi] ; rax = a + b (usando LEA!)
    ret                   ; return`} />

      <h2>Stack Frame Completo</h2>
      <CodeBlock language="nasm" filename="stack_frame.asm" code={`; Função com variáveis locais:
; int funcao(int a, int b) {
;   int local1 = a + b;
;   int local2 = a * b;
;   return local1 + local2;
; }

funcao:
    ; === PRÓLOGO ===
    push rbp                ; salva RBP anterior
    mov  rbp, rsp           ; RBP = RSP (base do frame)
    sub  rsp, 16            ; reserva espaço para 2 locals (16 bytes, alinhado)

    ; --- variáveis locais ---
    ; [rbp - 8]  = local1
    ; [rbp - 16] = local2

    ; Corpo:
    mov rax, rdi
    add rax, rsi
    mov [rbp - 8], rax      ; local1 = a + b

    mov rax, rdi
    imul rax, rsi
    mov [rbp - 16], rax     ; local2 = a * b

    mov rax, [rbp - 8]
    add rax, [rbp - 16]     ; return local1 + local2

    ; === EPÍLOGO ===
    leave                   ; equivale a: mov rsp, rbp; pop rbp
    ret

; Layout da stack durante 'funcao':
; RSP antes:  0x7fff5000
; (depois de push rbp): 0x7fff4FF8 ← RBP anterior
; (depois de mov rbp, rsp): RBP = 0x7fff4FF8
; (depois de sub rsp, 16): RSP = 0x7fff4FE8
;
; [RBP + 0]  = valor antigo do RBP     (0x7fff4FF8)
; [RBP - 8]  = local1
; [RBP - 16] = local2 = RSP`} />

      <h2>Instrução ENTER e LEAVE</h2>
      <CodeBlock language="nasm" filename="enter_leave.asm" code={`; ENTER cria o prólogo automaticamente:
enter 16, 0     ; equivale a:
                ; push rbp
                ; mov rbp, rsp
                ; sub rsp, 16
; Obs: ENTER é mais lento que o prólogo manual!

; LEAVE faz o epílogo:
leave           ; equivale a:
                ; mov rsp, rbp
                ; pop rbp`} />

      <h2>Chamada com Argumentos</h2>
      <CodeBlock language="nasm" filename="chamada.asm" code={`; System V AMD64 ABI — argumentos em:
; rdi, rsi, rdx, rcx, r8, r9 (6 primeiros inteiros)
; xmm0-xmm7 (floats/doubles)
; Resto: na stack (em ordem reversa)

section .text
    global _start
    extern printf    ; função da libc

_start:
    ; Chamar: printf("Resultado: %d\n", 42)
    ; Antes de CALL, stack deve estar alinhada em 16!

    sub rsp, 8               ; alinha stack (já está alinhada em 16)
                             ; o CALL vai empilhar mais 8 bytes (retorno)

    lea rdi, [rel fmt]       ; 1º argumento: format string
    mov rsi, 42              ; 2º argumento: o número
    xor eax, eax             ; rax = 0 (número de args SSE para printf variadic)
    call printf

    add rsp, 8               ; restaura stack

    ; exit(0)
    mov rax, 60
    xor rdi, rdi
    syscall

section .data
    fmt db "Resultado: %d", 10, 0`} />

      <AlertBox type="warning" title="Stack Alignment">
        Antes de qualquer CALL, a stack DEVE estar alinhada em 16 bytes. O _start começa com RSP alinhado. Cada PUSH/POP muda RSP em 8 bytes. CALL em si empilha 8 bytes (endereço de retorno). Se você faz um PUSH antes do CALL, você está OK (8+8=16). Se não fez nenhum PUSH, sub rsp, 8 antes do CALL.
      </AlertBox>

      <h2>Função com Muitos Argumentos</h2>
      <CodeBlock language="nasm" filename="muitos_args.asm" code={`; Chamar: funcao(1, 2, 3, 4, 5, 6, 7, 8)
; args 7 e 8 vão para a stack

    ; Empilhar argumentos extras (ordem reversa, 8º primeiro)
    push 8              ; 8º argumento (no topo da stack = acessível como [rsp+8] após call)
    push 7              ; 7º argumento

    ; Primeiros 6 em registradores:
    mov rdi, 1
    mov rsi, 2
    mov rdx, 3
    mov rcx, 4
    mov r8,  5
    mov r9,  6

    call funcao

    ; Limpar argumentos da stack:
    add rsp, 16         ; remover os 2 argumentos (2 × 8 = 16)

; Na função chamada, args na stack ficam em:
; [rbp + 16] = 7º argumento (16 = 8 do ret addr + 8 do rbp salvo)
; [rbp + 24] = 8º argumento`} />

      <h2>Red Zone — Área Livre Abaixo do RSP</h2>
      <AlertBox type="info" title="Red Zone">
        No System V AMD64 ABI, os 128 bytes abaixo do RSP são chamados de "red zone". Funções leaf (que não chamam outras funções) podem usar essa área para variáveis temporárias SEM precisar ajustar o RSP. Mais eficiente!
      </AlertBox>
      <CodeBlock language="nasm" filename="red_zone.asm" code={`; Função leaf usando red zone:
funcao_leaf:
    ; Sem prólogo! (sem push rbp, sem sub rsp)
    
    mov [rsp - 8],  rdi    ; salva 1ª variável local
    mov [rsp - 16], rsi    ; salva 2ª variável local
    
    ; ... usa as variáveis ...
    
    ret                    ; sem epílogo!
; NUNCA use red zone se a função chamar outra função!`} />
    </PageContainer>
  );
}
