import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function FPU() {
  return (
    <PageContainer title="x87 FPU" subtitle="A unidade de ponto flutuante legada — 80-bit extended precision" difficulty="avancado" timeToRead="15 min">
      <p>O <strong>x87 FPU</strong> (Floating-Point Unit) é o coprossador de ponto flutuante original do x86, introduzido no Intel 8087 (1980). Usa precisão estendida de 80 bits e uma pilha de 8 registradores (ST0-ST7).</p>

      <AlertBox type="info" title="x87 vs SSE">
        Em código moderno, SSE/AVX são preferidos para ponto flutuante. x87 ainda é relevante para precisão estendida (80-bit), aritmética BCD, e compatibilidade com código legado. O compilador GCC usa SSE por padrão em x86-64.
      </AlertBox>

      <h2>Pilha de Registradores x87</h2>
      <CodeBlock language="bash" code={`; x87 usa uma pilha de 8 registradores de 80-bit:
; ST(0) = topo da pilha (top of stack)
; ST(1) = segundo elemento
; ...
; ST(7) = oitavo elemento

; Características dos 80-bit extended:
; 1 bit: sinal
; 15 bits: expoente (bias = 16383)
; 64 bits: mantissa (sem bit implícito, como IEEE 754!)
; Precisão: ~18-19 dígitos decimais (vs 15-16 de double)`} />

      <h2>Instruções Básicas x87</h2>
      <CodeBlock language="nasm" filename="fpu_basico.asm" code={`; CARREGAR (push na pilha FPU):
fld  [variavel_float]   ; push float (32-bit) → ST(0)
fldl [variavel_double]  ; push double (64-bit) → ST(0)
fldt [variavel_ext]     ; push extended (80-bit) → ST(0)
fld1                    ; push 1.0
fldz                    ; push 0.0
fldpi                   ; push π (3.141592...)
fldl2e                  ; push log2(e)
fldl2t                  ; push log2(10)

; SALVAR (pop da pilha FPU):
fstp  [variavel_float]  ; pop ST(0) → float (32-bit)
fstpl [variavel_double] ; pop ST(0) → double (64-bit)
fstpt [variavel_ext]    ; pop ST(0) → extended (80-bit)
fst   [variavel]        ; salva ST(0) sem pop

; ARITMÉTICA:
fadd  [mem]             ; ST(0) += mem
fadd  st(0), st(1)      ; ST(0) += ST(1)
faddp                   ; ST(1) += ST(0), pop ST(0)
fsub  [mem]             ; ST(0) -= mem
fmul  [mem]             ; ST(0) *= mem
fdiv  [mem]             ; ST(0) /= mem
fsqrt                   ; ST(0) = sqrt(ST(0))
fabs                    ; ST(0) = |ST(0)|
fchs                    ; ST(0) = -ST(0)
frndint               ; ST(0) = arredondar para inteiro`} />

      <h2>Exemplo: Cálculo com x87</h2>
      <CodeBlock language="nasm" filename="fpu_exemplo.asm" code={`; Calcular: resultado = sqrt(a*a + b*b) (hipotenusa)
section .data
    a  dd 3.0       ; float 3.0
    b  dd 4.0       ; float 4.0
    res dq 0.0      ; double para resultado

section .text
    fldl [a]         ; ST(0) = a (loadou como extended)
    fmul st(0), st(0) ; ST(0) = a*a = 9.0

    fldl [b]         ; ST(0) = b, ST(1) = a*a
    fmul st(0), st(0) ; ST(0) = b*b = 16.0

    fadd             ; ST(0) = a*a + b*b = 25.0 (pop ST(0) e ST(1))
    fsqrt            ; ST(0) = sqrt(25.0) = 5.0

    fstpl [res]      ; salva como double, pop ST(0)
    ; res = 5.0`} />

      <h2>Comparações x87</h2>
      <CodeBlock language="nasm" filename="fpu_cmp.asm" code={`; Comparação x87 (afeta flags na FPU, não FLAGS do CPU!):
fcom  [mem]       ; compara ST(0) com memória
fcomp [mem]       ; compara e pop
fcompp            ; compara ST(0) e ST(1) e pop ambos

; Para usar resultado da comparação:
fcom  [valor]
fnstsw ax          ; move FPU status word para AX
sahf               ; copia AH para FLAGS do CPU
ja  .maior         ; agora JCC funciona!
; (cf, pf, zf das flags do FPU estão no AH após fnstsw + sahf)

; Alternativa mais simples (Pentium Pro+):
fucomi st(0), st(1) ; compara e seta FLAGS diretamente!
jb .menor`} />

      <h2>Controle de Precisão</h2>
      <CodeBlock language="nasm" filename="fpu_ctrl.asm" code={`; FPU Control Word controla a precisão e arredondamento:
fstcw [ctrl_word]    ; ler control word
fldcw [nova_ctrl]    ; carregar nova control word

; Bits do Control Word:
; Bits 8-9: PC (Precision Control)
;   00 = 24-bit (single precision)
;   10 = 53-bit (double precision)
;   11 = 64-bit (extended precision — padrão)
; Bits 10-11: RC (Rounding Control)
;   00 = Round to nearest (padrão)
;   01 = Round down (toward -∞)
;   10 = Round up (toward +∞)
;   11 = Round toward zero (truncate)

; Setar modo de truncamento:
fstcw ax             ; salva control word
or  ax, 0x0C00       ; seta RC = 11 (truncamento)
fldcw ax

ftst                 ; testa ST(0) contra zero (seta FPU flags)
fxam                 ; examina ST(0) (NaN? Infinito? Zero? Normal?)`} />
    </PageContainer>
  );
}
