"use client";
import React, { useEffect } from "react";
import { EventMarquee } from "@/components/EventMarquee";
import { CommunityBar } from "@/components/community-section";
import { StatCard } from "@/components/stat-card";
import { MarketOverviewTable } from "@/components/market-overview-table";
import { GlobeVisualization } from "@/components/globe-visualization";
import { ReferralStakingCards } from "@/components/referral-staking-cards";
import { OtcMovementsTable } from "@/components/otc-movements-table";
import { InitDealDrawer } from "./otc/mydeals/_components/InitDealDrawer";
import {
  useOtcStore,
  startSimulation,
  stopSimulation,
} from "@/store/useOtcStore";

function DashboardPage() {
  const statCardData = useOtcStore((state) => state.statCardData);
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

  return (
    <main className="px-8 py-6">
      <h2 className="text-lg font-semibold text-zinc-400 mb-4">
        Advanced Decentralized Analytics
      </h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <StatCard
          title="TOTAL OTC VOLUME"
          value={statCardData?.totalOtcVolume || "Loading..."}
          change={statCardData?.totalOtcVolumeChange || ""}
          icon="/dollar.png"
        />
        <StatCard
          title="DAILY WRAP COUNT"
          value={statCardData?.dailyWrapCount || "Loading..."}
          change={statCardData?.dailyWrapCountChange || ""}
          icon="/dashboard.png"
        />
        <StatCard
          title="TOP TRADERS"
          value={statCardData?.topTraders || "Loading..."}
          change={statCardData?.topTradersChange || ""}
          icon="/toporders.png"
        />
        <StatCard
          title="ACTIVE PROPOSALS"
          value={statCardData?.activeProposals || "Loading..."}
          change={statCardData?.activeProposalsChange || ""}
          icon="/file.svg"
        />
        <StatCard
          title="TOTAL LIQUIDITY"
          value={statCardData?.totalLiquidity || "Loading..."}
          change={statCardData?.totalLiquidityChange || ""}
          icon="/piggy.png"
        />
        <StatCard
          title="NET FLOW"
          value={statCardData?.netFlow || "Loading..."}
          change={statCardData?.netFlowChange || ""}
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
