"use client";
import React, { useState } from "react";
import { TransactionsContainer } from "./_components/TransactionsContainer";
import { TabNavigation } from "./_components/TabNavigation";
import { AccountsSection } from "./_components/AccountsSection";
import { FileUploadSection } from "./_components/FileUploadSection";
import { ConnectBankModal } from "./_components/ConnectBankModal";
import { BankAccount, Bank, TabType, FileUpload } from "./_components/types";
import { Card } from "@/components/Card";

export default function Transactions() {
  const [activeTab, setActiveTab] = useState<TabType>("accounts");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [file, setFile] = useState<FileUpload | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [showConnectModal, setShowConnectModal] = useState<boolean>(false);
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [refreshingAccount, setRefreshingAccount] = useState<string | null>(
    null
  );

  // Sample data
  const [accounts, setAccounts] = useState<BankAccount[]>([
    {
      id: "1",
      name: "Student Checking",
      type: "checking",
      balance: 1246.78,
      institution: "Chase Bank",
      logo: "https://logo.clearbit.com/chase.com",
      lastUpdated: "2 hours ago",
      connected: true,
    },
    {
      id: "2",
      name: "Savings Account",
      type: "savings",
      balance: 3520.45,
      institution: "Bank of America",
      logo: "https://logo.clearbit.com/bankofamerica.com",
      lastUpdated: "1 day ago",
      connected: true,
    },
    {
      id: "3",
      name: "Student Credit Card",
      type: "credit",
      balance: -450.21,
      institution: "Discover",
      logo: "https://logo.clearbit.com/discover.com",
      lastUpdated: "3 hours ago",
      connected: true,
    },
  ]);

  // Sample popular banks
  const popularBanks: Bank[] = [
    {
      id: "chase",
      name: "Chase",
      logo: "https://logo.clearbit.com/chase.com",
    },
    {
      id: "bankofamerica",
      name: "Bank of America",
      logo: "https://logo.clearbit.com/bankofamerica.com",
    },
    {
      id: "wellsfargo",
      name: "Wells Fargo",
      logo: "https://logo.clearbit.com/wellsfargo.com",
    },
    {
      id: "citi",
      name: "Citibank",
      logo: "https://logo.clearbit.com/citi.com",
    },
    {
      id: "discover",
      name: "Discover",
      logo: "https://logo.clearbit.com/discover.com",
    },
    {
      id: "capital",
      name: "Capital One",
      logo: "https://logo.clearbit.com/capitalone.com",
    },
  ];

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      setFile({
        name: droppedFile.name,
        size: droppedFile.size,
        type: droppedFile.type,
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile({
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
      });
    }
  };

  const handleUpload = () => {
    if (!file) return;

    setUploading(true);
    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      setFile(null);
      alert("File uploaded and processed successfully!");
    }, 2000);
  };

  const connectBank = (bankId: string) => {
    setSelectedBank(bankId);
    // In a real app, this would open an OAuth flow to the bank
    setTimeout(() => {
      const bank = popularBanks.find((b) => b.id === bankId);
      if (bank) {
        const newAccount: BankAccount = {
          id: Date.now().toString(),
          name: `${bank.name} Account`,
          type: "checking",
          balance: 1500 + Math.random() * 1000,
          institution: bank.name,
          logo: bank.logo,
          lastUpdated: "Just now",
          connected: true,
        };
        setAccounts([...accounts, newAccount]);
      }
      setSelectedBank(null);
      setShowConnectModal(false);
    }, 2000);
  };

  const refreshAccount = (accountId: string) => {
    setRefreshingAccount(accountId);
    setTimeout(() => {
      setAccounts(
        accounts.map((account) =>
          account.id === accountId
            ? { ...account, lastUpdated: "Just now" }
            : account
        )
      );
      setRefreshingAccount(null);
    }, 1500);
  };

  const disconnectAccount = (accountId: string) => {
    setAccounts(accounts.filter((account) => account.id !== accountId));
  };

  return (
    <TransactionsContainer>
      <Card>
        <div>
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="mt-6">
            {activeTab === "accounts" && (
              <AccountsSection
                accounts={accounts}
                refreshingAccount={refreshingAccount}
                onConnectClick={() => setShowConnectModal(true)}
                onRefresh={refreshAccount}
                onDisconnect={disconnectAccount}
              />
            )}

            {activeTab === "upload" && (
              <FileUploadSection
                isDragging={isDragging}
                file={file}
                uploading={uploading}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onFileChange={handleFileChange}
                onUpload={handleUpload}
              />
            )}
          </div>
        </div>
      </Card>

      {/* Connect Bank Modal */}
      {showConnectModal && (
        <ConnectBankModal
          banks={popularBanks}
          selectedBank={selectedBank}
          onConnect={connectBank}
          onClose={() => setShowConnectModal(false)}
        />
      )}
    </TransactionsContainer>
  );
}
