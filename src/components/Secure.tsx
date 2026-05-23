import { LambdaButtonLink } from "@/components/LambdaButton";
import { OrbitalRings } from "@/components/OrbitalRings";

export function Secure() {
  return (
    <section className="section-py bg-bg">
      <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h2 className="text-fg font-semibold leading-[1.05] tracking-[-0.02em] text-[40px] sm:text-[56px] lg:text-[72px] max-w-[560px]">
            Secure by design.{" "}
            <br className="hidden sm:block" />
            Mission‑critical{" "}
            <br className="hidden sm:block" />
            by default.
          </h2>
          <p className="mt-8 font-mono text-[15px] leading-[1.6] text-muted max-w-[560px]">
            Protect sensitive data with a single-tenant, shared-nothing architecture. Achieve
            production-grade compliance with ISO 27001, ISO 27017, ISO 27701, ISO 22301, and SOC
            2 Type II attestation.
          </p>
          <div className="mt-10">
            <LambdaButtonLink variant="cream" href="/trust">
              Explore the Trust Portal
            </LambdaButtonLink>
          </div>
        </div>
        <div className="order-first lg:order-none">
          <OrbitalRings />
        </div>
      </div>
    </section>
  );
}
