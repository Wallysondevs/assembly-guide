import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function LongMode() {
  return (
    <PageContainer title="Long Mode (64-bit)" subtitle="A transição para 64 bits — IA-32e, paginação de 4 níveis e AMD64" difficulty="expert" timeToRead="15 min">
      <p><strong>Long Mode</strong> (também chamado de IA-32e ou AMD64 mode) é o modo de 64 bits introduzido pela AMD em 2003. É o modo padrão de execução em sistemas Linux e Windows x86-64 modernos.</p>

      <h2>Características do Long Mode</h2>
      <ul>
        <li><strong>Registradores de 64 bits:</strong> RAX, RBX, ... (prefixo R)</li>
        <li><strong>16 registradores gerais:</strong> RAX-R15</li>
        <li><strong>Espaço de endereçamento:</strong> 2^64 bytes teórico, 2^48 bytes "canonical" na prática</li>
        <li><strong>Paginação obrigatória de 4 níveis:</strong> PML4 → PDPT → PD → PT</li>
        <li><strong>Segmentação obsoleta:</strong> CS, DS, SS, ES base e limite são ignorados (só FS e GS ainda têm base)</li>
        <li><strong>New instructions:</strong> SYSCALL/SYSRET (mais eficiente que int 0x80)</li>
        <li><strong>RIP-relative addressing:</strong> LEA/MOV podem referenciar memória relativa ao RIP</li>
      </ul>

      <h2>Paginação de 4 Níveis</h2>
      <CodeBlock language="bash" code={`; Endereço virtual de 48 bits é decomposto em:
; [63:48] — bits de sinal estendido (todos 0 ou todos 1 = "canonical")
; [47:39] — PML4 index (9 bits, 512 entradas)
; [38:30] — PDPT index (9 bits, 512 entradas)
; [29:21] — PD index (9 bits, 512 entradas)
; [20:12] — PT index (9 bits, 512 entradas)
; [11:0]  — offset dentro da página (12 bits, 4KB)

; Exemplo: endereço 0x00007fff5fbff800
; Binário:  0000 0000 0000 0000 0111 1111 1111 1111 0101 1111 1011 1111 1111 1000 0000 0000
; PML4 idx: 0b000000000 = 0
; PDPT idx: 0b011111111 = 255
; PD idx:   0b101111111 = 383
; PT idx:   0b011111111 = 255
; Offset:   0b100000000000 = 2048`} />

      <h2>Estrutura de Entrada de Página (PTE)</h2>
      <CodeBlock language="bash" code={`; Formato de cada entrada de nível na hierarquia de paginação (8 bytes):
; Bit 0: Present (P) — entrada válida?
; Bit 1: Read/Write (R/W) — 0=somente leitura, 1=leitura+escrita
; Bit 2: User/Supervisor (U/S) — 0=kernel only, 1=acessível por user
; Bit 3: Page Write Through (PWT)
; Bit 4: Page Cache Disable (PCD)
; Bit 5: Accessed (A) — setado quando acessado
; Bit 6: Dirty (D) — setado quando escrito (só em PT)
; Bit 7: Page Size (PS) — 1=página grande (2MB/1GB) se no PD/PDPT
; Bits 11-8: Available for OS use
; Bits 51-12: Physical Frame Number (endereço físico da próxima tabela/frame)
; Bits 62-52: Available for OS use
; Bit 63: Execute Disable (NX/XD) — 1=não pode executar código desta página`} />

      <h2>Habilitando Long Mode</h2>
      <CodeBlock language="nasm" filename="long_mode.asm" code={`bits 32
; Estamos em modo protegido 32-bit
; Precisamos:
; 1. Verificar se CPU suporta long mode (CPUID)
; 2. Configurar paginação de 4 níveis
; 3. Habilitar PAE (Physical Address Extension)
; 4. Setar bit LME no EFER MSR
; 5. Habilitar paginação (bit PG do CR0)
; 6. Far jump com novo GDT de 64-bit

enable_long_mode:
    ; Verificar suporte (CPUID)
    mov eax, 0x80000001
    cpuid
    bt  edx, 29             ; bit 29 = suporte a long mode
    jnc .no_long_mode       ; se não suporta, erro

    ; Configurar PML4 (Level 4 Page Table)
    mov edi, 0x1000         ; PML4 em 0x1000
    mov cr3, edi
    xor eax, eax
    mov ecx, 4096 / 4
    rep stosd

    ; PML4[0] → PDPT em 0x2000
    mov dword [0x1000], 0x00002003  ; present + writable
    
    ; PDPT[0] → PD em 0x3000
    mov dword [0x2000], 0x00003003
    
    ; PD[0] → PT em 0x4000
    mov dword [0x3000], 0x00004003
    
    ; PT[0..511] = identity map primeiro 2MB
    mov edi, 0x4000
    mov eax, 0x00000003     ; frame 0, present + writable
    mov ecx, 512
.fill_pt:
    mov [edi], eax
    add eax, 0x1000
    add edi, 8
    loop .fill_pt

    ; Habilitar PAE (bit 5 do CR4)
    mov eax, cr4
    or  eax, (1 << 5)       ; PAE
    or  eax, (1 << 7)       ; PGE (Page Global Enable)
    mov cr4, eax

    ; Setar Long Mode Enable no EFER MSR
    mov ecx, 0xC0000080     ; EFER MSR
    rdmsr
    or  eax, (1 << 8)       ; LME = Long Mode Enable
    wrmsr

    ; Habilitar paginação → ativa Long Mode!
    mov eax, cr0
    or  eax, (1 << 31) | (1 << 0)  ; PG | PE
    mov cr0, eax

    ; Far jump para código 64-bit com novo CS
    jmp 0x0008:long_mode_start  ; 0x0008 = code segment da GDT de 64-bit

.no_long_mode:
    ; Procesador não suporta 64-bit
    hlt

bits 64
long_mode_start:
    ; Agora estamos em Long Mode 64-bit!
    mov rax, 0x2F742F204F4B21  ; "OK! t/"
    ; ... inicializar kernel 64-bit ...`} />

      <AlertBox type="info" title="Canonical Addresses">
        Em Long Mode, endereços virtuais válidos ("canonical") devem ter os bits 63:48 todos iguais ao bit 47. Endereços de usuário ficam em 0x0000..0x00007FFF..., endereços de kernel ficam em 0xFFFF8000..0xFFFFFFFF.... O "buraco" entre eles causa #GP se acessado.
      </AlertBox>
    </PageContainer>
  );
}
