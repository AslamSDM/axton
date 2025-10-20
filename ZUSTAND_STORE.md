# Zustand Store Architecture

## Overview

Centralized state management for OTC trading data and WebSocket connection using Zustand.

## Store Location

`/src/store/useOtcStore.ts`

## Features

### 1. **Unified WebSocket Management**

- Single WebSocket connection shared across all components
- Automatic reconnection handling
- Connection status tracking

### 2. **State Management**

- `transactions`: Array of live transactions (for header ticker)
- `movements`: Array of OTC movements (for table display)
- `isConnected`: WebSocket connection status
- `ws`: WebSocket instance

### 3. **Actions**

#### Connection Management

```typescript
connect(url?: string) // Connect to WebSocket
disconnect()          // Disconnect and cleanup
```

#### Data Management

```typescript
addTransaction(transaction: Transaction)   // Add new transaction
addMovement(movement: OtcMovement)         // Add new movement
setTransactions(transactions: Transaction[]) // Replace all transactions
setMovements(movements: OtcMovement[])      // Replace all movements
```

### 4. **Simulation System**

```typescript
startSimulation(); // Start generating fake data (when WS disconnected)
stopSimulation(); // Stop simulation
```

## Data Types

### Transaction (Header Ticker)

```typescript
{
  buyer: string; // Wallet address
  seller: string; // Wallet address
  amount: string; // Transaction amount
  token: string; // Token symbol (BTC, ETH, etc.)
  tradeType: string; // BUY, SELL, SWAP, STAKE, TRANSFER
  time: string; // HH:MM format
}
```

### OtcMovement (Table Display)

```typescript
{
  time: string; // HH:MM format
  token: string; // Token symbol
  pair: string; // Trading pair (BTC/USD)
  tradeType: string; // BUY, SELL, SWAP
  buyer: string; // Wallet address
  seller: string; // Wallet address
}
```

## Usage Examples

### Header Component

```typescript
import { useOtcStore, startSimulation, stopSimulation } from "@/store/useOtcStore";

export function Header() {
  const transactions = useOtcStore((state) => state.transactions);
  const isConnected = useOtcStore((state) => state.isConnected);
  const connect = useOtcStore((state) => state.connect);
  const disconnect = useOtcStore((state) => state.disconnect);

  useEffect(() => {
    connect(); // Connect to WebSocket
    startSimulation(); // Start simulation fallback

    return () => {
      disconnect();
      stopSimulation();
    };
  }, []);

  // Use transactions in render
  return <div>{transactions.map(...)}</div>;
}
```

### OTC Movements Table

```typescript
import { useOtcStore } from "@/store/useOtcStore";

export function OtcMovementsTable() {
  const movements = useOtcStore((state) => state.movements);
  const isConnected = useOtcStore((state) => state.isConnected);

  // movements automatically updates when new data arrives
  return <Table>{movements.map(...)}</Table>;
}
```

## WebSocket Message Format

The WebSocket should send JSON messages in this format:

```json
{
  "buyer": "0x1234...5678",
  "seller": "0xabcd...ef01",
  "amount": "150000",
  "token": "USDC",
  "tradeType": "BUY",
  "time": "14:30",
  "pair": "USDC/USD"
}
```

## Benefits

### 1. **Single Source of Truth**

- All components read from the same store
- Data consistency across the app
- No duplicate WebSocket connections

### 2. **Automatic Synchronization**

- Header and table update simultaneously
- No need to pass props or context
- Real-time updates across all components

### 3. **Clean Component Code**

- No WebSocket logic in components
- Simple hook-based API
- Easy to test and maintain

### 4. **Performance**

- Selective re-renders using Zustand's selector pattern
- Only components using specific state re-render
- Efficient memory management

### 5. **Fallback Simulation**

- Automatic fake data generation when WebSocket is unavailable
- Seamless demo experience
- Easy development without backend

## Configuration

### WebSocket URL

Change the default WebSocket URL in the store:

```typescript
// In useOtcStore.ts
connect: (url = "wss://your-actual-websocket-server.com/otc") => {
  // ...
};
```

Or pass it when connecting:

```typescript
connect("wss://custom-url.com/feed");
```

### Simulation Timing

Adjust the interval in `startSimulation()`:

```typescript
simulationInterval = setInterval(() => {
  // Generate data
}, 3000); // Change to desired milliseconds
```

### Data Limits

Control how much data to keep:

```typescript
// Transactions (header): Last 20
addTransaction: (transaction) => {
  set((state) => ({
    transactions: [...state.transactions.slice(-20), transaction],
  }));
};

// Movements (table): Last 10
addMovement: (movement) => {
  set((state) => ({
    movements: [movement, ...state.movements].slice(0, 10),
  }));
};
```

## Architecture Diagram

```
┌─────────────────────────────────────────┐
│         Zustand Store (useOtcStore)     │
├─────────────────────────────────────────┤
│  WebSocket Instance (ws)                │
│  Connection Status (isConnected)        │
│  Transactions Array                      │
│  Movements Array                         │
└──────────────┬──────────────────────────┘
               │
       ┌───────┴───────┐
       │               │
       ▼               ▼
┌────────────┐  ┌──────────────────┐
│   Header   │  │ OtcMovementsTable│
│  Component │  │     Component    │
└────────────┘  └──────────────────┘
```

## Future Enhancements

1. **Persistent Storage**: Add localStorage sync for offline support
2. **Reconnection Logic**: Automatic reconnect with exponential backoff
3. **Message Queue**: Buffer messages during disconnection
4. **Analytics**: Track transaction metrics and statistics
5. **Filters**: Add filtering/sorting capabilities
6. **Multiple Feeds**: Support different WebSocket feeds for different data types
