"use client";

import { useCallback, useState } from "react";

function TerminalIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16.25 4C17.77 4 19 5.23 19 6.75V15.25C19 16.77 17.77 18 16.25 18H5.75C4.23 18 3 16.77 3 15.25V6.75C3 5.23 4.23 4 5.75 4H16.25ZM5.75 5.5C5.06 5.5 4.5 6.06 4.5 6.75V15.25C4.5 15.94 5.06 16.5 5.75 16.5H9V5.5H5.75ZM10.5 5.5V16.5H16.25C16.94 16.5 17.5 15.94 17.5 15.25V6.75C17.5 6.06 16.94 5.5 16.25 5.5H10.5Z"
        fill="#E7E6D9"
      />
    </svg>
  );
}

export default function LambdaAgentTerminal() {
  const [open, setOpen] = useState(false);

  const closePanel = useCallback(() => setOpen(false), []);
  const openPanel = useCallback(() => setOpen(true), []);

  return (
    <div aria-hidden="true">
      <button
        type="button"
        className="schema-console-collapsed-tab no-ui-button"
        tabIndex={-1}
        onClick={openPanel}
      >
        <TerminalIcon />
        <span>// Lambda Agent Terminal //</span>
      </button>

      <div className={`schema-console-panel${open ? " schema-console-panel--open" : ""}`}>
        <div className="schema-console-header">
          <div className="schema-console-title">// Lambda Agent Terminal //</div>
          <button
            type="button"
            className="schema-console-close no-ui-button"
            tabIndex={-1}
            aria-label="Close terminal"
            onClick={closePanel}
          />
        </div>
        <div className="schema-console-content">
          <p className="schema-console-line">
            <span className="schema-console-line-prefix">&gt;</span> Session ID:{" "}
            <span className="schema-console-session-id">lambda-rebuild</span>
          </p>
          <p className="schema-console-line">
            <span className="schema-console-line-prefix">&gt;</span>{" "}
            <span className="schema-console-line-check">[✓]</span> Agent handshake
            initialized
          </p>
          <p className="schema-console-line">
            <span className="schema-console-line-prefix">&gt;</span>{" "}
            <span className="schema-console-line-check">[✓]</span> Human session detected
          </p>
          <p className="schema-console-line">
            <span className="schema-console-line-prefix">&gt;</span>{" "}
            <span className="schema-console-line-x">[x]</span> Agent protocol inactive
            (passive inspection mode)
          </p>
          <p className="schema-console-line">
            <span className="schema-console-line-prefix">&gt;</span>{" "}
            <span className="schema-console-line-check">[✓]</span> Manifest available for
            read-only access
          </p>
          <p className="schema-console-line">
            <span className="schema-console-line-prefix">&gt;</span>{" "}
            <span className="schema-console-line-check">[✓]</span> Status: READY
          </p>
        </div>
      </div>
    </div>
  );
}
