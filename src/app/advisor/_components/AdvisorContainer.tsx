import React from "react";
import Navbar from "@/components/Navbar";
import { ShoppingBag } from "lucide-react";

interface AdvisorContainerProps {
  children: JSX.Element | JSX.Element[];
}

export function AdvisorContainer({ children }: AdvisorContainerProps) {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="flex-1 p-8 ml-64">
        <div className="space-y-6 animate-fadeIn h-full flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-slate-100 font-display flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-cyan-400" />
              Purchase Advisor
            </h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
