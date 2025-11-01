const imgWhatsAppImage20251008At1630064Aed90101 =
  "https://www.figma.com/api/mcp/asset/d959182a-b02f-4af4-a7eb-d6963d8f5405";
const imgFrame =
  "https://www.figma.com/api/mcp/asset/f0424ca8-0598-4d00-9fae-0cccf4cada43";
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/9b5b05fb-e3da-4052-a901-ea6ac53a37dc";
const imgGroup56 =
  "https://www.figma.com/api/mcp/asset/5d250055-5489-40be-8653-6c620972472c";
const imgGroup58 =
  "https://www.figma.com/api/mcp/asset/5367076d-5fcb-4f44-b7df-a9ed1d1c5fe6";
const imgGroup61 =
  "https://www.figma.com/api/mcp/asset/189e3682-3057-47aa-b910-9d02b70e5c04";
const imgGroup59 =
  "https://www.figma.com/api/mcp/asset/c69a1609-371a-4bea-96fb-51c3e1acc23b";

export default function AxtonLandingPage8() {
  return (
    <section className="bg-[#0b0b0d] relative min-h-screen w-full overflow-hidden">
      {/* Dot Grid Background */}
      <div className="absolute h-[914px] left-0 opacity-10 overflow-clip top-0 w-full">
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
      <div className="absolute h-[5586.469px] left-[69.8px] mix-blend-hard-light top-[-3758px] w-[1531.705px]">
        <div className="absolute inset-[-0.03%_-0.26%_-0.45%_-1.63%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector15}
          />
        </div>
      </div>

      {/* Top Gradient Glow */}
      <div className="absolute backdrop-blur-[2px] backdrop-filter bg-gradient-to-r blur-[26.5px] filter from-[rgba(52,113,192,0.7)] h-[203px] left-0 mix-blend-color-dodge to-[rgba(46,246,141,0.7)] top-[-50px] w-full" />

      {/* Main Content */}
      <main className="relative px-[56px] pt-[80px]">
        <h1 className="font-['Space_Mono',monospace] font-bold text-[45px] text-white tracking-[-2.25px] leading-[125px]">
          Binary Plan Structure
        </h1>
        <p className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px] mt-4">
          Build two teams and earn matching bonuses daily
        </p>

        {/* Binary Tree Structure */}
        <div className="relative mt-20">
          {/* You (Top User) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 text-center">
            <div className="absolute inset-[34.68%_48.35%_59.85%_48.35%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgGroup58}
              />
            </div>
            <p className="font-['Space_Mono',monospace] text-[14px] text-center text-white tracking-[-0.7px] mb-2">
              You
            </p>
            <p className="font-['Space_Mono',monospace] font-bold text-[24px] text-white tracking-[-1.2px]">
              $1000
            </p>
          </div>

          {/* Connection Lines */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[150px] h-[88.527px] w-[125.32px]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgGroup59}
            />
          </div>

          {/* Left and Right Teams */}
          <div className="flex justify-center gap-32 mt-[250px]">
            {/* Left Team */}
            <div className="text-center">
              <div className="relative mb-6">
                <img alt="" className="block max-w-none" src={imgGroup58} />
              </div>
              <p className="font-['Space_Mono',monospace] text-[14px] text-center text-white tracking-[-0.7px] mb-2">
                Left Team
              </p>
              <p className="font-['Space_Mono',monospace] font-bold text-[24px] text-white tracking-[-1.2px]">
                $1000
              </p>
            </div>

            {/* Right Team */}
            <div className="text-center">
              <div className="relative mb-6">
                <img alt="" className="block max-w-none" src={imgGroup58} />
              </div>
              <p className="font-['Space_Mono',monospace] text-[14px] text-center text-white tracking-[-0.7px] mb-2">
                Right Team
              </p>
              <p className="font-['Space_Mono',monospace] font-bold text-[24px] text-white tracking-[-1.2px]">
                $1000
              </p>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="flex justify-center gap-8 mt-12">
            {/* Weaker */}
            <div className="backdrop-blur-[17.5px] backdrop-filter bg-[rgba(15,15,15,0.2)] border border-[#2f2f2f] h-[118px] w-[205px] p-6">
              <p className="font-['Space_Mono',monospace] text-[14px] text-center text-white tracking-[-0.7px] mb-2">
                Weaker
              </p>
              <p className="font-['Space_Mono',monospace] font-bold text-[24px] text-[#02c8c8] tracking-[-1.2px] text-center">
                $1000
              </p>
            </div>

            {/* Daily Match */}
            <div className="backdrop-blur-[17.5px] backdrop-filter bg-[rgba(15,15,15,0.2)] border border-[#2f2f2f] h-[118px] w-[205px] p-6">
              <p className="font-['Space_Mono',monospace] text-[14px] text-center text-white tracking-[-0.7px] mb-2">
                Daily Match (10%)
              </p>
              <p className="font-['Space_Mono',monospace] font-bold text-[24px] text-[#02c8c8] tracking-[-1.2px] text-center">
                $1000
              </p>
            </div>

            {/* Carry Forward */}
            <div className="backdrop-blur-[17.5px] backdrop-filter bg-[rgba(15,15,15,0.2)] border border-[#2f2f2f] h-[118px] w-[205px] p-6">
              <p className="font-['Space_Mono',monospace] text-[14px] text-center text-white tracking-[-0.7px] mb-2">
                Carry Forward
              </p>
              <p className="font-['Space_Mono',monospace] font-bold text-[24px] text-[#02c8c8] tracking-[-1.2px] text-center">
                $1000
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
