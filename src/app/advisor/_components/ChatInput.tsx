import React, { useState, FormEvent, KeyboardEvent } from "react";
import { Button } from "@/components/Button";
import { SendHorizontal } from "lucide-react";

interface ChatInputProps {
  onSubmit: (message: string) => void;
  isLoading?: boolean;
  placeholder?: string;
}

export function ChatInput({
  onSubmit,
  isLoading = false,
  placeholder = "Describe a purchase you're considering...",
}: ChatInputProps) {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() === "" || isLoading) return;

    onSubmit(message);
    setMessage("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as FormEvent);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-slate-700 p-3 bg-slate-800"
    >
      <div className="flex items-end gap-2">
        <div className="flex-1 bg-slate-700 rounded-lg">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            rows={1}
            className="w-full bg-transparent p-3 text-slate-200 placeholder:text-slate-400 resize-none focus:outline-none"
            style={{
              minHeight: "46px",
              maxHeight: "200px",
            }}
          />
        </div>
        <Button
          type="submit"
          disabled={message.trim() === "" || isLoading}
          icon={<SendHorizontal className="w-5 h-5" />}
          className="!p-3"
          aria-label="Send message"
        />
      </div>
    </form>
  );
}
