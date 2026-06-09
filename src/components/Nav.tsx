import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-5 left-1/2 z-50 -translate-x-1/2 flex items-center gap-6 px-5 py-2.5 rounded-full transition-all duration-300 ${
        scrolled
          ? "bg-dark/85 backdrop-blur-2xl border border-white/10 shadow-lg"
          : "bg-dark/70 backdrop-blur-xl border border-white/8"
      }`}
    >
      <a href="#hero" className="font-serif font-bold text-lg tracking-tight leading-none">
        Bao.
      </a>

      <div className="hidden md:flex items-center gap-5">
        {["about", "work", "skills", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-sm text-white/55 hover:text-white transition-colors duration-200 capitalize"
          >
            {id}
          </a>
        ))}
      </div>

      <Button size="sm" asChild>
        <a href="#contact">Hire Me</a>
      </Button>
    </motion.nav>
  );
}
