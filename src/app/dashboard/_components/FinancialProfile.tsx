import React from "react";
import {
  Brain,
  ChevronDown,
  DollarSign,
  Info,
  TrendingUp,
  User,
  Wallet,
} from "lucide-react";

interface Learning {
  id: string;
  timestamp: string;
  category: string;
  content: string;
}

interface FinancialProfileProps {
  learnings: Learning[];
  maxItems?: number;
}

export function FinancialProfile({
  learnings,
  maxItems = 3,
}: FinancialProfileProps) {
  const visibleLearnings = learnings.slice(0, maxItems);

  return (
    <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-100 font-display flex items-center gap-2">
          <Brain className="w-5 h-5 text-cyan-400" />
          Financial Profile
        </h2>
        <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm flex items-center gap-1">
          Show All
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="mb-4 bg-slate-700/30 p-3 rounded-lg border border-slate-600/50">
        <div className="flex items-center gap-2 text-slate-300 mb-2">
          <Info className="w-4 h-4 text-cyan-400" />
          <p className="text-sm">
            Things I've learned about your financial habits:
          </p>
        </div>
      </div>

      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
        {visibleLearnings.map((learning) => (
          <div
            key={learning.id}
            className="bg-slate-700/30 p-3 rounded-lg border border-slate-600/50"
          >
            <div className="flex items-start gap-2">
              {learning.category === "spending" && (
                <DollarSign className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
              )}
              {learning.category === "saving" && (
                <Wallet className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              )}
              {learning.category === "goal" && (
                <TrendingUp className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              )}
              {learning.category === "preference" && (
                <User className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
              )}
              <div>
                <p className="text-slate-300 text-sm">{learning.content}</p>
                <p className="text-xs text-slate-500 mt-1">
                  {learning.timestamp}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
