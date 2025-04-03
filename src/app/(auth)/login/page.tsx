"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MoneyAnimation } from "@/app/(auth)/login/_components/MoneyAnimation";
import { BrokeMessage } from "@/app/(auth)/login/_components/BrokeMessage";
import { LeftHero } from "@/app/(auth)/login/_components/LeftHero";
import { RightHeroLogin } from "@/app/(auth)/login/_components/RightHeroLogin";
export default function Login() {
  const router = useRouter();

  const handleLoginClick = () => {
    // Just redirect to dashboard in this demo
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-900 p-4 font-sans overflow-hidden relative">
      <MoneyAnimation />
      <BrokeMessage />
      <LeftHero />

      {/* Right side - Login */}
      <RightHeroLogin handleLoginClick={handleLoginClick} />
    </div>
  );
}
