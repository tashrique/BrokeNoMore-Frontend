import React from "react";
import Navbar from "@/components/Navbar";

interface DashboardContainerProps {
  children: JSX.Element | JSX.Element[];
}

export function DashboardContainer({ children }: DashboardContainerProps) {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="flex-1 p-8 ml-64">
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-slate-100 font-display">
              Dashboard
            </h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
