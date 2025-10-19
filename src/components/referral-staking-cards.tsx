import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ReferralStakingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 md:col-span-1 flex flex-col justify-between">
        <CardContent className="p-4">
          <div>
            <p className="text-sm text-zinc-400">TOTAL REFERRAL EARNINGS</p>
            <p className="text-3xl font-bold text-white mt-1">
              1,500 <span className="text-sky-400">AXN</span>
            </p>
          </div>
          <Button className="w-full py-3 mt-4 bg-sky-500 hover:bg-sky-500/90">
            Invite Friends
          </Button>
        </CardContent>
      </Card>
      <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 md:col-span-1">
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-400">TOTAL REFERRAL REWARDS</p>
            <p className="text-3xl font-bold text-white mt-1">
              12.5%{" "}
              <span className="text-base font-medium text-zinc-300">APR</span>
            </p>
          </div>
          <Button variant="outline" className="px-6 py-3 border-zinc-700">
            Stake Now
          </Button>
        </CardContent>
      </Card>
      <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 md:col-span-1">
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-400">YOUR SWAP</p>
            <p className="text-3xl font-bold text-white mt-1">Whole Trader</p>
            <p className="text-xs text-zinc-500">Exclusive API access & Fees</p>
          </div>
          <Button variant="outline" className="px-6 py-3 border-zinc-700">
            View Benefits
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
