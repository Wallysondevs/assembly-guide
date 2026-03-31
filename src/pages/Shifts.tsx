import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Shifts() {
  return (
    <PageContainer title="Shifts e Rotações" subtitle="SHL, SHR, SAL, SAR, ROL, ROR, RCL, RCR" difficulty="intermediario" timeToRead="12 min">
      <p>Operações de shift movem bits para a esquerda ou direita. São fundamentais para multiplicação/divisão por potências de 2, manipulação de bits e operações criptográficas.</p>

      <h2>SHL / SAL — Shift Left (Lógico/Aritmético)</h2>
      <CodeBlock language="nasm" filename="shl.asm" code={`; SHL = SAL (são iguais para shift esquerda)
shl rax, 1      ; rax <<= 1  (× 2)
shl rax, 2      ; rax <<= 2  (× 4)
shl rax, cl     ; rax <<= cl (shift por valor em CL)
shl rax, 3      ; imediato 0-63

; O bit saindo pela esquerda vai para CF
; Zeros entram pela direita

; Exemplos:
;   0000 0101 (5) SHL 2
;   0001 0100 (20 = 5 × 4)

; Otimização: multiplicar por potência de 2
; Em vez de: imul rax, 8
shl rax, 3      ; rax × 8 (muito mais rápido!)`} />

      <h2>SHR — Shift Right Lógico</h2>
      <CodeBlock language="nasm" filename="shr.asm" code={`shr rax, 1      ; rax >>= 1 (÷ 2 para unsigned)
shr rax, cl     ; shift por CL

; Zeros entram pela esquerda (bit MSB)
; Bit saindo pela direita vai para CF

; Exemplos:
;   1000 0000 (128) SHR 1
;   0100 0000 (64 = 128 ÷ 2)

;   1111 0000 (240) SHR 4
;   0000 1111 (15)

; Uso: divisão unsigned por potência de 2
shr rax, 4      ; rax ÷ 16 (unsigned!)`} />

      <h2>SAR — Shift Aritmético à Direita</h2>
      <AlertBox type="warning" title="SAR vs SHR">
        SHR coloca 0 no MSB. SAR <strong>propaga o bit de sinal</strong> — mantém o sinal do número. Use SAR para divisão signed, SHR para unsigned.
      </AlertBox>
      <CodeBlock language="nasm" filename="sar.asm" code={`sar rax, 1      ; rax >>= 1 (÷ 2 para signed, mantém sinal)
sar rax, cl     ; shift por CL

; Exemplos:
;   1111 0000 (-16 signed) SAR 1
;   1111 1000 (-8 = -16 ÷ 2) ← MSB copiado!

;   0111 0000 (112) SAR 1
;   0011 1000 (56 = 112 ÷ 2) ← MSB copiado!

; Divisão signed por potência de 2:
; ATENÇÃO: SAR arredonda em direção ao menos infinito, não zero!
; -7 SAR 1 = -4 (não -3!)
; Para arredondar em direção a zero:
; if (rax < 0) add rax, (1 << n) - 1
; sar rax, n`} />

      <h2>ROL — Rotate Left</h2>
      <CodeBlock language="nasm" filename="rol.asm" code={`; ROL — rotação circular para esquerda
; bits que saem pela esquerda entram pela direita
rol rax, 1      ; rotaciona 1 bit à esquerda
rol rax, cl     ; rotaciona CL bits à esquerda
rol rax, 8      ; rotaciona 1 byte à esquerda

; Exemplo:
;   1000 0001 ROL 1
;   0000 0011 ← o 1 que saiu entra pela direita!

; Usado em: criptografia (SHA, AES), hashing
; SHA-256 usa: ROTR(a, 2) XOR ROTR(a, 13) XOR ROTR(a, 22)

; BSWAP — troca ordem dos bytes (big/little endian)
bswap eax       ; inverte os 4 bytes de EAX
bswap rax       ; inverte os 8 bytes de RAX
; 0x11223344 → 0x44332211
; Útil para converter dados de rede (big-endian) para x86 (little-endian)`} />

      <h2>ROR — Rotate Right</h2>
      <CodeBlock language="nasm" filename="ror.asm" code={`ror rax, 1      ; rotaciona 1 bit à direita
ror rax, 8      ; rotaciona 1 byte à direita

; Exemplo:
;   0000 0001 ROR 1
;   1000 0000 ← o 1 que saiu entra pela esquerda!

; Relação: ROR(x, n) = ROL(x, 64-n)  (para qword)`} />

      <h2>RCL e RCR — Rotate through Carry</h2>
      <CodeBlock language="nasm" filename="rcl.asm" code={`; RCL — Rotate Left through Carry
; CF entra pelo lado direito, bit saindo vai para CF
rcl rax, 1      ; rotaciona 65 bits (64 + CF) à esquerda

; RCR — Rotate Right through Carry
rcr rax, 1      ; rotaciona 65 bits à direita

; Uso: implementar shifts de inteiros maiores que 64-bit
; Para fazer SHL 128-bit (RDX:RAX) por 1:
shl rax, 1      ; shift rax, bit sai pelo CF
rcl rdx, 1      ; rdx recebe o CF e faz seu próprio shift`} />

      <h2>SHLD / SHRD — Double Precision Shift</h2>
      <CodeBlock language="nasm" filename="shld.asm" code={`; SHLD — Shift Left Double (útil para operações de 128-bit)
; dest = (dest << count) | (src >> (width - count))
shld rax, rbx, cl   ; bits de rbx alimentam rax pela direita

; SHRD — Shift Right Double
shrd rax, rbx, cl   ; bits de rbx alimentam rax pela esquerda

; Exemplo: implementar shift esquerda de 128-bit [rdx:rax]:
mov cl, 5
shld rdx, rax, cl   ; os 5 bits altos de rax entram em rdx
shl  rax, cl        ; shift rax`} />

      <h2>Aplicações Práticas</h2>
      <CodeBlock language="nasm" filename="aplicacoes.asm" code={`; === Verificar se número é potência de 2 ===
; Uma potência de 2 tem exatamente 1 bit setado
; n & (n-1) == 0 se n é potência de 2
mov rbx, rax
dec rbx              ; rbx = n - 1
test rax, rbx        ; n & (n-1)
jz  .potencia_de_2

; === Encontrar log2 (posição do bit mais alto) ===
bsr rcx, rax         ; rcx = posição do MSB 1
; rcx = floor(log2(rax))

; === Arredondar para próxima potência de 2 ===
dec rax
bsr rcx, rax
mov rax, 2
shl rax, cl          ; rax = 2^(rcx+1)

; === Hash simples com rotação ===
; Bernstein hash: hash = hash * 33 + c
; Versão otimizada:
mov rbx, rax         ; rbx = hash
shl rax, 5           ; rax = hash * 32
add rax, rbx         ; rax = hash * 32 + hash = hash * 33
add rax, rcx         ; rax = hash * 33 + c

; === Extrair campo de bits ===
; Extrair bits 12-19 de rax (8 bits):
mov rbx, rax
shr rbx, 12          ; move o campo para os bits 0-7
and rbx, 0xFF        ; isola os 8 bits`} />

      <AlertBox type="success" title="Shifts em loops críticos">
        Em loops de performance crítica, substituir MUL por SHL e DIV por SHR pode dar ganhos de 5-10x de performance, já que MUL/DIV têm latências de 3-90 ciclos enquanto SHL/SHR têm latência de 1 ciclo.
      </AlertBox>
    </PageContainer>
  );
}
