import Link from "next/link";
import { Rocket, Map } from "lucide-react";

export function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="p-2 bg-indigo-500 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">C++ Space Academy</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/academy" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2">
            <Map className="w-4 h-4" />
            Star Map
          </Link>
          <Link href="/dashboard" className="text-slate-300 hover:text-white transition-colors">
            Cadet Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
