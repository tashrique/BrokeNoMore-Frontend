"use client";

import React, { useState, useEffect } from "react";

const brokeJokes = [
  "When your bank account has more mood swings than you do...",
  "My budget has three lines: rent, ramen, regret.",
  "My wallet is like an onion - opening it makes me cry.",
  "My financial plan? Wait for my student loans to expire with me.",
  "My credit score is so low it needs a ladder to reach rock bottom.",
];

export const BrokeMessage = () => {
  const [showBrokeMessage, setShowBrokeMessage] = useState(false);
  const [currentJoke, setCurrentJoke] = useState(0);

  useEffect(() => {
    // Rotate through broke jokes
    const jokeInterval = setInterval(() => {
      setCurrentJoke((prev) => (prev + 1) % brokeJokes.length);
    }, 5000);

    // Show broke message after a delay
    setTimeout(() => {
      setShowBrokeMessage(true);
    }, 1000);

    return () => clearInterval(jokeInterval);
  }, []);

  return (
    <div
      className={`absolute top-4 transform -translate-x-1/2 bg-gradient-to-br from-purple-600 to-cyan-500 text-white px-5 py-2 rounded-full font-medium shadow-lg transition-all duration-700 z-10 backdrop-blur-sm border border-white/20 font-button animate-[bounce_3s_ease-in-out_infinite] ${
        showBrokeMessage
          ? "opacity-100 translate-y-0 scale-100 rotate-1"
          : "opacity-0 -translate-y-20 scale-90 rotate-6"
      }`}
    >
      <p className="text-sm whitespace-nowrap tracking-wide flex items-center gap-2">
        {brokeJokes[currentJoke as number]}
        <span className="animate-spin inline-block text-amber-300">💸</span>
      </p>
    </div>
  );
};
