import Image from "next/image";
import { Wallet } from "lucide-react";
import { useState } from "react";

export const RightHeroLogin = ({
  handleLoginClick,
}: {
  handleLoginClick: () => void;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
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
          className="w-full bg-white text-black py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white-500/20 font-button font-medium tracking-wide"
        >
          <Image
            src="/images/google_logo.png"
            alt="Google Logo"
            width={30}
            height={30}
          />
          <span>Continue with Google</span>
        </button>

        <div className="pt-6">
          <p className="text-xs text-slate-400">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};
