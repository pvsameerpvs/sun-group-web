import Image from "next/image";
import Link from "next/link";
import { Company } from "@/lib/companies";
import { cn } from "@/lib/utils";

export function HeroLogos({ companies }: { companies: Company[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {companies.map((c) => (
        <Link
          key={c.id}
          href={`/company/${c.id}`}
          className={cn(
            "group relative flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 px-6 py-7 no-underline shadow-soft text-center",
            "transition hover:-translate-y-1 hover:bg-white/10"
          )}
        >
          {/* COLORED GLOW */}
          <div
            className={cn(
              "pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full blur-3xl opacity-70",
              c.id === "sun-trading"
                ? "bg-[#f7d37c]/25"
                : c.id === "sun-prosperous"
                ? "bg-[#ff8a2b]/25"
                : "bg-[#8b5cf6]/25"
            )}
          />

          {/* LOGO TOP CENTER */}
          <div className="relative mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <Image
              src={c.logo.src}
              alt={c.logo.alt}
              fill
              className="object-contain p-2"
            />
          </div>

          {/* TEXT CENTER */}
          <div className="relative space-y-1">
            <div className="text-sm md:text-base font-semibold text-white">
              {c.name}
            </div>
            <div
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.2em]",
                c.theme.accentText
              )}
            >
              {c.established}
            </div>
            <div className="mt-1 text-xs text-white/60 line-clamp-2">
              {c.tagline}
            </div>
          </div>

          {/* CTA BOTTOM */}
          <div className="relative mt-5 flex items-center justify-center gap-2 text-sm font-semibold">
            <span className={cn(c.theme.accentText)}>Open website</span>
            <span className="text-white/60 transition group-hover:translate-x-0.5 group-hover:text-white">
              →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
