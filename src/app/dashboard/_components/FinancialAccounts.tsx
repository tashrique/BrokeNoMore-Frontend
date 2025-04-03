import React from "react";
import { Building, ChevronRight, Wallet } from "lucide-react";
import { Account } from "./types";

interface FinancialAccountsProps {
  accounts: Account[];
}

export function FinancialAccounts({ accounts }: FinancialAccountsProps) {
  return (
    <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-100 font-display flex items-center gap-2">
          <Building className="w-5 h-5 text-cyan-400" />
          Financial Accounts
        </h2>
        <a
          href="/transactions"
          className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm flex items-center gap-1"
        >
          Manage accounts
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
      <div className="space-y-3">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="bg-slate-700/30 rounded-lg border border-slate-600/50 hover:border-slate-500/50 transition-colors"
          >
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {account.logo ? (
                  <img
                    src={account.logo}
                    alt={account.institution}
                    className="w-8 h-8 rounded-lg bg-white p-1"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-lg bg-slate-600 flex items-center justify-center">
                    <Wallet className="w-4 h-4 text-slate-300" />
                  </div>
                )}
                <div>
                  <h3 className="font-medium text-slate-200 text-sm">
                    {account.name}
                  </h3>
                  <p className="text-slate-400 text-xs">
                    {account.institution}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-medium">
                  ${account.balance.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
