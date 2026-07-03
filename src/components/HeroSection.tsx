"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { HeroInfrastructureVisual } from "@/components/visuals/HeroInfrastructureVisual";
import { NetworkMesh } from "@/components/visuals/NetworkMesh";

interface HeroSectionProps {
  headline: string;
  headlineAccent?: string;
  subheadline: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  ctaTertiary?: { label: string; href: string };
  badges?: string[];
}

export function HeroSection({
  headline,
  headlineAccent,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  ctaTertiary,
  badges,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[min(92vh,920px)] flex items-center pt-36 md:pt-40 pb-24 md:pb-28 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-tech-grid opacity-45 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 opacity-[0.28] pointer-events-none" aria-hidden>
        <NetworkMesh variant="light" density="sparse" />
      </div>
      <div
        className="absolute top-0 right-0 w-[55vw] max-w-[640px] h-[45vh] rounded-full bg-primary/[0.08] blur-[120px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 w-[35vw] max-w-[420px] h-[35vh] rounded-full bg-cyan-500/[0.06] blur-[100px] pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 xl:gap-24 items-center">
          <motion.div
            className="max-w-2xl lg:max-w-none"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.09 } },
            }}
          >
            {badges && badges.length > 0 && (
              <motion.div
                className="mb-8 md:mb-9 flex flex-wrap gap-2"
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              >
                {badges.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono tracking-[0.12em] uppercase text-primary bg-primary/[0.07] border border-primary/15 px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}

            <motion.h1
              className="heading-hero mb-7 md:mb-8"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            >
              {headline}
              {headlineAccent && (
                <span className="heading-hero-accent">{headlineAccent}</span>
              )}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-11 md:mb-12 max-w-xl"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            >
              {subheadline}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-5"
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            >
              {ctaPrimary && (
                <Link href={ctaPrimary.href} className="sm:shrink-0">
                  <Button size="lg" className="hero-cta-primary w-full sm:w-auto hover-elevate gap-2.5 group">
                    {ctaPrimary.label}
                    <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
              )}
              {ctaSecondary && (
                <Link href={ctaSecondary.href} className="sm:shrink-0">
                  <Button size="lg" variant="outline" className="hero-cta-secondary w-full sm:w-auto hover-elevate">
                    {ctaSecondary.label}
                  </Button>
                </Link>
              )}
            </motion.div>

            {ctaTertiary && (
              <motion.div
                className="mt-6 md:mt-7"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                <Link
                  href={ctaTertiary.href}
                  className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-muted-foreground hover:text-primary transition-colors group"
                >
                  {ctaTertiary.label}
                  <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className="relative w-full lg:pl-4"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroInfrastructureVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
