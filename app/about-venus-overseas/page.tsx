// app/about-venus-overseas/page.tsx
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
  src: "/venus-overseas-hero.jpg", // put in /public (or change to your real file)
  alt: "Venus Overseas International Trading",
};

const about = [
  `Venus Overseas International Trading L.L.C, established in 2024, is a rapidly growing import and export company headquartered at Office 102, Al Budoor Building, Baniyas Square, Deira, Dubai – U.A.E.`,
  `We specialize in trading a diverse range of high-quality products including readymade garments, shoes, perfumes, and gifts, catering to clients across international markets.`,
  `With strong business relationships and a commitment to excellence, we aim to become a reliable trading partner for businesses seeking premium products at competitive prices.`,
  `Our primary market focus includes India, China, and Hong Kong, where we actively source and supply products, leveraging our strong industry network and deep market knowledge.`,
];

const categories = [
  {
    title: "Readymade Garments",
    desc: "Fashionable, comfortable clothing for men, women, and children—built for diverse customer preferences.",
    bullets: [
      "Casual wear",
      "Formal wear",
      "Seasonal clothing",
      "Kidswear",
      "Trendy fashion collections",
    ],
    img: { src: "/venus-garments.jpg", alt: "Readymade garments" },
  },
  {
    title: "Shoes Trading",
    desc: "Stylish and durable footwear for everyday wear, formal occasions, and trend-focused markets.",
    bullets: [
      "Men’s, women’s & kids’ shoes",
      "Sports shoes",
      "Casual footwear",
      "Formal footwear",
      "Fashion footwear collections",
    ],
    img: { src: "/venus-shoes.jpg", alt: "Shoes trading" },
  },
  {
    title: "Perfume Trading",
    desc: "Premium fragrances from reputable manufacturers with long-lasting performance and attractive packaging.",
    bullets: [
      "Designer-inspired fragrances",
      "Oriental & oud perfumes",
      "Gift sets & premium EDPs",
      "Seasonal fragrance collections",
    ],
    img: { src: "/venus-perfumes.jpg", alt: "Perfume trading" },
  },
  {
    title: "Gifts Trading",
    desc: "Unique and stylish gifting items selected for quality, creativity, and broad market appeal.",
    bullets: [
      "Corporate gifts",
      "Decorative items",
      "Seasonal gifts",
      "Personal gifting products",
      "Customized gift sets",
    ],
    img: { src: "/venus-gifts.jpg", alt: "Gifts trading" },
  },
];

const markets = [
  {
    title: "India",
    icon: "🌍",
    desc: "A strong and established market where we supply garments, shoes, perfumes, and gifts through our partner network.",
    img: { src: "/venus-market-india.jpg", alt: "Market focus India" },
  },
  {
    title: "China",
    icon: "🇨🇳",
    desc: "A key sourcing and trading hub enabling competitive pricing and diverse product availability.",
    img: { src: "/venus-market-china.jpg", alt: "Market focus China" },
  },
  {
    title: "Hong Kong",
    icon: "🇭🇰",
    desc: "A strategic trading gateway connecting global buyers and suppliers for efficient cross-border trade.",
    img: { src: "/venus-market-hk.jpg", alt: "Market focus Hong Kong" },
  },
];

const whyChoose = [
  "Wide product portfolio across multiple consumer categories",
  "Competitive pricing and reliable sourcing",
  "Strong global supplier and buyer network",
  "Strategic operational location in Dubai",
  "Fast and efficient logistics",
  "Transparent and professional business practices",
  "Commitment to long-term partnerships",
];

export default function Page() {
  return (
    <main className={cn("min-h-screen", theme.pageBg, theme.text)}>
      {/* HERO (z-index safe so the image shows reliably) */}
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
            <span className="h-2 w-2 rounded-full bg-[#a78bfa]" />
            VENUS OVERSEAS • Est. 2024 • Dubai, UAE
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            VENUS OVERSEAS INTERNATIONAL TRADING L.L.C
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/85 sm:text-base">
            Global Trading • Readymade Garments • Shoes • Perfumes • Gifts
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Global Trading",
              "Import & Export",
              "Wholesale Supply",
              "Reliable Logistics",
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
          {/* ABOUT */}
          <div className="lg:col-span-5">
            <div className={cn("rounded-3xl border p-6 shadow-sm", theme.card)}>
              <div className={cn("h-1.5 w-16 rounded-full", theme.brandGrad)} />
              <h2 className="mt-4 text-2xl font-bold">About Us</h2>

              <div className="mt-4 space-y-4">
                {about.map((p) => (
                  <p key={p} className={cn("leading-relaxed", theme.mutedText)}>
                    {p}
                  </p>
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

          {/* WHY CHOOSE */}
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
                  <h3 className="text-xl font-bold">
                    Why Choose Venus Overseas
                  </h3>
                  <p className={cn("mt-2 text-sm", theme.mutedText)}>
                    Built for reliability, strong sourcing, and smooth
                    cross-border trade.
                  </p>
                </div>

                <a
                  href="/company/venus-overseas#contact"
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
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#7c3aed]" />
                    <span
                      className={cn("text-sm leading-relaxed", theme.mutedText)}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:pb-16">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Our Product Categories
          </h2>
          <p className={cn("mt-2 text-sm", theme.mutedText)}>
            Demand-driven categories for retailers, wholesalers, and
            distributors.
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

      {/* MARKET FOCUS */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className={cn("rounded-3xl border p-6 shadow-sm", theme.card)}>
          <div className={cn("h-1.5 w-16 rounded-full", theme.brandGrad)} />
          <h2 className="mt-4 text-2xl font-bold">Market Focus</h2>
          <p className={cn("mt-2 text-sm", theme.mutedText)}>
            India, China, and Hong Kong—key markets for sourcing, supply, and
            trade operations.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {markets.map((m) => (
              <div
                key={m.title}
                className={cn(
                  "overflow-hidden rounded-3xl border shadow-sm",
                  theme.card
                )}
              >
                <div className="relative h-36">
                  <Image
                    src={m.img.src}
                    alt={m.img.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                    {m.icon} {m.title}
                  </div>
                </div>
                <div className="p-5">
                  <p className={cn("text-sm leading-relaxed", theme.mutedText)}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={cn(
              "mt-6 rounded-2xl border bg-white p-5",
              theme.accentBorder
            )}
          >
            <h3 className="text-base font-semibold">Operations Note</h3>
            <p className={cn("mt-2 text-sm leading-relaxed", theme.mutedText)}>
              We continuously explore new opportunities across these regions,
              ensuring seamless import/export operations backed by reliable
              logistics and strong supplier connections.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
