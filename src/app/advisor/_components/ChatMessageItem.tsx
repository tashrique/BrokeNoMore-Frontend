import React from "react";
import { Message, MessageSender } from "./types";
import { PurchaseAnalysisMessage } from "./PurchaseAnalysisMessage";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === "user";

  // Format time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div
      className={`flex gap-3 p-4 ${isUser ? "bg-slate-800" : "bg-slate-900"}`}
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs ${
          isUser
            ? "bg-gradient-to-r from-green-500 to-emerald-500"
            : "bg-gradient-to-r from-blue-500 to-cyan-400"
        }`}
      >
        {isUser ? "You" : "PA"}
      </div>
      <div className="flex-1">
        <div className="font-medium text-slate-200 mb-1">
          {isUser ? "You" : "Purchase Advisor"}
        </div>

        {message.type === "purchase-analysis" && message.purchaseDetails ? (
          <div>
            <p className="text-sm text-slate-300 mb-2">{message.content}</p>
            <PurchaseAnalysisMessage
              purchaseDetails={message.purchaseDetails}
            />
          </div>
        ) : (
          <div className="text-slate-300 whitespace-pre-wrap">
            {message.content}
          </div>
        )}

        <div className="text-xs text-slate-500 mt-1">
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
}
