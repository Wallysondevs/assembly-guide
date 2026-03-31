import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";

export default function AnaliseBinarios() {
  return (
    <PageContainer title="Análise de Binários" subtitle="Radare2, Ghidra e técnicas de análise de executáveis" difficulty="avancado" timeToRead="18 min">
      <p>Análise de binários é a arte de entender um programa sem acesso ao código-fonte. É fundamental para segurança, reverse engineering e análise de malware.</p>

      <h2>Radare2 — Framework de Análise</h2>
      <CodeBlock language="bash" code={`# Instalar radare2:
sudo apt install radare2    # ou
git clone https://github.com/radareorg/radare2 && cd radare2 && ./sys/install.sh

# Abrir um binário:
r2 ./programa
r2 -A ./programa    # com análise automática

# Análise automática:
aa      # analyze all (básico)
aaa     # analyze all, more (recomendado)
aaaa    # analyze all, maximum

# Navegar funções:
afl     # list functions
pdf @main    # print disassembly function 'main'
pdf @0x401000  # print disassembly at address

# Modo visual:
VV      # entrar em modo visual (grafo de fluxo)
V       # modo visual simples
vs      # modo visual com split
q       # sair do modo visual`} />

      <h2>Comandos Radare2 Essenciais</h2>
      <CodeBlock language="bash" code={`# NAVEGAÇÃO:
s 0x401000    # seek (ir) para endereço
s main        # ir para função main
s @sym.funcao # ir para símbolo

# INFORMAÇÕES:
ii    # imports
ie    # entrypoints
iS    # sections
iz    # strings
iE    # exports

# ANÁLISE:
pd 20         # print disassembly (20 instruções)
pdi           # print disassembly (toda função)
pdf           # print disassembly function
pdg           # generate C (Ghidra style)

# MEMÓRIA:
px 64 @0x601000    # hexdump 64 bytes
ps @str.hello      # print string
pxr 32 @ rsp       # hexdump+resolve da stack

# BUSCA:
/ string      # buscar string
/R pop rdi    # buscar gadget ROP
/x DEADBEEF   # buscar bytes

# RENOMEAR/COMENTAR:
afn minha_funcao @0x401100  # renomear função
CC "Este é o main" @0x401000  # adicionar comentário`} />

      <h2>Ghidra — Decompilador da NSA</h2>
      <CodeBlock language="bash" code={`# Instalar Ghidra:
# 1. Baixar de https://ghidra-sre.org
# 2. Extrair: unzip ghidra_*.zip
# 3. Executar: ./ghidraRun

# Ghidra destaque:
# - Decompilador C automático (muito útil!)
# - Análise estática profunda
# - Suporte a múltiplas arquiteturas (x86, ARM, MIPS, PPC, ...)
# - Scripting em Java e Python
# - Open source (diferente do IDA Pro)`} />

      <h2>Workflow de Análise</h2>
      <CodeBlock language="bash" filename="analise.sh" code={`#!/bin/bash
# Análise rápida de binário desconhecido

PROG=$1
echo "=== INFORMAÇÕES BÁSICAS ==="
file $PROG
ls -la $PROG

echo -e "\n=== TIPO DE BINÁRIO ==="
readelf -h $PROG 2>/dev/null | grep -E "Type:|Machine:|Endian"

echo -e "\n=== PROTEÇÕES ==="
checksec --file=$PROG 2>/dev/null || python3 -c "
import subprocess
result = subprocess.run(['readelf', '-S', '$PROG'], capture_output=True, text=True)
print(result.stdout)
"

echo -e "\n=== STRINGS INTERESSANTES ==="
strings $PROG | grep -iE "(password|key|secret|flag|token|admin|root|exec|system|http)" | head -20

echo -e "\n=== IMPORTS ==="
nm -D $PROG 2>/dev/null | grep -E "^[[:space:]]+U " | awk '{print $3}' | head -30

echo -e "\n=== PONTOS DE ENTRADA ==="
readelf -s $PROG 2>/dev/null | grep -E "(main|_start|init|fini)"

echo -e "\n=== SYSCALLS (via strace) ==="
strace -c ./$PROG 2>&1 | tail -20`} />

      <h2>Checksec — Verificar Proteções</h2>
      <CodeBlock language="bash" code={`# checksec verifica proteções de segurança do binário:
checksec --file=./programa

# Saída típica:
# RELRO           STACK CANARY      NX            PIE
# Full RELRO      Canary found      NX enabled    PIE enabled

# Proteções:
# RELRO:     Relocation Read-Only (GOT somente leitura após relocação)
# Canary:    Stack canary (proteção contra stack overflow)
# NX:        No-Execute (stack/heap não executável)
# PIE:       Position Independent Executable (ASLR completo)
# FORTIFY:   Funções da libc com proteção extra`} />

      <h2>Análise Dinâmica vs Estática</h2>
      <CodeBlock language="bash" code={`# ESTÁTICA — analisa sem executar (seguro):
# - objdump, readelf, nm, strings
# - radare2, ghidra, IDA Pro
# - Bom para: entender estrutura, encontrar funções

# DINÂMICA — executa e observa:
# - GDB, strace, ltrace
# - Intel PIN (instrumentação binária)
# - Bom para: ver comportamento real, argumentos de syscall

# Ambiente SEGURO para malware:
# - VM (VirtualBox/KVM) isolada
# - Sem rede (ou rede monitorada)
# - Snapshot antes de executar
# - Ferramentas: Cuckoo Sandbox, Any.run`} />
    </PageContainer>
  );
}
