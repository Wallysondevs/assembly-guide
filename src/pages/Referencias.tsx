import { PageContainer } from "@/components/layout/PageContainer";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Referencias() {
  return (
    <PageContainer title="Referências e Recursos" subtitle="Documentação oficial, livros, ferramentas e comunidades para continuar aprendendo" difficulty="iniciante" timeToRead="5 min">
      <p>Assembly é uma jornada de aprendizado contínuo. Aqui estão os melhores recursos para aprofundar seu conhecimento.</p>

      <h2>Documentação Oficial</h2>
      <ul>
        <li>
          <strong>Intel Software Developer's Manual</strong> — A referência definitiva do x86-64
          <br /><small>developer.intel.com/articles/intel-sdm — 5000+ páginas de detalhe técnico</small>
        </li>
        <li>
          <strong>AMD64 Architecture Programmer's Manual</strong>
          <br /><small>developer.amd.com — perspectiva AMD, bom para extensões como AVX</small>
        </li>
        <li>
          <strong>System V ABI for x86-64</strong>
          <br /><small>Documentação da calling convention Linux: gitlab.com/x86-psABIs/x86-64-ABI</small>
        </li>
        <li>
          <strong>NASM Manual</strong>
          <br /><small>nasm.us/doc — referência completa do NASM</small>
        </li>
        <li>
          <strong>ARM Architecture Reference Manual (AArch64)</strong>
          <br /><small>developer.arm.com — documentação oficial ARM</small>
        </li>
        <li>
          <strong>RISC-V ISA Specification</strong>
          <br /><small>riscv.org/technical/specifications — especificação aberta do RISC-V</small>
        </li>
      </ul>

      <h2>Livros Recomendados</h2>
      <ul>
        <li>
          <strong>"Programming from the Ground Up"</strong> — Jonathan Bartlett
          <br /><small>Gratuito online. Introdução sólida em x86 Linux.</small>
        </li>
        <li>
          <strong>"The Art of Assembly Language"</strong> — Randall Hyde
          <br /><small>Referência clássica, disponível em nostarch.com</small>
        </li>
        <li>
          <strong>"Computer Systems: A Programmer's Perspective"</strong> — Bryant & O'Hallaron
          <br /><small>CS:APP — o melhor livro para entender Assembly no contexto de sistemas</small>
        </li>
        <li>
          <strong>"Modern X86 Assembly Language Programming"</strong> — Daniel Kusswurm
          <br /><small>Foca em SSE/AVX e otimização moderna</small>
        </li>
        <li>
          <strong>"Hacking: The Art of Exploitation"</strong> — Jon Erickson
          <br /><small>Assembly para segurança e exploração</small>
        </li>
      </ul>

      <h2>Ferramentas Online</h2>
      <ul>
        <li>
          <strong>Compiler Explorer (godbolt.org)</strong> — Veja o Assembly gerado por C/C++/Rust em tempo real
        </li>
        <li>
          <strong>defuse.ca/online-x86-assembler</strong> — Assemblar e disassemblar online
        </li>
        <li>
          <strong>syscalls.mebeim.net</strong> — Tabela de syscalls Linux por arquitetura e versão do kernel
        </li>
        <li>
          <strong>uops.info</strong> — Latência e throughput de cada instrução x86 por microarquitetura
        </li>
        <li>
          <strong>Shell-storm.org</strong> — Shellcodes e recursos de segurança
        </li>
        <li>
          <strong>NASM Playground (nasm.io)</strong> — Editor e compilador NASM online
        </li>
      </ul>

      <h2>Cursos e Exercícios</h2>
      <ul>
        <li>
          <strong>crackmes.one</strong> — Desafios de engenharia reversa para praticar
        </li>
        <li>
          <strong>CTF competitions</strong> — picoCTF, pwn.college, pwnable.kr, exploit.education
        </li>
        <li>
          <strong>pwn.college</strong> — Curso gratuito de segurança com foco em Assembly
        </li>
        <li>
          <strong>CS:APP Labs</strong> — Lab de bomb, bufbomb, shelllab do livro CS:APP
        </li>
      </ul>

      <h2>Comunidades</h2>
      <ul>
        <li>
          <strong>Reddit r/asm</strong> — Comunidade de Assembly
        </li>
        <li>
          <strong>Reddit r/ReverseEngineering</strong> — Engenharia reversa
        </li>
        <li>
          <strong>Stack Overflow [assembly]</strong> — Perguntas e respostas
        </li>
        <li>
          <strong>Freenode #assembly</strong> — IRC da comunidade
        </li>
      </ul>

      <AlertBox type="success" title="Continue Praticando!">
        A melhor forma de aprender Assembly é escrevendo código. Comece com programas simples, depois analise binários existentes com GDB/radare2. Cada dia de prática traz novas descobertas sobre como o computador realmente funciona.
      </AlertBox>
    </PageContainer>
  );
}
