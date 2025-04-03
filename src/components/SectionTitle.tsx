import React from "react";

interface SectionTitleProps {
  title: string;
  icon?: JSX.Element;
  className?: string;
}

export function SectionTitle({
  title,
  icon,
  className = "",
}: SectionTitleProps) {
  return (
    <h2
      className={`text-xl font-semibold text-slate-100 font-display flex items-center gap-2 ${className}`}
    >
      {icon && <span className="text-cyan-400">{icon}</span>}
      {title}
    </h2>
  );
}
