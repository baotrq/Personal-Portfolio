import { motion } from "framer-motion";
import { ArrowUpRight, Github, Trophy } from "lucide-react";
import ProjectMedia from "@/components/ui/ProjectMedia";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  /** "lg" = tall media on the home grid, "md" = home grid, "sm" = /projects grid. */
  size?: "lg" | "md" | "sm";
  delay?: number;
}

const mediaHeight = { lg: "h-[260px] md:h-[300px]", md: "h-[200px] md:h-[220px]", sm: "h-[180px]" };

export default function ProjectCard({ project: p, onOpen, size = "md", delay = 0 }: ProjectCardProps) {
  const headline = p.stats[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}
      onClick={() => onOpen(p)}
      onKeyDown={(e) => {
        if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onOpen(p);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Open ${p.title}`}
      data-cursor
      className="group relative w-full flex flex-col overflow-hidden rounded-2xl glass cursor-pointer transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_32px_60px_rgba(0,0,0,0.55)] focus-visible:outline-none focus-visible:border-accent/60"
    >
      {/* Media */}
      <div className={`relative overflow-hidden ${mediaHeight[size]}`}>
        <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]">
          <ProjectMedia media={p.cover} project={p} className="absolute inset-0" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.25) 45%, transparent 75%)" }}
        />
        {p.award ? (
          <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full pl-1 pr-3 py-1 bg-black/65 backdrop-blur-md border border-gold/45 shadow-[0_0_28px_rgba(245,181,68,0.28)]">
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-gold-lit to-gold flex items-center justify-center">
              <Trophy className="w-3.5 h-3.5 text-black/80" />
            </span>
            <span className="font-serif font-bold text-sm text-gold-lit">{p.award.place}</span>
            <span className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/60 hidden sm:inline">{p.award.event}</span>
          </div>
        ) : headline && (
          <div className="absolute top-3 left-3 flex items-baseline gap-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/10 px-3 py-1">
            <span className="font-serif font-bold text-sm text-white">{headline.value}</span>
            <span className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/50">{headline.label}</span>
          </div>
        )}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 ${size === "sm" ? "p-5" : "p-6"}`}>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {p.tags.slice(0, size === "sm" ? 2 : 4).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="flex items-baseline justify-between gap-3">
          <h3 className={`font-serif font-bold ${size === "lg" ? "text-2xl" : "text-xl"}`}>{p.title}</h3>
          <span className="font-mono text-[0.65rem] text-white/30 shrink-0">{p.year}</span>
        </div>
        <p className="font-serif italic text-accent-lit/80 text-[15px] mt-0.5 mb-3">{p.tagline}</p>

        {size !== "sm" && (
          <p className="text-white/45 text-sm leading-relaxed mb-5 line-clamp-3">{p.description}</p>
        )}

        <div className="mt-auto flex items-center gap-4 pt-1">
          <span className="text-sm font-medium text-accent group-hover:text-accent-lit transition-colors">
            View project →
          </span>
          {p.links.live && (
            <a
              href={p.links.live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-sm text-white/35 hover:text-white/80 transition-colors"
            >
              <ArrowUpRight className="w-3.5 h-3.5" /> Live
            </a>
          )}
          {p.links.code && (
            <a
              href={p.links.code}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-sm text-white/35 hover:text-white/80 transition-colors"
            >
              <Github className="w-3.5 h-3.5" /> {p.links.codeLabel ?? "GitHub"}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
