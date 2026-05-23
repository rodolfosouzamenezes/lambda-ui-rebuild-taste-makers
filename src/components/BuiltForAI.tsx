"use client";

import { useState } from "react";
import { builtForAIFeatures } from "@/lib/content";
import { IsometricStack } from "@/components/IsometricStack";
import { PlusIcon, MinusIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

// Mapping from open accordion index (0..3) to stack layer count (1..4).
// Observed: item 02 → 1 layer, item 03 → 2 layers, item 04 → 3 layers, item 01 → 4 layers (with dots).
const LAYER_MAP: Record<number, 1 | 2 | 3 | 4> = { 0: 4, 1: 1, 2: 2, 3: 3 };

export function BuiltForAI() {
  const [open, setOpen] = useState<number>(0);
  const layerCount = LAYER_MAP[open];

  return (
    <section className="section-py bg-bg">
      <div className="container-page">
        <h2 className="text-fg font-semibold leading-[1.1] tracking-[-0.02em] text-[40px] sm:text-[56px] lg:text-[72px] max-w-[920px]">
          Built for AI. Ready for superintelligence.
        </h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12 lg:gap-20 items-start">
          {/* Accordion */}
          <div className="flex flex-col">
            {builtForAIFeatures.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div key={item.number} className="border-t border-divider/70 last:border-b">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start gap-6 sm:gap-10 py-6 text-left group"
                  >
                    <span className="font-mono text-[18px] text-fg tabular-nums">
                      <span>{item.number}</span>
                      <span className="text-purple">/</span>
                    </span>
                    <span className="flex-1 text-fg font-semibold text-[22px] sm:text-[28px] leading-[1.18]">
                      {item.title}
                    </span>
                    <span className="text-fg/80 flex-none mt-2">
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] pb-8" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="font-mono text-[15px] leading-[1.5] text-muted max-w-[640px] pl-14 sm:pl-[78px]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reactive stack illustration */}
          <div className="hidden lg:block">
            <IsometricStack layers={layerCount} />
          </div>
          <div className="lg:hidden">
            <IsometricStack layers={layerCount} />
          </div>
        </div>
      </div>
    </section>
  );
}
