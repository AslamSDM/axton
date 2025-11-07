"use client";
import React, { useState } from "react";
import { useBalanceCheck } from "@/hooks/useBalanceCheck";
import { toast } from "sonner";

// --- Type Definitions ---

interface OtcData {
  id: string;
  time: string;
  token: string;
  amount: string;
  counterparty: string;
  tradeType: "BUY" | "SELL" | "SWAP"; // Use a union of string literals
}

// --- Mock Data ---
// Mock data based on the provided image
const mockOtcData: OtcData[] = [
  {
    id: "1",
    time: "09 OCT 2025 05:14",
    token: "ETH",
    amount: "12.5 ETH",
    counterparty: "COINBASE",
    tradeType: "BUY",
  },
  {
    id: "2",
    time: "09 OCT 2025 05:14",
    token: "BTC",
    amount: "5 BTC",
    counterparty: "KRAKEN",
    tradeType: "SELL",
  },
  {
    id: "3",
    time: "09 OCT 2025 05:14",
    token: "AXII",
    amount: "5623 AXII",
    counterparty: "BINANCE",
    tradeType: "SWAP",
  },
  {
    id: "4",
    time: "09 OCT 2025 05:14",
    token: "SOL",
    amount: "254 SOL",
    counterparty: "COINDCX",
    tradeType: "BUY",
  },
  {
    id: "5",
    time: "09 OCT 2025 05:14",
    token: "USDC",
    amount: "8956 USDC",
    counterparty: "BINANCE",
    tradeType: "BUY",
  },
  {
    id: "6",
    time: "09 OCT 2025 05:14",
    token: "ETH",
    amount: "125 ETH",
    counterparty: "COINBASE",
    tradeType: "BUY",
  },
  {
    id: "7",
    time: "09 OCT 2025 04:58",
    token: "BNB",
    amount: "450 BNB",
    counterparty: "BINANCE",
    tradeType: "SELL",
  },
  {
    id: "8",
    time: "09 OCT 2025 04:45",
    token: "ADA",
    amount: "12000 ADA",
    counterparty: "KRAKEN",
    tradeType: "BUY",
  },
  {
    id: "9",
    time: "09 OCT 2025 04:30",
    token: "DOT",
    amount: "850 DOT",
    counterparty: "COINDCX",
    tradeType: "SWAP",
  },
  {
    id: "10",
    time: "09 OCT 2025 04:15",
    token: "MATIC",
    amount: "25000 MATIC",
    counterparty: "BINANCE",
    tradeType: "BUY",
  },
  {
    id: "11",
    time: "09 OCT 2025 04:00",
    token: "AVAX",
    amount: "320 AVAX",
    counterparty: "COINBASE",
    tradeType: "SELL",
  },
  {
    id: "12",
    time: "09 OCT 2025 03:45",
    token: "LINK",
    amount: "1500 LINK",
    counterparty: "KRAKEN",
    tradeType: "BUY",
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
  <th
    className={`h-12 px-4 text-left align-middle font-medium text-zinc-400 ${className}`}
  >
    {children}
  </th>
);

const TableBody: React.FC<StubComponentProps> = ({ className, children }) => (
  <tbody className={`[&_tr:last-child]:border-0 ${className}`}>
    {children}
  </tbody>
);

const TableCell: React.FC<StubComponentProps> = ({ className, children }) => (
  <td className={`p-4 align-middle text-zinc-300 ${className}`}>{children}</td>
);

// --- Trade Type Badge Component ---

interface TradeTypeBadgeProps {
  type: "BUY" | "SELL" | "SWAP" | string; // Allow string for a potential default case
}

const TradeTypeBadge: React.FC<TradeTypeBadgeProps> = ({ type }) => {
  let bgColor, textColor, borderColor;

  switch (type.toUpperCase()) {
    case "BUY":
      bgColor = "bg-green-700/50";
      textColor = "text-green-300";
      borderColor = "border-green-600";
      break;
    case "SELL":
      bgColor = "bg-red-700/50";
      textColor = "text-red-300";
      borderColor = "border-red-600";
      break;
    case "SWAP":
      bgColor = "bg-blue-700/50";
      textColor = "text-blue-300";
      borderColor = "border-blue-600";
      break;
    default:
      bgColor = "bg-zinc-700/50";
      textColor = "text-zinc-300";
      borderColor = "border-zinc-600";
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
  const [isExpanded, setIsExpanded] = useState(false);
  const { checkBalanceAndProceed } = useBalanceCheck();

  const handleViewDetails = (id: string) => {
    checkBalanceAndProceed(() => {
      toast.info("Deal Details", {
        description: `Loading details for deal #${id}...`,
      });
      console.log(`View details for deal ${id}`);
    });
  };

  const handleSeeAll = () => {
    checkBalanceAndProceed(() => {
      setIsExpanded(!isExpanded);
      toast.success(isExpanded ? "Table Collapsed" : "Showing All Listings", {
        description: isExpanded
          ? "Showing recent listings only"
          : `Displaying all ${mockOtcData.length} OTC listings`,
      });
    });
  };

  const displayedData = isExpanded ? mockOtcData : mockOtcData.slice(0, 6);

  return (
    <div className="text-white w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-white text-lg">Latest OTC Listing</h3>
        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-1 text-zinc-400 text-sm font-medium cursor-pointer hover:text-white transition-colors"
            onClick={handleSeeAll}
          >
            {isExpanded ? "SHOW LESS" : "SEE ALL"}
          </div>
        </div>
      </div>

      {/* Table Card */}
      <Card className="p-0">
        <div className="overflow-x-auto">
          <Table className="bg-[#0000006f]">
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
              {displayedData.map((item) => (
                <TableRow
                  key={item.id}
                  className="hover:bg-zinc-800/50 transition-colors"
                >
                  <TableCell className="text-zinc-400">{item.id}</TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell className="font-medium text-white">
                    {item.token}
                  </TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.counterparty}</TableCell>
                  <TableCell>
                    <TradeTypeBadge type={item.tradeType} />
                  </TableCell>
                  <TableCell>
                    <span
                      className="cursor-pointer hover:underline"
                      onClick={() => handleViewDetails(item.id)}
                    >
                      View
                    </span>
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
