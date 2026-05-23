"use client";

import { useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import type { DotLottie } from "@lottiefiles/dotlottie-web";

const ANIMATION_SRC =
  "https://lambda.ai/hubfs/web-static/motion/new_layers-all-steps.json";

/** Frame segments per accordion item — matches lambda.ai AccordionLevelAnimationIsland. */
const FRAME_SEGMENTS = [
  { start: 180, mid: 209, end: 239 },
  { start: 120, mid: 149, end: 179 },
  { start: 60, mid: 89, end: 119 },
  { start: 0, mid: 29, end: 59 },
] as const;

type AccordionLevelAnimationProps = {
  activeIndex: number;
};

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function AccordionLevelAnimation({
  activeIndex,
}: AccordionLevelAnimationProps) {
  const dotLottieRef = useRef<DotLottie | null>(null);
  const committedIndexRef = useRef(0);
  const pendingTransitionRef = useRef(false);
  const activeIndexRef = useRef(activeIndex);

  activeIndexRef.current = activeIndex;

  const clampedIndex = Math.max(
    0,
    Math.min(activeIndex, FRAME_SEGMENTS.length - 1)
  );

  useEffect(() => {
    const dotLottie = dotLottieRef.current;
    if (!dotLottie?.isLoaded) return;
    if (committedIndexRef.current === clampedIndex) return;

    const previousSegment = FRAME_SEGMENTS[committedIndexRef.current];
    if (!previousSegment) return;

    if (prefersReducedMotion()) {
      const nextSegment = FRAME_SEGMENTS[clampedIndex];
      dotLottie.setSegment(nextSegment.start, nextSegment.end);
      dotLottie.setFrame(nextSegment.mid);
      committedIndexRef.current = clampedIndex;
      return;
    }

    pendingTransitionRef.current = true;
    dotLottie.setSegment(previousSegment.mid, previousSegment.end);
    dotLottie.setFrame(previousSegment.mid);
    dotLottie.play();
  }, [clampedIndex]);

  const handleDotLottieRef = (dotLottie: DotLottie | null) => {
    if (!dotLottie) {
      dotLottieRef.current = null;
      return;
    }

    dotLottieRef.current = dotLottie;

    const onLoad = () => {
      const index = activeIndexRef.current;
      const segment = FRAME_SEGMENTS[index];
      if (!segment) return;

      committedIndexRef.current = index;

      if (prefersReducedMotion()) {
        dotLottie.setSegment(segment.start, segment.end);
        dotLottie.setFrame(segment.mid);
        return;
      }

      dotLottie.setSpeed(2);
      dotLottie.setSegment(segment.start, segment.mid);
      dotLottie.setFrame(segment.start);
      dotLottie.play();
    };

    const onComplete = () => {
      if (!pendingTransitionRef.current) return;

      const index = activeIndexRef.current;
      const segment = FRAME_SEGMENTS[index];
      if (!segment) return;

      pendingTransitionRef.current = false;
      committedIndexRef.current = index;
      dotLottie.setSegment(segment.start, segment.mid);
      dotLottie.setFrame(segment.start);
      dotLottie.play();
    };

    dotLottie.addEventListener("load", onLoad);
    dotLottie.addEventListener("complete", onComplete);

    if (dotLottie.isLoaded) onLoad();
  };

  return (
    <DotLottieReact
      src={ANIMATION_SRC}
      loop={false}
      autoplay={false}
      renderConfig={{ autoResize: true }}
      className="features-lottie-player"
      dotLottieRefCallback={handleDotLottieRef}
    />
  );
}
