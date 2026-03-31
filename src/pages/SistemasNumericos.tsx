import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function SistemasNumericos() {
  return (
    <PageContainer title="Sistemas Numéricos" subtitle="Binário, octal, hexadecimal e como o processador pensa em números" difficulty="iniciante" timeToRead="15 min">
      <p>Em Assembly, você vai trabalhar constantemente com diferentes bases numéricas. Dominar a conversão entre elas é fundamental — e mais simples do que parece.</p>

      <h2>Sistema Decimal (Base 10)</h2>
      <p>O sistema que usamos no dia a dia. Usa 10 dígitos: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Cada posição é uma potência de 10:</p>
      <CodeBlock language="bash" code={`# Exemplo: 4532
4 × 10³ = 4000
5 × 10² =  500
3 × 10¹ =   30
2 × 10⁰ =    2
Total   = 4532`} />

      <h2>Sistema Binário (Base 2)</h2>
      <p>O processador trabalha internamente em binário — tudo são 0s e 1s (ausência ou presença de voltagem). Usa 2 dígitos: 0 e 1. Cada posição é uma potência de 2:</p>
      <CodeBlock language="bash" code={`# Exemplo: 1011 em binário = 11 em decimal
1 × 2³ = 8
0 × 2² = 0
1 × 2¹ = 2
1 × 2⁰ = 1
Total  = 11`} />

      <h3>Bits e Bytes</h3>
      <ul>
        <li><strong>Bit:</strong> 1 dígito binário (0 ou 1)</li>
        <li><strong>Nibble:</strong> 4 bits (0000 a 1111 → 0 a 15)</li>
        <li><strong>Byte:</strong> 8 bits (00000000 a 11111111 → 0 a 255)</li>
        <li><strong>Word:</strong> 16 bits (2 bytes → 0 a 65.535)</li>
        <li><strong>Dword:</strong> 32 bits (4 bytes → 0 a ~4 bilhões)</li>
        <li><strong>Qword:</strong> 64 bits (8 bytes → 0 a ~18 quintilhões)</li>
      </ul>

      <h2>Sistema Hexadecimal (Base 16)</h2>
      <p>Este é o sistema favorito dos programadores de baixo nível. Usa 16 dígitos: 0-9 e A-F (onde A=10, B=11, C=12, D=13, E=14, F=15).</p>
      <p>A razão é simples: <strong>1 byte = 2 dígitos hexadecimais</strong>. Muito mais compacto que binário!</p>
      <CodeBlock language="bash" code={`# Binário → Hexadecimal
# 1 nibble = 1 dígito hex
1111 = F = 15
1010 = A = 10
0101 = 5 = 5

# 11111010 (1 byte) em hex:
# 1111 = F, 1010 = A
11111010 = FA = 250 (decimal)

# Prefixos comuns para hex:
0xFF    # Prefixo em C/Assembly
$FF     # Prefixo em alguns assemblers  
FFh     # Sufixo em MASM/NASM`} />

      <AlertBox type="info" title="Por que hex?">
        Um endereço de memória típico: <code>0x7fff5fbff800</code>. Em binário seria: <code>0111 1111 1111 1111 0101 1111 1011 1111 1111 1000 0000 0000</code>. Hex é MUITO mais legível.
      </AlertBox>

      <h2>Tabela de Conversão Rápida</h2>
      <table>
        <thead><tr><th>Decimal</th><th>Binário</th><th>Hex</th><th>Octal</th></tr></thead>
        <tbody>
          {[
            [0,"0000","0","0"],[1,"0001","1","1"],[2,"0010","2","2"],[3,"0011","3","3"],
            [4,"0100","4","4"],[5,"0101","5","5"],[6,"0110","6","6"],[7,"0111","7","7"],
            [8,"1000","8","10"],[9,"1001","9","11"],[10,"1010","A","12"],[11,"1011","B","13"],
            [12,"1100","C","14"],[13,"1101","D","15"],[14,"1110","E","16"],[15,"1111","F","17"],
          ].map(([d,b,h,o]) => <tr key={String(d)}><td>{d}</td><td>{b}</td><td>{h}</td><td>{o}</td></tr>)}
        </tbody>
      </table>

      <h2>Conversões Práticas</h2>
      <h3>Decimal → Binário (divisões por 2)</h3>
      <CodeBlock language="bash" code={`# Converter 42 para binário:
42 ÷ 2 = 21 resto 0
21 ÷ 2 = 10 resto 1
10 ÷ 2 =  5 resto 0
 5 ÷ 2 =  2 resto 1
 2 ÷ 2 =  1 resto 0
 1 ÷ 2 =  0 resto 1

# Lendo os restos de baixo para cima:
42 (decimal) = 101010 (binário) = 0x2A (hex)`} />

      <h3>Hex → Decimal</h3>
      <CodeBlock language="bash" code={`# 0xFF = ?
F = 15, F = 15
15 × 16¹ + 15 × 16⁰ = 240 + 15 = 255

# 0x1A4 = ?
1 × 16² + A(10) × 16¹ + 4 × 16⁰
= 256 + 160 + 4 = 420`} />

      <h2>Operações Bit a Bit (Bitwise)</h2>
      <p>Assembly usa muito operações bit a bit. Entendê-las é crucial:</p>

      <h3>AND (&amp;) — Ambos precisam ser 1</h3>
      <CodeBlock language="bash" code={`  1100 (12)
& 1010 (10)
-------
  1000 (8)

Uso prático: Mascarar bits (isolar certos bits)
byte & 0x0F → pega só o nibble baixo`} />

      <h3>OR (|) — Pelo menos um precisa ser 1</h3>
      <CodeBlock language="bash" code={`  1100 (12)
| 1010 (10)
-------
  1110 (14)

Uso prático: Setar bits específicos
byte | 0x80 → seta o bit mais significativo`} />

      <h3>XOR (^) — Exatamente um precisa ser 1</h3>
      <CodeBlock language="bash" code={`  1100 (12)
^ 1010 (10)
-------
  0110 (6)

Uso prático: Toggle bits, zerar registrador (xor eax, eax)
a ^ a = 0 (sempre!)`} />

      <h3>NOT (~) — Inverte todos os bits</h3>
      <CodeBlock language="bash" code={`~1010 1100 = 0101 0011

Uso prático: Complemento de 1, criação de máscaras`} />

      <h3>Shift Left (SHL / &lt;&lt;) — Multiplica por 2</h3>
      <CodeBlock language="bash" code={`0001 << 1 = 0010 (1 × 2 = 2)
0001 << 3 = 1000 (1 × 8 = 8)
0011 << 2 = 1100 (3 × 4 = 12)

Muito mais rápido que MUL para potências de 2!`} />

      <h3>Shift Right (SHR / &gt;&gt;) — Divide por 2</h3>
      <CodeBlock language="bash" code={`1000 >> 1 = 0100 (8 ÷ 2 = 4)
1000 >> 2 = 0010 (8 ÷ 4 = 2)

SHR é divisão sem sinal, SAR é divisão com sinal`} />

      <h2>Dicas práticas</h2>
      <CodeBlock language="nasm" filename="numericos.asm" code={`; Notações em NASM
mov rax, 42          ; decimal
mov rax, 0x2A        ; hexadecimal (prefixo 0x)
mov rax, 2Ah         ; hexadecimal (sufixo h — deve começar com dígito!)
mov rax, 0b00101010  ; binário (prefixo 0b)
mov rax, 101010b     ; binário (sufixo b)
mov rax, 52o         ; octal (sufixo o)

; Zerar registrador com XOR (otimização clássica)
xor rax, rax         ; rax = 0 (mais rápido que mov rax, 0!)

; Multiplicar por 4 com shift
shl rax, 2           ; rax = rax * 4

; Isolar byte mais baixo
and rax, 0xFF        ; pega só os 8 bits menos significativos`} />
    </PageContainer>
  );
}
