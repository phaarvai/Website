"use client";

import Link from "next/link";
import { AppShell } from "@/projects/government-services-ai/components/layout/AppShell";
import { useRequests } from "@/projects/government-services-ai/contexts/RequestContext";
import { dashboardStats } from "@/projects/government-services-ai/utils/mock-data";
import { gsaiRoutes } from "@/projects/government-services-ai/utils/routes";
import { RequestStatusBadge } from "@/projects/government-services-ai/components/shared/RequestStatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardView() {
  const { requests } = useRequests();

  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Operations Dashboard</h1>
          <p className="text-sm text-muted-foreground">Live civic service workload and request status.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            ["Open requests", dashboardStats.openRequests],
            ["Avg. response (hrs)", dashboardStats.avgResponseHours],
            ["Completion rate", `${dashboardStats.completionRate}%`],
            ["Active reviewers", dashboardStats.activeReviewers],
          ].map(([label, value]) => (
            <Card key={String(label)}>
              <CardContent className="pt-6">
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-2xl font-semibold mt-1">{value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle className="text-base">Recent requests</CardTitle>
            <Link href={gsaiRoutes.submit}>
              <Button size="sm">New request</Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-3">
            {requests.slice(0, 5).map((r) => (
              <div key={r.id} className="border border-border rounded-lg p-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">{r.title}</p>
                  <p className="text-xs text-muted-foreground">{r.id} · {r.serviceCategory}</p>
                </div>
                <RequestStatusBadge status={r.status} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}

