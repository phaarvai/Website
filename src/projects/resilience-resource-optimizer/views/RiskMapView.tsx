"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const wards = [
  ["Ward 42", 92],
  ["Ward 18", 88],
  ["Ward 51", 84],
  ["Ward 23", 81],
  ["Ward 34", 74],
];

export default function RiskMapView() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">City Risk Map</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Highest risk wards</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {wards.map(([name, score]) => (
            <div key={name} className="flex items-center gap-3">
              <div className="w-32 text-sm">{name}</div>
              <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${score}%` }} />
              </div>
              <div className="text-sm font-medium w-10 text-right">{score}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

