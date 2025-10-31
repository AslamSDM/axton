const imgWhatsAppImage20251008At1630064Aed90101 =
  "https://www.figma.com/api/mcp/asset/55a9350c-eff8-43a5-9d71-2bb6e766a97b";

interface AxtonNavbarProps {
  onMenuClick?: () => void;
}

export default function AxtonNavbar({ onMenuClick }: AxtonNavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b0d]/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-[56px] lg:px-[100px] py-[26px]">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          {/* Menu Button */}
          {onMenuClick && (
            <button
              onClick={onMenuClick}
              className="mr-2 flex items-center gap-2 hover:opacity-80 transition-opacity"
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
          )}

          <img
            alt="Axton Logo"
            className="w-[39px] h-[39px] mix-blend-exclusion object-cover"
            src={imgWhatsAppImage20251008At1630064Aed90101}
          />
          <p className="font-['Space_Mono',monospace] font-bold text-[20px] text-white tracking-[-1px]">
            Axton Protocol
          </p>
        </div>

        {/* Connect Wallet Button */}
        <button className="border border-[#2ef68d] px-6 py-2 h-[42px] w-[159px] hover:bg-[#2ef68d]/10 transition-colors">
          <span className="font-['Space_Mono',monospace] font-bold text-[14px] text-white tracking-[-0.7px]">
            Connect Wallet
          </span>
        </button>
      </div>
    </header>
  );
}
