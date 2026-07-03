"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Theme } from "@/content/themes";
import { CardTechHeader, techVariantForIndex } from "@/components/visuals/CardTechHeader";
import { cn } from "@/lib/utils";

interface ThemeCardProps {
  theme: Theme;
  className?: string;
  delay?: number;
  compact?: boolean;
  index?: number;
}

export function ThemeCard({
  theme,
  className,
  delay = 0,
  compact = false,
  index = 0,
}: ThemeCardProps) {
  const Icon = theme.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      className={cn("h-full", className)}
    >
      <Link
        href={theme.href}
        className={cn(
          "group flex flex-col h-full bg-card border border-border rounded-2xl card-hover overflow-hidden",
          compact ? "" : "card-pad"
        )}
      >
        {compact && <CardTechHeader variant={techVariantForIndex(index)} />}

        <div className={cn(compact && "card-pad-sm pt-0")}>
          <div className="flex items-start gap-4">
            <motion.div
              className={cn(
                "w-11 h-11 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200 shrink-0",
                !compact && "mb-4"
              )}
              whileHover={{ scale: 1.04 }}
            >
              <Icon size={compact ? 20 : 22} strokeWidth={1.75} />
            </motion.div>
            <div className="flex-1 min-w-0">
              <h3
                className={cn(
                  "font-bold text-foreground group-hover:text-primary transition-colors leading-snug",
                  compact ? "text-base" : "text-lg"
                )}
              >
                {theme.title}
              </h3>
              {compact && (
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                  {theme.shortDescription}
                </p>
              )}
            </div>
          </div>

          {!compact && (
            <>
              <p className="text-[15px] text-muted-foreground text-prose flex-grow mt-3">
                {theme.shortDescription}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-primary mt-6 group-hover:gap-2.5 transition-all">
                Explore domain <ArrowRight size={14} />
              </span>
            </>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
