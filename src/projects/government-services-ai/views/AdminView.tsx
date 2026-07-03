"use client";

import { AppShell } from "@/projects/government-services-ai/components/layout/AppShell";
import { useRequests } from "@/projects/government-services-ai/contexts/RequestContext";

export default function AdminView() {
  const { requests } = useRequests();

  const byStatus = requests.reduce<Record<string, number>>((acc, r) => {
    acc[r.status] = (acc[r.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <AppShell>
      <div className="space-y-5">
        <h1 className="text-2xl font-bold">Admin Control Room</h1>
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(byStatus).map(([status, count]) => (
            <div key={status} className="bg-card border border-border rounded-lg p-4">
              <p className="text-xs uppercase text-muted-foreground">{status.replace("_", " ")}</p>
              <p className="text-2xl font-semibold mt-1">{count}</p>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

