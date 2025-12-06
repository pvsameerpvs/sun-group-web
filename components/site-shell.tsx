// components/site-shell.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

export function SiteShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("min-h-screen", className)}>
      <div className="mx-auto w-full">{children}</div>
    </div>
  );
}

export function BackToAllCompanies({
  className,
  theme,
}: {
  className?: string;
  theme?: {
    text?: string;
    accentText?: string;
    accentBorder?: string;
  };
}) {
  const text = theme?.text ?? "text-slate-900";
  const accent = theme?.accentText ?? "text-slate-900";

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm font-semibold transition",
        "border-black/10 bg-white hover:bg-black/[0.04]",
        text,
        className
      )}
    >
      <span className={cn(accent)}>←</span> Back to all companies
    </Link>
  );
}
