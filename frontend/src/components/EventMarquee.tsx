"use client";

import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Marquee } from "./ui/marquee";
import {
  useLivePrices,
  formatPrice,
  formatPercentage,
} from "@/hooks/useLivePrices";

export function EventMarquee() {
  const { prices, loading } = useLivePrices();

  const cryptoData = [
    { symbol: "BTC", name: "Bitcoin", data: prices.btc },
    { symbol: "ETH", name: "Ethereum", data: prices.eth },
    { symbol: "BNB", name: "BNB", data: prices.bnb },
    { symbol: "SOL", name: "Solana", data: prices.sol },
    { symbol: "USDT", name: "Tether", data: prices.usdt },
  ];

  if (loading) {
    return (
      <header className="py-3 flex justify-between items-center border-b border-zinc-800 bg-black">
        <div className="flex-1 overflow-hidden relative">
          <div className="text-center text-xs text-zinc-500 font-mono py-2">
            Loading live prices...
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="py-3 flex justify-between items-center border-b border-zinc-800 bg-black">
      <div className="flex-1 overflow-hidden relative">
        <Marquee pauseOnHover repeat={5} className="[--duration:60s]">
          {cryptoData.map((crypto, index) => {
            const isPositive = crypto.data.change24h >= 0;
            return (
              <Button
                key={`${crypto.symbol}-${index}`}
                variant="outline"
                className="text-xs px-4 py-2 flex-shrink-0 border-zinc-700 bg-black hover:bg-zinc-900 font-mono"
              >
                {isPositive ? (
                  <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500 mr-2" />
                )}
                <span className="text-zinc-400 mr-2">{crypto.symbol}</span>
                <span className="text-white font-semibold mr-2">
                  {formatPrice(crypto.data.price)}
                </span>
                <span
                  className={`ml-2 pl-2 border-l border-zinc-700 ${
                    isPositive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {formatPercentage(crypto.data.change24h)}
                </span>
              </Button>
            );
          })}
        </Marquee>
      </div>
    </header>
  );
}
