// app/page.tsx
import Image from "next/image";
import { companies } from "@/lib/companies";
import { HeroLogos } from "@/components/hero-logos";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#fbf7ef] text-slate-900">
      {/* soft background like screenshot */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf7ef] via-white to-[#f6f7fb]" />
        <div className="absolute inset-0 opacity-[0.10] [background:radial-gradient(circle_at_30%_20%,#f59e0b,transparent_40%),radial-gradient(circle_at_80%_30%,#60a5fa,transparent_45%),radial-gradient(circle_at_50%_85%,#94a3b8,transparent_55%)]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
        {/* big white container */}
        <div className="w-full rounded-[2.6rem] border border-slate-200/70 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.10)]">
          <div className="p-6 sm:p-10">
            {/* small top chip (like screenshot) */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-600">
              <span className="h-3 w-3 rounded-full bg-orange-500" />
              <span className="uppercase">Sun Group of Companies</span>
            </div>

            {/* cards grid */}
            <HeroLogos companies={companies} />

            {/* bottom line + footer text */}
            <div className="mt-10 flex items-center gap-6">
              <div className="h-px flex-1 bg-slate-200" />
              <div className="text-[11px] font-semibold tracking-[0.30em] text-slate-400">
                CURATED BY SUN GROUP
              </div>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="mt-6 flex flex-col gap-2 text-[12px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <div>© {new Date().getFullYear()} Sun Group of Companies.</div>
              <div>All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
