export interface BankAccount {
  id: string;
  name: string;
  type: string;
  balance: number;
  institution: string;
  logo?: string;
  lastUpdated: string;
  connected: boolean;
}

export interface Bank {
  id: string;
  name: string;
  logo: string;
}

export interface FileUpload {
  name: string;
  size: number;
  type: string;
}

export type TabType = "accounts" | "upload"; 