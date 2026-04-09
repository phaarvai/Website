"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export function CTASection({ title, description, buttonLabel, buttonHref }: CTASectionProps) {
  return (
    <section className="py-28 relative overflow-hidden hero-gradient">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }}
      />
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-500/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-indigo-500/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[10px] font-mono tracking-[0.16em] uppercase text-blue-300/60 mb-5"
          >
            Let's Work Together
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] mb-5">{title}</h2>
          <p className="text-base text-blue-100/60 mb-10 leading-relaxed max-w-xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={buttonHref}>
              <Button size="lg" className="h-12 px-8 text-sm font-semibold bg-primary hover:bg-blue-500 text-white shadow-lg shadow-blue-900/30 hover-elevate gap-2 group">
                {buttonLabel} <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
            <Link href="/capabilities" className="text-sm font-medium text-blue-200/70 hover:text-white transition-colors">
              View Capabilities →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
