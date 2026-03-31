import Link from "next/link";
import type { ReactNode } from "react";

const VARIANT_CLASSES = {
  primary:
    "bg-red text-white hover:bg-red-hover transition-colors duration-300",
  "ghost-dark":
    "border border-white/20 text-white/60 hover:border-white/40 hover:text-white/80 transition-all duration-300",
  "ghost-light":
    "border border-gray-300 text-text-secondary hover:border-gray-400 hover:text-text-primary transition-all duration-300",
} as const;

const BASE_CLASSES =
  "inline-flex items-center gap-3 font-medium px-8 py-4 text-sm tracking-[0.08em] uppercase";

type ButtonProps = {
  variant: keyof typeof VARIANT_CLASSES;
  href?: string;
  type?: "button" | "submit" | "reset";
  arrow?: boolean;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
};

export default function Button({
  variant,
  href,
  type = "button",
  arrow = true,
  disabled = false,
  children,
  className,
}: ButtonProps) {
  const classes = [
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {arrow && (
        <span aria-hidden="true" className="text-xs">
          &#8594;
        </span>
      )}
    </>
  );

  if (!href) {
    return (
      <button type={type} disabled={disabled} className={classes}>
        {content}
      </button>
    );
  }

  // Anchor links (#...) and external URLs use <a>
  if (href.startsWith("#") || href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  // Internal routes use Next.js <Link>
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
