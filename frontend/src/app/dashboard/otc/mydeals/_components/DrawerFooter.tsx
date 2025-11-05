"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";


const GradientBorderButton: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({ children, className, onClick }) => {
    return (
        <button
            className={`relative inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium text-white rounded-none group bg-gradient-to-r from-green-400 to-blue-500 cursor-pointer ${className}`}
            onClick={onClick}
        >
            <span className="relative px-6 py-3 transition-all ease-out duration-300 rounded-md group-hover:bg-opacity-0">
                {children}
            </span>
        </button>
    );
};

// --- Fees Summary Component ---
interface FeesSummaryProps {
    platformFee: string;
    escrowFee: string;
    gasEstimate: string;
    totalFees: string;
    onDiscard?: () => void;
    onSeePreview?: () => void;
    onInitiateDeal?: () => void;
}

export function FeesSummary({
    platformFee,
    escrowFee,
    gasEstimate,
    totalFees,
    onDiscard,
    onSeePreview,
    onInitiateDeal,
}: FeesSummaryProps) {
    return (
        <div className="w-full space-y-4 mt-6 bg-transparent text-white">
            {/* Fees Breakdown */}
            <Label className="text-zinc-400 text-sm font-medium">Fees Breakdown</Label>
            <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Platform Fee</span>
                    <span className="text-teal-400">{platformFee}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Escrow Fee</span>
                    <span className="text-teal-400">{escrowFee}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Gas Estimate</span>
                    <span className="text-teal-400">{gasEstimate}</span>
                </div>
            </div>

            {/* Separator */}
            <div className="border-t border-zinc-800 my-4"></div>

            {/* Total Fees */}
            <div className="flex justify-between items-center text-base font-semibold font-mono">
                <Label className="text-zinc-300 text-lg">Total Fees</Label>
                <span className="text-teal-400 text-lg">{totalFees}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end items-center gap-4 pt-6">
                <Button variant="ghost" className="text-zinc-400 p-6 rounded-none hover:text-black cursor-pointer" onClick={onDiscard}>
                    Discard
                </Button>
                <Button variant="ghost" className="text-zinc-400 p-6 rounded-none hover:text-black cursor-pointer" onClick={onSeePreview}>
                    See Preview
                </Button>
                <GradientBorderButton onClick={onInitiateDeal}>
                    Initiate Deal
                </GradientBorderButton>
            </div>
        </div>
    );
}
