import type { SVGProps } from "react";

export function LambdaMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M10.99 7.32L18.36 20.12L10.16 34.95H15.43L20.9 24.83L26.71 34.95H32.09L16.37 7.31L10.99 7.32Z"
        fill="currentColor"
      />
      <path
        d="M0 0V42H42.33V0H0ZM38.59 38.30H3.74V3.70H38.59V38.30Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LambdaLogo({
  className,
  markClassName,
  ...props
}: SVGProps<SVGSVGElement> & { markClassName?: string }) {
  return (
    <span
      className={["inline-flex items-center gap-3 text-fg", className]
        .filter(Boolean)
        .join(" ")}
      aria-label="Lambda"
      {...(props as Record<string, unknown>)}
    >
      <LambdaMark className={markClassName ?? "w-[26px] h-[26px]"} />
      <span
        className="font-heading text-[24px] leading-none font-semibold tracking-[-0.02em]"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        Lambda
      </span>
    </span>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.658l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.826l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

export function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.13C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.57A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.13C4.5 20.5 12 20.5 12 20.5s7.5 0 9.4-.57a3 3 0 0 0 2.1-2.13C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.27 3.6L9.6 15.6Z" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <line x1="3" y1="8" x2="21" y2="8" />
      <line x1="3" y1="16" x2="21" y2="16" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <line x1="4" y1="4" x2="16" y2="16" />
      <line x1="16" y1="4" x2="4" y2="16" />
    </svg>
  );
}

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <line x1="11" y1="3" x2="11" y2="19" />
      <line x1="3" y1="11" x2="19" y2="11" />
    </svg>
  );
}

export function MinusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <line x1="3" y1="11" x2="19" y2="11" />
    </svg>
  );
}

export function TerminalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="4" width="16" height="14" rx="1" />
      <polyline points="7,9 10,11.5 7,14" />
      <line x1="12" y1="14" x2="16" y2="14" />
    </svg>
  );
}
