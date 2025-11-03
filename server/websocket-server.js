const WebSocket = require("ws");
const http = require("http");

// Create HTTP server
const server = http.createServer();
const wss = new WebSocket.Server({ server });

// Dummy data generators
const generateRandomTransaction = () => {
  const buyers = [
    "0x1234567890abcdef1234567890abcdef12345678",
    "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
    "0x9876543210fedcba9876543210fedcba98765432",
    "0xfedcbafedcbafedcbafedcbafedcbafedcbafed",
    "0x1111222233334444555566667777888899990000",
    "0xaaaaaabbbbbbccccccddddddeeeeeeffffffffff",
  ];

  const sellers = [
    "0x0000999988887777666655554444333322221111",
    "0xffffffffeeeeeeeddddddccccccbbbbbbaaaaaaa",
    "0x2345678901bcdefg2345678901bcdefg23456789",
    "0xbcdefgbcdefgbcdefgbcdefgbcdefgbcdefgbcde",
    "0x8765432109fedcba8765432109fedcba87654321",
    "0xedcbaedcbaedcbaedcbaedcbaedcbaedcbaedcba",
  ];

  const tokens = ["USDC", "ETH", "BTC", "AXN", "USDT", "DAI"];
  const tradeTypes = ["BUY", "SELL", "SWAP", "TRANSFER"];
  const amounts = [1000, 5000, 10000, 25000, 50000, 100000, 250000, 500000];

  const now = new Date();
  const timeString = now.toISOString().split("T")[1].split(".")[0];

  return {
    id: Date.now() + Math.random(),
    buyer: buyers[Math.floor(Math.random() * buyers.length)],
    seller: sellers[Math.floor(Math.random() * sellers.length)],
    token: tokens[Math.floor(Math.random() * tokens.length)],
    amount: amounts[Math.floor(Math.random() * amounts.length)],
    tradeType: tradeTypes[Math.floor(Math.random() * tradeTypes.length)],
    time: timeString,
    timestamp: now.getTime(),
  };
};

const generateRandomOtcMovement = () => {
  const tokens = ["USDC", "ETH", "BTC", "AXN", "USDT", "DAI", "LINK", "UNI"];
  const pairs = [
    "USDC/ETH",
    "BTC/USDT",
    "ETH/DAI",
    "AXN/USDC",
    "LINK/ETH",
    "UNI/USDT",
  ];
  const tradeTypes = ["BUY", "SELL", "SWAP"];

  const buyers = [
    "0x1234567890abcdef1234567890abcdef12345678",
    "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
    "0x9876543210fedcba9876543210fedcba98765432",
    "0xfedcbafedcbafedcbafedcbafedcbafedcbafed",
    "0x1111222233334444555566667777888899990000",
  ];

  const sellers = [
    "0x0000999988887777666655554444333322221111",
    "0xffffffffeeeeeeeddddddccccccbbbbbbaaaaaaa",
    "0x2345678901bcdefg2345678901bcdefg23456789",
    "0xbcdefgbcdefgbcdefgbcdefgbcdefgbcdefgbcde",
    "0x8765432109fedcba8765432109fedcba87654321",
  ];

  const now = new Date();
  const timeString = now.toISOString().split("T")[1].split(".")[0];

  return {
    id: Date.now() + Math.random(),
    time: timeString,
    token: tokens[Math.floor(Math.random() * tokens.length)],
    pair: pairs[Math.floor(Math.random() * pairs.length)],
    tradeType: tradeTypes[Math.floor(Math.random() * tradeTypes.length)],
    buyer: buyers[Math.floor(Math.random() * buyers.length)],
    seller: sellers[Math.floor(Math.random() * sellers.length)],
    timestamp: now.getTime(),
  };
};

const generateMarketData = () => {
  const cryptos = [
    { name: "Bitcoin", symbol: "BTC", basePrice: 65000 },
    { name: "Ethereum", symbol: "ETH", basePrice: 3200 },
    { name: "Binance Coin", symbol: "BNB", basePrice: 580 },
    { name: "Solana", symbol: "SOL", basePrice: 145 },
    { name: "XRP", symbol: "XRP", basePrice: 0.52 },
    { name: "Cardano", symbol: "ADA", basePrice: 0.38 },
    { name: "Avalanche", symbol: "AVAX", basePrice: 28 },
    { name: "Chainlink", symbol: "LINK", basePrice: 12 },
    { name: "Polygon", symbol: "MATIC", basePrice: 0.85 },
    { name: "Uniswap", symbol: "UNI", basePrice: 7.2 },
  ];

  return cryptos.map((crypto) => {
    const priceVariation = (Math.random() - 0.5) * 0.1; // ±5% variation
    const price = crypto.basePrice * (1 + priceVariation);
    const change24h = (Math.random() - 0.5) * 20; // ±10% change
    const volume = Math.random() * 2000000000; // Random volume up to 2B
    const marketCap = price * (Math.random() * 1000000000); // Random market cap

    return {
      asset: crypto.name,
      symbol: crypto.symbol,
      price: Number(price.toFixed(2)),
      volume: Math.floor(volume),
      priceChange24h: Number(change24h.toFixed(2)),
      marketCap: Math.floor(marketCap),
      timestamp: Date.now(),
    };
  });
};

const generateStatCardData = () => {
  return {
    totalOtcVolume: `$${(Math.random() * 2 + 1).toFixed(2)}B`,
    dailyWrapCount: `${Math.floor(Math.random() * 50000 + 10000)}`,
    topTraders: `${Math.floor(Math.random() * 1000 + 500)}`,
    activeProposals: `${Math.floor(Math.random() * 100 + 20)}`,
    totalLiquidity: `$${(Math.random() * 5 + 2).toFixed(2)}B`,
    axnNetFlow: `${Math.random() > 0.5 ? "+" : "-"}${(
      Math.random() * 1
    ).toFixed(2)}%`,
    timestamp: Date.now(),
  };
};

// Store connected clients
const clients = new Set();

// WebSocket connection handler
wss.on("connection", (ws) => {
  console.log("New client connected");
  clients.add(ws);

  // Send initial data
  ws.send(
    JSON.stringify({
      type: "market_data",
      data: generateMarketData(),
    })
  );

  ws.send(
    JSON.stringify({
      type: "stat_cards",
      data: generateStatCardData(),
    })
  );

  // Handle client messages
  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message);
      console.log("Received:", data);

      // Echo back or handle specific requests
      if (data.type === "ping") {
        ws.send(JSON.stringify({ type: "pong", timestamp: Date.now() }));
      }
    } catch (error) {
      console.error("Error parsing message:", error);
    }
  });

  // Handle client disconnect
  ws.on("close", () => {
    console.log("Client disconnected");
    clients.delete(ws);
  });

  // Handle errors
  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
    clients.delete(ws);
  });
});

// Broadcast data to all connected clients
const broadcast = (data) => {
  const message = JSON.stringify(data);
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
};

// Send periodic updates
setInterval(() => {
  // Send new transaction every 2-4 seconds
  broadcast({
    type: "new_transaction",
    data: generateRandomTransaction(),
  });
}, Math.random() * 2000 + 2000);

setInterval(() => {
  // Send new OTC movement every 3-6 seconds
  broadcast({
    type: "new_otc_movement",
    data: generateRandomOtcMovement(),
  });
}, Math.random() * 3000 + 3000);

setInterval(() => {
  // Update market data every 30 seconds
  broadcast({
    type: "market_data",
    data: generateMarketData(),
  });
}, 30000);

setInterval(() => {
  // Update stat cards every 15 seconds
  broadcast({
    type: "stat_cards",
    data: generateStatCardData(),
  });
}, 15000);

// Start server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`WebSocket server running on port ${PORT}`);
  console.log(`WebSocket URL: ws://localhost:${PORT}`);
});

// Handle graceful shutdown
process.on("SIGTERM", () => {
  console.log("Received SIGTERM, shutting down gracefully");
  wss.close(() => {
    server.close(() => {
      process.exit(0);
    });
  });
});

process.on("SIGINT", () => {
  console.log("Received SIGINT, shutting down gracefully");
  wss.close(() => {
    server.close(() => {
      process.exit(0);
    });
  });
});
