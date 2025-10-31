// Image assets (valid for 7 days from Figma API)
const imgWhatsAppImage20251008At1630064Aed90101 =
  "https://www.figma.com/api/mcp/asset/092f5790-7b69-43a9-88f5-c90e286c2858";
const imgTexture =
  "https://www.figma.com/api/mcp/asset/f856b579-dbb2-4edf-86a1-25b32e410fbf";
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/87d8001f-2149-42eb-81e8-2e9f626212f4";
const imgGroup56 =
  "https://www.figma.com/api/mcp/asset/1d499bfa-d733-4219-9e4e-1935344d4f85";
const imgLine21 =
  "https://www.figma.com/api/mcp/asset/ec536e5f-9771-4c07-bfc4-477714545e59";

// Package data
const packages = [
  {
    amount: "20",
    dailyROI: "0.1 USDT",
    maxIncome: "40 USDT (2x)",
    binaryCap: "50 USDT",
    duration: "200 Days",
  },
  {
    amount: "50",
    dailyROI: "0.25 USDT",
    maxIncome: "100 USDT (2x)",
    binaryCap: "150 USDT",
    duration: "200 Days",
  },
  {
    amount: "100",
    dailyROI: "0.5 USDT",
    maxIncome: "200 USDT (2x)",
    binaryCap: "300 USDT",
    duration: "200 Days",
  },
  {
    amount: "1000",
    dailyROI: "5 USDT",
    maxIncome: "2000 USDT (2x)",
    binaryCap: "3000 USDT",
    duration: "200 Days",
    featured: true,
  },
];

export default function AxtonLandingPage6() {
  return (
    <section className="bg-[#0b0b0d] relative w-full min-h-screen overflow-hidden pb-20">
      {/* Background vector pattern */}
      <div className="absolute h-[5586.469px] left-[69.8px] mix-blend-hard-light top-[-3078px] w-[1531.705px]">
        <div className="absolute inset-[-0.03%_-0.26%_-0.45%_-1.63%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector15}
          />
        </div>
      </div>

      {/* Top gradient glow effect - larger for this section */}
      <div className="absolute backdrop-blur-[2px] bg-gradient-to-r from-[rgba(52,113,192,0.7)] to-[rgba(46,246,141,0.7)] blur-[26.5px] h-[978px] left-0 mix-blend-color-dodge w-full top-[-30px]" />

      {/* Decorative logo element */}
      <div className="absolute top-[4.16%] right-[3.7%] w-[1.6%] z-10">
        <img alt="" className="block max-w-none size-full" src={imgGroup56} />
      </div>

      {/* Main Content */}
      <main className="relative z-10 px-[56px] pt-[28px]">
        {/* Section Heading */}
        <h2 className="font-['Space_Mono',monospace] font-bold text-[45px] leading-[135px] text-white tracking-[-2.25px] mb-4">
          Choose Your Investment Package
        </h2>

        {/* Section Description */}
        <p className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px] max-w-[1084px] mb-16">
          Select the package that fits your investment goals
        </p>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-4 gap-8 max-w-[1760px]">
          {packages.map((pkg, index) => (
            <div key={index} className="relative">
              {/* Texture Background with Gradient Overlay */}
              <div className="absolute inset-0 h-[426px]">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `url('${imgTexture}')`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "69.94px 69.94px",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2ef68d] to-[#478ff5] mix-blend-overlay" />
              </div>

              {/* Featured Badge for 1000 USDT package */}
              {pkg.featured && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    {/* Circular text would go here - simplified for implementation */}
                    <div className="bg-gradient-to-r from-[#2ef68d] to-[#478ff5] rounded-full w-24 h-24 flex items-center justify-center">
                      <span className="font-['Space_Mono',monospace] text-[10px] text-white text-center uppercase leading-tight">
                        Suggested
                        <br />
                        Plans
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="relative p-8 h-[426px]">
                {/* Package Amount */}
                <div className="text-center mb-8 pt-4">
                  <p className="font-['Space_Mono',monospace] font-bold text-[35px] text-white tracking-[-1.75px] mb-1">
                    {pkg.amount}
                  </p>
                  <p className="font-['Space_Mono',monospace] text-[15px] text-[#929292] tracking-[-0.75px]">
                    USDT
                  </p>
                </div>

                {/* Package Details */}
                <div className="space-y-6">
                  {/* Daily ROI */}
                  <div className="flex justify-between items-start pb-4 border-b border-white/10">
                    <img alt="" className="w-full h-[1px]" src={imgLine21} />
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px]">
                      Daily ROI
                    </span>
                    <span className="font-['Space_Mono',monospace] font-bold text-[14px] text-[#02c8c8] tracking-[-0.7px]">
                      {pkg.dailyROI}
                    </span>
                  </div>

                  {/* Maximum Income */}
                  <div className="pb-4 border-b border-white/10">
                    <img alt="" className="w-full h-[1px]" src={imgLine21} />
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px]">
                      Maximum Income
                    </span>
                    <span className="font-['Space_Mono',monospace] font-bold text-[14px] text-[#02c8c8] tracking-[-0.7px]">
                      {pkg.maxIncome}
                    </span>
                  </div>

                  {/* Binary Cap */}
                  <div className="pb-4 border-b border-white/10">
                    <img alt="" className="w-full h-[1px]" src={imgLine21} />
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px]">
                      Binary Cap
                    </span>
                    <span className="font-['Space_Mono',monospace] font-bold text-[14px] text-[#02c8c8] tracking-[-0.7px]">
                      {pkg.binaryCap}
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="flex justify-between items-start">
                    <span className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px]">
                      Duration
                    </span>
                    <span className="font-['Space_Mono',monospace] font-bold text-[14px] text-[#02c8c8] tracking-[-0.7px]">
                      {pkg.duration}
                    </span>
                  </div>
                </div>

                {/* Activate Button */}
                <button className="absolute bottom-8 left-8 right-8 bg-gradient-to-r from-[#2ef68d] to-[#478ff5] border border-[#2ef68d] h-[42px] flex items-center justify-center">
                  <span className="font-['Space_Mono',monospace] font-bold text-[14px] text-white tracking-[-0.7px]">
                    Activate Now
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
