import React from 'react';

// --- Copyright Bar Component ---
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