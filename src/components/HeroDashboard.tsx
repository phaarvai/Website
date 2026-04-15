"use client";

import { useEffect, useRef, useState } from "react";

const BAR_DATA = [
  { label: "Gov", pct: 72, delay: "0s", anim: "barPulseGov" },
  { label: "Infra", pct: 58, delay: "0.2s", anim: "barPulseInfra" },
  { label: "Energy", pct: 84, delay: "0.4s", anim: "barPulseEnergy" },
  { label: "Health", pct: 47, delay: "0.6s", anim: "barPulseHealth" },
  { label: "Urban", pct: 65, delay: "0.8s", anim: "barPulseUrban" },
];

const ROWS = [
  { label: "Infrastructure Uptime", value: "99.98%", ok: true },
  { label: "Threats Blocked Today", value: "12,441", ok: true },
  { label: "Pending Alerts", value: "3", ok: false },
  { label: "Inference Latency", value: "18 ms", ok: true },
];

/* Static SVG wave — hardcoded path to avoid SSR/client mismatch */
const WAVE_D =
  "M0,38 C5,28 10,42 15,30 C20,18 25,44 30,32 C35,20 40,46 45,28 C50,10 55,38 60,24 C65,10 70,40 75,26 C80,12 85,36 90,22 C95,8 100,34 100,28";
const AREA_D = `${WAVE_D} L100,50 L0,50 Z`;

function LiveLineChart() {
  return (
    <div className="relative w-full" style={{ height: 68 }}>
      <svg
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
        className="w-full h-full"
        suppressHydrationWarning
      >
        <defs>
          <linearGradient id="hd-chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(96,165,250,0.4)" />
            <stop offset="100%" stopColor="rgba(96,165,250,0)" />
          </linearGradient>
          <clipPath id="hd-chartClip">
            <rect x="0" y="0" width="100" height="50" />
          </clipPath>
        </defs>

        <g clipPath="url(#hd-chartClip)">
          {/* Double-wide area for seamless scroll */}
          <g style={{ animation: "hdWavePan 5s linear infinite" }}>
            <path d={AREA_D} fill="url(#hd-chartGrad)" />
            <path d={`M100,38 C105,28 110,42 115,30 C120,18 125,44 130,32 C135,20 140,46 145,28 C150,10 155,38 160,24 C165,10 170,40 175,26 C180,12 185,36 190,22 C195,8 200,34 200,28 L200,50 L100,50 Z`} fill="url(#hd-chartGrad)" />
            <path d={WAVE_D} fill="none" stroke="rgba(96,165,250,0.85)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M100,38 C105,28 110,42 115,30 C120,18 125,44 130,32 C135,20 140,46 145,28 C150,10 155,38 160,24 C165,10 170,40 175,26 C180,12 185,36 190,22 C195,8 200,34 200,28" fill="none" stroke="rgba(96,165,250,0.85)" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </g>

        {/* Blinking live dot */}
        <circle cx="98" cy="28" r="2.5" fill="#60a5fa" style={{ animation: "hdDotBlink 1.2s ease-in-out infinite" }} />
      </svg>
    </div>
  );
}

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    if (done.current) return;
    done.current = true;
    const dur = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target]);
  return <>{val.toLocaleString()}{suffix}</>;
}

export function HeroDashboard() {
  return (
    <>
      <style suppressHydrationWarning>{`
        @keyframes hdWavePan   { to { transform: translateX(-100px); } }
        @keyframes hdDotBlink  { 0%,100%{opacity:1} 50%{opacity:0.25} }
        @keyframes barPulseGov    { 0%,100%{height:72%} 50%{height:78%} }
        @keyframes barPulseInfra  { 0%,100%{height:58%} 50%{height:64%} }
        @keyframes barPulseEnergy { 0%,100%{height:84%} 50%{height:89%} }
        @keyframes barPulseHealth { 0%,100%{height:47%} 50%{height:54%} }
        @keyframes barPulseUrban  { 0%,100%{height:65%} 50%{height:71%} }
      `}</style>

      <div
        className="relative w-full rounded-2xl border border-white/10 shadow-[0_32px_72px_-16px_rgba(0,0,0,0.65)]"
        style={{ background: "linear-gradient(145deg,#091525 0%,#0d2144 55%,#0e2a5a 100%)" }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/[0.07]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[9px] font-mono text-blue-200/70 tracking-widest uppercase">Operational Intelligence · Live</span>
          </div>
          <span className="text-[8px] font-mono text-blue-200/30">v5.4.1</span>
        </div>

        <div className="p-4 space-y-3">
          {/* KPI cards */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Decision Accuracy", value: "94.7%", color: "text-emerald-400" },
              { label: "Data Points / Day", target: 2400000, color: "text-blue-300" },
              { label: "Active Sensors", target: 18432, color: "text-purple-300" },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl p-2.5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <p className="text-[7px] font-mono text-blue-200/50 uppercase tracking-wider mb-1 leading-tight">{kpi.label}</p>
                <p className={`text-sm font-bold ${kpi.color} leading-none tabular-nums`}>
                  {kpi.value ?? <AnimatedNumber target={kpi.target!} />}
                </p>
              </div>
            ))}
          </div>

          {/* Live chart */}
          <div
            className="rounded-xl px-3 pt-3 pb-2"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.065)" }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[8px] font-mono text-blue-200/50 uppercase tracking-wider">Real-Time Signal Stream</span>
              <span className="text-[8px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE
              </span>
            </div>
            <LiveLineChart />
          </div>

          {/* Bars */}
          <div
            className="rounded-xl px-3 pt-3 pb-3"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.065)" }}
          >
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[8px] font-mono text-blue-200/50 uppercase tracking-wider">Sector Performance Index</span>
              <span className="text-[8px] font-mono text-blue-200/30">Updated 2s ago</span>
            </div>
            <div className="flex items-end gap-2 h-14">
              {BAR_DATA.map((b) => (
                <div key={b.label} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full relative" style={{ height: 44, background: "rgba(255,255,255,0.05)" }}>
                    <div
                      className="absolute bottom-0 left-0 right-0"
                      style={{
                        background: "linear-gradient(to top,rgba(59,130,246,0.5),rgba(96,165,250,0.9))",
                        height: `${b.pct}%`,
                        animationName: b.anim,
                        animationDuration: "3s",
                        animationTimingFunction: "ease-in-out",
                        animationIterationCount: "infinite",
                        animationDelay: b.delay,
                      }}
                    />
                  </div>
                  <span className="text-[7px] font-mono text-blue-200/45">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Status rows */}
          <div className="grid grid-cols-2 gap-1.5">
            {ROWS.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between px-2.5 py-1.5 rounded-lg"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.055)" }}
              >
                <span className="text-[7.5px] text-blue-200/50 font-mono truncate mr-1.5">{row.label}</span>
                <span className={`text-[8px] font-bold font-mono shrink-0 ${row.ok ? "text-emerald-400" : "text-amber-400"}`}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
