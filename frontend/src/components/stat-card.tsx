import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Image from "next/image";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: string;
}

export function StatCard({ title, value, change, icon }: StatCardProps) {
  return (
    <Card className="bg-zinc-800 relative overflow-hidden">
      {/* Texture overlay */}
      <div
        className="absolute inset-0  pointer-events-none"
        style={{
          backgroundImage: `url('/texture.png')`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      />
      <CardContent className="p-4 relative z-10">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-zinc-400">{title}</p>
          <div className="relative w-5 h-5">
            <Image
              src={icon}
              alt={title}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
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
