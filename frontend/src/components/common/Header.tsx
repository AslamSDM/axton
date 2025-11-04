import React, { useState } from 'react';

// Hamburger Menu Icon
const MenuIcon = ({ className = "" }: { className?: string }) => (
    <svg
        className={className}
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
    >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

// Close (X) Icon
const CloseIcon = ({ className = "" }: { className?: string }) => (
    <svg
        className={className}
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
    >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);


// --- Reusable NavLink ---
interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className = "" }) => (
    <a
        href={href}
        className={`text-zinc-400 hover:text-white transition-colors px-3 py-2 text-lg ${className}`}
    >
        {children}
    </a>
);

// --- Wallet Button ---
const WalletButton = () => (
    <button
        className="
      relative p-0.5 rounded-lg 
      bg-gradient-to-r from-teal-400 to-blue-500 
      hover:opacity-90 transition-opacity
    "
    >
        <div className="flex items-center bg-black rounded-md px-4 py-2">
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full mr-3"></span>
            <span className="text-white font-mono text-sm">0x22Ab...3f4c</span>
        </div>
    </button>
);

// --- Header Component ---
export function Header(): React.ReactElement {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full text-white font-mono backdrop-blur-[2px]">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo and Title */}
                    <div className="flex-shrink-0 flex items-center">
                        {/* <AxtonLogo className="h-8 w-8 mr-2" /> */}
                        <span className="text-2xl font-bold">Axton Protocol</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink href="#">Dashboard</NavLink>
                        <NavLink href="#">OTC Deck</NavLink>
                        <WalletButton />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-zinc-400 hover:text-white p-2 rounded-md"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <CloseIcon className="w-7 h-7" />
                            ) : (
                                <MenuIcon className="w-7 h-7" />
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Menu (Flyout) */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-black border-t border-zinc-800 shadow-lg z-50">
                    <div className="px-5 pt-2 pb-5 space-y-3">
                        <NavLink href="#" className="block w-full">Dashboard</NavLink>
                        <NavLink href="#" className="block w-full">OTC Deck</NavLink>
                        <div className="pt-2">
                            <WalletButton />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}