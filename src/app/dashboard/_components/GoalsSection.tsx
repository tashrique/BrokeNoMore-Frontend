import React, { useState } from "react";
import {
  Plus,
  Target,
  Pencil,
  Trash2,
  DollarSign,
  Calendar,
} from "lucide-react";
import { Button } from "../../../components/Button";
import { FinancialGoal, GoalType } from "./types";
import { GoalForm } from "./GoalForm";

interface GoalsSectionProps {
  goals?: FinancialGoal[];
  onAddGoal?: (
    goal: Omit<FinancialGoal, "id" | "status" | "createdAt">
  ) => void;
  onEditGoal?: (
    id: string,
    goal: Omit<FinancialGoal, "id" | "status" | "createdAt">
  ) => void;
  onDeleteGoal?: (id: string) => void;
}

export function GoalsSection({
  goals = defaultGoals,
  onAddGoal,
  onEditGoal,
  onDeleteGoal,
}: GoalsSectionProps) {
  const [isAddingGoal, setIsAddingGoal] = useState(false);
  const [editingGoal, setEditingGoal] = useState<FinancialGoal | null>(null);

  const handleAddGoal = (
    goal: Omit<FinancialGoal, "id" | "status" | "createdAt">
  ) => {
    onAddGoal?.(goal);
    setIsAddingGoal(false);
  };

  const handleEditGoal = (
    goal: Omit<FinancialGoal, "id" | "status" | "createdAt">
  ) => {
    if (editingGoal) {
      onEditGoal?.(editingGoal.id, goal);
      setEditingGoal(null);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-lg">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-semibold text-slate-100">
              Financial Goals
            </h2>
          </div>
          <Button
            onClick={() => setIsAddingGoal(true)}
            variant="secondary"
            className="!py-1.5"
            icon={<Plus className="w-4 h-4" />}
          >
            Add Goal
          </Button>
        </div>

        <div className="space-y-3">
          {goals.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onEdit={() => setEditingGoal(goal)}
              onDelete={() => onDeleteGoal?.(goal.id)}
            />
          ))}
        </div>
      </div>

      {isAddingGoal && (
        <GoalForm
          onClose={() => setIsAddingGoal(false)}
          onSubmit={handleAddGoal}
        />
      )}

      {editingGoal && (
        <GoalForm
          initialGoal={editingGoal}
          onClose={() => setEditingGoal(null)}
          onSubmit={handleEditGoal}
        />
      )}
    </div>
  );
}

function GoalCard({
  goal,
  onEdit,
  onDelete,
}: {
  goal: FinancialGoal;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const progress = (goal.currentAmount / goal.targetAmount) * 100;
  const formattedDeadline = new Date(goal.deadline).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 p-3 hover:border-cyan-500/30 transition-all group">
      <div className="flex items-start justify-between mb-2">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-slate-200">{goal.title}</h3>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                goal.type === "saving"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "bg-blue-500/20 text-blue-400"
              }`}
            >
              {goal.type === "saving" ? "Saving" : "Purchase"}
            </span>
          </div>
          {goal.description && (
            <p className="text-xs text-slate-400 mt-1">{goal.description}</p>
          )}
        </div>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={onEdit}
            className="p-1 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <Pencil className="w-4 h-4" />
          </button>
          <button
            onClick={onDelete}
            className="p-1 text-slate-400 hover:text-red-400 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <DollarSign className="w-3 h-3" />
            <span>
              ${goal.currentAmount.toLocaleString()} / $
              {goal.targetAmount.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{formattedDeadline}</span>
          </div>
        </div>

        <div className="relative h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
          <div
            className={`absolute left-0 top-0 h-full rounded-full transition-all ${
              goal.status === "behind"
                ? "bg-red-500"
                : goal.status === "completed"
                ? "bg-green-500"
                : "bg-cyan-500"
            }`}
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[10px]">
          <span
            className={`font-medium ${
              goal.status === "behind"
                ? "text-red-400"
                : goal.status === "completed"
                ? "text-green-400"
                : "text-cyan-400"
            }`}
          >
            {progress.toFixed(1)}% Complete
          </span>
          <span
            className={`${
              goal.status === "behind" ? "text-red-400" : "text-slate-400"
            }`}
          >
            {goal.status === "behind"
              ? "Behind Schedule"
              : goal.status === "completed"
              ? "Goal Achieved!"
              : "On Track"}
          </span>
        </div>
      </div>
    </div>
  );
}

const defaultGoals: FinancialGoal[] = [
  {
    id: "1",
    type: "saving",
    title: "Emergency Fund",
    targetAmount: 5000,
    currentAmount: 2750,
    deadline: new Date("2024-08-01"),
    status: "in-progress",
    description: "Build a 3-month emergency fund",
    createdAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    type: "purchase",
    title: "New Laptop",
    targetAmount: 1500,
    currentAmount: 500,
    deadline: new Date("2024-06-15"),
    status: "behind",
    description: "Save for a MacBook Pro for school",
    createdAt: new Date("2024-02-01"),
  },
  {
    id: "3",
    type: "saving",
    title: "Summer Trip",
    targetAmount: 1000,
    currentAmount: 1000,
    deadline: new Date("2024-07-01"),
    status: "completed",
    createdAt: new Date("2024-01-15"),
  },
];
