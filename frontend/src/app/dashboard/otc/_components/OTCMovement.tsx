import React from 'react';

// --- Type Definitions ---

interface OtcMovementData {
    id: string;
    time: string;
    fromWallet: string;
    toWallet: string;
    amount: string;
    exchange: string;
    tradeType: 'BUY' | 'SELL' | 'SWAP';
    tx: string;
    escrow: 'green' | 'red' | 'yellow';
    risk: 'Low' | 'Medium' | 'High';
}

// --- Mock Data ---
const mockOtcMovementData: OtcMovementData[] = [
    {
        id: '1',
        time: '09 OCT 2025 05:14',
        fromWallet: 'EX7A3F...9C2D',
        toWallet: 'EX4B8E...1F3A',
        amount: '12.5 ETH',
        exchange: 'COINBASE',
        tradeType: 'BUY',
        tx: 'Oxabc123',
        escrow: 'green',
        risk: 'Low',
    },
    {
        id: '2',
        time: '09 OCT 2025 05:14',
        fromWallet: 'EX7A3F...9C2D',
        toWallet: 'EX4B8E...1F3A',
        amount: '5 BTC',
        exchange: 'KRAKEN',
        tradeType: 'SELL',
        tx: 'Oxabc123',
        escrow: 'red',
        risk: 'Medium',
    },
    {
        id: '3',
        time: '09 OCT 2025 05:14',
        fromWallet: 'EX7A3F...9C2D',
        toWallet: 'EX4B8E...1F3A',
        amount: '5623 AXII',
        exchange: 'BINANCE',
        tradeType: 'SWAP',
        tx: 'Oxabc123',
        escrow: 'red',
        risk: 'High',
    },
    {
        id: '4',
        time: '09 OCT 2025 05:14',
        fromWallet: 'EX7A3F...9C2D',
        toWallet: 'EX4B8E...1F3A',
        amount: '254 SOL',
        exchange: 'COINDCX',
        tradeType: 'BUY',
        tx: 'Oxabc123',
        escrow: 'green',
        risk: 'Low',
    },
    {
        id: '5',
        time: '09 OCT 2025 05:14',
        fromWallet: 'EX7A3F...9C2D',
        toWallet: 'EX4B8E...1F3A',
        amount: '8956 USDC',
        exchange: 'BINANCE',
        tradeType: 'BUY',
        tx: 'Oxabc123',
        escrow: 'green',
        risk: 'Low',
    },
    {
        id: '6',
        time: '09 OCT 2025 05:14',
        fromWallet: 'EX7A3F...9C2D',
        toWallet: 'EX4B8E...1F3A',
        amount: '125 ETH',
        exchange: 'COINBASE',
        tradeType: 'BUY',
        tx: 'Oxabc123',
        escrow: 'yellow',
        risk: 'Medium',
    },
];

// --- STUBBED SHADCN/UI COMPONENTS ---
// Simplified versions for styling
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

// --- Helper Components ---

interface TradeTypeBadgeProps {
    type: 'BUY' | 'SELL' | 'SWAP' | string;
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

interface EscrowStatusProps {
    status: 'green' | 'red' | 'yellow';
}

const EscrowStatus: React.FC<EscrowStatusProps> = ({ status }) => {
    let bgColor;
    switch (status) {
        case 'green':
            bgColor = 'bg-green-500';
            break;
        case 'red':
            bgColor = 'bg-red-500';
            break;
        case 'yellow':
            bgColor = 'bg-yellow-500';
            break;
    }
    return (
        <div className="flex items-center justify-center">
            <span className={`w-3 h-3 rounded-full ${bgColor}`}></span>
        </div>
    );
};

interface RiskLevelProps {
    level: 'Low' | 'Medium' | 'High';
}

const RiskLevel: React.FC<RiskLevelProps> = ({ level }) => {
    let barColor, barWidth;
    switch (level) {
        case 'Low':
            barColor = 'bg-green-500';
            barWidth = 'w-1/3';
            break;
        case 'Medium':
            barColor = 'bg-yellow-500';
            barWidth = 'w-2/3';
            break;
        case 'High':
            barColor = 'bg-red-500';
            barWidth = 'w-full';
            break;
    }

    return (
        <div className="flex items-center gap-3">
            <span className="w-14">{level}</span>
            <div className="w-16 h-2 bg-zinc-700 rounded-full overflow-hidden">
                <div className={`h-full ${barColor} ${barWidth}`}></div>
            </div>
        </div>
    );
};

const WalletAddress: React.FC<{ address: string }> = ({ address }) => {
    const parts = address.split('...');
    return (
        <span className="font-mono text-blue-400 cursor-pointer hover:underline">
            {parts[0]}...{parts[1]}
        </span>
    );
};

// --- Main OTC Movement Table Component ---
export function OTCMovementTable(): React.ReactElement {
    return (
        <div className="text-white w-full my-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-white text-lg">Latest OTC Movements</h3>
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
                            <TableRow className="border-t border-zinc-800 hover:bg-transparent">
                                <TableHead>#</TableHead>
                                <TableHead>Time (UTC)</TableHead>
                                <TableHead>From Wallet</TableHead>
                                <TableHead>To Wallet</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Exchange</TableHead>
                                <TableHead>Trade Type</TableHead>
                                <TableHead>Tx</TableHead>
                                <TableHead>Escrow</TableHead>
                                <TableHead>Risk</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockOtcMovementData.map((item) => (
                                <TableRow
                                    key={item.id}
                                    className="hover:bg-zinc-800/50 transition-colors"
                                >
                                    <TableCell className="text-zinc-400">{item.id}</TableCell>
                                    <TableCell>{item.time}</TableCell>
                                    <TableCell><WalletAddress address={item.fromWallet} /></TableCell>
                                    <TableCell><WalletAddress address={item.toWallet} /></TableCell>
                                    <TableCell className="font-medium text-white">{item.amount}</TableCell>
                                    <TableCell>{item.exchange}</TableCell>
                                    <TableCell>
                                        <TradeTypeBadge type={item.tradeType} />
                                    </TableCell>
                                    <TableCell>
                                        <span className="font-mono cursor-pointer hover:underline">{item.tx}</span>
                                    </TableCell>
                                    <TableCell>
                                        <EscrowStatus status={item.escrow} />
                                    </TableCell>
                                    <TableCell>
                                        <RiskLevel level={item.risk} />
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
        <div className="flex flex-col items-center justify-start min-h-screen bg-black p-8 font-sans pt-16">
            <OTCMovementTable />
        </div>
    );
}
