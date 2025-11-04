"use client";
import { BarChart2, Layers, Users, Settings, Wallet } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  active: string
}

type Link = {
  name: string
  icon: React.ReactNode;
  route: string
}

const links: Link[] = [
  {
    name: "dashboard",
    icon: <BarChart2 className="h-5 w-5" />,
    route: "/"
  },
  {
    name: "otc",
    icon: <Layers className="h-5 w-5" />,
    route: "/2"
  },
  {
    name: "wallet",
    icon: <Wallet className="h-5 w-5" />,
    route: ""
  },
  {
    name: "users",
    icon: <Users className="h-5 w-5" />,
    route: ""
  },
  {
    name: "settings",
    icon: <Settings className="h-5 w-5" />,
    route: ""
  },
]

export function Sidebar({ active }: Props) {

  const router = useRouter()
  return (
    <aside className="fixed left-0 top-0 h-full w-16 flex flex-col items-center py-4 bg-zinc-950 border-r border-zinc-800 z-10">
      <div className="p-2 mb-4 relative w-8 h-8">
        <Image
          src="/Axton.png"
          alt="Axton"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
      <nav className="flex flex-col items-center gap-4">

        {
          links.map((link) => {
            return (
              <button
                className={`p-3 ${active == link.name ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"}`}
                onClick={() => router.push(link.route)}
              >
                {link.icon}
              </button>
            )
          })
        }
      </nav>
    </aside>
  );
}
