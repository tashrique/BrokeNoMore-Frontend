import React from "react";
import { X } from "lucide-react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { FinancialGoal, GoalType } from "./types";

interface GoalFormProps {
  onClose: () => void;
  onSubmit: (goal: Omit<FinancialGoal, "id" | "status" | "createdAt">) => void;
  initialGoal?: FinancialGoal;
}

interface FormData {
  type: GoalType;
  title: string;
  targetAmount: string | number;
  currentAmount: string | number;
  deadline: string;
  description: string;
}

export function GoalForm({ onClose, onSubmit, initialGoal }: GoalFormProps) {
  const [formData, setFormData] = React.useState<FormData>({
    type: initialGoal?.type || "saving",
    title: initialGoal?.title || "",
    targetAmount: initialGoal?.targetAmount || "",
    currentAmount: initialGoal?.currentAmount || "",
    deadline: initialGoal?.deadline
      ? new Date(initialGoal.deadline).toISOString().split("T")[0]
      : "",
    description: initialGoal?.description || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      type: formData.type,
      title: formData.title,
      targetAmount: Number(formData.targetAmount),
      currentAmount: Number(formData.currentAmount),
      deadline: new Date(formData.deadline),
      description: formData.description,
    });
    onClose();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-10000">
      <div className="bg-slate-900 rounded-xl border border-slate-700/50 shadow-lg w-full max-w-md">
        <div className="p-4 border-b border-slate-700/50">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-100">
              {initialGoal ? "Edit Goal" : "Add New Goal"}
            </h3>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">
              Goal Type
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="saving"
                  checked={formData.type === "saving"}
                  onChange={handleInputChange}
                  className="text-cyan-500 focus:ring-cyan-500"
                />
                <span className="text-sm text-slate-300">Saving</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="purchase"
                  checked={formData.type === "purchase"}
                  onChange={handleInputChange}
                  className="text-cyan-500 focus:ring-cyan-500"
                />
                <span className="text-sm text-slate-300">Purchase</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Title
            </label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Emergency Fund"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Target Amount
              </label>
              <Input
                type="number"
                name="targetAmount"
                value={formData.targetAmount}
                onChange={handleInputChange}
                placeholder="0.00"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Current Amount
              </label>
              <Input
                type="number"
                name="currentAmount"
                value={formData.currentAmount}
                onChange={handleInputChange}
                placeholder="0.00"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Deadline
            </label>
            <Input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleInputChange}
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Add some details about your goal..."
              className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              rows={3}
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button onClick={onClose} variant="secondary">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {initialGoal ? "Save Changes" : "Add Goal"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
