import { Link } from "wouter";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-screen bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-6"
      >
        <div className="text-8xl font-mono font-black text-primary mb-4">404</div>
        <div className="font-mono text-2xl text-muted-foreground mb-2">
          ; Erro: página não encontrada
        </div>
        <pre className="font-mono text-sm text-muted-foreground/70 bg-muted/30 rounded-lg p-4 mb-8 inline-block text-left">
{`cmp rax, 0x404     ; verificar status
je  .nao_encontrado ; página não existe
; ...

.nao_encontrado:
    lea rdi, [rel msg_404]
    call render_error
    ; retornar para home`}
        </pre>
        <div className="text-muted-foreground mb-8">
          A página que você procura não foi encontrada no mapa de memória.
        </div>
        <Link href="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-mono font-medium hover:bg-primary/90 transition-colors">
          <span>JMP _start</span>
          <span>→</span>
        </Link>
      </motion.div>
    </div>
  );
}
