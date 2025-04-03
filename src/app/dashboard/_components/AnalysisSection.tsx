import React from "react";
import { PieChart, BookOpen, Calendar, LucideIcon } from "lucide-react";

interface AnalysisSectionProps {
  title: string;
  icon: LucideIcon;
  message: string;
}

export function AnalysisSection({
  title,
  icon: Icon,
  message,
}: AnalysisSectionProps) {
  return (
    <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg">
      <h2 className="text-xl font-semibold text-slate-100 font-display flex items-center gap-2 mb-4">
        <Icon className="w-5 h-5 text-cyan-400" />
        {title}
      </h2>
      <div className="h-64 flex flex-col items-center justify-center">
        <div className="p-4 bg-slate-700/50 rounded-full mb-4">
          {title.includes("Spending") ? (
            <PieChart className="w-8 h-8 text-slate-300" />
          ) : (
            <Calendar className="w-8 h-8 text-slate-300" />
          )}
        </div>
        <p className="text-slate-400 mb-2">{message}</p>
      </div>
    </div>
  );
}
