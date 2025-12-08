// app/building-materials-sun-prosperous/page.tsx
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
  src: "/Building materials trading.jpg",
  alt: "Building materials wholesale supply",
};

const productGroups = [
  {
    title: "Cement & Steel",
    desc: "Robust and certified essentials for residential, commercial, and industrial projects.",
    bullets: [
      "Portland cement",
      "Rebar & steel rods",
      "Structural steel items",
      "Bulk delivery support",
    ],
    img: { src: "/CementSteel.jpg", alt: "Cement and steel supply" },
  },
  {
    title: "Tiles & Ceramics",
    desc: "Project-ready tiles and ceramics for flooring, walls, and high-traffic areas.",
    bullets: [
      "Floor & wall tiles",
      "Ceramic ranges",
      "Project quantities",
      "Consistent availability",
    ],
    img: { src: "/TilesCeramics.jpg", alt: "Tiles and ceramics" },
  },
  {
    title: "Electrical Components",
    desc: "Core electrical items to support contractors and building projects.",
    bullets: [
      "Electrical accessories",
      "Switchgear essentials",
      "Project supply",
      "Compliance-focused sourcing",
    ],
    img: {
      src: "/ElectricalComponents.jpg",
      alt: "Electrical components trading",
    },
  },
  {
    title: "Construction Hardware",
    desc: "Construction support materials for daily site requirements.",
    bullets: [
      "Tools & hardware",
      "Construction accessories",
      "Fast-moving site items",
      "Bulk order readiness",
    ],
    img: { src: "/ConstructionHardware.jpg", alt: "Construction hardware" },
  },
  {
    title: "Paints & Accessories",
    desc: "Paint lines and accessories selected for durability and project use.",
    bullets: [
      "Paint products",
      "Consumable accessories",
      "Project quantities",
      "Reliable replenishment",
    ],
    img: { src: "/PaintsAccessories.jpg", alt: "Paints and accessories" },
  },
  {
    title: "Project Supply Support",
    desc: "Reliable logistics for contractors, distributors, and site deliveries.",
    bullets: [
      "Planned dispatch",
      "Fast delivery timelines",
      "Mixed-category shipments",
      "Wholesale pricing",
    ],
    img: { src: "/ProjectSupply.jpg", alt: "Project supply logistics" },
  },
];

const whyChoose = [
  {
    title: "Certified & Robust Materials",
    desc: "We focus on dependable, project-suitable supplies for long-term performance.",
  },
  {
    title: "Wide Product Range",
    desc: "Cement, steel, tiles, ceramics, electrical components, hardware, paints and more.",
  },
  {
    title: "Reliable Logistics",
    desc: "Dispatch planning built around timelines, sites, and delivery schedules.",
  },
  {
    title: "Bulk Order Ready",
    desc: "Wholesale pricing and volume handling for contractors and distributors.",
  },
];

const workflow = [
  { n: "01", t: "Requirement", d: "Share list, specs & quantities" },
  { n: "02", t: "Quote", d: "Best wholesale pricing" },
  { n: "03", t: "Prepare", d: "Pack, label & dispatch plan" },
  { n: "04", t: "Deliver", d: "Fast delivery timelines" },
];

const gallery = [
  { src: "/Building materials trading.jpg", alt: "Building materials trading" },
  { src: "/CementSteel.jpg", alt: "Cement & steel" },
  { src: "/TilesCeramics.jpg", alt: "Tiles & ceramics" },
  { src: "/ElectricalComponents.jpg", alt: "Electrical components" },
  { src: "/ConstructionHardware.jpg", alt: "Construction hardware" },
  { src: "/PaintsAccessories.jpg", alt: "Paints & accessories" },
];

export default function Page() {
  return (
    <main className={cn("min-h-screen", theme.pageBg, theme.text)}>
      {/* HERO */}
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[420px] sm:min-h-[520px]">
        {/* Background (no negative z-index) */}
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

        {/* Content above background */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#ffb26b]" />
            SUN PROSPEROUS • BUILDING MATERIALS
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Building Materials Trading
          </h1>

          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/85 sm:text-base">
            We supply robust and certified building materials for residential,
            commercial, and industrial projects—backed by reliable logistics and
            fast delivery timelines.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Cement & Steel",
              "Tiles & Ceramics",
              "Electrical Components",
              "Construction Hardware",
              "Paints",
              "Fast Delivery",
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
                Our product range includes{" "}
                <span className="font-semibold text-slate-900">
                  cement, steel, tiles, ceramics, electrical components,
                  construction hardware, paints
                </span>{" "}
                and other essential building materials.
              </p>

              <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
                We ensure{" "}
                <span className="font-semibold text-slate-900">
                  durable, high-quality supplies
                </span>{" "}
                backed by reliable logistics and fast delivery timelines—suited
                for contractors, distributors, and commercial buyers.
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
              <h3 className="text-xl font-bold">Why choose our supply</h3>
              <p className={cn("mt-2 text-sm", theme.mutedText)}>
                Built for projects that need reliable material flow and
                predictable delivery.
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
                <h4 className="text-sm font-semibold">Delivery workflow</h4>
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

      {/* PRODUCT GROUPS */}
      <section className="mx-auto max-w-6xl px-6 pb-12 sm:pb-16">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Building Materials
          </h2>
          <p className={cn("mt-2 text-sm", theme.mutedText)}>
            Core categories supplied for residential, commercial, and industrial
            needs.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productGroups.map((g) => (
            <div
              key={g.title}
              className={cn(
                "overflow-hidden rounded-3xl border shadow-sm",
                theme.card
              )}
            >
              <div className="relative h-40">
                <Image
                  src={g.img.src}
                  alt={g.img.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-sm font-semibold text-white">{g.title}</p>
                </div>
              </div>

              <div className="p-5">
                <p className={cn("text-sm leading-relaxed", theme.mutedText)}>
                  {g.desc}
                </p>

                <ul className="mt-4 space-y-2">
                  {g.bullets.map((b) => (
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
            A quick look at materials, site supply, and project-ready stock.
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
                    Certified supply • Durable materials • Fast delivery
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
