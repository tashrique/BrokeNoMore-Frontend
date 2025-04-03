import React from "react";
import { MessageSquare, Send } from "lucide-react";

export function FinanceChat() {
  return (
    <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg">
      <h2 className="text-xl font-semibold text-slate-100 font-display flex items-center gap-2 mb-4">
        <MessageSquare className="w-5 h-5 text-cyan-400" />
        Tell me about your finances
      </h2>
      <div className="space-y-4">
        <p className="text-slate-300">
          Share your income, expenses, or financial goals:
        </p>
        <div className="relative">
          <textarea
            placeholder="E.g., I make $800/month from my part-time job, my rent is $500..."
            className="w-full h-36 bg-slate-700/50 border border-slate-600/50 rounded-lg p-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
          ></textarea>
          <button className="absolute bottom-3 right-3 p-2 rounded-lg bg-slate-600/50 text-slate-400">
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm text-slate-400">
          I'll help organize your finances and provide personalized
          recommendations based on your input.
        </p>
      </div>
    </div>
  );
}
