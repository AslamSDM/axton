'use client';

import { useRouter } from "next/navigation";

type Props = {
    activeTab: string
}

export function TabBar({ activeTab }: Props): React.ReactElement {

    const router = useRouter();

    const tabs = [
        {
            name: "OTC Overview",
            route: "/dashboard/otc"
        },
        {
            name: "My Deals",
            route: "/dashboard/otc/mydeals"
        }
    ]

    return (
        <div className="w-full border-b border-zinc-800 p-0 mb-4">
            <div className="mx-auto flex space-x-8 relative">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        className={`
              relative py-4 px-1
              text-lg font-medium
              text-zinc-400 hover:text-white
              transition-colors duration-200 cursor-pointer
              ${activeTab === tab.name ? 'text-white' : ''}
            `}
                        onClick={() => router.push(tab.route)}
                    >
                        {tab.name}
                        {activeTab === tab.name && (
                            <div
                                className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-teal-400 to-blue-500"
                            ></div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}