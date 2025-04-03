import React, { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { Message } from "./types";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";

export function PurchaseAdvisor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuidv4(),
      content:
        "Hi there! I'm your Purchase Advisor. Tell me about something you're thinking of buying, and I'll help you decide if it's a good financial decision.",
      sender: "assistant",
      timestamp: new Date(),
      type: "text",
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendMessage = useCallback(async (content: string) => {
    // Create and add user message
    const userMessage: Message = {
      id: uuidv4(),
      content,
      sender: "user",
      timestamp: new Date(),
      type: "text",
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // In a real implementation, you would call an API here
      // For demo purposes, we're simulating a response
      setTimeout(() => {
        // Detect if message contains a product inquiry
        const isPurchaseInquiry =
          /buy|purchase|worth|should i get|looking at|thinking about|considering/i.test(
            content
          );

        let assistantMessage: Message;

        if (isPurchaseInquiry) {
          // Extract potential price from message
          const priceMatch = content.match(/\$(\d+(\.\d{1,2})?)/);
          const price = priceMatch
            ? parseFloat(priceMatch[1])
            : Math.floor(Math.random() * 48000 + 2000) / 100;

          // Determine recommendation randomly
          const randomValue = Math.random();
          const recommendation =
            randomValue > 0.6
              ? "buy"
              : randomValue > 0.3
              ? "consider"
              : "avoid";

          assistantMessage = {
            id: uuidv4(),
            content: "Based on your financial situation, here's my analysis:",
            sender: "assistant",
            timestamp: new Date(),
            type: "purchase-analysis",
            purchaseDetails: {
              productName: extractProductName(content),
              price,
              recommendation,
              reasoning: generateReasoning(recommendation),
              alternatives:
                recommendation === "avoid"
                  ? [
                      "Look for a similar item from a different brand",
                      "Check if there's a used or refurbished option available",
                      "Wait for an upcoming sale or discount event",
                    ]
                  : [],
            },
          };
        } else {
          // Generic conversation response
          const genericResponses = [
            "I'm here to help with purchase decisions. Tell me what you're thinking of buying and I can analyze if it's a good financial choice for you.",
            "I'd be happy to give you advice on a potential purchase. What are you considering buying?",
            "I can help evaluate if a purchase aligns with your financial goals. What product are you interested in?",
            "To help you make a smart financial decision, I'll need to know what you're thinking of buying and approximately how much it costs.",
          ];

          assistantMessage = {
            id: uuidv4(),
            content:
              genericResponses[
                Math.floor(Math.random() * genericResponses.length)
              ],
            sender: "assistant",
            timestamp: new Date(),
            type: "text",
          };
        }

        setMessages((prev) => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Failed to send message", error);
      setIsLoading(false);
    }
  }, []);

  const handleClearConversation = useCallback(() => {
    setMessages([
      {
        id: uuidv4(),
        content:
          "Hi there! I'm your Purchase Advisor. Tell me about something you're thinking of buying, and I'll help you decide if it's a good financial decision.",
        sender: "assistant",
        timestamp: new Date(),
        type: "text",
      },
    ]);
  }, []);

  // Helper function to extract product name from message
  const extractProductName = (message: string): string => {
    // Simple extraction - in a real app, this would use NLP
    const productPhrases = [
      /thinking about (?:buying|getting) (?:a|an|the) ([^.,]+)/i,
      /want to (?:buy|get) (?:a|an|the) ([^.,]+)/i,
      /considering (?:a|an|the) ([^.,]+)/i,
      /looking at (?:a|an|the) ([^.,]+)/i,
    ];

    for (const phrase of productPhrases) {
      const match = message.match(phrase);
      if (match && match[1]) {
        return match[1].trim();
      }
    }

    // Fallback to a generic name
    return "item";
  };

  // Helper function to generate reasoning based on recommendation
  const generateReasoning = (recommendation: string): string => {
    if (recommendation === "buy") {
      const reasons = [
        "This appears to be a good value for the money. Based on your spending patterns, this fits within your budget.",
        "This purchase aligns with your financial goals. You've been saving consistently and have the funds available.",
        "The price is reasonable and you've mentioned needing this before. This would be a practical purchase.",
        "This seems like a quality item that would last a long time, making it a good investment.",
      ];
      return reasons[Math.floor(Math.random() * reasons.length)];
    } else if (recommendation === "avoid") {
      const reasons = [
        "This seems expensive relative to your current budget. You might want to wait until after your next paycheck.",
        "Based on your recent spending, this would put you over your monthly budget for non-essentials.",
        "You have upcoming bills that should take priority over this purchase.",
        "There are similar products available at a lower price point that would serve the same purpose.",
      ];
      return reasons[Math.floor(Math.random() * reasons.length)];
    } else {
      const reasons = [
        "This could be a good purchase, but consider waiting for a sale or discount if possible.",
        "The item seems reasonably priced, but make sure it fits into your monthly entertainment/personal budget.",
        "This purchase would be fine financially, but consider if you really need this or if it's just a want.",
        "While you can afford this, remember your savings goals for the semester.",
      ];
      return reasons[Math.floor(Math.random() * reasons.length)];
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 rounded-lg overflow-hidden">
      <ChatHeader onClearConversation={handleClearConversation} />
      <ChatMessages messages={messages} isLoading={isLoading} />
      <ChatInput onSubmit={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}
