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
    <Card className="bg-zinc-800 relative overflow-hidden">
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />
      <CardContent className="p-4 relative z-10">
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
