"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { GSAIUser, UserRole } from "@/projects/government-services-ai/utils/types";

interface AuthContextValue {
  user: GSAIUser | null;
  isAuthenticated: boolean;
  login: (email: string, role?: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const DEMO_USERS: Record<UserRole, Omit<GSAIUser, "id">> = {
  citizen: {
    name: "Alex Rivera",
    email: "citizen@demo.gov",
    role: "citizen",
    organization: "Resident",
  },
  reviewer: {
    name: "Sam Patel",
    email: "reviewer@demo.gov",
    role: "reviewer",
    organization: "Department of Services",
  },
  admin: {
    name: "Jordan Lee",
    email: "admin@demo.gov",
    role: "admin",
    organization: "City Digital Office",
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<GSAIUser | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("gsai.user");
    if (saved) {
      try {
        setUser(JSON.parse(saved) as GSAIUser);
      } catch {
        window.localStorage.removeItem("gsai.user");
      }
    }
  }, []);

  const login = useCallback((email: string, role: UserRole = "citizen") => {
    const profile = DEMO_USERS[role];
    setUser({
      id: `user-${role}`,
      ...profile,
      email: email || profile.email,
    });
  }, []);

  const logout = useCallback(() => setUser(null), []);

  useEffect(() => {
    if (!user) {
      window.localStorage.removeItem("gsai.user");
      return;
    }
    window.localStorage.setItem("gsai.user", JSON.stringify(user));
  }, [user]);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout,
    }),
    [user, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
