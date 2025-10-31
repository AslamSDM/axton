// Image assets (valid for 7 days from Figma API)
const imgImage28 =
  "https://www.figma.com/api/mcp/asset/8a150328-ecb4-4fa2-91c5-8e588f231212";
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/d49c8135-7c4d-4a9e-af1a-1dc89703bb77";
const imgGroup56 =
  "https://www.figma.com/api/mcp/asset/338ae4e9-f57a-4fba-a97e-7610c5cdf2d9";

export default function AxtonHero() {
  return (
    <section className="bg-[#0b0b0d] relative w-full min-h-screen overflow-hidden pt-[92px]">
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
      <main className="relative z-10 px-[94px] pt-[130px]">
        {/* Hero Heading - Large Format */}
        <h1 className="font-['Space_Mono',monospace] font-bold text-[125px] leading-[127px] text-[#d9d9d9] tracking-[-6.25px] max-w-[1296px]">
          Reinventing Passive Income Through Blockchain Intelligence
        </h1>
      </main>
    </section>
  );
}
