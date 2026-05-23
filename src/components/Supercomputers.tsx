import { supercomputerProducts } from "@/lib/content";

export function Supercomputers() {
  return (
    <section className="section-py bg-bg">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <h2 className="lg:col-span-8 text-fg font-semibold leading-[1.1] tracking-[-0.02em] text-[40px] sm:text-[56px] lg:text-[72px]">
            Supercomputers that scale with ambition
          </h2>
          <p className="lg:col-span-4 lg:pt-6 font-mono text-[15px] text-muted max-w-[420px]">
            From one GPU to hundreds of thousands — performance that keeps pace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          <PixelAmbient />
          {supercomputerProducts.map((p) => (
            <article
              key={p.number}
              className="relative border border-divider/60 bg-bg/40 p-8 lg:p-10 min-h-[360px] flex flex-col"
            >
              <p className="font-mono text-[15px] text-fg">
                <span>{p.number}</span>
                <span className="text-purple">/</span>
              </p>
              <h3 className="mt-16 text-fg font-semibold text-[26px] leading-[1.15]">
                {p.title}
              </h3>
              <p className="mt-4 font-mono text-[15px] leading-[1.5] text-muted">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PixelAmbient() {
  // Decorative pixel dots scattered around card edges (deterministic, server-friendly)
  const dots: { x: string; y: string; size: number; hue: number; delay: number }[] = [];
  const seedRand = (n: number) => {
    const x = Math.sin(n) * 10000;
    return x - Math.floor(x);
  };
  for (let i = 0; i < 18; i++) {
    dots.push({
      x: `${(seedRand(i + 1) * 100).toFixed(1)}%`,
      y: `${(seedRand(i + 99) * 100).toFixed(1)}%`,
      size: 3 + Math.round(seedRand(i + 41) * 4),
      hue: Math.round(seedRand(i + 7) * 360),
      delay: seedRand(i + 17) * 2,
    });
  }
  return (
    <div className="pointer-events-none absolute inset-0 -z-0">
      {dots.map((d, i) => (
        <span
          key={i}
          className="pixel-dot absolute"
          style={{
            left: d.x,
            top: d.y,
            width: d.size,
            height: d.size,
            background: `hsl(${d.hue}, 85%, 60%)`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
