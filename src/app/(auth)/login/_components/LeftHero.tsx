"use client";
import { FeatureItem } from "@/app/(auth)/login/_components/FeatureItem";
import { ExpenseItem } from "@/app/(auth)/login/_components/ExpenseItem";
import {
  Wallet,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Coffee,
  Pizza,
  CreditCard,
} from "lucide-react";

export const LeftHero = () => {
  return (
    <div className="max-w-xl w-full p-6 md:p-8 md:pr-12 z-10">
      <h1 className="text-6xl font-extrabold text-center md:text-left bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 tracking-tight font-display">
        Broke<span className="text-amber-400">No</span>More
      </h1>
      <p className="text-xl text-slate-300 mb-6 text-center md:text-left font-light">
        AI-powered financial buddy for college students.
      </p>
      <div className="space-y-4 mb-6">
        <FeatureItem
          icon={<Sparkles className="w-6 h-6 text-cyan-400" />}
          title="AI Financial Advisor"
          description="Stop making terrible money decisions. Our AI will do the thinking you can't."
        />

        <FeatureItem
          icon={<ShieldCheck className="w-6 h-6 text-cyan-400" />}
          title="Purchase Guardian"
          description="Because we know you'll buy it anyway unless daddy stops you."
        />

        <FeatureItem
          icon={<TrendingUp className="w-6 h-6 text-cyan-400" />}
          title="Spending Reality Check"
          description="See why you're always broke each month."
        />
      </div>

      {/* Money draining visuals */}
      <div className="bg-slate-800/70 rounded-lg border border-slate-700/80 shadow-lg overflow-hidden">
        <div className="bg-slate-700/50 py-2 px-4 border-b border-slate-600/50">
          <h3 className="font-semibold text-slate-200 font-display text-sm">
            WHERE YOUR MONEY ACTUALLY GOES
          </h3>
        </div>
        <div className="p-3">
          <div className="grid grid-cols-3 gap-1">
            <ExpenseItem
              icon={<Coffee />}
              name="Coffee"
              amount="$143/mo"
              percent={34}
              color="amber"
            />
            <ExpenseItem
              icon={<Pizza />}
              name="Takeout"
              amount="$175/mo"
              percent={51}
              color="red"
            />
            <ExpenseItem
              icon={<CreditCard />}
              name="Impulse"
              amount="$413/mo"
              percent={74}
              color="blue"
            />
          </div>
          <div className="mt-2 pt-2 border-t border-slate-700/50">
            <p className="text-slate-400 text-xs text-center">
              Average college student wastes $675/month on non-essentials
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
