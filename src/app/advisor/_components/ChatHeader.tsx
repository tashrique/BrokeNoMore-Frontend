import React from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/Button";

interface ChatHeaderProps {
  onClearConversation: () => void;
}

export function ChatHeader({ onClearConversation }: ChatHeaderProps) {
  return (
    <div className="bg-slate-800 border-b border-slate-700 p-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
          PA
        </div>
        <div>
          <h3 className="font-medium text-slate-200">Purchase Advisor</h3>
          <p className="text-xs text-slate-400">
            <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-1"></span>
            Active now
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={onClearConversation}
          variant="secondary"
          className="!p-2 !rounded-lg"
          icon={<Trash2 className="w-5 h-5" />}
          aria-label="Clear conversation"
        />
      </div>
    </div>
  );
}
