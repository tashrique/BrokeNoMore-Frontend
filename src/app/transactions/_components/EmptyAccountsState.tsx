import React from "react";
import { Building, Plus } from "lucide-react";
import { Button } from "@/components/Button";

interface EmptyAccountsStateProps {
  onConnectClick: () => void;
}

export function EmptyAccountsState({
  onConnectClick,
}: EmptyAccountsStateProps) {
  return (
    <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 shadow-lg text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="p-4 bg-slate-700/50 rounded-full">
          <Building className="w-8 h-8 text-slate-300" />
        </div>
        <h3 className="text-xl font-display text-slate-200">
          No Accounts Connected
        </h3>
        <p className="text-slate-400 max-w-md mx-auto">
          Connect your bank accounts to automatically import transactions and
          track your spending habits.
        </p>
        <Button
          onClick={onConnectClick}
          variant="primary"
          icon={<Plus className="w-4 h-4" />}
          className="mt-4"
        >
          Connect Your First Account
        </Button>
      </div>
    </div>
  );
}
