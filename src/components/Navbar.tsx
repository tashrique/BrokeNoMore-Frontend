import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Wallet, Upload, ShoppingBag, BarChart3, Sparkles } from "lucide-react";

const Navbar = () => {
  const [hoveringLogo, setHoveringLogo] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-slate-800/90 backdrop-blur-sm p-6 shadow-lg flex flex-col border-r border-slate-700/50 overflow-y-auto">
      <div
        className="flex items-center gap-2 mb-8 cursor-pointer"
        onMouseEnter={() => setHoveringLogo(true)}
        onMouseLeave={() => setHoveringLogo(false)}
      >
        <div className="relative">
          <Wallet
            className={`w-8 h-8 text-cyan-400 transition-all duration-300 ${
              hoveringLogo ? "rotate-12" : ""
            }`}
          />
          {hoveringLogo && (
            <Sparkles className="w-4 h-4 text-amber-400 absolute -top-1 -right-1 animate-pulse" />
          )}
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-display">
          Broke<span className="text-amber-400">No</span>More
        </h1>
      </div>

      <div className="space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 font-button ${
              isActive
                ? "bg-gradient-to-r from-slate-700/80 to-slate-700/40 text-cyan-400 shadow-md"
                : "hover:bg-slate-700/30 text-slate-300 hover:translate-x-1"
            }`
          }
        >
          <BarChart3 className="w-5 h-5" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 font-button ${
              isActive
                ? "bg-gradient-to-r from-slate-700/80 to-slate-700/40 text-cyan-400 shadow-md"
                : "hover:bg-slate-700/30 text-slate-300 hover:translate-x-1"
            }`
          }
        >
          <Upload className="w-5 h-5" />
          <span>Transactions</span>
        </NavLink>

        <NavLink
          to="/advisor"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 font-button ${
              isActive
                ? "bg-gradient-to-r from-slate-700/80 to-slate-700/40 text-cyan-400 shadow-md"
                : "hover:bg-slate-700/30 text-slate-300 hover:translate-x-1"
            }`
          }
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Purchase Advisor</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
