import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function GDB() {
  return (
    <PageContainer title="GDB — Debugging Assembly" subtitle="Use o GNU Debugger para inspecionar registradores, memória e executar passo a passo" difficulty="intermediario" timeToRead="20 min">
      <p>O GDB (GNU Debugger) é sua ferramenta mais importante para entender Assembly. Ele permite pausar a execução, inspecionar registradores e memória, e executar instrução por instrução.</p>

      <h2>Compilando com Informações de Debug</h2>
      <CodeBlock language="bash" code={`# Sempre compilar com -g para debug!
nasm -f elf64 -g -F dwarf programa.asm -o programa.o
ld programa.o -o programa

# -g: inclui informações de debug
# -F dwarf: formato de debug DWARF (padrão Linux)`} />

      <h2>Iniciando o GDB</h2>
      <CodeBlock language="bash" code={`# Carregar programa no GDB:
gdb ./programa

# Direto com breakpoint no _start:
gdb -ex 'break _start' -ex 'run' ./programa

# Com pwndbg instalado (interface melhorada):
gdb ./programa    # pwndbg ativa automaticamente`} />

      <h2>Comandos Essenciais do GDB</h2>
      <CodeBlock language="bash" filename="gdb_comandos.txt" code={`# === CONTROLE DE EXECUÇÃO ===
run (r)              # executa o programa
run arg1 arg2        # executa com argumentos
continue (c)         # continua até próximo breakpoint
step (s)             # executa próxima linha (entra em funções)
next (n)             # executa próxima linha (não entra em funções)
stepi (si)           # executa próxima INSTRUÇÃO (essencial para Assembly!)
nexti (ni)           # próxima instrução sem entrar em calls
finish               # executa até sair da função atual
kill                 # mata o processo
quit (q)             # sai do GDB

# === BREAKPOINTS ===
break _start         # breakpoint no label _start
break *0x401000      # breakpoint em endereço específico
break *(_start + 10) # breakpoint relativo ao label
info breakpoints     # lista breakpoints
delete 1             # apaga breakpoint 1
disable 1            # desabilita breakpoint 1
enable 1             # habilita breakpoint 1
watch rax            # watchpoint: para quando rax mudar
watch *0x601000      # watchpoint em endereço de memória`} />

      <h2>Inspecionando Registradores</h2>
      <CodeBlock language="bash" filename="gdb_regs.txt" code={`# Ver todos os registradores:
info registers (i r)

# Registradores específicos:
info registers rax rbx rcx
print $rax          # imprime valor de rax
p/x $rax            # imprime em hexadecimal
p/d $rax            # imprime em decimal
p/b $rax            # imprime em binário
p/c $rax            # interpreta como char

# Registradores especiais:
info registers rip   # Instruction Pointer
info registers rsp   # Stack Pointer
info registers rbp   # Base Pointer
info registers eflags  # FLAGS register

# Ver todos de uma vez:
info all-registers`} />

      <h2>Inspecionando Memória</h2>
      <CodeBlock language="bash" filename="gdb_mem.txt" code={`# Sintaxe: x/<count><format><size> <address>
# format: x=hex, d=decimal, s=string, i=instructions, b=binary, c=char
# size:   b=byte, h=halfword(2), w=word(4), g=giant(8)

x/1gx $rsp          # 1 qword em hex no topo da stack
x/8gx $rsp          # 8 qwords em hex (top of stack)
x/4xb $rax          # 4 bytes em hex no endereço rax
x/s $rsi            # string no endereço rsi
x/20i $rip          # próximas 20 instruções (desmonta)
x/1i $rip           # próxima instrução

# Exemplos práticos:
x/s 0x402000        # string no endereço 0x402000
x/20gx $rsp         # 20 qwords da stack
x/10i _start        # 10 instruções a partir de _start`} />

      <h2>Disassembly no GDB</h2>
      <CodeBlock language="bash" filename="gdb_disasm.txt" code={`# Desmontar a função atual:
disassemble (disas)

# Desmontar função específica:
disassemble _start
disassemble main

# Desmontar um range de endereços:
disassemble 0x401000, 0x401050

# Mostrar código e instruções misturados:
disassemble /m _start

# Configurar flavor de sintaxe:
set disassembly-flavor intel    # usar sintaxe Intel!
set disassembly-flavor att      # usar sintaxe AT&T (padrão)

# Dica: adicionar ao ~/.gdbinit:
echo "set disassembly-flavor intel" >> ~/.gdbinit`} />

      <h2>Layout TUI — Interface Visual</h2>
      <CodeBlock language="bash" code={`# Ativar modo TUI (Text User Interface):
layout asm      # mostra código Assembly
layout regs     # mostra registradores
layout src      # mostra código fonte (se disponível)
layout split    # mostra asm + regs

# Navegar no TUI:
# Ctrl+L  → redesenhar a tela
# Ctrl+X 2 → alternar layouts
# focus cmd → focar no painel de comandos
# focus regs → focar nos registradores`} />

      <h2>Sessão Prática Completa</h2>
      <CodeBlock language="bash" filename="sessao.txt" code={`$ gdb ./hello

(gdb) set disassembly-flavor intel
(gdb) break _start
Breakpoint 1 at 0x401000

(gdb) run
Starting program: ./hello
Breakpoint 1, 0x0000000000401000 in _start ()

(gdb) disassemble _start
Dump of assembler code for function _start:
=> 0x0000000000401000 <+0>:   mov    eax,0x1
   0x0000000000401005 <+5>:   mov    edi,0x1
   0x000000000040100a <+10>:  movabs rsi,0x402000
   0x0000000000401014 <+20>:  mov    edx,0xe
   0x0000000000401019 <+25>:  syscall
   0x000000000040101b <+27>:  mov    eax,0x3c
   0x0000000000401020 <+32>:  xor    edi,edi
   0x0000000000401022 <+34>:  syscall

(gdb) stepi    # executa: mov eax, 1
(gdb) info registers rax
rax    0x1    1

(gdb) stepi    # executa: mov edi, 1
(gdb) stepi    # executa: movabs rsi, 0x402000
(gdb) x/s $rsi
0x402000:   "Hello, World!\n"

(gdb) stepi    # executa: mov edx, 14
(gdb) stepi    # executa: syscall (write)
Hello, World!  ← aparece no terminal!

(gdb) continue
[Inferior 1 (process 12345) exited normally]`} />

      <h2>pwndbg — GDB Melhorado</h2>
      <AlertBox type="info" title="Instalar pwndbg">
        pwndbg adiciona visualização automática de registradores, stack e código Assembly toda vez que o programa para. Altamente recomendado para Assembly e segurança.
      </AlertBox>
      <CodeBlock language="bash" code={`# Instalação:
git clone https://github.com/pwndbg/pwndbg
cd pwndbg
./setup.sh

# Com pwndbg, a cada parada você vê automaticamente:
# - Todos os registradores com highlighting
# - Próximas instruções Assembly
# - Topo da stack
# - Código fonte (se disponível)`} />

      <h2>Comandos pwndbg Extras</h2>
      <CodeBlock language="bash" code={`# Após instalar pwndbg:
context          # mostra contexto completo (regs + asm + stack)
telescope $rsp   # inspeciona stack com informações extras
stack 20         # top 20 valores da stack
regs             # todos os registradores formatados
nearpc 20        # próximas 20 instruções
vmmap            # mapa de memória virtual do processo
checksec         # verifica proteções de segurança do binário`} />
    </PageContainer>
  );
}
