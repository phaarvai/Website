"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionIntroProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionIntro({ title, subtitle, className, centered = false }: SectionIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      className={cn("mb-12", centered && "text-center mx-auto max-w-3xl", className)}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{title}</h2>
      {subtitle && (
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
