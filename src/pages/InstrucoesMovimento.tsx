import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function InstrucoesMovimento() {
  return (
    <PageContainer title="Movimento de Dados" subtitle="MOV, LEA, XCHG, PUSH, POP e todas as formas de mover dados" difficulty="iniciante" timeToRead="15 min">
      <p>As instruções de movimento de dados são as mais usadas em Assembly. Elas transferem dados entre registradores, memória e valores imediatos.</p>

      <h2>MOV — A Instrução Mais Fundamental</h2>
      <p>Move (copia) dados de um lugar para outro. <strong>Não existe MOV de memória para memória</strong> em x86-64!</p>
      <CodeBlock language="nasm" filename="mov.asm" code={`; Formas válidas do MOV:
mov reg, imediato      ; registrador ← valor constante
mov reg, reg           ; registrador ← registrador
mov reg, [mem]         ; registrador ← memória (leitura)
mov [mem], reg         ; memória ← registrador (escrita)
mov [mem], imediato    ; memória ← valor constante

; Exemplos:
mov rax, 42            ; rax = 42
mov rbx, rax           ; rbx = rax (copia)
mov rcx, [0x401000]    ; rcx = qword na memória
mov [rbx], rax         ; memória em rbx recebe rax
mov byte [rbx], 10     ; escreve byte 10

; INVÁLIDO — não existe:
; mov [mem1], [mem2]   ; erro! use um registrador intermediário`} />

      <AlertBox type="warning" title="MOV não seta flags!">
        Ao contrário de ADD e SUB, o MOV não altera nenhuma flag no registrador RFLAGS. Não use CMP logo após MOV esperando flags válidas da operação MOV.
      </AlertBox>

      <h2>MOVZX — Move com Zero-Extension</h2>
      <p>Copia um valor menor para um registrador maior, preenchendo com zeros:</p>
      <CodeBlock language="nasm" filename="movzx.asm" code={`; movzx destino (maior), fonte (menor)
movzx rax, bl          ; rax = zero_extend(bl)  — byte para 64-bit
movzx rax, bx          ; rax = zero_extend(bx)  — word para 64-bit
movzx rax, ebx         ; INVÁLIDO — use mov eax, ebx (zera superior automaticamente!)
movzx eax, bl          ; eax = zero_extend(bl)  — byte para 32-bit
movzx eax, bx          ; eax = zero_extend(bx)  — word para 32-bit

; Exemplo:
mov bl, 0xFF           ; bl = 255 (unsigned) ou -1 (signed)
movzx rax, bl          ; rax = 0x00000000000000FF = 255`} />

      <h2>MOVSX — Move com Sign-Extension</h2>
      <p>Copia um valor menor para um registrador maior, propagando o bit de sinal:</p>
      <CodeBlock language="nasm" filename="movsx.asm" code={`; movsx destino (maior), fonte (menor)
movsx rax, bl          ; rax = sign_extend(bl)
movsx rax, bx          ; rax = sign_extend(bx)
movsx rax, ebx         ; rax = sign_extend(ebx) — MOVSXD
movsxd rax, ebx        ; forma explícita para 32→64

; Exemplo:
mov bl, 0xFF           ; bl = -1 (interpretado como signed)
movsx rax, bl          ; rax = 0xFFFFFFFFFFFFFFFF = -1

mov bl, 0x7F           ; bl = 127 (bit de sinal = 0)
movsx rax, bl          ; rax = 0x000000000000007F = 127`} />

      <h2>LEA — Load Effective Address</h2>
      <p>Calcula o endereço dentro dos colchetes <strong>sem acessar a memória</strong>. Extremamente útil para aritmética:</p>
      <CodeBlock language="nasm" filename="lea.asm" code={`; LEA — o endereço É o resultado, não o conteúdo
lea rax, [rbx]             ; rax = rbx (cópia trivial)
lea rax, [rbx + 8]         ; rax = rbx + 8
lea rax, [rbx + rcx]       ; rax = rbx + rcx
lea rax, [rbx + rcx*4]     ; rax = rbx + rcx*4
lea rax, [rbx + rcx*8 + 16]; rax = rbx + rcx*8 + 16

; Truques com LEA:
lea rax, [rax + rax]       ; rax = rax * 2 (shift left 1)
lea rax, [rax + rax*4]     ; rax = rax * 5 (base + index*4)
lea rax, [rax*4 + rax]     ; rax = rax * 5 (alternativo)

; LEA para endereço de variável:
lea rsi, [mensagem]         ; rsi = endereço de 'mensagem'
lea rsi, [rel mensagem]     ; rsi = endereço relativo ao RIP (posição independente)`} />

      <h2>XCHG — Troca de Valores</h2>
      <CodeBlock language="nasm" filename="xchg.asm" code={`xchg rax, rbx    ; troca rax e rbx (sem registrador temporário!)
xchg rax, [mem]  ; troca rax com memória (operação atômica!)

; Nota: xchg com memória é sempre atômica (tem LOCK implícito)
; xchg eax, eax é um NOP em processadores Intel (mesma coisa que nop)`} />

      <h2>PUSH e POP — Stack</h2>
      <CodeBlock language="nasm" filename="push_pop.asm" code={`; PUSH: decrementa RSP e escreve na memória
push rax         ; RSP -= 8; [RSP] = rax
push rbx         ; RSP -= 8; [RSP] = rbx
push rcx         ; RSP -= 8; [RSP] = rcx
push 42          ; RSP -= 8; [RSP] = 42 (imediato)

; POP: lê da memória e incrementa RSP
pop rcx          ; rcx = [RSP]; RSP += 8
pop rbx          ; rbx = [RSP]; RSP += 8
pop rax          ; rax = [RSP]; RSP += 8

; Salvar e restaurar registradores:
push rax         ; salvar
push rbx
; ... usa rax e rbx para outra coisa ...
pop rbx          ; restaurar (ordem INVERSA!)
pop rax`} />

      <h2>PUSHA / POPA (32-bit apenas)</h2>
      <CodeBlock language="nasm" code={`; Em 32-bit (NÃO disponível em 64-bit!):
pusha    ; push todos os registradores gerais (EAX, ECX, EDX, EBX, ESP, EBP, ESI, EDI)
popa     ; pop todos em ordem inversa`} />

      <h2>PUSHF / POPF — Salvar Flags</h2>
      <CodeBlock language="nasm" filename="pushf.asm" code={`pushfq    ; push RFLAGS (64-bit) na stack
popfq     ; pop da stack para RFLAGS

; Útil para salvar estado de flags antes de operações que as modificam:
pushfq
; ... operações ...
popfq     ; restaura flags originais`} />

      <h2>MOVS / CMOVCC — Cópia Condicional</h2>
      <CodeBlock language="nasm" filename="cmov.asm" code={`; CMOV — Move Condicional (não há salto, elimina branch misprediction)
cmp rax, rbx
cmove  rax, rcx   ; rax = rcx SE rax == rbx (ZF=1)
cmovne rax, rcx   ; rax = rcx SE rax != rbx
cmovl  rax, rcx   ; rax = rcx SE rax < rbx (signed)
cmovle rax, rcx   ; rax = rcx SE rax <= rbx (signed)
cmovg  rax, rcx   ; rax = rcx SE rax > rbx (signed)
cmovge rax, rcx   ; rax = rcx SE rax >= rbx (signed)
cmovb  rax, rcx   ; rax = rcx SE rax < rbx (unsigned)
cmovae rax, rcx   ; rax = rcx SE rax >= rbx (unsigned)

; Exemplo: max(rax, rbx) sem branch:
cmp rax, rbx
cmovl rax, rbx    ; se rax < rbx, rax = rbx (seleciona o maior)`} />

      <AlertBox type="success" title="CMOV para performance">
        CMOV pode ser muito mais rápido que JCC (salto condicional) em código moderno, porque elimina branch misprediction. Use quando a operação é simples e o custo de uma misprediction seria alto.
      </AlertBox>

      <h2>MOV Especiais</h2>
      <CodeBlock language="nasm" filename="mov_especiais.asm" code={`; MOVABS — mov de 64-bit imediato (único modo para imediatos 64-bit grandes)
mov rax, 0x123456789ABCDEF0    ; MOVABS (gerado automaticamente quando necessário)

; Nota: MOV reg32, imm32 gera código menor que MOV reg64, imm64
; O compilador prefere: mov eax, 0x42 (zera bits superiores de rax automaticamente!)

; MOVNTI — Non-Temporal Move (bypass cache)
movnti [destino], rax         ; escreve direto na RAM, sem passar pelo cache
; Útil para streaming de grandes blocos de dados`} />
    </PageContainer>
  );
}
