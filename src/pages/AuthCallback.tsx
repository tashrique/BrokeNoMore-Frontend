import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get the token from the URL if it's there
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");
        const error = params.get("error");

        if (error) {
          console.error("Authentication error:", error);
          navigate("/login");
          return;
        }

        if (token) {
          // Store the token
          localStorage.setItem("token", token);

          // Fetch user profile
          const response = await fetch(
            `${import.meta.env.VITE_BASE_URL}auth/profile`,
            {
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.ok) {
            const userData = await response.json();
            localStorage.setItem("user", JSON.stringify(userData));
            navigate("/dashboard");
          } else {
            throw new Error("Failed to fetch user profile");
          }
        } else {
          throw new Error("No token received");
        }
      } catch (error) {
        console.error("Auth callback error:", error);
        navigate("/login");
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-900">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md w-full border border-white/20">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mb-4"></div>
          <h2 className="text-xl font-semibold text-slate-200 mb-2">
            Completing Login...
          </h2>
          <p className="text-slate-400 text-center">
            Please wait while we securely log you in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;
