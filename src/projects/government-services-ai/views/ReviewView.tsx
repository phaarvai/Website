"use client";

import { AppShell } from "@/projects/government-services-ai/components/layout/AppShell";
import { useRequests } from "@/projects/government-services-ai/contexts/RequestContext";
import { RequestStatusBadge } from "@/projects/government-services-ai/components/shared/RequestStatusBadge";
import type { RequestStatus } from "@/projects/government-services-ai/utils/types";
import { Button } from "@/components/ui/button";

export default function ReviewView() {
  const { requests, updateRequestStatus } = useRequests();

  const action = (id: string, status: RequestStatus) => updateRequestStatus(id, status);

  return (
    <AppShell>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Review Queue</h1>
        {requests.map((r) => (
          <div key={r.id} className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">{r.title}</p>
              <RequestStatusBadge status={r.status} />
            </div>
            <p className="text-sm text-muted-foreground mb-3">{r.summary}</p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => action(r.id, "in_review")}>Mark in review</Button>
              <Button size="sm" variant="outline" onClick={() => action(r.id, "needs_info")}>Needs info</Button>
              <Button size="sm" onClick={() => action(r.id, "approved")}>Approve</Button>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}

