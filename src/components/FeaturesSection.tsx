"use client";

import { useState, useCallback } from "react";

/* ----------------------------------------------------------------
   Accordion data
   ---------------------------------------------------------------- */
const ACCORDION_ITEMS = [
  {
    number: "01",
    title: "You bring models. We bring the compute.",
    content:
      "Get complete AI factories integrating high-density power, liquid cooling, and NVIDIA GPUs into one system designed for peak AI performance.",
    locked: true,
  },
  {
    number: "02",
    title: "Your supercomputer. Your rules.",
    content:
      "Accelerate every stage of your AI lifecycle. Train foundation models and serve billions of tokens.",
  },
  {
    number: "03",
    title: "Orchestration, handled.",
    content:
      "Run large-scale AI workloads without the operational burden. We manage your clusters so you can focus on innovation.",
  },
  {
    number: "04",
    title: "Experts included.",
    content:
      "Co-engineer your workloads with the very people building the infrastructure behind the world's most advanced models.",
  },
];

/* ----------------------------------------------------------------
   Isometric datacenter SVG illustration
   ---------------------------------------------------------------- */
function DatacenterIllustration() {
  const layerLabels = [
    "Purpose-built datacenters",
    "AI infrastructure",
    "Managed services",
    "Co-engineering",
  ];
  const sideLabels = ["AI DEVELOPERS", "ENTERPRISE", "SUPERINTELLIGENCE"];
  const layerHeight = 50;
  const gapY = 12;
  const baseX = 60;
  const baseY = 340;
  const isoW = 240;
  const isoH = 140;

  function isoPoint(x: number, y: number, z: number) {
    const px = baseX + (x - y) * 0.866;
    const py = baseY + (x + y) * 0.5 - z;
    return [px, py] as const;
  }

  function drawLayer(index: number) {
    const z = (layerLabels.length - 1 - index) * (layerHeight + gapY);
    const tl = isoPoint(0, 0, z + layerHeight);
    const tr = isoPoint(isoW, 0, z + layerHeight);
    const br = isoPoint(isoW, isoH, z + layerHeight);
    const bl = isoPoint(0, isoH, z + layerHeight);

    const brBottom = isoPoint(isoW, isoH, z);
    const blBottom = isoPoint(0, isoH, z);
    const trBottom = isoPoint(isoW, 0, z);

    const topFace = `${tl[0]},${tl[1]} ${tr[0]},${tr[1]} ${br[0]},${br[1]} ${bl[0]},${bl[1]}`;
    const frontFace = `${bl[0]},${bl[1]} ${br[0]},${br[1]} ${brBottom[0]},${brBottom[1]} ${blBottom[0]},${blBottom[1]}`;
    const rightFace = `${br[0]},${br[1]} ${tr[0]},${tr[1]} ${trBottom[0]},${trBottom[1]} ${brBottom[0]},${brBottom[1]}`;

    const cornerColors = ["#00E6D9", "#6236F4", "#E7E6D9"];
    const cornerColor = cornerColors[index % cornerColors.length];

    const dots: React.ReactNode[] = [];
    for (let gx = 0.15; gx <= 0.85; gx += 0.175) {
      for (let gy = 0.15; gy <= 0.85; gy += 0.175) {
        const dp = isoPoint(isoW * gx, isoH * gy, z + layerHeight);
        dots.push(
          <circle
            key={`${index}-${gx}-${gy}`}
            cx={dp[0]}
            cy={dp[1]}
            r={1.5}
            fill="var(--color-neutral-700)"
            opacity={0.6}
          />
        );
      }
    }

    const labelPos = isoPoint(isoW * 0.5, isoH * 0.5, z + layerHeight);

    return (
      <g key={index}>
        <polygon points={frontFace} fill="#1a1a1a" stroke="var(--color-neutral-800)" strokeWidth={0.5} />
        <polygon points={rightFace} fill="#141414" stroke="var(--color-neutral-800)" strokeWidth={0.5} />
        <polygon points={topFace} fill="#0f0f0f" stroke="var(--color-neutral-800)" strokeWidth={0.5} />
        {dots}
        <circle cx={tl[0]} cy={tl[1]} r={3} fill={cornerColor} opacity={0.8} />
        <text
          x={labelPos[0]}
          y={labelPos[1] + 4}
          textAnchor="middle"
          fill="var(--color-neutral-400)"
          fontSize={8}
          fontFamily="var(--font-mono)"
        >
          {layerLabels[index]}
        </text>
      </g>
    );
  }

  const sideLabelX = isoPoint(isoW, 0, 0)[0] + 40;

  return (
    <svg
      viewBox="0 0 500 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-label="Isometric datacenter stack illustration showing four layers: Purpose-built datacenters, AI infrastructure, Managed services, and Co-engineering"
      role="img"
    >
      {layerLabels.map((_, i) => drawLayer(i))}
      {sideLabels.map((label, i) => (
        <text
          key={label}
          x={sideLabelX}
          y={baseY - 200 + i * 70}
          fill="var(--color-neutral-400)"
          fontSize={9}
          fontFamily="var(--font-mono)"
          letterSpacing="0.05em"
        >
          {label}
        </text>
      ))}
    </svg>
  );
}

/* ----------------------------------------------------------------
   FeaturesSection
   ---------------------------------------------------------------- */
export default function FeaturesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = useCallback((index: number) => {
    if (ACCORDION_ITEMS[index].locked) return;
    setOpenIndex(index);
  }, []);

  return (
    <section
      id="section-features"
      style={{
        background: "var(--color-neutral-900)",
        padding: "clamp(100px, 12vw, 160px) 0",
      }}
    >
      <div
        style={{
          maxWidth: 1398,
          margin: "0 auto",
          paddingInline: 15,
        }}
      >
        {/* Section heading */}
        <h2
          className="font-sans font-semibold"
          style={{
            fontSize: "clamp(2.3rem, 6vw, 4.5rem)",
            lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-tighter)",
            color: "var(--color-neutral-100)",
            maxWidth: "58.33%",
          }}
        >
          <span className="block lg:hidden" style={{ maxWidth: "100%" }}>
            Built for AI. Ready for superintelligence.
          </span>
          <span className="hidden lg:block">
            Built for AI. Ready for superintelligence.
          </span>
        </h2>

        {/* Grid: accordion + illustration */}
        <div
          className="features-grid"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.875rem",
            marginTop: "var(--space-sm)",
          }}
        >
          {/* Left: accordion */}
          <div className="features-accordion">
            {ACCORDION_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.number}
                  className="accordionItem"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderBottom: "1px solid var(--color-neutral-800)",
                    padding: "35px 0",
                    columnGap: "clamp(20px, 5vw, 45px)",
                    ...(i === 0
                      ? { borderTop: "1px solid var(--color-neutral-800)" }
                      : {}),
                  }}
                >
                  {/* Number column */}
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2.15rem)",
                      color: "var(--color-neutral-100)",
                      flexShrink: 0,
                      fontWeight: "var(--font-weight-regular)" as string,
                    }}
                    aria-hidden="true"
                  >
                    {item.number}
                    <span style={{ color: "var(--color-ultraviolet-500)" }}>
                      /
                    </span>
                  </div>

                  {/* Content column */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ margin: 0 }}>
                      <button
                        type="button"
                        onClick={() => handleToggle(i)}
                        aria-expanded={isOpen}
                        data-locked={item.locked || undefined}
                        style={{
                          all: "unset",
                          display: "flex",
                          width: "100%",
                          alignItems: "flex-start",
                          cursor: item.locked ? "default" : "pointer",
                          boxSizing: "border-box",
                        }}
                      >
                        <span
                          className="font-sans font-semibold"
                          style={{
                            fontSize: "clamp(1.5rem, 3vw, 2.15rem)",
                            lineHeight: "var(--leading-snug)",
                            letterSpacing: "var(--tracking-tight)",
                            color: "var(--color-neutral-100)",
                            flex: 1,
                          }}
                        >
                          {item.title}
                        </span>
                        {!item.locked && (
                          <span
                            aria-hidden="true"
                            style={{
                              fontSize: "1.5rem",
                              fontWeight: 300,
                              color: "var(--color-neutral-100)",
                              marginLeft: "1rem",
                              flexShrink: 0,
                              lineHeight: 1,
                            }}
                          >
                            {isOpen ? "−" : "+"}
                          </span>
                        )}
                      </button>
                    </h3>

                    <div
                      className={
                        isOpen
                          ? "accordionItemContent accordionItemContentOpen"
                          : "accordionItemContent"
                      }
                      role="region"
                      {...(!isOpen ? { inert: true } : {})}
                    >
                      <div
                        className="font-mono"
                        style={{
                          fontSize: "var(--text-base)",
                          lineHeight: "var(--leading-relaxed)",
                          color: "var(--color-neutral-300)",
                        }}
                      >
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: illustration */}
          <div className="features-illustration">
            <DatacenterIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
