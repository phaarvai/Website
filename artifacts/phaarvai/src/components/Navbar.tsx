"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/solutions", label: "Solutions" },
  { href: "/sectors", label: "Sectors" },
  { href: "/funding-partnerships", label: "Funding & Partnerships" },
  { href: "/insights", label: "Insights" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const onDark = !isScrolled && isHome;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/96 backdrop-blur-md border-b border-border shadow-[0_1px_12px_rgba(11,31,58,0.06)] py-3"
          : isHome
          ? "bg-transparent py-5"
          : "bg-white border-b border-border py-3"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className={`text-xl font-bold tracking-[0.18em] transition-colors ${onDark ? "text-white" : "text-primary"}`}>
            PHAARVAI
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                  pathname === link.href
                    ? onDark
                      ? "text-white bg-white/10"
                      : "text-primary bg-primary/6"
                    : onDark
                    ? "text-white/70 hover:text-white hover:bg-white/8"
                    : "text-foreground/70 hover:text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full ${onDark ? "bg-white/60" : "bg-primary"}`}
                  />
                )}
              </Link>
            ))}
          </div>
          <Link href="/contact">
            <Button variant="default" className="font-semibold px-6 text-sm hover-elevate shadow-sm">
              Talk to Us
            </Button>
          </Link>
        </div>

        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${onDark ? "text-white hover:bg-white/10" : "text-foreground hover:bg-accent"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="flex flex-col py-5 px-6 gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "text-primary bg-primary/6"
                      : "text-foreground/80 hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="default" className="w-full justify-center">Talk to Us</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
