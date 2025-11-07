"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useSwitchChain } from "wagmi";
import { bsc } from "wagmi/chains";

export function ConnectWallet() {
  const router = useRouter();
  const pathname = usePathname();
  const [showTerminalButton, setShowTerminalButton] = useState(true);
  const { switchChain } = useSwitchChain();

  // Check if user is on dashboard
  const isOnDashboard = pathname?.startsWith("/dashboard");
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        // Show terminal button after wallet connection with delay
        // Don't show on dashboard
        useEffect(() => {
          if (!isOnDashboard) {
            setShowTerminalButton(true);
          } else {
            setShowTerminalButton(false);
          }
        }, [connected, isOnDashboard]);

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
            className="flex gap-2"
          >
            {/* Trade on Aster Button */}
            <Link
              href="https://www.asterdex.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <button type="button" className="relative group">
                <div className="relative backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.8)] border border-[#2ef68d] px-4 sm:px-6 py-0 sm:py-0 rounded-sm flex items-center justify-center">
                  <img
                    src="https://static.asterdexstatic.com/cloud-futures/static/images/aster/logo.svg"
                    alt="Aster Logo"
                    className="w-20 h-12 object-contain"
                  />
                </div>
              </button>
            </Link>
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2ef68d] to-[#478ff5] rounded-sm blur-sm group-hover:blur-md transition-all" />
                    <div className="relative backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.8)] border border-[#2ef68d] px-4 sm:px-6 py-2 sm:py-3 rounded-sm">
                      <span className="font-['Space_Mono',monospace] font-bold text-[11px] sm:text-[12px] md:text-[14px] text-white tracking-[-0.02em] md:tracking-[-0.7px] whitespace-nowrap">
                        Connect Wallet
                      </span>
                    </div>
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={() => {
                      // Automatically switch to BSC mainnet
                      if (switchChain) {
                        switchChain({ chainId: bsc.id });
                      } else {
                        openChainModal();
                      }
                    }}
                    type="button"
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-sm blur-sm group-hover:blur-md transition-all" />
                    <div className="relative backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.8)] border border-red-500 px-4 sm:px-6 py-2 sm:py-3 rounded-sm">
                      <span className="font-['Space_Mono',monospace] font-bold text-[11px] sm:text-[12px] md:text-[14px] text-white tracking-[-0.02em] md:tracking-[-0.7px] whitespace-nowrap">
                        Switch to BSC
                      </span>
                    </div>
                  </button>
                );
              }

              return (
                <div className="flex gap-2 sm:gap-3">
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="relative group hidden sm:block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2ef68d] to-[#478ff5] rounded-sm blur-sm group-hover:blur-md transition-all" />
                    <div className="relative backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.8)] border border-[#2ef68d] px-3 sm:px-4 py-2 sm:py-3 rounded-sm flex items-center gap-2">
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 14,
                            height: 14,
                            borderRadius: 999,
                            overflow: "hidden",
                          }}
                          className="sm:w-4 sm:h-4"
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              style={{ width: "100%", height: "100%" }}
                            />
                          )}
                        </div>
                      )}
                      <span className="font-['Space_Mono',monospace] text-[10px] sm:text-[11px] md:text-[12px] text-white tracking-[-0.02em] md:tracking-[-0.6px] whitespace-nowrap">
                        {chain.name}
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2ef68d] to-[#478ff5] rounded-sm blur-sm group-hover:blur-md transition-all" />
                    <div className="relative backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.8)] border border-[#2ef68d] px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-sm">
                      <span className="font-['Space_Mono',monospace] text-[10px] sm:text-[11px] md:text-[12px] text-white tracking-[-0.02em] md:tracking-[-0.6px] whitespace-nowrap">
                        {account.displayName}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
