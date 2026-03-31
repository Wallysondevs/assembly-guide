import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function ModoReal() {
  return (
    <PageContainer title="Modo Real (16-bit)" subtitle="O modo em que o processador inicia — BIOS, DOS e bootloaders" difficulty="avancado" timeToRead="15 min">
      <p>Quando um computador liga, o processador começa em <strong>Modo Real</strong> — um modo de 16 bits compatível com o Intel 8086 de 1978. O BIOS roda nesse modo. Bootloaders começam aqui antes de transicionar para modo protegido ou long mode.</p>

      <h2>Características do Modo Real</h2>
      <ul>
        <li>Registradores de 16 bits: AX, BX, CX, DX, SI, DI, SP, BP</li>
        <li>Segmentos de 16 bits: CS, DS, ES, SS</li>
        <li>Endereçamento: Physical = Segment × 16 + Offset</li>
        <li>Máximo de 1MB de RAM acessível</li>
        <li>Sem proteção de memória — qualquer código pode ler/escrever qualquer lugar</li>
        <li>Interrupções BIOS disponíveis (INT 10h, INT 13h, INT 16h...)</li>
      </ul>

      <h2>Cálculo de Endereço no Modo Real</h2>
      <CodeBlock language="bash" code={`# Endereço físico = Segmento × 16 + Offset
# Exemplo: CS = 0x07C0, IP = 0x0000
# Endereço físico = 0x07C0 × 16 + 0x0000 = 0x7C00

# Por que 0x7C00? O BIOS carrega o MBR (512 bytes do primeiro setor do disco)
# sempre para o endereço físico 0x7C00 e pula para lá.`} />

      <h2>Hello World com BIOS</h2>
      <CodeBlock language="nasm" filename="hello_bios.asm" code={`; hello_bios.asm — 16-bit real mode
; Compilar: nasm -f bin hello_bios.asm -o hello.bin
; Testar: qemu-system-i386 -fda hello.bin

bits 16               ; diz ao NASM: gerar código de 16-bit
org 0x7C00            ; o BIOS nos carrega em 0x7C00

start:
    ; Configurar segmentos
    xor ax, ax
    mov ds, ax
    mov es, ax
    mov ss, ax
    mov sp, 0x7C00    ; stack cresce abaixo do nosso código

    ; Exibir string com BIOS INT 10h (modo teletype)
    mov si, mensagem
.loop:
    lodsb             ; al = [si++]
    test al, al       ; null terminator?
    jz  .halt
    mov ah, 0x0E      ; BIOS função: print character
    int 0x10          ; BIOS interrupt
    jmp .loop

.halt:
    cli               ; desabilitar interrupções
    hlt               ; parar o processador

mensagem db "Hello, Real Mode!", 13, 10, 0

; Magic number obrigatório no final do setor de boot:
times 510 - ($ - $$) db 0    ; preencher com zeros até byte 510
dw 0xAA55                     ; assinatura de boot (bytes 511-512)`} />

      <h2>Interrupções BIOS</h2>
      <table>
        <thead><tr><th>INT</th><th>Função</th><th>Uso</th></tr></thead>
        <tbody>
          {[
            ["INT 10h","Video services","imprimir texto, mudar modo de vídeo"],
            ["INT 13h","Disk services","ler/escrever setores do disco"],
            ["INT 16h","Keyboard services","ler tecla pressionada"],
            ["INT 15h","System services","detectar memória disponível"],
            ["INT 12h","Memory size","retorna KB de RAM"],
          ].map(([i,f,u]) => <tr key={i}><td><code>{i}</code></td><td>{f}</td><td>{u}</td></tr>)}
        </tbody>
      </table>

      <h2>Ler Setor do Disco</h2>
      <CodeBlock language="nasm" filename="read_disk.asm" code={`; INT 13h, AH=02 — Ler setores do disco
; AH = 02 (função de leitura)
; AL = número de setores a ler
; CH = número da trilha (0-79)
; CL = número do setor (1-18)
; DH = número da cabeça (0-1)
; DL = número da unidade (0=A:, 0x80=C:)
; ES:BX = buffer de destino

read_sector:
    mov ah, 0x02          ; ler setor
    mov al, 1             ; 1 setor (512 bytes)
    mov ch, 0             ; trilha 0
    mov cl, 2             ; setor 2 (o 1 é o bootloader)
    mov dh, 0             ; cabeça 0
    mov dl, 0             ; unidade A: (floppy)
    mov bx, 0x8000        ; ES:BX = 0x0000:0x8000 = destino
    int 0x13
    jc .erro              ; CF=1 se erro
    ; código carregado em 0x8000
    jmp 0x0000:0x8000     ; pular para o código carregado
.erro:
    ; tratamento de erro`} />

      <AlertBox type="info" title="UEFI vs BIOS">
        Computadores modernos usam UEFI (Unified Extensible Firmware Interface) em vez do BIOS legado. UEFI inicia em modo protegido (ou long mode) diretamente, mas mantém compatibilidade com o boot legado de 16-bit via "CSM" (Compatibility Support Module).
      </AlertBox>
    </PageContainer>
  );
}
