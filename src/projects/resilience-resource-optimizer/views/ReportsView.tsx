"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ReportsView() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">Preparedness Reports</h1>
        <div className="flex gap-2">
          <Button variant="outline">Publish summary</Button>
          <Button>Export PDF</Button>
        </div>
      </div>
      <Card>
        <CardHeader><CardTitle className="text-base">Executive summary</CardTitle></CardHeader>
        <CardContent className="text-sm text-muted-foreground leading-relaxed">
          31 high-risk sites require immediate intervention. Recommended allocation can protect
          approximately 11,850 children through targeted cooling, water, flood preparedness,
          and multilingual communication actions.
        </CardContent>
      </Card>
    </div>
  );
}

