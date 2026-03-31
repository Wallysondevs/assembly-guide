import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Logica() {
  return (
    <PageContainer title="Operações Lógicas" subtitle="AND, OR, XOR, NOT, TEST e manipulação de bits" difficulty="iniciante" timeToRead="15 min">
      <p>Operações lógicas manipulam dados bit a bit. São essenciais para mascaramento de bits, verificação de flags de hardware, criptografia e otimização de código.</p>

      <h2>AND — E Lógico</h2>
      <p>Resultado é 1 apenas quando AMBOS os bits são 1.</p>
      <CodeBlock language="nasm" filename="and.asm" code={`and rax, rbx         ; rax = rax AND rbx
and rax, 0xFF        ; rax = rax AND 0xFF (mascara byte baixo)
and byte [mem], 0x0F ; aplica máscara na memória

; Tabela verdade:
;   0 AND 0 = 0
;   0 AND 1 = 0
;   1 AND 0 = 0
;   1 AND 1 = 1

; Uso principal: MASCARAR bits (isolar bits específicos)

; Exemplo: pegar apenas os 4 bits baixos:
;   1011 1101
; & 0000 1111  ← máscara 0x0F
;   ---------
;   0000 1101  ← apenas nibble baixo

; Verificar se bit N está setado:
test rax, (1 << 3)   ; verifica bit 3
jnz bit_setado       ; ZF=0 → bit estava setado`} />

      <h2>OR — OU Lógico</h2>
      <p>Resultado é 1 quando PELO MENOS UM bit é 1.</p>
      <CodeBlock language="nasm" filename="or.asm" code={`or rax, rbx          ; rax = rax OR rbx
or rax, 0x80         ; seta bit 7 de rax
or byte [mem], 0x01  ; seta bit 0 na memória

; Tabela verdade:
;   0 OR 0 = 0
;   0 OR 1 = 1
;   1 OR 0 = 1
;   1 OR 1 = 1

; Uso principal: SETAR bits

; Exemplo: setar o bit 5 (32 = 0x20):
;   1011 1101
; | 0010 0000  ← máscara 0x20
;   ---------
;   1011 1101  ← bit 5 setado (já estava)
;
;   0001 1101
; | 0010 0000
;   ---------
;   0011 1101  ← bit 5 agora setado

; Setar múltiplos bits:
or rax, 0x0F | 0x80   ; seta bits 0-3 e bit 7`} />

      <h2>XOR — OU Exclusivo</h2>
      <p>Resultado é 1 quando os bits são DIFERENTES.</p>
      <CodeBlock language="nasm" filename="xor.asm" code={`xor rax, rbx         ; rax = rax XOR rbx
xor rax, 0xFF        ; inverte todos os 8 bits baixos

; Tabela verdade:
;   0 XOR 0 = 0
;   0 XOR 1 = 1
;   1 XOR 0 = 1
;   1 XOR 1 = 0  ← diferença do OR!

; Uso 1: ZERAR registrador (idioma clássico Assembly!)
xor rax, rax         ; rax = 0 (qualquer coisa XOR si mesma = 0)
; Mais eficiente que: mov rax, 0 (código menor, mesma velocidade)

; Uso 2: TOGGLE bits (inverter)
;   1011 1101
; ^ 0000 1111
;   ---------
;   1011 0010  ← bits 0-3 invertidos

; Uso 3: Swap sem registrador temporário!
xor rax, rbx         ; rax = rax ^ rbx
xor rbx, rax         ; rbx = rbx ^ (rax ^ rbx) = original rax
xor rax, rbx         ; rax = (rax ^ rbx) ^ original_rax = original rbx

; Uso 4: Criptografia simples (cifra XOR)
xor byte [buffer], 0xAA   ; cifra/decifra com chave 0xAA`} />

      <h2>NOT — Inversão de Bits</h2>
      <CodeBlock language="nasm" filename="not.asm" code={`not rax              ; rax = ~rax (inverte todos os bits)
not byte [mem]       ; inverte byte na memória

; Exemplo:
;   0000 0101 (5)
; NOT
;   1111 1010 (250 unsigned / -6 signed)

; Relação: NOT(x) = -x - 1 (complemento de 1)
; Complemento de 2: -x = NOT(x) + 1

; Criar máscara inversa:
mov rax, 0x0F        ; máscara para bits 0-3
not rax              ; agora mascara bits 4-63`} />

      <h2>TEST — AND que Não Salva Resultado</h2>
      <CodeBlock language="nasm" filename="test.asm" code={`; TEST é como AND mas descarta o resultado, apenas seta flags
test rax, rax         ; seta SF, ZF, PF baseado em rax (equivale a: cmp rax, 0)
jz  .zero             ; pula se rax == 0
jnz .nao_zero         ; pula se rax != 0

; Verificar bit específico:
test rax, 1           ; bit 0 é 1?
jnz .impar

test rax, 0x80        ; bit 7 é 1? (sinal em byte)
jnz .negativo_byte

test rax, (1 << 5)    ; bit 5 está setado?
jnz .bit5_set

; TEST é mais curto que CMP para testar se é zero:
test rax, rax   ← 3 bytes
cmp rax, 0      ← 4-7 bytes dependendo da codificação`} />

      <h2>Manipulação de Bits — Técnicas</h2>
      <CodeBlock language="nasm" filename="bit_tricks.asm" code={`; === SETAR bit N ===
; bts (Bit Test and Set) — instrução dedicada
bts rax, 5            ; seta bit 5, retorna valor anterior em CF

; Com OR:
or  rax, (1 << 5)     ; seta bit 5

; === LIMPAR bit N ===
; btr (Bit Test and Reset)
btr rax, 5            ; limpa bit 5, retorna valor anterior em CF

; Com AND:
and rax, ~(1 << 5)    ; limpa bit 5 (atenção: ~ pode não funcionar em NASM assim)
and rax, 0xFFFFFFFFFFFFFFDF  ; limpa bit 5 manualmente

; === INVERTER bit N ===
; btc (Bit Test and Complement)
btc rax, 5            ; inverte bit 5, retorna valor anterior em CF

; Com XOR:
xor rax, (1 << 5)     ; inverte bit 5

; === TESTAR bit N ===
; bt (Bit Test)
bt  rax, 5            ; CF = bit 5 de rax
jc  bit5_eh_1         ; pula se bit 5 estava setado

; === CONTAR BITS ===
; popcnt (Population Count — SSE4.2)
popcnt rax, rbx       ; rax = número de bits 1 em rbx

; === ENCONTRAR PRIMEIRO BIT ===
; bsf (Bit Scan Forward) — posição do primeiro 1 da direita
bsf rax, rbx          ; rax = índice do LSB 1 em rbx (undefined se rbx=0)

; bsr (Bit Scan Reverse) — posição do primeiro 1 da esquerda
bsr rax, rbx          ; rax = índice do MSB 1 em rbx

; lzcnt/tzcnt (leading/trailing zero count — BMI1)
lzcnt rax, rbx        ; conta zeros à esquerda
tzcnt rax, rbx        ; conta zeros à direita`} />

      <h2>Exemplos Práticos de Flags de Hardware</h2>
      <CodeBlock language="nasm" filename="hw_flags.asm" code={`; Simular um registro de controle de hardware:
; Bit 0: Enable
; Bit 1: Read-only
; Bit 2: Interrupt enable
; Bit 3-5: Mode (3 bits)
; Bit 6: Error flag
; Bit 7: Busy flag

CTRL_ENABLE   equ (1 << 0)   ; 0x01
CTRL_RDONLY   equ (1 << 1)   ; 0x02
CTRL_IRQ_EN   equ (1 << 2)   ; 0x04
CTRL_MODE_MSK equ (7 << 3)   ; 0x38
CTRL_ERROR    equ (1 << 6)   ; 0x40
CTRL_BUSY     equ (1 << 7)   ; 0x80

; Verificar se está busy E com erro:
mov al, [ctrl_reg]
test al, CTRL_BUSY
jz  .nao_busy
test al, CTRL_ERROR
jnz .temos_erro

; Setar modo 3 (bits 3-5 = 011):
mov al, [ctrl_reg]
and al, ~CTRL_MODE_MSK       ; limpa bits de modo
or  al, (3 << 3)             ; seta modo 3
mov [ctrl_reg], al`} />

      <AlertBox type="success" title="XOR para zeragem">
        Use <code>xor rax, rax</code> em vez de <code>mov rax, 0</code>. Gera 2 bytes de código ao invés de 7, e é igualmente rápido (ou mais) nos processadores modernos.
      </AlertBox>
    </PageContainer>
  );
}
