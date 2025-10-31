// Image assets (valid for 7 days from Figma API)
const imgWhatsAppImage20251008At1630064Aed90101 =
  "https://www.figma.com/api/mcp/asset/a57638c4-8975-4387-ab63-b73b3a28df6d";
const imgImage29 =
  "https://www.figma.com/api/mcp/asset/47a62e0c-2778-49b3-8b68-e7fad3cc161f";
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/041e1ab0-0979-4eac-921e-b07c31faf731";
const imgGroup56 =
  "https://www.figma.com/api/mcp/asset/c2df3e40-b32f-4dd4-9dea-aafdad066c95";
const imgVector =
  "https://www.figma.com/api/mcp/asset/fc80f979-e507-43de-96a9-0d069f099ecf";
const imgGroup29 =
  "https://www.figma.com/api/mcp/asset/0d8d8921-fc3e-4550-96a4-7a234b364e27";
const imgGroup =
  "https://www.figma.com/api/mcp/asset/551bf648-a7d2-4714-a2db-f76f37520ac1";

export default function AxtonLandingPage1() {
  return (
    <section className="bg-[#0b0b0d] relative w-full min-h-screen overflow-hidden">
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

      {/* Dark backdrop overlay */}
      <div className="absolute backdrop-blur-[17.5px] bg-[rgba(0,0,0,0.8)] h-[914px] left-0 top-0 w-full" />

      {/* Decorative logo element */}
      <div className="absolute top-[4.16%] right-[3.7%] w-[1.6%] z-10">
        <img alt="" className="block max-w-none size-full" src={imgGroup56} />
      </div>

      {/* Main Content Section */}
      <main className="relative z-10 px-[56px] pt-[100px]">
        {/* About Heading */}
        <h2 className="font-['Space_Mono',monospace] font-bold text-[45px] text-white tracking-[-2.25px] mb-8">
          About Axton Protocol
        </h2>

        {/* About Description */}
        <div className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px] max-w-[1084px] mb-16">
          <p className="mb-4">
            Axton Protocol is a next-generation decentralized wealth system that
            allows users to invest, refer, and earn through a sustainable ROI
            model backed by blockchain verification. Designed on BSC for
            high-speed, low-cost transactions.
          </p>
        </div>

        {/* Feature Cards Section */}
        <div className="relative flex items-center justify-center gap-3 mb-8">
          {/* Left card */}
          <div className="h-[265px] w-[370px] relative">
            <div className="absolute backdrop-blur-[2px] inset-0 opacity-80 overflow-hidden">
              <img
                alt=""
                className="absolute h-[196.07%] left-[-0.01%] max-w-none top-[-96.07%] w-[100.02%]"
                src={imgImage29}
              />
            </div>
          </div>

          {/* Center card (larger with shadow) */}
          <div className="h-[336px] w-[468px] relative shadow-[0px_0px_80px_0px_rgba(255,166,133,0.5)] z-20">
            <div className="absolute backdrop-blur-[2px] inset-0 opacity-80 overflow-hidden">
              <img
                alt=""
                className="absolute h-[196.07%] left-[-0.01%] max-w-none top-[-96.07%] w-[100.02%]"
                src={imgImage29}
              />
            </div>

            {/* Info Card Overlay */}
            <div className="absolute backdrop-blur-[17.5px] bg-[rgba(0,0,0,0.7)] border-[0.5px] border-neutral-900 h-[113px] w-[421px] bottom-5 left-1/2 transform -translate-x-1/2 px-8 py-4">
              <h3 className="font-['Space_Mono',monospace] font-bold text-[25px] text-white tracking-[-1.25px] mb-2">
                Built on BSC
              </h3>
              <p className="font-['Space_Mono',monospace] text-[12px] text-white tracking-[-0.6px] max-w-[333px]">
                Fast, secure, BEP-20 USDT based transactions with minimal fees
                and maximum efficiency.
              </p>
            </div>
          </div>

          {/* Right card */}
          <div className="h-[265px] w-[370px] relative">
            <div className="absolute backdrop-blur-[2px] inset-0 opacity-80 overflow-hidden">
              <img
                alt=""
                className="absolute h-[196.07%] left-[-0.01%] max-w-none top-[-96.07%] w-[100.02%]"
                src={imgImage29}
              />
            </div>
          </div>

          {/* Decorative vector elements */}
          <div className="absolute top-[51.31%] left-[24.8%] w-[5.09%] h-[10.07%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgVector}
            />
          </div>

          <div className="absolute top-[51.31%] right-[32.39%] w-[6.3%] h-[10.08%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgGroup29}
            />
          </div>

          <div className="absolute top-1/2 left-[33%] w-[9.76%] h-[13%]">
            <img alt="" className="block max-w-none size-full" src={imgGroup} />
          </div>
        </div>

        {/* Gradient bottom line */}
        <div className="bg-gradient-to-r from-[#2ef68d] to-[#478ff5] h-[3px] w-[470px] mx-auto" />
      </main>
    </section>
  );
}
