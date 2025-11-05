"use client";

import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { formatUnits } from "viem";
import { useUSDCBalance } from "@/hooks/useUSDCBalance";
import { toast } from "sonner";

// function InitDealDrawer() {
//   return (
//     <div>InitDealDrawer</div>
//   )
// }

// export default InitDealDrawer

import { Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import DealButton from "@/components/DealButton";
import { LabeledDropdown } from "./LabeledDropdown";
import { CounterpartySelector } from "./CounterPartySelector";
import { TradeInputSection } from "./TradeInputSelection";
import { CollateralEscrow } from "./CollateralEscrow";
import { SettlementSchedule } from "./SettlementSchedule";
import { RiskLevelIndicator } from "./RiskLevelIndicator";
import { FeesSummary } from "./DrawerFooter";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export function InitDealDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { address, isConnected } = useAccount();
  const { balance: usdcBalance, isLoading: isCheckingBalance } =
    useUSDCBalance(address);

  // Deal Configuration State
  const [selectedAsset, setSelectedAsset] = useState("BTC");
  const [tradeType, setTradeType] = useState<"BUY" | "SELL" | "SWAP">("BUY");
  const [amount, setAmount] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState("");
  const [counterpartyType, setCounterpartyType] = useState<"specific" | "open-market">("specific");
  const [counterpartyAddress, setCounterpartyAddress] = useState("");
  const [collateralPercentage, setCollateralPercentage] = useState(120);
  const [escrowProtection, setEscrowProtection] = useState(false);
  const [settlementSchedule, setSettlementSchedule] = useState<"Instant" | "24H" | "Custom">("Instant");
  const [customDate, setCustomDate] = useState("");
  const [customTime, setCustomTime] = useState("");

  const REQUIRED_USDC_BALANCE = 1000000; // 1,000,000 USDC
  const hasRequiredBalance = parseFloat(usdcBalance) >= REQUIRED_USDC_BALANCE;

  // Dynamic Calculations
  const calculateTotalValue = () => {
    const amountNum = parseFloat(amount) || 0;
    const priceNum = parseFloat(pricePerUnit) || 0;
    return amountNum * priceNum;
  };

  const calculateCollateralAmount = () => {
    const totalValue = calculateTotalValue();
    return (totalValue * collateralPercentage) / 100;
  };

  const calculatePlatformFee = () => {
    const totalValue = calculateTotalValue();
    return totalValue * 0.0025; // 0.25%
  };

  const calculateEscrowFee = () => {
    if (!escrowProtection) return 0;
    const totalValue = calculateTotalValue();
    return totalValue * 0.0015; // 0.15%
  };

  const calculateGasEstimate = () => {
    // Base gas + additional if escrow protection
    let baseGas = 12.50;
    if (escrowProtection) baseGas += 5.00;
    if (settlementSchedule === "Custom") baseGas += 2.50;
    return baseGas;
  };

  const calculateTotalFees = () => {
    return calculatePlatformFee() + calculateEscrowFee() + calculateGasEstimate();
  };

  const calculateRiskLevel = () => {
    let risk = 0;
    
    // Base risk on trade type
    if (tradeType === "SWAP") risk += 30;
    if (tradeType === "SELL") risk += 20;
    if (tradeType === "BUY") risk += 10;
    
    // Risk based on collateral
    if (collateralPercentage < 110) risk += 30;
    else if (collateralPercentage < 120) risk += 20;
    else risk += 10;
    
    // Risk based on counterparty
    if (counterpartyType === "open-market") risk += 25;
    else risk += 5;
    
    // Risk based on settlement
    if (settlementSchedule === "Instant") risk += 5;
    else if (settlementSchedule === "24H") risk += 15;
    else risk += 25;
    
    // Add escrow protection benefit
    if (escrowProtection) risk -= 15;
    
    return Math.max(0, Math.min(100, risk));
  };

  const totalValue = calculateTotalValue();
  const collateralAmount = calculateCollateralAmount();
  const platformFee = calculatePlatformFee();
  const escrowFee = calculateEscrowFee();
  const gasEstimate = calculateGasEstimate();
  const totalFees = calculateTotalFees();
  const riskLevel = calculateRiskLevel();

  // Mock price data for assets
  const assetPrices: Record<string, { price: number; change: number; liquidity: string }> = {
    BTC: { price: 45200, change: 2.34, liquidity: "12.4M" },
    ETH: { price: 3450, change: -1.23, liquidity: "8.2M" },
    SOL: { price: 150, change: 5.67, liquidity: "4.5M" },
    USDC: { price: 1, change: 0, liquidity: "25.8M" },
  };

  const currentAssetData = assetPrices[selectedAsset] || assetPrices.BTC;

  const handleOpenChange = (open: boolean) => {
    if (open && !isConnected) {
      toast.error("Wallet Not Connected", {
        description: "Please connect your wallet first to initiate an OTC deal",
      });
      return;
    }
    setIsOpen(open);
  };

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={handleOpenChange}>
      <DrawerTrigger asChild>
        <DealButton />
      </DrawerTrigger>
      <DrawerContent className="bg-[#0C0C0E] text-white border-none px-4 py-2 data-[vaul-drawer-direction=right]:max-w-[700px]! w-[90vw]! overflow-clip overflow-y-auto">
        <div className="mx-auto w-full text-white">
          <DrawerHeader>
            <DrawerTitle className="text-white">Deal Configuration</DrawerTitle>
          </DrawerHeader>

          {/* Balance Check Section */}
          {isCheckingBalance ? (
            <div className="p-4 bg-zinc-800/50 rounded-lg mx-4 mb-4">
              <p className="text-sm text-zinc-400">Checking USDC balance...</p>
            </div>
          ) : !hasRequiredBalance ? (
            <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-lg mx-4 mb-4">
              <p className="text-sm text-red-400 font-semibold mb-1">
                Insufficient Balance
              </p>
              <p className="text-xs text-red-300">
                You need at least {REQUIRED_USDC_BALANCE.toLocaleString()} USDC
                to create an OTC deal.
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Current balance: {parseFloat(usdcBalance).toLocaleString()} USDC
              </p>
            </div>
          ) : (
            <div className="p-4 bg-green-900/20 border border-green-500/50 rounded-lg mx-4 mb-4">
              <p className="text-sm text-green-400 font-semibold mb-1">
                ✓ Balance Verified
              </p>
              <p className="text-xs text-zinc-400">
                Balance: {parseFloat(usdcBalance).toLocaleString()} USDC
              </p>
            </div>
          )}

          <div className="space-y-2 w-full p-4 bg-transparent">
            <LabeledDropdown
              label="Asset"
              options={["BTC", "ETH", "SOL", "USDC"]}
              defaultValue={selectedAsset}
              onValueChange={(value) => setSelectedAsset(value)}
            />
            <div className="flex justify-between items-center text-sm">
              <span className={`font-medium ${currentAssetData.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                24h Price: {currentAssetData.change >= 0 ? '+' : ''}{currentAssetData.change.toFixed(2)}%
              </span>
              <span className="text-blue-400 font-medium">
                Liquidity: ${currentAssetData.liquidity}
              </span>
            </div>
            
            {/* Trade Input Section with Dynamic State */}
            <div className="space-y-6 w-full mt-6 bg-transparent">
              <div className="space-y-4">
                <Label className="text-zinc-400 text-sm font-medium">
                  Trade Type
                </Label>
                <div className="flex gap-3">
                  {(["BUY", "SELL", "SWAP"] as const).map((type) => (
                    <Button
                      key={type}
                      onClick={() => setTradeType(type)}
                      className={`flex-1 h-10 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-none ${
                        tradeType === type
                          ? "bg-zinc-700 border-zinc-500 text-white"
                          : "bg-transparent border-zinc-800 text-zinc-400"
                      }`}
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <Label className="text-zinc-400 text-sm font-medium">Amount</Label>
                  <div className="relative">
                    <Input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full h-10 bg-transparent border border-zinc-600 text-white placeholder:text-zinc-500 pr-12 px-4 font-mono focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 rounded-none"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-sm font-mono">
                      {selectedAsset}
                    </span>
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <Label className="text-zinc-400 text-sm font-medium">Price per Unit</Label>
                  <div className="relative">
                    <Input
                      type="text"
                      value={pricePerUnit}
                      onChange={(e) => setPricePerUnit(e.target.value)}
                      placeholder={currentAssetData.price.toString()}
                      className="w-full h-10 bg-transparent border border-zinc-600 text-white placeholder:text-zinc-500 pr-12 px-4 font-mono focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 rounded-none"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-sm font-mono">
                      USD
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-zinc-900/50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400 text-sm">Total Value</span>
                  <span className="text-green-400 text-lg font-mono font-bold">
                    ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>

            {/* Counterparty Selector with Dynamic State */}
            <div className="space-y-4 w-full bg-transparent mt-6">
              <Label className="text-zinc-400 text-sm font-medium">
                Counterparty
              </Label>
              <div className="flex space-x-6 mb-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="specific-counterparty"
                    checked={counterpartyType === "specific"}
                    onChange={() => setCounterpartyType("specific")}
                    className="text-teal-400"
                  />
                  <Label htmlFor="specific-counterparty" className="text-white text-base font-mono">
                    Specific
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="open-market-counterparty"
                    checked={counterpartyType === "open-market"}
                    onChange={() => setCounterpartyType("open-market")}
                    className="text-teal-400"
                  />
                  <Label htmlFor="open-market-counterparty" className="text-white text-base font-mono">
                    Open Market
                  </Label>
                </div>
              </div>
              {counterpartyType === "specific" && (
                <Input
                  type="text"
                  placeholder="Enter wallet address"
                  value={counterpartyAddress}
                  onChange={(e) => setCounterpartyAddress(e.target.value)}
                  className="w-full h-12 bg-transparent border border-zinc-600 text-white placeholder:text-zinc-500 px-4 font-mono focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 rounded-none"
                />
              )}
            </div>

            {/* Collateral & Escrow with Dynamic State */}
            <div className="space-y-6 w-full mt-6 bg-transparent">
              <Label className="text-zinc-400 text-sm font-medium">
                Collateral & Escrow
              </Label>
              <div className="flex flex-col gap-6">
                <div className="w-full flex justify-between items-center text-xs">
                  <Label className="text-white text-xs font-mono">
                    Collateral %
                  </Label>
                  <span className="text-teal-400 text-xs font-mono">
                    Amount: ${collateralAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex-1 space-y-2 w-full">
                  <input
                    type="range"
                    min="100"
                    max="150"
                    step="5"
                    value={collateralPercentage}
                    onChange={(e) => setCollateralPercentage(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-zinc-400 text-sm font-mono mt-2">
                    <span>100 %</span>
                    <span className="text-blue-400">{collateralPercentage} %</span>
                    <span>150 %</span>
                  </div>
                  <div className="flex items-center space-x-3 mt-4">
                    <input
                      type="checkbox"
                      id="escrow-protection"
                      checked={escrowProtection}
                      onChange={(e) => setEscrowProtection(e.target.checked)}
                      className="w-5 h-5"
                    />
                    <Label
                      htmlFor="escrow-protection"
                      className="text-white text-base font-mono cursor-pointer"
                    >
                      Escrow Protection {escrowProtection && `(+$${escrowFee.toFixed(2)} fee)`}
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            {/* Settlement Schedule with Dynamic State */}
            <div className="space-y-4 w-full mt-6 bg-transparent">
              <Label className="text-zinc-400 text-sm font-medium">
                Settlement Schedule
              </Label>
              <div className="flex space-x-2">
                {(["Instant", "24H", "Custom"] as const).map((schedule) => (
                  <Button
                    key={schedule}
                    variant="outline"
                    className={`px-4 py-2 rounded-none border text-sm font-mono transition-colors hover:text-white ${
                      settlementSchedule === schedule
                        ? "bg-zinc-700 border-zinc-500 text-white"
                        : "bg-transparent border-zinc-800 text-zinc-400"
                    }`}
                    onClick={() => setSettlementSchedule(schedule)}
                  >
                    {schedule}
                  </Button>
                ))}
              </div>
              {settlementSchedule === "Custom" && (
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                  <div className="flex-1 space-y-2">
                    <Label className="text-zinc-400 text-base font-mono">Date</Label>
                    <Input
                      type="date"
                      value={customDate}
                      onChange={(e) => setCustomDate(e.target.value)}
                      className="w-full h-12 bg-transparent border border-zinc-600 text-white px-4 font-mono focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 rounded-none"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label className="text-zinc-400 text-base font-mono">Time</Label>
                    <Input
                      type="time"
                      value={customTime}
                      onChange={(e) => setCustomTime(e.target.value)}
                      className="w-full h-12 bg-transparent border border-zinc-600 text-white px-4 font-mono focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 rounded-none"
                    />
                  </div>
                </div>
              )}
            </div>

            <RiskLevelIndicator riskPercentage={riskLevel} />
          </div>
          <DrawerFooter>
            <FeesSummary
              platformFee={`$${platformFee.toFixed(2)}`}
              escrowFee={`$${escrowFee.toFixed(2)}`}
              gasEstimate={`$${gasEstimate.toFixed(2)}`}
              totalFees={`$${totalFees.toFixed(2)}`}
              onDiscard={() => setIsOpen(false)}
              onSeePreview={() => {
                if (!hasRequiredBalance) {
                  toast.error("Insufficient Balance", {
                    description: `You need at least ${REQUIRED_USDC_BALANCE.toLocaleString()} USDC to proceed. Current balance: ${parseFloat(
                      usdcBalance
                    ).toLocaleString()} USDC`,
                  });
                  return;
                }
                toast.success("Preview Loading", {
                  description: "Loading deal preview...",
                });
                console.log("See Preview clicked");
              }}
              onInitiateDeal={() => {
                if (!hasRequiredBalance) {
                  toast.error("Insufficient Balance", {
                    description: `You need at least ${REQUIRED_USDC_BALANCE.toLocaleString()} USDC to create a deal. Current balance: ${parseFloat(
                      usdcBalance
                    ).toLocaleString()} USDC`,
                  });
                  return;
                }
                toast.success("Deal Initiated", {
                  description: "Your OTC deal has been successfully initiated!",
                });
                console.log("Initiate Deal clicked");
              }}
            />
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
