"use client";

import { useState } from "react";
import { AppShell } from "@/projects/government-services-ai/components/layout/AppShell";
import { initialAssistantMessages } from "@/projects/government-services-ai/utils/mock-data";
import { useRequests } from "@/projects/government-services-ai/contexts/RequestContext";
import { useGSAINavigation } from "@/projects/government-services-ai/hooks/use-gsai-navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AssistantView() {
  const { setDraft } = useRequests();
  const { goToSubmit } = useGSAINavigation();
  const [messages, setMessages] = useState(initialAssistantMessages);
  const [query, setQuery] = useState("");

  const send = () => {
    if (!query.trim()) return;
    const text = query.trim();
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}`, role: "user", content: text, timestamp: new Date().toISOString() },
      {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content:
          "Based on your request, I can pre-fill a service form. Continue to the submit flow to review details.",
        timestamp: new Date().toISOString(),
      },
    ]);
    setDraft({
      categoryId: "permits",
      categoryLabel: "Permits & Licensing",
      title: text.slice(0, 70),
      description: `AI summary: ${text}`,
    });
    setQuery("");
  };

  return (
    <AppShell>
      <div className="max-w-3xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">Government Services Assistant</h1>
        <div className="border border-border rounded-xl bg-card p-4 space-y-3 h-[50vh] overflow-auto">
          {messages.map((m) => (
            <div key={m.id} className={m.role === "assistant" ? "text-sm" : "text-sm text-right"}>
              <div className={m.role === "assistant" ? "inline-block bg-muted px-3 py-2 rounded-lg" : "inline-block bg-primary text-white px-3 py-2 rounded-lg"}>
                {m.content}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Describe your service need..." />
          <Button onClick={send}>Ask AI</Button>
          <Button variant="outline" onClick={goToSubmit}>Continue</Button>
        </div>
      </div>
    </AppShell>
  );
}

