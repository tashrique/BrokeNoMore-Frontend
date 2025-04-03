import React from "react";

interface CardProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-lg hover:border-cyan-500/30 transition-all group ${className}`}
    >
      {children}
    </div>
  );
}
