"use client";

import { useAccount } from "wagmi";
import { toast } from "sonner";
import { useUSDCBalance } from "./useUSDCBalance";

const REQUIRED_USDC_BALANCE = 1000000;

export function useBalanceCheck() {
  const { isConnected, address } = useAccount();
  const { balance: usdcBalance, isLoading: isCheckingBalance } =
    useUSDCBalance(address);

  const hasRequiredBalance =
    isConnected &&
    !isCheckingBalance &&
    parseFloat(usdcBalance) >= REQUIRED_USDC_BALANCE;

  const checkBalanceAndProceed = (callback?: () => void) => {
    if (!isConnected) {
      toast.error("Wallet Not Connected", {
        description: "Please connect your wallet first to proceed",
      });
      return false;
    }

    if (isCheckingBalance) {
      toast.info("Checking Balance", {
        description: "Please wait while we verify your balance...",
      });
      return false;
    }

    if (!hasRequiredBalance) {
      toast.error("Insufficient Balance", {
        description: `You need at least ${REQUIRED_USDC_BALANCE.toLocaleString()} USDC to proceed. Current balance: ${parseFloat(
          usdcBalance
        ).toLocaleString()} USDC`,
      });
      return false;
    }

    // Balance check passed, execute callback if provided
    if (callback) {
      callback();
    }
    return true;
  };

  return {
    isConnected,
    hasRequiredBalance,
    isCheckingBalance,
    usdcBalance,
    checkBalanceAndProceed,
    REQUIRED_USDC_BALANCE,
  };
}
