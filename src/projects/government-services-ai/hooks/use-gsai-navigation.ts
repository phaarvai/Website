"use client";

import { useRouter } from "next/navigation";
import { gsaiRoutes } from "@/projects/government-services-ai/utils/routes";

/** Next.js navigation helper (replaces react-router useNavigate) */
export function useGSAINavigation() {
  const router = useRouter();

  return {
    goToLogin: () => router.push(gsaiRoutes.login),
    goToDashboard: () => router.push(gsaiRoutes.dashboard),
    goToAssistant: () => router.push(gsaiRoutes.assistant),
    goToAdmin: () => router.push(gsaiRoutes.admin),
    goToReview: () => router.push(gsaiRoutes.review),
    goToSubmit: () => router.push(gsaiRoutes.submit),
    goToResult: (id?: string) =>
      router.push(id ? `${gsaiRoutes.result}?id=${id}` : gsaiRoutes.result),
    goToProject: () => router.push(gsaiRoutes.project),
    back: () => router.back(),
    push: router.push,
    replace: router.replace,
  };
}
