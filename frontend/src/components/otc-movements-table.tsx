"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tag } from "@/components/ui/tag";
import { otcMovements as initialOtcMovements } from "@/lib/data";
import { useEffect, useState } from "react";
import { useOtcStore } from "@/store/useOtcStore";
import { useLivePrices, formatLargeNumber } from "@/hooks/useLivePrices";

// Utility function to truncate addresses
const truncateAddress = (address: string, startChars = 6, endChars = 4) => {
  if (address.length <= startChars + endChars) return address;
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
};

export function OtcMovementsTable() {
  const movements = useOtcStore((state) => state.movements);
  const isConnected = useOtcStore((state) => state.isConnected);
  const setMovements = useOtcStore((state) => state.setMovements);
  const { prices } = useLivePrices();
  const [liveMovements, setLiveMovements] = useState(initialOtcMovements);

  // Initialize with default data if empty
  useEffect(() => {
    if (movements.length === 0) {
      setMovements(initialOtcMovements);
    }
  }, [movements.length, setMovements]);

  // Generate live movements with real prices
  useEffect(() => {
    const generateLiveMovements = () => {
      const tokens = ["BTC", "ETH", "BNB", "SOL", "USDT"];
      const tradeTypes = ["BUY", "SELL", "SWAP"];

      const newMovements: any[] = Array.from({ length: 10 }, (_, i) => {
        const token = tokens[Math.floor(Math.random() * tokens.length)];
        const tokenPrice =
          token === "BTC"
            ? prices.btc.price
            : token === "ETH"
            ? prices.eth.price
            : token === "BNB"
            ? prices.bnb.price
            : token === "SOL"
            ? prices.sol.price
            : prices.usdt.price;

        const amount = Math.floor(Math.random() * 100) + 10;
        const value = tokenPrice * amount;

        return {
          time: new Date(
            Date.now() - Math.random() * 3600000
          ).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
          token: `${amount.toFixed(2)} ${token}`,
          pair: `${token}/USDT`,
          tradeType: tradeTypes[Math.floor(Math.random() * tradeTypes.length)],
          buyer: `0x${Math.random().toString(16).slice(2, 12)}${Math.random()
            .toString(16)
            .slice(2, 12)}`,
          seller: `0x${Math.random().toString(16).slice(2, 12)}${Math.random()
            .toString(16)
            .slice(2, 12)}`,
          value: formatLargeNumber(value),
        };
      });

      setLiveMovements(newMovements);
    };

    if (prices.btc.price > 0) {
      generateLiveMovements();
      const interval = setInterval(generateLiveMovements, 15000); // Update every 15 seconds
      return () => clearInterval(interval);
    }
  }, [prices]);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white">Latest OTC Movements</h3>
        <div className="flex items-center gap-2 text-xs">
          <div
            className={`w-2 h-2  ${
              isConnected ? "bg-green-500 animate-pulse" : "bg-zinc-600"
            }`}
          />
          <span className="text-zinc-400">
            {isConnected ? "Live" : "Simulated"}
          </span>
        </div>
      </div>
      <Card className="backdrop-blur-sm p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-zinc-800 hover:bg-transparent bg-zinc-800/50">
                <TableHead className="text-zinc-400"></TableHead>
                <TableHead className="text-zinc-400">Time (UTC)</TableHead>
                <TableHead className="text-zinc-400">Token</TableHead>
                <TableHead className="text-zinc-400">Pair</TableHead>
                <TableHead className="text-zinc-400">Value</TableHead>
                <TableHead className="text-zinc-400">Trade Type</TableHead>
                <TableHead className="text-zinc-400">Buyer</TableHead>
                <TableHead className="text-zinc-400">Seller</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {liveMovements.map((item, index) => (
                <TableRow
                  key={`${item.time}-${index}`}
                  className="border-zinc-800 hover:bg-zinc-800/50 transition-colors"
                >
                  <TableCell className="text-zinc-500">{index + 1}</TableCell>
                  <TableCell className="text-zinc-300">{item.time}</TableCell>
                  <TableCell className="font-medium text-white">
                    {item.token}
                  </TableCell>
                  <TableCell className="text-zinc-300">{item.pair}</TableCell>
                  <TableCell className="text-green-400 font-mono font-semibold">
                    {item.value}
                  </TableCell>
                  <TableCell>
                    <Tag
                      variant={
                        item.tradeType.toLowerCase() as "buy" | "sell" | "swap"
                      }
                    >
                      {item.tradeType}
                    </Tag>
                  </TableCell>
                  <TableCell className="text-sky-400 font-medium font-mono">
                    {truncateAddress(item.buyer)}
                  </TableCell>
                  <TableCell className="text-sky-400 font-medium font-mono">
                    {truncateAddress(item.seller)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
