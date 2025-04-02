import React from "react";

interface ExpenseItemProps {
  icon: React.ReactNode;
  name: string;
  amount: string;
  percent: number;
  color: "amber" | "red" | "blue";
}

export const ExpenseItem: React.FC<ExpenseItemProps> = ({
  icon,
  name,
  amount,
  percent,
  color,
}) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "amber":
        return "from-amber-500 to-amber-400 text-amber-400";
      case "red":
        return "from-red-500 to-red-400 text-red-400";
      case "blue":
        return "from-blue-500 to-blue-400 text-blue-400";
      default:
        return "from-cyan-500 to-cyan-400 text-cyan-400";
    }
  };

  return (
    <div className="flex flex-col items-center p-2">
      <div className="p-2 bg-slate-700/80 rounded-full mb-1 text-center">
        {icon}
      </div>
      <p className="text-slate-300 text-xs mb-1 font-medium">{name}</p>
      <p
        className={`font-bold font-button text-sm ${getColorClasses(color)
          .split(" ")
          .pop()}`}
      >
        {amount}
      </p>

      {/* Progress bar */}
      <div className="w-full bg-slate-700/50 h-1.5 rounded-full mt-1 overflow-hidden">
        <div
          className={`bg-gradient-to-r ${getColorClasses(color)
            .split(" ")
            .slice(0, 2)
            .join(" ")} h-full rounded-full`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};
