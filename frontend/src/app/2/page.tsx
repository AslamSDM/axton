"use client";
import React from "react";
import { Sidebar } from "@/components/sidebar";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import LetterGlitch from "@/components/LetterGlitch";
import OverViewCard from "./_components/OverViewCard";
import { OTCListingTable } from "./_components/OTCListingTable";
import DealButton from "./_components/DealButton";
import { OTCMovementTable } from "./_components/OTCMovement";
import { OTCMarketDepth } from "./_components/OTCMarketDepth";
import { TabBar } from "./_components/TabBar";
// --- MAIN PAGE COMPONENT ---

function OTCPage() {
  return (
    <main className="px-8 py-6">
      <TabBar />
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
          {/* <GlobeVisualization /> */}
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
    <div className="relative min-h-screen text-white bg-black ">
      <div
        className="fixed inset-0 z-10"
        style={{
          background: `rgba(0, 0, 0, 0.67)`,
          backgroundImage: `repeating-linear-gradient(
            135deg,
            transparent,
            transparent 30px,
            rgba(255, 255, 255, 0.08) 20px,
            rgba(255, 255, 255, 0.08) 32px
          )`,
        }}
      />
      {/* Fixed background grid */}
      <div className="fixed inset-0 z-0 ">
        <div className="blur-xs h-full">
          {/* <FaultyTerminal
            scale={3}
            gridMul={[2, 1]}
            digitSize={1}
            timeScale={1}
            pause={false}
            scanlineIntensity={1}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0}
            tint="#7eff5aff"
            mouseReact={true}
            mouseStrength={0.5}
            pageLoadAnimation={false}
            brightness={1}
          /> */}

          <LetterGlitch
            glitchColors={["#ff0000", "#00ff00", "#0000ff"]}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
          <FlickeringGrid
            className="absolute inset-0 z-0 size-full"
            squareSize={2}
            gridGap={6}
            color="#7daa98ff"
            maxOpacity={0.3}
            flickerChance={0.5}
          />
        </div>
      </div>

      {/* Content layer */}
      <div className="relative z-10">
        <Sidebar active="otc" />
        <div className="ml-16">
          <Header />
          <OTCPage />
          <Footer />
        </div>
      </div>
    </div>
  );
}
