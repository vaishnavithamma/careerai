import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/#features", label: "Features" },
  { to: "/#pricing", label: "Pricing" },
  { to: "/#about", label: "About" },
  { to: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`mx-auto flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-soft" : "bg-transparent"
          }`}
        >
          <Logo />
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.to} href={l.to} className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition">
                {l.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Link to="/login" className="rounded-lg px-3 py-1.5 text-sm font-medium hover:bg-muted transition">
              Login
            </Link>
            <Link to="/signup" className="group relative inline-flex items-center gap-1.5 rounded-lg gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-soft hover:shadow-elevated transition">
              Get Started
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
          <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden mt-2 rounded-2xl glass-strong p-4 shadow-soft"
            >
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <a key={l.to} href={l.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-muted">{l.label}</a>
                ))}
                <div className="mt-2 flex items-center gap-2">
                  <ThemeToggle />
                  <Link to="/login" className="flex-1 rounded-lg border border-border px-3 py-2 text-center text-sm font-medium">Login</Link>
                  <Link to="/signup" className="flex-1 rounded-lg gradient-brand px-3 py-2 text-center text-sm font-semibold text-white">Get Started</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

