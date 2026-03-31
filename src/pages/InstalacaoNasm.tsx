import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function InstalacaoNasm() {
  return (
    <PageContainer title="Instalando NASM" subtitle="Configure seu ambiente de desenvolvimento Assembly no Linux" difficulty="iniciante" timeToRead="10 min">
      <p><strong>NASM</strong> (Netwide Assembler) é o assembler mais popular para x86/x86-64 no Linux. Usa a sintaxe Intel, que é mais legível e preferida pela maioria dos programadores.</p>

      <h2>Instalação no Linux</h2>
      <h3>Ubuntu / Debian</h3>
      <CodeBlock language="bash" filename="install.sh" code={`sudo apt update
sudo apt install nasm build-essential gdb -y

# Verificar instalação:
nasm --version
# NASM version 2.16.01 compiled on Dec 21 2022`} />

      <h3>Arch Linux</h3>
      <CodeBlock language="bash" code={`sudo pacman -S nasm base-devel gdb`} />

      <h3>Fedora / RHEL</h3>
      <CodeBlock language="bash" code={`sudo dnf install nasm gcc gdb`} />

      <h2>Instalação no Windows</h2>
      <CodeBlock language="bash" code={`# Via Chocolatey:
choco install nasm

# Ou baixar o instalador em: https://www.nasm.us/pub/nasm/releasebuilds/
# Adicionar ao PATH: C:\\Program Files\\NASM`} />

      <h2>Instalação no macOS</h2>
      <CodeBlock language="bash" code={`# Via Homebrew:
brew install nasm

# Verificar versão:
nasm --version`} />

      <h2>Ferramentas Adicionais Necessárias</h2>
      <CodeBlock language="bash" filename="tools.sh" code={`# Linker (geralmente já vem com o sistema):
sudo apt install binutils    # inclui ld, objdump, nm, readelf

# GDB — debugger essencial
sudo apt install gdb

# GDB com interface melhorada (opcional mas recomendado):
pip install pwndbg
# ou
sudo apt install gdb-pwndbg  # se disponível

# Alternativas ao NASM:
# GAS (GNU Assembler) — já vem com gcc
which as    # verifica se está disponível

# Utilitários de análise de binários:
sudo apt install binutils ltrace strace`} />

      <h2>Estrutura de um Programa NASM</h2>
      <p>Todo programa NASM em Linux tem esta estrutura básica:</p>
      <CodeBlock language="nasm" filename="template.asm" code={`; Comentários com ponto-e-vírgula
; Seção .data: dados inicializados (constantes, strings)
section .data
    mensagem db "Olá, Mundo!", 10, 0    ; string + newline + null
    tam_msg  equ $ - mensagem           ; tamanho da string

; Seção .bss: dados não inicializados (variáveis)
section .bss
    buffer resb 64    ; reserva 64 bytes

; Seção .text: código executável
section .text
    global _start     ; exporta _start para o linker

_start:
    ; Seu código aqui
    
    ; Saída: exit(0)
    mov rax, 60       ; syscall: sys_exit
    xor rdi, rdi      ; exit code: 0
    syscall`} />

      <h2>Compilando e Executando</h2>
      <CodeBlock language="bash" filename="build.sh" code={`# Passo 1: Assemblar (converte .asm → .o)
nasm -f elf64 programa.asm -o programa.o

# Opções do NASM:
# -f elf64  → formato ELF 64-bit (Linux x86-64)
# -f elf32  → ELF 32-bit
# -f macho64 → macOS 64-bit
# -f win64  → Windows 64-bit (PE format)
# -g        → inclui informações de debug
# -l lista.txt → gera listagem assembly

# Passo 2: Linkar (converte .o → executável)
ld programa.o -o programa

# Para programas que usam libc:
ld programa.o -o programa -lc -dynamic-linker /lib64/ld-linux-x86-64.so.2

# Passo 3: Executar
./programa
echo $?   # imprime o código de saída`} />

      <h2>Makefile para Assembly</h2>
      <CodeBlock language="makefile" filename="Makefile" code={`# Makefile para projetos Assembly
ASM = nasm
ASMFLAGS = -f elf64 -g
LD = ld

SRCS = $(wildcard *.asm)
OBJS = $(SRCS:.asm=.o)
BINS = $(SRCS:.asm=)

all: $(BINS)

%.o: %.asm
	$(ASM) $(ASMFLAGS) $< -o $@

%: %.o
	$(LD) $< -o $@

clean:
	rm -f $(OBJS) $(BINS)

.PHONY: all clean`} />

      <h2>Editor de Código Recomendado</h2>
      <AlertBox type="info" title="VS Code + NASM">
        Instale a extensão "NASM" no VS Code para syntax highlighting. Para terminal, neovim com o plugin "vim-nasm" ou Emacs com "asm-mode" funcionam muito bem.
      </AlertBox>
      <CodeBlock language="bash" code={`# VS Code (interface gráfica):
code .    # abre VS Code no diretório atual
# Instale: "NASM x86 Assembly Language Support"

# Configuração do .editorconfig para Assembly:
# indent_size = 4
# indent_style = space`} />

      <h2>Verificando a Instalação</h2>
      <CodeBlock language="bash" filename="check.sh" code={`# Verificar todas as ferramentas:
echo "=== Versões ==="
nasm --version
ld --version | head -1
gdb --version | head -1
objdump --version | head -1

# Testar com um programa mínimo:
cat > test.asm << 'EOF'
section .text
    global _start
_start:
    mov rax, 60
    xor rdi, rdi
    syscall
EOF

nasm -f elf64 test.asm -o test.o && ld test.o -o test && ./test
echo "Exit code: $?   (deve ser 0)"
rm -f test test.o test.asm`} />

      <AlertBox type="success" title="Próximo passo">
        Com o ambiente configurado, vá para o capítulo <strong>Hello World</strong> para escrever seu primeiro programa Assembly funcional!
      </AlertBox>
    </PageContainer>
  );
}
