import { LucideIcon } from "lucide-react";

export interface Account {
  id: string;
  name: string;
  type: string;
  balance: number;
  institution: string;
  logo?: string;
  lastUpdated: string;
}

export interface Learning {
  id: string;
  timestamp: string;
  category: string;
  content: string;
}

export interface AnalysisData {
  currentBalance: number;
  income: number;
  expenses: number;
  tuitionSpent: number;
}

export type GoalType = "saving" | "purchase";
export type GoalStatus = "in-progress" | "completed" | "behind";

export interface FinancialGoal {
  id: string;
  type: GoalType;
  title: string;
  targetAmount: number;
  currentAmount?: number;
  deadline?: Date;
  status: GoalStatus;
  description?: string;
  createdAt: Date;
}

export interface Transaction {
  id: string;
  date: Date;
  amount: number;
  type: "income" | "expense";
  category: string;
  description: string;
} 