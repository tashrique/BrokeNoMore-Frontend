"use client";

import React, { useState, useEffect } from "react";

interface MoneyEmoji {
  id: number;
  emoji: string;
  left: number;
  top: number;
  rotate: number;
}

export const MoneyAnimation = () => {
  const [moneyEmojis, setMoneyEmojis] = useState<MoneyEmoji[]>([]);

  useEffect(() => {
    // Create falling money emojis at intervals
    const interval = setInterval(() => {
      if (moneyEmojis.length < 15) {
        setMoneyEmojis((prev) => [
          ...prev,
          {
            id: Date.now(),
            emoji: Math.random() > 0.5 ? "💸" : "💰",
            left: Math.random() * 100,
            top: -10,
            rotate: Math.random() * 360,
          },
        ]);
      }
    }, 1000);

    // Animate money emojis falling
    const animationInterval = setInterval(() => {
      setMoneyEmojis((prev) =>
        prev
          .map((emoji) => ({
            ...emoji,
            top: emoji.top + 5,
            rotate: emoji.rotate + 5,
          }))
          .filter((emoji) => emoji.top < 150)
      );
    }, 200);

    return () => {
      clearInterval(interval);
      clearInterval(animationInterval);
    };
  }, [moneyEmojis.length]);

  return (
    <>
      {moneyEmojis.map((emoji) => (
        <div
          key={emoji.id}
          className="absolute text-2xl animate-bounce"
          style={{
            left: `${emoji.left}%`,
            top: `${emoji.top}%`,
            transform: `rotate(${emoji.rotate}deg)`,
            opacity: 0.7,
            zIndex: 0,
            transition: "top 0.5s linear, rotate 0.5s linear",
          }}
        >
          {emoji.emoji}
        </div>
      ))}
    </>
  );
};
