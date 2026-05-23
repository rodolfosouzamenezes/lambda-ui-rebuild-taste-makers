"use client";

import { useState } from "react";

const PRODUCTS = [
  {
    title: "NVIDIA VR200 NVL72",
    description: "Rack-scale systems optimized for agentic AI.",
    image: "https://lambda.ai/hubfs/VR200.jpg",
  },
  {
    title: "NVIDIA GB300 NVL72",
    description: "Rack-scale systems optimized for AI reasoning",
    image: "https://lambda.ai/hubfs/gb300.png",
  },
  {
    title: "NVIDIA HGX B300",
    description: "Peak performance per watt for the largest training runs",
    image: "https://lambda.ai/hubfs/NVIDIA%20HGX%20B300%20(1).png",
  },
  {
    title: "NVIDIA HGX B200",
    description: "Versatile fine-tuning and inference",
    image: "https://lambda.ai/hubfs/b200.png",
  },
];

const SMOOTH = "0.4s cubic-bezier(0.6, 0, 0.4, 1)";

export default function HardwareSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="section-hardware"
      style={{
        background: "var(--color-neutral-1000)",
        padding: "clamp(100px, 12vw, 160px) 15px",
      }}
    >
      <div style={{ maxWidth: 1398, margin: "0 auto" }}>
        {/* Title block */}
        <div className="hardware-title-block">
          <div className="hardware-title-left">
            <h2
              className="font-sans font-semibold"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1.1,
                letterSpacing: "var(--tracking-tight)",
                color: "var(--color-neutral-100)",
                margin: 0,
              }}
            >
              The engines of
              <br />
              superintelligence
            </h2>
          </div>
          <div className="hardware-title-right">
            <p
              className="font-mono"
              style={{
                fontSize: "var(--text-base)",
                lineHeight: "var(--leading-relaxed)",
                color: "var(--color-neutral-100)",
                margin: 0,
              }}
            >
              Give your team the computational precision to train foundation
              models and serve inference at global scale.
            </p>
          </div>
        </div>

        {/* Horizontal accordion */}
        <div className="hardware-accordion">
          {PRODUCTS.map((product, i) => {
            const isActive = activeIndex === i;
            return (
              <button
                key={product.title}
                type="button"
                className="hardware-card"
                aria-expanded={isActive}
                onClick={() => setActiveIndex(i)}
                style={{
                  position: "relative",
                  background: "var(--color-neutral-1000)",
                  border: "1px solid var(--color-neutral-800)",
                  cursor: "pointer",
                  flex: isActive ? "1 1 46%" : "1 1 240px",
                  transition: `flex-basis ${SMOOTH}`,
                  padding: 0,
                  textAlign: "left",
                  overflow: "visible",
                }}
              >
                {/* Image wrapper */}
                <div
                  className="hardware-card-image"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    overflow: "hidden",
                    mixBlendMode: isActive ? "normal" : "luminosity",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.title}
                    width={410}
                    height={410}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                  />
                </div>

                {/* Text content block */}
                <div
                  className="hardware-card-text"
                  style={{
                    position: "relative",
                    width: "100%",
                    padding: 40,
                    background: "var(--color-neutral-1000)",
                    opacity: 0.9,
                    boxSizing: "border-box",
                    transition: `height ${SMOOTH} 0.3s`,
                  }}
                >
                  <h3
                    className="font-sans font-semibold"
                    style={{
                      fontSize: 24,
                      lineHeight: "31.2px",
                      letterSpacing: "-0.24px",
                      color: "var(--color-neutral-100)",
                      margin: "0 0 -10px 0",
                    }}
                  >
                    {product.title}
                  </h3>

                  <div
                    className="hardware-card-description font-mono"
                    style={{
                      fontSize: 16,
                      lineHeight: "24px",
                      color: "var(--color-neutral-400)",
                      opacity: isActive ? 1 : 0,
                      visibility: isActive ? "visible" : "hidden",
                      transform: isActive
                        ? "translateY(0)"
                        : "translateY(-20px)",
                      transition: `opacity ${SMOOTH} 0.5s, transform ${SMOOTH} 0.5s`,
                    }}
                  >
                    {product.description}
                  </div>
                </div>

                {/* Bottom indicator bar */}
                <div
                  className="hardware-indicator"
                  style={{
                    width: "calc(100% + 2px)",
                    height: 10,
                    marginLeft: -1,
                    marginTop: 8,
                    background: isActive
                      ? "var(--color-ultraviolet-500)"
                      : "var(--color-neutral-100)",
                    transition: `background-color ${SMOOTH}`,
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
