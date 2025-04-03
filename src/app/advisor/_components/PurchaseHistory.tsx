import React from "react";
import { FileText } from "lucide-react";

interface HistoryItem {
  id: string;
  title: string;
  preview: string;
  date: string;
  messageCount: number;
  status: "consider" | "worth-it" | "avoid";
}

interface PurchaseHistoryProps {
  items?: HistoryItem[];
}

export function PurchaseHistory({
  items = defaultItems,
}: PurchaseHistoryProps) {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-lg">
      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-green-500" />
            <h3 className="font-medium text-slate-200 text-sm">
              Recent History
            </h3>
          </div>
          <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs">
            View All
          </button>
        </div>

        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/80 p-2 rounded-lg border border-slate-700/50 hover:border-green-500/30 transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-medium text-slate-200 text-xs">
                  {item.title}
                </h4>
                <span className="text-[10px] text-slate-400">{item.date}</span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-1">
                {item.preview}
              </p>
              <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-slate-700/50">
                <span className="text-[10px] text-slate-500">
                  {item.messageCount} messages
                </span>
                <StatusBadge status={item.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: HistoryItem["status"] }) {
  if (status === "consider") {
    return (
      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400">
        Consider
      </span>
    );
  } else if (status === "worth-it") {
    return (
      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-400">
        Worth It
      </span>
    );
  } else {
    return (
      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-400">
        Avoid
      </span>
    );
  }
}

const defaultItems: HistoryItem[] = [
  {
    id: "1",
    title: "PlayStation 5 Purchase",
    preview: "I'm considering buying a PS5 for $499. Is it a good...",
    date: "Yesterday",
    messageCount: 4,
    status: "consider",
  },
  {
    id: "2",
    title: "New Laptop Decision",
    preview: "Should I buy a MacBook Pro for school? It costs...",
    date: "2 days ago",
    messageCount: 8,
    status: "worth-it",
  },
];
