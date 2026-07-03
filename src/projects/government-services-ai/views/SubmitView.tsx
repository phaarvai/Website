"use client";

import { useState } from "react";
import { AppShell } from "@/projects/government-services-ai/components/layout/AppShell";
import { serviceCategories } from "@/projects/government-services-ai/utils/mock-data";
import { useRequests } from "@/projects/government-services-ai/contexts/RequestContext";
import { useGSAINavigation } from "@/projects/government-services-ai/hooks/use-gsai-navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function SubmitView() {
  const { draft, setDraft, submitDraft } = useRequests();
  const { goToResult } = useGSAINavigation();
  const [title, setTitle] = useState(draft?.title || "");
  const [description, setDescription] = useState(draft?.description || "");
  const [categoryId, setCategoryId] = useState(draft?.categoryId || serviceCategories[0].id);

  const onSubmit = () => {
    const category = serviceCategories.find((s) => s.id === categoryId) || serviceCategories[0];
    setDraft({ categoryId, categoryLabel: category.label, title, description });
    const id = submitDraft();
    if (id) goToResult(id);
  };

  return (
    <AppShell>
      <div className="max-w-2xl mx-auto space-y-5">
        <h1 className="text-2xl font-bold">Submit Service Request</h1>
        <div className="bg-card border border-border rounded-xl p-5 space-y-4">
          <div className="space-y-2">
            <Label>Category</Label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
            >
              {serviceCategories.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label>Request title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Request details</Label>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} className="min-h-[120px]" />
          </div>
          <div className="flex justify-end">
            <Button onClick={onSubmit}>Submit request</Button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

