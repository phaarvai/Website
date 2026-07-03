"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NetworkMesh } from "@/components/visuals/NetworkMesh";

interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  visual?: boolean;
}

export function PageHeader({ label, title, description, className, visual = false }: PageHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={cn(
        visual ? "relative rounded-2xl border border-border overflow-hidden card-pad mb-16 md:mb-20" : "max-w-3xl section-header-lg",
        className
      )}
    >
      {visual && (
        <>
          <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" aria-hidden />
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none" aria-hidden>
            <NetworkMesh variant="light" density="sparse" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70 pointer-events-none" aria-hidden />
        </>
      )}
      <div className={cn("relative", visual && "max-w-2xl")}>
        {label && <span className="label-mono mb-4 block">{label}</span>}
        <h1 className="heading-page mb-5">{title}</h1>
        {description && <p className="text-lead max-w-2xl text-prose">{description}</p>}
      </div>
    </motion.header>
  );
}
