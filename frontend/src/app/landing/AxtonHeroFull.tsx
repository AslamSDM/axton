// Image assets (valid for 7 days from Figma API)
const imgImage28 =
  "https://www.figma.com/api/mcp/asset/93a39039-8eea-4372-80de-8e94955bc5df";
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/5313221a-d041-48e4-b387-07d79016d698";
const imgGroup56 =
  "https://www.figma.com/api/mcp/asset/0a07ba27-74b3-4e66-a18e-90fc28289a09";
const imgVector =
  "https://www.figma.com/api/mcp/asset/55133557-0958-44c8-b3da-115adb2ff2d4";

export default function AxtonHeroFull() {
  return (
    <section className="bg-[#0b0b0d] relative w-full h-screen overflow-hidden pt-[92px]">
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
      <div className="absolute h-[5586.469px] left-[69.8px] mix-blend-hard-light top-[-68px] w-[1531.705px]">
        <div className="absolute inset-[-0.03%_-0.26%_-0.45%_-1.63%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector15}
          />
        </div>
      </div>

      {/* Decorative logo element */}
      <div className="absolute top-[4.16%] right-[3.7%] w-[1.6%]">
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
        <div className="flex gap-4">
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
      <div className="absolute top-[53.17%] left-[8.86%] w-[1.06%] h-[2.3%]">
        <div className="absolute inset-[-4.76%_-6.25%]">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
    </section>
  );
}
