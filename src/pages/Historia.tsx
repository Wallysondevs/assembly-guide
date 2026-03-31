import { PageContainer } from "@/components/layout/PageContainer";
import { AlertBox } from "@/components/ui/AlertBox";
import { CodeBlock } from "@/components/ui/CodeBlock";

export default function Historia() {
  return (
    <PageContainer title="História do Assembly" subtitle="Da válvula termiônica ao nanômetro: como chegamos aqui" difficulty="iniciante" timeToRead="10 min">
      <p>Para entender Assembly, é essencial entender a história dos computadores. Cada geração de hardware moldou o que a linguagem precisava ser capaz de fazer.</p>

      <h2>1940s — Os Primeiros Computadores</h2>
      <p>Os primeiros computadores eletrônicos, como o <strong>ENIAC</strong> (1945), eram programados fisicamente — você movia cabos e ajustava switches para definir operações. Não existia "linguagem" nenhuma. Cada instrução era inserida diretamente no hardware.</p>
      <p>O <strong>EDSAC</strong> (1949) foi um dos primeiros a usar uma memória para armazenar programas. E com isso, surgiu a necessidade de escrever essas instruções de forma mais organizada.</p>

      <h2>1950s — O Nascimento do Assembly</h2>
      <p>Com a proliferação dos computadores, ficou inviável programar em código binário puro. Em 1947-1952, pesquisadores como <strong>Kathleen Booth</strong> desenvolveram as primeiras linguagens de montagem (assembly languages).</p>
      <p>A ideia era simples: em vez de escrever <code>10110000 01100001</code>, o programador escrevia <code>MOV AL, 97</code>. Um programa chamado <strong>assembler</strong> traduziria isso para os bytes corretos.</p>
      <AlertBox type="info" title="Kathleen Booth">
        Kathleen Booth é considerada uma das inventoras da linguagem Assembly, tendo desenvolvido a linguagem de montagem para os computadores ARC e SEC em 1947.
      </AlertBox>
      <p>O IBM 704 (1954) popularizou o uso de Assembly. Programadores escreviam em Assembly e viam isso como uma revolução — afinal, antes era código binário puro!</p>

      <h2>1960s — Mainframes e Variedade</h2>
      <p>Com a proliferação de arquiteturas (IBM 360, DEC PDP-8, etc.), cada fabricante tinha seu próprio Assembly. Um programa escrito para IBM 360 simplesmente não rodava em DEC — e vice-versa. A portabilidade era zero.</p>
      <p>Foi nessa época que linguagens de alto nível como <strong>FORTRAN</strong> (1957) e <strong>COBOL</strong> (1959) ganharam popularidade, prometendo portabilidade. Mas Assembly continuou dominante para código de sistema.</p>

      <h2>1970s — Unix e C mudam o jogo</h2>
      <p>A linguagem C, criada por <strong>Dennis Ritchie</strong> em 1972 para escrever o Unix, foi um ponto de inflexão. C oferecia abstração suficiente para escrever sistemas operacionais sem precisar de Assembly para tudo — mas ainda permitia inserir Assembly quando necessário.</p>
      <p>O Unix original do Bell Labs tinha partes críticas em Assembly PDP-11. O kernel Linux, criado por Linus Torvalds em 1991, também mistura C com Assembly x86.</p>

      <h2>1980s — x86 e a era dos PCs</h2>
      <p>O <strong>Intel 8086</strong> (1978) lançou a arquitetura x86, que domina PCs até hoje. O <strong>IBM PC</strong> (1981) usava o 8088 (versão do 8086 com barramento de 8 bits).</p>
      <p>Nessa época, Assembly <strong>era</strong> a linguagem dos jogos e softwares comerciais. Programadores de games como Doom (1993) usavam Assembly x86 para extrair cada ciclo de CPU possível.</p>
      <CodeBlock language="nasm" code={`; Assembly 8086 — era dos PCs
; Hello World no DOS (INT 21h)
mov ah, 09h
mov dx, msg
int 21h
ret

msg db 'Hello, World!$'`} />

      <h2>1990s — RISC vs CISC</h2>
      <p>A grande batalha dos anos 90: <strong>CISC</strong> (Complex Instruction Set Computer — x86) vs <strong>RISC</strong> (Reduced Instruction Set Computer — MIPS, SPARC, PowerPC).</p>
      <ul>
        <li><strong>CISC (x86):</strong> Muitas instruções complexas. Mais fácil de programar em Assembly. Instrução pode fazer várias operações.</li>
        <li><strong>RISC:</strong> Poucas instruções simples. Mais rápido por ter execução mais previsível. Cada instrução é simples e de tamanho fixo.</li>
      </ul>
      <p>x86 ganhou o mercado de PCs graças à compatibilidade retroativa e ao marketing da Intel/AMD. RISC ganhou no mercado embarcado e mobile.</p>

      <h2>2000s — 64-bit e Multicore</h2>
      <p>A AMD lançou o <strong>x86-64</strong> (AMD64) em 2003, estendendo x86 para 64 bits. A Intel adotou com o nome EM64T. O Assembly x86-64 que estudamos hoje é resultado dessa evolução.</p>
      <p>Com multicore, surgiu a necessidade de programação paralela — e o Assembly precisou evoluir para lidar com instruções atômicas, barreiras de memória e cache coherence.</p>

      <h2>2010s-2020s — ARM, RISC-V e o presente</h2>
      <p>O ARM dominou o mercado mobile. Em 2020, a Apple lançou o <strong>Apple Silicon M1</strong> baseado em ARM AArch64, mostrando que ARM pode competir com x86 em performance.</p>
      <p>O <strong>RISC-V</strong>, criado em Berkeley em 2010, tornou-se a arquitetura open-source mais promissora para sistemas embarcados e educação.</p>
      <AlertBox type="success" title="Assembly em 2025">
        Assembly não morreu — evoluiu. Hoje é essencial para: segurança cibernética, engenharia reversa, sistemas embarcados, otimização de performance crítica e desenvolvimento de compiladores.
      </AlertBox>

      <h2>Linha do Tempo Resumida</h2>
      <ul>
        <li><strong>1945:</strong> ENIAC — programação por switches e cabos</li>
        <li><strong>1947:</strong> Primeiros assemblers criados por Kathleen Booth</li>
        <li><strong>1952:</strong> IBM 701 — primeiro uso comercial de Assembly</li>
        <li><strong>1972:</strong> C criado — Assembly perde espaço em sistemas</li>
        <li><strong>1978:</strong> Intel 8086 — nasce o x86</li>
        <li><strong>1991:</strong> Linux escrito em C + Assembly x86</li>
        <li><strong>2003:</strong> AMD64 (x86-64) — extensão para 64 bits</li>
        <li><strong>2010:</strong> RISC-V criado em Berkeley</li>
        <li><strong>2020:</strong> Apple M1 — ARM conquista desktop</li>
        <li><strong>2025:</strong> Assembly continua essencial em segurança, embedded e kernels</li>
      </ul>
    </PageContainer>
  );
}
