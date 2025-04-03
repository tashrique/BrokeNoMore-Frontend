import React from "react";

interface ButtonProps {
  children?: JSX.Element | JSX.Element[] | string;
  variant?: "primary" | "secondary" | "danger";
  icon?: JSX.Element;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  icon,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: "bg-cyan-500 hover:bg-cyan-600 text-white focus:ring-cyan-500/50",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-slate-200 focus:ring-slate-500/50 border border-slate-700/50",
    danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-500/50",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
