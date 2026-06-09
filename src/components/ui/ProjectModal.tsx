import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  large?: boolean;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [project, onClose]);

  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden"
            style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.09)" }}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Gradient thumbnail */}
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0" style={{ background: project.gradient }} />
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.07]"
                viewBox="0 0 400 220"
                fill="none"
              >
                <circle cx="200" cy="110" r="70" stroke="white" strokeWidth="0.5" />
                <circle cx="200" cy="110" r="40" stroke="white" strokeWidth="0.5" />
                <line x1="60" y1="110" x2="340" y2="110" stroke="white" strokeWidth="0.5" />
                <line x1="200" y1="30" x2="200" y2="190" stroke="white" strokeWidth="0.5" />
                <circle cx="200" cy="110" r="5" fill="white" opacity="0.5" />
                <circle cx="270" cy="110" r="3" fill="#E84B2A" opacity="0.9" />
                <circle cx="130" cy="110" r="3" fill="#E84B2A" opacity="0.9" />
              </svg>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, #111111 0%, rgba(17,17,17,0.4) 50%, transparent 100%)",
                }}
              />
            </div>

            {/* Content */}
            <div className="px-8 pb-8 -mt-6 relative">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-accent bg-accent/10 border border-accent/22 rounded-full px-2.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="font-serif font-bold text-3xl mb-4 leading-tight">{project.title}</h2>

              <p className="text-white/55 leading-[1.75] text-sm mb-8">{project.description}</p>

              {/* Placeholder detail rows */}
              <div className="space-y-3 mb-8">
                {[
                  { label: "Status", value: "In development" },
                  { label: "Year",   value: "2024 – 2025" },
                  { label: "Role",   value: "Lead Engineer" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-3 border-b border-white/[0.06]">
                    <span className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-white/30">{row.label}</span>
                    <span className="text-sm text-white/70">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Button className="gap-2 flex-1 justify-center">
                  <ArrowUpRight className="w-4 h-4" /> View Live
                </Button>
                <Button variant="outline" className="gap-2 flex-1 justify-center">
                  <Github className="w-4 h-4" /> GitHub
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
