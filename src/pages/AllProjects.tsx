import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects, projectKinds, type Project, type ProjectKind } from "@/data/projects";

type Filter = "All" | ProjectKind;

export default function AllProjects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.kind === filter)),
    [filter]
  );

  const filters: { label: Filter; count: number }[] = [
    { label: "All", count: projects.length },
    ...projectKinds.map((k) => ({ label: k, count: projects.filter((p) => p.kind === k).length })),
  ];

  return (
    <div className="relative z-10 min-h-screen text-white">
      <Nav />

      <main className="max-w-6xl mx-auto px-6 pt-36 md:pt-40 pb-28">

        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mb-14"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/35 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-white/30">
            All Work · {projects.length} projects
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="font-serif font-bold leading-[0.9] mb-12"
          style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
        >
          Every<br />
          <span className="gt italic">Project.</span>
        </motion.h1>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filter projects"
        >
          {filters.map((f) => {
            const active = f.label === filter;
            return (
              <button
                key={f.label}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.label)}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active ? "text-white" : "text-white/45 hover:text-white/80"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-accent/15 border border-accent/40"
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
                <span className="relative">
                  {f.label} <span className="font-mono text-[0.7rem] text-white/30 ml-0.5">{f.count}</span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="flex"
              >
                <ProjectCard project={p} size="sm" delay={0.05 * i} onOpen={setActiveProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="text-center text-white/25 text-sm mt-20">
          More on{" "}
          <a href="https://github.com/baotrq" target="_blank" rel="noreferrer" className="text-white/50 hover:text-accent transition-colors underline underline-offset-4 decoration-white/15">
            github.com/baotrq
          </a>
        </p>
      </main>

      <Footer />

      <ProjectModal
        project={activeProject}
        list={visible}
        onSelect={setActiveProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
