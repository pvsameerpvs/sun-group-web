// app/quality-sun-trading/page.tsx
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

const checkpoints = [
  {
    title: "Supplier Evaluation",
    desc: "Careful supplier screening and verification to ensure ethical practices, certification, and consistent quality capability.",
  },
  {
    title: "On-Site Inspections",
    desc: "Pre-production and in-process checks to validate materials, workmanship, and adherence to specifications.",
  },
  {
    title: "Product Testing",
    desc: "Testing and verification to confirm durability, performance, and safety where applicable to the product category.",
  },
  {
    title: "Packaging Verification",
    desc: "Quality checks for packing integrity, labeling accuracy, and protection standards to reduce damage and returns.",
  },
  {
    title: "Compliance & Standards",
    desc: "Alignment with relevant international requirements and documentation to support smooth cross-border distribution.",
  },
  {
    title: "Continuous Improvement",
    desc: "Feedback-driven refinement of suppliers and processes to maintain reliability at every stage of sourcing and delivery.",
  },
];

const promises = [
  "Strict inspection and verification standards",
  "Ethical & certified manufacturing partners",
  "Reliable quality across all product divisions",
  "Reduced risk through documented checks",
  "Consistency from sourcing to distribution",
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
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/QualityAssurance.jpg" // ✅ put in /public (or change filename)
          alt="Quality Assurance Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-white/35 to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#a78bfa]" />
            <span className="font-semibold text-white">SUN TRADING LLC</span>
            <span className="h-1 w-1 rounded-full bg-white/60" />
            <span className="text-white/80">Quality Assurance</span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Quality Assurance
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">
            Quality is central to every division at Sun Trading LLC. We adhere
            to strict inspection and verification standards to ensure every
            product meets or exceeds customer expectations.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Supplier Evaluation",
              "Inspections",
              "Testing",
              "Packaging",
              "Compliance",
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

        {/* BODY */}
        <section className="mx-auto max-w-6xl px-6 pb-12 sm:pb-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* LEFT: SUMMARY + PROMISES */}
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
                  Our Quality Process
                </h2>

                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    theme.mutedText
                  )}
                >
                  Our process includes careful supplier evaluation, on-site
                  inspections, product testing, packaging verification, and
                  compliance with global standards—helping ensure reliability
                  and consistency at every stage of sourcing and distribution.
                </p>

                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    theme.mutedText
                  )}
                >
                  We partner only with ethical and certified manufacturers to
                  maintain quality and reliability across all categories we
                  trade.
                </p>

                <ul className="mt-5 space-y-2">
                  {promises.map((p) => (
                    <li key={p} className="flex gap-3 text-sm">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#7c3aed]" />
                      <span className={theme.mutedText}>{p}</span>
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
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: CHECKPOINT CARDS */}
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {checkpoints.map((c) => (
                  <div
                    key={c.title}
                    className={cn(
                      "rounded-2xl border p-5 shadow-sm backdrop-blur",
                      theme.card
                    )}
                  >
                    <div
                      className={cn("h-1.5 w-10 rounded-full", theme.brandGrad)}
                    />
                    <h3 className="mt-3 font-semibold">{c.title}</h3>
                    <p
                      className={cn(
                        "mt-2 text-sm leading-relaxed",
                        theme.mutedText
                      )}
                    >
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mini callout */}
              <div
                className={cn(
                  "mt-6 rounded-2xl border bg-white/90 p-6 shadow-sm backdrop-blur",
                  theme.accentBorder
                )}
              >
                <h3 className="text-base font-semibold">
                  Built for consistency
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    theme.mutedText
                  )}
                >
                  Our quality checks are designed to reduce risk, improve
                  consistency, and ensure dependable supply for retailers,
                  wholesalers, and distributors across regions.
                </p>
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
              From supplier evaluation to final packing verification, Sun
              Trading LLC maintains strict quality assurance standards—ensuring
              products meet or exceed expectations in every market we serve.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
