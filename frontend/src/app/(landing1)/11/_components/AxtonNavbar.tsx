import { ConnectWallet } from "@/components/ConnectWallet";
import Link from "next/link";

const imgWhatsAppImage20251008At1630064Aed90101 = "/images/navbar_1.jpeg";

interface AxtonNavbarProps {
  onMenuClick?: () => void;
}

export default function AxtonNavbar({ onMenuClick }: AxtonNavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xs">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-[56px] lg:px-[100px] py-4 md:py-[26px]">
        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Menu Button */}
          {onMenuClick && (
            <button
              onClick={onMenuClick}
              className="mr-1 sm:mr-2 flex items-center gap-2 hover:opacity-80 transition-opacity"
              aria-label="Open menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-6 sm:h-6"
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
          )}

          <img
            alt="Axton Logo"
            className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[39px] md:h-[39px] mix-blend-exclusion object-cover"
            src={imgWhatsAppImage20251008At1630064Aed90101}
          />
          <p className="font-['Space_Mono',monospace] font-bold text-[14px] sm:text-[16px] md:text-[20px] text-white tracking-[-0.05em] md:tracking-[-1px]">
            Axton Protocol
          </p>
          <button
            // onClick={() => router.push("/dashboard")}
            type="button"
            className="ml-10 bg-transparent hover:bg-gradient-to-r hover:from-[#2ef68d] hover:to-[#478ff5] px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
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

        {/* Connect Wallet Button */}
        <ConnectWallet />
      </div>
    </header>
  );
}
