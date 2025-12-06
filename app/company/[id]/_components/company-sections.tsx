// app/company/[id]/_components/company-sections.tsx

import { cn } from "@/lib/utils";
import { companies } from "@/lib/companies";

type Company = (typeof companies)[number];

type CompanySectionsProps = {
  company: Company;
  sectionImages: Record<string, { src: string; alt: string }>;
  textClass: string;
  mutedClass: string;
  subtleClass: string;
};

export function CompanySections({
  company,
  sectionImages,
  textClass,
  mutedClass,
  subtleClass,
}: CompanySectionsProps) {
  return (
    <div className="grid gap-6">
      {company.sections.map((s, idx) => {
        const img = sectionImages[s.id];
        const reverse = idx % 2 === 1;

        return (
          <section key={s.id} id={s.id} className="scroll-mt-28">
            <div
              className={cn(
                "rounded-3xl border p-5 md:p-8 shadow-soft overflow-hidden",
                company.theme.card
              )}
            >
              <div className="grid gap-6 lg:grid-cols-12">
                {/* IMAGE */}
                <div
                  className={cn(
                    "lg:col-span-5",
                    reverse ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <div className="rounded-3xl overflow-hidden border border-black/10 bg-black/[0.02]">
                    <div
                      className="h-[220px] md:h-[280px] lg:h-[320px] w-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${
                          img?.src ?? "/sections/placeholder.jpg"
                        })`,
                        filter: "brightness(0.55) saturate(1.1) contrast(1.08)",
                      }}
                      role="img"
                      aria-label={img?.alt ?? `${s.title} image`}
                    />
                    <div className="p-4 flex items-center justify-between gap-3">
                      <div className={cn("text-sm", subtleClass)}>
                        {img?.alt ?? "Section visual"}
                      </div>
                      <a
                        href="#top"
                        className={cn(
                          "text-xs font-semibold no-underline hover:underline",
                          company.theme.accentText
                        )}
                      >
                        Back to top ↑
                      </a>
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <div
                  className={cn(
                    "lg:col-span-7",
                    reverse ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div
                        className={cn(
                          "text-xs font-semibold",
                          company.theme.accentText
                        )}
                      >
                        Section {String(idx + 1).padStart(2, "0")}
                      </div>
                      <h2
                        className={cn(
                          "mt-2 text-xl md:text-2xl font-semibold tracking-tight",
                          textClass
                        )}
                      >
                        {s.title}
                      </h2>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "mt-4 space-y-3 text-sm md:text-base",
                      mutedClass
                    )}
                  >
                    {s.body.map((p, pidx) => (
                      <p key={pidx} className="leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {company.nav
                      .filter(
                        (n) => n.href === `#${s.id}` || n.href.includes(s.id)
                      )
                      .slice(0, 1)
                      .map((n) => (
                        <span
                          key={n.href}
                          className={cn(
                            "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
                            company.theme.accentBorder,
                            "bg-black/[0.03]",
                            textClass
                          )}
                        >
                          {n.label}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
