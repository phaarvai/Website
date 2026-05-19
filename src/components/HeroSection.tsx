"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  ctaTertiary?: { label: string; href: string };
  badges?: string[];
}

export function HeroSection({
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  ctaTertiary,
  badges,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-background">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute -top-24 right-0 w-[55vw] h-[55vw] max-w-[700px] rounded-full bg-teal-400/10 blur-[100px]" />
        <motion.div
          className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-indigo-400/8 blur-[90px]"
          animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        <motion.div
          className="absolute top-1/3 right-[12%] w-32 h-32 rounded-2xl border border-primary/15 bg-white/60 backdrop-blur-sm shadow-sm hidden md:flex items-center justify-center"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="text-primary w-8 h-8" strokeWidth={1.5} />
        </motion.div>
        <motion.div
          className="absolute bottom-[28%] left-[8%] w-24 h-24 rounded-full border border-teal-200/60 bg-teal-50/50 hidden lg:block"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>

      <motion.div
        className="container mx-auto px-6 md:px-12 relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {badges && (
          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
          >
            {badges.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono tracking-[0.12em] uppercase text-primary/90 bg-primary/6 border border-primary/12 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        )}

        <motion.h1
          className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold leading-[1.1] mb-6 text-foreground max-w-4xl"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          {headline}
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl"
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
        >
          {subheadline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap gap-3"
          variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
        >
          {ctaPrimary && (
            <Link href={ctaPrimary.href}>
              <Button size="lg" className="h-12 px-7 font-semibold hover-elevate gap-2 group">
                {ctaPrimary.label}
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          )}
          {ctaSecondary && (
            <Link href={ctaSecondary.href}>
              <Button size="lg" variant="outline" className="h-12 px-7 font-semibold hover-elevate">
                {ctaSecondary.label}
              </Button>
            </Link>
          )}
          {ctaTertiary && (
            <Link href={ctaTertiary.href}>
              <Button size="lg" variant="ghost" className="h-12 px-7 font-semibold text-muted-foreground hover:text-foreground">
                {ctaTertiary.label}
              </Button>
            </Link>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
