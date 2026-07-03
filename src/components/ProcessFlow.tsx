"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProcessStep {
  label: string;
  description: string;
}

interface ProcessFlowProps {
  steps: ProcessStep[];
  className?: string;
}

export function ProcessFlow({ steps, className }: ProcessFlowProps) {
  return (
    <div className={cn("relative", className)}>
      <motion.div
        className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
        {steps.map((step, idx) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="relative text-center lg:text-left"
          >
            <div className="w-10 h-10 mx-auto lg:mx-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
              <span className="text-[10px] font-bold text-primary">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="text-xs font-bold text-foreground mb-1">{step.label}</p>
            <p className="text-[11px] text-muted-foreground leading-snug hidden sm:block">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
