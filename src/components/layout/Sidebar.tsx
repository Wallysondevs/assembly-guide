import { Link } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { cn } from "@/lib/utils";
import {
  BookOpen, Terminal, Cpu, Code2, Layers, Shield, Zap, X, ChevronDown, ChevronRight, Settings, Network, Lock, Database, Wrench, FlaskConical, Binary
} from "lucide-react";
import { useState } from "react";

interface NavItem {
  label: string;
  path?: string;
  children?: NavItem[];
  icon?: React.ElementType;
}

const NAV: NavItem[] = [
  {
    label: "Introdução",
    icon: BookOpen,
    children: [
      { label: "O que é Assembly", path: "/introducao" },
      { label: "História do Assembly", path: "/historia" },
      { label: "Por que Aprender?", path: "/por-que-aprender" },
      { label: "Arquiteturas (x86, ARM...)", path: "/arquiteturas" },
    ],
  },
  {
    label: "Fundamentos",
    icon: Binary,
    children: [
      { label: "Sistemas Numéricos", path: "/sistemas-numericos" },
      { label: "Representação de Dados", path: "/representacao-dados" },
      { label: "Registradores x86-64", path: "/registradores" },
      { label: "Memória e Endereçamento", path: "/memoria" },
      { label: "Registrador FLAGS", path: "/flags" },
    ],
  },
  {
    label: "Ambiente de Dev",
    icon: Wrench,
    children: [
      { label: "Instalando NASM", path: "/instalacao-nasm" },
      { label: "GNU Assembler (GAS)", path: "/instalacao-gas" },
      { label: "Hello World", path: "/hello-world" },
      { label: "GDB - Debugging", path: "/gdb" },
      { label: "objdump & readelf", path: "/objdump" },
      { label: "strace & ltrace", path: "/strace" },
    ],
  },
  {
    label: "Instruções Básicas",
    icon: Code2,
    children: [
      { label: "Movimento de Dados", path: "/instrucoes-movimento" },
      { label: "Aritmética", path: "/aritmetica" },
      { label: "Operações Lógicas", path: "/logica" },
      { label: "Comparações e Saltos", path: "/saltos" },
      { label: "Shifts e Rotações", path: "/shifts" },
    ],
  },
  {
    label: "Controle de Fluxo",
    icon: Layers,
    children: [
      { label: "Labels e Condicionais", path: "/controle-fluxo" },
      { label: "Loops", path: "/loops" },
      { label: "Recursão", path: "/recursao" },
    ],
  },
  {
    label: "Funções e Stack",
    icon: Terminal,
    children: [
      { label: "Funções e Stack", path: "/funcoes-stack" },
      { label: "Calling Conventions", path: "/calling-conventions" },
      { label: "Stack Frame", path: "/stack-frame" },
      { label: "Funções Variádicas", path: "/varargs" },
    ],
  },
  {
    label: "Memória e Dados",
    icon: Database,
    children: [
      { label: "Segmentos de Memória", path: "/segmentos" },
      { label: "Ponteiros", path: "/ponteiros" },
      { label: "Strings e Arrays", path: "/strings-arrays" },
      { label: "Estruturas (Structs)", path: "/estruturas" },
    ],
  },
  {
    label: "System Calls",
    icon: Settings,
    children: [
      { label: "Syscalls Linux x86-64", path: "/syscalls-linux" },
      { label: "Syscalls Windows", path: "/syscalls-windows" },
      { label: "I/O e Processos", path: "/io-processos" },
    ],
  },
  {
    label: "Modos do Processador",
    icon: Cpu,
    children: [
      { label: "Modo Real (16-bit)", path: "/modo-real" },
      { label: "Modo Protegido (32-bit)", path: "/modo-protegido" },
      { label: "Long Mode (64-bit)", path: "/long-mode" },
    ],
  },
  {
    label: "SIMD & Vetorização",
    icon: Zap,
    children: [
      { label: "Introdução SIMD/SSE", path: "/simd" },
      { label: "Instruções SSE/SSE2", path: "/sse" },
      { label: "AVX e AVX-512", path: "/avx" },
      { label: "x87 FPU", path: "/fpu" },
    ],
  },
  {
    label: "Interoperabilidade",
    icon: Network,
    children: [
      { label: "Assembly Inline (C/C++)", path: "/inline-assembly" },
      { label: "Linking com C", path: "/linking-c" },
      { label: "Exportar Funções", path: "/exportar-funcoes" },
      { label: "ABI (Application Binary)", path: "/abi" },
    ],
  },
  {
    label: "Otimização",
    icon: Zap,
    children: [
      { label: "Pipeline da CPU", path: "/pipeline" },
      { label: "Cache e Localidade", path: "/cache" },
      { label: "Branch Prediction", path: "/branch-prediction" },
      { label: "Técnicas de Otimização", path: "/otimizacao" },
    ],
  },
  {
    label: "Depuração e Análise",
    icon: FlaskConical,
    children: [
      { label: "GDB Avançado", path: "/gdb-avancado" },
      { label: "Análise de Binários", path: "/analise-binarios" },
      { label: "Engenharia Reversa", path: "/eng-reversa" },
    ],
  },
  {
    label: "ARM Assembly",
    icon: Cpu,
    children: [
      { label: "Introdução ao ARM", path: "/arm-introducao" },
      { label: "Registradores ARM", path: "/arm-registradores" },
      { label: "Instruções ARM", path: "/arm-instrucoes" },
      { label: "Thumb e Thumb-2", path: "/arm-thumb" },
      { label: "Raspberry Pi", path: "/raspberry-pi" },
    ],
  },
  {
    label: "RISC-V",
    icon: Cpu,
    children: [
      { label: "Introdução RISC-V", path: "/riscv-introducao" },
      { label: "Registradores RISC-V", path: "/riscv-registradores" },
      { label: "Instruções RISC-V", path: "/riscv-instrucoes" },
    ],
  },
  {
    label: "Windows Assembly",
    icon: Settings,
    children: [
      { label: "MASM (Microsoft)", path: "/masm" },
      { label: "Win32 API em Assembly", path: "/win32-api" },
      { label: "Windows x64 ABI", path: "/win64-abi" },
    ],
  },
  {
    label: "Segurança",
    icon: Shield,
    children: [
      { label: "Buffer Overflow", path: "/buffer-overflow" },
      { label: "Shellcoding", path: "/shellcoding" },
      { label: "ROP (Return-Oriented)", path: "/rop" },
    ],
  },
  {
    label: "Macros e Diretivas",
    icon: Code2,
    children: [
      { label: "Macros NASM", path: "/macros" },
      { label: "Diretivas e Pseudo-ops", path: "/diretivas" },
      { label: "Pré-processamento", path: "/preprocessamento" },
    ],
  },
  {
    label: "Projetos Práticos",
    icon: FlaskConical,
    children: [
      { label: "Implementar printf", path: "/projeto-printf" },
      { label: "Alocador de Memória", path: "/projeto-malloc" },
      { label: "Algoritmos de Sort", path: "/projeto-sort" },
      { label: "Bootloader (Hello World)", path: "/bootloader" },
      { label: "Kernel Mínimo", path: "/kernel-minimo" },
    ],
  },
  {
    label: "Assembly & Criptografia",
    icon: Lock,
    children: [
      { label: "AES com AES-NI", path: "/aes-assembly" },
      { label: "SHA-256 em Assembly", path: "/sha256-assembly" },
    ],
  },
  {
    label: "Referências",
    icon: BookOpen,
    path: "/referencias",
  },
];

function NavSection({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const [location] = useHashLocation();
  const [open, setOpen] = useState(() => {
    if (item.children) {
      return item.children.some(c => c.path === location);
    }
    return false;
  });

  if (item.path && !item.children) {
    const active = location === item.path;
    return (
      <Link href={item.path}>
        <div className={cn(
          "flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm cursor-pointer transition-all",
          depth === 0 ? "font-medium" : "pl-7",
          active
            ? "bg-primary/15 text-primary font-semibold"
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        )}>
          {item.icon && <item.icon className="w-4 h-4 shrink-0" />}
          <span className="truncate">{item.label}</span>
        </div>
      </Link>
    );
  }

  const hasActiveChild = item.children?.some(c => c.path === location);

  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        className={cn(
          "w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all",
          hasActiveChild ? "text-primary" : "text-foreground hover:bg-muted"
        )}
      >
        {item.icon && <item.icon className="w-4 h-4 shrink-0 text-primary/70" />}
        <span className="flex-1 text-left truncate">{item.label}</span>
        {open ? <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />}
      </button>
      {open && (
        <div className="mt-0.5 ml-2 border-l border-border/50 pl-2 space-y-0.5">
          {item.children?.map((child, i) => (
            <NavSection key={i} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />
      )}
      <aside className={cn(
        "fixed top-0 left-0 h-full w-72 z-50 bg-background border-r border-border flex flex-col transition-transform duration-300",
        "lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between px-4 h-14 border-b border-border shrink-0">
          <Link href="/" className="flex items-center gap-2 font-black text-sm text-foreground">
            <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-primary" />
            </div>
            <span>Assembly Guide</span>
          </Link>
          <button onClick={() => setIsOpen(false)} className="lg:hidden p-1.5 rounded-lg hover:bg-muted">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-thin">
          <Link href="/">
            <div className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold transition-all mb-2",
              "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}>
              <BookOpen className="w-4 h-4 text-primary" />
              Início
            </div>
          </Link>
          {NAV.map((item, i) => (
            <NavSection key={i} item={item} />
          ))}
        </div>
        <div className="p-4 border-t border-border">
          <div className="text-xs text-muted-foreground text-center">
            Assembly — Livro Completo 2025
          </div>
        </div>
      </aside>
    </>
  );
}
