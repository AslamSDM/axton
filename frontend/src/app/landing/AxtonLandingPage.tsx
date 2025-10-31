// Image assets (valid for 7 days from Figma API)
const imgImage28 =
  "https://www.figma.com/api/mcp/asset/a11e5aff-34a6-4734-bd3c-14638be8182d";
const imgWhatsAppImage20251008At1630064Aed90101 =
  "https://www.figma.com/api/mcp/asset/a25ee3d7-6130-4d46-b4ed-d4eb5830e17f";
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/5d650975-d666-4b2e-8337-1ee44ca782a4";
const imgGroup56 =
  "https://www.figma.com/api/mcp/asset/dc30d3f7-df51-4ce3-8ab8-d980b5c75769";
const imgVector =
  "https://www.figma.com/api/mcp/asset/ea4d63f6-e133-4682-8d2d-ab34300661b8";

export default function AxtonLandingPage() {
  return (
    <section className="bg-[#0b0b0d] relative w-full min-h-screen overflow-hidden">
      {/* Background gradient image */}
      <div className="absolute h-[688px] left-0 top-0 w-full max-w-[1512px]">
        <div className="absolute inset-0 mix-blend-color-dodge overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[158.58%] left-[13.76%] max-w-none top-[-58.58%] w-[72.16%]"
            src={imgImage28}
          />
        </div>
      </div>

      {/* Background vector pattern */}
      <div className="absolute h-[5586.469px] left-[69.8px] mix-blend-hard-light top-[-768px] w-[1531.705px]">
        <div className="absolute inset-[-0.03%_-0.26%_-0.45%_-1.63%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector15}
          />
        </div>
      </div>

      {/* Decorative logo element */}
      <div className="absolute top-[4.16%] right-[3.7%] w-[1.6%] z-10">
        <img alt="" className="block max-w-none size-full" src={imgGroup56} />
      </div>

      {/* Main Hero Content */}
      <main className="relative z-10 px-[94px] pt-[140px]">
        {/* Hero Heading */}
        <h1 className="font-['Space_Mono',monospace] font-bold text-[45px] leading-[67px] text-[#d9d9d9] tracking-[-2.25px] max-w-[1296px] mb-6">
          Reinventing Passive Income Through Blockchain Intelligence
        </h1>

        {/* Hero Subtext */}
        <p className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px] max-w-[624px] mb-12">
          Axton Protocol merges DeFi transparency with network-powered earning —
          built on Binance Smart Chain (BEP-20 USDT).
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mb-16">
          <button className="bg-gradient-to-r from-[#2ef68d] to-[#478ff5] border border-[#2ef68d] h-[42px] w-[205px] flex items-center justify-center">
            <span className="font-['Space_Mono',monospace] font-bold text-[14px] text-white tracking-[-0.7px]">
              Start Earning
            </span>
          </button>

          <button className="border border-[#2ef68d] h-[42px] w-[205px] flex items-center justify-center">
            <span className="font-['Space_Mono',monospace] font-bold text-[14px] text-white tracking-[-0.7px]">
              View Smart Contract
            </span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="flex gap-4 relative z-20">
          {/* Stat Card 1 */}
          <div className="backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.5)] border border-[#2f2f2f] h-[118px] w-[205px] px-6 py-6">
            <p className="font-['Space_Mono',monospace] text-[12px] text-[rgba(255,255,255,0.7)] tracking-[-0.6px] uppercase mb-2">
              Total Investors
            </p>
            <p className="font-['Space_Mono',monospace] font-bold text-[25px] text-white tracking-[-1.25px]">
              12,254
            </p>
          </div>

          {/* Stat Card 2 */}
          <div className="backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.8)] border border-[#2f2f2f] h-[118px] w-[205px] px-6 py-6">
            <p className="font-['Space_Mono',monospace] text-[12px] text-[rgba(255,255,255,0.7)] tracking-[-0.6px] uppercase mb-2">
              24h ROI Paid
            </p>
            <p className="font-['Space_Mono',monospace] font-bold text-[25px] text-white tracking-[-1.25px]">
              $1,20,254
            </p>
          </div>

          {/* Stat Card 3 */}
          <div className="backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.5)] border border-[#2f2f2f] h-[118px] w-[205px] px-6 py-6">
            <p className="font-['Space_Mono',monospace] text-[12px] text-[rgba(255,255,255,0.7)] tracking-[-0.6px] uppercase mb-2">
              Active Referrals
            </p>
            <p className="font-['Space_Mono',monospace] font-bold text-[25px] text-white tracking-[-1.25px]">
              25,689
            </p>
          </div>

          {/* Stat Card 4 */}
          <div className="backdrop-blur-[17.5px] bg-[rgba(15,15,15,0.5)] border border-[#2f2f2f] h-[118px] w-[205px] px-6 py-6">
            <p className="font-['Space_Mono',monospace] text-[12px] text-[rgba(255,255,255,0.7)] tracking-[-0.6px] uppercase mb-2">
              Binary Volume
            </p>
            <p className="font-['Space_Mono',monospace] font-bold text-[25px] text-white tracking-[-1.25px]">
              $5.1M
            </p>
          </div>
        </div>
      </main>

      {/* Decorative vector element */}
      <div className="absolute top-[53.17%] left-[8.86%] w-[1.06%] h-[2.3%] z-10">
        <div className="absolute inset-[-4.76%_-6.25%]">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>

      {/* Dark overlay section with "About Axton Protocol" */}
      <div className="absolute backdrop-blur-[17.5px] bg-[rgba(0,0,0,0.8)] h-[583px] left-0 top-[331px] w-full z-30" />
      <h2 className="absolute font-['Space_Mono',monospace] font-bold text-[125px] text-white tracking-[-6.25px] left-[49px] top-[546px] z-40 [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
        About Axton Protocol
      </h2>
    </section>
  );
}
