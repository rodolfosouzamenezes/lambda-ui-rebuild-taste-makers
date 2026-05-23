"use client";

import { useEffect, useState } from "react";

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
  const [isDesktopAccordion, setIsDesktopAccordion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktopAccordion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section id="section-hardware" className="pt-xl pb-xl module-comp hardware-module">
      <div className="container">
        <div className="stack--md">
          <div className="dark-mode titleBlock">
            <div className="positionRight">
              <div className="grid-x grid-margin-x align-middle">
                <div className="cell small-12 medium-7">
                  <div className="titleBlock">
                    <h2 className="h2">The engines of superintelligence</h2>
                  </div>
                </div>
                <div className="cell small-12 medium-6 large-5">
                  <div className="titleBlock">
                    <div className="content">
                      <div className="richtext">
                        Give your team the computational precision to train foundation
                        models and serve inference at global scale.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hardwareAccordionItems">
            {PRODUCTS.map((product, i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={product.title}
                  type="button"
                  className={`hardwareAccordionItem no-ui-button${isActive ? " hardwareActive" : ""}`}
                  aria-expanded={isActive}
                  onClick={() => setActiveIndex(i)}
                >
                  <div
                    className={`hardwareAccordionImage${isActive ? " hardwareActiveImage" : ""}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.title}
                      width={410}
                      height={410}
                      className="hardwareAccordionImg"
                    />
                  </div>
                  <div className="hardwareAccordionItemInner">
                    <div
                      className={`hardwareAccordionTextContent${isActive ? " hardwareActiveTextContent" : ""}`}
                      {...(!isActive && isDesktopAccordion ? { inert: true } : {})}
                    >
                      <h3 className="hardwareAccordionItemTitle">{product.title}</h3>
                      <div
                        className={`hardwareAccordionItemRichText${isActive ? " hardwareActiveRichText" : ""}`}
                      >
                        {product.description}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`hardwareAccordionItemIndicator${isActive ? " hardwareActiveIndicator" : ""}`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="sectionBorder" />
    </section>
  );
}
