"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const slots = ["9:00-12:00", "13:00-17:00", "18:00-22:00"];

export default function BookingView() {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <div className="space-y-4 max-w-2xl">
      <h1 className="text-2xl font-bold">Operational Booking</h1>
      <div className="space-y-2">
        {slots.map((slot) => (
          <button
            key={slot}
            onClick={() => setSelected((prev) => (prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]))}
            className={`w-full text-left p-3 border rounded-lg ${selected.includes(slot) ? "border-primary bg-primary/5" : "border-border"}`}
          >
            {slot}
          </button>
        ))}
      </div>
      <Button disabled={selected.length === 0}>Confirm booking ({selected.length})</Button>
    </div>
  );
}

