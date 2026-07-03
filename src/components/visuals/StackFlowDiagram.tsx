"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/site";
import { Database, Bot, LayoutDashboard, Shield, Cloud } from "lucide-react";

const LAYER_ICONS = [Database, Bot, LayoutDashboard, Shield, Cloud];

export function StackFlowDiagram() {
  const { systemsArchitecture } = siteContent;
  const layers = systemsArchitecture.layers;

  return (
    <div className="relative">
      <div className="hidden lg:block absolute left-[2.75rem] top-8 bottom-8 w-px bg-gradient-to-b from-primary/5 via-primary/30 to-primary/5" aria-hidden />
      <div className="space-y-3">
        {layers.map((layer, idx) => {
          const Icon = LAYER_ICONS[idx] ?? Cloud;
          return (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="relative flex items-center gap-4"
            >
              <div className="relative z-10 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <Icon size={18} strokeWidth={1.75} />
                {idx < layers.length - 1 && (
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/60 stack-flow-dot" style={{ animationDelay: `${idx * 0.4}s` }} />
                )}
              </div>
              <div className="flex-1 bg-card border border-border rounded-xl card-pad-sm card-hover flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-primary/70 block mb-0.5">
                    L{String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-bold text-foreground">{layer.label}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5 hidden sm:block">{layer.description}</p>
                </div>
                <div className="hidden md:flex items-center gap-1 shrink-0" aria-hidden>
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="w-1 h-1 rounded-full bg-primary/40 stack-flow-dot"
                      style={{ animationDelay: `${idx * 0.3 + d * 0.15}s` }}
                    />
                  ))}
                  <span className="text-primary/30 mx-0.5">→</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
