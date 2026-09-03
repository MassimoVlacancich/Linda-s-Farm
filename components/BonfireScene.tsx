export default function BonfireScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 400"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#241d2e" />
          <stop offset="55%" stopColor="#382c43" />
          <stop offset="100%" stopColor="#8f3d21" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="100%" r="70%">
          <stop offset="0%" stopColor="#e8a33d" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#e8a33d" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="flame" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#ffdf9b" />
          <stop offset="45%" stopColor="#e8a33d" />
          <stop offset="100%" stopColor="#b5502c" />
        </radialGradient>
      </defs>

      <rect width="800" height="400" fill="url(#sky)" />

      {/* stars */}
      {Array.from({ length: 26 }).map((_, i) => (
        <circle
          key={i}
          cx={(i * 137) % 800}
          cy={(i * 53) % 160}
          r={i % 4 === 0 ? 1.6 : 1}
          fill="#fdf9ef"
          opacity={0.4 + (i % 5) * 0.1}
        />
      ))}

      {/* hills */}
      <path d="M0 300 Q 200 250 400 290 T 800 270 V 400 H 0 Z" fill="#3c2e24" opacity="0.9" />
      <path d="M0 340 Q 220 300 450 330 T 800 320 V 400 H 0 Z" fill="#2a2019" />

      {/* glow */}
      <rect x="250" y="180" width="300" height="220" fill="url(#glow)" />

      {/* hay bales */}
      <circle cx="620" cy="345" r="26" fill="#c98f3f" opacity="0.9" />
      <circle cx="660" cy="350" r="20" fill="#b57a34" opacity="0.9" />
      <circle cx="150" cy="350" r="22" fill="#b57a34" opacity="0.9" />

      {/* tents */}
      <path d="M110 355 L140 320 L170 355 Z" fill="#4a3b32" />
      <path d="M690 360 L715 330 L740 360 Z" fill="#4a3b32" />

      {/* bonfire logs */}
      <g transform="translate(400 360)">
        <rect x="-30" y="0" width="60" height="6" rx="3" fill="#3c2e24" transform="rotate(8)" />
        <rect x="-30" y="0" width="60" height="6" rx="3" fill="#3c2e24" transform="rotate(-10)" />
        {/* flames */}
        <path
          d="M0 -10 C -14 -30 -8 -50 0 -75 C 8 -50 14 -30 0 -10 Z"
          fill="url(#flame)"
        >
          <animate
            attributeName="d"
            dur="1.6s"
            repeatCount="indefinite"
            values="
              M0 -10 C -14 -30 -8 -50 0 -75 C 8 -50 14 -30 0 -10 Z;
              M0 -10 C -10 -34 -12 -55 0 -82 C 12 -55 10 -34 0 -10 Z;
              M0 -10 C -14 -30 -8 -50 0 -75 C 8 -50 14 -30 0 -10 Z"
          />
        </path>
      </g>
    </svg>
  );
}
