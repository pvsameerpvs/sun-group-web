// app/page.tsx
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

export default function Page() {
  const aboutCards = [
    {
      title: "Import & Export Expertise",
      desc: "Global sourcing, logistics, customs clearance, documentation, container load handling, wholesale & bulk shipments.",
    },
    {
      title: "Quality Assurance",
      desc: "Careful supplier selection, inspections, testing & verification, and compliance with international standards.",
    },
    {
      title: "Customer-Centric Approach",
      desc: "Personalized service, fast communication, tailored product recommendations, competitive pricing, and reliable order fulfilment.",
    },
    {
      title: "Market Presence",
      desc: "Serving UAE, GCC, India, Africa, Asia, and selected European markets across retail, wholesale, and distribution.",
    },
  ];

  const whyChooseCards = [
    {
      title: "28+ Years of Trust",
      desc: "Operating since 1997 with a proven track record in wholesale trading and import–export across multiple markets.",
      icon: "🏆",
    },
    {
      title: "Strong Sourcing Network",
      desc: "Long-standing relationships with global manufacturers and suppliers for stable supply and competitive pricing.",
      icon: "🌍",
    },
    {
      title: "Reliable Quality Control",
      desc: "Supplier selection, inspections, verification, and compliance checks to ensure consistent product standards.",
      icon: "✅",
    },
    {
      title: "Fast Communication",
      desc: "Customer-first service with quick coordination, transparent updates, and tailored recommendations.",
      icon: "💬",
    },
    {
      title: "End-to-End Logistics",
      desc: "Documentation, compliance, customs clearance, and container handling—smooth shipping every time.",
      icon: "🚢",
    },
    {
      title: "Wholesale & Bulk Ready",
      desc: "Built for wholesalers, distributors, retailers, boutiques, and exporters needing supply at scale.",
      icon: "📦",
    },
  ];

  const whyImages = [
    { src: "/ImportExportExpertise.jpg", alt: "Import & Export Expertise" },
    { src: "/QualityAssurance.jpg", alt: "Quality Assurance" },
    { src: "/MarketPresence.jpg", alt: "Market Presence" },
    { src: "/CommitmenttoSustainability.jpg", alt: "Sustainability" },
  ];

  return (
    <main className={cn("min-h-screen", theme.pageBg, theme.text)}>
      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium bg-white/70 backdrop-blur">
              <span className={cn("h-2 w-2 rounded-full", "bg-[#7c3aed]")} />
              <span className={cn(theme.accentText)}>
                About Sun Trading LLC
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-bold tracking-tight">About Us</h2>

            <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
              Founded in <span className="font-semibold">1997</span>, Sun
              Trading LLC is one of the UAE’s most established and reputable
              import–export and wholesale trading companies. We have earned a
              strong position in regional and international markets by
              consistently delivering reliable products, competitive pricing,
              and responsive service.
            </p>

            <p className={cn("mt-4 leading-relaxed", theme.mutedText)}>
              With long-standing relationships with global manufacturers and
              suppliers, we support our partners with smooth trading
              operations—from sourcing and coordination to logistics, customs,
              documentation, and bulk handling.
            </p>

            {/* small image pair */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                {
                  src: "/Globalsourcing&wholesaletrade.jpg",
                  alt: "Global sourcing",
                },
                {
                  src: "/Logisticsexportsdistribution.jpg",
                  alt: "Logistics & distribution",
                },
              ].map((img) => (
                <div
                  key={img.src}
                  className={cn(
                    "relative h-28 overflow-hidden rounded-2xl border",
                    theme.card
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {aboutCards.map((card) => (
                <div
                  key={card.title}
                  className={cn("rounded-2xl border p-5 shadow-sm", theme.card)}
                >
                  <div
                    className={cn("h-1.5 w-10 rounded-full", theme.brandGrad)}
                  />
                  <h3 className="mt-3 font-semibold">{card.title}</h3>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed",
                      theme.mutedText
                    )}
                  >
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-choose-us" className="border-t border-slate-200/70">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <div
            className={cn(
              "rounded-3xl border p-6 sm:p-8 shadow-sm",
              theme.accentBorder,
              theme.brandGradSoft
            )}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur">
                  <span
                    className={cn("h-2 w-2 rounded-full", "bg-[#6d28d9]")}
                  />
                  <span className={cn(theme.accentText)}>Why Choose Us</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight">
                  Built for Wholesale & Global Trade
                </h2>
                <p
                  className={cn(
                    "mt-2 max-w-2xl text-sm leading-relaxed",
                    theme.mutedText
                  )}
                >
                  We combine decades of experience with dependable sourcing,
                  strict quality standards, and responsive support—so your
                  orders move smoothly and arrive with confidence.
                </p>
              </div>

              <div className={cn("text-sm", theme.subtleText)}>
                Trusted since{" "}
                <span className="font-semibold text-slate-900">1997</span>
              </div>
            </div>

            {/* image strip */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {whyImages.map((img) => (
                <div
                  key={img.src}
                  className={cn(
                    "group relative h-40 overflow-hidden rounded-2xl border bg-white shadow-sm",
                    theme.accentBorder
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-sm font-semibold text-white">
                      {img.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseCards.map((card) => (
                <div
                  key={card.title}
                  className={cn(
                    "rounded-2xl border bg-white p-5 shadow-sm",
                    theme.accentBorder
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-2xl text-lg",
                        theme.brandGradSoft
                      )}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{card.title}</h3>
                      <p
                        className={cn(
                          "mt-2 text-sm leading-relaxed",
                          theme.mutedText
                        )}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <h3 className="text-lg font-semibold">
                    Ready to source in bulk?
                  </h3>
                  <p className={cn("mt-1 text-sm", theme.mutedText)}>
                    Share your required category, quantity, and destination—our
                    team will recommend the best products and shipping options.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <a
                    href="#about"
                    className={cn(
                      "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition",
                      theme.button
                    )}
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
