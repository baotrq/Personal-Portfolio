import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const SECTIONS = ["about", "work", "skills", "contact"] as const;

export default function Nav() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    if (!onHome) { setActive(null); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [onHome]);

  useEffect(() => setOpen(false), [pathname]);

  const linkClass = (id: string) =>
    `relative text-sm capitalize transition-colors duration-200 ${
      active === id ? "text-white" : "text-white/55 hover:text-white"
    }`;

  return (
    <>
      {/* Centered by the flex wrapper: framer-motion's transform would override a translate-x. */}
      <div className="fixed top-4 md:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: onHome ? 0.5 : 0.1, ease: [0.4, 0, 0.2, 1] }}
        className={`pointer-events-auto flex items-center gap-5 md:gap-6 pl-5 pr-2 py-2 rounded-full transition-all duration-300 ${
          scrolled || open
            ? "bg-dark/85 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
            : "bg-dark/60 backdrop-blur-xl border border-white/[0.08]"
        }`}
      >
        <Link to="/" className="font-serif font-bold text-lg tracking-tight leading-none">
          Bao<span className="text-accent">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-5">
          {SECTIONS.map((id) => (
            <Link key={id} to={{ pathname: "/", hash: `#${id}` }} className={linkClass(id)}>
              {id}
              {active === id && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                />
              )}
            </Link>
          ))}
          <Link
            to="/projects"
            className={`text-sm transition-colors duration-200 ${pathname === "/projects" ? "text-white" : "text-white/55 hover:text-white"}`}
          >
            Projects
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <Button size="sm" asChild>
            <Link to={{ pathname: "/", hash: "#contact" }}>Get in touch</Link>
          </Button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden fixed top-[4.5rem] left-4 right-4 z-50 rounded-3xl bg-dark/90 backdrop-blur-2xl border border-white/10 p-3 shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
          >
            {[...SECTIONS, "projects"].map((id) => (
              <Link
                key={id}
                to={id === "projects" ? "/projects" : { pathname: "/", hash: `#${id}` }}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base capitalize text-white/75 hover:text-white hover:bg-white/[0.04]"
              >
                {id}
                <span className="text-white/25">→</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
