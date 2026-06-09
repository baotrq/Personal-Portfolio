import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import ProjectModal, { type Project } from "@/components/ui/ProjectModal";

const projects: Project[] = [
  {
    title: "Autonomous Navigation System",
    description:
      "Deep learning-based navigation module for mobile robots. Combines LiDAR, camera fusion & reinforcement learning for dynamic obstacle avoidance — sub-10cm precision at 20 Hz.",
    tags: ["AI / Deep Learning", "ROS2"],
    gradient: "linear-gradient(135deg, #200800 0%, #6B1800 50%, #E84B2A 100%)",
    large: true,
  },
  {
    title: "Robot Perception Pipeline",
    description:
      "Real-time 3D scene reconstruction for industrial robotic arms — 94% detection accuracy at 30 FPS using a custom-trained YOLO model with depth fusion.",
    tags: ["Computer Vision", "Python", "YOLO"],
    gradient: "linear-gradient(135deg, #000B1E 0%, #001F5C 50%, #1A4DB8 100%)",
    large: true,
  },
  {
    title: "6-DOF Robotic Arm Control",
    description:
      "Inverse kinematics solver & real-time trajectory planner for a 6-DOF arm with sub-millimetre end-effector precision.",
    tags: ["Embedded", "C++", "Kinematics"],
    gradient: "linear-gradient(135deg, #0A0800 0%, #2A2000 50%, #7A5800 100%)",
    large: false,
  },
  {
    title: "Foundation AI for Robotics",
    description:
      "Generalist AI models that adapt to diverse robotic tasks through few-shot learning — developed at VinRobotics Foundation AI team.",
    tags: ["Foundation AI", "PyTorch"],
    gradient: "linear-gradient(135deg, #001508 0%, #003D18 50%, #006B2A 100%)",
    large: false,
  },
];

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
            className="flex items-end justify-between mb-14"
          >
            <h2
              className="font-serif font-bold leading-[0.9]"
              style={{ fontSize: "clamp(40px, 5.5vw, 68px)" }}
            >
              Selected<br />
              <span className="gt italic">Projects.</span>
            </h2>
            <Link
              to="/projects"
              className="hidden md:block text-sm text-white/35 hover:text-white transition-colors"
            >
              All projects →
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: (i % 2) * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="group relative overflow-hidden rounded-2xl glass cursor-pointer"
                style={{ transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s ease" }}
                whileHover={{ y: -6, boxShadow: "0 32px 60px rgba(0,0,0,0.6)" }}
              >
                {/* Thumbnail */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: p.large ? "280px" : "200px" }}
                >
                  <div
                    className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                    style={{ background: p.gradient }}
                  />
                  <svg
                    className="absolute inset-0 w-full h-full opacity-[0.08]"
                    viewBox="0 0 400 280"
                    fill="none"
                  >
                    <circle cx="200" cy="140" r="70" stroke="white" strokeWidth="0.5" />
                    <circle cx="200" cy="140" r="40" stroke="white" strokeWidth="0.5" />
                    <line x1="80" y1="140" x2="320" y2="140" stroke="white" strokeWidth="0.5" />
                    <line x1="200" y1="40" x2="200" y2="240" stroke="white" strokeWidth="0.5" />
                    <circle cx="200" cy="140" r="5" fill="white" opacity="0.5" />
                    <circle cx="270" cy="140" r="3" fill="#E84B2A" opacity="0.9" />
                    <circle cx="130" cy="140" r="3" fill="#E84B2A" opacity="0.9" />
                  </svg>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.5) 55%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-accent bg-accent/10 border border-accent/22 rounded-full px-2.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-2">{p.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-5">{p.description}</p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setActiveProject(p)}
                      className="text-sm font-medium text-accent hover:text-accent-lit transition-colors"
                    >
                      View Project →
                    </button>
                    <span className="text-white/15">|</span>
                    <a
                      href="#"
                      className="flex items-center gap-1.5 text-sm text-white/35 hover:text-white/70 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile "All projects" link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex justify-center md:hidden"
          >
            <Link
              to="/projects"
              className="text-sm text-white/35 hover:text-white transition-colors"
            >
              All projects →
            </Link>
          </motion.div>

        </div>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
