"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  FilePlus,
  ClipboardCheck,
  Shield,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { gsaiRoutes } from "@/projects/government-services-ai/utils/routes";
import { useAuth } from "@/projects/government-services-ai/contexts/AuthContext";
import { useGSAINavigation } from "@/projects/government-services-ai/hooks/use-gsai-navigation";
import { Button } from "@/components/ui/button";

const items = [
  { href: gsaiRoutes.dashboard, label: "Dashboard", icon: LayoutDashboard, roles: ["citizen", "reviewer", "admin"] },
  { href: gsaiRoutes.assistant, label: "Assistant", icon: MessageSquare, roles: ["citizen", "reviewer", "admin"] },
  { href: gsaiRoutes.submit, label: "Submit", icon: FilePlus, roles: ["citizen", "reviewer", "admin"] },
  { href: gsaiRoutes.review, label: "Review", icon: ClipboardCheck, roles: ["reviewer", "admin"] },
  { href: gsaiRoutes.admin, label: "Admin", icon: Shield, roles: ["admin"] },
];

interface AppMobileMenuProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export function AppMobileMenu({ open, onClose, pathname }: AppMobileMenuProps) {
  const { user, logout } = useAuth();
  const { goToLogin } = useGSAINavigation();

  if (!open) return null;

  const visible = items.filter((i) => user && i.roles.includes(user.role));

  return (
    <nav
      className="lg:hidden border-t border-border bg-white px-4 py-3"
      aria-label="Mobile navigation"
    >
      <ul className="flex flex-col gap-1">
        {visible.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium",
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                )}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <Button
        variant="outline"
        size="sm"
        className="w-full mt-3 gap-2"
        onClick={() => {
          logout();
          onClose();
          goToLogin();
        }}
      >
        <LogOut size={14} />
        Sign out
      </Button>
    </nav>
  );
}
