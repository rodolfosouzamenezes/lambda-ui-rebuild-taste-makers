export default function CTASection() {
  return (
    <section
      style={{
        background: "var(--color-neutral-100)",
        padding: "clamp(100px, 12vw, 160px) 0",
      }}
    >
      <div
        style={{
          maxWidth: 1398,
          margin: "0 auto",
          paddingInline: 15,
          textAlign: "center",
        }}
      >
        <h2
          className="font-sans font-semibold"
          style={{
            fontSize: "clamp(2.3rem, 6vw, 4.5rem)",
            lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-tighter)",
            color: "var(--color-neutral-900)",
            margin: "0 auto",
            maxWidth: 800,
          }}
        >
          Join the race to superintelligence
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "var(--space-2xs)",
            marginTop: 50,
            flexWrap: "wrap",
          }}
        >
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
              textDecoration: "none",
              transition: "background var(--transition-snappy)",
            }}
          >
            Launch an instance
          </a>
          <a
            href="#"
            className="font-mono uppercase"
            style={{
              background: "var(--color-neutral-900)",
              color: "var(--color-neutral-100)",
              padding: "17px 36px",
              borderRadius: 0,
              fontSize: "var(--text-sm)",
              letterSpacing: "var(--tracking-widest)",
              textDecoration: "none",
              transition: "background var(--transition-snappy)",
            }}
          >
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  );
}
