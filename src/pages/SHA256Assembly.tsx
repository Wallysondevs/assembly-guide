import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function SHA256Assembly() {
  return (
    <PageContainer title="SHA-256 em Assembly" subtitle="Implementando SHA-256 com extensões SHA de hardware" difficulty="expert" timeToRead="20 min">
      <p>Assim como AES-NI para criptografia, processadores modernos (Intel Goldmont+, AMD Zen+) têm instruções de hardware para SHA-256 — as extensões SHA. Isso acelera hashing em 3-4× comparado à implementação software.</p>

      <h2>Instruções SHA</h2>
      <table>
        <thead><tr><th>Instrução</th><th>Operação</th></tr></thead>
        <tbody>
          {[
            ["SHA256MSG1 xmm, xmm","Prepara mensagem (sigma0 + expansão parcial)"],
            ["SHA256MSG2 xmm, xmm","Completa expansão da mensagem"],
            ["SHA256RNDS2 xmm, xmm","Executa 2 rodadas de SHA-256"],
          ].map(([i,o]) => <tr key={i}><td><code>{i}</code></td><td>{o}</td></tr>)}
        </tbody>
      </table>

      <h2>SHA-256 — Constantes e Algoritmo</h2>
      <CodeBlock language="nasm" filename="sha256_const.asm" code={`; As 64 constantes K de SHA-256 (primeiros 32 bits das raízes cúbicas dos primos):
section .rodata
    align 64
sha256_constants:
    dd 0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5
    dd 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5
    dd 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3
    dd 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174
    dd 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc
    dd 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da
    dd 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7
    dd 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967
    dd 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13
    dd 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85
    dd 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3
    dd 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070
    dd 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5
    dd 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3
    dd 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208
    dd 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2

; Estado inicial (primeiros 32 bits das raízes quadradas dos 8 primeiros primos):
sha256_init_state:
    dd 0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a
    dd 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19`} />

      <h2>SHA-256 Software (Portável)</h2>
      <CodeBlock language="nasm" filename="sha256_sw.asm" code={`; SHA-256 rodada em software (sem extensões de hardware)
; rdi = estado [h0,h1,h2,h3,h4,h5,h6,h7]
; rsi = bloco de mensagem (64 bytes)

; Operações de SHA-256:
; Ch(x,y,z) = (x & y) ^ (~x & z)
; Maj(x,y,z) = (x & y) ^ (x & z) ^ (y & z)
; Σ0(x) = ROR(x,2) ^ ROR(x,13) ^ ROR(x,22)
; Σ1(x) = ROR(x,6) ^ ROR(x,11) ^ ROR(x,25)
; σ0(x) = ROR(x,7) ^ ROR(x,18) ^ SHR(x,3)
; σ1(x) = ROR(x,17) ^ ROR(x,19) ^ SHR(x,10)

; Macros para as operações SHA:
%macro SHA_CH 4         ; dest = Ch(x,y,z): %1=dest, %2=x, %3=y, %4=z
    mov %1, %2
    and %1, %3
    mov rcx, %2
    not rcx
    and rcx, %4
    xor %1, rcx
%endmacro

%macro SHA_SIGMA1 2     ; %1 = Σ1(%2)
    mov %1, %2
    ror %1, 6
    mov rcx, %2
    ror rcx, 11
    xor %1, rcx
    mov rcx, %2
    ror rcx, 25
    xor %1, rcx
%endmacro

section .text
sha256_process_block:
    push rbp
    mov  rbp, rsp
    sub  rsp, 256       ; W[64] = 64 dwords × 4 bytes = 256 bytes

    ; 1. Preparar message schedule W[0..63]:
    ; W[0..15] = bloco de mensagem (big-endian!):
    mov rcx, 16
    xor r8, r8
.copy_msg:
    mov eax, [rsi + r8*4]
    bswap eax           ; big-endian → little-endian
    mov [rsp + r8*4], eax
    inc r8
    dec rcx
    jnz .copy_msg

    ; W[16..63] = expansão:
    mov rcx, 48         ; 64 - 16 = 48 iterações
    mov r8, 16
.expand:
    ; W[i] = σ1(W[i-2]) + W[i-7] + σ0(W[i-15]) + W[i-16]
    ; (implementação completa aqui)
    inc r8
    dec rcx
    jnz .expand

    ; 2. Inicializar variáveis de trabalho a..h com estado atual

    ; 3. 64 rodadas de compressão

    ; 4. Adicionar ao estado
    leave
    ret`} />

      <AlertBox type="info" title="SHA com Hardware">
        Com as extensões SHA (disponíveis em Intel Ice Lake+, AMD Zen+), <code>SHA256RNDS2</code> faz 2 rodadas de SHA-256 em ~3-4 ciclos cada. Uma implementação completa com SHA-NI pode processar ~2 GB/s em um core.
      </AlertBox>
    </PageContainer>
  );
}
