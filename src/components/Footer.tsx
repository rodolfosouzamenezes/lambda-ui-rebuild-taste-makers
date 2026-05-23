import Link from "next/link";
import { LambdaLogo, LinkedInIcon, XIcon, YouTubeIcon } from "@/components/icons";
import { footerGroups } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-bg pt-16 pb-10">
      <div className="container-page">
        <p className="font-mono text-[12px] uppercase tracking-wider text-muted mb-12">
          {"{ FOOTER }"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 pb-16">
          {footerGroups.map((group) => (
            <div key={group.heading} className="flex flex-col gap-6">
              <p className="font-mono text-[13px] uppercase tracking-wider text-fg border-b border-divider/60 pb-4">
                {group.heading}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {group.subgroups.map((sub) => (
                  <div key={sub.label} className="flex flex-col gap-2.5">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      {sub.label}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {sub.links.map((l) => (
                        <li key={l.label}>
                          <Link
                            href={l.href}
                            className="font-mono text-[13px] uppercase tracking-wider text-fg/90 hover:opacity-75 transition-opacity"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {group.bottomLinks && (
                <ul className="flex flex-col gap-2 pt-4">
                  {group.bottomLinks.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="font-mono text-[13px] uppercase tracking-wider text-fg/90 hover:opacity-75 transition-opacity"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-10 border-t border-divider/60">
          <Link href="/" className="text-fg" aria-label="Lambda — home">
            <LambdaLogo
              markClassName="w-[40px] h-[40px]"
              className="text-fg [&>span:last-child]:text-[36px]"
            />
          </Link>
          <p className="font-mono text-[12px] uppercase tracking-wider text-muted text-center order-2 md:order-none">
            © 2026 Lambda. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { Icon: LinkedInIcon, href: "https://www.linkedin.com/company/lambda-cloud" },
              { Icon: XIcon, href: "https://twitter.com/LambdaAPI" },
              { Icon: YouTubeIcon, href: "https://www.youtube.com/@LambdaCloud" },
            ].map(({ Icon, href }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 inline-flex items-center justify-center border border-divider/60 text-fg/85 hover:bg-fg hover:text-bg transition-colors"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
