import React from "react";
import { TabType } from "./types";

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex space-x-4 border-b border-slate-700/50 pb-4">
      <button
        onClick={() => onTabChange("accounts")}
        className={`px-4 py-2 rounded-lg ${
          activeTab === "accounts"
            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
            : "text-slate-300 hover:bg-slate-700/50"
        }`}
      >
        Connected Accounts
      </button>
      <button
        onClick={() => onTabChange("upload")}
        className={`px-4 py-2 rounded-lg ${
          activeTab === "upload"
            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
            : "text-slate-300 hover:bg-slate-700/50"
        }`}
      >
        Upload Statements
      </button>
    </div>
  );
}
