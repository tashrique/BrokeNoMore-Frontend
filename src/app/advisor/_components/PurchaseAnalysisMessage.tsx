import React from "react";
import { ThumbsUp, ThumbsDown, HelpCircle } from "lucide-react";
import { PurchaseDetails, PurchaseRecommendation } from "./types";

interface PurchaseAnalysisMessageProps {
  purchaseDetails: PurchaseDetails;
}

export function PurchaseAnalysisMessage({
  purchaseDetails,
}: PurchaseAnalysisMessageProps) {
  const { productName, price, recommendation, reasoning, alternatives } =
    purchaseDetails;

  return (
    <div className="bg-slate-800/90 rounded-lg overflow-hidden">
      <div className="p-3 border-b border-slate-700/50">
        <div className="flex justify-between items-center">
          <h4 className="font-medium">{productName || "Product"}</h4>
          <span className="text-slate-400">${price?.toFixed(2) || "0.00"}</span>
        </div>
      </div>

      <div className="p-3">
        <div className="flex items-center gap-2 mb-3">
          {recommendation === "buy" && (
            <>
              <div className="p-1 bg-green-500/20 rounded-full">
                <ThumbsUp className="w-4 h-4 text-green-500" />
              </div>
              <span className="text-green-400 font-medium">Worth buying</span>
            </>
          )}
          {recommendation === "avoid" && (
            <>
              <div className="p-1 bg-red-500/20 rounded-full">
                <ThumbsDown className="w-4 h-4 text-red-500" />
              </div>
              <span className="text-red-400 font-medium">
                Not worth it right now
              </span>
            </>
          )}
          {recommendation === "consider" && (
            <>
              <div className="p-1 bg-yellow-500/20 rounded-full">
                <HelpCircle className="w-4 h-4 text-yellow-500" />
              </div>
              <span className="text-yellow-400 font-medium">
                Consider carefully
              </span>
            </>
          )}
        </div>

        {reasoning && (
          <p className="text-sm text-slate-300 mb-3">{reasoning}</p>
        )}

        {alternatives && alternatives.length > 0 && (
          <div className="mt-2">
            <p className="text-sm font-medium text-slate-300 mb-2">
              Alternatives to consider:
            </p>
            <ul className="text-sm text-slate-400 space-y-1 pl-5 list-disc">
              {alternatives.map((alt, index) => (
                <li key={index}>{alt}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
