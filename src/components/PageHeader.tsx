"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ label, title, description, className }: PageHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={cn("max-w-3xl mb-12 md:mb-16", className)}
    >
      {label && <span className="label-mono mb-3 block">{label}</span>}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-[1.12]">
        {title}
      </h1>
      {description && (
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </motion.header>
  );
}
