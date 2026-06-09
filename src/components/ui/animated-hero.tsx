import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);

  const titles = useMemo(
    () => ["Robots.", "AI Systems.", "Machines.", "Solutions.", "Future."],
    []
  );

  useEffect(() => {
    const id = setTimeout(() => {
      setTitleNumber((n) => (n === titles.length - 1 ? 0 : n + 1));
    }, 2200);
    return () => clearTimeout(id);
  }, [titleNumber, titles]);

  const stats = [
    { value: 3,  label: "Years Study",  suffix: "" },
    { value: 12, label: "Projects",     suffix: "+" },
    { value: 8,  label: "Tech Stacks",  suffix: "" },
    { value: 1,  label: "AI Internship",suffix: "" },
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
          <span className="inline-block font-mono text-[0.68rem] tracking-[0.14em] uppercase text-accent bg-accent/10 border border-accent/22 rounded-full px-3 py-1">
            Robotics &amp; AI Engineer&nbsp;&nbsp;·&nbsp;&nbsp;RMIT Vietnam&nbsp;&nbsp;·&nbsp;&nbsp;VinRobotics
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
          <span className="block">Engineering</span>
          <span className="block">Tomorrow's</span>

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
          Robotics engineer &amp; AI researcher building intelligent systems at the
          intersection of machine learning and physical robotics — currently at
          VinRobotics Foundation AI.
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-white/30">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-1 rounded-full bg-accent scroll-dot" />
        </div>
      </motion.div>

      {/* Stats strip */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-8 md:gap-16 px-6 py-5 border-t border-white/[0.06]">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-8 md:gap-16">
            {i > 0 && <div className="w-px h-7 bg-white/10" />}
            <div className="text-center">
              <Counter target={s.value} suffix={s.suffix} />
              <div className="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-white/30 mt-0.5">
                {s.label}
              </div>
            </div>
          </div>
        ))}
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
    <div className="font-serif text-2xl md:text-3xl font-bold">
      {count}
      {suffix}
    </div>
  );
}

export { Hero };
