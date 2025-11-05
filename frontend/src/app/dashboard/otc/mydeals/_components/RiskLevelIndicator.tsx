"use client";

import React, { useState } from 'react';
import { Label } from "@/components/ui/label"; // Assuming shadcn/ui label

interface RiskLevelIndicatorProps {
    riskPercentage: number;
}

export function RiskLevelIndicator({ riskPercentage }: RiskLevelIndicatorProps) {
    // Ensure percentage is between 0 and 100
    const clampedPercentage = Math.max(0, Math.min(100, riskPercentage));

    return (
        <div className="space-y-4 w-full mt-6 bg-transparent">
            {/* Title */}
            <Label className="text-zinc-400 text-sm font-medium">
                Risk Level
            </Label>

            {/* Background Track for the Bar */}
            <div className="h-2 rounded-full bg-zinc-800">
                {/* Gradient Bar with dynamic width */}
                <div
                    className="h-2 rounded-full"
                    style={{
                        width: `${clampedPercentage}%`,
                        background: 'linear-gradient(to right, #22c55e, #eab308, #ef4444)',
                        transition: 'width 0.3s ease-in-out',
                    }}
                ></div>
            </div>

            {/* Labels */}
            <div className="flex justify-between text-zinc-400 text-sm font-mono mt-2">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
            </div>
        </div>
    );
}