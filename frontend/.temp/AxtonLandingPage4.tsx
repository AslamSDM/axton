// Image assets (valid for 7 days from Figma API)
const imgWhatsAppImage20251008At1630064Aed90101 =
  "https://www.figma.com/api/mcp/asset/ea3c7e2c-a1e4-4ca3-b024-e7a78657dfb0";
const imgTexture =
  "https://www.figma.com/api/mcp/asset/dc294e4e-0277-4664-b9b5-4399c6dfe1ab";
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/a794992c-c05f-432e-bde2-117c0b135ac7";
const imgGroup56 =
  "https://www.figma.com/api/mcp/asset/9fa83dff-179a-47ba-9e36-5286524fd454";
const imgLine18 =
  "https://www.figma.com/api/mcp/asset/60ebd2e6-40d6-4b68-b0fa-a90f3bc2636e";

export default function AxtonLandingPage4() {
  return (
    <section className="bg-[#0b0b0d] relative w-full min-h-screen overflow-hidden pb-20">
      {/* Background vector pattern */}
      <div className="absolute h-[5586.469px] left-[69.8px] mix-blend-hard-light top-[-2048px] w-[1531.705px]">
        <div className="absolute inset-[-0.03%_-0.26%_-0.45%_-1.63%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector15}
          />
        </div>
      </div>

      {/* Dark backdrop overlay for header */}
      <div className="absolute backdrop-blur-[17.5px] bg-[rgba(0,0,0,0.8)] h-[89px] left-0 top-0 w-full" />

      {/* Decorative logo element */}
      <div className="absolute top-[4.16%] right-[3.7%] w-[1.6%] z-10">
        <img alt="" className="block max-w-none size-full" src={imgGroup56} />
      </div>

      {/* Main Content */}
      <main className="relative z-10 px-[56px] pt-[35px]">
        {/* Section Heading */}
        <h2 className="font-['Space_Mono',monospace] font-bold text-[45px] text-white tracking-[-2.25px] mb-6">
          How can you Earn ?
        </h2>

        {/* Section Description */}
        <p className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px] max-w-[1084px] mb-16">
          Three powerful income streams working together to maximize your
          returns
        </p>

        {/* Income Cards Section */}
        <div className="relative flex gap-8 justify-center items-start px-[64px]">
          {/* Card 1 - ROI Income */}
          <div className="relative w-[400px]">
            {/* Texture Background */}
            <div className="absolute inset-0 h-[349.755px] w-[400px]">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `url('${imgTexture}')`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "69.94px 69.94px",
                }}
              />
            </div>

            {/* Card Content */}
            <div className="relative p-8 pt-[99px]">
              <p className="font-['Space_Mono',monospace] font-bold text-[45px] text-white opacity-20 tracking-[-2.25px] absolute top-5 right-8">
                1
              </p>

              <h3 className="font-['Space_Mono',monospace] font-bold text-[25px] text-white tracking-[-1.25px] mb-4">
                ROI Income
              </h3>

              <p className="font-['Space_Mono',monospace] text-[12px] text-white tracking-[-0.6px] mb-4 leading-relaxed">
                Earn fixed daily returns up to 2x gour investment. Consistent,
                predictable, and automated.
              </p>

              {/* Divider Line */}
              <div className="w-[325px] h-[1px] mb-3">
                <img alt="" className="w-full" src={imgLine18} />
              </div>

              <div className="font-['Space_Mono',monospace] text-[12px] text-[#02c8c8] tracking-[-0.6px] leading-relaxed">
                <p className="mb-0">Example :</p>
                <p className="mb-0">Investment: 20 USDT</p>
                <p className="mb-0">Daily ROI: 0.1 USDT</p>
                <p>200 Days: 40 USDT (2x)</p>
              </div>
            </div>
          </div>

          {/* Card 2 - Referral Commission */}
          <div className="relative w-[400px]">
            {/* Texture Background */}
            <div className="absolute inset-0 h-[349.755px] w-[400px]">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `url('${imgTexture}')`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "69.94px 69.94px",
                }}
              />
            </div>

            {/* Card Content */}
            <div className="relative p-8 pt-[99px]">
              <p className="font-['Space_Mono',monospace] font-bold text-[45px] text-white opacity-20 tracking-[-2.25px] absolute top-5 right-8">
                2
              </p>

              <h3 className="font-['Space_Mono',monospace] font-bold text-[25px] text-white tracking-[-1.25px] mb-4">
                Referral Commission
              </h3>

              <p className="font-['Space_Mono',monospace] text-[12px] text-white tracking-[-0.6px] mb-4 leading-relaxed">
                Earn 5-10% whenever your direct referral activates a package.
                Build your network, grow your income.
              </p>

              {/* Divider Line */}
              <div className="w-[325px] h-[1px] mb-3">
                <img alt="" className="w-full" src={imgLine18} />
              </div>

              <div className="font-['Space_Mono',monospace] text-[12px] text-[#02c8c8] tracking-[-0.6px] leading-relaxed">
                <p className="mb-0">Example :</p>
                <p className="mb-0">Referral Investment: 100 USDT</p>
                <p className="mb-0">Your commission: 10 USDT</p>
                <p>Instant payout</p>
              </div>
            </div>
          </div>

          {/* Card 3 - Binary Matching Bonus */}
          <div className="relative w-[400px]">
            {/* Top Gradient Line */}
            <div className="absolute bg-gradient-to-r from-[#2ef68d] to-[#478ff5] h-[3px] w-full top-[30px] left-0" />

            {/* Glow effect */}
            <div className="absolute bg-gradient-to-r from-[#2ef68d] to-[#478ff5] blur-[25px] h-[23px] w-full top-[33px] left-0" />

            {/* Texture Background */}
            <div className="absolute top-0 h-[351px] w-[400px]">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `url('${imgTexture}')`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "69.94px 69.94px",
                }}
              />
            </div>

            {/* Card Content */}
            <div className="relative p-8 pt-[99px]">
              <p className="font-['Space_Mono',monospace] font-bold text-[45px] text-white opacity-20 tracking-[-2.25px] absolute top-5 right-8">
                3
              </p>

              <h3 className="font-['Space_Mono',monospace] font-bold text-[25px] text-white tracking-[-1.25px] mb-4">
                Binary Matching Bonus
              </h3>

              <p className="font-['Space_Mono',monospace] text-[12px] text-white tracking-[-0.6px] mb-4 leading-relaxed">
                Earn 10% on matched business volume from your weaker leg every
                24 hours. Unlimited earning potential.
              </p>

              {/* Divider Line */}
              <div className="w-[325px] h-[1px] mb-3">
                <img alt="" className="w-full" src={imgLine18} />
              </div>

              <div className="font-['Space_Mono',monospace] text-[12px] text-[#02c8c8] tracking-[-0.6px] leading-relaxed">
                <p className="mb-0">Example :</p>
                <p className="mb-0">Left Team: 500 USDT</p>
                <p className="mb-0">Right Team: 300 USDT</p>
                <p>Daily Match: 30 USDT (10%)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient glow effect */}
        <div className="absolute backdrop-blur-[2px] bg-gradient-to-r from-[rgba(52,113,192,0.7)] to-[rgba(46,246,141,0.7)] blur-[26.5px] h-[199px] left-0 mix-blend-color-dodge w-full bottom-0" />
      </main>
    </section>
  );
}
