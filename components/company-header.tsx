// components/company-header.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Company, companies } from "@/lib/companies";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Home, Menu, X } from "lucide-react";

export function CompanyHeader({ company }: { company: Company }) {
  const switchItems = companies.map((c) => ({
    label: c.name,
    href: `/company/${c.id}`,
    sublabel: c.established,
  }));

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const text = (company as any).theme?.text ?? "text-slate-900";
  const brandGrad =
    (company as any).theme?.brandGrad ??
    "bg-gradient-to-r from-black/10 via-black/5 to-transparent";

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={cn(
          "relative w-full border-b border-black/10 backdrop-blur-xl",
          company.theme.headerBg
        )}
      >
        <div className={cn("h-[3px] w-full", brandGrad)} />

        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 py-2">
            <Link
              href={`/company/${company.id}`}
              className="flex items-center gap-3 no-underline"
            >
              <div className="relative h-14 w-14 md:h-16 md:w-16">
                <Image
                  src={company.logo.src}
                  alt={company.logo.alt}
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>

              <div className="leading-tight">
                <div
                  className={cn(
                    "flex items-center gap-1",
                    "text-sm md:text-base font-semibold tracking-tight",
                    text
                  )}
                >
                  <span>{company.name}</span>
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <nav className="hidden lg:flex items-center gap-1">
                {company.nav.slice(0, 6).map((it) => (
                  <a
                    key={it.href}
                    href={it.href}
                    className={cn(
                      "rounded-2xl px-3 py-2 text-sm font-semibold no-underline transition",
                      text,
                      "hover:bg-black/[0.04]"
                    )}
                  >
                    {it.label}
                  </a>
                ))}
              </nav>

              <DropdownMenu
                label="Switch company"
                items={switchItems}
                className="hidden sm:block"
              />

              <button
                type="button"
                onClick={() => setMobileOpen((o) => !o)}
                className={cn(
                  "inline-flex items-center justify-center px-4 py-3",
                  "text-slate-900 shadow-md font-semibold hover:bg-white/90",
                  "sm:hidden rounded-md"
                )}
                aria-label="Toggle navigation"
              >
                {mobileOpen ? (
                  <X className="h-6 w-6 font-bold" />
                ) : (
                  <Menu className="h-6 w-6 font-bold" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={cn(
          "fixed inset-0 z-[60] sm:hidden transition-opacity duration-200",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-black/50" onClick={closeMobile} />

        <div
          className={cn(
            "absolute inset-y-0 right-0 w-[86%] max-w-sm bg-white shadow-2xl flex flex-col",
            "transition-transform duration-200",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* MOBILE HEADER: BIG CENTER LOGO ONLY */}
          <div className="relative px-4 pt-6 pb-4 border-b border-black/10">
            <button
              type="button"
              onClick={closeMobile}
              className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-black/[0.06]"
              aria-label="Close navigation"
            >
              <X className="h-6 w-6 text-slate-700" />
            </button>

            <div className="flex items-center justify-center">
              <div className="relative h-28 w-28">
                <Image
                  src={company.logo.src}
                  alt={company.logo.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            {/* Top actions */}
            <div className="space-y-3">
              <Link
                href="/"
                className={cn(
                  "w-full inline-flex items-center justify-center gap-2",
                  "rounded-2xl px-4 py-3 text-sm font-semibold no-underline",
                  "bg-slate-900 text-white hover:bg-slate-800"
                )}
                onClick={closeMobile}
              >
                <Home className="h-4 w-4" />
                <span>All companies</span>
              </Link>

              <DropdownMenu
                label="Switch company"
                items={switchItems}
                theme={company.theme as any}
              />
            </div>

            <div className="my-5 h-px bg-black/10" />

            {/* ✅ NAV: one column, proper list look */}
            <nav className="space-y-2">
              {company.nav.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  onClick={closeMobile}
                  className={cn(
                    "block w-full",
                    "rounded-2xl border border-black/10 bg-white",
                    "px-4 py-3",
                    "text-sm font-semibold",
                    "no-underline",
                    "transition",
                    "hover:bg-black/[0.04]",
                    text
                  )}
                >
                  {it.label}
                </a>
              ))}
            </nav>

            {/* bottom padding for safe scroll */}
            <div className="h-6" />
          </div>
        </div>
      </div>
    </header>
  );
}
