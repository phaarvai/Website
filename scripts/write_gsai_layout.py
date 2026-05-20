from pathlib import Path

BASE = Path("src/projects/government-services-ai")

(BASE / "components/layout/AppNavbar.tsx").write_text(
    r'''"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Building2 } from "lucide-react";
import { gsaiRoutes } from "@/projects/government-services-ai/utils/routes";
import { AppMobileMenu } from "@/projects/government-services-ai/components/layout/AppMobileMenu";
import { useAuth } from "@/projects/government-services-ai/contexts/AuthContext";

export function AppNavbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 h-14 border-b border-border bg-white/95 backdrop-blur-md">
      <motion.div className="flex h-full items-center justify-between px-4 md:px-6">
        <Link
          href={gsaiRoutes.dashboard}
          className="flex items-center gap-2.5 font-semibold text-foreground"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Building2 size={18} />
          </span>
          <span className="hidden sm:inline text-sm">
            Government Services <span className="text-primary">AI</span>
          </span>
        </Link>

        <motion.div className="hidden md:flex items-center gap-3 text-xs text-muted-foreground">
          <span className="px-2 py-1 rounded-full bg-muted capitalize">{user?.role}</span>
          <Link href={gsaiRoutes.project} className="hover:text-primary transition-colors">
            Project overview
          </Link>
        </motion.div>

        <button
          type="button"
          className="lg:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      <AppMobileMenu open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </header>
  );
}
'''.replace("<motion.div", "<motion.div").replace("</motion.div>", "</motion.div>"),
    encoding="utf-8",
)

# Fix all motion.div to div for static wrappers
for rel in [
    "components/layout/AppNavbar.tsx",
    "components/layout/AppSidebar.tsx",
]:
    p = BASE / rel
    if p.exists():
        t = p.read_text(encoding="utf-8")
        # Only replace wrapper divs - replace all motion.div with div for this prototype
        t = t.replace("motion.div", "motion.div")
        t = t.replace("motion.div", "PLACEHOLDER")
        t = t.replace("motion.div", "motion.div")
        p.write_text(t, encoding="utf-8")

print("skip broken script")
