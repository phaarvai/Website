"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { xyRoutes } from "@/projects/x-y/utils/routes";
import { cn } from "@/lib/utils";

const nav = [
  [xyRoutes.home, "Overview"],
  [xyRoutes.browse, "Supplier Discovery"],
  [xyRoutes.assistant, "AI Assistant"],
  [xyRoutes.booking, "Operations"],
  [xyRoutes.providerSetup, "Provider Setup"],
] as const;

export function XyShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 h-14 border-b border-border bg-white/95 backdrop-blur-md">
        <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          <Link href={xyRoutes.home} className="font-semibold text-sm">x!y Manufacturing Platform</Link>
          <nav className="hidden lg:flex gap-1">
            {nav.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm px-3 py-1.5 rounded-md",
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
  );
}

