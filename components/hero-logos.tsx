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
            "group relative flex flex-col items-center rounded-3xl overflow-hidden",
            "border border-white/10 shadow-soft text-center no-underline",
            "transition hover:-translate-y-1"
          )}
        >
          {/* CARD BACKGROUND = LOGO IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-30 transition"
            style={{
              backgroundImage: `url(${c.logo.src})`,
            }}
          />

          {/* DARK OVERLAY FOR READABILITY */}
          <div className="absolute inset-0 bg-black/50" />

          {/* LOGO CENTERED */}
          {/* LOGO CENTERED (badge like screenshot) */}
          {/* LOGO CENTERED (badge) */}
          <div className="relative mb-4 mt-2 flex items-center justify-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-[1.75rem] border border-white/35 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.22)]">
              <Image
                src={c.logo.src}
                alt={c.logo.alt}
                fill
                sizes="96px"
                className="object-contain "
                priority
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="relative space-y-1 px-4">
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

            <div className="mt-1 text-xs text-white/70 line-clamp-2">
              {c.tagline}
            </div>
          </div>

          {/* CTA */}
          <div className="relative mt-5 flex items-center justify-center gap-2 text-sm font-semibold mb-2">
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
