"use client";

import { useState, useEffect } from "react";

interface CryptoPrice {
  symbol: string;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
}

interface LivePricesData {
  btc: CryptoPrice;
  eth: CryptoPrice;
  bnb: CryptoPrice;
  sol: CryptoPrice;
  usdt: CryptoPrice;
  totalVolume: number;
  totalLiquidity: number;
  activeProposals: number;
  topTraders: number;
}

const COINGECKO_API = "https://api.coingecko.com/api/v3";

export function useLivePrices() {
  const [prices, setPrices] = useState<LivePricesData>({
    btc: { symbol: "BTC", price: 0, change24h: 0, volume24h: 0, marketCap: 0 },
    eth: { symbol: "ETH", price: 0, change24h: 0, volume24h: 0, marketCap: 0 },
    bnb: { symbol: "BNB", price: 0, change24h: 0, volume24h: 0, marketCap: 0 },
    sol: { symbol: "SOL", price: 0, change24h: 0, volume24h: 0, marketCap: 0 },
    usdt: {
      symbol: "USDT",
      price: 0,
      change24h: 0,
      volume24h: 0,
      marketCap: 0,
    },
    totalVolume: 0,
    totalLiquidity: 0,
    activeProposals: 0,
    topTraders: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrices = async () => {
    try {
      const response = await fetch(
        `${COINGECKO_API}/simple/price?ids=bitcoin,ethereum,binancecoin,solana,tether&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch prices");
      }

      const data = await response.json();

      // Calculate total volume from all coins
      const totalVol =
        (data.bitcoin?.usd_24h_vol || 0) +
        (data.ethereum?.usd_24h_vol || 0) +
        (data.binancecoin?.usd_24h_vol || 0) +
        (data.solana?.usd_24h_vol || 0);

      // Calculate total liquidity from market caps
      const totalLiq =
        (data.bitcoin?.usd_market_cap || 0) +
        (data.ethereum?.usd_market_cap || 0) +
        (data.binancecoin?.usd_market_cap || 0) +
        (data.solana?.usd_market_cap || 0);

      setPrices({
        btc: {
          symbol: "BTC",
          price: data.bitcoin?.usd || 0,
          change24h: data.bitcoin?.usd_24h_change || 0,
          volume24h: data.bitcoin?.usd_24h_vol || 0,
          marketCap: data.bitcoin?.usd_market_cap || 0,
        },
        eth: {
          symbol: "ETH",
          price: data.ethereum?.usd || 0,
          change24h: data.ethereum?.usd_24h_change || 0,
          volume24h: data.ethereum?.usd_24h_vol || 0,
          marketCap: data.ethereum?.usd_market_cap || 0,
        },
        bnb: {
          symbol: "BNB",
          price: data.binancecoin?.usd || 0,
          change24h: data.binancecoin?.usd_24h_change || 0,
          volume24h: data.binancecoin?.usd_24h_vol || 0,
          marketCap: data.binancecoin?.usd_market_cap || 0,
        },
        sol: {
          symbol: "SOL",
          price: data.solana?.usd || 0,
          change24h: data.solana?.usd_24h_change || 0,
          volume24h: data.solana?.usd_24h_vol || 0,
          marketCap: data.solana?.usd_market_cap || 0,
        },
        usdt: {
          symbol: "USDT",
          price: data.tether?.usd || 1,
          change24h: data.tether?.usd_24h_change || 0,
          volume24h: data.tether?.usd_24h_vol || 0,
          marketCap: data.tether?.usd_market_cap || 0,
        },
        totalVolume: totalVol,
        totalLiquidity: totalLiq,
        activeProposals: Math.floor(Math.random() * 1000) + 2000, // Simulated
        topTraders: Math.floor(Math.random() * 500) + 8000, // Simulated
      });

      setLoading(false);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchPrices();

    // Update every 30 seconds
    const interval = setInterval(fetchPrices, 30000);

    return () => clearInterval(interval);
  }, []);

  return { prices, loading, error, refetch: fetchPrices };
}

// Utility function to format price
export function formatPrice(price: number): string {
  if (price >= 1000) {
    return `$${price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }
  return `$${price.toFixed(2)}`;
}

// Utility function to format large numbers
export function formatLargeNumber(num: number): string {
  if (num >= 1e12) {
    return `$${(num / 1e12).toFixed(2)}T`;
  }
  if (num >= 1e9) {
    return `$${(num / 1e9).toFixed(2)}B`;
  }
  if (num >= 1e6) {
    return `$${(num / 1e6).toFixed(2)}M`;
  }
  if (num >= 1e3) {
    return `$${(num / 1e3).toFixed(2)}K`;
  }
  return `$${num.toFixed(2)}`;
}

// Utility function to format percentage
export function formatPercentage(change: number): string {
  const sign = change >= 0 ? "+" : "";
  return `${sign} ${change.toFixed(2)}% (24H)`;
}
