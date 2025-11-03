# RainbowKit Integration Guide

## Installation

To complete the RainbowKit setup, you need to install the required packages:

```bash
pnpm add @rainbow-me/rainbowkit wagmi viem@2.x @tanstack/react-query
```

## Setup Steps

### 1. Get WalletConnect Project ID

1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com)
2. Create a new project
3. Copy your Project ID

### 2. Configure Environment Variables

Create a `.env.local` file in the `frontend` directory:

```bash
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id_here
```

### 3. Files Created

- **`src/providers/Web3Provider.tsx`** - Web3 provider configuration with Wagmi and RainbowKit
- **`src/components/ConnectWallet.tsx`** - Custom styled Connect Wallet button
- **`src/app/layout.tsx`** - Updated with Web3Provider wrapper
- **`src/app/landing/AxtonNavbar.tsx`** - Updated with ConnectWallet component

## Features

✅ Connect to multiple wallets (MetaMask, WalletConnect, Coinbase Wallet, etc.)
✅ BSC Mainnet and Testnet support
✅ Custom styled button matching Axton design
✅ Network switching
✅ Account management
✅ Responsive design

## Usage

The Connect Wallet button is now in the navbar. Users can:
- Click to connect their wallet
- View connected account and balance
- Switch networks
- Disconnect wallet

## Customization

The button style in `ConnectWallet.tsx` matches your existing design with:
- Gradient border effects
- Space Mono font
- Axton color scheme (#2ef68d to #478ff5)
- Backdrop blur effects

## Supported Chains

- Binance Smart Chain (BSC) Mainnet
- Binance Smart Chain (BSC) Testnet

To add more chains, edit `src/providers/Web3Provider.tsx` and import additional chains from `wagmi/chains`.
