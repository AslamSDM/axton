"use client";
import React from "react";
import OverViewCard from "./_components/OverViewCard";
import { OTCListingTable } from "./_components/OTCListingTable";
import DealButton from "../../../components/DealButton";
import { OTCMovementTable } from "./_components/OTCMovement";
import { OTCMarketDepth } from "./_components/OTCMarketDepth";
import { TabBar } from "../../../components/TabBar";

function OTCPage() {
  return (
    <main className="px-8 py-6">
      <TabBar activeTab="OTC Overview" />
      <div className="border-[1.25px] border-zinc-800 p-4 mb-4">

        <h2 className="text-lg font-semibold mb-4">
          Market Overview
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-start gap-2">
          <OverViewCard
            pairName="BTC/USD"
            price="$42,850"
            change={2.3}
            icon1Url="https://placehold.co/40x40/f97316/white?text=B" // Placeholder for Bitcoin
            icon2Url="https://placehold.co/40x40/26a17b/white?text=T" // Placeholder for Tether
          />
          <OverViewCard
            pairName="ETH/USD"
            price="$3,512"
            change={2.3}
            icon1Url="https://placehold.co/40x40/f97316/white?text=E" // Placeholder for Bitcoin
            icon2Url="https://placehold.co/40x40/26a17b/white?text=U" // Placeholder for Tether
          />
          <OverViewCard
            pairName="BTC/USD"
            price="$42,850"
            change={2.3}
            icon1Url="https://placehold.co/40x40/f97316/white?text=B" // Placeholder for Bitcoin
            icon2Url="https://placehold.co/40x40/26a17b/white?text=T" // Placeholder for Tether
          />
          <OverViewCard
            pairName="BTC/USD"
            price="$42,850"
            change={2.3}
            icon1Url="https://placehold.co/40x40/f97316/white?text=B" // Placeholder for Bitcoin
            icon2Url="https://placehold.co/40x40/26a17b/white?text=T" // Placeholder for Tether
          />
          <OverViewCard
            pairName="BTC/USD"
            price="$42,850"
            change={2.3}
            icon1Url="https://placehold.co/40x40/f97316/white?text=B" // Placeholder for Bitcoin
            icon2Url="https://placehold.co/40x40/26a17b/white?text=T" // Placeholder for Tether
          />
          <OverViewCard
            pairName="BTC/USD"
            price="$42,850"
            change={2.3}
            icon1Url="https://placehold.co/40x40/f97316/white?text=B" // Placeholder for Bitcoin
            icon2Url="https://placehold.co/40x40/26a17b/white?text=T" // Placeholder for Tether
          />
        </div>
      </div>

      {/* Market Overview & Globe */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 border-[1.25px] border-zinc-800 p-6">
          <OTCListingTable />
        </div>
        <div className="flex flex-col gap-4">
          <DealButton />
          <OTCMarketDepth />
        </div>
      </div>

      <OTCMovementTable />

    </main>
  );
}

// --- The App Layout ---
export default function Page() {
  return (
    <OTCPage />
  );
}
