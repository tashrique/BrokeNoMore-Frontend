"use client";

import React from "react";
import { AdvisorContainer } from "./_components/AdvisorContainer";
import { PurchaseAdvisor } from "./_components/PurchaseAdvisor";
import { PurchaseHistory } from "./_components/PurchaseHistory";
import { HowToUse } from "./_components/HowToUse";

export default function AdvisorPage() {
  return (
    <AdvisorContainer>
      <div className="h-full flex gap-6">
        {/* Main Chat Section */}
        <div className="flex-1 flex flex-col min-h-[600px]">
          <PurchaseAdvisor />
        </div>

        {/* Sidebar */}
        <div className="w-80 space-y-4 flex-shrink-0">
          <HowToUse />
          <PurchaseHistory />
        </div>
      </div>
    </AdvisorContainer>
  );
}
