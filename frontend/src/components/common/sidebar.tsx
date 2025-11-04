"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

type Link = {
  name: string
  icon: React.ReactNode;
  route: string
}

const links: Link[] = [
  {
    name: "dashboard",
    icon: <img src="/images/dashboard/sidebar_1.svg" className="w-5 h-5" />,
    route: "/dashboard"
  },
  {
    name: "otc",
    icon: <img src="/images/dashboard/sidebar_2.svg" className="w-5 h-5" />,
    route: "/dashboard/otc"
  },
  {
    name: "wallet",
    icon: <img src="/images/dashboard/sidebar_3.svg" className="w-5 h-5" />,
    route: ""
  },
]

export function Sidebar() {


  const router = useRouter()
  const pathname = usePathname();

  console.log(pathname)

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
                key={link.name}
                className={`p-3 ${pathname == link.route ? "bg-zinc-800 text-white border-l-4 border-blue-400" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"}`}
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
