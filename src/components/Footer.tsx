import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects, projects } from "@/data/projects";

const EMAIL = "tdmbao2005@gmail.com";

const LINKS = [
  { label: "GitHub", href: "https://github.com/baotrq" },
  { label: "Email", href: `mailto:${EMAIL}` },
];

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 pt-16 pb-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] lg:grid-cols-[1fr_2fr_auto] mb-14">

          {/* Brand */}
          <div>
            <span className="font-serif font-bold text-2xl">
              Bao<span className="text-accent">.</span>
            </span>
            <p className="text-white/40 text-sm leading-relaxed mt-3 max-w-xs">
              Robotics &amp; Mechatronics engineer at RMIT Vietnam, building hardware and apps people
              actually use.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-block mt-5 text-sm text-white/70 hover:text-accent transition-colors underline underline-offset-4 decoration-white/15"
            >
              {EMAIL}
            </a>
          </div>

          {/* Highlights */}
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-white/30 mb-4">Highlights</p>
            <ul className="grid sm:grid-cols-2 gap-x-6">
              {featuredProjects.map((p) => {
                const href = p.links.live ?? p.links.code;
                const stat = p.stats[0];
                return (
                  <li key={p.slug} className="border-t border-white/[0.06]">
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 py-3.5"
                    >
                      <span className="min-w-0">
                        <span className="block font-serif font-bold text-white/85 group-hover:text-white transition-colors">
                          {p.title}
                        </span>
                        {stat && (
                          <span className="block font-mono text-[0.62rem] tracking-[0.12em] uppercase text-white/30 mt-0.5 truncate">
                            {stat.value} · {stat.label}
                          </span>
                        )}
                      </span>
                      <ArrowUpRight className="w-4 h-4 shrink-0 text-white/20 group-hover:text-accent transition-colors" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Elsewhere */}
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-white/30 mb-4">Elsewhere</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/projects" className="text-white/50 hover:text-white transition-colors">
                  All {projects.length} projects
                </Link>
              </li>
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="pt-6 border-t border-white/[0.06] text-white/25 text-xs font-mono text-center md:text-left">
          © {new Date().getFullYear()} Bảo Trương · Robotics &amp; Mechatronics · RMIT Vietnam
        </p>
      </div>
    </footer>
  );
}
