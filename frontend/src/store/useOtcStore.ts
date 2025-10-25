import { create } from "zustand";

export type Transaction = {
  buyer: string;
  seller: string;
  amount: string;
  token: string;
  tradeType: string;
  time: string;
};

export type OtcMovement = {
  time: string;
  token: string;
  pair: string;
  tradeType: string;
  buyer: string;
  seller: string;
};

export type MarketData = {
  asset: string;
  symbol: string;
  price: number;
  volume: number;
  priceChange24h: number;
  marketCap: number;
};

export type StatCardData = {
  totalOtcVolume: string;
  dailyWrapCount: string;
  topTraders: string;
  activeProposals: string;
  totalLiquidity: string;
  axnNetFlow: string;
};

type OtcStore = {
  // WebSocket state
  ws: WebSocket | null;
  isConnected: boolean;

  // Data
  transactions: Transaction[];
  movements: OtcMovement[];
  marketData: MarketData[];
  statCardData: StatCardData | null;

  // Actions
  connect: (url?: string) => void;
  disconnect: () => void;
  addTransaction: (transaction: Transaction) => void;
  addMovement: (movement: OtcMovement) => void;
  setTransactions: (transactions: Transaction[]) => void;
  setMovements: (movements: OtcMovement[]) => void;
  setMarketData: (data: MarketData[]) => void;
  setStatCardData: (data: StatCardData) => void;
};

// Initial data
const initialTransactions: Transaction[] = [
  {
    buyer: "0x1e...3f4e",
    seller: "7d8d...7b84",
    amount: "150,000",
    token: "USDC",
    tradeType: "STAKE",
    time: new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    buyer: "0x1e...3f4e",
    seller: "7d8d...7b84",
    amount: "150,000",
    token: "USDC",
    tradeType: "BUY",
    time: new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    buyer: "0x1e...3f4e",
    seller: "7d8d...7b84",
    amount: "150,000",
    token: "USDC",
    tradeType: "SELL",
    time: new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    buyer: "0x1e...3f4e",
    seller: "7d8d...7b84",
    amount: "150,000",
    token: "USDC",
    tradeType: "BUY",
    time: new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
];

export const useOtcStore = create<OtcStore>((set, get) => ({
  ws: null,
  isConnected: false,
  transactions: initialTransactions,
  movements: [],
  marketData: [],
  statCardData: null,

  connect: (url = "ws://localhost:8080") => {
    const existingWs = get().ws;
    if (existingWs?.readyState === WebSocket.OPEN) {
      console.log("WebSocket already connected");
      return;
    }

    const ws = new WebSocket(url);

    ws.onopen = () => {
      console.log("WebSocket connected to OTC feed");
      set({ isConnected: true });
    };

    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        console.log("Received WebSocket message:", message);

        switch (message.type) {
          case "new_transaction":
            const transaction: Transaction = {
              buyer: message.data.buyer,
              seller: message.data.seller,
              amount: message.data.amount?.toLocaleString() || "150,000",
              token: message.data.token,
              tradeType: message.data.tradeType,
              time: message.data.time,
            };
            get().addTransaction(transaction);
            break;

          case "new_otc_movement":
            const movement: OtcMovement = {
              time: message.data.time,
              token: message.data.token,
              pair: message.data.pair,
              tradeType: message.data.tradeType,
              buyer: message.data.buyer,
              seller: message.data.seller,
            };
            get().addMovement(movement);
            break;

          case "market_data":
            get().setMarketData(message.data);
            break;

          case "stat_cards":
            get().setStatCardData(message.data);
            break;

          case "pong":
            console.log("Received pong from server");
            break;

          default:
            console.log("Unknown message type:", message.type);
        }
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      set({ isConnected: false });
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
      set({ isConnected: false, ws: null });
    };

    set({ ws });
  },

  disconnect: () => {
    const ws = get().ws;
    if (ws?.readyState === WebSocket.OPEN) {
      ws.close();
    }
    set({ ws: null, isConnected: false });
  },

  addTransaction: (transaction) => {
    set((state) => ({
      transactions: [...state.transactions.slice(-20), transaction],
    }));
  },

  addMovement: (movement) => {
    set((state) => ({
      movements: [movement, ...state.movements].slice(0, 10),
    }));
  },

  setTransactions: (transactions) => {
    set({ transactions });
  },

  setMovements: (movements) => {
    set({ movements });
  },

  setMarketData: (data) => {
    set({ marketData: data });
  },

  setStatCardData: (data) => {
    set({ statCardData: data });
  },
}));

// Simulate live data if WebSocket is not connected
let simulationInterval: NodeJS.Timeout | null = null;

export const startSimulation = () => {
  if (simulationInterval) return;

  simulationInterval = setInterval(() => {
    const store = useOtcStore.getState();
    if (store.isConnected) return;

    const tokens = ["BTC", "ETH", "USDT", "BNB", "AXN", "USDC"];
    const pairs = ["USD", "USDT", "USDC"];
    const tradeTypes = ["BUY", "SELL", "SWAP", "STAKE", "TRANSFER"];
    const amounts = ["50,000", "150,000", "250,000", "500,000", "1,000,000"];

    const time = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });

    const buyer = `0x${Math.random().toString(16).slice(2, 6)}...${Math.random()
      .toString(16)
      .slice(2, 6)}`;
    const seller = `0x${Math.random()
      .toString(16)
      .slice(2, 6)}...${Math.random().toString(16).slice(2, 6)}`;
    const token = tokens[Math.floor(Math.random() * tokens.length)];
    const tradeType = tradeTypes[Math.floor(Math.random() * tradeTypes.length)];

    const transaction: Transaction = {
      buyer,
      seller,
      amount: amounts[Math.floor(Math.random() * amounts.length)],
      token,
      tradeType,
      time,
    };

    const movement: OtcMovement = {
      time,
      token,
      pair: `${token}/${pairs[Math.floor(Math.random() * pairs.length)]}`,
      tradeType,
      buyer,
      seller,
    };

    store.addTransaction(transaction);
    store.addMovement(movement);
  }, 3000);
};

export const stopSimulation = () => {
  if (simulationInterval) {
    clearInterval(simulationInterval);
    simulationInterval = null;
  }
};
