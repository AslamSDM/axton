import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { ClientWeb3Provider } from "@/providers/ClientWeb3Provider";
import { Toaster } from "@/components/ui/toaster";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Axton Protocol - Decentralized OTC Trading Platform",
    template: "%s | Axton Protocol",
  },
  description:
    "Axton Protocol is a next-generation decentralized OTC trading platform built on Binance Smart Chain (BSC). Experience secure peer-to-peer trading, staking rewards, and transparent ROI tracking.",
  keywords: [
    "Axton Protocol",
    "OTC Trading",
    "Decentralized Finance",
    "DeFi",
    "BSC",
    "Binance Smart Chain",
    "Cryptocurrency",
    "Blockchain",
    "Staking",
    "ROI",
    "P2P Trading",
    "Web3",
    "Crypto Trading",
  ],
  authors: [{ name: "Axton Protocol" }],
  creator: "Axton Protocol",
  publisher: "Axton Protocol",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://axtonprotocol.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Axton Protocol - Decentralized OTC Trading Platform",
    description:
      "Experience the future of decentralized OTC trading on BSC. Secure, transparent, and efficient peer-to-peer cryptocurrency trading.",
    siteName: "Axton Protocol",
    images: [
      {
        url: "/Axton.png",
        width: 1200,
        height: 630,
        alt: "Axton Protocol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axton Protocol - Decentralized OTC Trading Platform",
    description:
      "Experience the future of decentralized OTC trading on BSC. Secure, transparent, and efficient peer-to-peer cryptocurrency trading.",
    images: ["/Axton.png"],
    creator: "@axtonprotocol",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/imagesnavbar_1.ico" },
      { url: "/Axton.png", sizes: "192x192", type: "image/png" },
      { url: "/Axton.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/Axton.png" },
      { url: "/Axton.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.json",
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#2ef68d" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/Axton.png" />
        <link rel="apple-touch-icon" href="/Axton.png" />
      </head>
      <body
        className={`${spaceMono.variable} antialiased bg-black font-[var(--font-space-mono)] font-bold`}
      >
        <ClientWeb3Provider>{children}</ClientWeb3Provider>
        <Toaster />
      </body>
    </html>
  );
}
