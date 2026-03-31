import { cn } from "@/lib/utils";

type Level = "iniciante" | "intermediario" | "avancado" | "expert";

export function DifficultyBadge({ level }: { level: Level }) {
  const styles = {
    iniciante: "bg-secondary/20 text-secondary border-secondary/30",
    intermediario: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    avancado: "bg-primary/20 text-primary border-primary/30",
    expert: "bg-red-500/20 text-red-400 border-red-500/30",
  };
  const labels = {
    iniciante: "Iniciante",
    intermediario: "Intermediário",
    avancado: "Avançado",
    expert: "Expert",
  };
  return (
    <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full border", styles[level])}>
      {labels[level]}
    </span>
  );
}
