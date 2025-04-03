"use client";
import React from "react";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PieChart,
  BookOpen,
} from "lucide-react";

// Import components
import { DashboardContainer } from "./_components/DashboardContainer";
import { SummaryCard } from "./_components/SummaryCard";
import { FinancialAccounts } from "./_components/FinancialAccounts";
import { RecentTransactions } from "./_components/RecentTransactions";
import { FinanceChat } from "./_components/FinanceChat";
import { FinancialProfile } from "./_components/FinancialProfile";
import { AnalysisSection } from "./_components/AnalysisSection";
import { EmptyState } from "./_components/EmptyState";
import { GoalsSection } from "./_components/GoalsSection";
import { FinancialGoal } from "./_components/types";

export default function Dashboard() {
  // This would be replaced with actual state management in a complete implementation
  const accounts = [
    {
      id: "1",
      name: "Student Checking",
      type: "checking",
      balance: 1246.78,
      institution: "Chase Bank",
      logo: "https://logo.clearbit.com/chase.com",
      lastUpdated: "2 hours ago",
    },
  ];

  const userLearnings = [
    {
      id: "1",
      timestamp: new Date().toLocaleString(),
      category: "spending",
      content: "You typically spend 15% more on weekends than during the week.",
    },
    {
      id: "2",
      timestamp: new Date(Date.now() - 86400000).toLocaleString(),
      category: "saving",
      content:
        "Setting aside 10% of your income could build an emergency fund by December.",
    },
    {
      id: "3",
      timestamp: new Date(Date.now() - 172800000).toLocaleString(),
      category: "goal",
      content:
        "Based on your saving rate, you're on track to reach your laptop goal by October.",
    },
    {
      id: "4",
      timestamp: new Date(Date.now() - 259200000).toLocaleString(),
      category: "preference",
      content: "You mentioned wanting to reduce your food delivery spending.",
    },
  ];

  const analysis = {
    currentBalance: 1234.56,
    income: 800.0,
    expenses: 650.0,
    savings: 0.75,
  };

  // Calculate account statistics
  const totalBalance = accounts.reduce(
    (sum, account) => (account.type !== "credit" ? sum + account.balance : sum),
    0
  );

  const handleAddGoal = (
    goal: Omit<FinancialGoal, "id" | "status" | "createdAt">
  ) => {
    // TODO: Implement goal creation with backend
    console.log("Adding goal:", goal);
  };

  const handleEditGoal = (
    id: string,
    goal: Omit<FinancialGoal, "id" | "status" | "createdAt">
  ) => {
    // TODO: Implement goal update with backend
    console.log("Editing goal:", id, goal);
  };

  const handleDeleteGoal = (id: string) => {
    // TODO: Implement goal deletion with backend
    console.log("Deleting goal:", id);
  };

  return (
    <DashboardContainer>
      {accounts.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          {/* Main Dashboard Layout - Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - 2/3 width */}
            <div className="lg:col-span-2 space-y-6">
              {/* Finance Chat */}
              <FinanceChat />

              <GoalsSection
                onAddGoal={handleAddGoal}
                onEditGoal={handleEditGoal}
                onDeleteGoal={handleDeleteGoal}
              />

              {/* Connected Accounts */}
              <FinancialAccounts accounts={accounts} />

              {/* Recent Transactions */}
              <RecentTransactions />
            </div>

            {/* Right Column - 1/3 width */}
            <div className="space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SummaryCard
                  title="Current Balance"
                  value={totalBalance}
                  icon={Wallet}
                  iconColor="blue"
                />

                <SummaryCard
                  title="Income"
                  value={analysis.income || 0}
                  icon={TrendingUp}
                  iconColor="green"
                />

                <SummaryCard
                  title="Expenses"
                  value={analysis.expenses || 0}
                  icon={TrendingDown}
                  iconColor="red"
                />

                <SummaryCard
                  title="Savings"
                  value={analysis.savings || 0}
                  icon={PieChart}
                  iconColor="yellow"
                />
              </div>
              {/* User Learning Section */}
              <FinancialProfile learnings={userLearnings} />
            </div>
          </div>
        </>
      )}
    </DashboardContainer>
  );
}
