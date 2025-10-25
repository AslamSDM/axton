import Image from "next/image";

export function CommunitySection() {
  const icons = [
    { src: "/spark.png", alt: "Spark" },
    { src: "/window.svg", alt: "Window" },
    { src: "/globe.svg", alt: "Globe" },
    { src: "/dollar.png", alt: "Dollar" },
    { src: "/dollarslim.png", alt: "Dollar Slim" },
  ];

  return (
    <div className="mt-12 text-center px-8">
      <h3 className="text-lg font-semibold text-white mb-2">
        Secure and Integrated Community
      </h3>
      <div className="flex justify-center items-center gap-8 text-zinc-500 mt-6">
        {icons.map((icon) => (
          <div
            key={icon.alt}
            className="relative w-7 h-7 hover:text-white transition-colors"
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
