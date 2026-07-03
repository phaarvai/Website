"use client";

import { OperationalDashboard } from "@/components/visuals/OperationalDashboard";
import { NetworkMesh } from "@/components/visuals/NetworkMesh";

export function HeroInfrastructureVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none lg:mx-0">
      {/* Ambient glow */}
      <div
        className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-primary/20 via-cyan-500/10 to-transparent blur-3xl pointer-events-none"
        aria-hidden
      />

      {/* Orbital network ring */}
      <div className="absolute -inset-4 md:-inset-6 opacity-60 pointer-events-none" aria-hidden>
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
          <circle
            cx="200"
            cy="200"
            r="168"
            stroke="rgba(45, 212, 191, 0.15)"
            strokeWidth="1"
            strokeDasharray="6 8"
            className="hero-orbit-spin"
          />
          <circle cx="200" cy="32" r="4" fill="#2dd4bf" className="network-pulse" />
          <circle cx="368" cy="200" r="3" fill="rgba(45, 212, 191, 0.7)" className="network-pulse" style={{ animationDelay: "0.5s" }} />
          <circle cx="200" cy="368" r="3.5" fill="rgba(45, 120, 110, 0.8)" className="network-pulse" style={{ animationDelay: "1s" }} />
          <circle cx="32" cy="200" r="3" fill="rgba(45, 212, 191, 0.6)" className="network-pulse" style={{ animationDelay: "1.5s" }} />
        </svg>
      </div>

      {/* Background mesh */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-50 pointer-events-none" aria-hidden>
        <NetworkMesh variant="dark" />
      </div>

      {/* Data flow connectors */}
      <svg
        className="absolute -left-6 top-1/4 w-16 h-32 opacity-40 hidden lg:block pointer-events-none"
        viewBox="0 0 64 128"
        aria-hidden
      >
        <path
          d="M64,16 C32,32 32,64 0,80"
          stroke="#2dd4bf"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 4"
          className="hero-flow-dash"
        />
        <circle r="2" fill="#2dd4bf">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M64,16 C32,32 32,64 0,80" />
        </circle>
      </svg>
      <svg
        className="absolute -right-4 bottom-1/4 w-20 h-24 opacity-35 hidden lg:block pointer-events-none"
        viewBox="0 0 80 96"
        aria-hidden
      >
        <path
          d="M0,48 C24,32 48,64 80,40"
          stroke="#2dd4bf"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 4"
          className="hero-flow-dash"
          style={{ animationDelay: "0.8s" }}
        />
        <circle r="2" fill="#2dd4bf">
          <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s" path="M0,48 C24,32 48,64 80,40" />
        </circle>
      </svg>

      <div className="relative tech-glow hero-visual-float">
        <OperationalDashboard />
      </div>

      {/* Platform layer chips */}
      <div className="absolute -bottom-3 left-4 right-4 flex justify-center gap-2 pointer-events-none" aria-hidden>
        {["AI Layer", "Data Plane", "Edge Ops"].map((label, i) => (
          <span
            key={label}
            className="text-[9px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 border border-primary/15 text-primary/80 shadow-sm backdrop-blur-sm"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
