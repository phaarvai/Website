"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  FilePlus,
  ClipboardCheck,
  Shield,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/projects/government-services-ai/contexts/AuthContext";
import { gsaiRoutes } from "@/projects/government-services-ai/utils/routes";
import { useGSAINavigation } from "@/projects/government-services-ai/hooks/use-gsai-navigation";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: gsaiRoutes.dashboard, label: "Dashboard", icon: LayoutDashboard, roles: ["citizen", "reviewer", "admin"] },
  { href: gsaiRoutes.assistant, label: "Assistant", icon: MessageSquare, roles: ["citizen", "reviewer", "admin"] },
  { href: gsaiRoutes.submit, label: "Submit request", icon: FilePlus, roles: ["citizen", "reviewer", "admin"] },
  { href: gsaiRoutes.review, label: "Review queue", icon: ClipboardCheck, roles: ["reviewer", "admin"] },
  { href: gsaiRoutes.admin, label: "Admin", icon: Shield, roles: ["admin"] },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const { goToLogin } = useGSAINavigation();

  const visible = navItems.filter(
    (item) => user && item.roles.includes(user.role)
  );

  return (
    <aside
      className="hidden lg:flex w-60 shrink-0 flex-col border-r border-border bg-card min-h-[calc(100vh-3.5rem)]"
      aria-label="Application navigation"
    >
      <nav className="flex flex-col gap-1 p-4 flex-1">
        {visible.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon size={18} strokeWidth={1.75} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-border">
        <p className="text-xs text-muted-foreground mb-2 truncate">{user?.email}</p>
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start gap-2"
          onClick={() => {
            logout();
            goToLogin();
          }}
        >
          <LogOut size={14} />
          Sign out
        </Button>
      </div>
    </aside>
  );
}