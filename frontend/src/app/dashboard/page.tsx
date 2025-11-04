"use client";
import React from "react";
import { EventMarquee } from "@/components/EventMarquee";
import { CommunityBar } from "@/components/community-section";
import { StatCard } from "@/components/stat-card";
import { MarketOverviewTable } from "@/components/market-overview-table";
import { GlobeVisualization } from "@/components/globe-visualization";
import { ReferralStakingCards } from "@/components/referral-staking-cards";
import { OtcMovementsTable } from "@/components/otc-movements-table";

function DashboardPage() {
  return (
    <main className="px-8 py-6">
      <h2 className="text-lg font-semibold text-zinc-400 mb-4">
        Advanced Decentralized Analytics
      </h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <StatCard
          title="TOTAL OTC VOLUME"
          value="$1.23B"
          change="+ 0.23% (24H)"
          icon="/dollar.png"
        />
        <StatCard
          title="DAILY WRAP COUNT"
          value="$1.23B"
          change="+ 0.23% (24H)"
          icon="/dashboard.png"
        />
        <StatCard
          title="TOP TRADERS"
          value="$1.23B"
          change="+ 0.23% (24H)"
          icon="/toporders.png"
        />
        <StatCard
          title="ACTIVE PROPOSALS"
          value="$1.23B"
          change="+ 0.23% (24H)"
          icon="/file.svg"
        />
        <StatCard
          title="TOTAL LIQUIDITY"
          value="$1.23B"
          change="+ 0.23% (24H)"
          icon="/piggy.png"
        />
        <StatCard
          title="AXN NET FLOW"
          value="$1.23B"
          change="+ 0.23% (24H)"
          icon="/netflow.png"
        />
      </div>

      {/* Market Overview & Globe */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <MarketOverviewTable />
        </div>
        <GlobeVisualization />
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
