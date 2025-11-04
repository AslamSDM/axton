import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { Sidebar } from "@/components/common/sidebar";
import LetterGlitch from "@/components/LetterGlitch";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen text-white bg-black">
      {/* Pattern overlay */}
      <div
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background: "rgba(0, 0, 0, 0.67)",
          backgroundImage: `repeating-linear-gradient(
        135deg,
        transparent,
        transparent 30px,
        rgba(255, 255, 255, 0.08) 20px,
        rgba(255, 255, 255, 0.08) 32px
      )`,
        }}
      />

      {/* Animated background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="blur-[2px] h-full">
          <LetterGlitch glitchColors={["#ff0000", "#00ff00", "#0000ff"]} characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" glitchSpeed={50} centerVignette={true} outerVignette={false} smooth={true} />
          <FlickeringGrid className="absolute inset-0 z-0 size-full" squareSize={2} gridGap={6} color="#7daa98ff" maxOpacity={0.3} flickerChance={0.5} />
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-20">
        <Sidebar />
        <div className="ml-16">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
