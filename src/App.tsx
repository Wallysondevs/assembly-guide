import { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

import Home from "@/pages/Home";
import Introducao from "@/pages/Introducao";
import Historia from "@/pages/Historia";
import PorQueAprender from "@/pages/PorQueAprender";
import Arquiteturas from "@/pages/Arquiteturas";
import SistemasNumericos from "@/pages/SistemasNumericos";
import RepresentacaoDados from "@/pages/RepresentacaoDados";
import Registradores from "@/pages/Registradores";
import Memoria from "@/pages/Memoria";
import Flags from "@/pages/Flags";
import InstalacaoNasm from "@/pages/InstalacaoNasm";
import InstalacaoGas from "@/pages/InstalacaoGas";
import HelloWorld from "@/pages/HelloWorld";
import GDB from "@/pages/GDB";
import Objdump from "@/pages/Objdump";
import Strace from "@/pages/Strace";
import InstrucoesMovimento from "@/pages/InstrucoesMovimento";
import Aritmetica from "@/pages/Aritmetica";
import Logica from "@/pages/Logica";
import Saltos from "@/pages/Saltos";
import Shifts from "@/pages/Shifts";
import ControleFluxo from "@/pages/ControleFluxo";
import Loops from "@/pages/Loops";
import Recursao from "@/pages/Recursao";
import FuncoesStack from "@/pages/FuncoesStack";
import CallingConventions from "@/pages/CallingConventions";
import StackFrame from "@/pages/StackFrame";
import Varargs from "@/pages/Varargs";
import Segmentos from "@/pages/Segmentos";
import Ponteiros from "@/pages/Ponteiros";
import StringsArrays from "@/pages/StringsArrays";
import Estruturas from "@/pages/Estruturas";
import SyscallsLinux from "@/pages/SyscallsLinux";
import SyscallsWindows from "@/pages/SyscallsWindows";
import IoProcessos from "@/pages/IoProcessos";
import ModoReal from "@/pages/ModoReal";
import ModoProtegido from "@/pages/ModoProtegido";
import LongMode from "@/pages/LongMode";
import SIMD from "@/pages/SIMD";
import SSE from "@/pages/SSE";
import AVX from "@/pages/AVX";
import FPU from "@/pages/FPU";
import InlineAssembly from "@/pages/InlineAssembly";
import LinkingC from "@/pages/LinkingC";
import ExportarFuncoes from "@/pages/ExportarFuncoes";
import ABI from "@/pages/ABI";
import Pipeline from "@/pages/Pipeline";
import Cache from "@/pages/Cache";
import BranchPrediction from "@/pages/BranchPrediction";
import Otimizacao from "@/pages/Otimizacao";
import GDBAvancado from "@/pages/GDBAvancado";
import AnaliseBinarios from "@/pages/AnaliseBinarios";
import EngReversaBasica from "@/pages/EngReversaBasica";
import ARMIntroducao from "@/pages/ARMIntroducao";
import ARMRegistradores from "@/pages/ARMRegistradores";
import ARMInstrucoes from "@/pages/ARMInstrucoes";
import ARMThumb from "@/pages/ARMThumb";
import RaspberryPi from "@/pages/RaspberryPi";
import RISCVIntroducao from "@/pages/RISCVIntroducao";
import RISCVRegistradores from "@/pages/RISCVRegistradores";
import RISCVInstrucoes from "@/pages/RISCVInstrucoes";
import MASM from "@/pages/MASM";
import Win32API from "@/pages/Win32API";
import Win64ABI from "@/pages/Win64ABI";
import BufferOverflow from "@/pages/BufferOverflow";
import Shellcoding from "@/pages/Shellcoding";
import ROP from "@/pages/ROP";
import Macros from "@/pages/Macros";
import Diretivas from "@/pages/Diretivas";
import Preprocessamento from "@/pages/Preprocessamento";
import ProjetoPrintf from "@/pages/ProjetoPrintf";
import ProjetoMalloc from "@/pages/ProjetoMalloc";
import ProjetoSort from "@/pages/ProjetoSort";
import Bootloader from "@/pages/Bootloader";
import KernelMinimo from "@/pages/KernelMinimo";
import AESAssembly from "@/pages/AESAssembly";
import SHA256Assembly from "@/pages/SHA256Assembly";
import Referencias from "@/pages/Referencias";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [location] = useHashLocation();

  useEffect(() => {
    setIsSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 lg:pl-72 flex flex-col min-w-0 transition-all duration-300">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/introducao" component={Introducao} />
        <Route path="/historia" component={Historia} />
        <Route path="/por-que-aprender" component={PorQueAprender} />
        <Route path="/arquiteturas" component={Arquiteturas} />
        <Route path="/sistemas-numericos" component={SistemasNumericos} />
        <Route path="/representacao-dados" component={RepresentacaoDados} />
        <Route path="/registradores" component={Registradores} />
        <Route path="/memoria" component={Memoria} />
        <Route path="/flags" component={Flags} />
        <Route path="/instalacao-nasm" component={InstalacaoNasm} />
        <Route path="/instalacao-gas" component={InstalacaoGas} />
        <Route path="/hello-world" component={HelloWorld} />
        <Route path="/gdb" component={GDB} />
        <Route path="/objdump" component={Objdump} />
        <Route path="/strace" component={Strace} />
        <Route path="/instrucoes-movimento" component={InstrucoesMovimento} />
        <Route path="/aritmetica" component={Aritmetica} />
        <Route path="/logica" component={Logica} />
        <Route path="/saltos" component={Saltos} />
        <Route path="/shifts" component={Shifts} />
        <Route path="/controle-fluxo" component={ControleFluxo} />
        <Route path="/loops" component={Loops} />
        <Route path="/recursao" component={Recursao} />
        <Route path="/funcoes-stack" component={FuncoesStack} />
        <Route path="/calling-conventions" component={CallingConventions} />
        <Route path="/stack-frame" component={StackFrame} />
        <Route path="/varargs" component={Varargs} />
        <Route path="/segmentos" component={Segmentos} />
        <Route path="/ponteiros" component={Ponteiros} />
        <Route path="/strings-arrays" component={StringsArrays} />
        <Route path="/estruturas" component={Estruturas} />
        <Route path="/syscalls-linux" component={SyscallsLinux} />
        <Route path="/syscalls-windows" component={SyscallsWindows} />
        <Route path="/io-processos" component={IoProcessos} />
        <Route path="/modo-real" component={ModoReal} />
        <Route path="/modo-protegido" component={ModoProtegido} />
        <Route path="/long-mode" component={LongMode} />
        <Route path="/simd" component={SIMD} />
        <Route path="/sse" component={SSE} />
        <Route path="/avx" component={AVX} />
        <Route path="/fpu" component={FPU} />
        <Route path="/inline-assembly" component={InlineAssembly} />
        <Route path="/linking-c" component={LinkingC} />
        <Route path="/exportar-funcoes" component={ExportarFuncoes} />
        <Route path="/abi" component={ABI} />
        <Route path="/pipeline" component={Pipeline} />
        <Route path="/cache" component={Cache} />
        <Route path="/branch-prediction" component={BranchPrediction} />
        <Route path="/otimizacao" component={Otimizacao} />
        <Route path="/gdb-avancado" component={GDBAvancado} />
        <Route path="/analise-binarios" component={AnaliseBinarios} />
        <Route path="/eng-reversa" component={EngReversaBasica} />
        <Route path="/arm-introducao" component={ARMIntroducao} />
        <Route path="/arm-registradores" component={ARMRegistradores} />
        <Route path="/arm-instrucoes" component={ARMInstrucoes} />
        <Route path="/arm-thumb" component={ARMThumb} />
        <Route path="/raspberry-pi" component={RaspberryPi} />
        <Route path="/riscv-introducao" component={RISCVIntroducao} />
        <Route path="/riscv-registradores" component={RISCVRegistradores} />
        <Route path="/riscv-instrucoes" component={RISCVInstrucoes} />
        <Route path="/masm" component={MASM} />
        <Route path="/win32-api" component={Win32API} />
        <Route path="/win64-abi" component={Win64ABI} />
        <Route path="/buffer-overflow" component={BufferOverflow} />
        <Route path="/shellcoding" component={Shellcoding} />
        <Route path="/rop" component={ROP} />
        <Route path="/macros" component={Macros} />
        <Route path="/diretivas" component={Diretivas} />
        <Route path="/preprocessamento" component={Preprocessamento} />
        <Route path="/projeto-printf" component={ProjetoPrintf} />
        <Route path="/projeto-malloc" component={ProjetoMalloc} />
        <Route path="/projeto-sort" component={ProjetoSort} />
        <Route path="/bootloader" component={Bootloader} />
        <Route path="/kernel-minimo" component={KernelMinimo} />
        <Route path="/aes-assembly" component={AESAssembly} />
        <Route path="/sha256-assembly" component={SHA256Assembly} />
        <Route path="/referencias" component={Referencias} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter hook={useHashLocation}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
