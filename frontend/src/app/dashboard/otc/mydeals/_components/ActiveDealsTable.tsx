"use client";
import React, { useState } from "react";
import { LabeledDropdown } from "./LabeledDropdown";

const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const Eye = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const MessageCircle = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const MoreVertical = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>
);

const ChevronLeft = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

// --- Type Definitions ---

type TradeType = "BUY" | "SELL" | "SWAP";
type DealStatus = "Processing" | "Pending" | "Complete" | "Failed";
type RiskLevel = "Low" | "Medium" | "High";

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

const allMockDeals: DealData[] = [
  {
    id: "1",
    time: "09 OCT 2025 05:14",
    token: "ETH",
    price: 3450.5,
    amount: "12.5 ETH",
    counterparty: "COINBASE",
    tradeType: "BUY",
    status: "Processing",
    settlement: "T+1",
    risk: "Low",
  },
  {
    id: "2",
    time: "09 OCT 2025 04:32",
    token: "BTC",
    price: 45200.0,
    amount: "5 BTC",
    counterparty: "KRAKEN",
    tradeType: "SELL",
    status: "Pending",
    settlement: "T+0",
    risk: "Medium",
  },
  {
    id: "3",
    time: "09 OCT 2025 03:45",
    token: "AXII",
    price: 120.1,
    amount: "5623 AXII",
    counterparty: "BINANCE",
    tradeType: "SWAP",
    status: "Complete",
    settlement: "T+2",
    risk: "High",
  },
  {
    id: "4",
    time: "09 OCT 2025 02:18",
    token: "SOL",
    price: 150.75,
    amount: "254 SOL",
    counterparty: "COINDCX",
    tradeType: "BUY",
    status: "Processing",
    settlement: "T+1",
    risk: "Low",
  },
  {
    id: "5",
    time: "09 OCT 2025 01:56",
    token: "USDC",
    price: 1.0,
    amount: "8956 USDC",
    counterparty: "BINANCE",
    tradeType: "BUY",
    status: "Failed",
    settlement: "T+0",
    risk: "Low",
  },
  {
    id: "6",
    time: "08 OCT 2025 23:42",
    token: "ETH",
    price: 3452.0,
    amount: "125 ETH",
    counterparty: "COINBASE",
    tradeType: "BUY",
    status: "Pending",
    settlement: "T+1",
    risk: "Medium",
  },
  {
    id: "7",
    time: "08 OCT 2025 22:15",
    token: "BTC",
    price: 45100.0,
    amount: "2.5 BTC",
    counterparty: "KRAKEN",
    tradeType: "BUY",
    status: "Complete",
    settlement: "T+0",
    risk: "Low",
  },
  {
    id: "8",
    time: "08 OCT 2025 21:30",
    token: "SOL",
    price: 148.9,
    amount: "500 SOL",
    counterparty: "BINANCE",
    tradeType: "SELL",
    status: "Processing",
    settlement: "T+1",
    risk: "Medium",
  },
  {
    id: "9",
    time: "08 OCT 2025 20:05",
    token: "AXII",
    price: 119.5,
    amount: "3200 AXII",
    counterparty: "COINDCX",
    tradeType: "BUY",
    status: "Complete",
    settlement: "T+2",
    risk: "High",
  },
  {
    id: "10",
    time: "08 OCT 2025 19:22",
    token: "USDC",
    price: 1.0,
    amount: "15000 USDC",
    counterparty: "COINBASE",
    tradeType: "SWAP",
    status: "Complete",
    settlement: "T+0",
    risk: "Low",
  },
  {
    id: "11",
    time: "08 OCT 2025 18:45",
    token: "ETH",
    price: 3445.25,
    amount: "8.75 ETH",
    counterparty: "KRAKEN",
    tradeType: "SELL",
    status: "Processing",
    settlement: "T+1",
    risk: "Medium",
  },
  {
    id: "12",
    time: "08 OCT 2025 17:33",
    token: "BTC",
    price: 45300.0,
    amount: "1.8 BTC",
    counterparty: "BINANCE",
    tradeType: "BUY",
    status: "Pending",
    settlement: "T+0",
    risk: "Low",
  },
  {
    id: "13",
    time: "08 OCT 2025 16:18",
    token: "SOL",
    price: 151.2,
    amount: "750 SOL",
    counterparty: "COINDCX",
    tradeType: "SWAP",
    status: "Complete",
    settlement: "T+1",
    risk: "High",
  },
  {
    id: "14",
    time: "08 OCT 2025 15:50",
    token: "AXII",
    price: 121.3,
    amount: "4500 AXII",
    counterparty: "COINBASE",
    tradeType: "BUY",
    status: "Processing",
    settlement: "T+2",
    risk: "Medium",
  },
  {
    id: "15",
    time: "08 OCT 2025 14:25",
    token: "ETH",
    price: 3460.75,
    amount: "15.3 ETH",
    counterparty: "BINANCE",
    tradeType: "BUY",
    status: "Complete",
    settlement: "T+1",
    risk: "Low",
  },
  {
    id: "16",
    time: "08 OCT 2025 13:40",
    token: "USDC",
    price: 1.0,
    amount: "22000 USDC",
    counterparty: "KRAKEN",
    tradeType: "BUY",
    status: "Failed",
    settlement: "T+0",
    risk: "Low",
  },
  {
    id: "17",
    time: "08 OCT 2025 12:15",
    token: "BTC",
    price: 45450.0,
    amount: "3.2 BTC",
    counterparty: "COINDCX",
    tradeType: "SELL",
    status: "Complete",
    settlement: "T+0",
    risk: "Medium",
  },
  {
    id: "18",
    time: "08 OCT 2025 11:05",
    token: "SOL",
    price: 149.6,
    amount: "890 SOL",
    counterparty: "COINBASE",
    tradeType: "BUY",
    status: "Pending",
    settlement: "T+1",
    risk: "High",
  },
  {
    id: "19",
    time: "08 OCT 2025 10:30",
    token: "AXII",
    price: 118.75,
    amount: "6700 AXII",
    counterparty: "BINANCE",
    tradeType: "SWAP",
    status: "Processing",
    settlement: "T+2",
    risk: "Low",
  },
  {
    id: "20",
    time: "08 OCT 2025 09:45",
    token: "ETH",
    price: 3455.0,
    amount: "20.5 ETH",
    counterparty: "KRAKEN",
    tradeType: "BUY",
    status: "Complete",
    settlement: "T+1",
    risk: "Medium",
  },
  {
    id: "21",
    time: "08 OCT 2025 08:20",
    token: "BTC",
    price: 45350.0,
    amount: "4.5 BTC",
    counterparty: "COINDCX",
    tradeType: "BUY",
    status: "Processing",
    settlement: "T+0",
    risk: "Low",
  },
  {
    id: "22",
    time: "08 OCT 2025 07:55",
    token: "USDC",
    price: 1.0,
    amount: "18500 USDC",
    counterparty: "BINANCE",
    tradeType: "SELL",
    status: "Complete",
    settlement: "T+0",
    risk: "Low",
  },
  {
    id: "23",
    time: "08 OCT 2025 06:30",
    token: "SOL",
    price: 152.4,
    amount: "420 SOL",
    counterparty: "COINBASE",
    tradeType: "SWAP",
    status: "Pending",
    settlement: "T+1",
    risk: "High",
  },
  {
    id: "24",
    time: "08 OCT 2025 05:18",
    token: "AXII",
    price: 122.5,
    amount: "5100 AXII",
    counterparty: "KRAKEN",
    tradeType: "BUY",
    status: "Failed",
    settlement: "T+2",
    risk: "Medium",
  },
  {
    id: "25",
    time: "08 OCT 2025 04:45",
    token: "ETH",
    price: 3448.3,
    amount: "9.8 ETH",
    counterparty: "BINANCE",
    tradeType: "SELL",
    status: "Complete",
    settlement: "T+1",
    risk: "Low",
  },
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
    BUY: "bg-green-700/50 text-green-300 border-green-600",
    SELL: "bg-red-700/50 text-red-300 border-red-600",
    SWAP: "bg-blue-700/50 text-blue-300 border-blue-600",
  };
  return (
    <span
      className={`px-4 py-1.5 text-xs font-semibold border ${styles[type]}`}
    >
      {type}
    </span>
  );
};

const StatusDot: React.FC<{ status: DealStatus }> = ({ status }) => {
  const color: Record<DealStatus, string> = {
    Processing: "text-yellow-400",
    Pending: "text-blue-400",
    Complete: "text-green-400",
    Failed: "text-red-400",
  };
  return <span className={`text-sm ${color[status]}`}>● {status}</span>;
};

const RiskIndicator: React.FC<{ level: RiskLevel }> = ({ level }) => {
  const styles: Record<RiskLevel, { dot: string; bar: string; text: string }> =
    {
      Low: { dot: "bg-green-500", bar: "bg-green-500", text: "text-green-400" },
      Medium: {
        dot: "bg-yellow-500",
        bar: "bg-yellow-500",
        text: "text-yellow-400",
      },
      High: { dot: "bg-red-500", bar: "bg-red-500", text: "text-red-400" },
    };
  const width: Record<RiskLevel, string> = {
    Low: "w-1/3",
    Medium: "w-2/3",
    High: "w-full",
  };

  return (
    <div className="flex items-center space-x-2">
      <span className={`w-2.5 h-2.5 ${styles[level].dot} rounded-full`}></span>
      <span className={`font-medium ${styles[level].text}`}>{level}</span>
      <div className="w-16 h-1.5 bg-zinc-700 rounded-full">
        <div
          className={`h-full ${styles[level].bar} ${width[level]} rounded-full`}
        ></div>
      </div>
    </div>
  );
};

const Pagination = ({
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(currentPage + 1, totalPages - 1);
        i++
      ) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-between items-center text-zinc-400 text-sm mt-6">
      <span>
        Showing {startItem} to {endItem} of {totalItems} entries
      </span>
      <div className="flex items-center space-x-2">
        <button
          className="p-2 border border-zinc-400 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        {getPageNumbers().map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              className={`px-4 py-2 border border-zinc-400 hover:bg-zinc-700 ${
                currentPage === page ? "bg-white text-black" : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ) : (
            <span key={index}>{page}</span>
          )
        )}
        <button
          className="p-2 border border-zinc-400 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// --- Main Active Deals Table Component ---
export function ActiveDealsTable(): React.ReactElement {
  const [currentPage, setCurrentPage] = useState(1);
  const [tokenFilter, setTokenFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [riskFilter, setRiskFilter] = useState("All");
  const itemsPerPage = 10;

  const tokenOptions = ["All", "ETH", "BTC", "SOL", "USDC", "AXII"];
  const typeOptions = ["All", "BUY", "SELL", "SWAP"];
  const statusOptions = ["All", "Processing", "Pending", "Complete", "Failed"];
  const riskOptions = ["All", "Low", "Medium", "High"];

  // Apply filters
  const filteredDeals = allMockDeals.filter((deal) => {
    if (tokenFilter !== "All" && deal.token !== tokenFilter) return false;
    if (typeFilter !== "All" && deal.tradeType !== typeFilter) return false;
    if (statusFilter !== "All" && deal.status !== statusFilter) return false;
    if (riskFilter !== "All" && deal.risk !== riskFilter) return false;
    return true;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredDeals.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDeals = filteredDeals.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const handleApplyFilters = () => {
    handleFilterChange();
  };

  return (
    <div className="text-white w-full mx-auto font-mono bg-[#0000009c] p-6 mt-8">
      {/* Filters Section */}
      {/* Updated this container to align filters to the right */}
      <div className="flex flex-wrap justify-between items-center mb-6">
        <div className="text-lg">Active Deals</div>
        <div className="flex flex-wrap gap-6 items-center">
          <div>
            <LabeledDropdown
              label="Token"
              options={tokenOptions}
              defaultValue={tokenFilter}
              onValueChange={setTokenFilter}
            />
          </div>
          <div>
            <LabeledDropdown
              label="Type"
              options={typeOptions}
              defaultValue={typeFilter}
              onValueChange={setTypeFilter}
            />
          </div>
          <div>
            <LabeledDropdown
              label="Status"
              options={statusOptions}
              defaultValue={statusFilter}
              onValueChange={setStatusFilter}
            />
          </div>
          <div>
            <LabeledDropdown
              label="Risk Level"
              options={riskOptions}
              defaultValue={riskFilter}
              onValueChange={setRiskFilter}
            />
          </div>
          <button
            onClick={handleApplyFilters}
            className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold py-2 rounded-lg ml-8 h-12 px-12"
          >
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
              {currentDeals.map((deal) => (
                <tr
                  key={deal.id}
                  className="hover:bg-zinc-800/50 transition-colors [&>td]:px-4 [&>td]:py-4 [&>td]:text-zinc-300"
                >
                  <td>{deal.time}</td>
                  <td className="font-medium text-white">{deal.token}</td>
                  <td>
                    $
                    {deal.price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td>{deal.amount}</td>
                  <td>{deal.counterparty}</td>
                  <td>
                    <TradeTypeBadge type={deal.tradeType} />
                  </td>
                  <td>
                    <StatusDot status={deal.status} />
                  </td>
                  <td>{deal.settlement}</td>
                  <td>
                    <RiskIndicator level={deal.risk} />
                  </td>
                  <td>
                    <div className="flex items-center space-x-3 text-zinc-400">
                      <button className="hover:text-white">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="hover:text-white">
                        <MessageCircle className="w-5 h-5" />
                      </button>
                      <button className="hover:text-white">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Section */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        totalItems={filteredDeals.length}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
