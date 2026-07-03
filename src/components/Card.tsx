"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Card({ children, className, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      className={cn(
        "bg-card border border-border p-8 rounded-xl card-hover flex flex-col h-full",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
