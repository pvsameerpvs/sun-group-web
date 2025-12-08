// app/perfumes-sun-prosperous/page.tsx
import Image from "next/image";
import { cn } from "@/lib/utils";

const theme = {
  pageBg: "bg-gradient-to-b from-[#fff3eb] via-[#ffffff] to-[#f6f7fb]",
  text: "text-slate-900",
  mutedText: "text-slate-600",
  subtleText: "text-slate-500",
  accentText: "text-[#ff6a00]",
  accentBorder: "border-[#ff8a2b]/55",
  button: "bg-[#ff8a2b] text-white hover:bg-[#ff9c4d]",
  card: "bg-white border-slate-200",
  brandGrad: "bg-gradient-to-r from-[#ff8a2b] via-[#ff6a00] to-[#ffb26b]",
  brandGradSoft: "bg-gradient-to-r from-[#ffe4d2] via-[#ffd1b0] to-[#fff]",
};

const hero = {
  src: "/Perfumesfragrances.jpg", // put in /public
  alt: "Perfumes & fragrance trading",
};

const categories = [
  {
    title: "Designer-Inspired Perfumes",
    desc: "High-demand profiles selected for mass retail, gifting, and everyday wear.",
    bullets: [
      "Popular scent families",
      "Multiple volume options",
      "Wholesale-ready packaging",
    ],
    img: {
      src: "/DesignerInspiredPerfumes.jpg",
      alt: "Designer-inspired perfumes",
    },
  },
  {
    title: "Oud & Oriental Perfumes",
    desc: "Classic Middle East favorites with rich, long-lasting character.",
    bullets: ["Oud blends", "Oriental notes", "Premium presentation"],
    img: { src: "/OudOrientalPerfumes.jpg", alt: "Oud and oriental perfumes" },
  },
  {
    title: "Bulk Perfumes",
    desc: "Bulk fragrance supply for distributors, private labels, and large-volume buyers.",
    bullets: [
      "Bulk quantities",
      "Consistent supply",
      "Demand-driven selection",
    ],
    img: { src: "/BulkPerfumes.jpg", alt: "Bulk perfumes" },
  },
  {
    title: "Gift Sets",
    desc: "Elegant sets for seasonal campaigns, corporate gifting, and retail upsell.",
    bullets: [
      "Gift-ready boxes",
      "Seasonal options",
      "Retail-friendly assortments",
    ],
    img: { src: "/PerfumeGiftSets1.jpg", alt: "Perfume gift sets" },
  },
];

const whyChoose = [
  {
    title: "Authenticity Focus",
    desc: "We prioritize reliable sourcing and consistent product standards.",
  },
  {
    title: "Elegant Packaging",
    desc: "Presentation matters—selected for gifting and retail shelves.",
  },
  {
    title: "Wholesale & Retail Demand",
    desc: "We stock profiles that move fast across markets.",
  },
  {
    title: "Bulk Order Support",
    desc: "Ready for volume orders, mixed cartons, and replenishment cycles.",
  },
];

const workflow = [
  { n: "01", t: "Requirement", d: "Share target profiles & volumes" },
  { n: "02", t: "Selection", d: "We propose demand-driven options" },
  { n: "03", t: "Packing", d: "Secure packing & labeling" },
  { n: "04", t: "Dispatch", d: "Fast delivery timelines" },
];

const gallery = [
  { src: "/DesignerInspiredPerfumes.jpg", alt: "Perfumes & fragrances" },
  { src: "/OudOrientalPerfumes.jpg", alt: "Oud & oriental" },
  { src: "/PerfumeGiftSets.jpg", alt: "Gift sets" },
  { src: "/BulkPerfumes.jpg", alt: "Bulk perfumes" },
  { src: "/PerfumesShowcase.jpg", alt: "Retail showcase" },
  { src: "/LuxuryPackaging.jpg", alt: "Elegant packaging" },
];

export default function Page() {
  return (
    <main className={cn("min-h-screen", theme.pageBg, theme.text)}>
      {/* HERO (z-index safe) */}
      <section className="relative overflow-hidden min-h-[420px] sm:min-h-[520px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#ffb26b]" />
            SUN PROSPEROUS • PERFUMES & FRAGRANCE
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Perfumes &amp; Fragrance Trading
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/85 sm:text-base">
            We supply premium-quality fragrances including designer-inspired
            perfumes, oud &amp; oriental perfumes, bulk perfumes, and gift sets—
            sourced from reliable global suppliers for wholesale and retail
            markets.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Designer-Inspired",
              "Oud & Oriental",
              "Bulk Supply",
              "Gift Sets",
              "Elegant Packaging",
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO + WHY */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* left */}
          <div className="lg:col-span-5">
            <div className={cn("rounded-3xl border p-6 shadow-sm", theme.card)}>
              <div className={cn("h-1.5 w-16 rounded-full", theme.brandGrad)} />
              <h2 className="mt-4 text-2xl font-bold">What we supply</h2>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                Our fragrance range covers{" "}
                <span className="font-semibold text-slate-900">
                  designer-inspired perfumes, oud &amp; oriental perfumes, bulk
                  perfumes, and gift sets
                </span>
                —selected for strong demand and shelf appeal.
              </p>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                We focus on{" "}
                <span className="font-semibold text-slate-900">
                  authenticity, elegant packaging
                </span>
                , and supply consistency—ideal for retailers, wholesalers, and
                distributors.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/about-sun-prosperous"
                  className={cn(
                    "inline-flex items-center justify-center rounded-xl border bg-white px-4 py-2 text-sm font-semibold shadow-sm transition",
                    theme.accentBorder,
                    theme.accentText
                  )}
                >
                  About Sun Prosperous
                </a>
                <a
                  href="/company/sun-prosperous#contact"
                  className={cn(
                    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm transition",
                    theme.button
                  )}
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="lg:col-span-7">
            <div
              className={cn(
                "rounded-3xl border p-6 shadow-sm",
                theme.brandGradSoft,
                theme.accentBorder
              )}
            >
              <h3 className="text-xl font-bold">Why choose our fragrances</h3>
              <p className={cn("mt-2 text-sm", theme.mutedText)}>
                Built for fast-moving fragrance categories with strong retail
                presentation.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {whyChoose.map((x) => (
                  <div
                    key={x.title}
                    className={cn(
                      "rounded-2xl border bg-white/80 p-5",
                      theme.accentBorder
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#ff6a00]" />
                      <div className="font-semibold">{x.title}</div>
                    </div>
                    <p
                      className={cn(
                        "mt-2 text-sm leading-relaxed",
                        theme.mutedText
                      )}
                    >
                      {x.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/40 bg-white/70 p-5">
                <h4 className="text-sm font-semibold">Order workflow</h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-4">
                  {workflow.map((s) => (
                    <div
                      key={s.n}
                      className={cn(
                        "rounded-2xl border bg-white p-4",
                        theme.accentBorder
                      )}
                    >
                      <div
                        className={cn("text-xs font-bold", theme.accentText)}
                      >
                        {s.n}
                      </div>
                      <div className="mt-1 text-sm font-semibold">{s.t}</div>
                      <div className={cn("mt-1 text-xs", theme.subtleText)}>
                        {s.d}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:pb-16">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Categories</h2>
          <p className={cn("mt-2 text-sm", theme.mutedText)}>
            Premium selections designed for wholesale and retail demand.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div
              key={c.title}
              className={cn(
                "overflow-hidden rounded-3xl border shadow-sm",
                theme.card
              )}
            >
              <div className="relative h-40">
                <Image
                  src={c.img.src}
                  alt={c.img.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-sm font-semibold text-white">{c.title}</p>
                </div>
              </div>

              <div className="p-5">
                <p className={cn("text-sm leading-relaxed", theme.mutedText)}>
                  {c.desc}
                </p>

                <ul className="mt-4 space-y-2">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff6a00]" />
                      <span className={theme.mutedText}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className={cn("rounded-3xl border p-6 shadow-sm", theme.card)}>
          <div className={cn("h-1.5 w-16 rounded-full", theme.brandGrad)} />
          <h2 className="mt-4 text-2xl font-bold">Gallery</h2>
          <p className={cn("mt-2 text-sm", theme.mutedText)}>
            Packaging, assortments, and fast-moving fragrance selections.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img) => (
              <div
                key={img.src}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white"
              >
                <div className="relative h-44">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-sm font-semibold text-slate-900">
                    {img.alt}
                  </div>
                  <div className={cn("mt-1 text-xs", theme.subtleText)}>
                    Authentic sourcing • Elegant packaging • Wholesale ready
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/company/sun-prosperous"
              className={cn(
                "inline-flex items-center justify-center rounded-xl border bg-white px-4 py-2 text-sm font-semibold shadow-sm transition",
                theme.accentBorder,
                theme.accentText
              )}
            >
              Back to Company Page
            </a>
            <a
              href="/about-sun-prosperous"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              About Page
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
