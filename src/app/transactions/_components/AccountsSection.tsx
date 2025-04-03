import React from "react";
import { Plus } from "lucide-react";
import { BankAccount } from "./types";
import { EmptyAccountsState } from "./EmptyAccountsState";
import { AccountCard } from "./AccountCard";
import { Button } from "@/components/Button";

interface AccountsSectionProps {
  accounts: BankAccount[];
  refreshingAccount: string | null;
  onConnectClick: () => void;
  onRefresh: (accountId: string) => void;
  onDisconnect: (accountId: string) => void;
}

export function AccountsSection({
  accounts,
  refreshingAccount,
  onConnectClick,
  onRefresh,
  onDisconnect,
}: AccountsSectionProps) {
  return (
    <div className="space-y-6">
      {/* Add Account Button */}
      {accounts.length > 0 && (
        <Button
          onClick={onConnectClick}
          variant="secondary"
          icon={<Plus className="w-4 h-4" />}
          className="w-full"
        >
          Connect Another Account
        </Button>
      )}
      {accounts.length === 0 ? (
        <EmptyAccountsState onConnectClick={onConnectClick} />
      ) : (
        <div className="grid gap-4">
          {accounts.map((account) => (
            <AccountCard
              key={account.id}
              account={account}
              refreshingAccount={refreshingAccount}
              onRefresh={onRefresh}
              onDisconnect={onDisconnect}
            />
          ))}
        </div>
      )}
    </div>
  );
}
