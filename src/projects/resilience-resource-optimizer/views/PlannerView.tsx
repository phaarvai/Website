"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { interventions } from "@/projects/resilience-resource-optimizer/utils/data";
import { useRro } from "@/projects/resilience-resource-optimizer/contexts/RroContext";
import { useBudget } from "@/projects/resilience-resource-optimizer/hooks/use-budget";

function money(value: number) {
  return `¹ ${(value / 100000).toFixed(2)} L`;
}

export default function PlannerView() {
  const { selectedInterventions, toggleIntervention } = useRro();
  const { totalBudget, allocatedBudget, remainingBudget } = useBudget();

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader><CardTitle className="text-base">Budget Overview</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm">Total: <span className="font-medium">{money(totalBudget)}</span></p>
          <p className="text-sm">Allocated: <span className="font-medium">{money(allocatedBudget)}</span></p>
          <p className="text-sm">Remaining: <span className="font-medium">{money(remainingBudget)}</span></p>
        </CardContent>
      </Card>
      <Card className="lg:col-span-2">
        <CardHeader><CardTitle className="text-base">Interventions</CardTitle></CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-3">
          {interventions.map((i) => {
            const selected = selectedInterventions.includes(i.id);
            return (
              <button
                key={i.id}
                onClick={() => toggleIntervention(i.id)}
                className={`text-left border rounded-lg p-3 ${selected ? "border-primary bg-primary/5" : "border-border hover:bg-muted"}`}
              >
                <p className="text-sm font-medium">{i.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{money(i.cost)}</p>
              </button>
            );
          })}
          <div className="md:col-span-2 pt-2">
            <Button>Generate implementation plan</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

