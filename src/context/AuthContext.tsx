import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  email: string;
  id: number;
  google_id: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Initialize user from localStorage if available
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in on mount
    checkAuth();
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(null);
        return;
      }

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
        setUser(userData);
        navigate("/dashboard");
      } else {
        // If profile check fails, clear stored data
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  const login = () => {
    try {
      const apiUrl = `${import.meta.env.VITE_BASE_URL}auth/login`;
      console.log("Attempting login with:", apiUrl);

      fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        credentials: "include",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Login failed with status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          if (data && data.login_url) {
            console.log("Redirecting to login URL:", data.login_url);
            // Store the state for post-login verification
            localStorage.setItem("loginState", "pending");
            window.location.href = data.login_url;
          } else if (data && data.token) {
            // Direct token response
            localStorage.setItem("token", data.token);
            setUser(data.user);
            navigate("/dashboard");
          } else {
            console.error("Invalid response format", data);
          }
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    } catch (error) {
      console.error("Login process error:", error);
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`${import.meta.env.VITE_BASE_URL}auth/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      // Clear stored data regardless of logout API success
      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("loginState");
      navigate("/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
