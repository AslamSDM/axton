#!/bin/bash

# Installation script for RainbowKit and Web3 dependencies

echo "🚀 Installing RainbowKit and Web3 dependencies..."

cd "$(dirname "$0")"

pnpm add @rainbow-me/rainbowkit wagmi viem@2.x @tanstack/react-query

echo "✅ Installation complete!"
echo ""
echo "📝 Next steps:"
echo "1. Get your WalletConnect Project ID from https://cloud.walletconnect.com"
echo "2. Create a .env.local file with: NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id"
echo "3. Run 'pnpm dev' to start the development server"
echo ""
echo "See RAINBOWKIT_SETUP.md for detailed instructions."
