"use client";

const NODES = [
  { id: "models", label: "AI Models", angle: -90 },
  { id: "pipelines", label: "Data Pipelines", angle: -45 },
  { id: "automation", label: "Automation", angle: 0 },
  { id: "analytics", label: "Analytics", angle: 45 },
  { id: "monitoring", label: "Monitoring", angle: 90 },
  { id: "infrastructure", label: "Infrastructure", angle: 135 },
  { id: "decision", label: "Decision Intelligence", angle: 180 },
  { id: "operations", label: "Real-Time Ops", angle: 225 },
] as const;

const CX = 200;
const CY = 200;
const RADIUS = 118;

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

export function AISystemsEcosystem() {
  const outer = NODES.map((n) => ({ ...n, ...polar(n.angle, RADIUS) }));

  return (
    <div className="relative w-full rounded-2xl border border-primary/20 overflow-hidden tech-panel tech-glow shadow-[0_32px_72px_-16px_rgba(11,31,58,0.35)]">
      <div className="absolute inset-0 bg-circuit opacity-30 pointer-events-none" aria-hidden />
      <div
        className="relative p-4 md:p-6"
        style={{ background: "linear-gradient(145deg, #0B1F3A 0%, #0f2847 55%, #122d4f 100%)" }}
      >
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-[9px] font-mono text-teal-200/60 tracking-widest uppercase">
            Systems Topology · Live
          </span>
          <span className="text-[8px] font-mono text-teal-200/30">8 nodes · mesh</span>
        </div>

        <svg viewBox="0 0 400 400" className="w-full h-auto" aria-hidden>
          <defs>
            <radialGradient id="eco-hub-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(45, 212, 191, 0.35)" />
              <stop offset="100%" stopColor="rgba(45, 212, 191, 0)" />
            </radialGradient>
            <linearGradient id="eco-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Outer ring */}
          <circle
            cx={CX}
            cy={CY}
            r={RADIUS}
            fill="none"
            stroke="rgba(45, 212, 191, 0.12)"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="hero-orbit-spin"
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          />

          {/* Cross-links between adjacent outer nodes */}
          {outer.map((node, i) => {
            const next = outer[(i + 1) % outer.length];
            return (
              <line
                key={`ring-${node.id}`}
                x1={node.x}
                y1={node.y}
                x2={next.x}
                y2={next.y}
                stroke="rgba(45, 212, 191, 0.1)"
                strokeWidth="0.6"
              />
            );
          })}

          {/* Spokes to center */}
          {outer.map((node, i) => (
            <line
              key={`spoke-${node.id}`}
              x1={CX}
              y1={CY}
              x2={node.x}
              y2={node.y}
              stroke="url(#eco-line)"
              strokeWidth="0.8"
              className="network-edge"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}

          {/* Hub */}
          <circle cx={CX} cy={CY} r={52} fill="url(#eco-hub-glow)" />
          <circle
            cx={CX}
            cy={CY}
            r={36}
            fill="rgba(45, 120, 110, 0.2)"
            stroke="rgba(45, 212, 191, 0.45)"
            strokeWidth="1.2"
          />
          <circle cx={CX} cy={CY} r="6" fill="#2dd4bf" className="network-pulse" />

          {/* Outer nodes */}
          {outer.map((node, i) => {
            const labelPos = polar(node.angle, RADIUS + 28);
            return (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="14"
                  fill="rgba(45, 120, 110, 0.25)"
                  stroke="rgba(45, 212, 191, 0.35)"
                  strokeWidth="0.8"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="4"
                  fill="#2dd4bf"
                  className="stack-flow-dot"
                  style={{ animationDelay: `${i * 0.25}s` }}
                />
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="rgba(186, 230, 220, 0.85)"
                  fontSize="9"
                  fontFamily="Menlo, monospace"
                  fontWeight="600"
                >
                  {node.label}
                </text>
              </g>
            );
          })}

          {/* Hub label */}
          <text
            x={CX}
            y={CY + 52}
            textAnchor="middle"
            fill="rgba(94, 234, 212, 0.9)"
            fontSize="10"
            fontFamily="Menlo, monospace"
            fontWeight="700"
            letterSpacing="0.08em"
          >
            INTELLIGENCE ENGINE
          </text>

          {/* Data packets */}
          {outer.slice(0, 3).map((node, i) => (
            <circle key={`pkt-${node.id}`} r="2" fill="#2dd4bf" opacity="0.9">
              <animateMotion
                dur={`${2.5 + i * 0.4}s`}
                repeatCount="indefinite"
                begin={`${i * 0.6}s`}
                path={`M${node.x},${node.y} L${CX},${CY}`}
              />
            </circle>
          ))}
        </svg>

        <div className="grid grid-cols-3 gap-2 mt-2">
          {[
            { label: "APIs", value: "142" },
            { label: "Streams", value: "2.4K/s" },
            { label: "Uptime", value: "99.98%" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg px-2 py-1.5 glass-card-dark text-center">
              <p className="text-[7px] font-mono text-teal-200/45 uppercase">{stat.label}</p>
              <p className="text-[10px] font-bold font-mono text-teal-300 tabular-nums">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
