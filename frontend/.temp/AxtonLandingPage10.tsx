const imgWhatsAppImage20251008At1630064Aed90101 =
  "https://www.figma.com/api/mcp/asset/361123f7-5372-4bf1-83f3-146fc1567eb3";
const imgTexture =
  "https://www.figma.com/api/mcp/asset/68bf11ef-814b-47d0-a7e1-f09a731052d1";
const imgFrame =
  "https://www.figma.com/api/mcp/asset/2ac7f69e-ab1d-40d2-bbcf-1a0b319f702d";
const imgVector15 =
  "https://www.figma.com/api/mcp/asset/da1a08d4-1e0d-4894-b44e-1d8d54b90896";
const imgGroup56 =
  "https://www.figma.com/api/mcp/asset/2372f680-b24e-466c-916d-55998c7476e4";
const imgLine4 =
  "https://www.figma.com/api/mcp/asset/cdcfb684-3ec3-4d6a-90e5-4985f1728a3c";
const imgVector14 =
  "https://www.figma.com/api/mcp/asset/65561ed1-7dc3-4dd4-bf0a-0b6ace336dd8";
const imgEllipse18 =
  "https://www.figma.com/api/mcp/asset/1307b120-ac0e-4bbf-9575-414a50f7c53b";

export default function AxtonLandingPage10() {
  return (
    <section className="bg-[#0b0b0d] relative min-h-screen w-full overflow-hidden">
      {/* Dot Grid Background */}
      <div className="absolute h-[150px] left-0 opacity-10 overflow-clip top-0 w-full">
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
      <div className="absolute h-[5586.469px] left-[69.8px] mix-blend-hard-light top-[-4538px] w-[1531.705px]">
        <div className="absolute inset-[-0.03%_-0.26%_-0.45%_-1.63%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgVector15}
          />
        </div>
      </div>

      {/* Top Gradient Glow */}
      <div className="absolute backdrop-blur-[2px] backdrop-filter bg-gradient-to-r blur-[26.5px] filter from-[rgba(52,113,192,0.7)] h-[605px] left-0 mix-blend-color-dodge to-[rgba(46,246,141,0.7)] top-[-680px] w-full" />

      {/* Main Content */}
      <main className="relative px-[57px] pt-[87px]">
        <h1 className="font-['Space_Mono',monospace] font-bold text-[35px] text-white tracking-[-1.75px] leading-[125px] max-w-[592px]">
          Analytics Transparency
        </h1>
        <p className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px] mt-4 max-w-[1084px]">
          Real-time insights into network performance and ROI distribution
        </p>

        {/* Analytics Cards Grid */}
        <div className="grid grid-cols-2 gap-8 mt-24 max-w-[1263px]">
          {/* Total ROI Distributed Card */}
          <div className="relative h-[450px]">
            {/* Card Background with Texture */}
            <div className="absolute inset-0 bg-black/50">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url('${imgTexture}')`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "69.94px 69.94px",
                }}
              />
            </div>

            {/* Card Content */}
            <div className="relative h-full p-8 flex flex-col">
              <h2 className="font-['Space_Mono',monospace] font-bold text-[20px] text-white tracking-[-1px] mb-8">
                Total ROI Distributed
              </h2>

              {/* Bar Chart */}
              <div className="flex items-end gap-8 h-[250px] mt-auto mb-8">
                {[115, 138, 149, 160, 171, 182, 193].map((height, index) => (
                  <div
                    key={index}
                    className={`w-[9px] bg-gradient-to-r from-[#2ef68d] to-[#478ff5] ${
                      index === 6 ? "border-2 border-white" : ""
                    }`}
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>

              {/* Hover Info Box */}
              <div className="absolute left-[488px] top-[409px] bg-[#2b2b2b] w-[160px] h-[107px] p-4">
                <p className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px] mb-2">
                  Oct 6
                </p>
                <p className="font-['Space_Mono',monospace] font-bold text-[19px] text-white tracking-[-0.95px] mb-2">
                  10 USDT
                </p>
                <p className="font-['Space_Mono',monospace] text-[12px] text-white/50 tracking-[-0.6px]">
                  ROI Distributed
                </p>
              </div>
            </div>

            {/* Bottom Stats Section */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 h-[126px] p-6">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url('${imgTexture}')`,
                  backgroundRepeat: "repeat",
                }}
              />
              <div className="relative">
                <p className="font-['Space_Mono',monospace] font-bold text-[25px] text-white tracking-[-1.25px] mb-2">
                  30,800 USDT
                </p>
                <p className="font-['Space_Mono',monospace] text-[12px] text-white tracking-[-0.6px] mb-1">
                  ROI distribution has grown 43% over the last month
                </p>
                <p className="font-['Space_Mono',monospace] text-[12px] text-[#2ef68d] tracking-[-0.6px]">
                  +8.2% this week
                </p>
              </div>
            </div>
          </div>

          {/* Live Network Growth Card */}
          <div className="relative h-[450px]">
            {/* Card Background with Texture */}
            <div className="absolute inset-0 bg-black/50">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url('${imgTexture}')`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "69.94px 69.94px",
                }}
              />
            </div>

            {/* Card Content */}
            <div className="relative h-full p-8 flex flex-col">
              <h2 className="font-['Space_Mono',monospace] font-bold text-[20px] text-white tracking-[-1px] mb-8">
                Live Network Growth
              </h2>

              {/* Line Chart */}
              <div className="relative h-[150px] mt-12">
                <img alt="" className="absolute" src={imgVector14} />
                {/* Data Points */}
                {[
                  { left: 60, bottom: 60 },
                  { left: 138, bottom: 88 },
                  { left: 220, bottom: 55 },
                  { left: 294, bottom: 79 },
                  { left: 376, bottom: 83 },
                  { left: 455, bottom: 103 },
                  { left: 530, bottom: 131 },
                ].map((point, index) => (
                  <div
                    key={index}
                    className="absolute size-[9px]"
                    style={{
                      left: `${point.left}px`,
                      bottom: `${point.bottom}px`,
                    }}
                  >
                    <img alt="" src={imgEllipse18} />
                  </div>
                ))}

                {/* X-Axis Labels */}
                <div className="absolute bottom-[-40px] left-0 right-0 flex justify-between text-white/50 text-[12px] px-4">
                  {["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"].map(
                    (month, index) => (
                      <span
                        key={index}
                        className="font-['Space_Mono',monospace] tracking-[-0.6px]"
                      >
                        {month}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Hover Info Box */}
              <div className="absolute left-[1050px] top-[381px] bg-[#2b2b2b] w-[205px] h-[107px] p-4">
                <p className="font-['Space_Mono',monospace] text-[14px] text-white tracking-[-0.7px] mb-2">
                  Feb
                </p>
                <p className="font-['Space_Mono',monospace] font-bold text-[19px] text-white tracking-[-0.95px] mb-2">
                  125 Activations
                </p>
                <p className="font-['Space_Mono',monospace] text-[12px] text-white/50 tracking-[-0.6px]">
                  New Users
                </p>
              </div>
            </div>

            {/* Bottom Stats Section */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 h-[126px] p-6">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url('${imgTexture}')`,
                  backgroundRepeat: "repeat",
                }}
              />
              <div className="relative">
                <p className="font-['Space_Mono',monospace] font-bold text-[25px] text-white tracking-[-1.25px] mb-2">
                  136 New Activations
                </p>
                <p className="font-['Space_Mono',monospace] text-[12px] text-white tracking-[-0.6px] mb-1">
                  User base has expanded 62% in the past 30 days
                </p>
                <p className="font-['Space_Mono',monospace] text-[12px] text-[#2ef68d] tracking-[-0.6px]">
                  +15.3% today
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
