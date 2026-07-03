"use client";

export default function TransparencyView() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">Open Source & Transparency</h1>
      <p className="text-sm text-muted-foreground">
        Methodologies, datasets, and governance choices are documented for public accountability.
      </p>
      <a
        href="https://github.com/phaarvai/resilience-resource-optimizer"
        target="_blank"
        rel="noreferrer"
        className="text-sm text-primary hover:underline"
      >
        View public repository
      </a>
    </div>
  );
}

