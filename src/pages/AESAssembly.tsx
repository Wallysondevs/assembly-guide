import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function AESAssembly() {
  return (
    <PageContainer title="AES em Assembly" subtitle="Implementando AES-128 usando instruções AES-NI do hardware" difficulty="expert" timeToRead="25 min">
      <p>Processadores Intel/AMD modernos têm instruções de hardware para AES (Advanced Encryption Standard) — as instruções AES-NI. São extremamente rápidas e resistentes a timing attacks.</p>

      <h2>Instruções AES-NI</h2>
      <table>
        <thead><tr><th>Instrução</th><th>Operação</th><th>Ciclos</th></tr></thead>
        <tbody>
          {[
            ["AESENC xmm, xmm","Uma rodada de encriptação AES","~7"],
            ["AESENCLAST xmm, xmm","Última rodada de encriptação","~7"],
            ["AESDEC xmm, xmm","Uma rodada de decriptação AES","~7"],
            ["AESDECLAST xmm, xmm","Última rodada de decriptação","~7"],
            ["AESKEYGENASSIST xmm, xmm, imm8","Geração de subchave","~10"],
            ["AESIMC xmm, xmm","Inverse Mix Columns (para decriptação)","~14"],
          ].map(([i,o,c]) => <tr key={i}><td><code>{i}</code></td><td>{o}</td><td>{c}</td></tr>)}
        </tbody>
      </table>

      <h2>Verificar Suporte a AES-NI</h2>
      <CodeBlock language="nasm" filename="check_aesni.asm" code={`; Verificar se CPU suporta AES-NI:
check_aesni:
    mov eax, 1
    cpuid
    bt ecx, 25          ; bit 25 do ECX = AES-NI
    jnc .no_support
    ; CPU suporta AES-NI!
    ret
.no_support:
    ; Fallback para implementação software
    ret`} />

      <h2>Geração de Round Keys — Key Schedule</h2>
      <CodeBlock language="nasm" filename="key_schedule.asm" code={`; AES-128 usa 10 rodadas + 1 chave inicial = 11 round keys de 128-bit
; Entrada: rdi = chave de 128-bit (16 bytes)
; Saída: rsi = array de 11 × 128-bit round keys (176 bytes)

section .text
    global aes128_key_schedule

aes128_key_schedule:
    movdqu xmm1, [rdi]          ; xmm1 = chave original
    movdqu [rsi], xmm1          ; round_key[0] = chave

    ; Gerar round keys 1-10:
    ; Key expansion usando AESKEYGENASSIST:

    %macro KEY_EXP 2            ; %1 = rcon value, %2 = offset no array de saída
        aeskeygenassist xmm2, xmm1, %1   ; xmm2 = chave parcial
        ; Palavra de controle: usar o ultimo dword (shufps)
        pshufd xmm2, xmm2, 0xFF         ; broadcast ultimo dword
        ; XOR com deslocamentos da chave anterior:
        movdqa xmm3, xmm1
        pslldq xmm3, 4                   ; shift esquerda 4 bytes
        pxor xmm1, xmm3
        pslldq xmm3, 4
        pxor xmm1, xmm3
        pslldq xmm3, 4
        pxor xmm1, xmm3
        pxor xmm1, xmm2                  ; xmm1 = nova round key
        movdqu [rsi + %2], xmm1
    %endmacro

    KEY_EXP 0x01, 16
    KEY_EXP 0x02, 32
    KEY_EXP 0x04, 48
    KEY_EXP 0x08, 64
    KEY_EXP 0x10, 80
    KEY_EXP 0x20, 96
    KEY_EXP 0x40, 112
    KEY_EXP 0x80, 128
    KEY_EXP 0x1B, 144
    KEY_EXP 0x36, 160

    ret`} />

      <h2>AES-128 ECB Encrypt</h2>
      <CodeBlock language="nasm" filename="aes_encrypt.asm" code={`; aes128_encrypt_block(plaintext, round_keys) → ciphertext
; Entrada: rdi = ponteiro para 16 bytes plaintext
;          rsi = ponteiro para 11 × 16 bytes round keys
; Saída: resultado em xmm0 (caller deve salvar)

aes128_encrypt_block:
    movdqu xmm0, [rdi]          ; xmm0 = plaintext

    ; Operação inicial: AddRoundKey com round_key[0]
    pxor xmm0, [rsi]

    ; Rodadas 1-9 (usando AESENC):
    aesenc xmm0, [rsi + 16]
    aesenc xmm0, [rsi + 32]
    aesenc xmm0, [rsi + 48]
    aesenc xmm0, [rsi + 64]
    aesenc xmm0, [rsi + 80]
    aesenc xmm0, [rsi + 96]
    aesenc xmm0, [rsi + 112]
    aesenc xmm0, [rsi + 128]
    aesenc xmm0, [rsi + 144]

    ; Rodada final 10 (usando AESENCLAST):
    aesenclast xmm0, [rsi + 160]

    ; xmm0 = ciphertext
    ret`} />

      <h2>AES-128 CTR Mode (Paralelo)</h2>
      <CodeBlock language="nasm" filename="aes_ctr.asm" code={`; AES-CTR: encripta múltiplos blocos em paralelo!
; CTR: ciphertext[i] = plaintext[i] XOR AES(key, nonce || counter[i])
; Como cada bloco é independente, podemos encriptar múltiplos de uma vez:

aes128_ctr_encrypt_4blocks:
    ; Preparar 4 contadores (incrementando):
    movdqu xmm0, [rdi]          ; contador base
    movdqa xmm1, xmm0
    movdqa xmm2, xmm0
    movdqa xmm3, xmm0

    ; Incrementar contadores:
    paddd xmm1, [ctr_inc_1]    ; xmm1 = counter + 1
    paddd xmm2, [ctr_inc_2]    ; xmm2 = counter + 2
    paddd xmm3, [ctr_inc_3]    ; xmm3 = counter + 3

    ; AddRoundKey inicial para todos os 4 blocos de uma vez:
    pxor xmm0, [rsi]
    pxor xmm1, [rsi]
    pxor xmm2, [rsi]
    pxor xmm3, [rsi]

    ; 9 rodadas para os 4 blocos:
    %macro AES_ROUND_4 1
        aesenc xmm0, [rsi + %1]
        aesenc xmm1, [rsi + %1]
        aesenc xmm2, [rsi + %1]
        aesenc xmm3, [rsi + %1]
    %endmacro

    AES_ROUND_4 16
    AES_ROUND_4 32
    ; ... (repetir para todas as 9 rodadas) ...
    AES_ROUND_4 144

    ; Rodada final:
    aesenclast xmm0, [rsi + 160]
    aesenclast xmm1, [rsi + 160]
    aesenclast xmm2, [rsi + 160]
    aesenclast xmm3, [rsi + 160]

    ; XOR com plaintext para obter ciphertext:
    pxor xmm0, [rdx]        ; plaintext block 0
    pxor xmm1, [rdx + 16]   ; plaintext block 1
    pxor xmm2, [rdx + 32]   ; plaintext block 2
    pxor xmm3, [rdx + 48]   ; plaintext block 3

    ; Salvar ciphertext:
    movdqu [rcx],      xmm0
    movdqu [rcx + 16], xmm1
    movdqu [rcx + 32], xmm2
    movdqu [rcx + 48], xmm3
    ret`} />

      <AlertBox type="success" title="Performance do AES-NI">
        Uma implementação AES-NI bem otimizada pode atingir mais de 10 GB/s em um único core moderno. Isso é ~10× mais rápido que uma implementação software em C. O processador faz cada rodada AES em ~7 ciclos, e com pipelining e paralelismo de blocos CTR, pode processar múltiplos blocos simultaneamente.
      </AlertBox>
    </PageContainer>
  );
}
