"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProviderSetupView() {
  return (
    <div className="space-y-4 max-w-2xl">
      <h1 className="text-2xl font-bold">Provider Setup</h1>
      <Input placeholder="Factory name" />
      <Input placeholder="Primary machine type" />
      <Input placeholder="Price per hour" />
      <Button>Publish provider profile</Button>
    </div>
  );
}

