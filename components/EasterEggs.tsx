"use client";

import { useEffect, useState } from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

type Firefly = { id: number; left: number; delay: number; duration: number };

export default function EasterEggs() {
  const [fireflies, setFireflies] = useState<Firefly[] | null>(null);

  useEffect(() => {
    console.log(
      "%c      (      )\n   )  (    )  (\n  (    )  (    )\n   \\  /  \\  /\n    )(    )(\n   /  \\  /  \\\n  |    ||    |\n~~~~~~~~~~~~~~~~~\n\n Cosy fires, cosier code.\n Nice of you to peek behind the tent flap.",
      "color:#e8a33d;font-family:monospace;"
    );
  }, []);

  useEffect(() => {
    let progress = 0;
    function onKeyDown(e: KeyboardEvent) {
      const expected = KONAMI[progress];
      if (e.key.toLowerCase() === expected.toLowerCase()) {
        progress++;
        if (progress === KONAMI.length) {
          progress = 0;
          setFireflies(
            Array.from({ length: 40 }, (_, i) => ({
              id: i,
              left: Math.random() * 100,
              delay: Math.random() * 2,
              duration: 4 + Math.random() * 3,
            }))
          );
          window.setTimeout(() => setFireflies(null), 7000);
        }
      } else {
        progress = expected && e.key.toLowerCase() === KONAMI[0].toLowerCase() ? 1 : 0;
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (!fireflies) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <div className="absolute top-6 left-1/2 -translate-x-1/2 rounded-full bg-dusk/90 px-4 py-2 text-sm text-amber shadow-lg">
        You found the secret bonfire spark ✨
      </div>
      {fireflies.map((f) => (
        <span
          key={f.id}
          className="absolute bottom-0 h-1.5 w-1.5 rounded-full bg-amber shadow-[0_0_8px_2px_rgba(232,163,61,0.8)]"
          style={{
            left: `${f.left}%`,
            animation: `rise ${f.duration}s ease-in ${f.delay}s forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes rise {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
