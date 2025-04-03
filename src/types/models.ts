// User Profile
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  settings: UserSettings;
  financialProfile: FinancialProfile;
}

export interface UserSettings {
  currency: string;
  locale: string;
  theme: "light" | "dark" | "system";
  notifications: {
    email: boolean;
    push: boolean;
    goalReminders: boolean;
    budgetAlerts: boolean;
    transactionAlerts: boolean;
  };
}

// Financial Profile
export interface FinancialProfile {
  monthlyIncome: number;
  savingCapacity: number;
  riskTolerance: "low" | "medium" | "high";
  financialGoals: string[]; // References to FinancialGoal ids
  budgets: string[]; // References to Budget ids
  accounts: string[]; // References to BankAccount ids
}

// Bank Accounts
export interface BankAccount {
  id: string;
  userId: string;
  institutionName: string;
  accountType: "checking" | "savings" | "credit" | "investment";
  accountName: string;
  accountNumber: string; // Last 4 digits only
  balance: number;
  currency: string;
  isActive: boolean;
  lastSync: Date;
  transactions: string[]; // References to Transaction ids
}

// Transactions
export interface Transaction {
  id: string;
  userId: string;
  accountId: string;
  type: "income" | "expense" | "transfer";
  amount: number;
  currency: string;
  category: TransactionCategory;
  subcategory?: string;
  description: string;
  merchant?: string;
  date: Date;
  status: "pending" | "completed" | "failed";
  location?: {
    lat: number;
    lng: number;
    address?: string;
  };
  tags: string[];
  attachments?: string[]; // URLs to receipts or documents
  metadata?: Record<string, any>;
}

export type TransactionCategory =
  | "housing"
  | "transportation"
  | "food"
  | "utilities"
  | "healthcare"
  | "insurance"
  | "entertainment"
  | "shopping"
  | "education"
  | "savings"
  | "investment"
  | "debt"
  | "income"
  | "other";

// Financial Goals
export interface FinancialGoal {
  id: string;
  userId: string;
  type: "saving" | "purchase" | "debt" | "investment";
  title: string;
  description?: string;
  targetAmount: number;
  currentAmount: number;
  currency: string;
  startDate: Date;
  deadline: Date;
  status: "not-started" | "in-progress" | "behind" | "completed" | "abandoned";
  priority: "low" | "medium" | "high";
  category?: string;
  milestones?: GoalMilestone[];
  contributions?: GoalContribution[];
  reminderFrequency?: "daily" | "weekly" | "monthly";
  metadata?: Record<string, any>;
}

export interface GoalMilestone {
  id: string;
  goalId: string;
  title: string;
  targetAmount: number;
  deadline: Date;
  isCompleted: boolean;
}

export interface GoalContribution {
  id: string;
  goalId: string;
  amount: number;
  date: Date;
  source: string; // e.g., "manual", "automatic", "recurring"
  transactionId?: string;
}

// Budgets
export interface Budget {
  id: string;
  userId: string;
  name: string;
  type: "monthly" | "annual" | "custom";
  startDate: Date;
  endDate?: Date;
  categories: BudgetCategory[];
  totalBudget: number;
  currency: string;
  isActive: boolean;
  notifications: {
    warningThreshold: number; // percentage
    overspendingAlert: boolean;
  };
}

export interface BudgetCategory {
  id: string;
  budgetId: string;
  category: TransactionCategory;
  subcategory?: string;
  allocated: number;
  spent: number;
  remaining: number;
  transactions: string[]; // References to Transaction ids
}

// Chat/Advisor
export interface ChatSession {
  id: string;
  userId: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  messages: ChatMessage[];
  context: {
    goals?: string[];
    transactions?: string[];
    budgets?: string[];
  };
  metadata?: Record<string, any>;
}

export interface ChatMessage {
  id: string;
  sessionId: string;
  sender: "user" | "assistant";
  content: string;
  timestamp: Date;
  type: "text" | "purchase-analysis" | "budget-review" | "goal-suggestion";
  metadata?: {
    relatedTransactions?: string[];
    relatedGoals?: string[];
    suggestions?: FinancialSuggestion[];
    analysis?: FinancialAnalysis;
  };
}

// Analysis & Insights
export interface FinancialAnalysis {
  id: string;
  userId: string;
  type: "spending" | "saving" | "investment" | "debt";
  period: {
    start: Date;
    end: Date;
  };
  metrics: {
    totalIncome: number;
    totalExpenses: number;
    savingsRate: number;
    topCategories: {
      category: TransactionCategory;
      amount: number;
      percentage: number;
    }[];
    monthOverMonthChange: number;
    yearOverYearChange: number;
  };
  insights: FinancialInsight[];
}

export interface FinancialInsight {
  id: string;
  analysisId: string;
  type: "observation" | "warning" | "recommendation";
  category?: TransactionCategory;
  title: string;
  description: string;
  impact: "low" | "medium" | "high";
  actionable: boolean;
  suggestedActions?: FinancialSuggestion[];
}

export interface FinancialSuggestion {
  id: string;
  type: "saving" | "spending" | "investment" | "debt";
  title: string;
  description: string;
  potentialImpact: {
    metric: string;
    value: number;
    timeframe: string;
  };
  difficulty: "easy" | "medium" | "hard";
  steps: string[];
  resources?: {
    title: string;
    url: string;
    type: "article" | "video" | "tool";
  }[];
} 