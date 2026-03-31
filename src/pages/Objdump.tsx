import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Objdump() {
  return (
    <PageContainer title="objdump, readelf & nm" subtitle="Analisando binários sem código fonte" difficulty="intermediario" timeToRead="15 min">
      <p>Estas ferramentas fazem parte do pacote <strong>binutils</strong> e são essenciais para analisar binários ELF (Executable and Linkable Format), que é o formato padrão de executáveis no Linux.</p>

      <h2>objdump — Desmontar e Inspecionar</h2>
      <CodeBlock language="bash" code={`# Desmontar código executável:
objdump -d programa           # desassembla seções de código
objdump -D programa           # desassembla TUDO (incluindo .data)
objdump -M intel -d programa  # usa sintaxe Intel
objdump -S programa           # mistura código C com assembly (precisa de -g)

# Ver seções:
objdump -h programa           # headers das seções
objdump -t programa           # tabela de símbolos (symbol table)

# Formato mais completo:
objdump -M intel -d -j .text programa  # só seção .text em sintaxe Intel`} />

      <h3>Exemplo de Saída do objdump</h3>
      <CodeBlock language="bash" code={`$ objdump -M intel -d hello

hello:     file format elf64-x86-64

Disassembly of section .text:

0000000000401000 <_start>:
  401000:   b8 01 00 00 00          mov    eax,0x1
  401005:   bf 01 00 00 00          mov    edi,0x1
  40100a:   48 be 00 20 40 00 00    movabs rsi,0x402000
  401011:   00 00 00
  401014:   ba 0e 00 00 00          mov    edx,0xe
  401019:   0f 05                   syscall
  40101b:   b8 3c 00 00 00          mov    eax,0x3c
  401020:   31 ff                   xor    edi,edi
  401022:   0f 05                   syscall`} />

      <h2>readelf — Informações do Formato ELF</h2>
      <CodeBlock language="bash" code={`# ELF header:
readelf -h programa     # cabeçalho ELF (tipo, arch, entry point...)

# Seções:
readelf -S programa     # todas as seções com tamanhos/endereços
readelf -s programa     # tabela de símbolos
readelf -d programa     # dynamic section (bibliotecas importadas)

# Program headers (segmentos):
readelf -l programa     # como o arquivo é carregado na memória

# Relocations:
readelf -r programa     # tabela de relocações

# Tudo de uma vez:
readelf -a programa`} />

      <h3>Exemplo de Saída do readelf -S</h3>
      <CodeBlock language="bash" code={`$ readelf -S hello
There are 4 section headers, starting at offset 0x30b8:

Section Headers:
  [Nr] Name    Type      Address          Off    Size   ES Flg
  [ 0]         NULL      0000000000000000 000000 000000 00
  [ 1] .text   PROGBITS  0000000000401000 001000 000024 00  AX
  [ 2] .data   PROGBITS  0000000000402000 002000 00000e 00   WA
  [ 3] .shstrtab STRTAB  0000000000000000 00200e 00001a 00`} />

      <h2>nm — Tabela de Símbolos</h2>
      <CodeBlock language="bash" code={`# Ver símbolos de um binário ou .o:
nm programa               # todos os símbolos
nm -D programa            # símbolos dinâmicos (bibliotecas compartilhadas)
nm -u programa            # símbolos indefinidos (externos)
nm -n programa            # ordenados por endereço
nm programa.o             # símbolos de um objeto .o

# Tipos de símbolos:
# T — código (.text)    t — código (local)
# D — dado (.data)      d — dado (local)
# B — BSS               b — BSS (local)
# U — undefined         W — weak symbol

$ nm hello
0000000000402000 D mensagem
0000000000401000 T _start`} />

      <h2>strings — Extrair Strings de Binários</h2>
      <CodeBlock language="bash" code={`# Extrair todas as strings de um binário:
strings programa

# Strings com endereços:
strings -o programa
strings -t x programa    # offset em hex
strings -t d programa    # offset em decimal

# Comprimento mínimo (padrão é 4):
strings -n 6 programa    # strings de no mínimo 6 chars

# Muito útil para análise de malware!
strings malware.exe | grep -i password
strings malware.exe | grep -i http`} />

      <h2>size — Tamanhos das Seções</h2>
      <CodeBlock language="bash" code={`$ size hello
   text    data     bss     dec     hex filename
     36      14       0      50      32 hello

# text = código executável
# data = dados inicializados
# bss  = dados não inicializados (espaço reservado, não ocupa no arquivo)
# dec  = total em decimal
# hex  = total em hexadecimal`} />

      <h2>xxd / hexdump — Visualização Hexadecimal</h2>
      <CodeBlock language="bash" code={`# Ver bytes brutos do binário:
xxd programa | head -20
hexdump -C programa | head -20

# Exemplo de saída xxd:
# 00000000: 7f45 4c46 0201 0100 0000 0000 0000 0000  .ELF............
# 00000010: 0200 3e00 0100 0000 0010 4000 0000 0000  ..>.......@.....

# 7f 45 4c 46 = magic bytes do ELF (.ELF em ASCII)
# 02 = 64-bit
# 01 = little-endian
# 3e 00 = x86-64 (0x3E = 62)

# Extrair trecho específico:
dd if=programa bs=1 skip=16 count=16 | xxd`} />

      <h2>strace — Rastrear System Calls</h2>
      <AlertBox type="info" title="strace">
        strace mostra todas as system calls que um programa faz — essencial para entender como programas Assembly interagem com o OS.
      </AlertBox>
      <CodeBlock language="bash" code={`# Rastrear syscalls:
strace ./programa

# Exemplo de saída:
# execve("./hello", ["./hello"], 0x7fff.../envp)  = 0
# write(1, "Hello, World!\n", 14)                 = 14
# exit_group(0)                                   = ?

# Mostrar com timestamps:
strace -t ./programa          # hora absoluta
strace -r ./programa          # tempo relativo entre chamadas
strace -T ./programa          # tempo gasto em cada syscall

# Filtrar por syscall específica:
strace -e trace=write,read ./programa
strace -e trace=mmap,brk ./programa   # chamadas de memória

# Contar syscalls:
strace -c ./programa`} />

      <h2>Workflow Típico de Análise</h2>
      <CodeBlock language="bash" filename="analise.sh" code={`#!/bin/bash
# Script de análise rápida de binário

PROG=$1

echo "=== ELF Header ==="
readelf -h $PROG | grep -E "Type:|Machine:|Entry point:"

echo -e "\n=== Seções ==="
readelf -S $PROG | grep -E "\.text|\.data|\.bss|\.rodata"

echo -e "\n=== Símbolos ==="
nm $PROG 2>/dev/null | head -20

echo -e "\n=== Strings interessantes ==="
strings $PROG | grep -v "^[[:space:]]*$" | head -30

echo -e "\n=== Disassembly ==="
objdump -M intel -d $PROG | head -50`} />
    </PageContainer>
  );
}
