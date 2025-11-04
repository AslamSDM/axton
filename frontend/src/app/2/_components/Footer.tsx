import React from 'react';
import Image from "next/image";
import { CopyrightBar } from './CopyrightBar';

// --- Logo Component ---
// Placeholder SVG for the logo in the image
const AxtonLogo = ({ className = "" }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={`w-8 h-8 ${className}`}
    >
        {/* A simple 'A' shape for Axton */}
        <path d="M12 2 L4 20 L8 20 L10 14 L14 14 L16 20 L20 20 Z" stroke="#00F0B0" />
        {/* Small triangle inside */}
        <path d="M10 10 L12 6 L14 10 Z" fill="#00F0B0" stroke="#00F0B0" />
    </svg>
);


// --- Footer Link Column ---
interface FooterLinkColumnProps {
    title: string;
    links: string[];
}

const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({ title, links }) => (
    <div className="flex flex-col space-y-4">
        <h4 className="font-semibold text-white text-lg">{title}</h4>
        <ul className="space-y-3">
            {links.map((link) => (
                <li key={link}>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

// --- Main Footer Component ---
export function Footer(): React.ReactElement {
    const protocolLinks = ["Markets", "OTC", "Swap", "Stake"];
    const resourcesLinks = ["Analytics", "API", "Docs", "GitHub"];
    const legalLinks = ["Privacy", "Terms", "Disclaimer", "Cookie Policy"];

    return (
        <footer className="w-full text-white pt-16 pb-4 px-8 bg-black">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">

                {/* Column 1: Axton Protocol Info */}
                <div className="md:col-span-3 lg:col-span-2 flex flex-col space-y-6">
                    <h3 className="font-semibold text-white text-2xl">Axton Protocol</h3>
                    <p className="text-zinc-400 leading-relaxed">
                        Advanced OTC infrastructure for the decentralized era. Built for whales, funds, and traders seeking privacy and liquidity.
                    </p>
                    <div className="pt-4">
                        <div className="p-2 mb-4 relative w-14 h-14">
                            <Image
                                src="/Axton.png"
                                alt="Axton"
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>

                {/* Column 2: Protocol Links */}
                <div>
                    <FooterLinkColumn title="Protocol" links={protocolLinks} />
                </div>

                {/* Column 3: Resources Links */}
                <div>
                    <FooterLinkColumn title="Resources" links={resourcesLinks} />
                </div>

                {/* Column 4: Legal Links */}
                <div>
                    <FooterLinkColumn title="Legal" links={legalLinks} />
                </div>

            </div>
            <CopyrightBar />
        </footer>
    );
}