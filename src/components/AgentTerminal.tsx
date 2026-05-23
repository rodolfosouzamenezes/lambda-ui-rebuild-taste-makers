"use client";

import { useEffect, useState } from "react";
import { CloseIcon, TerminalIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const LINES = [
  { text: "Session ID: lambda-ai-20260523-iomu", ok: true, label: false },
  { text: "Agent handshake initialized", ok: true },
  { text: "Human session detected", ok: true },
  { text: "Agent protocol inactive (passive inspection mode)", ok: false },
  { text: "Manifest available for read-only access", ok: true },
  { text: "Manifest source: schema.org JSON-LD", ok: true },
  { text: "Page classification: WebPage", ok: true },
  { text: 'Primary CTA detected — "Launch GPU instance"', ok: true },
  { text: "Parsed 6 semantic content zones", ok: true },
  { text: "Preparing agent-formatted manifest output...", ok: true, prefixOnly: true },
];

export function AgentTerminal() {
  const [open, setOpen] = useState(false);
  const [rendered, setRendered] = useState(0);

  useEffect(() => {
    if (!open) return;
    const timer = setInterval(() => {
      setRendered((r) => {
        if (r >= LINES.length) {
          clearInterval(timer);
          return r;
        }
        return r + 1;
      });
    }, 120);
    return () => clearInterval(timer);
  }, [open]);

  const handleOpen = () => {
    setRendered(0);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="hidden lg:block fixed right-0 top-[101px] z-30 pointer-events-none">
      {/* Collapsed tab */}
      {!open && (
        <button
          type="button"
          onClick={handleOpen}
          aria-label="Open Lambda Agent Terminal"
          className="pointer-events-auto absolute right-0 top-0 origin-top-right -rotate-90 translate-x-0 -translate-y-full bg-bg border border-divider/40 text-muted hover:text-fg transition-colors px-3 py-2 font-mono text-[11px] uppercase tracking-wider whitespace-nowrap flex items-center gap-2"
          style={{ transformOrigin: "top right" }}
        >
          <TerminalIcon className="rotate-90" />
          {"// Lambda Agent Terminal //"}
        </button>
      )}

      {/* Expanded panel */}
      {open && (
        <div
          className={cn(
            "pointer-events-auto bg-bg border-l border-divider/40 w-[460px] max-w-[90vw] h-[calc(100vh-101px)]",
            "flex flex-col"
          )}
        >
          <div className="flex items-center justify-between px-4 h-12 border-b border-divider/40">
            <span className="font-mono text-[12px] uppercase tracking-wider text-muted">
              {"// Lambda Agent Terminal //"}
            </span>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close Lambda Agent Terminal"
              className="text-muted hover:text-fg transition-colors"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-4 font-mono text-[12px] leading-relaxed text-fg/90 scrollbar-hide">
            {LINES.slice(0, rendered).map((line, i) => (
              <p key={i} className="terminal-line">
                <span className="text-muted mr-2">{">"}</span>
                {!line.prefixOnly && (
                  <span
                    className={cn(
                      "mr-2",
                      line.ok ? "text-fg" : "text-[#ff5b5b]"
                    )}
                  >
                    [{line.ok ? "✓" : "x"}]
                  </span>
                )}
                <span>{line.text}</span>
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
