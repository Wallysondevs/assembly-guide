import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Introducao() {
  return (
    <PageContainer title="O que é Assembly?" subtitle="Entenda a linguagem mais próxima do hardware que existe" difficulty="iniciante" timeToRead="12 min">
      <p>Assembly (ou linguagem Assembly, linguagem de montagem) é uma linguagem de programação de <strong>baixo nível</strong> que possui uma correspondência direta, quase um-para-um, com as instruções em código de máquina da arquitetura de processador alvo. É a camada de abstração mais fina que existe entre o programador e o hardware.</p>

      <h2>O que significa "baixo nível"?</h2>
      <p>Na hierarquia das linguagens de programação, existem dois extremos:</p>
      <ul>
        <li><strong>Alto nível:</strong> Python, JavaScript, Java — abstraem completamente o hardware. Você não sabe nem precisa saber como a memória funciona.</li>
        <li><strong>Baixo nível:</strong> C, Assembly — você controla diretamente a memória, os registradores e o comportamento do processador.</li>
      </ul>
      <p>Assembly está no nível mais baixo possível <em>ainda legível por humanos</em>. Abaixo dele só há código de máquina puro — sequências de bytes.</p>

      <AlertBox type="info" title="Assembly vs Código de Máquina">
        Código de máquina é o que o processador executa: bytes brutos como <code>48 89 E5</code>. Assembly é a representação textual dessas mesmas instruções: <code>mov rbp, rsp</code>. Um <strong>assembler</strong> (montador) converte Assembly em código de máquina.
      </AlertBox>

      <h2>Como o processador pensa?</h2>
      <p>O processador executa instruções simples, uma por vez (ou em paralelo via pipelining). Cada instrução faz algo muito específico:</p>
      <ul>
        <li>Mover dados de um lugar para outro</li>
        <li>Somar dois números</li>
        <li>Comparar dois valores</li>
        <li>Pular para outro endereço de memória</li>
        <li>Ler ou escrever na memória</li>
      </ul>
      <p>Em Assembly, você escreve exatamente essas operações, na ordem que quiser.</p>

      <h2>Exemplo: A mesma operação em 3 níveis</h2>
      <p>Veja como somar dois números é expresso em diferentes níveis:</p>

      <CodeBlock language="python" filename="alto_nivel.py" code={`# Python — alto nível
resultado = a + b`} />

      <CodeBlock language="c" filename="medio_nivel.c" code={`// C — nível médio
int resultado = a + b;`} />

      <CodeBlock language="nasm" filename="baixo_nivel.asm" code={`; Assembly x86-64 — baixo nível
; Assumindo que 'a' está em rax e 'b' está em rbx
mov rax, [a]       ; carrega 'a' no registrador rax
mov rbx, [b]       ; carrega 'b' no registrador rbx
add rax, rbx       ; soma: rax = rax + rbx
mov [resultado], rax ; salva o resultado na memória`} />

      <h2>Por que Assembly ainda existe?</h2>
      <p>Em 2025, compiladores modernos como GCC e Clang geram código Assembly extremamente otimizado. Então por que ainda escrever Assembly manualmente?</p>
      <ul>
        <li><strong>Segurança e hacking:</strong> Análise de malware, exploitation, engenharia reversa e shellcoding exigem leitura e escrita de Assembly.</li>
        <li><strong>Sistemas embarcados:</strong> Bootloaders, drivers de hardware e código de inicialização frequentemente precisam de Assembly.</li>
        <li><strong>Otimização ultra-específica:</strong> SIMD manual (SSE/AVX) para algoritmos de processamento de imagem, criptografia e IA.</li>
        <li><strong>Sistemas operacionais:</strong> O kernel Linux tem partes em Assembly. Sem Assembly, não há SO.</li>
        <li><strong>Entender computação profundamente:</strong> Quem entende Assembly entende TUDO sobre como computadores realmente funcionam.</li>
      </ul>

      <AlertBox type="success" title="Assembly é um superpoder">
        Programadores que entendem Assembly têm uma vantagem enorme em debugging, segurança, performance e compreensão de sistemas. É difícil, mas absolutamente vale a pena.
      </AlertBox>

      <h2>Como o Assembly é convertido em código de máquina?</h2>
      <p>O fluxo é:</p>
      <ol>
        <li>Você escreve código Assembly (<code>.asm</code> ou <code>.s</code>)</li>
        <li>Um <strong>assembler</strong> (como NASM ou GAS) converte para código objeto (<code>.o</code>)</li>
        <li>Um <strong>linker</strong> (como <code>ld</code>) une objetos em um executável</li>
        <li>O sistema operacional carrega e executa</li>
      </ol>

      <CodeBlock language="bash" filename="fluxo.sh" code={`# Compilar Assembly com NASM + linker
nasm -f elf64 programa.asm -o programa.o
ld programa.o -o programa
./programa`} />

      <h2>Famílias de Assembly</h2>
      <p>Não existe "um" Assembly — cada arquitetura de processador tem seu próprio conjunto de instruções (ISA — Instruction Set Architecture):</p>
      <ul>
        <li><strong>x86 / x86-64 (AMD64):</strong> Intel e AMD. O mais comum em computadores pessoais e servidores.</li>
        <li><strong>ARM / AArch64:</strong> Smartphones, Raspberry Pi, Apple Silicon (M1/M2/M3).</li>
        <li><strong>RISC-V:</strong> Nova arquitetura open-source, crescendo em sistemas embarcados e educação.</li>
        <li><strong>MIPS:</strong> Roteadores, consoles antigos (PlayStation 1/2).</li>
        <li><strong>PowerPC:</strong> Xbox 360, PlayStation 3, Macs antigos.</li>
      </ul>
      <p>Neste livro, focamos principalmente em <strong>x86-64</strong> (o mais relevante em 2025), com capítulos dedicados a <strong>ARM</strong> e <strong>RISC-V</strong>.</p>
    </PageContainer>
  );
}
