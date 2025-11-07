"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TransparentGradientBtn from "./TransparentGradientBtn";
import { useBalanceCheck } from "@/hooks/useBalanceCheck";
import { toast } from "sonner";

export function ReferralStakingCards() {
  const { checkBalanceAndProceed } = useBalanceCheck();

  const handleInviteFriends = () => {
    checkBalanceAndProceed(() => {
      // Generate referral link
      const referralCode = Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();
      const referralLink = `${window.location.origin}/ref/${referralCode}`;

      // Copy to clipboard
      navigator.clipboard.writeText(referralLink);

      toast.success("Referral Link Copied!", {
        description: `Share your link: ${referralLink}`,
      });
    });
  };

  const handleStakeNow = () => {
    checkBalanceAndProceed(() => {
      toast.info("Staking Interface", {
        description: "Opening staking dashboard...",
      });
      // Navigate to staking interface
      console.log("Navigate to staking page");
    });
  };

  const handleViewBenefits = () => {
    checkBalanceAndProceed(() => {
      toast.info("Benefits Overview", {
        description: "Loading your tier benefits and exclusive features...",
      });
      // Show benefits modal or navigate to benefits page
      console.log("View trader tier benefits");
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="backdrop-blur-sm md:col-span-1 flex flex-col justify-between relative overflow-hidden bg-gradient-to-r from-green-400 to-blue-500">
        {/* Texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url('/texture.png')`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
          }}
        />
        {/* <div className="absolute top-2 right-2 w-12 h-12 opacity-20 z-[1]">
          <Image
            src="/referrals.png"
            alt="Referrals"
            width={48}
            height={48}
            className="object-contain"
            unoptimized
          />
        </div> */}
        <CardContent className="flex p-4 relative z-10 justify-between">
          <div>
            <p className="text-sm text-[#ececec]">TOTAL REFERRAL EARNINGS</p>
            <p className="text-3xl font-bold text-white mt-1">1,500 AXN</p>
          </div>
          <TransparentGradientBtn
            text="Invite Friends"
            className="p-6"
            onClick={handleInviteFriends}
          />
        </CardContent>
      </Card>
      <Card className="backdrop-blur-sm md:col-span-1 relative overflow-hidden">
        {/* Texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url('/texture.png')`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
          }}
        />
        {/* <div className="absolute top-2 right-2 w-12 h-12 opacity-20 z-[1]">
          <Image
            src="/ROI.png"
            alt="ROI"
            width={48}
            height={48}
            className="object-contain"
            unoptimized
          />
        </div> */}
        <CardContent className="p-4 flex flex-col relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-zinc-400">TOTAL REFERRAL REWARDS</p>
              <p className="text-3xl font-bold text-white mt-1">
                12.5%{" "}
                <span className="text-base font-medium text-zinc-300">APR</span>
              </p>
            </div>
            <TransparentGradientBtn
              text="Stake Now"
              className="p-6"
              onClick={handleStakeNow}
            />
          </div>
          {/* Progress Bar */}
          <div className="w-full">
            <div className="h-1.5 bg-zinc-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                style={{ width: "60%" }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="backdrop-blur-sm md:col-span-1 relative overflow-hidden">
        {/* Texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none w-full h-full"
          style={{
            backgroundImage: `url('/texture.png')`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            mixBlendMode: "multiply",
          }}
        />
        {/* <div className="absolute top-2 right-2 w-12 h-12 opacity-20 z-[1]">
          <Image
            src="/swap.png"
            alt="Swap"
            width={48}
            height={48}
            className="object-contain"
            unoptimized
          />
        </div> */}
        <CardContent className="p-4 flex items-center justify-between relative z-10">
          <div>
            <p className="text-sm text-zinc-400">YOUR SWAP</p>
            <p className="text-3xl font-bold text-white mt-1">Whole Trader</p>
            <p className="text-xs text-zinc-500">Exclusive API access & Fees</p>
          </div>
          <TransparentGradientBtn
            text="View Benefits"
            className="p-6"
            onClick={handleViewBenefits}
          />
        </CardContent>
      </Card>
    </div>
  );
}
