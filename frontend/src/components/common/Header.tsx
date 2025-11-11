"use client";
import React, { useState } from "react";
import { ConnectWallet } from "@/components/ConnectWallet";

// Hamburger Menu Icon
const MenuIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

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
            <button
              className="text-[#2ef68d] hover:opacity-80 transition-opacity p-2"
              aria-label="Open menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>

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
