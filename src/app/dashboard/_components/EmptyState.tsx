import React from "react";
import { Building, Plus } from "lucide-react";

export function EmptyState() {
  return (
    <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 shadow-lg text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="p-4 bg-slate-700/50 rounded-full">
          <Building className="w-8 h-8 text-slate-300" />
        </div>
        <h3 className="text-xl font-display text-slate-200">
          No Financial Accounts Connected
        </h3>
        <p className="text-slate-400 max-w-md mx-auto">
          Connect your bank accounts to get personalized financial insights and
          automatically track your spending.
        </p>
        <a
          href="/transactions"
          className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-lg flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 font-button"
        >
          <Plus className="w-4 h-4" />
          <span>Connect Your First Account</span>
        </a>
      </div>
    </div>
  );
}
