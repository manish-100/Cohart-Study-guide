"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  showLogin: () => void;
  requireAuth: (callback: () => void) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  showLogin: () => {},
  requireAuth: () => {},
});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem("cohart_auth") === "1";
  });
  const [loginOpen, setLoginOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pendingCallback, setPendingCallback] = useState<(() => void) | null>(null);

  function showLogin() {
    setLoginOpen(true);
    setError("");
  }

  const requireAuth = useCallback((callback: () => void) => {
    if (authenticated) {
      callback();
      return;
    }
    setPendingCallback(() => callback);
    setLoginOpen(true);
    setError("");
  }, [authenticated]);

  function handleLogin() {
    const envUser = process.env.NEXT_PUBLIC_ADMIN_USERNAME ?? "";
    const envPass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? "";

    if (username === envUser && password === envPass) {
      setAuthenticated(true);
      sessionStorage.setItem("cohart_auth", "1");
      setLoginOpen(false);
      setUsername("");
      setPassword("");
      setError("");
      if (pendingCallback) {
        pendingCallback();
        setPendingCallback(null);
      }
    } else {
      setError("Invalid credentials");
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleLogin();
    if (e.key === "Escape") {
      setLoginOpen(false);
      setPendingCallback(null);
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated: authenticated, showLogin, requireAuth }}>
      {children}

      {loginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">
          <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl">
            <h2 className="mb-1 text-xl font-bold text-gray-900">Login Required</h2>
            <p className="mb-6 text-sm text-gray-500">Sign in to use notes, highlights, and whiteboard.</p>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Username"
              autoFocus
              className="mb-3 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-100"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Password"
              className="mb-4 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-100"
            />

            {error && (
              <p className="mb-3 text-sm font-medium text-red-500">{error}</p>
            )}

            <button
              onClick={handleLogin}
              className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Sign In
            </button>

            <button
              onClick={() => { setLoginOpen(false); setPendingCallback(null); }}
              className="mt-3 w-full rounded-xl px-4 py-2 text-sm text-gray-400 hover:text-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </AuthContext.Provider>
  );
}
