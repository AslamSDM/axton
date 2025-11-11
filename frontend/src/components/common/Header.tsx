"use client";
import React, { useState } from "react";
import { ConnectWallet } from "@/components/ConnectWallet";

// Close (X) Icon
// --- Header Component ---
export function Header(): React.ReactElement {
  return (
    <nav className="w-full text-white font-mono backdrop-blur-[2px]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Section - Menu Icon + Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Menu Button */}

            {/* Logo and Title */}
            <span className="text-2xl font-bold">Axton Protocol</span>
          </div>

          {/* Right Section - Connect Wallet */}
          <ConnectWallet />
        </div>
      </div>
    </nav>
  );
}
