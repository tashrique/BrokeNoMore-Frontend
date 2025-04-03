import React from "react";

interface InputProps {
  type?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  min?: string | number;
  step?: string | number;
  className?: string;
}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 ${className}`}
    />
  );
}
