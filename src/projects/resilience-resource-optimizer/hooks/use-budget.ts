"use client";

import { interventions } from "@/projects/resilience-resource-optimizer/utils/data";
import { useRro } from "@/projects/resilience-resource-optimizer/contexts/RroContext";

const totalBudget = 2_500_000;

export function useBudget() {
  const { selectedInterventions } = useRro();
  const allocatedBudget = selectedInterventions.reduce((sum, id) => {
    const intervention = interventions.find((item) => item.id === id);
    return sum + (intervention?.cost ?? 0);
  }, 0);
  return {
    totalBudget,
    allocatedBudget,
    remainingBudget: totalBudget - allocatedBudget,
  };
}

