import React from "react";
import { ShoppingCart, DollarSign } from "lucide-react";

export function HowToUse() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-lg">
      <div className="p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-1 bg-green-500 rounded-lg text-white">
            <ShoppingCart className="w-4 h-4" />
          </div>
          <h3 className="font-medium text-slate-100 text-sm">Quick Guide</h3>
        </div>
        <div className="space-y-2 text-xs text-slate-300">
          <p className="flex items-center">
            <DollarSign className="w-3 h-3 text-cyan-400 mr-1 flex-shrink-0" />
            Describe your purchase with price
          </p>
          <p className="flex items-center">
            <DollarSign className="w-3 h-3 text-cyan-400 mr-1 flex-shrink-0" />
            Get personalized recommendations
          </p>
          <p className="flex items-center">
            <DollarSign className="w-3 h-3 text-cyan-400 mr-1 flex-shrink-0" />
            Find budget-friendly alternatives
          </p>
        </div>
      </div>
    </div>
  );
}
