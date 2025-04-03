import React from "react";
import { FileText, RefreshCw, Trash2, Wallet } from "lucide-react";
import { BankAccount } from "./types";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

interface AccountCardProps {
  account: BankAccount;
  onRefresh: (accountId: string) => void;
  onDisconnect: (accountId: string) => void;
  refreshingAccount: string | null;
}

export function AccountCard({
  account,
  onRefresh,
  onDisconnect,
  refreshingAccount,
}: AccountCardProps) {
  const isRefreshing = refreshingAccount === account.id;

  return (
    <Card className="hover:border-slate-600 transition-all overflow-hidden">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {account.logo ? (
            <img
              src={account.logo}
              alt={account.institution}
              className="w-10 h-10 rounded-lg bg-white p-1"
            />
          ) : (
            <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center">
              <FileText className="w-5 h-5 text-slate-300" />
            </div>
          )}
          <div>
            <h3 className="font-medium text-slate-200">{account.name}</h3>
            <p className="text-slate-400 text-sm">{account.institution}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => onRefresh(account.id)}
            disabled={isRefreshing}
            variant="secondary"
            className="!p-2 !rounded-full"
            icon={
              <RefreshCw
                className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`}
              />
            }
          />
          <Button
            onClick={() => onDisconnect(account.id)}
            variant="secondary"
            className="!p-2 !rounded-full hover:!text-red-400"
            icon={<Trash2 className="w-4 h-4" />}
          />
        </div>
      </div>
      <div className="border-t border-slate-700/50 p-4 flex items-center justify-between">
        <p className="text-sm text-slate-400">
          Last updated: {account.lastUpdated}
        </p>
        <span
          className={`font-medium ${
            account.balance >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          ${Math.abs(account.balance).toFixed(2)}
        </span>
      </div>
    </Card>
  );
}
