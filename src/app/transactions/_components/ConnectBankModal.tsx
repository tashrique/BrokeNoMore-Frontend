import React from "react";
import { ExternalLink, RefreshCw, X } from "lucide-react";
import { Bank } from "./types";
import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/SectionTitle";

interface ConnectBankModalProps {
  banks: Bank[];
  selectedBank: string | null;
  onConnect: (bankId: string) => void;
  onClose: () => void;
}

export function ConnectBankModal({
  banks,
  selectedBank,
  onConnect,
  onClose,
}: ConnectBankModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 w-full max-w-2xl">
        <div className="flex items-center justify-between mb-4">
          <SectionTitle title="Connect Your Bank" />
          <Button
            variant="secondary"
            onClick={onClose}
            className="p-2 !rounded-full"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <p className="text-slate-300 mb-6">
          Select your financial institution to connect your accounts:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {banks.map((bank) => (
            <button
              key={bank.id}
              onClick={() => onConnect(bank.id)}
              disabled={selectedBank === bank.id}
              className={`p-4 bg-slate-700/50 rounded-lg flex flex-col items-center gap-3 transition-all hover:bg-slate-700 hover:shadow-md ${
                selectedBank === bank.id
                  ? "bg-slate-700 border border-cyan-500/50"
                  : "border border-transparent"
              }`}
            >
              <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center">
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-slate-200 text-sm font-medium">
                {bank.name}
              </span>
              {selectedBank === bank.id && (
                <div className="flex items-center gap-2 text-xs text-cyan-400">
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>Connecting...</span>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 border-t border-slate-700/50 pt-4">
          <ExternalLink className="w-5 h-5 text-slate-400" />
          <p className="text-sm text-slate-400">
            Connections are secured via bank-level encryption and use read-only
            access.
          </p>
        </div>
      </div>
    </div>
  );
}
