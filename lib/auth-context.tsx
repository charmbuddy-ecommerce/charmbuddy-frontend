"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

type AuthContextValue = {
  isLoggedIn: boolean;
  user: AuthUser | null;
  login: (email: string, name?: string) => void;
  register: (name: string, email: string) => void;
  logout: () => void;
};

const STORAGE_KEY = "cb_auth_v1";

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return null;
      }
      const parsed = JSON.parse(raw) as AuthUser | null;
      if (parsed?.email) {
        return parsed;
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    return null;
  });

  useEffect(() => {
    if (!user) {
      window.localStorage.removeItem(STORAGE_KEY);
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  const value = useMemo<AuthContextValue>(
    () => ({
      isLoggedIn: !!user,
      user,
      login: (email: string, name = "Bloo User") => {
        setUser({ email, name });
      },
      register: (name: string, email: string) => {
        setUser({ name, email });
      },
      logout: () => {
        setUser(null);
      },
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
