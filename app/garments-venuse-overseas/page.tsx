// app/garments-venuse-overseas/page.tsx
import Image from "next/image";
import { cn } from "@/lib/utils";

const theme = {
  pageBg: "bg-gradient-to-b from-[#f5f1ff] via-[#ffffff] to-[#f6f7fb]",
  headerBg: "bg-white/85",

  text: "text-slate-900",
  mutedText: "text-slate-600",
  subtleText: "text-slate-500",

  accentText: "text-[#6d28d9]",
  accentBorder: "border-[#8b5cf6]/45",
  button: "bg-[#7c3aed] text-white hover:bg-[#8b5cf6]",
  card: "bg-white border-slate-200",

  brandGrad: "bg-gradient-to-r from-[#8b5cf6] via-[#6d28d9] to-[#a78bfa]",
  brandGradSoft: "bg-gradient-to-r from-[#ece6ff] via-[#ddd6fe] to-[#fff]",
};

const hero = {
  src: "/ReadyMadeGarmentsTextiles.jpg", // put in /public
  alt: "Readymade garments trading",
};

const categories = [
  {
    title: "Casual Wear",
    desc: "Comfort-first daily fashion with modern cuts and reliable fabric quality.",
    bullets: [
      "T-shirts, polos & tops",
      "Denim & casual trousers",
      "Everyday dresses",
      "Loungewear essentials",
    ],
    img: { src: "/venus-garments-casual.jpg", alt: "Casual wear garments" },
  },
  {
    title: "Formal Wear",
    desc: "Sharp, market-ready styles for office, events, and formal occasions.",
    bullets: [
      "Shirts & blouses",
      "Trousers & skirts",
      "Suits & sets",
      "Occasion-ready pieces",
    ],
    img: { src: "/venus-garments-formal.jpg", alt: "Formal wear garments" },
  },
  {
    title: "Seasonal Collections",
    desc: "Season-driven lines with updated colors, fabrics, and trend cues.",
    bullets: [
      "Summer collections",
      "Winter collections",
      "Layering essentials",
      "Seasonal trend drops",
    ],
    img: {
      src: "/venus-garments-seasonal.jpg",
      alt: "Seasonal garment collections",
    },
  },
  {
    title: "Kidswear",
    desc: "Durable, comfortable, and easy-care clothing for children of all ages.",
    bullets: [
      "Boys & girls wear",
      "School-ready items",
      "Comfort fabrics",
      "Playwear and sets",
    ],
    img: { src: "/venus-garments-kids.jpg", alt: "Kidswear garments" },
  },
  {
    title: "Trend-Based Fashion",
    desc: "Fast-moving styles aligned with market demand and retail trends.",
    bullets: [
      "New arrivals cadence",
      "Popular fits & colors",
      "Social-trend inspired items",
      "Retail-ready assortment",
    ],
    img: { src: "/venus-garments-trends.jpg", alt: "Trend-based garments" },
  },
  {
    title: "Wholesale & Export Supply",
    desc: "Bulk quantities, consistent availability, and dependable dispatch planning.",
    bullets: [
      "Wholesale pricing support",
      "Size runs & assortments",
      "Packaging options",
      "Mixed-order shipments",
    ],
    img: {
      src: "/venus-garments-wholesale.jpg",
      alt: "Garments wholesale supply",
    },
  },
];

const strengths = [
  {
    title: "Premium Fabric Quality",
    desc: "We prioritize material selection and finishing to match retail expectations and long-term wear.",
  },
  {
    title: "Modern Design & Fit",
    desc: "Contemporary silhouettes and market-relevant styling across men, women, and kids categories.",
  },
  {
    title: "Competitive Pricing",
    desc: "Strong sourcing channels across Asia help us deliver value for both wholesale and retail buyers.",
  },
  {
    title: "Reliable Availability",
    desc: "Continuous product flow and updated fashion lines to keep assortments fresh and in-demand.",
  },
];

const workflow = [
  { n: "01", t: "Share Requirement", d: "Category, sizes, target price & qty" },
  { n: "02", t: "Sourcing & Options", d: "Curated selections based on demand" },
  { n: "03", t: "Confirm & Pack", d: "Assortments, labeling & packaging" },
  { n: "04", t: "Dispatch", d: "Fast shipment planning & delivery" },
];

const gallery = [
  { src: "/venus-garments-casual.jpg", alt: "Casual wear assortment" },
  { src: "/venus-garments-formal.jpg", alt: "Formal wear assortment" },
  { src: "/venus-garments-seasonal.jpg", alt: "Seasonal collections" },
  { src: "/venus-garments-kids.jpg", alt: "Kidswear assortment" },
  { src: "/venus-garments-trends.jpg", alt: "Trend-based fashion" },
  { src: "/venus-garments-wholesale.jpg", alt: "Wholesale packing & dispatch" },
];

export default function Page() {
  return (
    <main className={cn("min-h-screen", theme.pageBg, theme.text)}>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[420px] sm:min-h-[520px]">
        {/* (z-0, not -z-10) avoids header/provider stacking issues */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#a78bfa]" />
            VENUS OVERSEAS • GARMENTS
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Readymade Garments
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/85 sm:text-base">
            We offer a comprehensive collection of fashionable, comfortable, and
            high-quality clothing for men, women, and children—built for retail
            and wholesale demand.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Casual",
              "Formal",
              "Seasonal",
              "Kidswear",
              "Trend-based",
              "Wholesale",
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

      {/* INTRO + STRENGTHS */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* left */}
          <div className="lg:col-span-5">
            <div className={cn("rounded-3xl border p-6 shadow-sm", theme.card)}>
              <div className={cn("h-1.5 w-16 rounded-full", theme.brandGrad)} />
              <h2 className="mt-4 text-2xl font-bold">What we offer</h2>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                Our garment range includes{" "}
                <span className="font-semibold text-slate-900">
                  casual wear, formal wear, seasonal collections, kidswear, and
                  trend-based fashion items
                </span>{" "}
                tailored to meet diverse customer preferences.
              </p>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                We prioritize{" "}
                <span className="font-semibold text-slate-900">
                  premium fabric quality, modern design, and competitive pricing
                </span>{" "}
                suitable for both retail and wholesale buyers.
              </p>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                With strong sourcing channels across Asia, we ensure{" "}
                <span className="font-semibold text-slate-900">
                  continuous product availability and updated fashion lines
                </span>
                .
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/about-venus-overseas"
                  className={cn(
                    "inline-flex items-center justify-center rounded-xl border bg-white px-4 py-2 text-sm font-semibold shadow-sm transition",
                    theme.accentBorder,
                    theme.accentText
                  )}
                >
                  About Venus Overseas
                </a>
                <a
                  href="/company/venus-overseas#contact"
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
              <h3 className="text-xl font-bold">Key strengths</h3>
              <p className={cn("mt-2 text-sm", theme.mutedText)}>
                Built for fast-moving assortments, consistent quality, and
                reliable bulk supply.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {strengths.map((x) => (
                  <div
                    key={x.title}
                    className={cn(
                      "rounded-2xl border bg-white/80 p-5",
                      theme.accentBorder
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#6d28d9]" />
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
                <h4 className="text-sm font-semibold">Supply workflow</h4>
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
          <h2 className="text-2xl font-bold tracking-tight">
            Garment Categories
          </h2>
          <p className={cn("mt-2 text-sm", theme.mutedText)}>
            A demand-driven selection for men, women, and children—ready for
            retail and wholesale markets.
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
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6d28d9]" />
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
            A quick look at assortment styles, collections, and bulk readiness.
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
                    Premium fabrics • Modern design • Wholesale ready
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/company/venus-overseas"
              className={cn(
                "inline-flex items-center justify-center rounded-xl border bg-white px-4 py-2 text-sm font-semibold shadow-sm transition",
                theme.accentBorder,
                theme.accentText
              )}
            >
              Back to Company Page
            </a>
            <a
              href="/about-venus-overseas"
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
