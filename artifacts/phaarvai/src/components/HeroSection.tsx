"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  positioning?: string[];
}

export function HeroSection({ headline, subheadline, ctaPrimary, ctaSecondary, positioning }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 overflow-hidden hero-gradient">
      {/* Ambient glow */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 -right-[20%] w-[70vw] h-[70vw] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/20 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div>
            {/* Positioning tags */}
            {positioning && (
              <motion.div
                className="flex flex-wrap gap-2 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {positioning.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono tracking-widest text-blue-300/70 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}

            <motion.h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight md:leading-[1.1] mb-7 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {headline}
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-blue-100/70 leading-relaxed mb-10 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {subheadline}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {ctaPrimary && (
                <Link href={ctaPrimary.href}>
                  <Button size="lg" className="h-13 px-8 text-base font-semibold bg-primary hover:bg-primary/90 text-white hover-elevate">
                    {ctaPrimary.label}
                  </Button>
                </Link>
              )}
              {ctaSecondary && (
                <Link href={ctaSecondary.href}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-13 px-8 text-base font-semibold bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover-elevate"
                  >
                    {ctaSecondary.label}
                  </Button>
                </Link>
              )}
            </motion.div>
          </div>

          {/* Right: dashboard image */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 ring-1 ring-white/5">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="Enterprise analytics command center"
                className="w-full object-cover opacity-90"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3">
                  <p className="text-[10px] font-mono text-blue-300/80 tracking-[0.12em] uppercase mb-1">Live Command View</p>
                  <p className="text-sm text-white font-semibold">Operational Intelligence Platform</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
