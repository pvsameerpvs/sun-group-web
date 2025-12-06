import Image from "next/image";
import { companies } from "@/lib/companies";
import { SiteShell } from "@/components/site-shell";
import { HeroLogos } from "@/components/hero-logos";

export default function HomePage() {
  return (
    <SiteShell className="relative min-h-screen text-white">
      {/* FULLSCREEN BACKGROUND WITH NEXT/IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/herobg.png"
          alt="Sun Group Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* BLACK OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      {/* PAGE LAYOUT */}
      <div className="min-h-screen flex flex-col">
        {/* HEADER */}
        <header className="pt-8 pb-4 text-center">
          {/* ANIMATED GRADIENT TITLE */}
          <h1
            className="
              text-4xl md:text-6xl
              font-extrabold
              tracking-wide
              bg-gradient-to-r from-blue-400 via-blue-300 to-orange-400
              text-transparent bg-clip-text
              gradient-animate
              drop-shadow-[0_0_12px_rgba(0,0,0,0.35)]
            "
          >
            Welcome to Sun Group
          </h1>

          {/* INTRO */}
          <p className="mt-3 text-white/70 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
            Sun Group is a trusted multi-sector business network operating
            across the UAE for over two decades. From trading and import–export
            to technology, retail, and corporate services, each company under
            the group delivers excellence, innovation, and reliable solutions
            worldwide.
          </p>
        </header>

        {/* MAIN CARD CENTERED */}
        <main className="flex-1 flex items-center justify-center pb-10">
          <section className="w-full">
            <div className="container mx-auto flex justify-center">
              <div className="relative mx-auto max-w-6xl rounded-[2.2rem] border border-white/12 bg-black/55 p-6 md:p-8 shadow-[0_22px_70px_rgba(0,0,0,0.85)] backdrop-blur-xl">
                {/* Card Header — Animated Gradient */}
                <div className="mb-6 text-center">
                  <h2
                    className="
                      text-2xl md:text-3xl font-bold
                      bg-gradient-to-r from-blue-400 via-blue-300 to-orange-400
                      text-transparent bg-clip-text
                      gradient-animate
                      drop-shadow-[0_0_10px_rgba(0,0,0,0.35)]
                    "
                  >
                    Explore the Sun Group Companies
                  </h2>
                </div>

                {/* Company Logos */}
                <HeroLogos companies={companies} />
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="pb-4 pt-1 text-center text-[11px] text-white/45">
          © {new Date().getFullYear()} Sun Group · All company websites in one
          portal
        </footer>
      </div>
    </SiteShell>
  );
}
