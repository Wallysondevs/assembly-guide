import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function RepresentacaoDados() {
  return (
    <PageContainer title="Representação de Dados" subtitle="Como inteiros, floats, chars e strings vivem na memória" difficulty="iniciante" timeToRead="12 min">
      <p>Um processador não sabe o que é "número" ou "texto" — ele só vê bytes. A interpretação de um byte como inteiro, float ou caractere é uma convenção que nós, programadores, estabelecemos. Em Assembly, você é responsável por essa interpretação.</p>

      <h2>Inteiros sem sinal (Unsigned)</h2>
      <p>Representação direta em binário. Todos os bits são usados para o valor positivo:</p>
      <table>
        <thead><tr><th>Tipo</th><th>Bits</th><th>Mínimo</th><th>Máximo</th></tr></thead>
        <tbody>
          <tr><td>byte</td><td>8</td><td>0</td><td>255</td></tr>
          <tr><td>word</td><td>16</td><td>0</td><td>65.535</td></tr>
          <tr><td>dword</td><td>32</td><td>0</td><td>4.294.967.295</td></tr>
          <tr><td>qword</td><td>64</td><td>0</td><td>18.446.744.073.709.551.615</td></tr>
        </tbody>
      </table>

      <h2>Inteiros com sinal — Complemento de Dois</h2>
      <p>A forma mais comum de representar números negativos. O bit mais significativo (MSB) indica o sinal: 0 = positivo, 1 = negativo.</p>
      <p>Para obter o negativo de um número: <strong>inverta todos os bits e some 1</strong>.</p>
      <CodeBlock language="bash" code={`# Como representar -5 em 8 bits?
+5 em binário:   0000 0101
Inverter bits:   1111 1010
Somar 1:       + 0000 0001
Resultado (-5):  1111 1011

# Verificação: -5 + 5 = 0
  1111 1011  (-5)
+ 0000 0101  (+5)
-----------
1 0000 0000  (overflow descartado = 0) ✓`} />
      <table>
        <thead><tr><th>Tipo</th><th>Bits</th><th>Mínimo</th><th>Máximo</th></tr></thead>
        <tbody>
          <tr><td>byte</td><td>8</td><td>-128</td><td>127</td></tr>
          <tr><td>word</td><td>16</td><td>-32.768</td><td>32.767</td></tr>
          <tr><td>dword</td><td>32</td><td>-2.147.483.648</td><td>2.147.483.647</td></tr>
          <tr><td>qword</td><td>64</td><td>-9.223.372.036.854.775.808</td><td>9.223.372.036.854.775.807</td></tr>
        </tbody>
      </table>
      <AlertBox type="warning" title="Overflow silencioso">
        Em Assembly não existe "exception por overflow". Se você somar 127 + 1 em um byte com sinal, você obtém -128. O processador seta a flag OF (Overflow Flag) mas não para a execução — você precisa verificar manualmente.
      </AlertBox>

      <h2>Ponto Flutuante (IEEE 754)</h2>
      <p>Floats são representados no padrão IEEE 754. Um float de 32 bits tem:</p>
      <ul>
        <li><strong>1 bit de sinal:</strong> 0 = positivo, 1 = negativo</li>
        <li><strong>8 bits de expoente:</strong> com bias de 127</li>
        <li><strong>23 bits de mantissa:</strong> a parte fracionária</li>
      </ul>
      <CodeBlock language="bash" code={`# Representação de 3.14 em IEEE 754 single (32-bit):
# Sinal: 0 (positivo)
# 3.14 ≈ 1.1001000111101011100001 × 2^1
# Expoente: 1 + 127 = 128 = 10000000
# Mantissa: 10010001111010111000011

# Resultado: 0 10000000 10010001111010111000011
# Em hex: 0x4048F5C3`} />
      <p>Em Assembly x86-64, operações de float usam:</p>
      <ul>
        <li><strong>Registradores XMM:</strong> Para SSE/SSE2 (scalar e SIMD)</li>
        <li><strong>Registradores x87 (ST0-ST7):</strong> FPU legado, 80-bit extended precision</li>
      </ul>

      <h2>Caracteres e Strings</h2>
      <h3>ASCII</h3>
      <p>O padrão mais simples: cada caractere é 1 byte (7 bits significativos, valores 0-127).</p>
      <CodeBlock language="bash" code={`# Tabela ASCII parcial:
65 = 'A',  66 = 'B',  67 = 'C'
97 = 'a',  98 = 'b',  99 = 'c'
48 = '0',  49 = '1',  50 = '2'
32 = ' ' (espaço)
10 = '\n' (newline)
0  = '\0' (null terminator)`} />

      <h3>Strings em Assembly</h3>
      <p>Strings em Assembly são sequências de bytes terminadas por <code>0</code> (null terminator), assim como em C:</p>
      <CodeBlock language="nasm" filename="strings.asm" code={`section .data
    mensagem db "Hello, World!", 10, 0
    ;          ^ string literal     ^newline ^null terminator

    ; Alternativa equivalente:
    msg2 db 'H','e','l','l','o',10,0

    ; Vários jeitos de declarar:
    nome db "João", 0           ; string UTF-8
    tamanho equ $ - mensagem    ; calcula o tamanho`} />

      <h2>Little-Endian vs Big-Endian</h2>
      <p>x86-64 é <strong>little-endian</strong>: o byte menos significativo é armazenado no endereço mais baixo.</p>
      <CodeBlock language="bash" code={`# Valor 0x12345678 armazenado na memória:
# Endereço: 0x1000 0x1001 0x1002 0x1003

# Little-endian (x86):
#            78    56    34    12
# Leitura de menor para maior endereço: 78 56 34 12

# Big-endian (ARM antigo, PowerPC, redes):
#            12    34    56    78

# IMPORTANTE: Dados de rede (TCP/IP) são BIG-ENDIAN!
# Por isso existe htons(), htonl() em C para converter.`} />
      <AlertBox type="danger" title="Armadilha do endian">
        Ao ler dados de rede ou arquivos com formato big-endian em x86-64, você precisa inverter os bytes. A instrução <code>BSWAP</code> do x86-64 inverte a ordem dos bytes de um registrador de 32 ou 64 bits.
      </AlertBox>

      <h2>Tamanhos de Dados em NASM</h2>
      <CodeBlock language="nasm" filename="tamanhos.asm" code={`section .data
    b  db 42          ; byte  (8 bits)  — define byte
    w  dw 1000        ; word  (16 bits) — define word
    d  dd 100000      ; dword (32 bits) — define doubleword
    q  dq 1000000000  ; qword (64 bits) — define quadword

section .bss
    buf_byte  resb 1  ; reserva 1 byte
    buf_word  resw 1  ; reserva 1 word
    buf_dword resd 1  ; reserva 1 dword
    buf_qword resq 1  ; reserva 1 qword
    buffer    resb 64 ; reserva 64 bytes (buffer)`} />

      <h2>Instrução MOVZX e MOVSX</h2>
      <CodeBlock language="nasm" filename="extensao.asm" code={`; MOVZX — Move com extensão zero (unsigned)
movzx rax, byte [mem]   ; rax = zero-extend(byte) — preenche com zeros
movzx rax, word [mem]   ; rax = zero-extend(word)

; MOVSX — Move com extensão de sinal (signed)
movsx rax, byte [mem]   ; rax = sign-extend(byte) — propaga o bit de sinal
movsx rax, word [mem]   ; rax = sign-extend(word)

; Exemplo:
; byte = 0xFF = 255 (unsigned) ou -1 (signed)
movzx rax, byte [mem]   ; rax = 0x00000000000000FF = 255
movsx rax, byte [mem]   ; rax = 0xFFFFFFFFFFFFFFFF = -1`} />
    </PageContainer>
  );
}
