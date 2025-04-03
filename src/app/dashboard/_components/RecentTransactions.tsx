import React from "react";
import { Clock } from "lucide-react";

export function RecentTransactions() {
  return (
    <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg">
      <h2 className="text-xl font-semibold text-slate-100 font-display mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-cyan-400" />
        Recent Transactions
      </h2>
      <div className="overflow-hidden rounded-lg border border-slate-700/50">
        <div className="border-b border-slate-700/50 p-3 bg-slate-700/30">
          <div className="grid grid-cols-12 text-sm font-medium text-slate-400">
            <div className="col-span-3">Date</div>
            <div className="col-span-5">Description</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-2 text-right">Amount</div>
          </div>
        </div>
        <div className="p-3 text-center text-slate-400 text-sm">
          Connect accounts to view your transactions
        </div>
      </div>
    </div>
  );
}
