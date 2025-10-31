const imgWhatsAppImage20251008At1630064Aed90101 =
  "https://www.figma.com/api/mcp/asset/59267f29-8dc4-4bbd-8f6d-7920625166ac";
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/5ae419f4-dcd0-468a-b5a3-23b9e15a71a3";
const imgGroup56 =
  "https://www.figma.com/api/mcp/asset/15f46b9b-cc84-4987-a591-d75b46f358bf";

export default function AxtonLandingPage11() {
  return (
    <section className="bg-[#0b0b0d] relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute h-[5586.469px] left-[69.8px] mix-blend-hard-light top-[-5278px] w-[1531.705px]">
        <div className="absolute inset-[-0.03%_-0.26%_-0.45%_-1.63%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector15}
          />
        </div>
      </div>

      {/* Top Gradient Glow */}
      <div className="absolute backdrop-blur-[2px] backdrop-filter bg-gradient-to-r blur-[26.5px] filter from-[rgba(52,113,192,0.7)] h-[605px] left-0 mix-blend-color-dodge to-[rgba(46,246,141,0.7)] top-[-680px] w-full" />

      {/* Header Navigation */}
      <header className="absolute left-[56px] top-[26px] right-[56px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-[39px]">
              <img
                alt="Axton Protocol Logo"
                className="w-full h-full object-cover mix-blend-exclusion"
                src={imgWhatsAppImage20251008At1630064Aed90101}
              />
            </div>
            <p className="font-['Space_Mono',monospace] font-bold text-[20px] text-white tracking-[-1px]">
              Axton Protocol
            </p>
          </div>
          <div className="relative">
            <div className="border border-[#2ef68d] h-[42px] w-[159px] flex items-center justify-center">
              <p className="font-['Space_Mono',monospace] font-bold text-[14px] text-white tracking-[-0.7px]">
                Connect Wallet
              </p>
            </div>
            <div className="absolute inset-[4.16%_94.7%_93.98%_3.7%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgGroup56}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main CTA Content */}
      <main className="relative z-10 text-center px-8">
        <h1
          className="font-['Space_Mono',monospace] font-bold text-[35px] tracking-[-1.75px] bg-gradient-to-r from-[#2ef68d] to-[#478ff5] bg-clip-text mb-6"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          Join the Next Generation of Wealth Builders
        </h1>

        <p className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px] max-w-[1084px] mx-auto mb-12">
          Built on smart contracts. Powered by blockchain. Managed by
          intelligence.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-8">
          {/* Start Now Button - Filled with Gradient */}
          <button className="bg-gradient-to-r from-[#2ef68d] to-[#478ff5] border border-[#2ef68d] h-[42px] w-[205px] flex items-center justify-center hover:opacity-90 transition-opacity">
            <span className="font-['Space_Mono',monospace] font-bold text-[14px] text-white tracking-[-0.7px]">
              Start Now
            </span>
          </button>

          {/* Learn How it works Button - Outlined */}
          <button className="border border-[#2ef68d] h-[42px] w-[205px] flex items-center justify-center hover:bg-[#2ef68d]/10 transition-colors">
            <span className="font-['Space_Mono',monospace] font-bold text-[14px] text-white tracking-[-0.7px]">
              Learn How it works
            </span>
          </button>
        </div>
      </main>
    </section>
  );
}
