const BULB_COLORS = ["#e8a33d", "#f4c46a", "#e8a33d", "#f4c46a", "#e8a33d"];

export default function StringLights({ className = "" }: { className?: string }) {
  const bulbs = Array.from({ length: 24 });

  return (
    <div className={`select-none overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 960 40" className="w-full h-8" preserveAspectRatio="none">
        <path
          d="M0 6 Q 40 34 80 6 T 160 6 T 240 6 T 320 6 T 400 6 T 480 6 T 560 6 T 640 6 T 720 6 T 800 6 T 880 6 T 960 6"
          fill="none"
          stroke="#8a6a4a"
          strokeWidth="1.5"
          opacity="0.6"
        />
        {bulbs.map((_, i) => {
          const x = Number(((i / (bulbs.length - 1)) * 960).toFixed(2));
          const y = Number(
            (6 + 14 * Math.abs(Math.sin((i / (bulbs.length - 1)) * Math.PI * 3))).toFixed(2)
          );
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="5"
              fill={BULB_COLORS[i % BULB_COLORS.length]}
              className="bulb"
              style={{ animationDelay: `${(i % 7) * 0.3}s` }}
            />
          );
        })}
      </svg>
    </div>
  );
}
