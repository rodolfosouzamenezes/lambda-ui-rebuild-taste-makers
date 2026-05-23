export default function SecuritySection() {
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
            Secure by design.
            <br />
            Mission‑critical by default.
          </h2>
        </div>

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
            Protect sensitive data with a single-tenant, shared-nothing
            architecture. Achieve production-grade compliance with ISO 27001,
            ISO 27017, ISO 27701, ISO 22301, and SOC 2 Type II attestation.
          </p>
        </div>

        <div style={{ marginTop: 40 }}>
          <a
            href="#"
            className="font-mono uppercase"
            style={{
              fontSize: "var(--text-sm)",
              letterSpacing: "var(--tracking-widest)",
              color: "var(--color-neutral-100)",
              textDecoration: "none",
              borderBottom: "1px solid var(--color-neutral-100)",
              paddingBottom: 4,
              transition: "opacity var(--transition-snappy)",
            }}
          >
            Explore the Trust Portal
          </a>
        </div>
      </div>
    </section>
  );
}
