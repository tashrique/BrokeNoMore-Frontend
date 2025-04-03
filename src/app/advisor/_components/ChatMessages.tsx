import React, { useRef, useEffect } from "react";
import { Message } from "./types";
import { ChatMessage } from "./ChatMessageItem";

interface ChatMessagesProps {
  messages: Message[];
  isLoading?: boolean;
}

export function ChatMessages({
  messages,
  isLoading = false,
}: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}

      {isLoading && (
        <div className="flex items-center gap-3 p-4 bg-slate-900">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs">
            PA
          </div>
          <div className="flex-1">
            <div className="font-medium text-slate-200 mb-1">
              Purchase Advisor
            </div>
            <div className="text-slate-300">
              <div className="flex space-x-2">
                <div className="h-2 w-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="h-2 w-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-2 w-2 bg-slate-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}
