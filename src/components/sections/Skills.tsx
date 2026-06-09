import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Brain, Wrench } from "lucide-react";

const skills = [
  { name: "Python · AI & ML",        level: 0.90 },
  { name: "ROS / ROS2",              level: 0.85 },
  { name: "Computer Vision",         level: 0.82 },
  { name: "C++ · Embedded Systems",  level: 0.75 },
  { name: "CAD · SolidWorks",        level: 0.68 },
];

const tags = [
  "PyTorch", "TensorFlow", "OpenCV", "Gazebo",
  "MATLAB", "Arduino", "Raspberry Pi", "Docker", "Git", "Linux",
];

const services = [
  {
    icon: Cpu,
    title: "Robotics System Design",
    desc: "End-to-end robotic architecture from mechanical design to control algorithms and software integration.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Custom AI model development, computer vision pipelines, and ML integration for intelligent automation.",
  },
  {
    icon: Wrench,
    title: "Embedded & Hardware",
    desc: "Low-level firmware, sensor integration, and real-time control on embedded platforms from Arduino to RPi.",
  },
];

export default function Skills() {
  const barsRef = useRef<HTMLDivElement>(null);
  const barsInView = useInView(barsRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-white/30">
            03 — Skills &amp; Services
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — skills */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="font-serif font-bold leading-[0.9] mb-12"
              style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}
            >
              Technical<br />
              <span className="gt italic">Expertise.</span>
            </motion.h2>

            <div ref={barsRef} className="space-y-7">
              {skills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-2.5">
                    <span className="text-sm font-medium">{s.name}</span>
                    <span className="font-mono text-xs text-white/30">
                      {Math.round(s.level * 100)}%
                    </span>
                  </div>
                  <div className="h-px bg-white/[0.08] rounded overflow-hidden">
                    <motion.div
                      className="h-full origin-left"
                      style={{
                        background: "linear-gradient(90deg, #E84B2A, #F4906B)",
                        borderRadius: "2px",
                      }}
                      initial={{ scaleX: 0 }}
                      animate={barsInView ? { scaleX: s.level } : { scaleX: 0 }}
                      transition={{
                        duration: 1.3,
                        delay: i * 0.14,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-wrap gap-2 mt-10"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-accent bg-accent/10 border border-accent/22 rounded-full px-2.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — services */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="font-serif font-bold leading-[0.9] mb-12"
              style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}
            >
              What I<br />
              <span className="gt italic">Offer.</span>
            </motion.h2>

            <div className="space-y-4">
              {services.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={svc.title}
                    initial={{ opacity: 0, x: 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.1,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    whileHover={{ y: -3, borderColor: "rgba(232,75,42,0.35)" }}
                    className="glass rounded-2xl p-6 cursor-pointer transition-colors duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(232,75,42,0.12)" }}
                      >
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1.5">{svc.title}</h4>
                        <p className="text-white/45 text-sm leading-relaxed">{svc.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
