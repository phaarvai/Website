"use client";

import type { ReactNode } from "react";
import { AuthProvider } from "@/projects/government-services-ai/contexts/AuthContext";
import { RequestProvider } from "@/projects/government-services-ai/contexts/RequestContext";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <RequestProvider>{children}</RequestProvider>
    </AuthProvider>
  );
}
