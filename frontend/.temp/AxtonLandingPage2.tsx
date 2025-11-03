// Image assets (valid for 7 days from Figma API)
const imgWhatsAppImage20251008At1630064Aed90101 =
  "https://www.figma.com/api/mcp/asset/84c8d7bc-0422-460c-9bae-7bffdf103a53";
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/43a3cbc7-9957-43d7-b3ff-80b861133535";
const imgGroup56 =
  "https://www.figma.com/api/mcp/asset/9a0e2963-ea40-4ddb-81fb-69a50d1450d0";

export default function AxtonLandingPage2() {
  return (
    <section className="bg-[#0b0b0d] relative w-full min-h-screen overflow-hidden">
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

      {/* Main Content - Large Heading */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-89px)]">
        <h1 className="font-['Space_Mono',monospace] font-bold text-[125px] text-white tracking-[-6.25px] px-[139px] text-left">
          How can you Earn ?
        </h1>
      </main>
    </section>
  );
}
