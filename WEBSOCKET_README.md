# Axton WebSocket Server

This directory contains a WebSocket server that provides dummy data for the Axton dashboard.

## Setup

1. First, install the required dependencies for the WebSocket server:

```bash
npm install ws
```

2. Run the WebSocket server:

```bash
node websocket-server.js
```

The server will start on port 8080 by default. You'll see:

```
WebSocket server running on port 8080
WebSocket URL: ws://localhost:8080
```

3. Run your Next.js development server (in another terminal):

```bash
npm run dev
```

## What the WebSocket Server Provides

The server broadcasts several types of data:

### 1. Real-time Transactions

- **Frequency**: Every 2-4 seconds
- **Type**: `new_transaction`
- **Used by**: Header marquee, Globe visualization

### 2. OTC Movements

- **Frequency**: Every 3-6 seconds
- **Type**: `new_otc_movement`
- **Used by**: OTC Movements table

### 3. Market Data

- **Frequency**: Every 30 seconds
- **Type**: `market_data`
- **Used by**: Market Overview table
- **Contains**: Price, volume, 24h change, market cap for 10 cryptocurrencies

### 4. Stat Cards Data

- **Frequency**: Every 15 seconds
- **Type**: `stat_cards`
- **Used by**: Dashboard stat cards
- **Contains**: Total OTC volume, daily wrap count, top traders, etc.

## Data Format

### Transaction

```json
{
  "type": "new_transaction",
  "data": {
    "buyer": "0x1234567890abcdef1234567890abcdef12345678",
    "seller": "0x0000999988887777666655554444333322221111",
    "amount": 150000,
    "token": "USDC",
    "tradeType": "BUY",
    "time": "14:32:15",
    "timestamp": 1698765432000
  }
}
```

### Market Data

```json
{
  "type": "market_data",
  "data": [
    {
      "asset": "Bitcoin",
      "symbol": "BTC",
      "price": 65432.1,
      "volume": 1234567890,
      "priceChange24h": 2.45,
      "marketCap": 1280000000000
    }
  ]
}
```

## Connection

The Next.js app automatically connects to `ws://localhost:8080` when the WebSocket store is initialized. If the connection fails, it falls back to simulated data.

## Development Tips

- Check the browser console for WebSocket connection status
- The server logs all connections and messages
- Use Ctrl+C to stop the server gracefully
