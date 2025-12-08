// app/fmcg-sun-prosperous/page.tsx
import Image from "next/image";
import { cn } from "@/lib/utils";

const theme = {
  pageBg: "bg-gradient-to-b from-[#fff3eb] via-[#ffffff] to-[#f6f7fb]",
  headerBg: "bg-white/85",

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
  src: "/FMCGHero.jpg", // ✅ put in /public
  alt: "FMCG wholesale distribution",
};

const gallery = [
  { src: "/FMCG.jpg", alt: "FMCG wholesale supply" },
  { src: "/BeveragesSnacks.jpg", alt: "Beverages & snacks" },
  { src: "/CleaningHygiene.jpg", alt: "Cleaning & hygiene items" },
  { src: "/PersonalCare.jpg", alt: "Personal care products" },
  { src: "/PackagedFoods.jpg", alt: "Packaged foods" },
  { src: "/SupermarketSupply.jpg", alt: "Supermarket & retail distribution" },
];

const categories = [
  {
    title: "Household Essentials",
    desc: "Daily-need household supplies selected for consistent turnover and broad retail demand.",
    bullets: [
      "Home essentials",
      "Kitchen basics",
      "Storage & utility",
      "Everyday consumables",
    ],
    img: { src: "/HouseholdEssentials.jpg", alt: "Household essentials" },
  },
  {
    title: "Beverages & Snacks",
    desc: "Fast-moving beverage and snack lines suited for supermarkets, groceries, and convenience stores.",
    bullets: [
      "Juices & soft drinks",
      "Tea/coffee items",
      "Chips & snacks",
      "Impulse purchase SKUs",
    ],
    img: { src: "/BeveragesSnacks.jpg", alt: "Beverages and snacks" },
  },
  {
    title: "Cleaning & Hygiene",
    desc: "Strong hygiene and cleaning portfolio for homes, offices, and institutional buyers.",
    bullets: [
      "Detergents & cleaners",
      "Disinfectants",
      "Tissues & wipes",
      "Hygiene supplies",
    ],
    img: { src: "/CleaningHygiene.jpg", alt: "Cleaning and hygiene products" },
  },
  {
    title: "Personal Care",
    desc: "High-demand personal care items aligned with everyday consumer needs and repeat purchase cycles.",
    bullets: ["Body care", "Hair care", "Oral care", "Personal hygiene"],
    img: { src: "/PersonalCare.jpg", alt: "Personal care items" },
  },
  {
    title: "Packaged Foods",
    desc: "Core packaged food selection with stable demand for regular retail replenishment.",
    bullets: [
      "Dry grocery items",
      "Canned & preserved",
      "Instant foods",
      "Daily pantry SKUs",
    ],
    img: { src: "/PackagedFoods.jpg", alt: "Packaged foods" },
  },
  {
    title: "Retail & Distributor Supply",
    desc: "Bulk supply programs built for supermarkets, retailers, wholesalers, and distribution partners.",
    bullets: [
      "Bulk wholesale pricing",
      "Mixed-category orders",
      "Scheduled replenishment",
      "Reliable delivery",
    ],
    img: {
      src: "/SupermarketSupply.jpg",
      alt: "Retail and distribution supply",
    },
  },
];

const whyUs = [
  {
    title: "Consistent Supply",
    desc: "Stock planning focused on high-rotation FMCG items to keep your shelves filled.",
  },
  {
    title: "Wholesale Pricing",
    desc: "Competitive pricing structures for bulk orders and repeated procurement cycles.",
  },
  {
    title: "Reliable Delivery",
    desc: "Delivery planning aligned with your replenishment schedule and operational needs.",
  },
  {
    title: "Market-Driven SKUs",
    desc: "Fast-moving product mix chosen to match steady demand across consumer groups.",
  },
];

const workflow = [
  { n: "01", t: "Requirement", d: "Share your product list & quantities" },
  { n: "02", t: "Quotation", d: "Best wholesale pricing & options" },
  { n: "03", t: "Pack & Dispatch", d: "Careful packing + dispatch planning" },
  { n: "04", t: "Deliver", d: "Reliable delivery to your location" },
];

export default function Page() {
  return (
    <main className={cn("min-h-screen", theme.pageBg, theme.text)}>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* background */}
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
            SUN PROSPEROUS • FMCG DIVISION
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Fast-Moving Consumer Goods (FMCG)
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/85 sm:text-base">
            We supply a wide range of high-demand FMCG products including
            household essentials, beverages, snacks, cleaning &amp; hygiene
            products, personal care items, and packaged foods—built for
            supermarkets, retailers, and distributors.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "High-demand SKUs",
              "Wholesale Supply",
              "Retail Replenishment",
              "Reliable Delivery",
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

      {/* INTRO + KPIs */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* left */}
          <div className="lg:col-span-5">
            <div className={cn("rounded-3xl border p-6 shadow-sm", theme.card)}>
              <div className={cn("h-1.5 w-16 rounded-full", theme.brandGrad)} />
              <h2 className="mt-4 text-2xl font-bold">What we deliver</h2>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                Our FMCG division ensures{" "}
                <span className="font-semibold text-slate-900">
                  consistent supply, competitive wholesale pricing
                </span>{" "}
                and reliable delivery for supermarkets, retailers, and
                distributors.
              </p>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                We focus on stocking{" "}
                <span className="font-semibold text-slate-900">
                  fast-moving products
                </span>{" "}
                that maintain steady market demand across diverse consumer
                groups.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { k: "Fast turnover SKUs", v: "Market-driven mix" },
                  { k: "Bulk supply", v: "Wholesale programs" },
                  { k: "Retail ready", v: "Shelf-friendly packs" },
                  { k: "Delivery", v: "Planned & reliable" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className={cn(
                      "rounded-2xl border bg-white p-4",
                      theme.accentBorder
                    )}
                  >
                    <div className={cn("text-xs font-bold", theme.accentText)}>
                      {x.k}
                    </div>
                    <div className={cn("mt-1 text-sm", theme.mutedText)}>
                      {x.v}
                    </div>
                  </div>
                ))}
              </div>

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
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold">Why buyers choose us</h3>
                  <p className={cn("mt-2 text-sm", theme.mutedText)}>
                    Optimized for supermarkets, retailers, and distribution
                    partners.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {whyUs.map((item) => (
                  <div
                    key={item.title}
                    className={cn(
                      "rounded-2xl border bg-white/80 p-5",
                      theme.accentBorder
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#ff6a00]" />
                      <div className="font-semibold">{item.title}</div>
                    </div>
                    <p
                      className={cn(
                        "mt-2 text-sm leading-relaxed",
                        theme.mutedText
                      )}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/40 bg-white/70 p-5">
                <h4 className="text-sm font-semibold">
                  Simple supply workflow
                </h4>
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
            FMCG Product Categories
          </h2>
          <p className={cn("mt-2 text-sm", theme.mutedText)}>
            High-demand categories tailored for steady rotation and consistent
            replenishment.
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
            A quick look at FMCG supply, packing, and retail-ready distribution.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g) => (
              <div
                key={g.src}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white"
              >
                <div className="relative h-44">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-sm font-semibold text-slate-900">
                    {g.alt}
                  </div>
                  <div className={cn("mt-1 text-xs", theme.subtleText)}>
                    Wholesale supply • Fast moving • Reliable delivery
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
