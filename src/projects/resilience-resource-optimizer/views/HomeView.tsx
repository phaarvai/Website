"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { rroStats } from "@/projects/resilience-resource-optimizer/utils/data";
import { rroRoutes } from "@/projects/resilience-resource-optimizer/utils/routes";

export default function HomeView() {
  return (
    <div className="space-y-6">
      <div>
        <p className="label-mono mb-2">Climate Theme</p>
        <h1 className="text-3xl font-bold">Resilience Resource Optimizer</h1>
        <p className="text-muted-foreground mt-1">
          Child-centered climate resilience planning for local governments.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rroStats.map((s) => (
          <Card key={s.label}>
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className="text-2xl font-semibold mt-1">{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex gap-2">
        <Link href={rroRoutes.riskMap}><Button>View risk map</Button></Link>
        <Link href={rroRoutes.planner}><Button variant="outline">Open planner</Button></Link>
      </div>
    </div>
  );
}

