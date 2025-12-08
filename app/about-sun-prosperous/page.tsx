// app/about-sun-prosperous/page.tsx
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

const divisions = [
  {
    title: "Fast-Moving Consumer Goods (FMCG)",
    bullets: [
      "Household essentials",
      "Beverages & snacks",
      "Cleaning & hygiene items",
      "Personal care products",
      "Packaged foods",
    ],
    note: "Consistent supply and competitive wholesale prices for retailers and distributors.",
    img: { src: "/FMCG.jpg", alt: "FMCG wholesale supply" },
  },
  {
    title: "Ready-Made Garments & Textiles",
    bullets: [
      "Men’s, women’s & kids’ clothing",
      "Casual, formal & seasonal wear",
      "Workwear & uniforms",
      "Fashion textiles & accessories",
    ],
    note: "Trendy designs, durable fabrics, and strong sourcing relationships.",
    img: { src: "/Garmentstextiles.jpg", alt: "Garments & textiles" },
  },
  {
    title: "Building Materials Trading",
    bullets: [
      "Cement & steel",
      "Tiles & ceramics",
      "Electrical components",
      "Construction hardware",
      "Paints & accessories",
    ],
    note: "Certified quality materials with reliable supply for projects and contractors.",
    img: { src: "/buildingmaterials.jpg", alt: "Building materials trading" },
  },
  {
    title: "Perfumes & Fragrance Trading",
    bullets: [
      "Designer-inspired perfumes",
      "Oud & oriental perfumes",
      "Gift sets",
      "Bulk fragrances",
    ],
    note: "Authenticity and demand-driven selections for wholesale and retail markets.",
    img: { src: "/Perfumesfragrances.jpg", alt: "Perfumes & fragrances" },
  },
  {
    title: "Distalle Oil Products (Lubricants & Oils)",
    bullets: [
      "Engine oils",
      "Hydraulic oils",
      "Gear oils",
      "Industrial lubricants",
      "Brake fluids & coolants",
    ],
    note: "For workshops, fleets, construction firms, and industrial applications.",
    img: { src: "/DistalleOilProducts.jpg", alt: "Lubricants & oils" },
  },
  {
    title: "IT Products Trading",
    bullets: [
      "Laptops & desktops",
      "Networking equipment",
      "Monitors & storage systems",
      "POS machines & peripherals",
      "Microsoft & antivirus licensing",
    ],
    note: "Trusted by retailers, corporates, and IT integrators.",
    img: { src: "/ITproducts.jpg", alt: "IT products trading" },
  },
  {
    title: "Electronics Trading",
    bullets: [
      "Mobile phones & accessories",
      "Speakers & smart gadgets",
      "CCTV/security systems",
      "LED TVs & display panels",
      "Small home appliances",
    ],
    note: "High-demand electronics sourced from global suppliers.",
    img: { src: "/Mobilephonesaccessories2.jpg", alt: "Electronics trading" },
  },
  {
    title: "Auto Parts Trading (NEW DIVISION)",
    bullets: [
      "Engine components",
      "Brake pads & brake system parts",
      "Filters (oil, fuel, air, cabin)",
      "Suspension & steering parts",
      "Belts, bearings & bolts",
      "Electrical components",
      "Body parts & accessories",
    ],
    note: "Reliable manufacturers ensuring durability, performance, and compatibility.",
    img: { src: "/AutoPartsTrading.jpg", alt: "Auto parts trading" },
  },
  {
    title: "General Trading (Expanded Category)",
    bullets: [
      "Household products",
      "Tools & hardware",
      "Small appliances",
      "Lifestyle products",
      "Accessories & add-on categories",
    ],
    note: "Flexible sourcing to support mixed wholesale orders across industries.",
    img: {
      src: "/Multi-categorywholesaleFMCG.jpg",
      alt: "General trading wholesale",
    },
  },
];

const whyChoose = [
  "Multi-category wholesale trading under one roof",
  "Strong global supplier network",
  "Competitive pricing for bulk orders",
  "Professional import/export documentation",
  "Efficient warehousing & logistics",
  "Strict quality control",
  "Quick customer support",
  "Trusted by retailers, exporters & large buyers",
];

const advantages = [
  {
    title: "Dubai as a Trading Hub",
    desc: "Direct access to GCC, Asia, Africa & European shipping routes.",
    img: { src: "/StrategicAdvantages.jpg", alt: "Dubai trading hub" },
  },
  {
    title: "Efficient Supply Chain",
    desc: "Fast deliveries, large stock capacity & container shipments for bulk buyers.",
    img: {
      src: "/Buildingmaterialsindustrialsupply.jpg",
      alt: "Efficient supply chain",
    },
  },
  {
    title: "International Sourcing Network",
    desc: "Direct procurement from factories & certified manufacturers.",
    img: {
      src: "/Internationaltradingoperations.jpg",
      alt: "International sourcing network",
    },
  },
];

export default function Page() {
  return (
    <main className={cn("min-h-screen", theme.pageBg, theme.text)}>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* ✅ Background FIX: no -z-10 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/sun-prosperous.jpg"
            alt="Sun Prosperous Goods Wholesalers"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
        </div>

        {/* ✅ content above bg */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#ffb26b]" />
            SUN PROSPEROUS • Est. 2021 • Dubai, UAE
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            SUN PROSPEROUS GOODS WHOLESALERS CO. L.L.C
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/85 sm:text-base">
            FMCG • Garments • Building Materials • Perfumes • Distalle Oil • IT
            Products • Electronics • Auto Parts • General Trading
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Multi-category Wholesale",
              "Import & Export",
              "Bulk Supply",
              "Fast Logistics",
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

      {/* ABOUT + WHY */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* About */}
          <div className="lg:col-span-5">
            <div className={cn("rounded-3xl border p-6 shadow-sm", theme.card)}>
              <div className={cn("h-1.5 w-16 rounded-full", theme.brandGrad)} />
              <h2 className="mt-4 text-2xl font-bold">About Us</h2>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                Sun Prosperous Goods Wholesalers Co. L.L.C, established in{" "}
                <span className="font-semibold text-slate-900">2021</span> in
                Dubai, United Arab Emirates, is a diversified general trading
                and wholesale company engaged in multi-category import and
                export operations.
              </p>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                We specialize in wholesale distribution of FMCG products,
                ready-made garments, textiles, building materials, perfumes,
                Distalle Oil products, IT products, electronics, and auto parts.
              </p>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                With a strong global supplier network, competitive pricing, and
                efficient logistics, we serve retailers, wholesalers,
                distributors, contractors, industries, and commercial buyers
                across the UAE, GCC, Asia, Africa, and Europe.
              </p>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                Our commitment is built on{" "}
                <span className="font-semibold text-slate-900">
                  quality, reliability, and long-term business partnerships
                </span>
                .
              </p>
            </div>
          </div>

          {/* Why choose us */}
          <div className="lg:col-span-7">
            <div
              className={cn(
                "rounded-3xl border p-6 shadow-sm",
                theme.brandGradSoft,
                theme.accentBorder
              )}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold">Why Choose Us</h3>
                  <p className={cn("mt-2 text-sm", theme.mutedText)}>
                    Built for bulk buyers, fast-moving categories, and reliable
                    cross-border supply.
                  </p>
                </div>

                <a
                  href="/company/sun-prosperous#contact"
                  className={cn(
                    "hidden sm:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm transition",
                    theme.button
                  )}
                >
                  Contact Sales
                </a>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {whyChoose.map((item) => (
                  <div
                    key={item}
                    className={cn(
                      "flex items-start gap-3 rounded-2xl border bg-white/80 p-4",
                      theme.accentBorder
                    )}
                  >
                    {/* ✅ dot uses bg color */}
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff6a00]" />
                    <span
                      className={cn("text-sm leading-relaxed", theme.mutedText)}
                    >
                      {item}
                    </span>
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
                  Go to Company Page
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                >
                  Back to All Companies
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:pb-16">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Our Core Business Divisions
          </h2>
          <p className={cn("mt-2 text-sm", theme.mutedText)}>
            Multi-category wholesale distribution powered by strong sourcing and
            logistics.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d) => (
            <div
              key={d.title}
              className={cn(
                "overflow-hidden rounded-3xl border shadow-sm",
                theme.card
              )}
            >
              <div className="relative h-40">
                <Image
                  src={d.img.src}
                  alt={d.img.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-sm font-semibold text-white">{d.title}</p>
                </div>
              </div>

              <div className="p-5">
                <ul className="space-y-2">
                  {d.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm">
                      {/* ✅ dot uses bg color */}
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff6a00]" />
                      <span className={theme.mutedText}>{b}</span>
                    </li>
                  ))}
                </ul>

                <p
                  className={cn(
                    "mt-4 text-sm leading-relaxed",
                    theme.subtleText
                  )}
                >
                  {d.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STRATEGIC ADVANTAGES */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className={cn("rounded-3xl border p-6 shadow-sm", theme.card)}>
          <div className={cn("h-1.5 w-16 rounded-full", theme.brandGrad)} />
          <h2 className="mt-4 text-2xl font-bold">Strategic Advantages</h2>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {advantages.map((a) => (
              <div
                key={a.title}
                className={cn(
                  "overflow-hidden rounded-3xl border shadow-sm",
                  theme.card
                )}
              >
                <div className="relative h-36">
                  <Image
                    src={a.img.src}
                    alt={a.img.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold">{a.title}</h3>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed",
                      theme.mutedText
                    )}
                  >
                    {a.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-semibold">Our Commitment</h3>
            <p className={cn("mt-2 text-sm leading-relaxed", theme.mutedText)}>
              We aim to build long-term partnerships through quality products,
              transparent business practices, reliable service, competitive
              prices, and consistent availability. Sun Prosperous Goods
              Wholesalers Co. LLC continues to expand its trading capabilities
              to meet evolving global market demands.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
