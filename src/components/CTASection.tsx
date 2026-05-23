export default function CTASection() {
  return (
    <section id="section-cta" className="pt-xl pb-xl module-comp cta-section">
      <div className="container">
        <div className="stack--md">
          <div className="light-mode titleBlock">
            <div className="positionRight">
              <div className="grid-x grid-margin-x align-middle">
                <div className="cell small-12 medium-7">
                  <div className="titleBlock">
                    <h2 className="h2" data-variant="highlight-dark">
                      Join the race to superintelligence
                    </h2>
                  </div>
                </div>
                <div className="cell small-12 medium-6 large-5">
                  <div className="titleBlock">
                    <div className="content noContent">
                      <div className="buttonGroup" data-align="left">
                        <a
                          href="https://lambda.ai/sign-up"
                          className="button button--secondary"
                          aria-label="Launch an instance"
                        >
                          Launch an instance
                        </a>
                        <a
                          href="https://lambda.ai/talk-to-our-team"
                          className="button"
                          aria-label="Talk to our team"
                        >
                          Talk to our team
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
