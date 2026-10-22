"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/projects/government-services-ai/contexts/AuthContext";
import { gsaiRoutes } from "@/projects/government-services-ai/utils/routes";
import type { UserRole } from "@/projects/government-services-ai/utils/types";

/** Redirect to login when unauthenticated */
export function useRequireAuth(allowedRoles?: UserRole[]) {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace(gsaiRoutes.login);
      return;
    }
    if (allowedRoles && user && !allowedRoles.includes(user.role)) {
      router.replace(gsaiRoutes.dashboard);
    }
  }, [isAuthenticated, user, allowedRoles, router]);

  return { user, isAuthenticated };
}
