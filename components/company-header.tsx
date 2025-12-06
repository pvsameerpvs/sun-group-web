// components/company-header.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Company, companies } from "@/lib/companies";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { BackToAllCompanies } from "@/components/site-shell";
import { cn } from "@/lib/utils";
import { Building2, Home, Menu, X } from "lucide-react";

export function CompanyHeader({ company }: { company: Company }) {
  const switchItems = companies.map((c) => ({
    label: c.name,
    href: `/company/${c.id}`,
    sublabel: c.established,
  }));

  const [mobileOpen, setMobileOpen] = React.useState(false);

  // support light themes (if you added these in theme)
  const text = (company as any).theme?.text ?? "text-slate-900";
  const muted = (company as any).theme?.mutedText ?? "text-slate-600";
  const subtle = (company as any).theme?.subtleText ?? "text-slate-500";
  const brandGrad =
    (company as any).theme?.brandGrad ??
    "bg-gradient-to-r from-black/10 via-black/5 to-transparent";

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={cn(
          "relative w-full border-b border-black/10 backdrop-blur-xl",
          company.theme.headerBg // set this to bg-white/85 in theme
        )}
      >
        {/* brand accent line */}
        <div className={cn("h-[3px] w-full", brandGrad)} />

        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
          {/* TOP ROW – LOGO + NAME + NAV / CONTROLS */}
          <div className="flex items-center justify-between gap-3 py-2">
            <Link
              href={`/company/${company.id}`}
              className="flex items-center gap-3 no-underline"
            >
              {/* bigger logo */}
              <div className="relative h-12 w-12 md:h-16 md:w-16">
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
                    "text-base md:text-lg font-semibold tracking-tight",
                    text
                  )}
                >
                  <span>{company.name}</span>
                </div>
                {/* <div className="mt-1 flex items-center gap-2">
                  <span
                    className={cn(
                      "text-xs font-semibold",
                      company.theme.accentText
                    )}
                  >
                    {company.established}
                  </span>
                  <span className={cn("hidden md:inline text-xs", subtle)}>
                    • {company.tagline}
                  </span>
                </div> */}
              </div>
            </Link>

            <div className="flex items-center gap-2">
              {/* desktop nav */}
              <nav className="hidden lg:flex items-center gap-1">
                {company.nav.slice(0, 5).map((it) => (
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

              {/* desktop / tablet controls */}
              <DropdownMenu
                label="Switch company"
                items={switchItems}
                className="hidden sm:block"
              />
              {/* <BackToAllCompanies className="hidden sm:inline-flex" /> */}

              {/* MOBILE HAMBURGER BUTTON */}
              <button
                type="button"
                onClick={() => setMobileOpen((o) => !o)}
                className={cn(
                  "inline-flex items-center justify-center px-4 py-3",
                  "text-slate-900 shadow-md",
                  "font-semibold",
                  "hover:bg-white/90",
                  "sm:hidden",
                  "rounded-md"
                )}
                aria-label="Toggle navigation"
              >
                {mobileOpen ? (
                  <X className="h-6 w-6 font-bold" /> // bigger icon
                ) : (
                  <Menu className="h-6 w-6 font-bold" /> // bigger icon
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR (offcanvas) */}
      {/* Only on small screens */}
      <div
        className={cn(
          "fixed inset-0 z-[60] sm:hidden transition-opacity duration-200",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" onClick={closeMobile} />

        {/* Sidebar panel */}
        <div
          className={cn(
            "absolute inset-y-0 right-0 w-[80%] max-w-xs bg-white shadow-2xl flex flex-col",
            "transition-transform duration-200",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Sidebar header */}
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-black/10">
            <div className="flex items-center gap-2">
              <div className="relative h-12 w-12 overflow-hidden">
                <Image
                  src={company.logo.src}
                  alt={company.logo.alt}
                  fill
                  className="object-contain p-1.5"
                />
              </div>

              <div className="leading-tight">
                <div className="text-sm font-semibold text-slate-900">
                  {company.name}
                </div>
                <div className="text-[11px] text-slate-500">
                  {company.established}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={closeMobile}
              className="inline-flex h-8 w-8 items-center justify-center "
              aria-label="Close navigation"
            >
              <X className="h-4 w-4 text-slate-700" />
            </button>
          </div>

          {/* Sidebar content */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {/* All companies */}
            <Link
              href="/"
              className={cn(
                "inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold no-underline",
                "bg-slate-900 text-white hover:bg-slate-800"
              )}
              onClick={closeMobile}
            >
              <Home className="h-4 w-4" />
              <span>All companies</span>
            </Link>

            {/* Switch company */}
            <div>
              <DropdownMenu
                label="Switch company"
                items={switchItems}
                theme={company.theme as any}
              />
            </div>

            <div className="h-px bg-black/10" />

            {/* Nav chips */}
            <div className="flex flex-wrap gap-2">
              {company.nav.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className={cn(
                    "rounded-2xl border px-3 py-2 text-xs font-semibold no-underline transition",
                    "border-black/10 bg-white hover:bg-black/[0.04]",
                    text
                  )}
                  onClick={closeMobile}
                >
                  {it.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
