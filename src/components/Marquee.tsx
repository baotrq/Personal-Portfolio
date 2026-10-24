const ITEMS = [
  "Mechatronics", "ESP32 Firmware", "CAD · 3D Printing", "Bluetooth LE",
  "Kotlin · Compose", "SwiftUI · WidgetKit", "Next.js", "WebRTC",
  "Computer Vision", "Supabase", "Edge AI", "RMIT Vietnam",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="py-4 border-y border-white/[0.06] overflow-hidden bg-white/[0.015] backdrop-blur-sm select-none relative z-10">
      <div className="marquee-track font-mono text-xs text-white/25 tracking-widest uppercase">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3">
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
