"use client";
import {
  StaggeredMenu,
  StaggeredMenuItem,
  StaggeredMenuSocialItem,
} from "@/components/StaggeredMenu";

const menuItems: StaggeredMenuItem[] = [
  {
    label: "Dashboard",
    ariaLabel: "Navigate to Dashboard",
    link: "/dashboard",
  },
  {
    label: "OTC",
    ariaLabel: "Navigate to OTC Trading",
    link: "/dashboard/otc",
  },
  {
    label: "ROI",
    ariaLabel: "Navigate to ROI",
    link: "/dashboard/roi",
  },
  {
    label: "My Deals",
    ariaLabel: "Navigate to My Deals",
    link: "/dashboard/otc/mydeals",
  },
];

const socialItems: StaggeredMenuSocialItem[] = [
  {
    label: "Twitter",
    link: "https://twitter.com/axtonprotocol",
  },
  {
    label: "Discord",
    link: "https://discord.gg/axton",
  },
  {
    label: "Telegram",
    link: "https://t.me/axtonprotocol",
  },
];

export function Sidebar() {
  return (
    <StaggeredMenu
      position="left"
      colors={["#0a0a0a", "#1a1a1a", "#2a2a2a"]}
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      logoUrl="/Axton.png"
      menuButtonColor="#2ef68d"
      openMenuButtonColor="#000000"
      accentColor="#478ff5"
      isFixed={true}
      changeMenuColorOnOpen={true}
    />
  );
}
