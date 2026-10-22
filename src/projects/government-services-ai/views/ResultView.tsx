"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { AppShell } from "@/projects/government-services-ai/components/layout/AppShell";
import { useRequests } from "@/projects/government-services-ai/contexts/RequestContext";
import { RequestStatusBadge } from "@/projects/government-services-ai/components/shared/RequestStatusBadge";
import { gsaiRoutes } from "@/projects/government-services-ai/utils/routes";
import { Button } from "@/components/ui/button";

export default function ResultView() {
  const params = useSearchParams();
  const id = params.get("id");
  const { requests, lastSubmittedId } = useRequests();
  const targetId = id || lastSubmittedId;

  const request = useMemo(
    () => requests.find((r) => r.id === targetId) || requests[0],
    [requests, targetId]
  );

  return (
    <AppShell>
      <div className="max-w-xl mx-auto">
        <div className="bg-card border border-border rounded-xl p-6">
          <h1 className="text-2xl font-bold mb-1">Request Submitted</h1>
          <p className="text-sm text-muted-foreground mb-5">Your service request is now in the workflow.</p>
          <div className="space-y-2 mb-5">
            <p className="text-sm"><span className="text-muted-foreground">ID:</span> {request?.id}</p>
            <p className="text-sm"><span className="text-muted-foreground">Title:</span> {request?.title}</p>
            <RequestStatusBadge status={request?.status || "submitted"} />
          </div>
          <div className="flex gap-2">
            <Link href={gsaiRoutes.dashboard}><Button>Back to dashboard</Button></Link>
            <Link href={gsaiRoutes.submit}><Button variant="outline">New request</Button></Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

