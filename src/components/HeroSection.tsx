"use client";

import { useEffect, useRef, useState } from "react";

const UNICORN_SCENE_URL =
  "https://lambda.ai/hubfs/web-static/motion/superintelligence-II-1.json";
const UNICORN_SCRIPT_URL =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js";

declare global {
  interface Window {
    UnicornStudio?: {
      addScene: (config: Record<string, unknown>) => Promise<unknown>;
      destroy: () => void;
    };
  }
}

type HighlightState = "pixel" | "pixel-no-highlight" | "none";

function HeroBackground({
  onLoad,
  onError,
}: {
  onLoad: () => void;
  onError: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const sceneRef = useRef<unknown>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let destroyed = false;

    function initScene() {
      if (destroyed || !window.UnicornStudio) return;

      window.UnicornStudio.addScene({
        elementId: "unicorn-hero",
        filePath: UNICORN_SCENE_URL,
        fps: 60,
        dpi: 1.5,
        scale: 1,
        production: true,
        lazyLoad: true,
      })
        .then((scene: unknown) => {
          if (destroyed) return;
          sceneRef.current = scene;
          setVisible(true);
          onLoad();
        })
        .catch(() => {
          onError();
        });
    }

    if (window.UnicornStudio) {
      initScene();
    } else {
      const script = document.createElement("script");
      script.src = UNICORN_SCRIPT_URL;
      script.async = true;
      script.onload = initScene;
      script.onerror = onError;
      document.head.appendChild(script);
    }

    return () => {
      destroyed = true;
      try {
        window.UnicornStudio?.destroy();
      } catch {}
    };
  }, [onError, onLoad]);

  return (
    <div className="hero-bg" aria-hidden="true">
      <div
        className={`hero-bg__container${visible ? " hero-bg__container--visible" : ""}`}
        style={{ width: "100%", height: "100%" }}
      >
        <div
          id="unicorn-hero"
          style={{
            position: "relative",
            width: "var(--unicorn-width, 100%)",
            height: "var(--unicorn-height, 100%)",
            "--unicorn-width": "100%",
            "--unicorn-height": "100%",
          } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

function BackgroundAnimation() {
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const unicornCanvas = document.querySelector("#unicorn-hero canvas");
      if (!unicornCanvas) setUseFallback(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (useFallback) return null;

  return <HeroBackground onLoad={() => {}} onError={() => setUseFallback(true)} />;
}

const headingBaseStyle: React.CSSProperties = {
  lineHeight: "var(--leading-none)",
  letterSpacing: "var(--tracking-tighter)",
  color: "var(--color-neutral-100)",
};

const FONT_SWAP_INTRO_MS = 9000;
const FONT_SWAP_SOLO_START_MS = 12000;
const FONT_SWAP_CYCLE_MS = 10800;

type SwapLetterId = "u" | "e" | "o";
type LetterVisualState = {
  fontFamily: string;
  highlight: HighlightState;
};

function highlightToLetterState(highlight: HighlightState): LetterVisualState {
  return {
    fontFamily:
      highlight === "none" ? "var(--font-sans)" : "var(--font-pixel)",
    highlight,
  };
}

const NONE_STATE = highlightToLetterState("none");

const INTRO_EVENTS: { at: number; letter: SwapLetterId; highlight: HighlightState }[] = [
  { at: 0, letter: "u", highlight: "pixel" },
  { at: 0, letter: "e", highlight: "pixel" },
  { at: 0, letter: "o", highlight: "pixel" },
  { at: 2000, letter: "u", highlight: "pixel-no-highlight" },
  { at: 3000, letter: "u", highlight: "none" },
  { at: 4900, letter: "e", highlight: "pixel-no-highlight" },
  { at: 5900, letter: "e", highlight: "none" },
  { at: 7900, letter: "o", highlight: "pixel-no-highlight" },
  { at: 8900, letter: "o", highlight: "none" },
];

const SOLO_EVENTS: { at: number; letter: SwapLetterId; highlight: HighlightState }[] = [
  { at: 0, letter: "u", highlight: "pixel" },
  { at: 1000, letter: "u", highlight: "pixel-no-highlight" },
  { at: 2000, letter: "u", highlight: "none" },
  { at: 2900, letter: "e", highlight: "pixel" },
  { at: 3900, letter: "e", highlight: "pixel-no-highlight" },
  { at: 4900, letter: "e", highlight: "none" },
  { at: 5900, letter: "o", highlight: "pixel" },
  { at: 6900, letter: "o", highlight: "pixel-no-highlight" },
  { at: 7800, letter: "o", highlight: "none" },
];

function applyEvents(
  states: Record<SwapLetterId, LetterVisualState>,
  events: { at: number; letter: SwapLetterId; highlight: HighlightState }[],
  elapsedMs: number,
  offsetMs = 0
) {
  const t = elapsedMs - offsetMs;
  for (const event of events) {
    if (t >= event.at) {
      states[event.letter] = highlightToLetterState(event.highlight);
    }
  }
}

function getAllLetterStates(elapsedMs: number): Record<SwapLetterId, LetterVisualState> {
  const states: Record<SwapLetterId, LetterVisualState> = {
    u: NONE_STATE,
    e: NONE_STATE,
    o: NONE_STATE,
  };

  if (elapsedMs < FONT_SWAP_INTRO_MS) {
    applyEvents(states, INTRO_EVENTS, elapsedMs);
    return states;
  }

  if (elapsedMs < FONT_SWAP_SOLO_START_MS) {
    return states;
  }

  const cycleElapsed = (elapsedMs - FONT_SWAP_SOLO_START_MS) % FONT_SWAP_CYCLE_MS;
  applyEvents(states, SOLO_EVENTS, cycleElapsed);
  return states;
}

const initialLetterStates = getAllLetterStates(0);

function FontSwapIsland({
  letter,
  fontFamily,
  highlight,
}: {
  letter: string;
  fontFamily: string;
  highlight: HighlightState;
}) {
  const islandRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    islandRef.current?.parentElement?.setAttribute("data-highlight", highlight);
  }, [highlight]);

  return (
    <span className="font-swap-island" data-highlight={highlight}>
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          fontFamily: "var(--font-pixel)",
        }}
      >
        {letter}
      </span>
      <span
        ref={islandRef}
        className="_fontSwapIsland"
        style={{ fontFamily }}
      >
        <span>{letter}</span>
      </span>
    </span>
  );
}

function HeroAnimatedHeading() {
  const [letterStates, setLetterStates] = useState<
    Record<SwapLetterId, LetterVisualState>
  >(() =>
    typeof window !== "undefined"
      ? getAllLetterStates(performance.now())
      : initialLetterStates
  );

  useEffect(() => {
    (async () => {
      try {
        const pixelFont = getComputedStyle(document.documentElement)
          .getPropertyValue("--font-pixel")
          .trim()
          .replace(/['"]/g, "");
        if (document.fonts?.load) {
          await document.fonts.load(`1em ${pixelFont}`);
          await document.fonts.ready;
        }
      } catch {}
    })();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const syncStates = (elapsedMs: number) => {
      setLetterStates(getAllLetterStates(elapsedMs));
    };

    syncStates(performance.now());
    const interval = setInterval(() => {
      syncStates(performance.now());
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h1
      className="_heroTitle h1-large font-sans font-semibold"
      style={headingBaseStyle}
    >
      <span className="sr-only">The Superintelligence Cloud</span>
      <span aria-hidden="true">
        The{" "}
        <span className="no-wrap">
          S
          <FontSwapIsland letter="u" {...letterStates.u} />
          perintellig
          <FontSwapIsland letter="e" {...letterStates.e} />
          nce
        </span>
        <br />
        Cl
        <FontSwapIsland letter="o" {...letterStates.o} />
        ud
      </span>
    </h1>
  );
}

export default function HeroSection() {
  return (
    <section
      id="section-home-hero"
      className="pt-xl pb-xl home-hero module-comp"
    >
      <div aria-hidden="true">
        <BackgroundAnimation />
      </div>

      <div
        className="home-hero__content"
        style={{
          position: "relative",
          zIndex: 1,
          isolation: "isolate",
          width: "100%",
        }}
      >
        <p className="hero-eyebrow font-sans font-semibold text-center">
          Supercomputers for training and inference
        </p>

        <h1
          className="_reducedMotionTitle h1-large font-sans font-semibold"
          style={headingBaseStyle}
        >
          <span>
            The Superintelligence <br /> Cloud
          </span>
        </h1>

        <HeroAnimatedHeading />

        <div className="container home-hero__titleContainer">
          <div className="home-hero__buttonGroup">
          <a
            href="#"
            className="font-mono uppercase"
            style={{
              background: "var(--color-neutral-100)",
              color: "var(--color-neutral-900)",
              padding: "17px 36px",
              borderRadius: 0,
              fontSize: "var(--text-sm)",
              letterSpacing: "var(--tracking-widest)",
              boxShadow: "var(--box-shadow-rgb)",
              transition: "box-shadow var(--transition-snappy)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "var(--box-shadow-rgb)";
            }}
          >
            Launch GPU instance
          </a>
          <a
            href="#"
            className="font-mono uppercase"
            style={{
              background: "var(--color-ultraviolet-500)",
              color: "var(--color-neutral-100)",
              padding: "17px 36px",
              borderRadius: 0,
              fontSize: "var(--text-sm)",
              letterSpacing: "var(--tracking-widest)",
              transition: "background var(--transition-snappy)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-ultraviolet-400)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--color-ultraviolet-500)";
            }}
          >
            Talk to our team
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
