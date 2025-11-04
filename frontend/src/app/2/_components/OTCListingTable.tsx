"use client";
import React from 'react';

// --- Type Definitions ---

interface OtcData {
    id: string;
    time: string;
    token: string;
    amount: string;
    counterparty: string;
    tradeType: 'BUY' | 'SELL' | 'SWAP'; // Use a union of string literals
}

// --- Mock Data ---
// Mock data based on the provided image
const mockOtcData: OtcData[] = [
    {
        id: '1',
        time: '09 OCT 2025 05:14',
        token: 'ETH',
        amount: '12.5 ETH',
        counterparty: 'COINBASE',
        tradeType: 'BUY',
    },
    {
        id: '2',
        time: '09 OCT 2025 05:14',
        token: 'BTC',
        amount: '5 BTC',
        counterparty: 'KRAKEN',
        tradeType: 'SELL',
    },
    {
        id: '3',
        time: '09 OCT 2025 05:14',
        token: 'AXII',
        amount: '5623 AXII',
        counterparty: 'BINANCE',
        tradeType: 'SWAP',
    },
    {
        id: '4',
        time: '09 OCT 2025 05:14',
        token: 'SOL',
        amount: '254 SOL',
        counterparty: 'COINDCX',
        tradeType: 'BUY',
    },
    {
        id: '5',
        time: '09 OCT 2025 05:14',
        token: 'USDC',
        amount: '8956 USDC',
        counterparty: 'BINANCE',
        tradeType: 'BUY',
    },
    {
        id: '6',
        time: '09 OCT 2025 05:14',
        token: 'ETH',
        amount: '125 ETH',
        counterparty: 'COINBASE',
        tradeType: 'BUY',
    },
];

// --- STUBBED SHADCN/UI COMPONENTS ---
// These are simplified versions for styling purposes, with TypeScript props.

interface StubComponentProps {
    className?: string;
    children: React.ReactNode;
}

const Card: React.FC<StubComponentProps> = ({ className, children }) => (
    <div className={`bg-transparent border border-zinc-800 ${className}`}>
        {children}
    </div>
);

const Table: React.FC<StubComponentProps> = ({ className, children }) => (
    <table className={`w-full text-sm ${className}`}>{children}</table>
);

const TableHeader: React.FC<StubComponentProps> = ({ className, children }) => (
    <thead className={className}>{children}</thead>
);

const TableRow: React.FC<StubComponentProps> = ({ className, children }) => (
    <tr className={`border-b border-zinc-800 ${className}`}>{children}</tr>
);

const TableHead: React.FC<StubComponentProps> = ({ className, children }) => (
    <th className={`h-12 px-4 text-left align-middle font-medium text-zinc-400 ${className}`}>
        {children}
    </th>
);

const TableBody: React.FC<StubComponentProps> = ({ className, children }) => (
    <tbody className={`[&_tr:last-child]:border-0 ${className}`}>{children}</tbody>
);

const TableCell: React.FC<StubComponentProps> = ({ className, children }) => (
    <td className={`p-4 align-middle text-zinc-300 ${className}`}>{children}</td>
);

// --- Trade Type Badge Component ---

interface TradeTypeBadgeProps {
    type: 'BUY' | 'SELL' | 'SWAP' | string; // Allow string for a potential default case
}

const TradeTypeBadge: React.FC<TradeTypeBadgeProps> = ({ type }) => {
    let bgColor, textColor, borderColor;

    switch (type.toUpperCase()) {
        case 'BUY':
            bgColor = 'bg-green-700/50';
            textColor = 'text-green-300';
            borderColor = 'border-green-600';
            break;
        case 'SELL':
            bgColor = 'bg-red-700/50';
            textColor = 'text-red-300';
            borderColor = 'border-red-600';
            break;
        case 'SWAP':
            bgColor = 'bg-blue-700/50';
            textColor = 'text-blue-300';
            borderColor = 'border-blue-600';
            break;
        default:
            bgColor = 'bg-zinc-700/50';
            textColor = 'text-zinc-300';
            borderColor = 'border-zinc-600';
    }

    return (
        <span
            className={`px-4 py-1.5 rounded text-xs font-semibold ${bgColor} ${textColor} border ${borderColor}`}
        >
            {type.toUpperCase()}
        </span>
    );
};

// --- Main OTC Listing Table Component ---
export function OTCListingTable(): React.ReactElement {
    return (
        <div className="text-white w-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white text-lg">Latest OTC Listing</h3>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-zinc-400 text-sm font-medium cursor-pointer hover:text-white">
                        SEE ALL
                    </div>
                </div>
            </div>

            {/* Table Card */}
            <Card className="p-0">
                <div className="overflow-x-auto">
                    <Table className='bg-[#0000006f]'>
                        <TableHeader>
                            {/* Header row with a top border to match the image */}
                            <TableRow className="border-t border-zinc-800 hover:bg-transparent">
                                <TableHead>#</TableHead>
                                <TableHead>Time (UTC)</TableHead>
                                <TableHead>Token</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Counterparty</TableHead>
                                <TableHead>Trade Type</TableHead>
                                <TableHead>Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockOtcData.map((item) => (
                                <TableRow
                                    key={item.id}
                                    className="hover:bg-zinc-800/50 transition-colors"
                                >
                                    <TableCell className="text-zinc-400">{item.id}</TableCell>
                                    <TableCell>{item.time}</TableCell>
                                    <TableCell className="font-medium text-white">{item.token}</TableCell>
                                    <TableCell>{item.amount}</TableCell>
                                    <TableCell>{item.counterparty}</TableCell>
                                    <TableCell>
                                        <TradeTypeBadge type={item.tradeType} />
                                    </TableCell>
                                    <TableCell>
                                        <span className="cursor-pointer hover:underline">View</span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </div>
    );
}

// --- Main App Component ---
export default function App(): React.ReactElement {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black p-8 font-sans">
            <OTCListingTable />
        </div>
    );
}