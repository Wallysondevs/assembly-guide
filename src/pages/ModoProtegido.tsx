import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ModoProtegido() {
  return (
    <PageContainer title="Modo Protegido (32-bit)" subtitle="Proteção de memória, GDT, segmentação e a base do kernel moderno" difficulty="expert" timeToRead="20 min">
      <p>O <strong>Modo Protegido</strong> foi introduzido no Intel 80286 (1982) e expandido no 80386 (1985). É o modo que tornou possível multitarefa real, proteção de memória e anéis de privilégio — a base dos sistemas operacionais modernos.</p>

      <h2>Diferenças do Modo Real</h2>
      <ul>
        <li><strong>Registradores de 32-bit:</strong> EAX, EBX, ECX, EDX, ESI, EDI, ESP, EBP</li>
        <li><strong>Proteção de memória:</strong> cada segmento tem base, limite e flags de acesso</li>
        <li><strong>Anéis de privilégio:</strong> Ring 0 (kernel) a Ring 3 (usuário)</li>
        <li><strong>Endereçamento virtual:</strong> até 4GB de memória virtual por processo</li>
        <li><strong>Paginação:</strong> virtual → físico com MMU</li>
        <li><strong>GDT/LDT:</strong> Global e Local Descriptor Tables definem segmentos</li>
      </ul>

      <h2>Estrutura da GDT (Global Descriptor Table)</h2>
      <CodeBlock language="bash" code={`; Cada entry da GDT tem 8 bytes (64 bits):
; Bits 15-0:  Limit 0-15
; Bits 31-16: Base 0-15
; Bits 39-32: Base 16-23
; Bits 43-40: Type (código/dados, leitura, escrita, direção...)
; Bit  44:    S (descriptor type: 0=sistema, 1=código/dados)
; Bits 46-45: DPL (privilege level: 0=kernel, 3=user)
; Bit  47:    P (present: 1=segmento válido)
; Bits 51-48: Limit 16-19
; Bit  52:    AVL (disponível para OS)
; Bit  53:    L (64-bit code segment)
; Bit  54:    D/B (default op size: 0=16-bit, 1=32-bit)
; Bit  55:    G (granularity: 0=bytes, 1=pages)
; Bits 63-56: Base 24-31`} />

      <CodeBlock language="nasm" filename="gdt.asm" code={`; GDT mínima para modo protegido 32-bit:
gdt_start:
    ; Null descriptor (obrigatório — índice 0)
    dq 0

    ; Code segment (Ring 0)
    ; Base=0, Limit=0xFFFFF (4GB), Code, Read, Ring0, 32-bit
    dw 0xFFFF       ; Limit 0-15
    dw 0x0000       ; Base 0-15
    db 0x00         ; Base 16-23
    db 0b10011010   ; P=1, DPL=00, S=1, Type=1010 (code, read)
    db 0b11001111   ; G=1, D=1, L=0, AVL=0, Limit 16-19=1111
    db 0x00         ; Base 24-31

    ; Data segment (Ring 0)
    dw 0xFFFF
    dw 0x0000
    db 0x00
    db 0b10010010   ; P=1, DPL=00, S=1, Type=0010 (data, write)
    db 0b11001111
    db 0x00

gdt_end:

gdt_descriptor:
    dw gdt_end - gdt_start - 1  ; tamanho - 1
    dd gdt_start                ; endereço linear da GDT

CODE_SEG equ 0x08   ; 1º segment (8 bytes após null = índice 1)
DATA_SEG equ 0x10   ; 2º segment (16 bytes após null = índice 2)`} />

      <h2>Transição para Modo Protegido</h2>
      <CodeBlock language="nasm" filename="modo_protegido.asm" code={`bits 16
org 0x7C00

start_real_mode:
    cli                         ; desabilitar interrupções
    
    ; 1. Carregar a GDT
    lgdt [gdt_descriptor]
    
    ; 2. Habilitar modo protegido (setar bit PE do CR0)
    mov eax, cr0
    or  eax, 1                  ; setar bit PE
    mov cr0, eax
    
    ; 3. Far jump para limpar o pipeline e atualizar CS
    jmp CODE_SEG:protected_mode_start

bits 32
protected_mode_start:
    ; Agora estamos em modo protegido 32-bit!
    
    ; 4. Configurar segmentos de dados
    mov ax, DATA_SEG
    mov ds, ax
    mov es, ax
    mov fs, ax
    mov gs, ax
    mov ss, ax
    mov esp, 0x90000            ; nova stack
    
    ; 5. Habilitar interrupções (depois de configurar IDT!)
    ; sti  ← não agora, aguardar IDT
    
    ; Código do kernel 32-bit começa aqui
    call kernel_main`} />

      <h2>Paginação em Modo Protegido</h2>
      <CodeBlock language="nasm" filename="paginacao.asm" code={`; Configurar paginação (Identity Mapping — virtual = físico):
setup_paging:
    ; Criar Page Directory (4KB alinhado)
    mov edi, 0x1000         ; Page Directory em 0x1000
    mov cr3, edi            ; CR3 = endereço do Page Directory
    xor eax, eax
    mov ecx, 4096           ; limpar 4KB
    rep stosd

    ; Criar Page Table para primeiros 4MB:
    mov edi, 0x2000         ; Page Table em 0x2000
    mov eax, 0x00000003     ; endereço 0x0, present+writable
    mov ecx, 1024           ; 1024 entradas (4MB)
.fill_pt:
    stosd
    add eax, 0x1000         ; próxima página (4KB)
    loop .fill_pt

    ; Apontar Page Directory para Page Table:
    mov dword [0x1000], 0x00002003   ; PT em 0x2000, present+writable

    ; Habilitar paginação (bit PG do CR0):
    mov eax, cr0
    or  eax, 0x80000000     ; setar bit PG
    mov cr0, eax
    ret`} />

      <AlertBox type="info" title="Ring 0 vs Ring 3">
        Ring 0 é o kernel — pode executar qualquer instrução e acessar qualquer memória. Ring 3 são os processos de usuário — acesso a memória restrito, instruções privilegiadas proibidas. Uma violação de acesso em Ring 3 causa uma General Protection Fault (#GP), que o kernel trata enviando SIGSEGV ao processo.
      </AlertBox>
    </PageContainer>
  );
}
