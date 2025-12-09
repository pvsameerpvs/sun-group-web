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
            "group relative flex h-full flex-col items-center rounded-3xl overflow-hidden",
            "border border-black/10 bg-white shadow-soft text-center no-underline",
            "transition hover:-translate-y-1"
          )}
        >
          {/* CARD BACKGROUND = PURE WHITE */}
          <div className="absolute inset-0 bg-white" />

          {/* CONTENT */}
          <div className="relative flex w-full flex-1 flex-col items-center">
            {/* LOGO CENTERED (badge) */}
            <div className="mb-4 mt-2 flex items-center justify-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.22)]">
                <Image
                  src={c.logo.src}
                  alt={c.logo.alt}
                  fill
                  sizes="96px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="space-y-1 px-4">
              <div className="text-sm font-semibold text-black md:text-base">
                {c.name}
              </div>

              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/60">
                {c.established}
              </div>

              <div className="mt-1 line-clamp-2 text-xs text-black/60">
                {c.tagline}
              </div>
            </div>

            {/* CTA (BOTTOM CENTER) */}
            <div className="mt-auto mb-3 flex items-center justify-center gap-2 text-sm font-semibold">
              <span className="text-black">Open website</span>
              <span className="text-black/60 transition group-hover:translate-x-0.5 group-hover:text-black">
                →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
