"use client";
import React from "react";

import DealButton from "@/components/DealButton";
import { TabBar } from "@/components/TabBar";
import { ActiveDealsTable } from "./_components/ActiveDealsTable";
import { InitDealDrawer } from "./_components/InitDealDrawer";
import { useAccount } from "wagmi";
import { useUSDCBalance } from "@/hooks/useUSDCBalance";
import { Card, CardContent } from "@/components/ui/card";

function Page() {
  const { address, isConnected } = useAccount();
  const { balance, isLoading } = useUSDCBalance(address);

  const balanceNum = parseFloat(balance);
  const hasRequiredBalance = balanceNum >= 1000000;
  const canAccessDeals = isConnected && hasRequiredBalance;

  if (!isConnected) {
    return (
      <main className="px-8 py-6">
        <TabBar activeTab="My Deals" />
        <Card className="mt-8 backdrop-blur-sm border-zinc-800">
          <CardContent className="p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Wallet Not Connected
            </h2>
            <p className="text-zinc-400">
              Please connect your wallet to access My Deals
            </p>
          </CardContent>
        </Card>
      </main>
    );
  }

  if (!hasRequiredBalance && !isLoading) {
    return (
      <main className="px-8 py-6">
        <TabBar activeTab="My Deals" />
        <Card className="mt-8 backdrop-blur-sm border-zinc-800">
          <CardContent className="p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Insufficient Balance
            </h2>
            <p className="text-zinc-400 mb-2">
              Minimum balance required: 1,000,000 USDC
            </p>
            <p className="text-zinc-500 text-sm">
              Your balance: {balanceNum.toLocaleString()} USDC
            </p>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="px-8 py-6">
      <TabBar activeTab="My Deals" />

      <div className="flex justify-end w-full">
        <div className="w-80">
          {/* <DealButton /> */}
          <InitDealDrawer />
        </div>
      </div>

      <div className="flex">
        <ActiveDealsTable />
      </div>
    </main>
  );
}

export default Page;
