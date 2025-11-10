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
            <button
              type="button"
              className="ml-2 sm:ml-6 bg-transparent hover:bg-gradient-to-r hover:from-[#2ef68d] hover:to-[#478ff5] px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <div className="flex items-center gap-2">
                {/* Terminal Icon */}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-4 sm:h-4"
                >
                  <path
                    d="M8 9L11 12L8 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 15H16"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="16"
                    rx="2"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
                <span className="font-['Space_Mono',monospace] font-bold text-[11px] sm:text-[12px] md:text-[14px] text-white tracking-[-0.02em] md:tracking-[-0.7px] whitespace-nowrap hidden sm:inline">
                  Open Terminal
                </span>
              </div>
            </button>
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
