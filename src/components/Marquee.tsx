const ITEMS = [
  "Robotics", "Machine Learning", "Computer Vision", "ROS2",
  "Foundation AI", "RMIT Vietnam", "VinRobotics", "Embedded Systems",
  "Mechatronics", "Autonomous Systems",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="py-4 border-y border-white/[0.06] overflow-hidden bg-surface select-none">
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
