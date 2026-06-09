import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const },
};

const fadeRight = {
  initial: { opacity: 0, x: 36 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const },
};

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <motion.div {...fadeUp} className="flex items-center gap-4 mb-14">
          <span className="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-white/30">
            01 — About
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div>
            <motion.h2
              {...fadeUp}
              className="font-serif font-bold leading-[0.9] mb-8"
              style={{ fontSize: "clamp(40px, 5.5vw, 68px)" }}
            >
              Where Engineering<br />
              Meets{" "}
              <span className="gt italic">Intelligence.</span>
            </motion.h2>

            <motion.p {...fadeUp} className="text-white/50 leading-[1.75] mb-5" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
              I'm Bao — a third-year Robotics and Mechatronics Engineering
              student at RMIT University Vietnam. I'm currently part of the{" "}
              <strong className="text-white/80 font-medium">
                Foundation AI team at VinRobotics
              </strong>
              , where I develop intelligent algorithms that let machines
              understand and act in the physical world.
            </motion.p>

            <motion.p {...fadeUp} className="text-white/50 leading-[1.75] mb-10" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
              My work lives at the crossroads of mechanical design, embedded
              systems, and deep learning. I don't just build robots — I build
              robots that{" "}
              <em className="italic text-white/70">think</em>.
            </motion.p>

            <motion.div {...fadeUp}>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" /> Download CV
              </Button>
            </motion.div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {/* Role card */}
            <motion.div {...fadeRight} className="glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-250 hover:-translate-y-1">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="font-semibold text-white">AI Research Intern</p>
                  <p className="text-white/45 text-sm mt-0.5">VinRobotics · Foundation AI Team</p>
                </div>
                <span className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-accent bg-accent/10 border border-accent/22 rounded-full px-2.5 py-0.5 shrink-0">
                  Current
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Developing generalist foundation models for robotic perception
                and control. Bridging large-scale AI with real-world robotic
                actuation.
              </p>
            </motion.div>

            {/* Education card */}
            <motion.div
              {...fadeRight}
              transition={{ ...fadeRight.transition, delay: 0.1 }}
              className="glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-250 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="font-semibold text-white">Robotics &amp; Mechatronics Engineering</p>
                  <p className="text-white/45 text-sm mt-0.5">RMIT University Vietnam · Year 3</p>
                </div>
                <span className="font-mono text-xs text-white/25">2023–</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Core focus: autonomous systems, control theory, embedded
                hardware, and applied machine learning for physical environments.
              </p>
            </motion.div>

            {/* Quote */}
            <motion.div
              {...fadeRight}
              transition={{ ...fadeRight.transition, delay: 0.2 }}
              className="rounded-2xl p-6"
              style={{ background: "rgba(232,75,42,0.06)", border: "1px solid rgba(232,75,42,0.18)" }}
            >
              <p className="font-serif text-xl italic text-white/75 leading-relaxed">
                "The best robots aren't the fastest or strongest — they're the
                ones that understand the world around them."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
