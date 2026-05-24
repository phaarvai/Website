"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";
import { AppShell } from "@/projects/government-services-ai/components/layout/AppShell";
import { useAuth } from "@/projects/government-services-ai/contexts/AuthContext";
import { useGSAINavigation } from "@/projects/government-services-ai/hooks/use-gsai-navigation";
import { gsaiRoutes } from "@/projects/government-services-ai/utils/routes";
import type { UserRole } from "@/projects/government-services-ai/utils/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LoginView() {
  const { login, isAuthenticated } = useAuth();
  const { goToDashboard } = useGSAINavigation();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<UserRole>("citizen");

  useEffect(() => {
    if (isAuthenticated) goToDashboard();
  }, [isAuthenticated, goToDashboard]);

  if (isAuthenticated) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, role);
    goToDashboard();
  };

  return (
    <AppShell showSidebar={false}>
      <div className="max-w-md mx-auto py-8 md:py-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Building2 size={22} />
          </span>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Sign in</h1>
            <p className="text-sm text-muted-foreground">Government Services AI — operational platform</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-5"
        >
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.gov"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Demo role</Label>
            <Select value={role} onValueChange={(v) => setRole(v as UserRole)}>
              <SelectTrigger id="role">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="citizen">Citizen</SelectItem>
                <SelectItem value="reviewer">Reviewer</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full gap-2">
            Continue <ArrowRight size={16} />
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Demo environment — no real authentication.{" "}
            <Link href={gsaiRoutes.project} className="text-primary hover:underline">
              Back to project overview
            </Link>
          </p>
        </form>
      </div>
    </AppShell>
  );
}
