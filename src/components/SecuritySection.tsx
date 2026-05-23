import SecuritySplineViewer from "./SecuritySplineViewer";

export default function SecuritySection() {
  return (
    <section id="section-security" className="pt-xl pb-xl module-comp">
      <div className="container">
        <div className="grid-x grid-margin-x stack">
          <div className="cell small-12 medium-6 large-5 medium-order-2">
            <SecuritySplineViewer />
          </div>

          <div className="cell small-12 medium-6 large-7">
            <div className="dark-mode titleBlock">
              <div>
                <div>
                  <h2 className="h2">Secure by design. Mission‑critical by default.</h2>
                  <div className="content">
                    <div className="richtext">
                      <p>
                        Protect sensitive data with a single-tenant, shared-nothing
                        architecture. Achieve production-grade compliance with ISO 27001,
                        ISO 27017, ISO 27701, ISO 22301, and SOC 2 Type II attestation.
                      </p>
                    </div>
                    <div className="buttonGroup" data-align="left">
                      <a
                        href="https://trust.lambda.ai"
                        className="button"
                        aria-label="Explore the Trust Portal (opens in a new tab)"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Explore the Trust Portal
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectionBorder" />
    </section>
  );
}
