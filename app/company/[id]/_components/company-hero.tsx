// app/company/[id]/_components/company-hero.tsx

"use client";

import { cn } from "@/lib/utils";
import { CompanySlider } from "@/components/CompanySlider";
import { companies } from "@/lib/companies";

type Company = (typeof companies)[number];

type CompanyHeroProps = {
  company: Company;
  hero: string;
  brandGrad: string;
  sliderImages: { src: string; alt: string }[];
};

export function CompanyHero({
  company,
  hero,
  brandGrad,
  sliderImages,
}: CompanyHeroProps) {
  return (
    <section className="relative">
      {/* HERO IMAGE */}
      <div
        className="w-full bg-cover bg-center h-[calc(100vh-88px)] sm:h-[440px] md:h-[520px] lg:h-[620px]"
        style={{
          backgroundImage: `url(${hero})`,
          filter: "brightness(1.15) saturate(1.15) contrast(1.05)",
        }}
        aria-hidden="true"
      />

      {/* BRAND GRADIENT WASH */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-[0.22]",
          brandGrad
        )}
      />

      {/* DARK READABILITY GRADIENT */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

      {/* CONTENT */}
      <div className="absolute inset-0">
        <div className="container-shell h-full flex items-end pb-10 md:pb-14">
          {/* FLEX LAYOUT */}
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6">
            {/* LEFT TEXT SECTION */}
            <div className="flex-1 flex flex-col items-center self-center sm:items-start p-5">
              {/* TAGLINE */}
              <div className="inline-flex items-center hidden sm:inline-flex">
                <span
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-semibold",
                    "bg-white/50 backdrop-blur-md border border-white/30 text-white",
                    company.theme.accentText
                  )}
                >
                  {company.tagline}
                </span>
              </div>

              {/* TITLE (STATIC) */}
              <h1
                className={cn(
                  "mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white",
                  "text-center sm:text-left",
                  "[text-stroke-width:1.5px] [text-stroke-color:black]",
                  "drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]"
                )}
              >
                {company.name}
              </h1>

              {/* DESCRIPTION */}
              <p
                className={cn(
                  "mt-4 max-w-3xl text-sm md:text-base text-white",
                  "text-center sm:text-left",
                  "mx-auto sm:mx-0"
                )}
              >
                Explore our business divisions, market presence, and trading
                expertise. Use the navigation to jump to sections.
              </p>

              {/* NAV BUTTONS */}
              <div className="mt-6 flex-wrap gap-2 hidden sm:flex">
                {company.nav.slice(0, 5).map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    className={cn(
                      "rounded-2xl border px-3 py-2 text-sm font-semibold transition",
                      "text-white hover:bg-white/10",
                      company.theme.accentBorder
                    )}
                  >
                    {n.label}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT SLIDER SECTION */}
            <div className="flex-1 max-w-[480px] w-full p-1 md:p-2">
              <CompanySlider
                images={sliderImages}
                accentText={company.theme.accentText}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
