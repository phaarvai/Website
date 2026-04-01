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
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn("mb-14", centered && "text-center mx-auto max-w-3xl", className)}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
