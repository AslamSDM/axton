import React from "react";

export const AxtonHero = () => {
  return (
    <div className="overflow-hidden w-full min-h-screen relative flex flex-col pt-20">
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-[688px] bg-blend-color-dodge object-cover"
        alt="Background"
        src="https://c.animaapp.com/mh5u2ufjtn0KBG/img/image-28.png"
      />

      {/* Vector Decoration */}
      <img
        className="absolute top-[-68px] left-[70px] w-[1532px] h-[5586px] pointer-events-none"
        alt="Vector"
        src="https://c.animaapp.com/mh5u2ufjtn0KBG/img/vector-15.svg"
      />

      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex items-start justify-start px-8 sm:px-[94px] pt-20 sm:pt-[132px]">
        <h1 className="max-w-4xl sm:max-w-[1296px] font-bold text-[#d9d9d9] text-4xl sm:text-6xl lg:text-[125px] tracking-tight leading-tight sm:leading-[127px]">
          Reinventing Passive Income Through Blockchain Intelligence
        </h1>
      </main>
    </div>
  );
};
