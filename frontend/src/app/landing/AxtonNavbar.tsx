import { ConnectWallet } from "@/components/ConnectWallet";

const imgWhatsAppImage20251008At1630064Aed90101 =
  "/images/navbar_1.jpeg";

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
        </div>

        {/* Connect Wallet Button */}
        <ConnectWallet />
      </div>
    </header>
  );
}
