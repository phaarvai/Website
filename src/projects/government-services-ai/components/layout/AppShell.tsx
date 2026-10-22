"use client";

import type { ReactNode } from "react";
import { AppNavbar } from "@/projects/government-services-ai/components/layout/AppNavbar";
import { AppSidebar } from "@/projects/government-services-ai/components/layout/AppSidebar";

interface AppShellProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export function AppShell({ children, showSidebar = true }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppNavbar />
      <div className="flex flex-1 w-full max-w-[1400px] mx-auto">
        {showSidebar && <AppSidebar />}
        <main className="flex-1 p-4 md:p-6 lg:p-8 min-w-0">{children}</main>
      </div>
    </div>
  );
}
