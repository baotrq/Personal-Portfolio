export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-serif font-bold text-xl">Bao.</span>
        <p className="text-white/25 text-sm font-mono">
          © 2026 Bao · Robotics &amp; AI Engineer · RMIT Vietnam
        </p>
        <div className="flex items-center gap-5">
          {["LinkedIn", "GitHub"].map((l) => (
            <a key={l} href="#" className="text-sm text-white/30 hover:text-white/70 transition-colors">
              {l}
            </a>
          ))}
          <a
            href="mailto:tdmbao2005@gmail.com"
            className="text-sm text-white/30 hover:text-white/70 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
