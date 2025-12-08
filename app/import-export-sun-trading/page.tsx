// app/import-export-sun-trading/page.tsx
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

const services = [
  {
    title: "Global Sourcing",
    desc: "Product sourcing through trusted international manufacturers and supplier networks to meet quality and pricing goals.",
  },
  {
    title: "Supplier Coordination",
    desc: "End-to-end coordination for quotations, production timelines, inspections, and dispatch planning.",
  },
  {
    title: "International Logistics",
    desc: "Efficient freight planning via sea/air/land routes, aligned with delivery windows and budget targets.",
  },
  {
    title: "Customs Clearance",
    desc: "Smooth customs handling with accurate declarations and proactive issue resolution to avoid delays.",
  },
  {
    title: "Documentation & Compliance",
    desc: "Complete trade documentation and compliance support for cross-border regulations and shipping requirements.",
  },
  {
    title: "Container & Bulk Handling",
    desc: "Container loading, consolidated shipments, bulk orders, and multi-destination supply operations.",
  },
];

const highlights = [
  "Nearly three decades of import–export expertise",
  "Container loading & consolidated shipments",
  "Bulk orders and cross-border supply operations",
  "Fast, efficient delivery tailored to client requirements",
  "Strong relationships with carriers, shipping partners & suppliers",
];

export default function Page() {
  return (
    <main
      className={cn(
        "relative min-h-screen overflow-hidden",
        theme.pageBg,
        theme.text
      )}
    >
      {/* ✅ Background (use z-0, not negative z) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ImportExportExpertise2.jpg"
          alt="Import & Export Expertise Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-white/40 to-white" />
      </div>

      {/* ✅ Content above background */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#a78bfa]" />
            <span className={cn("font-semibold", "text-white")}>
              SUN TRADING LLC
            </span>
            <span className="h-1 w-1 rounded-full bg-white/60" />
            <span className="text-white/80">Import & Export Services</span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Import &amp; Export Expertise
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">
            With nearly three decades of trading expertise, we deliver complete
            end-to-end import/export services covering global sourcing, supplier
            coordination, international logistics, customs clearance,
            documentation, and international compliance.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Global Sourcing",
              "Logistics",
              "Customs",
              "Documentation",
              "Bulk & Containers",
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur"
              >
                {chip}
              </span>
            ))}
          </div>
        </section>

        {/* CONTENT */}
        <section className="mx-auto max-w-6xl px-6 pb-12 sm:pb-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* LEFT */}
            <div className="lg:col-span-5">
              <div
                className={cn(
                  "rounded-3xl border p-6 shadow-sm backdrop-blur",
                  theme.brandGradSoft,
                  theme.accentBorder
                )}
              >
                <div
                  className={cn("h-1.5 w-16 rounded-full", theme.brandGrad)}
                />
                <h2 className="mt-4 text-xl font-semibold">
                  End-to-End Trade Support
                </h2>

                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    theme.mutedText
                  )}
                >
                  We manage container loading, consolidated shipments, bulk
                  orders, and cross-border supply operations across multiple
                  continents—built around your timelines, budgets, and
                  compliance requirements.
                </p>

                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    theme.mutedText
                  )}
                >
                  Our experienced logistics team ensures smooth, fast, and
                  efficient delivery tailored to client requirements. We
                  maintain strong relationships with global carriers, shipping
                  partners, and international suppliers to ensure reliability
                  and consistency.
                </p>

                <ul className="mt-5 space-y-2">
                  {highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#7c3aed]" />
                      <span className={theme.mutedText}>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/divisions-sun-trading"
                    className={cn(
                      "inline-flex items-center justify-center rounded-xl border bg-white px-4 py-2 text-sm font-semibold shadow-sm transition",
                      theme.accentBorder,
                      theme.accentText
                    )}
                  >
                    View Product Divisions
                  </a>

                  <a
                    href="/company/sun-trading#contact"
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

            {/* RIGHT */}
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((s) => (
                  <div
                    key={s.title}
                    className={cn(
                      "rounded-2xl border p-5 shadow-sm backdrop-blur",
                      theme.card
                    )}
                  >
                    <div
                      className={cn("h-1.5 w-10 rounded-full", theme.brandGrad)}
                    />
                    <h3 className="mt-3 font-semibold">{s.title}</h3>
                    <p
                      className={cn(
                        "mt-2 text-sm leading-relaxed",
                        theme.mutedText
                      )}
                    >
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className={cn(
                  "mt-6 rounded-2xl border p-6 shadow-sm backdrop-blur",
                  theme.card
                )}
              >
                <h3 className="text-base font-semibold">
                  How we handle your shipment
                </h3>
                <p className={cn("mt-2 text-sm", theme.mutedText)}>
                  A simple, reliable workflow—optimized for speed and
                  compliance.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-4">
                  {[
                    { n: "01", t: "Source" },
                    { n: "02", t: "Coordinate" },
                    { n: "03", t: "Ship" },
                    { n: "04", t: "Clear & Deliver" },
                  ].map((step) => (
                    <div
                      key={step.n}
                      className={cn(
                        "rounded-2xl border bg-white/90 p-4",
                        theme.accentBorder
                      )}
                    >
                      <div
                        className={cn("text-xs font-bold", theme.accentText)}
                      >
                        {step.n}
                      </div>
                      <div className="mt-1 text-sm font-semibold">{step.t}</div>
                      <div className={cn("mt-1 text-xs", theme.subtleText)}>
                        Fast, consistent execution
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTNOTE */}
        <section className="mx-auto max-w-6xl px-6 pb-14">
          <div
            className={cn(
              "rounded-2xl border bg-white/90 p-6 shadow-sm backdrop-blur",
              theme.accentBorder
            )}
          >
            <p className={cn("text-sm leading-relaxed", theme.mutedText)}>
              Need container loads, consolidated shipments, or bulk supply
              across continents? Sun Trading LLC supports import/export
              operations with dependable partners, accurate documentation, and
              timely delivery—tailored to your business requirements.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
