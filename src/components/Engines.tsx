"use client";

import Image from "next/image";
import { useState } from "react";
import { gpuProducts } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Engines() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-py bg-bg">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <h2 className="lg:col-span-7 text-fg font-semibold leading-[1.1] tracking-[-0.02em] text-[40px] sm:text-[56px] lg:text-[72px]">
            The engines of superintelligence
          </h2>
          <p className="lg:col-span-5 lg:pt-6 font-mono text-[15px] text-muted max-w-[480px]">
            Give your team the computational precision to train foundation models and serve
            inference at global scale.
          </p>
        </div>

        {/* Desktop: horizontal accordion */}
        <div className="hidden md:flex gap-2 h-[520px] lg:h-[620px]">
          {gpuProducts.map((g, i) => {
            const isActive = active === i;
            return (
              <button
                type="button"
                key={g.label}
                onClick={() => setActive(i)}
                className={cn(
                  "relative overflow-hidden border border-divider/60 bg-bg/40 text-left transition-[flex] duration-500 ease-out flex-none",
                  isActive ? "flex-[3]" : "flex-[0.5]"
                )}
                aria-pressed={isActive}
              >
                <Image
                  src={g.image}
                  alt={g.alt}
                  fill
                  sizes={isActive ? "60vw" : "12vw"}
                  className={cn(
                    "object-cover object-center transition-opacity duration-500",
                    isActive ? "opacity-100" : "opacity-25"
                  )}
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent pointer-events-none" />

                {/* Active card content */}
                <div
                  className={cn(
                    "absolute inset-0 p-8 lg:p-10 flex flex-col justify-end transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}
                >
                  <h3 className="text-fg font-semibold text-[26px] leading-[1.1]">
                    {g.label}
                  </h3>
                  <p className="mt-3 font-mono text-[15px] leading-[1.5] text-muted max-w-[440px]">
                    {g.description}
                  </p>
                </div>

                {/* Collapsed strip label (vertical) */}
                <div
                  className={cn(
                    "absolute inset-0 flex items-end justify-center p-6 transition-opacity duration-300",
                    isActive ? "opacity-0" : "opacity-100"
                  )}
                >
                  <p className="text-fg font-semibold text-[18px] leading-[1.15] whitespace-pre-line text-center">
                    {g.label.replace("NVIDIA ", "NVIDIA\n")}
                  </p>
                </div>

                {/* Active underline accent */}
                {isActive && (
                  <span className="absolute left-0 right-0 bottom-0 h-[6px] bg-purple" />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile: stacked tall cards */}
        <div className="md:hidden flex flex-col gap-4">
          {gpuProducts.map((g) => (
            <article
              key={g.label}
              className="relative h-[440px] border border-divider/60 overflow-hidden"
            >
              <Image src={g.image} alt={g.alt} fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-fg font-semibold text-[22px] leading-[1.1]">{g.label}</h3>
                <p className="mt-3 font-mono text-[14px] leading-[1.5] text-muted">
                  {g.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
