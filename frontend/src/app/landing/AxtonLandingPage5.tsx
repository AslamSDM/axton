// Image assets (valid for 7 days from Figma API)
const imgWhatsAppImage20251008At1630064Aed90101 =
  "https://www.figma.com/api/mcp/asset/43ba3348-5f1d-4c28-a0f2-fd63ffaefa3a";
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/38f2b4bc-591b-4e62-9305-c15f37684b53";
const imgGroup56 =
  "https://www.figma.com/api/mcp/asset/869caf1d-1aa2-4192-9d0c-003ee75e0607";

export default function AxtonLandingPage5() {
  return (
    <section className="bg-[#0b0b0d] relative w-full min-h-screen overflow-hidden">
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

      {/* Top gradient glow effect */}
      <div className="absolute backdrop-blur-[2px] bg-gradient-to-r from-[rgba(52,113,192,0.7)] to-[rgba(46,246,141,0.7)] blur-[26.5px] h-[122px] left-0 mix-blend-color-dodge w-full top-[-30px]" />

      {/* Decorative logo element */}
      <div className="absolute top-[4.16%] right-[3.7%] w-[1.6%] z-10">
        <img alt="" className="block max-w-none size-full" src={imgGroup56} />
      </div>

      {/* Main Content - Large Heading */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)] px-[43px]">
        <h1 className="font-['Space_Mono',monospace] font-bold text-[125px] leading-[135px] text-white tracking-[-6.25px] max-w-[1267px]">
          Choose Your Investment Package
        </h1>
      </main>
    </section>
  );
}
