import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const placeholderProjects = [
  { title: "Autonomous Navigation System", tags: ["AI / Deep Learning", "ROS2"],         year: "2024" },
  { title: "Robot Perception Pipeline",    tags: ["Computer Vision", "Python", "YOLO"],  year: "2024" },
  { title: "6-DOF Robotic Arm Control",    tags: ["Embedded", "C++", "Kinematics"],      year: "2023" },
  { title: "Foundation AI for Robotics",   tags: ["Foundation AI", "PyTorch"],           year: "2025" },
  { title: "Project Five",                 tags: ["Coming Soon"],                         year: "—"    },
  { title: "Project Six",                  tags: ["Coming Soon"],                         year: "—"    },
  { title: "Project Seven",                tags: ["Coming Soon"],                         year: "—"    },
  { title: "Project Eight",                tags: ["Coming Soon"],                         year: "—"    },
];

export default function AllProjects() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Nav />

      <main className="max-w-6xl mx-auto px-6 pt-40 pb-28">

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
          className="mb-6"
        >
          <span className="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-white/30">
            All Work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="font-serif font-bold leading-[0.9] mb-20"
          style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
        >
          Every<br />
          <span className="gt italic">Project.</span>
        </motion.h1>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {placeholderProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.07, ease: [0.4, 0, 0.2, 1] }}
              className="glass rounded-2xl p-6 hover:border-accent/30 hover:-translate-y-1 transition-all duration-250 cursor-pointer"
            >
              {/* Placeholder thumbnail */}
              <div
                className="w-full h-2 rounded-full mb-6"
                style={{
                  background: p.tags[0] === "Coming Soon"
                    ? "rgba(255,255,255,0.06)"
                    : "linear-gradient(90deg, #E84B2A, #F4906B)",
                  opacity: p.tags[0] === "Coming Soon" ? 1 : 0.6,
                }}
              />

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

              <h3
                className="font-serif font-bold text-lg mb-2 leading-snug"
                style={{ color: p.tags[0] === "Coming Soon" ? "rgba(255,255,255,0.2)" : undefined }}
              >
                {p.title}
              </h3>

              <p className="font-mono text-[0.68rem] text-white/25 mt-auto">{p.year}</p>
            </motion.div>
          ))}
        </div>

        {/* Placeholder notice */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center text-white/20 font-mono text-xs tracking-widest uppercase mt-20"
        >
          More projects coming soon
        </motion.p>
      </main>

      <Footer />
    </div>
  );
}
