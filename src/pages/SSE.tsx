import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function SSE() {
  return (
    <PageContainer title="Instruções SSE e SSE2-4" subtitle="O conjunto completo de instruções SIMD de 128 bits" difficulty="avancado" timeToRead="20 min">
      <p>SSE (Streaming SIMD Extensions) é o conjunto de instruções de 128 bits introduzido no Pentium III (1999). SSE2 adicionou operações com doubles e inteiros. SSE3/SSSE3/SSE4.1/SSE4.2 adicionaram mais instruções especializadas.</p>

      <h2>Operações Aritméticas SSE</h2>
      <CodeBlock language="nasm" filename="sse_arith.asm" code={`; === FLOAT (ps = packed single, 4 floats por XMM) ===
addps   xmm0, xmm1    ; xmm0[i] += xmm1[i] para i=0..3
subps   xmm0, xmm1    ; subtração
mulps   xmm0, xmm1    ; multiplicação
divps   xmm0, xmm1    ; divisão (mais lenta!)
sqrtps  xmm0, xmm1    ; raiz quadrada de cada elemento
rcpps   xmm0, xmm1    ; recíproco aproximado (rápido mas inexato)
rsqrtps xmm0, xmm1    ; recíproco de raiz quadrada (aproximado)
minps   xmm0, xmm1    ; mínimo elemento a elemento
maxps   xmm0, xmm1    ; máximo elemento a elemento
absps   xmm0, xmm1    ; valor absoluto (via andps com máscara)

; === DOUBLE (pd = packed double, 2 doubles por XMM) ===
addpd   xmm0, xmm1    ; xmm0[i] += xmm1[i] para i=0..1
mulpd   xmm0, xmm1    ; multiplicação
sqrtpd  xmm0, xmm1    ; raiz quadrada

; === SCALAR (ss = scalar single, apenas elemento 0) ===
addss   xmm0, xmm1    ; xmm0[0] += xmm1[0] (outros inalterados)
mulss   xmm0, xmm1
sqrtss  xmm0, xmm1`} />

      <h2>Comparações SIMD</h2>
      <CodeBlock language="nasm" filename="sse_cmp.asm" code={`; Comparações retornam máscara de bits (0x00000000 = falso, 0xFFFFFFFF = verdadeiro)
cmpps xmm0, xmm1, 0   ; EQ  — igual
cmpps xmm0, xmm1, 1   ; LT  — menor que
cmpps xmm0, xmm1, 2   ; LE  — menor ou igual
cmpps xmm0, xmm1, 4   ; NEQ — diferente
cmpps xmm0, xmm1, 5   ; NLT — não menor que
cmpps xmm0, xmm1, 6   ; NLE — não menor ou igual

; Alternativa com mnemonics mais legíveis:
cmpeqps  xmm0, xmm1   ; iguais
cmpltps  xmm0, xmm1   ; menor que
cmpnltps xmm0, xmm1   ; não menor que

; Usar máscara para seleção condicional:
; if (a > 0) result = a; else result = 0;
xorps xmm2, xmm2       ; xmm2 = 0.0
cmpltps xmm2, xmm0    ; máscara: 0xFFFFFFFF onde xmm0 > 0
andps xmm0, xmm2       ; aplica máscara`} />

      <h2>Shuffling e Permutação</h2>
      <CodeBlock language="nasm" filename="sse_shuffle.asm" code={`; SHUFPS — reordena elementos
; shufps dest, src, imm8
; imm8 define qual elemento vai para qual posição

; xmm0 = [a, b, c, d]
shufps xmm0, xmm0, 0b00000000  ; xmm0 = [a, a, a, a] (broadcast)
shufps xmm0, xmm0, 0b11100100  ; identidade: [a, b, c, d]
shufps xmm0, xmm0, 0b00011011  ; reverso: [d, c, b, a]
shufps xmm0, xmm0, 0b00000101  ; [b, a, b, a]

; PSHUFD — shuffle de 32-bit integers
pshufd xmm0, xmm0, 0x00   ; broadcast elemento 0 para todos

; PSHUFB (SSSE3) — shuffle de bytes com tabela
; xmm1 = máscara de índices
pshufb xmm0, xmm1          ; reordena bytes`} />

      <h2>Operações Horizontais</h2>
      <CodeBlock language="nasm" filename="sse_hori.asm" code={`; HADDPS (SSE3) — soma horizontal (pares adjacentes)
; xmm0 = [a0, a1, a2, a3]
; xmm1 = [b0, b1, b2, b3]
; resultado: [a0+a1, a2+a3, b0+b1, b2+b3]
haddps xmm0, xmm1

; Dot product de 4 floats:
mulps  xmm0, xmm1     ; [a0*b0, a1*b1, a2*b2, a3*b3]
haddps xmm0, xmm0     ; [a0*b0+a1*b1, a2*b2+a3*b3, ...]
haddps xmm0, xmm0     ; [sum, sum, sum, sum]
; xmm0[0] = dot product

; DPPS (SSE4.1) — dot product direto!
dpps xmm0, xmm1, 0xF1   ; soma todos os 4, resultado em [0]`} />

      <h2>Conversões</h2>
      <CodeBlock language="nasm" filename="sse_conv.asm" code={`; Float → Integer:
cvttps2dq xmm0, xmm1   ; truncate float → int32 (empacotado)
cvtps2dq  xmm0, xmm1   ; arredondado float → int32

; Integer → Float:
cvtdq2ps  xmm0, xmm1   ; int32 → float

; Float32 ↔ Float64:
cvtps2pd  xmm0, xmm1   ; 2 floats → 2 doubles (low half de xmm1)
cvtpd2ps  xmm0, xmm1   ; 2 doubles → 2 floats

; Scalar (apenas elemento 0):
cvtss2sd  xmm0, xmm1   ; float → double
cvtsd2ss  xmm0, xmm1   ; double → float
cvtsi2ss  xmm0, rax    ; int64 → float
cvtsi2sd  xmm0, rax    ; int64 → double
cvtss2si  rax, xmm0    ; float → int64 (arredondado)
cvttss2si rax, xmm0    ; float → int64 (truncado)`} />

      <h2>Operações com Inteiros SSE2</h2>
      <CodeBlock language="nasm" filename="sse2_int.asm" code={`; SSE2 adicionou suporte a inteiros em XMM:
; XMM pode conter: 16×byte, 8×word, 4×dword, 2×qword

; Adição de bytes (saturada — sem overflow):
paddb  xmm0, xmm1    ; byte sem sinal
paddsb xmm0, xmm1    ; byte com sinal saturado
paddusb xmm0, xmm1   ; byte sem sinal saturado

; Adição de words:
paddw  xmm0, xmm1    ; 8 palavras de 16-bit
paddsw xmm0, xmm1    ; saturado com sinal
paddusw xmm0, xmm1   ; saturado sem sinal

; Adição de dwords:
paddd  xmm0, xmm1    ; 4 inteiros de 32-bit

; Adição de qwords:
paddq  xmm0, xmm1    ; 2 inteiros de 64-bit

; Multiplicação de words → resultados de 32-bit:
pmullw xmm0, xmm1    ; multiplica 8 pares de 16-bit → bits baixos
pmulhw xmm0, xmm1    ; bits altos do resultado de 32-bit
pmaddwd xmm0, xmm1   ; multiply-add words → dwords`} />

      <AlertBox type="success" title="SSE para iniciantes SIMD">
        Comece com operações simples: addps, mulps, loadaps/movups. Só depois explore shuffles e comparações. A maioria dos ganhos de performance vem do simples fato de processar 4 floats por instrução.
      </AlertBox>
    </PageContainer>
  );
}
