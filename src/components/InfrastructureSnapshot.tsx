"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { siteContent } from "@/content/site";

function AnimatedMetric({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const numeric = value.match(/^(\d+)/);
    if (!numeric) { setDisplay(value); return; }
    const target = parseInt(numeric[1], 10);
    const suffix = value.slice(numeric[1].length);
    let frame = 0;
    const id = setInterval(() => {
      frame += 1;
      setDisplay(`${Math.round((target * frame) / 24)}${suffix}`);
      if (frame >= 24) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [inView, value]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="text-center px-3 py-4">
      <p className="stat-number text-2xl md:text-3xl font-bold text-foreground">{display}</p>
      <p className="text-xs md:text-sm font-medium text-muted-foreground mt-1">{label}</p>
    </motion.div>
  );
}

export function InfrastructureSnapshot() {
  const { infrastructureSnapshot } = siteContent;
  return (
    <section className="py-12 md:py-14 section-alt border-y border-border" aria-label="At a glance">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {infrastructureSnapshot.metrics.map((metric) => (
            <AnimatedMetric key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </div>
      </div>
    </section>
  );
}