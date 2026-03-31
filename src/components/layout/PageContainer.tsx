import { ReactNode } from "react";
import { DifficultyBadge } from "../ui/DifficultyBadge";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface PageContainerProps {
  title: string;
  subtitle?: string;
  difficulty?: "iniciante" | "intermediario" | "avancado" | "expert";
  timeToRead?: string;
  children: ReactNode;
}

export function PageContainer({ title, subtitle, difficulty, timeToRead, children }: PageContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 py-10"
    >
      <div className="mb-8 pb-6 border-b border-border">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-3 mt-0">
          {title}
        </h1>
        {subtitle && (
          <p className="text-muted-foreground text-lg leading-relaxed">{subtitle}</p>
        )}
        {(difficulty || timeToRead) && (
          <div className="flex items-center gap-3 mt-4">
            {difficulty && <DifficultyBadge level={difficulty} />}
            {timeToRead && (
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                {timeToRead} de leitura
              </span>
            )}
          </div>
        )}
      </div>
      <div className="prose prose-invert prose-lg max-w-none
        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
        prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-primary
        prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
        prose-li:text-muted-foreground prose-li:leading-relaxed prose-li:mb-1
        prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
        prose-strong:text-foreground prose-strong:font-semibold
        prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
        prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0
        prose-table:border-collapse prose-th:border prose-th:border-border prose-th:p-3 prose-th:bg-card prose-td:border prose-td:border-border prose-td:p-3
      ">
        {children}
      </div>
    </motion.div>
  );
}
