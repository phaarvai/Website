"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  positioning?: string[];
}

const stats = [
  { value: "30+", label: "Institutions Served" },
  { value: "6", label: "Sectors" },
  { value: "100%", label: "Production Delivery" },
  { value: "8+", label: "Countries" },
];

export function HeroSection({ headline, subheadline, ctaPrimary, ctaSecondary, positioning }: HeroSectionProps) {
  const words = headline.split(" ");
  const highlightStart = words.findIndex(w => w === "Institutions");
  const hasHighlight = highlightStart !== -1;
  const before = hasHighlight ? words.slice(0, highlightStart).join(" ") : "";
  const highlighted = hasHighlight ? words.slice(highlightStart, highlightStart + 2).join(" ") : "";
  const after = hasHighlight ? words.slice(highlightStart + 2).join(" ") : headline;

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-0 overflow-hidden hero-gradient">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }}
      />

      {/* Ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[60vw] h-[60vw] rounded-full bg-blue-500/8 blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full bg-indigo-700/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/4 w-[30vw] h-[30vw] rounded-full bg-blue-600/5 blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left: copy */}
          <div>
            {/* Tag */}
            {positioning && (
              <motion.div
                className="flex flex-wrap gap-2 mb-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                {positioning.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono tracking-[0.14em] uppercase text-blue-200/80 bg-white/[0.07] border border-white/[0.14] px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}

            <motion.h1
              className="text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] font-bold leading-[1.08] mb-7 text-white"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {before}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-300">{highlighted}</span>
                <motion.span
                  className="absolute inset-x-0 -bottom-1 h-[3px] bg-blue-400/50 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  style={{ originX: 0 }}
                />
              </span>
              {" "}{after}
            </motion.h1>

            <motion.p
              className="text-base md:text-[1.05rem] text-blue-100/85 leading-[1.75] mb-10 max-w-[520px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {subheadline}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3.5 mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {ctaPrimary && (
                <Link href={ctaPrimary.href}>
                  <Button size="lg" className="h-12 px-7 text-sm font-semibold bg-primary hover:bg-blue-500 text-white shadow-lg shadow-blue-900/30 hover-elevate gap-2 group">
                    {ctaPrimary.label}
                    <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
              )}
              {ctaSecondary && (
                <Link href={ctaSecondary.href}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-7 text-sm font-semibold bg-transparent border-white/20 text-white/90 hover:bg-white/8 hover:border-white/35 hover:text-white hover-elevate"
                  >
                    {ctaSecondary.label}
                  </Button>
                </Link>
              )}
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-4 gap-0 border-t border-white/10 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className={`pr-4 ${idx > 0 ? "pl-4 border-l border-white/10" : ""}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.07 }}
                >
                  <div className="text-2xl font-bold text-white stat-number mb-1">{stat.value}</div>
                  <div className="text-[10px] text-blue-200/75 uppercase tracking-[0.1em] leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: dashboard */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] border border-white/[0.08] ring-1 ring-white/[0.04]">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                  alt="Enterprise analytics command center"
                  className="w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08162B]/85 via-[#08162B]/20 to-transparent" />

                {/* Bottom card */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="glass-card rounded-xl px-4 py-3">
                    <p className="text-[9px] font-mono text-blue-200/90 tracking-[0.14em] uppercase mb-1.5">Live Command View</p>
                    <p className="text-sm text-white font-semibold">Operational Intelligence Platform</p>
                    <div className="flex items-center gap-2 mt-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-emerald-300">All systems operational</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating metric card */}
              <motion.div
                className="absolute -top-5 -left-6 glass-card rounded-xl px-4 py-3.5 shadow-xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-[9px] font-mono text-blue-200/90 tracking-[0.12em] uppercase mb-1">Decision Accuracy</p>
                <p className="text-xl font-bold text-white stat-number">94.7%</p>
                <p className="text-[10px] text-emerald-400 mt-0.5">↑ +12% vs baseline</p>
              </motion.div>

              {/* Floating data card */}
              <motion.div
                className="absolute -bottom-4 -right-6 glass-card rounded-xl px-4 py-3.5 shadow-xl"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <p className="text-[9px] font-mono text-blue-200/90 tracking-[0.12em] uppercase mb-1">Data Points Processed</p>
                <p className="text-xl font-bold text-white stat-number">2.4M</p>
                <p className="text-[10px] text-blue-200/80 mt-0.5">per day, real-time</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
