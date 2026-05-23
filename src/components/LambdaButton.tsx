import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "cream" | "purple" | "outlineCream" | "outlineDark";

const variantClass: Record<Variant, string> = {
  cream: "btn btn--cream",
  purple: "btn btn--purple",
  outlineCream: "btn btn--outline-cream",
  outlineDark: "btn btn--outline-dark",
};

type Common = { variant?: Variant; className?: string; children: ReactNode };

type AnchorProps = Common &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type LambdaButtonProps = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function LambdaButton({
  variant = "cream",
  className,
  children,
  ...props
}: LambdaButtonProps) {
  return (
    <button className={cn(variantClass[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function LambdaButtonLink({
  variant = "cream",
  className,
  href,
  children,
  ...props
}: AnchorProps) {
  return (
    <Link href={href} className={cn(variantClass[variant], className)} {...props}>
      {children}
    </Link>
  );
}
