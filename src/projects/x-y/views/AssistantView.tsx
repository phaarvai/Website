"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { xyRoutes } from "@/projects/x-y/utils/routes";

export default function AssistantView() {
  const [idea, setIdea] = useState("");
  const [plan, setPlan] = useState("");

  return (
    <div className="space-y-4 max-w-3xl">
      <h1 className="text-2xl font-bold">AI Manufacturing Assistant</h1>
      <div className="flex gap-2">
        <Input value={idea} onChange={(e) => setIdea(e.target.value)} placeholder="Describe your product idea..." />
        <Button onClick={() => setPlan("4-layer process, estimated $45k-$55k, 7-10 weeks, CNC + molding + QA.")}>Generate plan</Button>
      </div>
      {plan ? <div className="text-sm bg-card border border-border rounded-lg p-4">{plan}</div> : null}
      <Link href={xyRoutes.browse}><Button variant="outline">Find matching suppliers</Button></Link>
    </div>
  );
}

