"use client";

import Link from "next/link";
import { useState } from "react";
import { LambdaLogo, MenuIcon, CloseIcon } from "@/components/icons";
import { navMenus } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-bg h-[101px] border-b border-divider/40">
      <div className="h-full flex items-stretch">
        {/* Logo column */}
        <Link
          href="/"
          aria-label="Lambda — home"
          className="flex items-center justify-center min-w-[240px] border-r border-divider/40 px-10 text-fg"
        >
          <LambdaLogo markClassName="w-[26px] h-[26px]" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex flex-1 items-stretch">
          {navMenus.map((menu) => {
            const isOpen = openMenu === menu.label;
            return (
              <div
                key={menu.label}
                className="relative flex items-stretch"
                onMouseEnter={() => menu.columns && setOpenMenu(menu.label)}
                onMouseLeave={() => menu.columns && setOpenMenu(null)}
              >
                {menu.href ? (
                  <Link
                    href={menu.href}
                    className="font-mono text-[14px] uppercase tracking-wider text-fg px-12 flex items-center hover:opacity-80 transition-opacity"
                  >
                    {menu.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={cn(
                      "font-mono text-[14px] uppercase tracking-wider text-fg px-12 flex items-center hover:opacity-80 transition-opacity",
                      isOpen && "opacity-90"
                    )}
                  >
                    {menu.label}
                  </button>
                )}
                {menu.columns && isOpen && (
                  <MegaMenu columns={menu.columns} alignRight={menu.label === "Company"} />
                )}
              </div>
            );
          })}
        </nav>

        {/* Right cluster (desktop) */}
        <div className="hidden lg:flex items-stretch ml-auto">
          <Link
            href="/login"
            className="font-mono text-[14px] uppercase tracking-wider text-fg px-12 flex items-center border-l border-divider/40 hover:opacity-80 transition-opacity"
          >
            Log in
          </Link>
          <Link
            href="/sign-up"
            className="font-mono text-[14px] uppercase tracking-wider bg-cream text-bg px-10 flex items-center hover:opacity-90 transition-opacity"
          >
            Get started
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden ml-auto px-6 text-fg"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden bg-bg border-t border-divider/40 max-h-[calc(100vh-101px)] overflow-y-auto">
          <nav className="px-6 py-8 flex flex-col gap-6">
            {navMenus.map((m) => (
              <div key={m.label} className="flex flex-col gap-3">
                {m.href ? (
                  <Link
                    href={m.href}
                    className="font-mono text-[14px] uppercase tracking-wider text-fg"
                  >
                    {m.label}
                  </Link>
                ) : (
                  <p className="font-mono text-[14px] uppercase tracking-wider text-fg">
                    {m.label}
                  </p>
                )}
                {m.columns && (
                  <div className="grid gap-4 pl-4 border-l border-divider/40">
                    {m.columns.map((col) => (
                      <div key={col.heading} className="flex flex-col gap-2">
                        <p className="font-mono text-[11px] uppercase text-muted">
                          {col.heading}
                        </p>
                        {col.links.map((l) => (
                          <Link
                            key={l.label}
                            href={l.href}
                            className="font-mono text-[14px] text-fg uppercase tracking-wider"
                          >
                            {l.label}
                          </Link>
                        ))}
                        {col.separator && (
                          <Link
                            href={col.separator.href}
                            className="font-mono text-[14px] text-fg uppercase tracking-wider mt-2 pt-2 border-t border-divider/40"
                          >
                            {col.separator.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-divider/40">
              <Link href="/login" className="font-mono text-[14px] uppercase tracking-wider text-fg">
                Log in
              </Link>
              <Link
                href="/sign-up"
                className="font-mono text-[14px] uppercase tracking-wider bg-cream text-bg inline-flex items-center justify-center h-12"
              >
                Get started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MegaMenu({
  columns,
  alignRight,
}: {
  columns: NonNullable<(typeof navMenus)[number]["columns"]>;
  alignRight?: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute top-full bg-bg border border-divider/40 px-0 py-0 flex z-50",
        alignRight ? "right-0" : "left-0"
      )}
    >
      {columns.map((col, idx) => (
        <div
          key={col.heading}
          className={cn(
            "px-10 py-8 min-w-[240px] flex flex-col gap-3",
            idx < columns.length - 1 && "border-r border-divider/40"
          )}
        >
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
            {col.heading}
          </p>
          <div className="flex flex-col gap-2.5">
            {col.links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="font-mono text-[14px] uppercase tracking-wider text-fg hover:opacity-70 transition-opacity"
              >
                {l.label}
              </Link>
            ))}
          </div>
          {col.separator && (
            <Link
              href={col.separator.href}
              className="font-mono text-[14px] uppercase tracking-wider text-fg hover:opacity-70 transition-opacity mt-4 pt-4 border-t border-divider/40"
            >
              {col.separator.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
