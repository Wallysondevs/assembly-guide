import { PageContainer } from "@/components/layout/PageContainer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { AlertBox } from "@/components/ui/AlertBox";

export default function Win64ABI() {
  return (
    <PageContainer title="Windows x64 ABI Avançado" subtitle="Unwind data, structured exceptions e C++ interop no Windows" difficulty="expert" timeToRead="15 min">
      <p>Além da calling convention básica, o Windows x64 ABI define estruturas adicionais para exception handling, stack unwinding e debugging. Essenciais para funções Assembly que interagem com C++ no Windows.</p>

      <h2>Unwind Data — Por que Necessário</h2>
      <AlertBox type="warning" title="Stack Unwinding Obrigatório">
        No Windows x64, toda função não-leaf DEVE ter metadata de "unwind" no executável. Sem isso, o runtime de C++ não consegue propagar exceções ou gerar stack traces através da sua função Assembly. O programa pode terminar abruptamente.
      </AlertBox>
      <CodeBlock language="bash" code={`# Windows usa "table-driven exception handling"
# Cada função tem uma entrada em .pdata (section de dados de exceção):
#   - Endereço inicial da função
#   - Endereço final da função  
#   - Ponteiro para UNWIND_INFO

# UNWIND_INFO descreve:
#   - Versão e flags
#   - Tamanho do prólogo
#   - Códigos de unwind (o que o prólogo faz)
#   - Handler de exceção (se houver)`} />

      <h2>Declarando Unwind Data em NASM</h2>
      <CodeBlock language="nasm" filename="unwind.asm" code={`; Unwind data para função Assembly no Windows
; Requer NASM 2.14+ e link com /PDATA

section .pdata rdata align=4

; Estrutura RUNTIME_FUNCTION:
    DD funcao_begin         ; BeginAddress (RVA)
    DD funcao_end           ; EndAddress (RVA)
    DD unwind_info          ; UnwindData (RVA)

section .xdata rdata align=8

unwind_info:
    DB 1                    ; Version=1, Flags=0 (sem handler)
    DB (funcao_begin_after_prolog - funcao_begin)  ; SizeOfProlog
    DB 3                    ; CountOfUnwindCodes = 3 operações
    DB 0                    ; FrameRegister=0, FrameOffset=0
    
    ; Códigos de unwind (em ordem reversa da execução do prólogo!):
    ; 1. sub rsp, 32 (alocar shadow space)
    DB (push_after_sub - funcao_begin) ; offset onde SUB foi feito
    DB 0x72                 ; UWOP_ALLOC_SMALL, size = 32 bytes
    
    ; 2. push r12 (save non-volatile)
    DB (push_r12 - funcao_begin)       ; offset
    DB (0x03 | (12 << 4))  ; UWOP_PUSH_NONVOL, register = R12
    
    ; 3. push rbp
    DB (push_rbp - funcao_begin)
    DB (0x03 | (5 << 4))   ; UWOP_PUSH_NONVOL, register = RBP

section .text

funcao_begin:
push_rbp:
    push rbp
    mov  rbp, rsp
push_r12:
    push r12
push_after_sub:
    sub  rsp, 32        ; shadow space

funcao_begin_after_prolog:
    ; corpo da função ...

    add rsp, 32
    pop r12
    pop rbp
    ret

funcao_end:`} />

      <h2>Structured Exception Handling (SEH)</h2>
      <CodeBlock language="c" filename="seh.c" code={`// SEH em C (Windows-specific):
__try {
    // código que pode gerar exceção
    int *ptr = NULL;
    *ptr = 42;  // access violation
}
__except (EXCEPTION_EXECUTE_HANDLER) {
    // handler de exceção
    printf("Exceção capturada!\\n");
}
__finally {
    // sempre executa (cleanup)
    printf("Finalizando...\\n");
}`} />

      <h2>Verificando ABI com dumpbin</h2>
      <CodeBlock language="bash" code={`# dumpbin — ferramenta da Microsoft para analisar binários:
dumpbin /headers programa.exe
dumpbin /imports programa.exe      # DLLs importadas
dumpbin /exports minha.dll         # funções exportadas
dumpbin /pdata programa.exe        # unwind data
dumpbin /disasm:nobytes meu.obj    # disassembly

# Verificar se função tem unwind data:
dumpbin /pdata programa.exe | findstr "minha_funcao"`} />
    </PageContainer>
  );
}
