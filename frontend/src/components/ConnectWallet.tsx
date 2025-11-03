"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export function ConnectWallet() {
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
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2ef68d] to-[#478ff5] rounded-sm blur-sm group-hover:blur-md transition-all" />
                    <div className="relative backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.8)] border border-[#2ef68d] px-6 py-3 rounded-sm">
                      <span className="font-['Space_Mono',monospace] font-bold text-[14px] text-white tracking-[-0.7px]">
                        Connect Wallet
                      </span>
                    </div>
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-sm blur-sm group-hover:blur-md transition-all" />
                    <div className="relative backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.8)] border border-red-500 px-6 py-3 rounded-sm">
                      <span className="font-['Space_Mono',monospace] font-bold text-[14px] text-white tracking-[-0.7px]">
                        Wrong network
                      </span>
                    </div>
                  </button>
                );
              }

              return (
                <div className="flex gap-3">
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2ef68d] to-[#478ff5] rounded-sm blur-sm group-hover:blur-md transition-all" />
                    <div className="relative backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.8)] border border-[#2ef68d] px-4 py-3 rounded-sm flex items-center gap-2">
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 16,
                            height: 16,
                            borderRadius: 999,
                            overflow: "hidden",
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              style={{ width: 16, height: 16 }}
                            />
                          )}
                        </div>
                      )}
                      <span className="font-['Space_Mono',monospace] text-[12px] text-white tracking-[-0.6px]">
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
                    <div className="relative backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.8)] border border-[#2ef68d] px-6 py-3 rounded-sm">
                      <span className="font-['Space_Mono',monospace] text-[12px] text-white tracking-[-0.6px]">
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
