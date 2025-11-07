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
import { Button } from "@/components/ui/button";
import { Globe, Dot, RefreshCw } from "lucide-react";
import { marketData as fallbackData } from "@/lib/data";
import { useEffect, useState } from "react";
import { useBalanceCheck } from "@/hooks/useBalanceCheck";
import { toast } from "sonner";

type MarketData = {
  asset: string;
  symbol: string;
  price: number;
  volume: number;
  priceChange24h: number;
  marketCap: number;
  image?: string;
};

export function MarketOverviewTable() {
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const fetchMarketData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Using CoinGecko API - free, no API key required
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch market data");
      }

      const data = await response.json();

      const formattedData: MarketData[] = data.map((coin: any) => ({
        asset: coin.name,
        symbol: coin.symbol.toUpperCase(),
        price: coin.current_price,
        volume: coin.total_volume,
        priceChange24h: coin.price_change_percentage_24h || 0,
        marketCap: coin.market_cap,
        image: coin.image,
      }));

      setMarketData(formattedData);
      setLastUpdate(new Date());
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching market data:", err);
      setError("Failed to load market data");
      // Use fallback data on error
      setMarketData(
        fallbackData.map((item) => ({
          asset: item.asset,
          symbol: item.asset.split(" ")[0],
          price: item.price,
          volume: item.volume,
          priceChange24h: item.netFlow,
          marketCap: item.volume * 10,
        }))
      );
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();

    // Refresh data every 60 seconds
    const interval = setInterval(fetchMarketData, 60000);

    return () => clearInterval(interval);
  }, []);

  const { checkBalanceAndProceed } = useBalanceCheck();

  const handleTrade = (
    action: "BUY" | "SELL",
    asset: string,
    price: number
  ) => {
    checkBalanceAndProceed(() => {
      const actionText = action === "BUY" ? "Purchase" : "Sell";
      toast.success(`${actionText} Order Initiated`, {
        description: `Preparing to ${action.toLowerCase()} ${asset} at $${price.toLocaleString()}...`,
      });
      console.log(`${action} ${asset} at $${price}`);
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-white">Market Overview</h3>
        <div className="flex items-center gap-2">
          {error && <span className="text-xs text-red-400 mr-2">{error}</span>}
          <Button
            variant="ghost"
            size="sm"
            onClick={fetchMarketData}
            disabled={isLoading}
            className="h-7 px-2 text-xs text-zinc-400 hover:text-white"
          >
            <RefreshCw
              className={`h-3 w-3 ${isLoading ? "animate-spin" : ""}`}
            />
          </Button>
          <div className="flex items-center gap-1 text-green-500 text-sm font-medium">
            <Dot className="h-6 w-6 -ml-2" /> LIVE
          </div>
        </div>
      </div>
      <Card className="backdrop-blur-sm p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-zinc-800 hover:bg-transparent bg-zinc-800/50">
                <TableHead className="text-zinc-400">Asset</TableHead>
                <TableHead className="text-zinc-400">Price</TableHead>
                <TableHead className="text-zinc-400">Volume (24h)</TableHead>
                <TableHead className="text-zinc-400">Market Cap</TableHead>
                <TableHead className="text-zinc-400">24h Change</TableHead>
                <TableHead className="text-right text-zinc-400"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading && marketData.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center text-zinc-400 py-8"
                  >
                    Loading market data...
                  </TableCell>
                </TableRow>
              ) : (
                marketData.map((item, index) => (
                  <TableRow
                    key={`${item.symbol}-${index}`}
                    className="border-zinc-800 hover:bg-zinc-800/50 transition-colors"
                  >
                    <TableCell className="font-medium text-white">
                      <div className="flex items-center gap-3">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.asset}
                            className="w-6 h-6 "
                          />
                        ) : (
                          <div className="w-6 h-6  bg-zinc-700 flex items-center justify-center">
                            <Globe className="w-4 h-4 text-zinc-400" />
                          </div>
                        )}
                        <div>
                          <div>{item.asset}</div>
                          <div className="text-xs text-zinc-500">
                            {item.symbol}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-zinc-300 font-mono">
                      $
                      {item.price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </TableCell>
                    <TableCell className="text-zinc-300 font-mono">
                      $
                      {item.volume >= 1e9
                        ? `${(item.volume / 1e9).toFixed(2)}B`
                        : item.volume >= 1e6
                        ? `${(item.volume / 1e6).toFixed(2)}M`
                        : item.volume.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-zinc-300 font-mono">
                      $
                      {item.marketCap >= 1e9
                        ? `${(item.marketCap / 1e9).toFixed(2)}B`
                        : item.marketCap >= 1e6
                        ? `${(item.marketCap / 1e6).toFixed(2)}M`
                        : item.marketCap.toLocaleString()}
                    </TableCell>
                    <TableCell
                      className={`font-medium font-mono ${
                        item.priceChange24h > 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {item.priceChange24h > 0 ? "+" : ""}
                      {item.priceChange24h.toFixed(2)}%
                    </TableCell>
                    <TableCell className="text-right">
                      {item.priceChange24h > 0 ? (
                        <Button
                          variant="ghost"
                          className="px-6 py-1.5 bg-green-500/10 hover:bg-green-500/20 text-green-400 font-semibold"
                          onClick={() =>
                            handleTrade("BUY", item.asset, item.price)
                          }
                        >
                          BUY
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          className="px-6 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-semibold"
                          onClick={() =>
                            handleTrade("SELL", item.asset, item.price)
                          }
                        >
                          SELL
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
