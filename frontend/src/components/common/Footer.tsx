import React from 'react';
import Image from "next/image";


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

export function CopyrightBar(): React.ReactElement {
    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full bg-black pb-4 flex justify-center items-center text-zinc-500 text-sm">
            <span>
                © {currentYear} Axton Protocol. All rights reserved.
            </span>
        </div>
    );
}

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