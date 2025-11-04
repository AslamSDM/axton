import React from 'react';

// --- Icon Component ---
const ZapIcon = ({ className = "" }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-5 h-5 ${className}`}
    >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);

const DealButton = () => (
    <button className="flex items-center justify-center w-full max-w-5xl p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity h-12 cursor-pointer">
        <ZapIcon className="mr-3" />
        Initiate An OTC Deal
    </button>
);

export default DealButton;