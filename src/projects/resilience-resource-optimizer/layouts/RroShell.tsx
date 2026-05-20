"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RroProvider } from "@/projects/resilience-resource-optimizer/contexts/RroContext";
import { rroRoutes } from "@/projects/resilience-resource-optimizer/utils/routes";
import { cn } from "@/lib/utils";

const nav = [
  [rroRoutes.home, "Dashboard"],
  [rroRoutes.riskMap, "Risk Map"],
  [rroRoutes.planner, "Resource Planner"],
  [rroRoutes.reports, "Reports"],
  [rroRoutes.settings, "Settings"],
  [rroRoutes.transparency, "Transparency"],
] as const;

export function RroShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <RroProvider>
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
            <Link href={rroRoutes.home} className="font-semibold text-sm">
              Resilience Resource Optimizer
            </Link>
            <nav className="hidden lg:flex items-center gap-1">
              {nav.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-sm",
                    pathname === href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-6 md:px-12 py-8">{children}</main>
      </div>
    </RroProvider>
  );
}

