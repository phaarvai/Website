"use client";

import { cn } from "@/lib/utils";

interface NetworkMeshProps {
  className?: string;
  variant?: "light" | "dark";
  density?: "sparse" | "normal";
}

const NODES_SPARSE = [
  { cx: 12, cy: 18, r: 3 },
  { cx: 35, cy: 8, r: 2.5 },
  { cx: 58, cy: 22, r: 3 },
  { cx: 78, cy: 10, r: 2 },
  { cx: 92, cy: 28, r: 2.5 },
  { cx: 22, cy: 45, r: 2 },
  { cx: 48, cy: 52, r: 3.5 },
  { cx: 70, cy: 42, r: 2.5 },
  { cx: 88, cy: 58, r: 2 },
  { cx: 15, cy: 72, r: 2.5 },
  { cx: 40, cy: 78, r: 2 },
  { cx: 62, cy: 68, r: 3 },
  { cx: 85, cy: 82, r: 2.5 },
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 4],
  [5, 9], [6, 10], [7, 11], [9, 10], [10, 11], [11, 12], [2, 6], [3, 7],
];

export function NetworkMesh({ className, variant = "light", density = "normal" }: NetworkMeshProps) {
  const isDark = variant === "dark";
  const stroke = isDark ? "rgba(94, 234, 212, 0.2)" : "rgba(45, 120, 110, 0.18)";
  const nodeFill = isDark ? "rgba(94, 234, 212, 0.55)" : "rgba(45, 120, 110, 0.45)";
  const nodes = density === "sparse" ? NODES_SPARSE.slice(0, 8) : NODES_SPARSE;

  return (
    <svg
      className={cn("w-full h-full", className)}
      viewBox="0 0 100 90"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="mesh-flow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={isDark ? "#2dd4bf" : "#359e8a"} stopOpacity="0" />
          <stop offset="50%" stopColor={isDark ? "#2dd4bf" : "#359e8a"} stopOpacity="0.9" />
          <stop offset="100%" stopColor={isDark ? "#2dd4bf" : "#359e8a"} stopOpacity="0" />
        </linearGradient>
      </defs>

      {EDGES.map(([a, b], i) => {
        if (!nodes[a] || !nodes[b]) return null;
        const na = nodes[a];
        const nb = nodes[b];
        return (
          <line
            key={`e-${i}`}
            x1={na.cx}
            y1={na.cy}
            x2={nb.cx}
            y2={nb.cy}
            stroke={stroke}
            strokeWidth="0.35"
            className="network-edge"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        );
      })}

      {nodes.map((node, i) => (
        <g key={`n-${i}`}>
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r + 2}
            fill={isDark ? "rgba(45, 212, 191, 0.08)" : "rgba(45, 120, 110, 0.08)"}
            className="network-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
          <circle cx={node.cx} cy={node.cy} r={node.r} fill={nodeFill} />
        </g>
      ))}

      {/* Animated data packets along key paths */}
      <circle r="1.2" fill="url(#mesh-flow)" className="network-packet">
        <animateMotion dur="4s" repeatCount="indefinite" path="M12,18 L48,52 L62,68 L85,82" />
      </circle>
      <circle r="1" fill="url(#mesh-flow)" className="network-packet" style={{ animationDelay: "1.5s" }}>
        <animateMotion dur="5s" repeatCount="indefinite" begin="1s" path="M35,8 L58,22 L70,42 L88,58" />
      </circle>
    </svg>
  );
}
