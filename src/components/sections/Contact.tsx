import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] as const },
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "tdmbao2005@gmail.com",
    href: "mailto:tdmbao2005@gmail.com",
  },
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "#" },
  { icon: Github,   label: "GitHub",   value: "View my code",   href: "#" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setTimeout(() => setSent(false), 3500);
      (e.target as HTMLFormElement).reset();
    }, 1400);
  }

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 overflow-hidden">

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-60">
        <span className="wm" style={{ fontSize: "clamp(100px, 18vw, 240px)" }}>
          HELLO
        </span>
      </div>

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(232,75,42,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">

        <motion.div {...fade()} className="flex items-center gap-4 mb-14">
          <span className="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-white/30">
            04 — Contact
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </motion.div>

        <motion.h2
          {...fade(0.05)}
          className="font-serif font-bold leading-[0.85] mb-8"
          style={{ fontSize: "clamp(48px, 8vw, 100px)" }}
        >
          Let's Build<br />
          Something<br />
          <span className="gt italic">Amazing.</span>
        </motion.h2>

        <motion.p
          {...fade(0.1)}
          className="text-white/45 leading-relaxed mb-14 max-w-lg"
          style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}
        >
          Robotics project, AI collaboration, or just a great conversation about
          the future of intelligent machines — I'm always open to connect.
        </motion.p>

        {/* Channels */}
        <motion.div {...fade(0.15)} className="grid md:grid-cols-3 gap-4 mb-12">
          {channels.map((ch) => {
            const Icon = ch.icon;
            return (
              <motion.a
                key={ch.label}
                href={ch.href}
                whileHover={{ y: -3, borderColor: "rgba(232,75,42,0.35)" }}
                className="glass rounded-2xl p-5 block transition-colors duration-200"
              >
                <Icon className="w-6 h-6 text-accent mb-4" />
                <p className="text-white/40 text-xs mb-1">{ch.label}</p>
                <p className="text-sm font-medium break-all">{ch.value}</p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Form */}
        <motion.form
          {...fade(0.2)}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="f-name" className="block text-xs text-white/40 mb-2 font-mono uppercase tracking-wider">
                Name
              </label>
              <input
                id="f-name"
                type="text"
                placeholder="Your name"
                required
                className="w-full rounded-xl px-4 py-3 text-sm bg-white/[0.04] border border-white/[0.09] text-white placeholder-white/25 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="f-email" className="block text-xs text-white/40 mb-2 font-mono uppercase tracking-wider">
                Email
              </label>
              <input
                id="f-email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full rounded-xl px-4 py-3 text-sm bg-white/[0.04] border border-white/[0.09] text-white placeholder-white/25 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="f-subject" className="block text-xs text-white/40 mb-2 font-mono uppercase tracking-wider">
              Subject
            </label>
            <input
              id="f-subject"
              type="text"
              placeholder="What's this about?"
              className="w-full rounded-xl px-4 py-3 text-sm bg-white/[0.04] border border-white/[0.09] text-white placeholder-white/25 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div className="mb-7">
            <label htmlFor="f-msg" className="block text-xs text-white/40 mb-2 font-mono uppercase tracking-wider">
              Message
            </label>
            <textarea
              id="f-msg"
              rows={4}
              placeholder="Tell me about your project or idea..."
              required
              className="w-full rounded-xl px-4 py-3 text-sm bg-white/[0.04] border border-white/[0.09] text-white placeholder-white/25 focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={loading || sent}
            className="w-full justify-center gap-2"
            style={sent ? { background: "#16a34a" } : undefined}
          >
            {sent ? (
              <><Check className="w-4 h-4" /> Message Sent!</>
            ) : loading ? (
              "Sending…"
            ) : (
              <><Send className="w-4 h-4" /> Send Message</>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
