// app/company/[id]/page.tsx

import { notFound } from "next/navigation";
import { companies } from "@/lib/companies";
import { SiteShell } from "@/components/site-shell";
import { CompanyHeader } from "@/components/company-header";
import { CompanyFooter } from "@/components/company-footer";
import { cn } from "@/lib/utils";
import { CompanySlider } from "@/components/CompanySlider";

export function generateStaticParams() {
  return companies.map((c) => ({ id: c.id }));
}

const heroBg: Record<string, string> = {
  "sun-trading": "/hero1.jpg",
  "sun-prosperous": "/hero2.jpg",
  "venus-overseas": "/hero3.jpg",
};

const sliderImages: Record<string, { src: string; alt: string }[]> = {
  "sun-trading": [
    {
      src: "/slides/sun-trading/slide-1.jpg",
      alt: "Global sourcing & wholesale trade",
    },
    {
      src: "/slides/sun-trading/slide-2.jpg",
      alt: "Ready-made garments & footwear supply",
    },
    {
      src: "/slides/sun-trading/slide-3.jpg",
      alt: "Logistics, exports & distribution",
    },
  ],
  "sun-prosperous": [
    { src: "/hero1.jpg", alt: "Multi-category wholesale & FMCG" },
    { src: "/hero2.jpg", alt: "Building materials & industrial supply" },
    { src: "/hero3.jpg", alt: "IT, electronics & auto parts trading" },
  ],
  "venus-overseas": [
    {
      src: "/slides/venus-overseas/slide-1.jpg",
      alt: "International trading operations",
    },
    {
      src: "/slides/venus-overseas/slide-2.jpg",
      alt: "Garments, shoes & lifestyle products",
    },
    {
      src: "/slides/venus-overseas/slide-3.jpg",
      alt: "Perfumes and curated gifting",
    },
  ],
};

const sectionImage: Record<
  string,
  Record<string, { src: string; alt: string }>
> = {
  "sun-trading": {
    about: { src: "/sections/sun-trading/about.jpg", alt: "About Sun Trading" },
    divisions: { src: "/hero1.jpg", alt: "Product divisions" },
    expertise: { src: "/hero1.jpg", alt: "Import & export expertise" },
    quality: { src: "/hero1.jpg", alt: "Quality assurance" },
    markets: { src: "/hero1.jpg", alt: "Market presence" },
    sustainability: { src: "/hero1.jpg", alt: "Sustainability" },
  },
  "sun-prosperous": {
    about: { src: "/hero1.jpg", alt: "About Sun Prosperous" },
    fmcg: { src: "/hero1.jpg", alt: "FMCG" },
    apparel: { src: "/hero1.jpg", alt: "Garments & textiles" },
    building: { src: "/hero1.jpg", alt: "Building materials" },
    perfumes: { src: "/hero1.jpg", alt: "Perfumes & fragrances" },
    oils: { src: "/hero1.jpg", alt: "Lubricants & oils" },
    it: { src: "/sections/sun-prosperous/it.jpg", alt: "IT products" },
    electronics: { src: "/hero1.jpg", alt: "Electronics" },
    autoparts: { src: "/hero1.jpg", alt: "Auto parts" },
    advantages: { src: "/hero1.jpg", alt: "Strategic advantages" },
  },
  "venus-overseas": {
    about: { src: "/hero1.jpg", alt: "About Venus Overseas" },
    garments: { src: "/hero1.jpg", alt: "Readymade garments" },
    shoes: { src: "/hero1.jpg", alt: "Shoes trading" },
    perfumes: {
      src: "/sections/venus-overseas/perfumes.jpg",
      alt: "Perfume trading",
    },
    gifts: { src: "/hero1.jpg", alt: "Gifts trading" },
    markets: { src: "/hero1.jpg", alt: "Market focus" },
    why: { src: "/hero1.jpg", alt: "Why choose us" },
    location: { src: "/hero1.jpg", alt: "Head office location" },
  },
};

export default function CompanyPage({ params }: { params: { id: string } }) {
  const id = params.id as any;
  const company = companies.find((c) => c.id === id);
  if (!company) return notFound();

  const hero = heroBg[company.id];
  const sImgs = sectionImage[company.id] ?? {};

  const text = (company as any).theme?.text ?? "text-slate-900";
  const muted = (company as any).theme?.mutedText ?? "text-slate-600";
  const subtle = (company as any).theme?.subtleText ?? "text-slate-500";
  const brandGrad =
    (company as any).theme?.brandGrad ??
    "bg-gradient-to-r from-black/10 via-black/5 to-transparent";

  return (
    <SiteShell className={cn(company.theme.pageBg, "relative overflow-hidden")}>
      <CompanyHeader company={company} />

      <main className="">
        {/* HERO */}
        <section className="relative">
          {/* BRIGHT, RESPONSIVE hero image */}
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

          {/* DARK BOTTOM GRADIENT FOR TEXT READABILITY */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

          <div className="absolute inset-0">
            <div className="container-shell h-full flex items-end pb-10 md:pb-14">
              <div className="grid w-full gap-6 lg:grid-cols-12 items-end">
                {/* Hero text */}
                <div className="lg:col-span-7">
                  <div>
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

                    <h1
                      className={cn(
                        "mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white",
                        "text-center sm:text-left", // ← ★ center on mobile only
                        "[text-stroke-width:1.5px] [text-stroke-color:black]",
                        "drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]"
                      )}
                    >
                      {company.name}
                    </h1>
                    <p
                      className={cn(
                        "mt-4 max-w-3xl text-sm md:text-base text-white",
                        "text-center sm:text-left", // center on mobile
                        "mx-auto sm:mx-0" // center block on mobile
                      )}
                    >
                      Explore our business divisions, market presence, and
                      trading expertise. Use the navigation to jump to sections.
                    </p>

                    <div className="mt-6 flex-wrap gap-2 hidden sm:flex">
                      {company.nav.slice(0, 5).map((n) => (
                        <a
                          key={n.href}
                          href={n.href}
                          className={cn(
                            "rounded-2xl border px-3 py-2 text-sm font-semibold transition",
                            "text-white",
                            "hover:bg-white/10",
                            company.theme.accentBorder
                          )}
                        >
                          {n.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Slider */}
                <div className="lg:col-span-5 p-1 md:p-2">
                  <CompanySlider
                    images={sliderImages[company.id]}
                    accentText={company.theme.accentText}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <div className="container-shell mt-10">
          <div className="grid gap-6">
            {company.sections.map((s, idx) => {
              const img = sImgs[s.id];
              const reverse = idx % 2 === 1;

              return (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <div
                    className={cn(
                      "rounded-3xl border p-5 md:p-8 shadow-soft overflow-hidden",
                      company.theme.card
                    )}
                  >
                    <div className="grid gap-6 lg:grid-cols-12">
                      {/* IMAGE */}
                      <div
                        className={cn(
                          "lg:col-span-5",
                          reverse ? "lg:order-2" : "lg:order-1"
                        )}
                      >
                        <div className="rounded-3xl overflow-hidden border border-black/10 bg-black/[0.02]">
                          <div
                            className="h-[220px] md:h-[280px] lg:h-[320px] w-full bg-cover bg-center"
                            style={{
                              backgroundImage: `url(${
                                img?.src ?? "/sections/placeholder.jpg"
                              })`,
                              // DARKER image inside content
                              filter:
                                "brightness(0.55) saturate(1.1) contrast(1.08)",
                            }}
                            role="img"
                            aria-label={img?.alt ?? `${s.title} image`}
                          />
                          <div className="p-4 flex items-center justify-between gap-3">
                            <div className={cn("text-sm", subtle)}>
                              {img?.alt ?? "Section visual"}
                            </div>
                            <a
                              href="#top"
                              className={cn(
                                "text-xs font-semibold no-underline hover:underline",
                                company.theme.accentText
                              )}
                            >
                              Back to top ↑
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* TEXT */}
                      <div
                        className={cn(
                          "lg:col-span-7",
                          reverse ? "lg:order-1" : "lg:order-2"
                        )}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div
                              className={cn(
                                "text-xs font-semibold",
                                company.theme.accentText
                              )}
                            >
                              Section {String(idx + 1).padStart(2, "0")}
                            </div>
                            <h2
                              className={cn(
                                "mt-2 text-xl md:text-2xl font-semibold tracking-tight",
                                text
                              )}
                            >
                              {s.title}
                            </h2>
                          </div>
                        </div>

                        <div
                          className={cn(
                            "mt-4 space-y-3 text-sm md:text-base",
                            muted
                          )}
                        >
                          {s.body.map((p, pidx) => (
                            <p key={pidx} className="leading-relaxed">
                              {p}
                            </p>
                          ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {company.nav
                            .filter(
                              (n) =>
                                n.href === `#${s.id}` || n.href.includes(s.id)
                            )
                            .slice(0, 1)
                            .map((n) => (
                              <span
                                key={n.href}
                                className={cn(
                                  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
                                  company.theme.accentBorder,
                                  "bg-black/[0.03]",
                                  text
                                )}
                              >
                                {n.label}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          <CompanyFooter company={company} />
        </div>
      </main>
    </SiteShell>
  );
}
