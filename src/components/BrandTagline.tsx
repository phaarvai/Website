"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/site";

export function BrandTagline() {
  const { brandTagline } = siteContent;

  return (
    <section
      className="py-20 md:py-28 lg:py-32 bg-background border-b border-border/50"
      aria-label="Brand statement"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="brand-tagline text-center max-w-3xl mx-auto"
        >
          <span className="font-bold text-foreground">{brandTagline.primary}</span>{" "}
          <span className="text-muted-foreground font-medium">{brandTagline.secondary}</span>
        </motion.p>
      </div>
    </section>
  );
}
