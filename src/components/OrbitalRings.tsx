"use client";

import { useEffect, useRef } from "react";

export function OrbitalRings() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let t = 0;
    function tick() {
      t += 0.0035;
      if (el) {
        el.style.setProperty("--spin", `${t * 50}deg`);
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Five concentric tilted ellipses + a single bright orb at bottom + dotted antenna line
  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-[520px] aspect-square select-none"
      style={{ ["--spin" as string]: "0deg" }}
      aria-hidden="true"
    >
      <svg
        viewBox="-260 -260 520 520"
        className="absolute inset-0 w-full h-full"
        style={{ transform: "rotate(var(--spin))" }}
      >
        <g style={{ transform: "rotate(-18deg)" }}>
          {[80, 110, 142, 180, 220].map((rx, i) => (
            <ellipse
              key={rx}
              cx="0"
              cy="20"
              rx={rx}
              ry={rx * 0.34}
              fill="none"
              stroke={i === 0 ? "#6236f4" : "#e7e6d9"}
              strokeOpacity={0.5 - i * 0.06}
              strokeWidth={1}
            />
          ))}
          {/* Bright orb at bottom of innermost ring */}
          <circle cx="-12" cy="70" r="8" fill="#fff7e8" />
          <circle cx="-12" cy="70" r="14" fill="url(#orbGlow)" />
          {/* Antenna */}
          <line
            x1="-12"
            y1="70"
            x2="60"
            y2="-180"
            stroke="#6236f4"
            strokeOpacity="0.85"
            strokeWidth="0.8"
            strokeDasharray="2 4"
          />
          <polyline
            points="55,-170 60,-180 65,-170"
            fill="none"
            stroke="#ff7a39"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <radialGradient id="orbGlow" cx="0" cy="0" r="1">
            <stop offset="0%" stopColor="#ffeac1" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ffeac1" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
