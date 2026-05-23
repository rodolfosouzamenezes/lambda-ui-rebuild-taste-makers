"use client";

import { cn } from "@/lib/utils";

type Props = {
  /** Number of stack layers to render (1–4). Higher = more layers visible. */
  layers: 1 | 2 | 3 | 4;
};

const LAYERS = [
  { label: "Purpose-built datacenters", sideLabel: "AI DEVELOPERS" },
  { label: "AI infrastructure", sideLabel: "ENTERPRISE" },
  { label: "Managed services", sideLabel: "SUPERINTELLIGENCE" },
  { label: "Co-engineering", sideLabel: "" },
];

/**
 * The right-side reactive illustration on Built for AI.
 * Renders a 3D-isometric stack of slabs. Each slab is a stylized cuboid drawn in CSS.
 * `layers` controls how many are visible (item 02 → 1, 03 → 2, 04 → 3, 01 → 4 with active dots on top face).
 */
export function IsometricStack({ layers }: Props) {
  // Visible layers come from the BOTTOM of the stack up — top slab is "Purpose-built datacenters"
  // when 4 layers are visible, fewer means we show fewer of the lower slabs.
  // From observation: layers=2 keeps top 2, etc.
  const visible = LAYERS.slice(0, layers);
  const showDots = layers === 4;

  return (
    <div
      className="relative w-full h-full min-h-[420px] flex items-center justify-center select-none"
      aria-hidden="true"
    >
      <div
        className="relative"
        style={{
          width: 420,
          height: 360,
          transformStyle: "preserve-3d",
        }}
      >
        {visible.map((layer, i) => {
          const offsetY = i * 56; // stack downward
          return (
            <div
              key={layer.label}
              className="absolute left-0 right-0 transition-all duration-500 ease-out"
              style={{
                top: offsetY,
                transform: "perspective(1200px) rotateX(58deg) rotateZ(-32deg)",
              }}
            >
              {/* Top face */}
              <div
                className={cn(
                  "relative border border-fg/45 bg-bg/40",
                  showDots && i === 0 && "overflow-hidden"
                )}
                style={{
                  width: 340,
                  height: 200,
                  marginLeft: 40,
                  boxShadow: "0 14px 36px rgba(0,0,0,0.5)",
                }}
              >
                {showDots && i === 0 && <TopFaceDots />}
                <span
                  className="absolute left-3 bottom-3 font-mono text-[11px] text-fg/85 origin-bottom-left"
                  style={{
                    transform: "rotateZ(32deg) rotateX(-58deg)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {layer.label}
                </span>
              </div>
              {/* Side label outside */}
              {layer.sideLabel && (
                <span
                  className="absolute font-mono text-[11px] tracking-wider text-muted"
                  style={{
                    transform: "rotateZ(32deg) rotateX(-58deg)",
                    top: 60,
                    left: 410,
                  }}
                >
                  {layer.sideLabel}
                </span>
              )}
            </div>
          );
        })}
        {/* Connector lines (decorative right) */}
        <div
          className="absolute"
          style={{ right: -8, top: 8, width: 1, height: 280, background: "rgba(231,230,217,0.18)" }}
        />
      </div>
    </div>
  );
}

function TopFaceDots() {
  const rows = 5;
  const cols = 6;
  const dots: { row: number; col: number; hue: number }[] = [];
  let seed = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      seed = (seed * 9301 + 49297) % 233280;
      const r2 = seed / 233280;
      dots.push({
        row: r,
        col: c,
        hue: 80 + (r2 * 240) % 280,
      });
    }
  }
  return (
    <div className="absolute inset-0 p-6">
      <div className="grid h-full" style={{ gridTemplateRows: `repeat(${rows}, 1fr)`, gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 8 }}>
        {dots.map((d, idx) => (
          <span
            key={idx}
            className="pixel-dot rounded-full"
            style={{
              width: 4,
              height: 4,
              alignSelf: "center",
              justifySelf: "center",
              background: `hsl(${d.hue}, 90%, 65%)`,
              animationDelay: `${(idx % 7) * 0.18}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
