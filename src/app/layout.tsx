import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrokeNoMore - Financial Assistant",
  description: "AI-powered financial buddy for college students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 text-slate-200 font-sans">
        {children}
      </body>
    </html>
  );
}
