// app/shoes-venuse-overseas/page.tsx
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
  src: "/venus-shoes-hero.jpg", // put in /public
  alt: "Shoes trading and wholesale supply",
};

const categories = [
  {
    title: "Men’s Shoes",
    desc: "Durable, comfortable options for everyday use and formal occasions.",
    bullets: [
      "Casual shoes",
      "Formal shoes",
      "Sandals & slip-ons",
      "Bulk assortment options",
    ],
    img: { src: "/venus-shoes-men.jpg", alt: "Men's shoes assortment" },
  },
  {
    title: "Women’s Shoes",
    desc: "Style-driven collections aligned with market demand and seasonal trends.",
    bullets: [
      "Casual footwear",
      "Formal footwear",
      "Fashion shoes",
      "Seasonal collections",
    ],
    img: { src: "/venus-shoes-women.jpg", alt: "Women's shoes assortment" },
  },
  {
    title: "Kids’ Shoes",
    desc: "Comfort-first, hard-wearing footwear for school, play, and daily wear.",
    bullets: [
      "Everyday shoes",
      "School-ready styles",
      "Sports-inspired options",
      "Easy-care materials",
    ],
    img: { src: "/venus-shoes-kids.jpg", alt: "Kids shoes assortment" },
  },
  {
    title: "Sports Shoes",
    desc: "Active styles selected for comfort, fit, and strong retail movement.",
    bullets: [
      "Running styles",
      "Training shoes",
      "Lightweight comfort",
      "Popular colorways",
    ],
    img: { src: "/venus-shoes-sports.jpg", alt: "Sports shoes assortment" },
  },
  {
    title: "Casual & Daily Wear",
    desc: "Fast-moving casual lines ideal for wholesale distribution and retailers.",
    bullets: [
      "Sneakers & casuals",
      "Slip-ons",
      "Seasonal casual drops",
      "High-demand models",
    ],
    img: { src: "/venus-shoes-casual.jpg", alt: "Casual footwear assortment" },
  },
  {
    title: "Wholesale Supply",
    desc: "Consistent quality, competitive rates, and reliable dispatch planning.",
    bullets: [
      "Trusted manufacturers",
      "Quality checks on lots",
      "Mixed SKU shipments",
      "Wholesale pricing",
    ],
    img: {
      src: "/venus-shoes-wholesale.jpg",
      alt: "Wholesale shoes packing and supply",
    },
  },
];

const strengths = [
  {
    title: "Quality & Comfort",
    desc: "We focus on dependable construction, wear comfort, and fit across all categories.",
  },
  {
    title: "Market-Demand Selection",
    desc: "We prioritize styles and price points that move quickly in wholesale and retail markets.",
  },
  {
    title: "Contemporary Design Trends",
    desc: "Seasonal collections and updated ranges aligned with modern preferences.",
  },
  {
    title: "Trusted Manufacturers",
    desc: "Sourced from reliable suppliers to ensure consistent quality and competitive rates.",
  },
];

const workflow = [
  { n: "01", t: "Share Requirement", d: "Sizes, styles, target price & qty" },
  { n: "02", t: "Select Range", d: "Assortments based on demand" },
  { n: "03", t: "QC & Pack", d: "Lot checks, labeling & packaging" },
  { n: "04", t: "Dispatch", d: "Fast shipping & delivery planning" },
];

const gallery = [
  { src: "/venus-shoes-men.jpg", alt: "Men's shoes collection" },
  { src: "/venus-shoes-women.jpg", alt: "Women's shoes collection" },
  { src: "/venus-shoes-kids.jpg", alt: "Kids shoes collection" },
  { src: "/venus-shoes-sports.jpg", alt: "Sports shoes collection" },
  { src: "/venus-shoes-casual.jpg", alt: "Casual footwear collection" },
  { src: "/venus-shoes-wholesale.jpg", alt: "Wholesale packing & dispatch" },
];

export default function Page() {
  return (
    <main className={cn("min-h-screen", theme.pageBg, theme.text)}>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[420px] sm:min-h-[520px]">
        {/* use z-0 instead of -z-10 to avoid stacking issues */}
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
            VENUS OVERSEAS • SHOES
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Shoes Trading
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/85 sm:text-base">
            Our footwear division supplies a wide range of stylish, durable, and
            market-demand shoes for adults and children— sourced from trusted
            manufacturers for consistent quality and competitive wholesale
            rates.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Men",
              "Women",
              "Kids",
              "Sports",
              "Casual",
              "Formal",
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

      {/* INTRO + STRENGTHS */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* left */}
          <div className="lg:col-span-5">
            <div className={cn("rounded-3xl border p-6 shadow-sm", theme.card)}>
              <div className={cn("h-1.5 w-16 rounded-full", theme.brandGrad)} />
              <h2 className="mt-4 text-2xl font-bold">What we supply</h2>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                We deal in{" "}
                <span className="font-semibold text-slate-900">
                  men&apos;s, women&apos;s &amp; kids&apos; shoes, sports shoes,
                  casual and formal footwear
                </span>{" "}
                and fashion-focused seasonal collections.
              </p>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                <span className="font-semibold text-slate-900">
                  Quality, comfort, and contemporary design trends
                </span>{" "}
                are at the core of our footwear selection.
              </p>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                We source from trusted manufacturers ensuring consistent product
                quality and competitive wholesale rates— built for retailers,
                wholesalers, and distributors.
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
              <h3 className="text-xl font-bold">Why buyers choose us</h3>
              <p className={cn("mt-2 text-sm", theme.mutedText)}>
                Built for wholesale movement: consistent quality, strong
                assortments, and dependable dispatch.
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
            Footwear Categories
          </h2>
          <p className={cn("mt-2 text-sm", theme.mutedText)}>
            A market-demand assortment across adults and kids—ready for
            wholesale and export supply.
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
            Styles, assortments, and wholesale readiness for fast-moving
            markets.
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
                    Comfort • Durability • Contemporary styles
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
