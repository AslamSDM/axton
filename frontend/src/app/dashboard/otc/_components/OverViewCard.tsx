import React from "react";

const ArrowUpIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-5 h-5"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
        />
    </svg>
);

const ArrowDownIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-5 h-5"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m0 0l-6.75-6.75M12 19.5l6.75-6.75"
        />
    </svg>
);

type Props = {
    pairName: string;
    price: string;
    change: number;
    icon1Url: string;
    icon2Url: string;
};

function OverViewCard({ pairName, price, change, icon1Url, icon2Url }: Props) {
    const changeColor = change > 0 ? "text-green-500" : "text-red-500";

    return (
        <div className="bg-zinc-800 relative overflow-hidden p-5 w-60">
            <div className="absolute inset-0 bg-[url('/images/earn_section_container_bg.png')] bg-blend-overlay bg-center bg-repeat bg-[length:100px_100px] opacity-10 z-0"></div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col gap-2">
                <div className="flex items-center space-x-1">
                    <div className="flex -space-x-2">
                        <img src={icon1Url} className="w-6 h-6 rounded-full border-2 border-zinc-800" />
                        <img src={icon2Url} className="w-6 h-6 rounded-full border-2 border-zinc-800" />
                    </div>
                    <div className="text-zinc-200 font-semibold text-xs">{pairName}</div>
                </div>
                <div className="flex justify-between space-x-3">
                    <div>
                        <div className="text-white text-xl">{price}</div>
                    </div>
                    <div className={`flex items-center space-x-1 ${changeColor} scale-70`}>
                        {change > 0 ? <ArrowUpIcon /> : <ArrowDownIcon />}
                        <span className="font-semibold">{change}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OverViewCard;
