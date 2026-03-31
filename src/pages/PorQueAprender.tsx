import { PageContainer } from "@/components/layout/PageContainer";
import { AlertBox } from "@/components/ui/AlertBox";

export default function PorQueAprender() {
  return (
    <PageContainer title="Por que Aprender Assembly?" subtitle="Os motivos concretos para investir tempo em uma linguagem 'difícil'" difficulty="iniciante" timeToRead="8 min">
      <p>Em 2025, com Python, Rust e Go disponíveis, por que alguém investiria tempo em Assembly? A resposta é simples: porque certos problemas só podem ser resolvidos — ou plenamente compreendidos — com conhecimento de Assembly.</p>

      <h2>1. Segurança Ofensiva e Defensiva</h2>
      <p>Esta é a razão número um pela qual profissionais de segurança aprendem Assembly hoje:</p>
      <ul>
        <li><strong>Buffer overflow exploitation:</strong> Para explorar uma vulnerabilidade, você precisa entender como a stack funciona em nível de Assembly.</li>
        <li><strong>Shellcoding:</strong> Shellcodes são pequenos pedaços de código Assembly injetados em processos vulneráveis.</li>
        <li><strong>Engenharia reversa:</strong> IDA Pro, Ghidra, Binary Ninja — todas as ferramentas de reversão mostram Assembly. Sem conhecê-lo, você está cego.</li>
        <li><strong>Análise de malware:</strong> Vírus, ransomware e rootkits são distribuídos como binários. Analisá-los requer leitura de Assembly.</li>
        <li><strong>CTF (Capture The Flag):</strong> Competições de segurança frequentemente exigem conhecimento de Assembly.</li>
      </ul>
      <AlertBox type="warning" title="Sem Assembly, você não é um hacker completo">
        Ferramentas como Metasploit automatizam muito, mas entender o que acontece por baixo — e criar exploits customizados — exige Assembly. Todo pentest avançado vai até esse nível.
      </AlertBox>

      <h2>2. Desenvolvimento de Sistemas Operacionais</h2>
      <p>Nenhum sistema operacional existe sem Assembly:</p>
      <ul>
        <li><strong>Bootloader:</strong> O código que roda quando o computador liga é puro Assembly (modo real 16-bit).</li>
        <li><strong>Tratadores de interrupção:</strong> IRQs e exceções precisam de Assembly para salvar/restaurar contexto.</li>
        <li><strong>Troca de contexto:</strong> Switching entre processos no kernel salva registradores em Assembly.</li>
        <li><strong>Código de inicialização:</strong> O ponto de entrada de qualquer SO tem Assembly antes de chamar a função C main().</li>
      </ul>

      <h2>3. Sistemas Embarcados e IoT</h2>
      <p>Microcontroladores com recursos extremamente limitados frequentemente precisam de Assembly:</p>
      <ul>
        <li>Rotinas de tempo crítico onde o C gera código demais</li>
        <li>Acesso direto a periféricos e registradores de hardware</li>
        <li>Bootloaders de microcontroladores (AVR, ARM Cortex-M)</li>
        <li>Código de inicialização de PLCs industriais</li>
      </ul>

      <h2>4. Otimização de Performance Extrema</h2>
      <p>Para algoritmos de performance crítica, Assembly manual pode superar qualquer compilador:</p>
      <ul>
        <li><strong>Criptografia:</strong> Implementações de AES com AES-NI, SHA com extensões SHA são 10x mais rápidas que código C puro.</li>
        <li><strong>Processamento de imagem/vídeo:</strong> Codecs de vídeo (x264, x265) usam SIMD manual em Assembly.</li>
        <li><strong>Machine Learning:</strong> Kernels de multiplicação de matrizes usam AVX-512 para máxima throughput.</li>
        <li><strong>Bancos de dados:</strong> SQLite e PostgreSQL têm partes em Assembly para operações críticas.</li>
      </ul>

      <h2>5. Entender Compiladores e Debuggers</h2>
      <p>Quando você sabe Assembly, passa a entender:</p>
      <ul>
        <li>O que o GCC realmente gera para seu código C</li>
        <li>Por que certas otimizações do compilador funcionam</li>
        <li>Como usar GDB efetivamente para debugar crashes</li>
        <li>Como coredumps e stack traces realmente funcionam</li>
        <li>O que `-O2` vs `-O3` realmente muda no código gerado</li>
      </ul>

      <h2>6. Interesse Acadêmico e Profissional</h2>
      <ul>
        <li>Cursos de Arquitetura de Computadores em universidades usam Assembly</li>
        <li>Entrevistas em empresas como Google, Amazon exigem conhecimento de como o hardware funciona</li>
        <li>Pesquisa em compiladores, arquitetura de processadores, hardware verification</li>
      </ul>

      <h2>É realmente difícil?</h2>
      <p>Assembly tem reputação de ser extremamente difícil. A realidade: é <em>diferente</em>, não necessariamente mais difícil. Os conceitos fundamentais são poucos:</p>
      <ul>
        <li>Registradores (variáveis do processador)</li>
        <li>Instruções (operações básicas)</li>
        <li>Memória (stack e heap)</li>
        <li>Saltos e loops (controle de fluxo)</li>
        <li>System calls (interação com o OS)</li>
      </ul>
      <p>A curva de aprendizado inicial é íngreme, mas depois que os conceitos básicos encaixam, tudo faz sentido. Este livro foi escrito para tornar essa jornada o mais suave possível.</p>

      <AlertBox type="success" title="Compromisso de aprendizado">
        Com 1-2 horas por dia, em 30-60 dias você terá uma base sólida em Assembly x86-64. Não desista nas primeiras semanas — o "clique" acontece e vale cada momento investido.
      </AlertBox>
    </PageContainer>
  );
}
