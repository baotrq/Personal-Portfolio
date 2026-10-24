import type { Media, Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectMediaProps {
  media?: Media;
  project: Pick<Project, "gradient" | "monogram">;
  className?: string;
  fit?: "cover" | "contain";
  /** Load immediately (the modal) instead of lazily (cards). */
  eager?: boolean;
}

/** Renders a project image or muted looping video, or a gradient + monogram when there is none. */
export default function ProjectMedia({ media, project, className, fit, eager = false }: ProjectMediaProps) {
  const fitClass = (fit ?? media?.fit ?? "cover") === "cover" ? "object-cover" : "object-contain";

  if (!media) {
    return (
      <div className={cn("relative overflow-hidden", className)} style={{ background: project.gradient }}>
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
          }}
        />
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center font-serif italic font-black text-white/90 select-none"
          style={{ fontSize: "clamp(56px, 9vw, 112px)", letterSpacing: "-0.04em", textShadow: "0 12px 40px rgba(0,0,0,0.35)" }}
        >
          {project.monogram}
        </span>
      </div>
    );
  }

  if (media.kind === "video") {
    return (
      <video
        className={cn("w-full h-full", fitClass, className)}
        src={media.src}
        poster={media.poster}
        aria-label={media.alt}
        style={media.bg ? { background: media.bg } : undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  return (
    <img
      className={cn("w-full h-full", fitClass, className)}
      src={media.src}
      alt={media.alt}
      style={media.bg ? { background: media.bg } : undefined}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
