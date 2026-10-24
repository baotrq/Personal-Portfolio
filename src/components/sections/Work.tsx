import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { featuredProjects, projects, type Project } from "@/data/projects";

export default function Work() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="relative py-28 md:py-36 px-6">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-white/30">02 — Work</span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >
            <h2
              className="font-serif font-bold leading-[0.9]"
              style={{ fontSize: "clamp(40px, 5.5vw, 68px)" }}
            >
              Selected<br />
              <span className="gt italic">Projects.</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm md:text-right">
              2nd place at the FPT IoT Challenge in 2025 and 2026 for edge-AI hardware, and apps
              people actually use — including a photobooth with 10,000+ users.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {featuredProjects.map((p, i) => (
              <ProjectCard
                key={p.slug}
                project={p}
                size={i < 2 ? "lg" : "md"}
                delay={(i % 2) * 0.1}
                onOpen={setActiveProject}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mt-12 flex justify-center"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 rounded-full border border-white/12 px-6 py-3 text-sm text-white/60 hover:text-white hover:border-accent/40 transition-colors"
            >
              All {projects.length} projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

        </div>
      </section>

      <ProjectModal
        project={activeProject}
        list={featuredProjects}
        onSelect={setActiveProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
