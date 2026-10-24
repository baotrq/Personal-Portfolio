import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);

  const titles = useMemo(
    () => ["Move.", "Ship.", "Think.", "Matter."],
    []
  );

  useEffect(() => {
    const id = setTimeout(() => {
      setTitleNumber((n) => (n === titles.length - 1 ? 0 : n + 1));
    }, 2200);
    return () => clearTimeout(id);
  }, [titleNumber, titles]);

  const stats = [
    { value: 10,              label: "ONBOOTH users", suffix: "k+" },
    { value: 3,               label: "Awards",        suffix: "" },
    { value: projects.length, label: "Projects",      suffix: "" },
    { value: 5,               label: "Platforms",     suffix: "" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg" id="hero">

      {/* Radial glow */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(232,75,42,0.13) 0%, transparent 70%)",
        }}
      />

      {/* Floating orb */}
      <div
        className="orb-float absolute right-[-5%] top-[15%] w-[480px] h-[480px] rounded-full pointer-events-none hidden lg:block z-[2]"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(232,75,42,0.18) 0%, rgba(232,75,42,0.04) 60%, transparent 100%)",
          filter: "blur(50px)",
        }}
      />

      {/* Watermark */}
      <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="wm"
          style={{ fontSize: "clamp(120px, 22vw, 320px)" }}
        >
          BAO
        </span>
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center pt-28 pb-36">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8"
        >
          <span className="inline-block whitespace-nowrap font-mono text-[0.62rem] sm:text-[0.68rem] tracking-[0.08em] sm:tracking-[0.14em] uppercase text-accent bg-accent/10 border border-accent/22 rounded-full px-3 py-1">
            Robotics &amp; Mechatronics&nbsp;&nbsp;·&nbsp;&nbsp;RMIT Vietnam
          </span>
        </motion.div>

        {/* Heading with animated cycling word */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="font-sans font-bold leading-[0.88] tracking-tight mb-8"
          style={{ fontSize: "clamp(52px, 10vw, 128px)" }}
        >
          <span className="block">Building</span>
          <span className="block">Things That</span>

          {/* Animated cycling word */}
          <span
            className="relative flex w-full justify-center overflow-hidden"
            style={{ height: "clamp(72px, 13vw, 168px)" }}
          >
            {titles.map((title, index) => (
              <motion.span
                key={index}
                className="absolute font-serif italic gt leading-none whitespace-nowrap"
                style={{ fontSize: "clamp(60px, 11vw, 140px)" }}
                initial={{ opacity: 0, y: "100%" }}
                transition={{ type: "spring", stiffness: 55, damping: 14 }}
                animate={
                  titleNumber === index
                    ? { y: "0%", opacity: 1 }
                    : {
                        y: titleNumber > index ? "-120%" : "120%",
                        opacity: 0,
                      }
                }
              >
                {title}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="text-white/45 leading-relaxed mx-auto mb-12 max-w-lg"
          style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}
        >
          I'm Bảo — a mechatronics engineer who builds the whole stack: CAD and
          firmware for machines that move, and apps that 10,000+ people actually use.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="gap-2" asChild>
            <a href="#work">
              View My Work <MoveRight className="w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="#contact">Let's Collaborate</a>
          </Button>
        </motion.div>
      </div>


      {/* Stats strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.06] bg-dark/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-4 divide-x divide-white/[0.08] py-4 md:py-5">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-2">
              <Counter target={s.value} suffix={s.suffix} />
              <div className="font-mono text-[0.55rem] md:text-[0.62rem] tracking-[0.12em] md:tracking-[0.16em] uppercase text-white/30 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const start = performance.now();

    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }

    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return (
    <div className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tabular-nums">
      {count}
      <span className="text-accent-lit/80 text-[0.7em]">{suffix}</span>
    </div>
  );
}

export { Hero };
