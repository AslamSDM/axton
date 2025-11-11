"use client";
import React from "react";
import { EventMarquee } from "@/components/EventMarquee";
import { CommunityBar } from "@/components/community-section";
import { StatCard } from "@/components/stat-card";
import { MarketOverviewTable } from "@/components/market-overview-table";
import { GlobeVisualization } from "@/components/globe-visualization";
import { ReferralStakingCards } from "@/components/referral-staking-cards";
import { OtcMovementsTable } from "@/components/otc-movements-table";
import { InitDealDrawer } from "./otc/mydeals/_components/InitDealDrawer";
import {
  useLivePrices,
  formatLargeNumber,
  formatPercentage,
} from "@/hooks/useLivePrices";

function DashboardPage() {
  const { prices, loading } = useLivePrices();

  return (
    <main className="px-8 py-6">
      <h2 className="text-lg font-semibold text-zinc-400 mb-4">
        Advanced Decentralized Analytics
      </h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <StatCard
          title="TOTAL OTC VOLUME"
          value={loading ? "Loading..." : formatLargeNumber(prices.totalVolume)}
          change={loading ? "" : formatPercentage(prices.btc.change24h)}
          icon="/dollar.png"
        />
        <StatCard
          title="DAILY WRAP COUNT"
          value={
            loading
              ? "Loading..."
              : formatLargeNumber(prices.eth.volume24h / 1000)
          }
          change={loading ? "" : formatPercentage(prices.eth.change24h)}
          icon="/dashboard.png"
        />
        <StatCard
          title="TOP TRADERS"
          value={loading ? "Loading..." : prices.topTraders.toLocaleString()}
          change={loading ? "" : "+ 2.5% (24H)"}
          icon="/toporders.png"
        />
        <StatCard
          title="ACTIVE PROPOSALS"
          value={
            loading ? "Loading..." : prices.activeProposals.toLocaleString()
          }
          change={loading ? "" : "+ 1.8% (24H)"}
          icon="/file.svg"
        />
        <StatCard
          title="TOTAL LIQUIDITY"
          value={
            loading ? "Loading..." : formatLargeNumber(prices.totalLiquidity)
          }
          change={loading ? "" : formatPercentage(prices.bnb.change24h)}
          icon="/piggy.png"
        />
        <StatCard
          title="AXN NET FLOW"
          value={
            loading ? "Loading..." : formatLargeNumber(prices.sol.volume24h)
          }
          change={loading ? "" : formatPercentage(prices.sol.change24h)}
          icon="/netflow.png"
        />
      </div>

      {/* Market Overview & Globe */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <MarketOverviewTable />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <GlobeVisualization />
          <InitDealDrawer />
        </div>
      </div>

      {/* Referral & Staking */}
      <div className="mb-6">
        <ReferralStakingCards />
      </div>

      {/* Latest OTC Movements */}
      <OtcMovementsTable />
    </main>
  );
}

export default function Page() {
  return (
    <>
      <EventMarquee />
      <DashboardPage />
      <CommunityBar />
    </>
  );
}
