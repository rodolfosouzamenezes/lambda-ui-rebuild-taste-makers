"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
  /** Characters that may be duplicated. Defaults to repeatable letters. */
  duplicateChars?: RegExp;
  /** Color variant of the rendered text. */
  variant?: "light" | "dark";
};

/**
 * Recreates lambda.ai hero title glitch:
 * - Periodically duplicates a few characters in the visible string.
 * - Applies the rgbShiftPulse keyframe (text-shadow RGB shift).
 */
export function GlitchTitle({
  text,
  className,
  duplicateChars = /[aeioulnsrtmpu]/i,
  variant = "light",
}: Props) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let mounted = true;
    function scramble() {
      if (!mounted) return;
      const chars = text.split("");
      // pick 1–2 candidate indices that match the regex
      const candidates: number[] = [];
      chars.forEach((c, i) => {
        if (duplicateChars.test(c)) candidates.push(i);
      });
      const out = [...chars];
      const k = 1 + Math.floor(Math.random() * 2);
      const picks = new Set<number>();
      while (picks.size < Math.min(k, candidates.length)) {
        picks.add(candidates[Math.floor(Math.random() * candidates.length)]);
      }
      // Duplicate selected chars
      const sorted = [...picks].sort((a, b) => b - a);
      for (const idx of sorted) out.splice(idx, 0, out[idx]);
      setDisplay(out.join(""));
      // revert quickly to clean state
      setTimeout(() => {
        if (mounted) setDisplay(text);
      }, 140 + Math.random() * 160);
    }
    const id = setInterval(scramble, 3600 + Math.random() * 2400);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, [text, duplicateChars]);

  return (
    <h1
      className={cn(
        "glitch-text font-heading font-semibold leading-[1] tracking-[-0.025em] select-none",
        variant === "dark" ? "text-bg" : "text-fg",
        className
      )}
      aria-label={text}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </h1>
  );
}
