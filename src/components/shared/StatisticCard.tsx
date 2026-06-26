import React from "react";
import Card from "./Card";

interface StatisticCardProps {
  value: string;
  label: string;
  sublabel: string;
  className?: string;
}

export default function StatisticCard({
  value,
  label,
  sublabel,
  className = "",
}: StatisticCardProps) {
  return (
    <Card
      variant="dark"
      hoverEffect={false}
      className={`group relative border-white/6 flex flex-col justify-between p-6 overflow-hidden card-lift ${className}`}
    >
      {/* Subtle top-left corner glow on hover */}
      <div
        className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-forsythia/5 blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-1.5 relative z-10">
        <span className="text-[2.25rem] font-extrabold text-white font-mono block tracking-tight leading-none stat-number">
          {value}
        </span>
        <span className="text-[11px] font-extrabold text-forsythia uppercase tracking-[0.12em] block mt-1">
          {label}
        </span>
      </div>

      <p className="text-3xs text-arctic-powder/50 leading-relaxed mt-5 relative z-10 border-t border-white/5 pt-4">
        {sublabel}
      </p>
    </Card>
  );
}
