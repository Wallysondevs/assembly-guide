import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";

export default function GDBAvancado() {
  return (
    <PageContainer title="GDB Avançado" subtitle="Scripts, watchpoints, reversible debugging e técnicas avançadas" difficulty="avancado" timeToRead="15 min">
      <p>Além dos comandos básicos, o GDB tem recursos poderosos para automação, análise de memória e debugging de problemas complexos em Assembly.</p>

      <h2>Scripts GDB (.gdbinit)</h2>
      <CodeBlock language="bash" filename=".gdbinit" code={`# ~/.gdbinit — configuração automática do GDB

# Usar sintaxe Intel (SEMPRE!)
set disassembly-flavor intel

# Histórico de comandos
set history save on
set history size 1000

# Quebrar automaticamente em _start e main
# break _start
# run

# Hook: executar após cada step/nexti
define hook-stop
    context
end

# Mostrar instruções automaticamente:
# layout asm

# pwndbg/gef/peda — ferramentas de segurança:
# source /path/to/pwndbg/gdbinit.py`} />

      <h2>Comandos Python no GDB</h2>
      <CodeBlock language="python" filename="gdb_script.py" code={`# GDB tem interpretador Python embutido!
# Execute com: gdb -x script.py ./programa

import gdb

class AnalyzeStack(gdb.Command):
    """Analisa a stack frame atual"""
    def __init__(self):
        super().__init__("analyze-stack", gdb.COMMAND_DATA)
    
    def invoke(self, arg, from_tty):
        frame = gdb.selected_frame()
        rsp = int(gdb.parse_and_eval("$rsp"))
        rbp = int(gdb.parse_and_eval("$rbp"))
        
        print(f"RSP: 0x{rsp:016x}")
        print(f"RBP: 0x{rbp:016x}")
        print(f"Frame size: {rbp - rsp} bytes")
        
        # Listar variáveis locais
        try:
            block = frame.block()
            for sym in block:
                if sym.is_variable:
                    val = frame.read_var(sym.name)
                    print(f"  {sym.name} = {val}")
        except Exception as e:
            print(f"  Sem informação de variáveis: {e}")

AnalyzeStack()

# Breakpoint que executa ação customizada:
class MyBreakpoint(gdb.Breakpoint):
    def stop(self):
        rax = int(gdb.parse_and_eval("$rax"))
        print(f"[*] rax = 0x{rax:x}")
        return False  # False = não parar, continuar execução

MyBreakpoint("*0x401000")`} />

      <h2>Reversible Debugging</h2>
      <CodeBlock language="bash" code={`# GDB suporta debugging reverso (voltar no tempo!):

# Iniciar gravação:
(gdb) target record-full
(gdb) run

# Agora pode voltar no tempo:
(gdb) reverse-continue    # executa em reverso até breakpoint
(gdb) reverse-step        # desfaz último step
(gdb) reverse-stepi       # desfaz última instrução
(gdb) reverse-next        # desfaz último next
(gdb) reverse-finish      # desfaz até antes do call atual

# Ver histórico de execução:
(gdb) info record

# AVISO: muito mais lento que execução normal (10-100×)
# Útil para encontrar onde um bug ocorreu`} />

      <h2>Watchpoints e Catchpoints</h2>
      <CodeBlock language="bash" code={`# Watchpoint — para quando valor muda:
(gdb) watch rax             # para quando rax muda
(gdb) watch *0x601000       # para quando memória em 0x601000 muda
(gdb) watch -l variavel     # watch de variável local
(gdb) rwatch rax            # para quando rax é LIDO
(gdb) awatch rax            # para quando rax é lido OU escrito

# Catchpoints — interceptar eventos:
(gdb) catch syscall write   # para em toda chamada a write()
(gdb) catch syscall 1       # para na syscall número 1
(gdb) catch signal SIGSEGV  # para em segfault
(gdb) catch throw           # C++: para quando exception é lançada
(gdb) catch fork            # para quando processo faz fork`} />

      <h2>Análise de Memória</h2>
      <CodeBlock language="bash" code={`# Buscar padrão na memória:
(gdb) find 0x400000, 0x500000, "Hello"   # busca string
(gdb) find /4 0x400000, 0x500000, 0xDEADBEEF  # busca dword

# Dump de memória em diferentes formatos:
(gdb) x/100xb 0x601000    # 100 bytes em hex
(gdb) x/50xh  0x601000    # 50 half-words (16-bit)
(gdb) x/20xw  0x601000    # 20 words (32-bit)
(gdb) x/10xg  0x601000    # 10 giant words (64-bit)
(gdb) x/50i   _start      # 50 instruções
(gdb) x/100bc 0x601000    # bytes como chars

# Mapas de memória do processo:
(gdb) info proc mappings  # todas as regiões de memória
(gdb) maintenance info sections  # seções ELF

# Dump para arquivo:
(gdb) dump binary memory saida.bin 0x400000 0x401000`} />

      <h2>Debugging com Símbolos Externos</h2>
      <CodeBlock language="bash" code={`# Adicionar símbolos de biblioteca:
(gdb) add-symbol-file lib.so 0x7f0000000000  # endereço base

# Debugging de shared library:
(gdb) set solib-search-path /caminho/para/libs
(gdb) set auto-solib-add on

# Debugging sem símbolos (binário stripped):
(gdb) x/20i $rip           # ver instruções atuais
(gdb) set $pc = 0x401234   # modificar RIP (ir para endereço)
(gdb) set $rax = 42        # modificar registrador`} />
    </PageContainer>
  );
}
