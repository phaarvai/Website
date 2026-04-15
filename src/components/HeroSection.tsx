"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HeroDashboard } from "@/components/HeroDashboard";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  positioning?: string[];
}

export function HeroSection({ headline, subheadline, ctaPrimary, ctaSecondary, positioning }: HeroSectionProps) {
  const words = headline.split(" ");
  const highlightStart = words.findIndex(w => w === "Institutions");
  const hasHighlight = highlightStart !== -1;
  const before = hasHighlight ? words.slice(0, highlightStart).join(" ") : "";
  const highlighted = hasHighlight ? words.slice(highlightStart, highlightStart + 2).join(" ") : "";
  const after = hasHighlight ? words.slice(highlightStart + 2).join(" ") : headline;

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-8 overflow-hidden hero-gradient">
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
            {positioning && (
              <motion.div
                className="flex flex-wrap gap-2 mb-8"
                initial={{ y: 16 }}
                animate={{ y: 0 }}
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
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {before}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-300">{highlighted}</span>
                <motion.span
                  className="absolute inset-x-0 -bottom-1 h-[3px] bg-blue-400/50 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  style={{ originX: 0 }}
                />
              </span>
              {" "}{after}
            </motion.h1>

            <motion.p
              className="text-base md:text-[1.05rem] text-blue-100/85 leading-[1.75] mb-10 max-w-[520px]"
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {subheadline}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3.5"
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
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
          </div>

          {/* Right: animated dashboard */}
          <motion.div
            className="hidden lg:block"
            initial={{ x: 20, scale: 0.98 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <HeroDashboard />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
