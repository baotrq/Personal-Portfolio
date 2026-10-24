import { motion } from "framer-motion";
import { Cpu, Smartphone, Radio } from "lucide-react";

const toolkit = [
  {
    group: "Hardware & Firmware",
    items: ["ESP32 / C3", "C / C++", "PlatformIO", "Arduino", "Raspberry Pi", "Load cells · HX711", "Bluetooth LE", "KiCad"],
    usedIn: "Egg Gripper · Clawd Mochi · SimpMusic LED",
  },
  {
    group: "Design & Fabrication",
    items: ["Fusion 360", "Shapr3D", "3D printing · Bambu Lab", "PETG / TPU"],
    usedIn: "Egg Gripper · Clawd Mochi · LomoStudio",
  },
  {
    group: "Mobile",
    items: ["Kotlin", "Jetpack Compose", "Wear OS", "SwiftUI", "WidgetKit", "Flutter"],
    usedIn: "Roll · Age in Motion · Loop Widget",
  },
  {
    group: "Web & Real-time",
    items: ["TypeScript", "Next.js", "React", "WebRTC · LiveKit", "three.js", "Supabase", "Cloudflare Workers"],
    usedIn: "ONBOOTH · LomoStudio · Roll",
  },
  {
    group: "AI & Vision",
    items: ["Python", "PyTorch", "Computer vision", "MediaPipe", "Gemini API", "Local LLMs · Ollama", "MATLAB"],
    usedIn: "ONBOOTH · Roll · coursework",
  },
];

const services = [
  {
    icon: Cpu,
    title: "Mechatronic Systems",
    desc: "From force budget to firmware: CAD, 3D-printed mechanisms, sensors and closed-loop control on ESP32 — like a gripper that holds a raw egg at 4 N.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps & Widgets",
    desc: "Native Android, Wear OS and iOS apps with offline-first sync — and home-screen widgets that do things widgets aren't supposed to.",
  },
  {
    icon: Radio,
    title: "Real-time Web Products",
    desc: "Multi-device experiences over WebRTC that stay in sync on home Wi-Fi and 4G, shipped bilingual and used by 10,000+ people.",
  },
];

export default function Skills() {
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
            03 — Skills
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-16 lg:gap-20">

          {/* Left — toolkit */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="font-serif font-bold leading-[0.9] mb-10"
              style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}
            >
              The<br />
              <span className="gt italic">Toolkit.</span>
            </motion.h2>

            <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {toolkit.map((t, i) => (
                <motion.div
                  key={t.group}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.4, 0, 0.2, 1] }}
                  className="group grid sm:grid-cols-[150px_1fr] gap-x-6 gap-y-3 py-5"
                >
                  <div>
                    <p className="text-sm font-semibold text-white/85 group-hover:text-white transition-colors">{t.group}</p>
                    <p className="font-mono text-[0.6rem] tracking-[0.08em] uppercase text-white/25 mt-1 leading-relaxed">{t.usedIn}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 content-start">
                    {t.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.09] bg-white/[0.03] px-2.5 py-1 text-xs text-white/60 group-hover:border-accent/25 group-hover:text-white/75 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — services */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="font-serif font-bold leading-[0.9] mb-10"
              style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}
            >
              What I<br />
              <span className="gt italic">Do.</span>
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
                    transition={{ duration: 0.7, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                    className="glass rounded-2xl p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent/30"
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
