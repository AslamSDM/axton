"use client";
import React, { useState } from 'react';
import { LabeledDropdown } from './LabeledDropdown';


const ChevronDown = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

const Eye = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);

const MessageCircle = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
);

const MoreVertical = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="12" cy="5" r="1"></circle>
        <circle cx="12" cy="19" r="1"></circle>
    </svg>
);

const ChevronLeft = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
);

const ChevronRight = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

// --- Type Definitions ---

type TradeType = 'BUY' | 'SELL' | 'SWAP';
type DealStatus = 'Processing' | 'Pending' | 'Complete' | 'Failed';
type RiskLevel = 'Low' | 'Medium' | 'High';

interface DealData {
    id: string;
    time: string;
    token: string;
    price: number;
    amount: string;
    counterparty: string;
    tradeType: TradeType;
    status: DealStatus;
    settlement: string;
    risk: RiskLevel;
}

// --- Mock Data ---

const mockDeals: DealData[] = [
    { id: '1', time: '09 OCT 2025 05:14', token: 'ETH', price: 3450.50, amount: '12.5 ETH', counterparty: 'COINBASE', tradeType: 'BUY', status: 'Processing', settlement: 'T+1', risk: 'Low' },
    { id: '2', time: '09 OCT 2025 05:14', token: 'BTC', price: 45200.00, amount: '5 BTC', counterparty: 'KRAKEN', tradeType: 'SELL', status: 'Pending', settlement: 'T+0', risk: 'Medium' },
    { id: '3', time: '09 OCT 2025 05:14', token: 'AXII', price: 120.10, amount: '5623 AXII', counterparty: 'BINANCE', tradeType: 'SWAP', status: 'Complete', settlement: 'T+2', risk: 'High' },
    { id: '4', time: '09 OCT 2025 05:14', token: 'SOL', price: 150.75, amount: '254 SOL', counterparty: 'COINDCX', tradeType: 'BUY', status: 'Processing', settlement: 'T+1', risk: 'Low' },
    { id: '5', time: '09 OCT 2025 05:14', token: 'USDC', price: 1.00, amount: '8956 USDC', counterparty: 'BINANCE', tradeType: 'BUY', status: 'Failed', settlement: 'T+0', risk: 'Low' },
    { id: '6', time: '09 OCT 2025 05:14', token: 'ETH', price: 3452.00, amount: '125 ETH', counterparty: 'COINBASE', tradeType: 'BUY', status: 'Pending', settlement: 'T+1', risk: 'Medium' },
];


interface FilterDropdownProps {
    label: string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label }) => (
    <button className="flex items-center justify-between bg-zinc-800 text-zinc-300 px-4 py-2 rounded-lg text-sm w-full md:w-auto">
        <span>{label}</span>
        <ChevronDown className="w-4 h-4 ml-2" />
    </button>
);

const TradeTypeBadge: React.FC<{ type: TradeType }> = ({ type }) => {
    const styles: Record<TradeType, string> = {
        BUY: 'bg-green-700/50 text-green-300 border-green-600',
        SELL: 'bg-red-700/50 text-red-300 border-red-600',
        SWAP: 'bg-blue-700/50 text-blue-300 border-blue-600',
    };
    return (
        <span className={`px-4 py-1.5 text-xs font-semibold border ${styles[type]}`}>
            {type}
        </span>
    );
};

const StatusDot: React.FC<{ status: DealStatus }> = ({ status }) => {
    const color: Record<DealStatus, string> = {
        Processing: 'text-yellow-400',
        Pending: 'text-blue-400',
        Complete: 'text-green-400',
        Failed: 'text-red-400',
    };
    return <span className={`text-sm ${color[status]}`}>● {status}</span>;
};

const RiskIndicator: React.FC<{ level: RiskLevel }> = ({ level }) => {
    const styles: Record<RiskLevel, { dot: string, bar: string, text: string }> = {
        Low: { dot: 'bg-green-500', bar: 'bg-green-500', text: 'text-green-400' },
        Medium: { dot: 'bg-yellow-500', bar: 'bg-yellow-500', text: 'text-yellow-400' },
        High: { dot: 'bg-red-500', bar: 'bg-red-500', text: 'text-red-400' },
    };
    const width: Record<RiskLevel, string> = {
        Low: 'w-1/3',
        Medium: 'w-2/3',
        High: 'w-full',
    };

    return (
        <div className="flex items-center space-x-2">
            <span className={`w-2.5 h-2.5 ${styles[level].dot} rounded-full`}></span>
            <span className={`font-medium ${styles[level].text}`}>{level}</span>
            <div className="w-16 h-1.5 bg-zinc-700 rounded-full">
                <div className={`h-full ${styles[level].bar} ${width[level]} rounded-full`}></div>
            </div>
        </div>
    );
};

const Pagination = () => (
    <div className="flex justify-between items-center text-zinc-400 text-sm mt-6">
        <span>Showing 1 to 6 of 100 entries</span>
        <div className="flex items-center space-x-2">
            <button className="p-2 border border-zinc-400 hover:bg-zinc-700 disabled:opacity-50" disabled>
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 border border-zinc-400 bg-white text-black">1</button>
            <button className="px-4 py-2 border border-zinc-400 hover:bg-zinc-700">2</button>
            <button className="px-4 py-2 border border-zinc-400 hover:bg-zinc-700">3</button>
            <span>...</span>
            <button className="px-4 py-2 border border-zinc-400 hover:bg-zinc-700">10</button>
            <button className="p-2 border border-zinc-400 hover:bg-zinc-700">
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    </div>
);

// --- Main Active Deals Table Component ---
export function ActiveDealsTable(): React.ReactElement {

    const mockDropdownData = ['All', 'ETH', 'BTC', 'SOL', 'USDC', 'AXII'];

    return (
        <div className="text-white w-full mx-auto font-mono bg-[#0000009c] p-6 mt-8">

            {/* Filters Section */}
            {/* Updated this container to align filters to the right */}
            <div className="flex flex-wrap justify-between items-center mb-6">
                <div className='text-lg'>Active Deals</div>
                <div className='flex flex-wrap gap-6 items-center'>
                    <div>
                        <LabeledDropdown
                            label='Token'
                            options={mockDropdownData}
                            defaultValue='All'
                        />
                    </div>
                    <div>
                        <LabeledDropdown
                            label='Type'
                            options={mockDropdownData}
                            defaultValue='All'
                        />
                    </div>
                    <div>
                        <LabeledDropdown
                            label='Status'
                            options={mockDropdownData}
                            defaultValue='All'
                        />
                    </div>
                    <div>
                        <LabeledDropdown
                            label='Risk Level'
                            options={mockDropdownData}
                            defaultValue='All'
                        />
                    </div>
                    <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold py-2 rounded-lg ml-8 h-12 px-12">
                        Apply
                    </button>
                </div>
            </div>

            {/* Table Card */}
            <div className="bg-transparent border border-zinc-800 rounded-lg p-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm min-w-[1200px]">
                        <thead className="border-b border-zinc-800">
                            <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:text-left [&>th]:font-medium [&>th]:text-zinc-400">
                                <th>Time (UTC)</th>
                                <th>Token</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Counterparty</th>
                                <th>Trade Type</th>
                                <th>Status</th>
                                <th>Settlement</th>
                                <th>Risk</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800">
                            {mockDeals.map((deal) => (
                                <tr key={deal.id} className="hover:bg-zinc-800/50 transition-colors [&>td]:px-4 [&>td]:py-4 [&>td]:text-zinc-300">
                                    <td>{deal.time}</td>
                                    <td className="font-medium text-white">{deal.token}</td>
                                    <td>${deal.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                    <td>{deal.amount}</td>
                                    <td>{deal.counterparty}</td>
                                    <td><TradeTypeBadge type={deal.tradeType} /></td>
                                    <td><StatusDot status={deal.status} /></td>
                                    <td>{deal.settlement}</td>
                                    <td><RiskIndicator level={deal.risk} /></td>
                                    <td>
                                        <div className="flex items-center space-x-3 text-zinc-400">
                                            <button className="hover:text-white"><Eye className="w-5 h-5" /></button>
                                            <button className="hover:text-white"><MessageCircle className="w-5 h-5" /></button>
                                            <button className="hover:text-white"><MoreVertical className="w-5 h-5" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination Section */}
            <Pagination />
        </div>
    );
}
