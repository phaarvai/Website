"use client";

import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, Workflow } from "lucide-react";
import { gsaiRoutes } from "@/projects/government-services-ai/utils/routes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectOverviewView() {
  return (
    <section className="pt-28 pb-12 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-10">
          <p className="label-mono mb-2">Government Theme</p>
          <h1 className="text-4xl font-bold mb-3">Government Services AI</h1>
          <p className="text-muted-foreground">
            Operational civic platform for request intake, AI guidance, document
            readiness, review workflows, and status visibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {[
            ["Citizen workflows", "Login, AI assistant, guided submission, result tracking."],
            ["Institutional review", "Review queue and status actions for service teams."],
            ["Operational controls", "Admin metrics and performance oversight."],
          ].map(([title, desc]) => (
            <Card key={title} className="border-border">
              <CardHeader>
                <CardTitle className="text-base">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{desc}</CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Building2 size={14} /> Public Service</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck size={14} /> Institution Ready</span>
            <span className="inline-flex items-center gap-1.5"><Workflow size={14} /> End-to-end Workflow</span>
          </div>
          <h2 className="text-xl font-semibold mb-2">Launch platform workspace</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Start from sign-in and move through dashboard, assistant, submit, review, and final result screens.
          </p>
          <Link href={gsaiRoutes.login}>
            <Button className="gap-2">
              Open Government Services AI <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

