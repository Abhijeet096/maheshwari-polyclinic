import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import type { ReactNode } from "react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`flex items-center gap-3 text-[13px] font-semibold tracking-[0.16em] uppercase ${
        light ? "text-gold-light" : "text-gold-deep"
      }`}
    >
      <span className={`h-[1.5px] w-7 ${light ? "bg-gold-light" : "bg-gold"}`} />
      {children}
    </span>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`flex gap-[3px] text-[#c9962f] ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="size-[1em] fill-current" aria-hidden="true" />
      ))}
    </span>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
};

export function ButtonLink({ href, children, variant = "solid", external, className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-base font-semibold transition-colors";
  const styles =
    variant === "solid"
      ? "bg-forest text-ivory hover:bg-forest-soft"
      : "border-[1.5px] border-forest text-forest hover:bg-paper";
  const cls = `${base} ${styles} ${className}`;
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function ArrowIcon() {
  return <ArrowRight className="size-[18px]" aria-hidden="true" />;
}

/** Rounded-pill eyebrow + centred heading + subtitle: the intro used by every section in the reference set. */
export function SectionIntro({
  icon: Icon,
  label,
  children,
  subtitle,
  className = "",
}: {
  icon: import("lucide-react").LucideIcon;
  label: string;
  children: ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`mx-auto flex max-w-[46rem] flex-col items-center text-center ${className}`}>
      <span className="bg-sage text-forest-soft inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-[13px] font-semibold tracking-[0.14em] uppercase">
        <Icon className="size-[18px]" aria-hidden="true" />
        {label}
      </span>
      <h2 className="display text-ink mt-5 text-[clamp(34px,4.6vw,56px)] leading-[1.06]">{children}</h2>
      {subtitle && <p className="text-muted mt-4 max-w-[36em] text-[17px] leading-[1.65]">{subtitle}</p>}
    </div>
  );
}

/** Cross-and-leaf mark used in the header and footer. */
export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M17 3h14v14h14v14H31v14H17V31H3V17h14z" fill="currentColor" opacity="0.92" />
      <path
        d="M16 40c0-12 8-21 24-23-1 14-9 24-22 24-1 0-2-.5-2-1z"
        className="fill-sage stroke-current"
        strokeWidth="1.4"
      />
      <path d="M19 38c5-8 11-13 18-17" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
