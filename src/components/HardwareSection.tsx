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

export default function HardwareSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="section-hardware" className="hardware-section">
      <div className="hardware-inner">
        <div className="hardware-title-block">
          <div className="hardware-title-left">
            <h2 className="hardware-heading">
              The engines of
              <br />
              superintelligence
            </h2>
          </div>
          <div className="hardware-title-right">
            <p className="hardware-subtitle">
              Give your team the computational precision to train foundation
              models and serve inference at global scale.
            </p>
          </div>
        </div>

        <div className="hardware-accordion">
          {PRODUCTS.map((product, i) => {
            const isActive = activeIndex === i;
            return (
              <button
                key={product.title}
                type="button"
                className={`hardware-card${isActive ? " hardware-card-active" : ""}`}
                aria-expanded={isActive}
                onClick={() => setActiveIndex(i)}
              >
                <div
                  className={`hardware-card-image${isActive ? " hardware-card-image-active" : ""}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.title}
                    width={410}
                    height={410}
                    className="hardware-card-img"
                  />
                </div>

                <div className="hardware-card-inner">
                  <div
                    className={`hardware-card-text${isActive ? " hardware-card-text-active" : ""}`}
                  >
                    <h3 className="hardware-card-title">{product.title}</h3>
                    <div
                      className={`hardware-card-description font-mono${isActive ? " hardware-card-description-active" : ""}`}
                    >
                      {product.description}
                    </div>
                  </div>
                </div>

                <div
                  className={`hardware-indicator${isActive ? " hardware-indicator-active" : ""}`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
