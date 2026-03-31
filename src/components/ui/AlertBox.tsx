import { AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

type AlertType = "info" | "warning" | "danger" | "success";

interface AlertBoxProps {
  type?: AlertType;
  title?: string;
  children: React.ReactNode;
}

const CONFIG = {
  info: { icon: Info, classes: "bg-blue-500/10 border-blue-500/30 text-blue-400", titleClass: "text-blue-300" },
  warning: { icon: TriangleAlert, classes: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400", titleClass: "text-yellow-300" },
  danger: { icon: AlertCircle, classes: "bg-red-500/10 border-red-500/30 text-red-400", titleClass: "text-red-300" },
  success: { icon: CheckCircle2, classes: "bg-green-500/10 border-green-500/30 text-green-400", titleClass: "text-green-300" },
};

export function AlertBox({ type = "info", title, children }: AlertBoxProps) {
  const cfg = CONFIG[type];
  const Icon = cfg.icon;
  return (
    <div className={cn("rounded-xl border p-4 my-4 flex gap-3", cfg.classes)}>
      <Icon className="w-5 h-5 mt-0.5 shrink-0" />
      <div className="text-sm">
        {title && <div className={cn("font-semibold mb-1", cfg.titleClass)}>{title}</div>}
        <div className="text-foreground/80 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
