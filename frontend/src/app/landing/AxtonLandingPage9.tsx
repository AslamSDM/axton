const imgWhatsAppImage20251008At1630064Aed90101 =
  "https://www.figma.com/api/mcp/asset/9789ab55-1bf7-466b-907f-96035c79c25e";
const imgFrame =
  "https://www.figma.com/api/mcp/asset/5a2d261d-6c31-49b1-87d2-0a17ddc09ffa";
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/b3e72d6e-bb0a-40ba-91ad-22f4e2fdc4e7";
const imgGroup56 =
  "https://www.figma.com/api/mcp/asset/ac110d64-ad0d-4c12-bfca-2c4911708ba9";

export default function AxtonLandingPage9() {
  return (
    <section className="bg-[#0b0b0d] relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Dot Grid Background */}
      <div className="absolute h-[150px] left-0 opacity-10 overflow-clip top-0 w-full">
        {[...Array(11)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[9px] left-0 w-[100px]"
            style={{ top: `${i * 9}px` }}
          >
            <img alt="" className="block max-w-none size-full" src={imgFrame} />
          </div>
        ))}
      </div>

      {/* Background Pattern */}
      <div className="absolute h-[5586.469px] left-[69.8px] mix-blend-hard-light top-[-4538px] w-[1531.705px]">
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

      {/* Main Content - Large Hero Text */}
      <main className="relative z-10 px-[100px] text-center">
        <h1 className="font-['Space_Mono',monospace] font-bold text-[125px] text-white tracking-[-6.25px] leading-[125px]">
          Analytics
          <br />
          Transparency
        </h1>
      </main>
    </section>
  );
}
