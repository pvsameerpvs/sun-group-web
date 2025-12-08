// app/perfumes-venuse-overseas/page.tsx
import Image from "next/image";
import { cn } from "@/lib/utils";

const theme = {
  pageBg: "bg-gradient-to-b from-[#f5f1ff] via-[#ffffff] to-[#f6f7fb]",

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
  src: "/PerfumeTrading.jpg", // put in /public
  alt: "Perfume trading and wholesale fragrance supply",
};

const perfumeCategories = [
  {
    title: "Designer-Inspired Fragrances",
    desc: "High-appeal profiles curated for strong retail movement and repeat buying.",
    bullets: [
      "Popular scent profiles",
      "Attractive presentation",
      "Wholesale assortments",
      "Fast-moving lines",
    ],
    img: {
      src: "/venus-perfumes-designer.jpg",
      alt: "Designer-inspired fragrances",
    },
  },
  {
    title: "Oriental & Oud Perfumes",
    desc: "Rich, long-lasting oriental notes with oud-focused selections for regional demand.",
    bullets: [
      "Oud & oriental blends",
      "Long-lasting performance",
      "Premium feel",
      "High-demand category",
    ],
    img: { src: "/venus-perfumes-oud.jpg", alt: "Oriental and oud perfumes" },
  },
  {
    title: "Gift Sets & Premium EDPs",
    desc: "Elegant sets and premium EDPs selected for presentation and gifting occasions.",
    bullets: [
      "Elegant gift sets",
      "Premium EDP selections",
      "Seasonal gift readiness",
      "Bulk gifting support",
    ],
    img: {
      src: "/venus-perfumes-giftsets.jpg",
      alt: "Perfume gift sets and premium EDPs",
    },
  },
  {
    title: "Seasonal Fragrance Selections",
    desc: "Trend-aligned collections curated by season and market demand.",
    bullets: [
      "Seasonal drops",
      "Demand-led curation",
      "Retail-ready packaging",
      "Assorted shipments",
    ],
    img: {
      src: "/venus-perfumes-seasonal.jpg",
      alt: "Seasonal fragrance collections",
    },
  },
];

const perfumeWhyChoose = [
  {
    title: "Longevity & Performance",
    desc: "Each product is selected for long-lasting scent performance and customer satisfaction.",
  },
  {
    title: "Presentation & Packaging",
    desc: "We emphasize elegant packaging and premium shelf appeal for wholesale and retail success.",
  },
  {
    title: "Trend Matching",
    desc: "Selections aligned with current fragrance preferences and market demand.",
  },
  {
    title: "Wholesale & Export Ready",
    desc: "Assortments, bulk quantities, and shipment planning for international supply.",
  },
];

const perfumeWorkflow = [
  { n: "01", t: "Select", d: "Profiles, markets & qty" },
  { n: "02", t: "Confirm", d: "Pricing & availability" },
  { n: "03", t: "Pack", d: "Labeling & carton prep" },
  { n: "04", t: "Dispatch", d: "Export-ready delivery" },
];

const perfumeGallery = [
  { src: "/venus-perfumes-designer.jpg", alt: "Designer-inspired perfumes" },
  { src: "/venus-perfumes-oud.jpg", alt: "Oud and oriental perfumes" },
  { src: "/venus-perfumes-giftsets.jpg", alt: "Gift sets and premium EDPs" },
  { src: "/venus-perfumes-seasonal.jpg", alt: "Seasonal fragrance selections" },
  { src: "/venus-perfumes-hero.jpg", alt: "Perfume trading hero" },
  {
    src: "/venus-perfumes-packaging.jpg",
    alt: "Packaging and wholesale preparation",
  },
];

/** Gifts section (included on the same page as requested) */
const gifts = {
  hero: {
    src: "/venus-gifts-hero.jpg", // put in /public
    alt: "Gifts trading and wholesale gift supply",
  },
  categories: [
    {
      title: "Corporate Gifts",
      desc: "Professional gifting items for organizations and bulk requirements.",
      bullets: [
        "Brand-friendly options",
        "Bulk gifting support",
        "Event quantities",
        "Consistent availability",
      ],
      img: { src: "/venus-gifts-corporate.jpg", alt: "Corporate gifts supply" },
    },
    {
      title: "Decorative Items",
      desc: "Stylish decorative products selected for quality and market appeal.",
      bullets: [
        "Home & office decor",
        "Giftable designs",
        "Retail-ready packaging",
        "Fast-moving items",
      ],
      img: { src: "/venus-gifts-decor.jpg", alt: "Decorative gift items" },
    },
    {
      title: "Seasonal Gifts",
      desc: "Season-focused gifting assortments for peak retail periods.",
      bullets: [
        "Festive assortments",
        "Promotional packs",
        "Bulk replenishment",
        "High-demand seasonal lines",
      ],
      img: {
        src: "/venus-gifts-seasonal.jpg",
        alt: "Seasonal gift collections",
      },
    },
    {
      title: "Personalized & Personal Gifting",
      desc: "Thoughtful items suitable for individual customers and gifting campaigns.",
      bullets: [
        "Personal gifting items",
        "Custom set options",
        "Quality-focused selection",
        "Market-demand styles",
      ],
      img: {
        src: "/venus-gifts-personal.jpg",
        alt: "Personal gifting products",
      },
    },
    {
      title: "Customized Gift Sets",
      desc: "Curated sets for corporate requirements, retailers, and export shipments.",
      bullets: [
        "Custom bundles",
        "Presentation-first sets",
        "Bulk order handling",
        "International shipments",
      ],
      img: { src: "/venus-gifts-sets.jpg", alt: "Customized gift sets" },
    },
    {
      title: "Bulk & Export Support",
      desc: "Packaging, labeling, and dispatch planning for international supply.",
      bullets: [
        "Mixed SKU shipments",
        "Carton planning",
        "Logistics coordination",
        "Reliable dispatch timelines",
      ],
      img: {
        src: "/venus-gifts-export.jpg",
        alt: "Gift export packing and dispatch",
      },
    },
  ],
  whyChoose: [
    {
      title: "High-Quality & Stylish",
      desc: "We focus on gift items that look premium, feel durable, and sell well.",
    },
    {
      title: "Unique & Market-Ready",
      desc: "Curated for creativity, market appeal, and strong wholesale demand.",
    },
    {
      title: "Bulk Orders & Campaigns",
      desc: "Support for seasonal promotions, corporate buying, and replenishment cycles.",
    },
    {
      title: "International Shipments",
      desc: "Export planning and packaging suited for cross-border supply.",
    },
  ],
  workflow: [
    { n: "01", t: "Choose", d: "Category, style & budget" },
    { n: "02", t: "Bundle", d: "Assortments & sets" },
    { n: "03", t: "Pack", d: "Label & carton prep" },
    { n: "04", t: "Ship", d: "Export-ready delivery" },
  ],
  gallery: [
    { src: "/venus-gifts-corporate.jpg", alt: "Corporate gifts" },
    { src: "/venus-gifts-decor.jpg", alt: "Decorative items" },
    { src: "/venus-gifts-seasonal.jpg", alt: "Seasonal gifts" },
    { src: "/venus-gifts-personal.jpg", alt: "Personal gifting products" },
    { src: "/venus-gifts-sets.jpg", alt: "Customized gift sets" },
    { src: "/venus-gifts-export.jpg", alt: "Bulk export preparation" },
  ],
};

export default function Page() {
  return (
    <main className={cn("min-h-screen", theme.pageBg, theme.text)}>
      {/* ===================== PERFUMES HERO ===================== */}
      <section className="relative overflow-hidden min-h-[420px] sm:min-h-[520px]">
        {/* use z-0 (NOT -z-10) to avoid stacking issues with sticky header / shells */}
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
            VENUS OVERSEAS • PERFUMES
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Perfume Trading
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/85 sm:text-base">
            We supply premium-quality perfumes sourced from reputable global
            fragrance manufacturers—curated for longevity, presentation, and
            strong market appeal for retailers, wholesalers, and distributors
            worldwide.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Designer-Inspired",
              "Oud",
              "Oriental",
              "Gift Sets",
              "Premium EDP",
              "Seasonal",
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

      {/* ===================== PERFUMES INTRO + WHY ===================== */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* left */}
          <div className="lg:col-span-5">
            <div className={cn("rounded-3xl border p-6 shadow-sm", theme.card)}>
              <div className={cn("h-1.5 w-16 rounded-full", theme.brandGrad)} />
              <h2 className="mt-4 text-2xl font-bold">What we supply</h2>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                Our perfume collection includes{" "}
                <span className="font-semibold text-slate-900">
                  designer-inspired fragrances, oriental &amp; oud perfumes,
                  elegant gift sets, premium EDPs, and seasonal selections
                </span>
                .
              </p>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                We cater to international retailers, wholesalers, and
                distributors seeking high-quality fragrances with strong market
                appeal.
              </p>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                Each product is selected for{" "}
                <span className="font-semibold text-slate-900">
                  longevity, presentation, and alignment with fragrance trends
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
              <h3 className="text-xl font-bold">
                Why buyers choose our fragrances
              </h3>
              <p className={cn("mt-2 text-sm", theme.mutedText)}>
                Curated for demand, performance, and export-ready wholesale
                supply.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {perfumeWhyChoose.map((x) => (
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
                  {perfumeWorkflow.map((s) => (
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

      {/* ===================== PERFUMES CATEGORIES ===================== */}
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:pb-16">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Perfumes</h2>
          <p className={cn("mt-2 text-sm", theme.mutedText)}>
            Premium selections across high-demand fragrance categories for
            wholesale and export markets.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {perfumeCategories.map((c) => (
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

      {/* ===================== PERFUMES GALLERY ===================== */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className={cn("rounded-3xl border p-6 shadow-sm", theme.card)}>
          <div className={cn("h-1.5 w-16 rounded-full", theme.brandGrad)} />
          <h2 className="mt-4 text-2xl font-bold">Gallery</h2>
          <p className={cn("mt-2 text-sm", theme.mutedText)}>
            Product presentation, category highlights, and wholesale
            preparation.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perfumeGallery.map((img) => (
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
                    Longevity • Presentation • Trend-ready
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

      {/* ===================== GIFTS HERO ===================== */}
      <section className="relative overflow-hidden min-h-[380px] sm:min-h-[460px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={gifts.hero.src}
            alt={gifts.hero.alt}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#a78bfa]" />
            VENUS OVERSEAS • GIFTS
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Gifts Trading
          </h2>

          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/85 sm:text-base">
            Our curated gifts range includes corporate gifts, decorative items,
            seasonal gifts, personalized gifting products, and custom gift
            sets—supported with bulk orders, seasonal campaigns, and
            international shipments.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Corporate",
              "Decorative",
              "Seasonal",
              "Personalized",
              "Gift Sets",
              "Bulk Supply",
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

      {/* ===================== GIFTS INTRO + WHY ===================== */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className={cn("rounded-3xl border p-6 shadow-sm", theme.card)}>
              <div className={cn("h-1.5 w-16 rounded-full", theme.brandGrad)} />
              <h3 className="mt-4 text-2xl font-bold">Gifts</h3>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                We focus on{" "}
                <span className="font-semibold text-slate-900">
                  high-quality, stylish, and unique
                </span>{" "}
                items that work for both individual customers and corporate
                buyers.
              </p>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                Each gift item is selected based on{" "}
                <span className="font-semibold text-slate-900">
                  creativity, market appeal, and material quality
                </span>
                .
              </p>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                We support bulk orders, seasonal gifting campaigns, corporate
                requirements, and international shipments.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
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

          <div className="lg:col-span-7">
            <div
              className={cn(
                "rounded-3xl border p-6 shadow-sm",
                theme.brandGradSoft,
                theme.accentBorder
              )}
            >
              <h3 className="text-xl font-bold">Why choose our gifts</h3>
              <p className={cn("mt-2 text-sm", theme.mutedText)}>
                Demand-led selection, premium feel, and export-ready bulk
                supply.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {gifts.whyChoose.map((x) => (
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
                  {gifts.workflow.map((s) => (
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

      {/* ===================== GIFTS CATEGORIES ===================== */}
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:pb-16">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Gift Categories</h2>
          <p className={cn("mt-2 text-sm", theme.mutedText)}>
            Curated gifts for corporate buyers, retailers, seasonal campaigns,
            and export supply.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gifts.categories.map((c) => (
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

      {/* ===================== GIFTS GALLERY ===================== */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className={cn("rounded-3xl border p-6 shadow-sm", theme.card)}>
          <div className={cn("h-1.5 w-16 rounded-full", theme.brandGrad)} />
          <h2 className="mt-4 text-2xl font-bold">Gifts Gallery</h2>
          <p className={cn("mt-2 text-sm", theme.mutedText)}>
            A quick look at corporate gifting, seasonal assortments, and export
            preparation.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gifts.gallery.map((img) => (
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
                    Quality • Creativity • Market appeal
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
