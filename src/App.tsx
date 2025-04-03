import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import PurchaseAdvisor from "./pages/PurchaseAdvisor";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 text-slate-200 font-sans">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route
          path="/dashboard"
          element={
            <div className="flex">
              <Navbar />
              <div className="flex-1 p-8 ml-64">
                <Dashboard />
              </div>
            </div>
          }
        />
        <Route
          path="/transactions"
          element={
            <div className="flex">
              <Navbar />
              <div className="flex-1 p-8 ml-64">
                <Transactions />
              </div>
            </div>
          }
        />
        <Route
          path="/advisor"
          element={
            <div className="flex">
              <Navbar />
              <div className="flex-1 p-8 ml-64">
                <PurchaseAdvisor />
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
