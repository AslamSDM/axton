import { useReadContract } from "wagmi";
import { formatUnits } from "viem";

// USDC Contract Address on BSC Mainnet
const USDC_ADDRESS = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d" as const;

// Standard ERC20 ABI for balanceOf
const USDC_ABI = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
] as const;

export function useUSDCBalance(address?: `0x${string}`) {
  const { data, isError, isLoading, refetch } = useReadContract({
    address: USDC_ADDRESS,
    abi: USDC_ABI,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  const balance = data ? formatUnits(data as bigint, 18) : "0"; // USDC has 18 decimals on BSC

  return {
    balance,
    balanceRaw: data,
    isLoading,
    isError,
    refetch,
  };
}
