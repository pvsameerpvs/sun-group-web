import { companies } from "@/lib/companies";
import { SiteShell } from "@/components/site-shell";
import { HeroLogos } from "@/components/hero-logos";
import { DropdownMenu } from "@/components/ui/dropdown-menu";

export default function HomePage() {
  return (
    <SiteShell className="relative h-screen overflow-hidden text-white">
      {/* FULLSCREEN BACKGROUND VIA CSS */}
      <div className="absolute inset-0 -z-10 bg-[url('/herobg.png')] bg-cover bg-center" />
      <div className="absolute inset-0 -z-10 bg-black/70" />

      {/* LAYOUT: HEADER + MAIN + FOOTER INSIDE FULL HEIGHT */}
      <div className="flex h-full flex-col">
        {/* HEADER */}
        <header className="pt-6 pb-3">
          <div className="container mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/75">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Multi-company portal
              </span>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight">
                  All your{" "}
                  <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
                    company websites
                  </span>{" "}
                  in one place
                </h1>

                <p className="max-w-2xl text-sm md:text-base text-white/70">
                  Click a logo or use the selector to open a full static
                  website. Each company has its own header, navigation, footer,
                  and brand theme inside a single unified portal.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-[11px] text-white/55">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Static, fast, production-ready builds</span>
                </div>
                <span className="hidden sm:inline-block h-3 w-px bg-white/25" />
                <span className="hidden sm:inline-block">
                  {companies.length} companies connected to Sun Group
                </span>
              </div>
            </div>

            {/* Desktop dropdown (optional) */}
            {/* <div className="hidden md:block">
              <DropdownMenu
                label="Open a company"
                items={companies.map((c) => ({
                  label: c.name,
                  href: `/company/${c.id}`,
                  sublabel: c.established,
                }))}
              />
            </div> */}
          </div>
        </header>

        {/* MAIN – CENTERED CARD */}
        <main className="flex flex-1 items-center justify-center">
          <section className="w-full">
            <div className="container mx-auto">
              <div className="relative mx-auto max-w-6xl rounded-[2.2rem] border border-white/12 bg-black/55 p-5 md:p-7 lg:p-8 shadow-[0_22px_70px_rgba(0,0,0,0.85)] backdrop-blur-xl">
                {/* card header */}
                <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">
                      Company selector
                    </p>
                    <h2 className="mt-1 text-lg md:text-2xl font-semibold">
                      Choose a company to enter its website
                    </h2>
                  </div>

                  <div className="md:hidden">
                    <DropdownMenu
                      label="Open a company"
                      items={companies.map((c) => ({
                        label: c.name,
                        href: `/company/${c.id}`,
                        sublabel: c.established,
                      }))}
                    />
                  </div>
                </div>

                {/* logos */}
                <HeroLogos companies={companies} />
              </div>

              <p className="mt-3 text-center text-[11px] text-white/55">
                Tip: On each company website, use the top-right switcher to jump
                to another company without coming back here.
              </p>
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
