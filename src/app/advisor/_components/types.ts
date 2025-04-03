export type MessageSender = "user" | "assistant";

export type PurchaseRecommendation = "buy" | "avoid" | "consider";

export interface PurchaseDetails {
  productName?: string;
  price?: number;
  recommendation?: PurchaseRecommendation;
  reasoning?: string;
  alternatives?: string[];
}

export interface Message {
  id: string;
  content: string;
  sender: MessageSender;
  timestamp: Date;
  type?: "text" | "purchase-analysis";
  purchaseDetails?: PurchaseDetails;
} 