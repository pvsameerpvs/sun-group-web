// components/ui/dropdown-menu.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Item = { label: string; href: string; sublabel?: string };

export function DropdownMenu({
  label,
  items,
  className,
  theme,
}: {
  label: string;
  items: Item[];
  className?: string;
  theme?: {
    text?: string;
    mutedText?: string;
    subtleText?: string;
    accentText?: string;
    accentBorder?: string;
    brandGrad?: string;
  };
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  const text = theme?.text ?? "text-slate-900";
  const muted = theme?.mutedText ?? "text-slate-600";
  const subtle = theme?.subtleText ?? "text-slate-500";
  const accent = theme?.accentText ?? "text-slate-900";
  const border = theme?.accentBorder ?? "border-slate-200";
  const brandGrad =
    theme?.brandGrad ??
    "bg-gradient-to-r from-black/10 via-black/5 to-transparent";

  React.useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm font-semibold transition",
          "bg-white hover:bg-black/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10",
          "border-black/10",
          text
        )}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className={cn(accent)}>{label}</span>
        <span
          className={cn(
            "transition-transform",
            open ? "rotate-180" : "rotate-0"
          )}
        >
          ▾
        </span>
      </button>

      {open ? (
        <div
          role="menu"
          className={cn(
            "absolute right-0 z-50 mt-2 w-[280px] overflow-hidden rounded-2xl border shadow-soft",
            "border-black/10 bg-white/95 backdrop-blur-xl"
          )}
        >
          {/* top brand line */}
          <div className={cn("h-[3px] w-full", brandGrad)} />

          <div className="p-2">
            {items.map((it) => (
              <Link
                key={it.href + it.label}
                href={it.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-xl px-3 py-2 transition",
                  "hover:bg-black/[0.04]"
                )}
                role="menuitem"
              >
                <div className={cn("text-sm font-semibold", text)}>
                  {it.label}
                </div>
                {it.sublabel ? (
                  <div className={cn("text-xs", subtle)}>{it.sublabel}</div>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
