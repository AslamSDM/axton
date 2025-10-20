import {
  BarChart2,
  Layers,
  Users,
  Settings,
  Globe,
  Wallet,
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-16 flex flex-col items-center py-4 bg-zinc-950 border-r border-zinc-800 z-10">
      <div className="p-2 mb-4">
        <Globe className="h-8 w-8 text-white" />
      </div>
      <nav className="flex flex-col items-center gap-4">
        <button className="p-3 bg-zinc-800  text-white">
          <BarChart2 className="h-5 w-5" />
        </button>
        <button className="p-3 text-zinc-400 hover:bg-zinc-800 hover:text-white ">
          <Layers className="h-5 w-5" />
        </button>
        <button className="p-3 text-zinc-400 hover:bg-zinc-800 hover:text-white ">
          <Wallet className="h-5 w-5" />
        </button>
        <button className="p-3 text-zinc-400 hover:bg-zinc-800 hover:text-white ">
          <Users className="h-5 w-5" />
        </button>
        <button className="p-3 text-zinc-400 hover:bg-zinc-800 hover:text-white ">
          <Settings className="h-5 w-5" />
        </button>
      </nav>
    </aside>
  );
}
