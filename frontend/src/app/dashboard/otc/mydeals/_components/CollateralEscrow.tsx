"use client";

import React, { useState } from 'react';
// Mock Shadcn UI components for standalone demo
import { Slider } from "@/components/ui/slider"; // Assuming shadcn/ui slider
import { Switch } from "@/components/ui/switch"; // Assuming shadcn/ui switch
import { Label } from "@/components/ui/label";   // Assuming shadcn/ui label

// --- Collateral & Escrow Component ---
interface CollateralEscrowProps {
    // Add props here if you want to control the state externally
}

export function CollateralEscrow({ }: CollateralEscrowProps) {
    const [collateralPercentage, setCollateralPercentage] = useState([120]);
    const [escrowProtection, setEscrowProtection] = useState(false);

    const recommendedCollateral = 120; // Example recommended value

    return (
        <div className="space-y-6 w-full mt-6 bg-transparent">
            {/* Title */}
            <Label className="text-zinc-400 text-sm font-medium">
                Collateral & Escrow
            </Label>

            <div className="flex flex-col gap-6">
                {/* Collateral Slider */}
                <div className="w-full flex justify-between items-center text-xs">
                    <Label htmlFor="collateral-slider" className="text-white text-xs font-mono">
                        Collateral %
                    </Label>
                    <span className="text-teal-400 text-xs font-mono">
                        Recommended: {recommendedCollateral}%
                    </span>
                </div>
                <div className="flex-1 space-y-2 w-full">
                    <Slider
                        id="collateral-slider"
                        min={100}
                        max={150}
                        step={5}
                        value={collateralPercentage}
                        onValueChange={setCollateralPercentage}
                        className="w-full relative py-2" // Add py-2 to give space for the thumb
                    />
                    <div className="flex justify-between text-zinc-400 text-sm font-mono mt-2">
                        <span>100 %</span>
                        <span className="text-blue-400">{collateralPercentage[0]} %</span>
                        <span>150 %</span>
                    </div>
                    <div className="flex items-center space-x-3 mt-4 md:mt-0">
                        <Switch
                            id="escrow-protection"
                            checked={escrowProtection}
                            onCheckedChange={setEscrowProtection}
                            className="group data-[state=checked]:bg-teal-500 data-[state=unchecked]:bg-zinc-700"
                        >
                            <span
                                className="
        pointer-events-none block h-5 w-5 rounded-full bg-zinc-300 transition-transform
        group-data-[state=checked]:translate-x-5 group-data-[state=checked]:bg-white
      "
                            />
                        </Switch>

                        <Label
                            htmlFor="escrow-protection"
                            className="text-white text-base font-mono cursor-pointer"
                        >
                            Escrow Protection
                        </Label>
                    </div>
                </div>

                {/* Escrow Protection Switch */}
            </div>
        </div>
    );
}