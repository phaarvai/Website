"use client";

import { cn } from "@/lib/utils";

export type TechHeaderVariant = "network" | "stack" | "pipeline" | "metrics" | "orchestration";

interface CardTechHeaderProps {
  variant?: TechHeaderVariant;
  className?: string;
}

export function CardTechHeader({ variant = "network", className }: CardTechHeaderProps) {
  return (
    <div
      className={cn(
        "relative h-14 -mx-5 md:-mx-6 -mt-5 md:-mt-6 mb-5 md:mb-6 overflow-hidden rounded-t-xl border-b border-primary/10 bg-gradient-to-br from-primary/[0.06] via-background to-cyan-500/[0.04]",
        className
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-tech-grid opacity-40" />
      {variant === "network" && <NetworkPattern />}
      {variant === "stack" && <StackPattern />}
      {variant === "pipeline" && <PipelinePattern />}
      {variant === "metrics" && <MetricsPattern />}
      {variant === "orchestration" && <OrchestrationPattern />}
    </div>
  );
}

function NetworkPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 56" preserveAspectRatio="xMidYMid slice">
      <line x1="20" y1="28" x2="80" y2="18" stroke="rgba(45,120,110,0.25)" strokeWidth="0.8" className="network-edge" />
      <line x1="80" y1="18" x2="140" y2="32" stroke="rgba(45,120,110,0.25)" strokeWidth="0.8" className="network-edge" style={{ animationDelay: "0.3s" }} />
      <line x1="140" y1="32" x2="180" y2="22" stroke="rgba(45,120,110,0.25)" strokeWidth="0.8" className="network-edge" style={{ animationDelay: "0.6s" }} />
      {[[20, 28], [80, 18], [140, 32], [180, 22]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="rgba(45,120,110,0.5)" className="network-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
      <circle r="2" fill="#2dd4bf" opacity="0.8">
        <animateMotion dur="3s" repeatCount="indefinite" path="M20,28 L80,18 L140,32 L180,22" />
      </circle>
    </svg>
  );
}

function StackPattern() {
  const layers = [12, 22, 32, 42];
  return (
    <svg className="absolute inset-0 w-full h-full px-6" viewBox="0 0 200 56">
      {layers.map((y, i) => (
        <g key={i}>
          <rect x="30" y={y} width="140" height="7" rx="2" fill="rgba(45,120,110,0.12)" stroke="rgba(45,120,110,0.2)" strokeWidth="0.5" />
          <circle cx="24" cy={y + 3.5} r="2" fill="#2dd4bf" className="stack-flow-dot" style={{ animationDelay: `${i * 0.25}s` }} />
        </g>
      ))}
    </svg>
  );
}

function PipelinePattern() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 56">
      <line x1="24" y1="28" x2="176" y2="28" stroke="rgba(45,120,110,0.2)" strokeWidth="1" strokeDasharray="4 4" />
      {[40, 80, 120, 160].map((x, i) => (
        <g key={i}>
          <rect x={x - 10} y="18" width="20" height="20" rx="4" fill="rgba(45,120,110,0.1)" stroke="rgba(45,120,110,0.25)" strokeWidth="0.6" />
          <circle cx={x} cy="28" r="2.5" fill="#2dd4bf" className="stack-flow-dot" style={{ animationDelay: `${i * 0.3}s` }} />
        </g>
      ))}
      <rect x="-20" y="26" width="24" height="4" rx="2" fill="#2dd4bf" opacity="0.7" className="pipeline-runner" />
    </svg>
  );
}

function MetricsPattern() {
  const bars = [18, 28, 22, 34, 26, 38];
  return (
    <svg className="absolute inset-0 w-full h-full px-8" viewBox="0 0 200 56">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={24 + i * 26}
          y={48 - h}
          width="14"
          height={h}
          rx="2"
          fill="rgba(45,120,110,0.35)"
          className="ops-bar-pulse"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
      <polyline
        points="24,30 50,24 76,28 102,18 128,22 154,14 180,20"
        fill="none"
        stroke="#2dd4bf"
        strokeWidth="1.2"
        strokeOpacity="0.6"
        className="ops-wave-pan"
      />
    </svg>
  );
}

function OrchestrationPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 56">
      <circle cx="100" cy="28" r="10" fill="rgba(45,120,110,0.15)" stroke="rgba(45,120,110,0.35)" strokeWidth="0.8" />
      <circle cx="100" cy="28" r="4" fill="#2dd4bf" className="network-pulse" />
      {[[40, 20], [160, 20], [40, 40], [160, 40]].map(([x, y], i) => (
        <g key={i}>
          <line x1="100" y1="28" x2={x} y2={y} stroke="rgba(45,120,110,0.2)" strokeWidth="0.6" className="network-edge" style={{ animationDelay: `${i * 0.2}s` }} />
          <circle cx={x} cy={y} r="3" fill="rgba(45,120,110,0.45)" />
        </g>
      ))}
    </svg>
  );
}

const VARIANTS: TechHeaderVariant[] = ["network", "stack", "pipeline", "metrics", "orchestration"];

export function techVariantForIndex(index: number): TechHeaderVariant {
  return VARIANTS[index % VARIANTS.length];
}
