"use client";

const imgIcons =
  "/images/sidebar_3.svg";
const imgIcons1 =
  "/images/sidebar_4.svg"
const imgVector =
  "/images/sidebar_5.svg"
const imgGroup64 =
  "/images/sidebar_6.svg"

interface AxtonSidebarProps {
  isOpen: boolean;
  onCloseAction: () => void;
}

export default function AxtonSidebar({
  isOpen,
  onCloseAction,
}: AxtonSidebarProps) {
  const menuItems = [
    { title: "About", number: "01", id: "about" },
    { title: "Packages", number: "02", id: "packages" },
    { title: "Structure", number: "03", id: "structure" },
    { title: "Analytics", number: "04", id: "analytics" },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      onCloseAction();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[5px] z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={onCloseAction}
      >
      </div>

      {/* Sidebar Panel */}
      <div
        className={`fixed left-0 top-0 h-screen w-[462px] bg-[#1f1f1f] z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onCloseAction}
          className="absolute right-[48px] top-[32px] flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="font-['Space_Mono',monospace] text-[18px] text-white tracking-[-0.9px]">
            Close
          </span>
          <div className="w-[17px] h-[17px]">
            <img
              alt="Close"
              className="block max-w-none size-full"
              src={imgGroup64}
            />
          </div>
        </button>

        {/* Navigation Menu */}
        <nav className="pt-[172px] px-[72px]">
          {/* Menu Items */}
          <ul className="space-y-[48px]">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center gap-4 group cursor-pointer w-full text-left"
                >
                  <span className="font-['Space_Mono',monospace] font-bold text-[44px] text-white tracking-[-2.2px] group-hover:text-[#2ef68d] transition-colors">
                    {item.title}
                  </span>
                  <span className="font-['Space_Mono',monospace] text-[24px] text-[#2ef68d] tracking-[-1.2px]">
                    {item.number}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Socials Section */}
          <div className="mt-[268px]">
            <p className="font-['Space_Mono',monospace] text-[24px] text-white tracking-[-1.2px] mb-4">
              Socials
            </p>
            <div className="flex items-center gap-4">
              {/* GitHub */}
              <a
                href="#"
                className="w-[17px] h-[17px] hover:opacity-70 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="GitHub"
                  className="block max-w-none size-full"
                  src={imgIcons}
                />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-[17px] h-[17px] hover:opacity-70 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="LinkedIn"
                  className="block max-w-none size-full"
                  src={imgIcons1}
                />
              </a>

              {/* X/Twitter */}
              <a
                href="#"
                className="w-[17px] h-[17px] hover:opacity-70 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="X"
                  className="block max-w-none size-full"
                  src={imgVector}
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
