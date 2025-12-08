// app/page.tsx
import Image from "next/image";
import { companies } from "@/lib/companies";
import { HeroLogos } from "@/components/hero-logos";

export default function HomePage() {
  return (
    <main className="relative min-h-screen text-slate-900">
      {/* FULLSCREEN BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/herobg.png"
          alt="Sun Group Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Light/white overlay for elegant look */}
        <div className="absolute inset-0 bg-white/80" />
        {/* Soft gradient so it feels premium */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/85 to-white" />
      </div>

      {/* PAGE LAYOUT */}
      <div className="min-h-screen flex flex-col">
        {/* Intro */}
        <header className="pt-10 pb-6 text-center px-6">
          <h1
            className="
              text-4xl md:text-6xl
              font-extrabold tracking-tight
              bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900
              text-transparent bg-clip-text
            "
          >
            Welcome to Sun Group
          </h1>

          <p className="mt-4 max-w-4xl mx-auto text-sm md:text-base leading-relaxed text-slate-600">
            Sun Group is a trusted multi-sector business network operating
            across the UAE for over two decades. From trading and import–export
            to technology, retail, and corporate services, each company under
            the group delivers excellence, innovation, and reliable solutions
            worldwide.
          </p>
        </header>

        {/* MAIN CARD */}
        <section className="flex-1 flex items-center justify-center pb-12 px-6">
          <div className="container mx-auto flex justify-center">
            <div className="relative mx-auto w-full max-w-6xl rounded-[2.2rem] border border-black/10 bg-white/75 p-6 md:p-8 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
              {/* subtle top accent */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

              <div className="mb-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                  Explore the Sun Group Companies
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Choose a company to open its website.
                </p>
              </div>

              <HeroLogos companies={companies} />
            </div>
          </div>
        </section>

        {/* Footer text */}
        <div className="pb-6 pt-2 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} Sun Group · All company websites in one
          portal
        </div>
      </div>
    </main>
  );
}
