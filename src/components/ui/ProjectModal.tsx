import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Github, ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectMedia from "@/components/ui/ProjectMedia";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  /** The list the modal steps through with the arrow buttons / keys. */
  list: Project[];
  onSelect: (project: Project) => void;
  onClose: () => void;
}

export default function ProjectModal({ project, list, onSelect, onClose }: ProjectModalProps) {
  const [mediaIndex, setMediaIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const index = project ? list.findIndex((p) => p.slug === project.slug) : -1;
  const step = (dir: 1 | -1) => {
    if (index < 0 || list.length < 2) return;
    onSelect(list[(index + dir + list.length) % list.length]);
  };

  useEffect(() => {
    setMediaIndex(0);
    scrollRef.current?.scrollTo({ top: 0 });
  }, [project?.slug]);

  const isOpen = project !== null;
  useEffect(() => {
    if (isOpen) closeRef.current?.focus();
  }, [isOpen]);

  // Re-bound every render so `step` always sees the current project.
  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const media = project?.media.length ? project.media : project?.cover ? [project.cover] : [];
  const current = media[mediaIndex];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/75 backdrop-blur-md" onClick={onClose} />

          {/* Panel */}
          <motion.div
            className="relative w-full max-w-3xl max-h-[92vh] rounded-3xl overflow-hidden flex flex-col"
            style={{ background: "#0F0F0F", border: "1px solid rgba(255,255,255,0.09)", boxShadow: "0 40px 120px rgba(0,0,0,0.7)" }}
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Top bar */}
            <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
              {list.length > 1 && (
                <>
                  <button
                    onClick={() => step(-1)}
                    aria-label="Previous project"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white bg-black/50 backdrop-blur hover:bg-black/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => step(1)}
                    aria-label="Next project"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white bg-black/50 backdrop-blur hover:bg-black/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white bg-black/50 backdrop-blur hover:bg-black/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div ref={scrollRef} className="overflow-y-auto overscroll-contain">
              {/* Media */}
              <div className="relative aspect-[16/9] bg-[#080808]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${project.slug}-${mediaIndex}`}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ProjectMedia
                      media={current}
                      project={project}
                      fit={current ? "contain" : "cover"}
                      eager
                      className="absolute inset-0"
                    />
                  </motion.div>
                </AnimatePresence>

                {media.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 rounded-full bg-black/55 backdrop-blur px-2.5 py-2">
                    {media.map((m, i) => (
                      <button
                        key={m.src}
                        onClick={() => setMediaIndex(i)}
                        aria-label={`Show media ${i + 1}: ${m.alt}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === mediaIndex ? "w-6 bg-accent" : "w-1.5 bg-white/35 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="px-6 md:px-9 pt-7 pb-8">
                {project.award && (
                  <div
                    className="flex items-center gap-4 rounded-2xl px-5 py-4 mb-6 border border-gold/30"
                    style={{ background: "linear-gradient(120deg, rgba(245,181,68,0.16) 0%, rgba(245,181,68,0.03) 70%)" }}
                  >
                    <span className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-lit to-gold flex items-center justify-center shrink-0 shadow-[0_0_24px_rgba(245,181,68,0.35)]">
                      <Trophy className="w-5 h-5 text-black/80" />
                    </span>
                    <div>
                      <p className="font-serif font-bold text-xl md:text-2xl text-gold-lit leading-tight">
                        {project.award.place}
                        <span className="text-white/70 font-normal italic"> · {project.award.title}</span>
                      </p>
                      <p className="font-mono text-[0.66rem] tracking-[0.14em] uppercase text-white/50 mt-1">{project.award.event}</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <h2 id="project-modal-title" className="font-serif font-bold text-3xl md:text-4xl leading-tight">
                  {project.title}
                </h2>
                <p className="font-serif italic text-lg text-accent-lit/90 mt-1 mb-5">{project.tagline}</p>

                <p className="text-white/60 leading-[1.75] text-[15px] mb-8">{project.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/[0.06] mb-8">
                  {project.stats.map((s) => (
                    <div key={s.label} className="bg-[#0F0F0F] px-4 py-4">
                      <div className="font-serif font-bold text-2xl leading-none">{s.value}</div>
                      <div className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-white/35 mt-2">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <h3 className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-white/35 mb-4">How it works</h3>
                <ul className="space-y-3 mb-8">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-white/65 leading-relaxed">
                      <span className="mt-[0.55em] w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Meta */}
                <dl className="mb-8">
                  {[
                    { label: "Year", value: project.year },
                    { label: "Role", value: project.role },
                    { label: "Status", value: project.status },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between gap-6 py-3 border-b border-white/[0.06]">
                      <dt className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-white/30">{row.label}</dt>
                      <dd className="text-sm text-white/75 text-right">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                {project.note && (
                  <p className="text-xs text-white/35 leading-relaxed mb-8">{project.note}</p>
                )}

                {(project.links.live || project.links.code) ? (
                  <div className="flex flex-col sm:flex-row gap-3">
                    {project.links.live && (
                      <Button className="gap-2 flex-1 justify-center" asChild>
                        <a href={project.links.live} target="_blank" rel="noreferrer">
                          <ArrowUpRight className="w-4 h-4" /> Visit live
                        </a>
                      </Button>
                    )}
                    {project.links.code && (
                      <Button variant="outline" className="gap-2 flex-1 justify-center" asChild>
                        <a href={project.links.code} target="_blank" rel="noreferrer">
                          <Github className="w-4 h-4" /> {project.links.codeLabel ?? "GitHub"}
                        </a>
                      </Button>
                    )}
                  </div>
                ) : (
                  <p className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-white/30 text-center py-3 border border-dashed border-white/10 rounded-full">
                    Private repo · write-up coming soon
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
