import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wallet,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Coffee,
  Pizza,
  CreditCard,
} from "lucide-react";
import { FeatureItem } from "../components/Login/FeatureItem";
import { ExpenseItem } from "../components/Login/ExpenseItem";
import { MoneyAnimation } from "../components/Login/MoneyAnimation";
import { BrokeMessage } from "../components/Login/BrokeMessage";

const Login = () => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const handleLoginClick = () => {
    // Just navigate to dashboard directly
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-900 p-4 font-sans overflow-hidden relative">
      <MoneyAnimation />
      <BrokeMessage />

      {/* Left side - App info */}
      <div className="max-w-xl w-full p-6 md:p-8 md:pr-12 z-10">
        <h1 className="text-6xl font-extrabold text-center md:text-left bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 tracking-tight font-display">
          Broke<span className="text-amber-400">No</span>More
        </h1>
        <p className="text-xl text-slate-300 mb-6 text-center md:text-left font-light">
          AI-powered financial buddy for college students.
        </p>
        <div className="space-y-4 mb-6">
          <FeatureItem
            icon={<Sparkles className="w-6 h-6 text-cyan-400" />}
            title="AI Financial Advisor"
            description="Stop making terrible money decisions. Our AI will do the thinking you can't."
          />

          <FeatureItem
            icon={<ShieldCheck className="w-6 h-6 text-cyan-400" />}
            title="Purchase Guardian"
            description="Because we know you'll buy it anyway unless daddy stops you."
          />

          <FeatureItem
            icon={<TrendingUp className="w-6 h-6 text-cyan-400" />}
            title="Spending Reality Check"
            description="See why you're always broke each month."
          />
        </div>

        {/* Money draining visuals */}
        <div className="bg-slate-800/70 rounded-lg border border-slate-700/80 shadow-lg overflow-hidden">
          <div className="bg-slate-700/50 py-2 px-4 border-b border-slate-600/50">
            <h3 className="font-semibold text-slate-200 font-display text-sm">
              WHERE YOUR MONEY ACTUALLY GOES
            </h3>
          </div>
          <div className="p-3">
            <div className="grid grid-cols-3 gap-1">
              <ExpenseItem
                icon={<Coffee />}
                name="Coffee"
                amount="$143/mo"
                percent={34}
                color="amber"
              />
              <ExpenseItem
                icon={<Pizza />}
                name="Takeout"
                amount="$175/mo"
                percent={51}
                color="red"
              />
              <ExpenseItem
                icon={<CreditCard />}
                name="Impulse"
                amount="$413/mo"
                percent={74}
                color="blue"
              />
            </div>
            <div className="mt-2 pt-2 border-t border-slate-700/50">
              <p className="text-slate-400 text-xs text-center">
                Average college student wastes $675/month on non-essentials
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login */}
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md w-full mt-6 md:mt-0 transform transition-all duration-300 hover:shadow-2xl border border-white/20 hover:border-cyan-500/20 z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <Wallet
              className={`w-16 h-16 text-cyan-400 mb-4 transition-all duration-500 ${
                isHovering ? "rotate-12 scale-110" : ""
              }`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
            {isHovering && (
              <span className="absolute -top-2 -right-2 animate-ping bg-cyan-400 rounded-full h-3 w-3"></span>
            )}
          </div>
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 tracking-tight font-display">
            Take Control Now
          </h2>
          <p className="text-slate-300 text-center">
            Your AI Financial Bestie 🤑
          </p>
        </div>

        <div className="space-y-4 text-center">
          <div className="bg-amber-400/10 border border-amber-500/20 rounded-lg p-3 mb-4">
            <p className="text-amber-300 font-medium font-button">
              Tired of being broke before month-end?
            </p>
          </div>

          <button
            onClick={handleLoginClick}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 font-button font-medium tracking-wide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="20px"
              height="20px"
              className="flex-shrink-0"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          <div className="pt-6">
            <p className="text-xs text-slate-400">
              By continuing, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
