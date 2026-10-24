const LINKS = [
  { label: "GitHub", href: "https://github.com/baotrq" },
  { label: "ONBOOTH", href: "https://www.onboothvn.com" },
  { label: "Email", href: "mailto:tdmbao2005@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-serif font-bold text-xl">
          Bao<span className="text-accent">.</span>
        </span>
        <p className="text-white/25 text-sm font-mono text-center">
          © {new Date().getFullYear()} Bảo Trương · Robotics &amp; Mechatronics · RMIT Vietnam
        </p>
        <div className="flex items-center gap-5">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              className="text-sm text-white/30 hover:text-white/70 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
