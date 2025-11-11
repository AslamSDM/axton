"use client";

import { useState } from "react";
import { ConnectWallet } from "@/components/ConnectWallet";
import { CustomSidebar } from "./CustomSidebar";

const imgLogo = "/images/navbar_1.jpeg";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xs">
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-[56px] lg:px-[100px] py-4 md:py-[26px]">
          {/* Left Section - Menu Button + Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Menu Button (Hamburger) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              aria-label="Open menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="#2ef68d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Logo Section */}
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                alt="Axton Logo"
                className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[39px] md:h-[39px] mix-blend-multiply object-cover"
                src={imgLogo}
              />
              <p className="font-['Space_Mono',monospace] font-bold text-[14px] sm:text-[16px] md:text-[20px] text-white tracking-[-0.05em] md:tracking-[-1px]">
                Axton Protocol
              </p>
            </div>

            {/* Terminal Button */}
          </div>

          {/* Right Section - Connect Wallet Button */}
          <ConnectWallet />
        </div>
      </header>

      {/* Custom Sidebar */}
      <CustomSidebar
        isOpen={isMenuOpen}
        onCloseAction={() => setIsMenuOpen(false)}
      />
    </>
  );
}
