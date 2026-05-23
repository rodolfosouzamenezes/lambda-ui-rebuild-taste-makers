"use client";

const PRODUCTS = [
  {
    number: "01",
    title: "Superclusters",
    description:
      "Run on single-tenant NVIDIA GB300 NVL72 clusters with NVIDIA Quantum-2 InfiniBand for ultimate security and performance.",
  },
  {
    number: "02",
    title: "1-Click Clusters™",
    description:
      "Production-ready NVIDIA HGX B200 and H100 GPU clusters fully optimized for distributed AI workloads.",
  },
  {
    number: "03",
    title: "Instances",
    description:
      "Spin up HGX B200 and H100 instances in minutes to test and prototype quickly.",
  },
];

export default function ScaleSection() {
  return (
    <section
      style={{
        background: "var(--color-neutral-900)",
        padding: "clamp(100px, 12vw, 160px) 0",
      }}
    >
      {/* Section border */}
      <div
        style={{
          maxWidth: 1398,
          margin: "0 auto",
          paddingInline: 15,
          borderTop: "1px solid var(--color-neutral-800)",
        }}
      />

      <div
        style={{
          maxWidth: 1398,
          margin: "0 auto",
          paddingInline: 15,
          paddingTop: "clamp(60px, 8vw, 100px)",
        }}
      >
        {/* Title block */}
        <div style={{ maxWidth: "58.33%" }}>
          <h2
            className="font-sans font-semibold"
            style={{
              fontSize: "clamp(2.3rem, 6vw, 4.5rem)",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tighter)",
              color: "var(--color-neutral-100)",
              margin: 0,
            }}
          >
            Supercomputers that scale with ambition
          </h2>
        </div>

        {/* Subtitle with L-bracket */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 20,
            marginTop: 40,
            maxWidth: "58.33%",
          }}
        >
          <div
            style={{
              width: 80,
              height: 30,
              borderLeft: "2px solid var(--color-neutral-800)",
              borderBottom: "2px solid var(--color-neutral-800)",
              flexShrink: 0,
              marginTop: 4,
            }}
          />
          <p
            className="font-mono"
            style={{
              fontSize: "var(--text-base)",
              lineHeight: "var(--leading-relaxed)",
              color: "var(--color-neutral-100)",
              margin: 0,
            }}
          >
            From one GPU to hundreds of thousands — performance that keeps pace.
          </p>
        </div>

        {/* Product cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
            marginTop: 80,
          }}
          className="scale-cards-grid"
        >
          {PRODUCTS.map((product) => (
            <div
              key={product.number}
              className="scale-card"
              style={{
                background: "var(--color-neutral-900)",
                border: "1px solid var(--color-neutral-800)",
                padding: "32px 32px 60px",
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-neutral-100)",
                  marginBottom: 24,
                }}
              >
                {product.number}
                <span style={{ color: "var(--color-ultraviolet-500)" }}>/</span>
              </div>
              <h3
                className="font-sans font-semibold"
                style={{
                  fontSize: 24,
                  lineHeight: "31.2px",
                  letterSpacing: "-0.24px",
                  color: "var(--color-neutral-100)",
                  margin: "0 0 16px 0",
                }}
              >
                {product.title}
              </h3>
              <p
                className="font-mono"
                style={{
                  fontSize: "var(--text-base)",
                  lineHeight: "var(--leading-relaxed)",
                  color: "var(--color-neutral-300)",
                  margin: 0,
                }}
              >
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
