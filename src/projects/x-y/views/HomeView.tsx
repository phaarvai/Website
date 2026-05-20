"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { xyRoutes } from "@/projects/x-y/utils/routes";

export default function HomeView() {
  return (
    <div className="space-y-5">
      <p className="label-mono">Startup Theme</p>
      <h1 className="text-3xl font-bold">x!y - Manufacturing made easy and efficient</h1>
      <p className="text-muted-foreground max-w-2xl">
        AI-assisted manufacturing marketplace for supplier discovery, capacity booking, and production operations.
      </p>
      <div className="flex gap-2">
        <Link href={xyRoutes.browse}><Button>Find manufacturers</Button></Link>
        <Link href={xyRoutes.assistant}><Button variant="outline">Open AI assistant</Button></Link>
      </div>
    </div>
  );
}

