import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function StringsArrays() {
  return (
    <PageContainer title="Strings e Arrays" subtitle="Manipulação de sequências de dados em Assembly" difficulty="intermediario" timeToRead="18 min">
      <p>Strings em Assembly são arrays de bytes terminados por null (\0). Arrays são blocos contíguos de memória. Ambos são fundamentais para qualquer programa real.</p>

      <h2>Strings — Representação na Memória</h2>
      <CodeBlock language="nasm" filename="strings.asm" code={`section .data
    str1  db "Hello", 10, 0     ; "Hello\n\0" — 7 bytes
    str2  db 'A', 'B', 'C', 0   ; "ABC\0" — 4 bytes
    str3  db 0x48, 0x65, 0x6C, 0x6C, 0x6F, 0  ; "Hello\0" em hex

    ; String vazia:
    empty db 0                  ; só o null terminator

    ; String sem null (cuidado! sem terminador):
    raw   db "sem null"         ; para uso com tamanho explícito`} />

      <h2>Calcular Comprimento de String (strlen)</h2>
      <CodeBlock language="nasm" filename="strlen.asm" code={`; strlen: retorna comprimento de string em RAX
; Argumento: RDI = ponteiro para string
strlen:
    ; Método 1: loop simples
    xor rcx, rcx            ; rcx = comprimento = 0
.loop:
    cmp byte [rdi + rcx], 0 ; encontrou null?
    je  .fim
    inc rcx
    jmp .loop
.fim:
    mov rax, rcx
    ret

; Método 2: SCASB (mais idiomático)
strlen_scasb:
    push rdi
    xor al, al              ; al = 0 (procurar null)
    mov rcx, -1             ; contador "infinito"
    repne scasb             ; busca byte por byte até encontrar 0
    not rcx                 ; rcx = comprimento + 1
    dec rcx                 ; rcx = comprimento (sem o null)
    mov rax, rcx
    pop rdi
    ret`} />

      <h2>Copiar String (strcpy)</h2>
      <CodeBlock language="nasm" filename="strcpy.asm" code={`; strcpy: copia string de RSI para RDI
; Argumento: RDI = destino, RSI = origem
strcpy:
.loop:
    mov al, [rsi]           ; al = *origem
    mov [rdi], al           ; *destino = al
    test al, al             ; al é null?
    je  .fim
    inc rdi                 ; avança destino
    inc rsi                 ; avança origem
    jmp .loop
.fim:
    ret

; Versão otimizada com MOVS:
strcpy_rapido:
    push rsi
    push rdi
    ; Copiar incluindo o null terminator
    ; Primeiro descobrir o comprimento:
    mov rdi, rsi
    xor al, al
    mov rcx, -1
    repne scasb
    not rcx                 ; rcx = len + 1 (incluindo null)
    pop rdi
    ; rsi ainda aponta para origem
    rep movsb               ; copia rcx bytes
    pop rsi
    ret`} />

      <h2>Comparar Strings (strcmp)</h2>
      <CodeBlock language="nasm" filename="strcmp.asm" code={`; strcmp: compara RDI e RSI
; Retorno: 0 se iguais, <0 se RDI < RSI, >0 se RDI > RSI
strcmp:
.loop:
    mov al, [rdi]
    mov bl, [rsi]
    cmp al, bl
    jne .diferente
    test al, al             ; ambos chegaram no null?
    je  .igual
    inc rdi
    inc rsi
    jmp .loop
.igual:
    xor eax, eax            ; return 0
    ret
.diferente:
    movsx eax, al           ; sign-extend para 32-bit
    movsx ebx, bl
    sub eax, ebx            ; return a - b (>0 ou <0)
    ret`} />

      <h2>Arrays — Acesso por Índice</h2>
      <CodeBlock language="nasm" filename="arrays.asm" code={`section .data
    ; Array de inteiros (qword = 8 bytes cada)
    int_array dq 100, 200, 300, 400, 500
    int_count equ 5

    ; Array de bytes
    byte_array db 10, 20, 30, 40, 50, 60
    byte_count equ 6

section .text
    ; Acessar int_array[2]:
    lea rbx, [int_array]
    mov rax, [rbx + 2*8]     ; rax = 300

    ; Acessar byte_array[4]:
    lea rbx, [byte_array]
    movzx rax, byte [rbx + 4]  ; rax = 50

    ; Modificar array[1] = 999:
    mov qword [int_array + 1*8], 999`} />

      <h2>Operações em Arrays</h2>
      <CodeBlock language="nasm" filename="array_ops.asm" code={`; Somar todos os elementos de um array:
; rdi = ponteiro, rsi = tamanho
sum_array:
    xor rax, rax             ; soma = 0
    test rsi, rsi
    jz  .fim
.loop:
    add rax, [rdi]           ; soma += *ptr
    add rdi, 8               ; avança ponteiro
    dec rsi                  ; decrementa contador
    jnz .loop
.fim:
    ret

; Encontrar máximo:
find_max:
    ; rdi = ponteiro, rsi = tamanho (pelo menos 1)
    mov rax, [rdi]           ; max = primeiro elemento
    dec rsi
    jz  .fim
.loop:
    add rdi, 8
    cmp [rdi], rax
    cmovg rax, [rdi]         ; CMOV: se [rdi] > max, max = [rdi]
    dec rsi
    jnz .loop
.fim:
    ret

; Bubble sort (simples):
bubble_sort:
    ; rdi = array, rsi = tamanho
    push rbx
    push r12
    mov r12, rsi             ; salva tamanho
.outer:
    dec r12                  ; outer loop: N-1 passes
    jle .done
    xor rbx, rbx             ; inner index
.inner:
    cmp rbx, r12
    jge .outer
    mov rax, [rdi + rbx*8]
    mov rcx, [rdi + rbx*8 + 8]
    cmp rax, rcx
    jle .no_swap
    mov [rdi + rbx*8], rcx  ; swap
    mov [rdi + rbx*8 + 8], rax
.no_swap:
    inc rbx
    jmp .inner
.done:
    pop r12
    pop rbx
    ret`} />

      <h2>Strings Multibyte — UTF-8</h2>
      <AlertBox type="info" title="UTF-8 em Assembly">
        Assembly trata strings como bytes brutos — não há suporte nativo a Unicode. Para UTF-8, você precisa implementar a decodificação manualmente. Caracteres ASCII (código 0-127) são idênticos em UTF-8.
      </AlertBox>
      <CodeBlock language="nasm" filename="utf8.asm" code={`; Decodificar primeiro caractere UTF-8:
; RDI = ponteiro para string UTF-8
; Retorno: RAX = codepoint Unicode
decode_utf8_char:
    movzx rax, byte [rdi]
    
    ; 1 byte: 0xxxxxxx (ASCII: 0-127)
    test rax, 0x80
    jz  .done               ; bit 7 = 0 → ASCII puro
    
    ; 2 bytes: 110xxxxx 10xxxxxx (128-2047)
    cmp rax, 0xE0
    jae .three_bytes
    and rax, 0x1F           ; 5 bits do primeiro byte
    shl rax, 6
    movzx rcx, byte [rdi + 1]
    and rcx, 0x3F           ; 6 bits do segundo byte
    or  rax, rcx
    jmp .done
    
.three_bytes:
    ; ... continua para 3 e 4 bytes ...

.done:
    ret`} />
    </PageContainer>
  );
}
