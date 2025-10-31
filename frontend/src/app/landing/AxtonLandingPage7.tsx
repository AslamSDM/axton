// Image assets (valid for 7 days from Figma API)
const imgWhatsAppImage20251008At1630064Aed90101 =
  "https://www.figma.com/api/mcp/asset/e8083721-5673-4c85-8c09-c29512110a5d";
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/c0f71f40-93b6-44cc-b7f0-1f0e8a71d969";
const imgGroup56 =
  "https://www.figma.com/api/mcp/asset/58c8fe9e-6b25-44ef-a19b-895b00a46bd9";

export default function AxtonLandingPage7() {
  return (
    <section className="bg-[#0b0b0d] relative w-full min-h-screen overflow-hidden">
      {/* Background vector pattern */}
      <div className="absolute h-[5586.469px] left-[69.8px] mix-blend-hard-light top-[-3758px] w-[1531.705px]">
        <div className="absolute inset-[-0.03%_-0.26%_-0.45%_-1.63%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector15}
          />
        </div>
      </div>

      {/* Top gradient glow effect */}
      <div className="absolute backdrop-blur-[2px] bg-gradient-to-r from-[rgba(52,113,192,0.7)] to-[rgba(46,246,141,0.7)] blur-[26.5px] h-[203px] left-0 mix-blend-color-dodge w-full top-[-50px]" />

      {/* Decorative logo element */}
      <div className="absolute top-[4.16%] right-[3.7%] w-[1.6%] z-10">
        <img alt="" className="block max-w-none size-full" src={imgGroup56} />
      </div>

      {/* Main Content - Large Heading */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)] px-[100px]">
        <h1 className="font-['Space_Mono',monospace] font-bold text-[125px] leading-[125px] text-white tracking-[-6.25px] max-w-[1305px]">
          Binary Plan Structure
        </h1>
      </main>
    </section>
  );
}
