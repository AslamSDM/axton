import React, { useState } from 'react';

// --- Tab Bar Component ---
export function TabBar(): React.ReactElement {
    // "OTC Overview" is now the default active tab
    const [activeTab, setActiveTab] = useState<string>('OTC Overview');

    const tabs = ['OTC Overview', 'My Deals'];

    return (
        // Removed bg-zinc-900 from here
        <div className="w-full border-b border-zinc-800 p-0 mb-4">
            <div className="mx-auto flex space-x-8 relative">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`
              relative py-4 px-1
              text-lg font-medium
              text-zinc-400 hover:text-white
              transition-colors duration-200 cursor-pointer
              ${activeTab === tab ? 'text-white' : ''}
            `}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                        {activeTab === tab && (
                            <div
                                className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-teal-400 to-blue-500"
                            ></div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}