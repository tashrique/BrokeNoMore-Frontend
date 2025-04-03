import {
  User,
  Transaction,
  FinancialGoal,
  Budget,
  ChatSession,
  FinancialAnalysis,
  BankAccount,
} from "../types/models";

export const mockUser: User = {
  id: "user_123",
  email: "john.doe@example.com",
  name: "John Doe",
  avatar: "https://example.com/avatars/john.jpg",
  createdAt: new Date("2024-01-01"),
  settings: {
    currency: "USD",
    locale: "en-US",
    theme: "system",
    notifications: {
      email: true,
      push: true,
      goalReminders: true,
      budgetAlerts: true,
      transactionAlerts: true,
    },
  },
  financialProfile: {
    monthlyIncome: 5000,
    savingCapacity: 1500,
    riskTolerance: "medium",
    financialGoals: ["goal_1", "goal_2", "goal_3"],
    budgets: ["budget_1"],
    accounts: ["account_1", "account_2"],
  },
};

export const mockBankAccounts: BankAccount[] = [
  {
    id: "account_1",
    userId: "user_123",
    institutionName: "Chase Bank",
    accountType: "checking",
    accountName: "Primary Checking",
    accountNumber: "4321",
    balance: 3500.75,
    currency: "USD",
    isActive: true,
    lastSync: new Date("2024-03-15T10:30:00Z"),
    transactions: ["tx_1", "tx_2", "tx_3"],
  },
  {
    id: "account_2",
    userId: "user_123",
    institutionName: "Chase Bank",
    accountType: "savings",
    accountName: "Emergency Fund",
    accountNumber: "8765",
    balance: 10000.00,
    currency: "USD",
    isActive: true,
    lastSync: new Date("2024-03-15T10:30:00Z"),
    transactions: ["tx_4", "tx_5"],
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: "tx_1",
    userId: "user_123",
    accountId: "account_1",
    type: "expense",
    amount: 1200,
    currency: "USD",
    category: "housing",
    subcategory: "rent",
    description: "Monthly Rent Payment",
    merchant: "Property Management Inc",
    date: new Date("2024-03-01"),
    status: "completed",
    tags: ["housing", "monthly-bills"],
  },
  {
    id: "tx_2",
    userId: "user_123",
    accountId: "account_1",
    type: "expense",
    amount: 85.50,
    currency: "USD",
    category: "food",
    subcategory: "groceries",
    description: "Weekly Grocery Shopping",
    merchant: "Whole Foods",
    date: new Date("2024-03-10"),
    status: "completed",
    location: {
      lat: 40.7128,
      lng: -74.0060,
      address: "123 Broadway, New York, NY",
    },
    tags: ["groceries", "essentials"],
  },
  {
    id: "tx_3",
    userId: "user_123",
    accountId: "account_1",
    type: "income",
    amount: 5000,
    currency: "USD",
    category: "income",
    subcategory: "salary",
    description: "Bi-weekly Salary",
    merchant: "Tech Corp Inc",
    date: new Date("2024-03-15"),
    status: "completed",
    tags: ["income", "salary"],
  },
];

export const mockGoals: FinancialGoal[] = [
  {
    id: "goal_1",
    userId: "user_123",
    type: "saving",
    title: "Emergency Fund",
    description: "Build a 6-month emergency fund",
    targetAmount: 30000,
    currentAmount: 10000,
    currency: "USD",
    startDate: new Date("2024-01-01"),
    deadline: new Date("2024-12-31"),
    status: "in-progress",
    priority: "high",
    milestones: [
      {
        id: "milestone_1",
        goalId: "goal_1",
        title: "First Month's Expenses",
        targetAmount: 5000,
        deadline: new Date("2024-03-31"),
        isCompleted: true,
      },
    ],
    contributions: [
      {
        id: "contrib_1",
        goalId: "goal_1",
        amount: 1000,
        date: new Date("2024-02-15"),
        source: "automatic",
        transactionId: "tx_5",
      },
    ],
    reminderFrequency: "monthly",
  },
];

export const mockBudgets: Budget[] = [
  {
    id: "budget_1",
    userId: "user_123",
    name: "Monthly Budget",
    type: "monthly",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-03-31"),
    categories: [
      {
        id: "budget_cat_1",
        budgetId: "budget_1",
        category: "housing",
        allocated: 1500,
        spent: 1200,
        remaining: 300,
        transactions: ["tx_1"],
      },
      {
        id: "budget_cat_2",
        budgetId: "budget_1",
        category: "food",
        allocated: 500,
        spent: 285.50,
        remaining: 214.50,
        transactions: ["tx_2"],
      },
    ],
    totalBudget: 3000,
    currency: "USD",
    isActive: true,
    notifications: {
      warningThreshold: 80,
      overspendingAlert: true,
    },
  },
];

export const mockChatSessions: ChatSession[] = [
  {
    id: "chat_1",
    userId: "user_123",
    title: "Purchase Advice - New Laptop",
    createdAt: new Date("2024-03-10T14:00:00Z"),
    updatedAt: new Date("2024-03-10T14:30:00Z"),
    messages: [
      {
        id: "msg_1",
        sessionId: "chat_1",
        sender: "user",
        content: "I'm thinking about buying a new laptop for $1500. Is this a good time considering my goals?",
        timestamp: new Date("2024-03-10T14:00:00Z"),
        type: "text",
      },
      {
        id: "msg_2",
        sessionId: "chat_1",
        sender: "assistant",
        content: "Based on your current emergency fund goal and monthly budget, I'd recommend waiting for 2 months to make this purchase. This will allow you to reach your emergency fund milestone first.",
        timestamp: new Date("2024-03-10T14:01:00Z"),
        type: "purchase-analysis",
        metadata: {
          relatedGoals: ["goal_1"],
          analysis: {
            id: "analysis_1",
            userId: "user_123",
            type: "spending",
            period: {
              start: new Date("2024-03-01"),
              end: new Date("2024-03-31"),
            },
            metrics: {
              totalIncome: 5000,
              totalExpenses: 2500,
              savingsRate: 0.5,
              topCategories: [
                {
                  category: "housing",
                  amount: 1200,
                  percentage: 48,
                },
              ],
              monthOverMonthChange: 0.05,
              yearOverYearChange: 0.1,
            },
            insights: [],
          },
        },
      },
    ],
    context: {
      goals: ["goal_1"],
      transactions: ["tx_1", "tx_2", "tx_3"],
    },
  },
];

export const mockAnalysis: FinancialAnalysis = {
  id: "analysis_1",
  userId: "user_123",
  type: "spending",
  period: {
    start: new Date("2024-03-01"),
    end: new Date("2024-03-31"),
  },
  metrics: {
    totalIncome: 5000,
    totalExpenses: 2500,
    savingsRate: 0.5,
    topCategories: [
      {
        category: "housing",
        amount: 1200,
        percentage: 48,
      },
      {
        category: "food",
        amount: 400,
        percentage: 16,
      },
    ],
    monthOverMonthChange: 0.05,
    yearOverYearChange: 0.1,
  },
  insights: [
    {
      id: "insight_1",
      analysisId: "analysis_1",
      type: "recommendation",
      category: "food",
      title: "High Grocery Spending",
      description: "Your grocery spending is 20% higher than last month. Consider meal planning to reduce costs.",
      impact: "medium",
      actionable: true,
      suggestedActions: [
        {
          id: "suggestion_1",
          type: "spending",
          title: "Create a Meal Plan",
          description: "Planning your meals in advance can help reduce grocery costs by 20-30%",
          potentialImpact: {
            metric: "monthly_savings",
            value: 100,
            timeframe: "monthly",
          },
          difficulty: "easy",
          steps: [
            "Create a weekly meal plan",
            "Make a shopping list based on the plan",
            "Buy in bulk when possible",
            "Check for sales and discounts",
          ],
          resources: [
            {
              title: "Meal Planning 101",
              url: "https://example.com/meal-planning",
              type: "article",
            },
          ],
        },
      ],
    },
  ],
}; 