"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const FOOTER_LOGO =
  "https://lambda.ai/hubfs/raw_assets/Lambda%20Marketing%20Website/122/js_client_assets/assets/logo-white-amFAN7ru.svg";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/lambda-cloud/",
    label: "Lambda on LinkedIn",
    icon: "https://lambda.ai/hubfs/raw_assets/Lambda%20Marketing%20Website/122/js_client_assets/assets/linkedin-608YWfcb.svg",
  },
  {
    href: "https://x.com/LambdaAPI",
    label: "Lambda on X (Twitter)",
    icon: "https://lambda.ai/hubfs/raw_assets/Lambda%20Marketing%20Website/122/js_client_assets/assets/x-Dm1IIASF.svg",
  },
  {
    href: "https://www.youtube.com/@lambda-ai/",
    label: "Lambda on YouTube",
    icon: "https://lambda.ai/hubfs/raw_assets/Lambda%20Marketing%20Website/122/js_client_assets/assets/youtube-BUg7SWc3.svg",
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const lines = footer.querySelector(".footerLines");
    if (!lines) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lines.classList.add("footerLinesVisible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="py-xl footer">
      <div className="sectionLabel" aria-hidden="true">
        <div className="container">
          <span>FOOTER</span>
        </div>
      </div>

      <div className="container">
        <nav aria-label="Footer">
          <div className="grid-x grid-margin-x">
            <div className="cell small-12 medium-4">
              <h2 className="title">AI FACTORIES</h2>
              <div className="grid-x">
                <div className="cell small-6 medium-6">
                  <h3 className="heading">For every mission</h3>
                  <ul className="links">
                    <li>
                      <a href="https://lambda.ai/superintelligence" aria-label="Superintelligence">
                        Superintelligence
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/enterprise" aria-label="Enterprise">
                        Enterprise
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/government" aria-label="Government">
                        Government
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/instances" aria-label="Startups and researchers">
                        Startups and researchers
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="cell small-6 medium-6">
                  <h3 className="heading">Foundations</h3>
                  <ul className="links">
                    <li>
                      <a href="https://lambda.ai/ai-infrastructure" aria-label="AI infrastructure">
                        AI infrastructure
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/trust" aria-label="Trust and security">
                        Trust and security
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/customer-stories" aria-label="Customer stories">
                        Customer stories
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cell small-12 medium-4 medium-offset-1">
              <h2 className="title">Products</h2>
              <div className="grid-x">
                <div className="cell small-6 medium-6">
                  <h3 className="heading">Products</h3>
                  <ul className="links">
                    <li>
                      <a href="https://lambda.ai/superclusters" aria-label="Superclusters">
                        Superclusters
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/1-click-clusters" aria-label="1-Click Clusters">
                        1-Click Clusters
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/instances" aria-label="Instances">
                        Instances
                      </a>
                    </li>
                  </ul>
                  <h3 className="heading">Features</h3>
                  <ul className="links">
                    <li>
                      <a href="https://lambda.ai/ai-infrastructure" aria-label="AI infrastructure">
                        AI infrastructure
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/orchestration" aria-label="Orchestration">
                        Orchestration
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://lambda.ai/lambda-stack-deep-learning-software"
                        aria-label="Lambda Stack"
                      >
                        Lambda Stack
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/trust" aria-label="Trust and security">
                        Trust and security
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="cell small-6 medium-6">
                  <h3 className="heading">Docs</h3>
                  <ul className="links">
                    <li>
                      <a
                        href="https://docs.lambda.ai"
                        aria-label="Documentation (opens in a new tab)"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/blog" aria-label="Blog">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/research" aria-label="Research">
                        Research
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cell small-12 medium-2 medium-offset-1">
              <h2 className="title">Company</h2>
              <div className="grid-x">
                <div className="cell small-12">
                  <h3 className="heading">Inside Lambda</h3>
                  <ul className="links">
                    <li>
                      <a href="https://lambda.ai/about" aria-label="About">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/careers" aria-label="Careers">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/leadership" aria-label="Leadership">
                        Leadership
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/investors" aria-label="Investors">
                        Investors
                      </a>
                    </li>
                  </ul>
                  <h3 className="heading">Resources</h3>
                  <ul className="links">
                    <li>
                      <a href="https://lambda.ai/research" aria-label="Research">
                        Research
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/customer-stories" aria-label="Customer stories">
                        Customer stories
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/blog" aria-label="Blog">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/partners" aria-label="Partners">
                        Partners
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/brand-guidelines" aria-label="Brand guidelines">
                        Brand guidelines
                      </a>
                    </li>
                  </ul>
                  <ul className="links">
                    <li>
                      <a href="https://lambda.ai/legal/privacy-policy" aria-label="Privacy Policy">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="https://lambda.ai/legal/terms-of-service" aria-label="Terms of Service">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Cookie preferences">
                        Cookie preferences
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="footerBranding">
          <div className="logo">
            <Link href="/" aria-label="Lambda home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={FOOTER_LOGO} alt="Lambda Logo" width={171} height={40} />
            </Link>
          </div>
          <div className="socialLinks">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={social.icon} alt="" aria-hidden="true" width={40} height={40} />
              </a>
            ))}
          </div>
        </div>

        <div className="copyright">© 2026 Lambda. All rights reserved.</div>
      </div>

      <div className="footerLines" aria-hidden="true">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="footerLine" />
        ))}
      </div>
    </footer>
  );
}
