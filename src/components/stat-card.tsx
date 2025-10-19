import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function StatCard({ title, value, change, icon: Icon }: StatCardProps) {
  return (
    <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-zinc-400">{title}</p>
          <Icon className="h-4 w-4 text-zinc-500" />
        </div>
        <h3 className="text-2xl font-semibold text-white">{value}</h3>
        <p
          className={`text-sm ${
            change.startsWith("+") ? "text-green-400" : "text-red-400"
          }`}
        >
          {change}
        </p>
      </CardContent>
    </Card>
  );
}
