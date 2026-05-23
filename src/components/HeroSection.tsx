"use client";

import { useEffect, useRef, useState } from "react";

/* ----------------------------------------------------------------
   UnicornStudio background
   ---------------------------------------------------------------- */
declare global {
  interface Window {
    UnicornStudio?: {
      addScene: (config: Record<string, unknown>) => Promise<unknown>;
      destroy: () => void;
    };
  }
}

function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<unknown>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let destroyed = false;

    function initScene() {
      if (destroyed || !containerRef.current || !window.UnicornStudio) return;
      window.UnicornStudio.addScene({
        elementId: "unicorn-hero",
        fps: 30,
        dpi: 1.5,
        scale: 1,
        projectId: "https://lambda",
        lazyLoad: true,
        filePath:
          "https://cdn.unicorn.studio/v1.5.2/scenes/https://lambda/production.json",
        altFilePath:
          "https://assets.unicorn.studio/v1.3.3/scenes/https://lambda/production.json",
      })
        .then((scene: unknown) => {
          if (!destroyed) sceneRef.current = scene;
        })
        .catch(() => {});
    }

    if (window.UnicornStudio) {
      initScene();
    } else {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js";
      script.onload = initScene;
      document.head.appendChild(script);
    }

    return () => {
      destroyed = true;
      try {
        window.UnicornStudio?.destroy();
      } catch {}
    };
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        mask: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMask:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
      aria-hidden="true"
    >
      <div style={{ width: "100%", height: "100%" }}>
        <div
          id="unicorn-hero"
          style={{
            position: "relative",
            width: "var(--unicorn-width, 100%)",
            height: "var(--unicorn-height, 100%)",
          }}
        />
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------
   Canvas fallback — animated diagonal light streaks
   ---------------------------------------------------------------- */
function CanvasFallback() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let animId: number;

    const colors = [
      [255, 160, 50],
      [255, 200, 80],
      [255, 220, 120],
      [0, 230, 217],
      [80, 180, 255],
      [98, 54, 244],
      [160, 120, 255],
      [255, 100, 60],
      [200, 180, 140],
      [231, 230, 217],
    ];

    const streaks = Array.from({ length: 80 }, (_, i) => {
      const yPos = 0.1 + Math.random() * 0.8;
      const color = colors[i % colors.length];
      const distFromCenter = Math.abs(yPos - 0.45);
      const curveDir = yPos < 0.45 ? 1 : -1;
      return {
        yBase: yPos,
        xStart: -0.15 - Math.random() * 0.4,
        speed: 0.2 + Math.random() * 0.6,
        offset: Math.random() * 100,
        curve: curveDir * (0.03 + distFromCenter * 0.4),
        opacity: distFromCenter < 0.2
          ? 0.12 + Math.random() * 0.25
          : 0.05 + Math.random() * 0.12,
        width: distFromCenter < 0.2
          ? 0.5 + Math.random() * 2.5
          : 0.3 + Math.random() * 1.2,
        color,
      };
    });

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = canvas!.offsetWidth * dpr;
      canvas!.height = canvas!.offsetHeight * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    let time = 0;

    function draw() {
      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      ctx!.clearRect(0, 0, w, h);
      time += 0.003;

      const focusY = h * 0.45;

      for (const s of streaks) {
        const pulse = 0.5 + 0.5 * Math.sin(time * s.speed * 4 + s.offset);
        const alpha = s.opacity * (0.5 + pulse * 0.5);

        const y0 = s.yBase * h;
        const x0 = s.xStart * w;

        ctx!.beginPath();
        ctx!.moveTo(x0, y0);

        const cp1x = w * 0.3;
        const cp1y = y0 + s.curve * h * 0.5;
        const cp2x = w * 0.6;
        const cp2y = focusY + (y0 - focusY) * 0.3;

        ctx!.bezierCurveTo(
          cp1x,
          cp1y,
          cp2x,
          cp2y,
          w * 1.15,
          focusY + (y0 - focusY) * 0.15
        );

        const [r, g, b] = s.color;

        const grad = ctx!.createLinearGradient(x0, y0, w, focusY);
        grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
        grad.addColorStop(0.2, `rgba(${r},${g},${b},${alpha * 0.3})`);
        grad.addColorStop(0.5, `rgba(${r},${g},${b},${alpha})`);
        grad.addColorStop(0.8, `rgba(${r},${g},${b},${alpha * 0.6})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);

        ctx!.strokeStyle = grad;
        ctx!.lineWidth = s.width;
        ctx!.stroke();
      }

      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 0,
        mask: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMask:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
      aria-hidden="true"
    />
  );
}

/* ----------------------------------------------------------------
   Background wrapper — tries UnicornStudio, falls back to canvas
   ---------------------------------------------------------------- */
function BackgroundAnimation() {
  const [useFallback, setUseFallback] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      const unicornCanvas = document.querySelector(
        "#unicorn-hero canvas"
      );
      if (!unicornCanvas) setUseFallback(true);
    }, 4000);
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <>
      {!useFallback && <HeroBackground />}
      {useFallback && <CanvasFallback />}
    </>
  );
}

/* ----------------------------------------------------------------
   Font-swap island — single swappable letter
   ---------------------------------------------------------------- */
function FontSwapIsland({
  letter,
  isPixel,
}: {
  letter: string;
  isPixel: boolean;
}) {
  return (
    <span className="font-swap-island" style={{ position: "relative" }}>
      <span
        style={{
          fontFamily: "var(--font-pixel)",
          position: "absolute",
          visibility: "hidden",
        }}
        aria-hidden="true"
      >
        {letter}
      </span>
      <span
        style={{
          fontFamily: isPixel ? "var(--font-pixel)" : "var(--font-sans)",
        }}
      >
        {letter}
      </span>
    </span>
  );
}

/* ----------------------------------------------------------------
   Build segments — wraps u, e, a in swap islands
   ---------------------------------------------------------------- */
type Segment =
  | { type: "text"; value: string }
  | { type: "swap"; letter: string };

function buildSegments(text: string): Segment[] {
  const swapLetters = new Set(["u", "e", "a"]);
  const segments: Segment[] = [];
  let buffer = "";

  for (const char of text) {
    if (swapLetters.has(char.toLowerCase())) {
      if (buffer) {
        segments.push({ type: "text", value: buffer });
        buffer = "";
      }
      segments.push({ type: "swap", letter: char });
    } else {
      buffer += char;
    }
  }
  if (buffer) segments.push({ type: "text", value: buffer });
  return segments;
}

const HEADING_TEXT = "Supercomputers for training and inference";
const headingSegments = buildSegments(HEADING_TEXT);

const headingBaseStyle: React.CSSProperties = {
  lineHeight: "var(--leading-none)",
  letterSpacing: "var(--tracking-tighter)",
  color: "var(--color-neutral-100)",
};

/* ----------------------------------------------------------------
   HeroSection
   ---------------------------------------------------------------- */
export default function HeroSection() {
  const [pixelActive, setPixelActive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const interval = setInterval(() => {
      setPixelActive(true);
      setTimeout(() => setPixelActive(false), 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="section-home-hero"
      className="relative flex flex-col items-center justify-center text-center"
      style={{
        minHeight: "calc(100dvh - 100px)",
        background: "var(--color-neutral-900)",
        padding: "clamp(100px, 12vw, 160px) 0",
      }}
    >
      <BackgroundAnimation />

      <div className="relative" style={{ zIndex: 1 }}>
        {/* Eyebrow */}
        <p className="hero-eyebrow font-sans font-semibold text-center">
          The Superintelligence Cloud
        </p>

        {/* sr-only fallback */}
        <span className="sr-only">
          Supercomputers for training and inference
        </span>

        {/* Static heading — shown when prefers-reduced-motion */}
        <h1
          className="_reducedMotionTitle hero-heading font-sans font-semibold"
          style={headingBaseStyle}
        >
          {HEADING_TEXT}
        </h1>

        {/* Animated heading */}
        <h1
          className="_heroTitle hero-heading font-sans font-semibold"
          aria-hidden="true"
          style={headingBaseStyle}
        >
          {headingSegments.map((seg, i) =>
            seg.type === "text" ? (
              <span key={i}>{seg.value}</span>
            ) : (
              <FontSwapIsland
                key={i}
                letter={seg.letter}
                isPixel={pixelActive}
              />
            )
          )}
        </h1>

        {/* CTA Buttons */}
        <div
          className="relative flex flex-row justify-center"
          style={{
            zIndex: 1,
            gap: "var(--space-2xs)",
            marginTop: "50px",
          }}
        >
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
              e.currentTarget.style.background =
                "var(--color-ultraviolet-400)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "var(--color-ultraviolet-500)";
            }}
          >
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  );
}
