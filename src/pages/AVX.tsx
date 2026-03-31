import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function AVX() {
  return (
    <PageContainer title="AVX e AVX-512" subtitle="Vetores de 256-bit e 512-bit — o estado da arte em SIMD" difficulty="expert" timeToRead="18 min">
      <p>AVX (Advanced Vector Extensions) dobrou o tamanho dos registradores SIMD para 256-bit. AVX-512 triplicou para 512-bit e adicionou recursos poderosos como operações mascaradas e mais registradores.</p>

      <h2>AVX — 256-bit com Registradores YMM</h2>
      <CodeBlock language="nasm" filename="avx_basico.asm" code={`; AVX usa registradores YMM (256-bit = 8 floats ou 4 doubles)
; Instrução AVX tem 3 operandos (não-destrutivo!): dest, src1, src2
; VEX prefix permite operandos separados

; SSE (destructive — modifica src):
addps xmm0, xmm1          ; xmm0 = xmm0 + xmm1 ← xmm0 é modificado!

; AVX (non-destructive — 3 operandos):
vaddps ymm0, ymm1, ymm2   ; ymm0 = ymm1 + ymm2 ← ymm1 preservado!

; Equivalente em 256-bit (8 floats de uma vez):
vmovaps ymm0, [a]          ; carregar 8 floats (alinhado)
vmovaps ymm1, [b]
vaddps  ymm2, ymm0, ymm1   ; ymm2[i] = ymm0[i] + ymm1[i], 8 de uma vez
vmovaps [result], ymm2

; Comparar com SSE (4 floats):
movaps xmm0, [a]
movaps xmm1, [b]
addps  xmm0, xmm1
movaps [result], xmm0
; AVX processa o DOBRO com mesma latência!`} />

      <h2>Loop AVX Vetorizado</h2>
      <CodeBlock language="nasm" filename="avx_loop.asm" code={`; Multiplicar dois arrays de floats (8 por iteração):
; C: for (int i = 0; i < N; i++) c[i] = a[i] * b[i];
; rdi=a, rsi=b, rdx=c, rcx=N (múltiplo de 8)

mul_arrays_avx:
    shr rcx, 3              ; rcx = N / 8 (iterações)
.loop:
    vmovaps ymm0, [rdi]     ; carregar 8 floats de 'a'
    vmovaps ymm1, [rsi]     ; carregar 8 floats de 'b'
    vmulps  ymm2, ymm0, ymm1 ; multiplicar 8 pares
    vmovaps [rdx], ymm2     ; salvar 8 resultados

    add rdi, 32             ; avançar 32 bytes (8 floats × 4 bytes)
    add rsi, 32
    add rdx, 32
    dec rcx
    jnz .loop

    ; IMPORTANTE: limpar estado AVX para evitar penalidades SSE/AVX:
    vzeroupper              ; zera bits superiores de YMM0-YMM15
    ret`} />

      <AlertBox type="warning" title="VZEROUPPER é obrigatório!">
        Ao misturar código AVX (que usa YMM) com código SSE (que usa XMM), SEMPRE execute <code>VZEROUPPER</code> antes de chamar funções que usam SSE. Sem isso, pode haver penalidades de performance massivas (dezenas de ciclos por instrução SSE).
      </AlertBox>

      <h2>FMA — Fused Multiply-Add</h2>
      <CodeBlock language="nasm" filename="fma.asm" code={`; FMA (Fused Multiply-Add) — a*b + c em UMA instrução!
; Mais rápido que mul+add separados E mais preciso (sem arredondamento intermediário)

; VFMADD231PS — result = src1 * src2 + dest
vfmadd213ps ymm0, ymm1, ymm2  ; ymm0 = ymm0 * ymm1 + ymm2
vfmadd231ps ymm0, ymm1, ymm2  ; ymm0 = ymm1 * ymm2 + ymm0
vfmadd132ps ymm0, ymm1, ymm2  ; ymm0 = ymm0 * ymm2 + ymm1

; Variantes:
; VFMSUB — multiply-subtract: a*b - c
; VFNMADD — negative multiply-add: -(a*b) + c
; VFNMSUB — negative multiply-subtract: -(a*b) - c
; Sufixo S = scalar, P = packed, D = double, S = single

; Exemplo prático: produto escalar (dot product) rápido:
; float dot = 0;
; for i: dot += a[i] * b[i]
    vxorps ymm2, ymm2, ymm2     ; acumulador = 0
.loop:
    vmovaps ymm0, [rdi]
    vmovaps ymm1, [rsi]
    vfmadd231ps ymm2, ymm0, ymm1 ; acumulador += a[i]*b[i] (8 de uma vez!)
    add rdi, 32
    add rsi, 32
    dec rcx
    jnz .loop

    ; Somar os 8 valores do acumulador:
    vextractf128 xmm0, ymm2, 1  ; extrair high 128-bit
    vaddps xmm0, xmm0, xmm2    ; somar com low 128-bit
    vhaddps xmm0, xmm0, xmm0   ; somar pares
    vhaddps xmm0, xmm0, xmm0   ; resultado em xmm0[0]`} />

      <h2>AVX-512 — 512-bit com ZMM</h2>
      <AlertBox type="info" title="Disponibilidade">
        AVX-512 está disponível em Intel Ice Lake e posteriores (desktop), Xeon Phi, e alguns AMD EPYC. Muitos processadores consumer ainda não têm AVX-512.
      </AlertBox>
      <CodeBlock language="nasm" filename="avx512.asm" code={`; AVX-512 features principais:
; 32 registradores ZMM (ZMM0-ZMM31, 512-bit cada)
; 8 registradores de máscara (K0-K7)
; Operações mascaradas (apply only to selected elements)
; Embedded broadcasting (operand from memory = 1 value broadcast to all)

; Operação mascarada — processa apenas elementos onde K1 tem 1:
vmovaps zmm0 {k1}, [rdi]          ; carrega apenas elementos mascarados
vaddps  zmm0 {k1}{z}, zmm1, zmm2  ; soma com máscara e zeroing

; Criar máscara:
vpcmpd k1, zmm0, zmm1, 0   ; k1[i] = (zmm0[i] == zmm1[i])

; Broadcast de memória (sem instrução separada de broadcast!):
vaddps zmm0, zmm1, [rdi]{1to16}  ; soma zmm1 com [rdi] brodcastado para 16 floats

; AVX-512 loop (16 floats por iteração!):
.loop:
    vmovaps zmm0, [rdi]         ; 16 floats
    vmovaps zmm1, [rsi]         ; 16 floats
    vfmadd231ps zmm2, zmm0, zmm1 ; FMA com 16 floats de uma vez!
    add rdi, 64
    add rsi, 64
    dec rcx
    jnz .loop`} />

      <h2>Alinhamento de Memória</h2>
      <CodeBlock language="nasm" filename="alinhamento_simd.asm" code={`; AVX requer alinhamento de 32 bytes para VMOVAPS
; AVX-512 requer alinhamento de 64 bytes para VMOVAPS (ZMM)

section .data
    align 32             ; alinhado para AVX
    vetor: dd 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0

section .bss
    align 64             ; alinhado para AVX-512
    resultado: resd 16

section .text
    ; Use VMOVUPS para acesso não alinhado (mais lento):
    vmovups ymm0, [rdi]  ; funciona mesmo sem alinhamento`} />
    </PageContainer>
  );
}
