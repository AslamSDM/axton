"use client";

import React, { useState } from 'react';
// Mock Shadcn UI components for standalone demo
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui button
import { Input } from "@/components/ui/input";   // Assuming shadcn/ui input
import { Label } from "@/components/ui/label";     // Assuming shadcn/ui label

// --- Trade Type Button Component ---
interface TradeTypeButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
    defaultClass: string;
    activeClass: string;
}

const TradeTypeButton: React.FC<TradeTypeButtonProps> = ({
    label,
    isActive,
    onClick,
    defaultClass,
    activeClass,
}) => {
    return (
        <Button
            onClick={onClick}
            className={`
        flex-1 h-10 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-none
        ${isActive
                    ? `${defaultClass} ${activeClass}`
                    : `${defaultClass}`
                }
      `}
        >
            {label}
        </Button>
    );
};

interface LabeledInputWithUnitProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    unit?: string;
    id: string;
}

const LabeledInputWithUnit: React.FC<LabeledInputWithUnitProps> = ({
    label,
    value,
    onChange,
    placeholder,
    unit,
    id,
}) => {
    return (
        <div className="flex-1 space-y-2">
            <Label htmlFor={id} className="text-zinc-400 text-sm font-medium">
                {label}
            </Label>
            <div className="relative">
                <Input
                    id={id}
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full h-10 bg-transparent border border-zinc-600 text-white placeholder:text-zinc-500 pr-12 px-4 font-mono
                     focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 rounded-none"
                />
                {unit && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-sm font-mono">
                        {unit}
                    </span>
                )}
            </div>
        </div>
    );
};

interface TradeInputSectionProps {
}

export function TradeInputSection({ }: TradeInputSectionProps) {
    const [activeTradeType, setActiveTradeType] = useState("buy"); // Default to 'buy'
    const [amount, setAmount] = useState("");
    const [pricePerUnit, setPricePerUnit] = useState("");
    const [totalValue, setTotalValue] = useState("");

    return (
        <div className="space-y-6 w-full mt-6 bg-transparent">
            {/* Trade Type Section */}
            <div className="space-y-4">
                <Label className="text-zinc-400 text-sm font-medium">
                    Trade Type
                </Label>
                <div className="flex gap-3">
                    <TradeTypeButton
                        label="BUY"
                        isActive={activeTradeType === "buy"}
                        onClick={() => setActiveTradeType("buy")}
                        defaultClass='bg-green-700 hover:bg-green-900'
                        activeClass='border border-white-500'
                    />
                    <TradeTypeButton
                        label="SELL"
                        isActive={activeTradeType === "sell"}
                        onClick={() => setActiveTradeType("sell")}
                        defaultClass="bg-red-700 hover:bg-red-900"
                        activeClass="border border-white-500"
                    />
                    <TradeTypeButton
                        label="SWAP"
                        isActive={activeTradeType === "swap"}
                        onClick={() => setActiveTradeType("swap")}
                        defaultClass="bg-blue-700 hover:bg-blue-900"
                        activeClass='border border-white-500'
                    />
                </div>
            </div>

            {/* Amount Input Section */}
            <div className="space-y-4">
                <div className="flex gap-4">
                    <LabeledInputWithUnit
                        label="Amount"
                        id="amount-input"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        unit="BTS"
                    />
                    <LabeledInputWithUnit
                        label="Price per Unit"
                        id="price-per-unit-input"
                        value={pricePerUnit}
                        onChange={(e) => setPricePerUnit(e.target.value)}
                        placeholder="0.00"
                        unit="USD"
                    />
                    <LabeledInputWithUnit
                        label="Total Value"
                        id="total-value-input"
                        value={totalValue}
                        onChange={(e) => setTotalValue(e.target.value)}
                        placeholder="0.00"
                    />
                </div>
            </div>
        </div>
    );
}