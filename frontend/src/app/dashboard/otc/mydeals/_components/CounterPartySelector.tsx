"use client";

import React, { useState } from 'react';
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function CounterpartySelector() {
    const [selectedOption, setSelectedOption] = useState("specific");
    const [walletAddress, setWalletAddress] = useState("");

    return (
        <div className="space-y-4 w-full bg-transparent mt-6">
            {/* Label */}
            <Label className="text-zinc-400 text-sm font-medium">
                Counterparty
            </Label>

            {/* Radio Group for Specific/Open Market */}
            <RadioGroup
                defaultValue="specific"
                value={selectedOption}
                onValueChange={setSelectedOption}
                className="flex space-x-6 mb-4"
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem
                        value="specific"
                        id="specific-counterparty"
                        className="text-teal-400 border-zinc-500 data-[state=checked]:bg-teal-400 data-[state=checked]:border-teal-400"
                    />
                    <Label htmlFor="specific-counterparty" className="text-white text-base font-mono">
                        Specific
                    </Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem
                        value="open-market"
                        id="open-market-counterparty"
                        className="text-teal-400 border-zinc-500 data-[state=checked]:bg-teal-400 data-[state=checked]:border-teal-400"
                    />
                    <Label htmlFor="open-market-counterparty" className="text-white text-base font-mono">
                        Open Market
                    </Label>
                </div>
            </RadioGroup>

            {/* Wallet Address Input (conditionally rendered) */}
            {selectedOption === "specific" && (
                <Input
                    type="text"
                    placeholder="Enter wallet address"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="w-full h-12 bg-transparent border border-zinc-600 text-white placeholder:text-zinc-500 px-4 font-mono focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 rounded-none"
                />
            )}
        </div>
    );
}