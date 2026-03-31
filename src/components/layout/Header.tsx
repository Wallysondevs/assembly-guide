import { Menu, Moon, Sun, Cpu } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Link } from "wouter";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="sticky top-0 z-30 h-14 flex items-center border-b border-border bg-background/80 backdrop-blur-md px-4 gap-3">
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
        aria-label="Menu"
      >
        <Menu className="w-5 h-5" />
      </button>
      <Link href="/" className="flex items-center gap-2 font-black text-sm text-foreground lg:hidden">
        <Cpu className="w-4 h-4 text-primary" />
        <span>Assembly Guide</span>
      </Link>
      <div className="flex-1" />
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
        aria-label="Alternar tema"
      >
        {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
    </header>
  );
}
