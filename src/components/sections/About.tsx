import { motion } from "framer-motion";
import { Github, MoveRight } from "lucide-react";
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

const OFF_CLOCK = [
  { icon: "🏀", text: "On the basketball court" },
  { icon: "🖨️", text: "Calibrating 3D printers" },
  { icon: "🤖", text: "Tinkering with local AI agents" },
  { icon: "🐈‍⬛", text: "Raising a chaotic black kitten" },
];

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
              I'm Bảo — a Robotics and Mechatronics Engineering (Honours)
              student at RMIT University Vietnam. I work where hardware meets
              software:{" "}
              <strong className="text-white/80 font-medium">
                edge AI, embedded systems and computer vision
              </strong>
              , bringing intelligence directly into the physical world.
            </motion.p>

            <motion.p {...fadeUp} className="text-white/50 leading-[1.75] mb-10" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
              On team projects I'm usually the hardware/software architect —
              CAD, electronics, firmware and the dashboard. On my own, I ship
              products end to end, and I care most about the details people{" "}
              <em className="italic text-white/70">feel</em>: a countdown that
              lands on every phone at once, a grip that never cracks the egg.
            </motion.p>

            <motion.div {...fadeUp} className="flex flex-wrap gap-3">
              <Button className="gap-2" asChild>
                <a href="#work">
                  See my work <MoveRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://github.com/baotrq" target="_blank" rel="noreferrer">
                  <Github className="w-4 h-4" /> github.com/baotrq
                </a>
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
                  <p className="font-semibold text-white">Robotics &amp; Mechatronics Engineering (Honours)</p>
                  <p className="text-white/45 text-sm mt-0.5">RMIT University Vietnam</p>
                </div>
                <span className="font-mono text-xs text-white/25 shrink-0">2023 – now</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Control, embedded hardware, mechanical design and applied machine
                learning. Team lead and hardware/software architect on group
                projects — most recently a force-controlled egg gripper that
                scored 97/100 on its demo.
              </p>
            </motion.div>

            {/* Off the clock */}
            <motion.div
              {...fadeRight}
              transition={{ ...fadeRight.transition, delay: 0.2 }}
              className="rounded-2xl p-6"
              style={{ background: "rgba(232,75,42,0.06)", border: "1px solid rgba(232,75,42,0.18)" }}
            >
              <p className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-accent-lit/80 mb-4">
                Off the clock
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/65">
                {OFF_CLOCK.map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <span className="text-lg leading-none" aria-hidden>{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
