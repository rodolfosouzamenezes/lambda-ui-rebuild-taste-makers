"use client";

import { useState, useCallback } from "react";
import AccordionLevelAnimation from "./AccordionLevelAnimation";

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

export default function FeaturesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = useCallback(
    (index: number) => {
      if (ACCORDION_ITEMS[index].locked && openIndex === index) return;
      setOpenIndex(index);
    },
    [openIndex]
  );

  return (
    <section id="section-features" className="pt-xl pb-xl module-comp">
      <div className="container">
        <div className="stack--md">
          <div className="dark-mode titleBlock">
            <div className="grid-x grid-margin-x">
              <div className="cell small-12 medium-7">
                <div>
                  <h2 className="h2">
                    Built for AI. Ready for superintelligence.
                  </h2>
                  <div className="content noContent" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid-x grid-margin-x">
            <div className="cell small-12 medium-7">
              <div className="accordion">
                {ACCORDION_ITEMS.map((item, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div key={item.number} className="accordionItem">
                      <div className="accordionItemNumberColumn">
                        <span
                          className="h5 _accordionActiveItemNumber_1wr90_1"
                          aria-hidden="true"
                        >
                          {item.number}
                        </span>
                      </div>
                      <div className="accordionItemContentColumn">
                        <h3 className="accordionItemHeader">
                          <button
                            type="button"
                            className="accordionItemHeaderButton"
                            aria-expanded={isOpen}
                            {...(item.locked ? { "data-locked": "true" } : {})}
                            onClick={() => handleToggle(i)}
                          >
                            <span className="accordionItemTitle">
                              {item.title}
                            </span>
                            <span
                              className="accordionToggle"
                              aria-hidden="true"
                            >
                              {isOpen ? "−" : "+"}
                            </span>
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
                          <div className="accordionItemRich">
                            <div>{item.content}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="cell small-12 medium-5">
              <div className="_animationContainer_1wr90_9">
                <AccordionLevelAnimation activeIndex={openIndex} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionBorder" />
    </section>
  );
}
