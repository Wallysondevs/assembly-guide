import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Strace() {
  return (
    <PageContainer title="strace e ltrace" subtitle="Rastreando system calls e chamadas de biblioteca em tempo real" difficulty="intermediario" timeToRead="12 min">
      <p><strong>strace</strong> rastreia todas as system calls de um processo. <strong>ltrace</strong> rastreia chamadas a bibliotecas compartilhadas. Ambas são ferramentas essenciais para entender o comportamento de programas em tempo de execução.</p>

      <h2>strace — System Call Tracer</h2>
      <h3>Uso Básico</h3>
      <CodeBlock language="bash" code={`# Rastrear um programa:
strace ./programa

# Rastrear um processo em execução:
strace -p 12345     # 12345 = PID do processo

# Rastrear processo e todos os filhos:
strace -f ./programa

# Saída para arquivo:
strace -o trace.txt ./programa`} />

      <h3>Opções Úteis</h3>
      <CodeBlock language="bash" code={`# Mostrar tempo:
strace -t  ./prog    # hora de cada chamada
strace -tt ./prog    # com microsegundos
strace -T  ./prog    # tempo gasto em cada chamada

# Filtros:
strace -e trace=write,read,open,close ./prog  # só essas syscalls
strace -e trace=network ./prog                 # todas de rede
strace -e trace=file ./prog                    # todas de arquivo
strace -e trace=process ./prog                 # fork, exec, wait
strace -e trace=memory ./prog                  # mmap, brk, etc.
strace -e trace=signal ./prog                  # sinais

# Resumo estatístico:
strace -c ./prog    # conta tempo e chamadas por syscall`} />

      <h3>Exemplo Real: Programa Hello World</h3>
      <CodeBlock language="bash" code={`$ strace ./hello
execve("./hello", ["./hello"], 0x7fff5... /* 24 vars */) = 0
write(1, "Hello, World!\n", 14)         = 14
exit_group(0)                           = ?
+++ exited with 0 +++`} />
      <p>Simples! Apenas 2 syscalls: <code>write</code> para imprimir e <code>exit_group</code> para sair.</p>

      <h3>Exemplo Real: ls</h3>
      <CodeBlock language="bash" code={`$ strace -c ls /tmp
...
% time     seconds  usecs/call     calls    errors syscall
------ ----------- ----------- --------- --------- ----------------
 35.12    0.000342          13        26           mmap
 18.44    0.000180          45         4           write
 12.89    0.000126          12        10           openat
  9.77    0.000095          11         8           read
  7.38    0.000072           9         8           close
  ...`} />

      <h2>Tabela de Syscalls Importantes (Linux x86-64)</h2>
      <table>
        <thead><tr><th>Número</th><th>Nome</th><th>Descrição</th><th>Args</th></tr></thead>
        <tbody>
          {[
            ["0","read","Ler de fd","fd, buf, count"],
            ["1","write","Escrever em fd","fd, buf, count"],
            ["2","open","Abrir arquivo","path, flags, mode"],
            ["3","close","Fechar fd","fd"],
            ["4","stat","Info de arquivo","path, statbuf"],
            ["8","lseek","Posicionar fd","fd, offset, whence"],
            ["9","mmap","Mapear memória","addr, len, prot, flags, fd, off"],
            ["11","munmap","Liberar mmap","addr, len"],
            ["12","brk","Alterar heap","addr"],
            ["22","pipe","Criar pipe","pipefd"],
            ["32","dup","Duplicar fd","fd"],
            ["39","getpid","Obter PID",""],
            ["57","fork","Fork processo",""],
            ["59","execve","Executar programa","path, argv, envp"],
            ["60","exit","Terminar processo","status"],
            ["61","wait4","Esperar filho","pid, wstatus, opts, rusage"],
            ["231","exit_group","Terminar grupo","status"],
          ].map(([n,name,desc,args]) => (
            <tr key={n}><td><code>{n}</code></td><td><code>{name}</code></td><td>{desc}</td><td><code>{args}</code></td></tr>
          ))}
        </tbody>
      </table>

      <h2>ltrace — Library Call Tracer</h2>
      <AlertBox type="info" title="ltrace vs strace">
        strace = syscalls do kernel. ltrace = chamadas a bibliotecas compartilhadas (printf, malloc, strcmp, etc.). Complementares!
      </AlertBox>
      <CodeBlock language="bash" code={`# Instalar ltrace:
sudo apt install ltrace

# Rastrear chamadas de biblioteca:
ltrace ./programa_com_libc

# Exemplo de saída:
# printf("Hello, %s!\n", "World")        = 13
# malloc(100)                            = 0x55d8a1234260
# free(0x55d8a1234260)                   = <void>
# __libc_start_main(0x401136, 1, ...)    = 0

# Combinar com strace:
strace -e trace=\!mmap,mprotect ./prog   # excluir mmap e mprotect`} />

      <h2>Análise de Programa Desconhecido</h2>
      <CodeBlock language="bash" filename="investigar.sh" code={`#!/bin/bash
# Investigar comportamento de um programa misterioso

PROG=$1
echo "=== STRINGS ==="
strings $PROG | grep -E "(http|password|key|secret|flag)" 2>/dev/null

echo -e "\n=== SYSCALLS (resumo) ==="
strace -c $PROG 2>&1 | head -20

echo -e "\n=== ARQUIVOS ACESSADOS ==="
strace -e trace=openat,open $PROG 2>&1 | grep "openat\|open"

echo -e "\n=== CONEXÕES DE REDE ==="
strace -e trace=connect,socket $PROG 2>&1 | grep -E "connect|socket"

echo -e "\n=== PROCESSOS CRIADOS ==="
strace -e trace=fork,clone,execve $PROG 2>&1 | grep -E "fork|clone|execve"`} />

      <h2>Usando strace para Aprender Syscalls</h2>
      <CodeBlock language="bash" code={`# Ver o que 'ls' faz para listar arquivos:
strace ls /tmp 2>&1 | grep -E "openat|getdents|readdir"

# Ver o que 'cat' faz para ler um arquivo:
strace cat /etc/hostname 2>&1

# Entender alocação de memória:
strace -e trace=mmap,brk,munmap python3 -c "x = [0]*1000000" 2>&1 | head -20`} />
    </PageContainer>
  );
}
