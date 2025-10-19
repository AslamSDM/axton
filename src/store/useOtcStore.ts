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

type OtcStore = {
  // WebSocket state
  ws: WebSocket | null;
  isConnected: boolean;

  // Data
  transactions: Transaction[];
  movements: OtcMovement[];

  // Actions
  connect: (url?: string) => void;
  disconnect: () => void;
  addTransaction: (transaction: Transaction) => void;
  addMovement: (movement: OtcMovement) => void;
  setTransactions: (transactions: Transaction[]) => void;
  setMovements: (movements: OtcMovement[]) => void;
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

  connect: (url = "wss://your-websocket-server.com/otc-movements") => {
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
        const data = JSON.parse(event.data);

        // Create transaction for header
        const transaction: Transaction = {
          buyer: data.buyer,
          seller: data.seller,
          amount: data.amount || "150,000",
          token: data.token,
          tradeType: data.tradeType,
          time:
            data.time ||
            new Date().toLocaleTimeString("en-US", {
              hour12: false,
              hour: "2-digit",
              minute: "2-digit",
            }),
        };

        // Create movement for table
        const movement: OtcMovement = {
          time:
            data.time ||
            new Date().toLocaleTimeString("en-US", {
              hour12: false,
              hour: "2-digit",
              minute: "2-digit",
            }),
          token: data.token,
          pair: data.pair || `${data.token}/USD`,
          tradeType: data.tradeType,
          buyer: data.buyer,
          seller: data.seller,
        };

        // Update store
        get().addTransaction(transaction);
        get().addMovement(movement);
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
