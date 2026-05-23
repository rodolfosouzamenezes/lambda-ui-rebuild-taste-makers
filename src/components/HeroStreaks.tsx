"use client";

import { useEffect, useRef } from "react";

type Streak = {
  x: number;
  y: number;
  vx: number;
  len: number;
  hue: number;
  alpha: number;
  width: number;
};

export function HeroStreaks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let streaks: Streak[] = [];

    const sizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (count: number) => {
      const w = parseFloat(canvas.style.width || "1440");
      const h = parseFloat(canvas.style.height || "820");
      for (let i = 0; i < count; i++) {
        const fromLeft = Math.random() < 0.5;
        streaks.push({
          x: fromLeft ? -200 : w + 200,
          y: h * (0.18 + Math.random() * 0.72),
          vx: (fromLeft ? 1 : -1) * (1.4 + Math.random() * 3.6),
          len: 220 + Math.random() * 320,
          hue: Math.random() * 360,
          alpha: 0.45 + Math.random() * 0.55,
          width: 0.7 + Math.random() * 1.5,
        });
      }
    };

    const render = () => {
      const w = parseFloat(canvas.style.width || "1440");
      const h = parseFloat(canvas.style.height || "820");
      ctx.fillStyle = "rgba(11, 11, 11, 0.18)";
      ctx.fillRect(0, 0, w, h);

      if (streaks.length < 260) spawn(6);

      ctx.lineCap = "round";
      for (const s of streaks) {
        const tailX = s.x - s.len * Math.sign(s.vx);
        const grad = ctx.createLinearGradient(s.x, s.y, tailX, s.y);
        grad.addColorStop(0, `hsla(${s.hue}, 95%, 65%, ${s.alpha})`);
        grad.addColorStop(1, `hsla(${s.hue}, 95%, 65%, 0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.width;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, s.y);
        ctx.stroke();
        s.x += s.vx;
      }
      streaks = streaks.filter((s) =>
        s.vx > 0 ? s.x - s.len < w + 200 : s.x + s.len > -200
      );

      rafRef.current = requestAnimationFrame(render);
    };

    sizeCanvas();
    const onResize = () => sizeCanvas();
    window.addEventListener("resize", onResize);
    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
