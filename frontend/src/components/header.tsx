"use client";

import { Button } from "@/components/ui/button";
import { Dot, Wallet, Bell } from "lucide-react";
import { useEffect } from "react";
import {
  useOtcStore,
  startSimulation,
  stopSimulation,
} from "@/store/useOtcStore";
import { Marquee } from "./ui/marquee";

// Utility function to truncate addresses
const truncateAddress = (address: string, startChars = 6, endChars = 4) => {
  if (address.length <= startChars + endChars) return address;
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
};

export function Header() {
  const transactions = useOtcStore((state) => state.transactions);
  const isConnected = useOtcStore((state) => state.isConnected);
  const connect = useOtcStore((state) => state.connect);
  const disconnect = useOtcStore((state) => state.disconnect);

  useEffect(() => {
    // Connect to WebSocket
    connect();

    // Start simulation if WebSocket fails
    startSimulation();

    // Cleanup on unmount
    return () => {
      disconnect();
      stopSimulation();
    };
  }, [connect, disconnect]);

  // Get color based on trade type
  const getTradeTypeColor = (type: string) => {
    switch (type.toUpperCase()) {
      case "BUY":
      case "STAKE":
        return "text-green-400";
      case "SELL":
        return "text-red-400";
      case "SWAP":
        return "text-blue-400";
      case "TRANSFER":
        return "text-purple-400";
      default:
        return "text-zinc-400";
    }
  };

  const getDotColor = (type: string) => {
    switch (type.toUpperCase()) {
      case "BUY":
      case "STAKE":
        return "text-green-500";
      case "SELL":
        return "text-red-500";
      case "SWAP":
        return "text-blue-500";
      case "TRANSFER":
        return "text-purple-500";
      default:
        return "text-zinc-500";
    }
  };

  return (
    <header className=" py-3 flex justify-between items-center border-b border-zinc-800 bg-black">
      <div className="flex-1 overflow-hidden relative ">
        <Marquee pauseOnHover repeat={10} className="[--duration:2000s]">
          {" "}
          {/* Render transactions 3 times for seamless loop */}
          {/* Render transactions 3 times for seamless loop */}
          {transactions
            .concat(transactions)
            .concat(transactions)
            .map((tx, index) => (
              <Button
                key={`${tx.buyer}-${tx.seller}-${tx.time}-${index}`}
                variant="outline"
                className="text-xs px-3 py-2 flex-shrink-0 border-zinc-700 bg-black hover:bg-zinc-900 font-mono"
              >
                <Dot className={`h-6 w-6 ${getDotColor(tx.tradeType)} -ml-2`} />
                {truncateAddress(tx.buyer)} | {truncateAddress(tx.seller)} |{" "}
                {tx.amount} {tx.token}
                <span
                  className={`ml-2 pl-2 border-l border-zinc-700 ${getTradeTypeColor(
                    tx.tradeType
                  )}`}
                >
                  {tx.tradeType}
                </span>
              </Button>
            ))}
        </Marquee>
      </div>
    </header>
  );
}
