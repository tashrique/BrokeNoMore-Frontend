import React from "react";
import { LucideIcon } from "lucide-react";

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
}

export function SummaryCard({
  title,
  value,
  icon: Icon,
  iconColor,
}: SummaryCardProps) {
  return (
    <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg hover:border-cyan-500/30 transition-all group">
      <div className="flex items-center gap-4">
        <div
          className={`p-3 bg-${iconColor}-500/10 rounded-lg border border-${iconColor} group-hover:bg-${iconColor}-500/20 transition-colors`}
        >
          <Icon className={`w-6 h-6 text-${iconColor}-500`} />
        </div>
        <div>
          <p className="text-sm text-slate-400 font-button">{title}</p>
          <p className="text-2xl font-bold text-slate-100">
            {typeof value === "number" ? `$${value.toFixed(2)}` : value}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
