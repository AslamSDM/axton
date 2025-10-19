import React from "react";
import { AreaChart, Calendar, Users, File, Layers, Star } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CommunitySection } from "@/components/community-section";
import { StatCard } from "@/components/stat-card";
import { MarketOverviewTable } from "@/components/market-overview-table";
import { GlobeVisualization } from "@/components/globe-visualization";
import { ReferralStakingCards } from "@/components/referral-staking-cards";
import { OtcMovementsTable } from "@/components/otc-movements-table";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

// --- MAIN PAGE COMPONENT ---

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
          icon={AreaChart}
        />
        <StatCard
          title="DAILY WRAP COUNT"
          value="$1.23B"
          change="+ 0.23% (24H)"
          icon={Calendar}
        />
        <StatCard
          title="TOP TRADERS"
          value="$1.23B"
          change="+ 0.23% (24H)"
          icon={Users}
        />
        <StatCard
          title="ACTIVE PROPOSALS"
          value="$1.23B"
          change="+ 0.23% (24H)"
          icon={File}
        />
        <StatCard
          title="TOTAL LIQUIDITY"
          value="$1.23B"
          change="+ 0.23% (24H)"
          icon={Layers}
        />
        <StatCard
          title="AXN NET FLOW"
          value="$1.23B"
          change="+ 0.23% (24H)"
          icon={Star}
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

// --- The App Layout ---
export default function Page() {
  return (
    <div className="relative min-h-screen text-white font-sans">
      {/* Fixed background grid */}
      <div className="fixed inset-0 z-0">
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full"
          squareSize={2}
          gridGap={6}
          color="#7daa98ff"
          maxOpacity={0.3}
          flickerChance={0.5}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10">
        <Sidebar />
        <div className="ml-16">
          <Header />
          <DashboardPage />
          <CommunitySection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
