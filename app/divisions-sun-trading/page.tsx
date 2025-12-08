// app/divisions-sun-trading/page.tsx
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

const divisions = [
  {
    key: "garments",
    title: "Ready-Made Garments",
    tagline: "Men’s, women’s, and kids’ apparel for diverse markets.",
    image: "/Ready-MadeGarments.jpg",
    bullets: [
      "Casual wear, formal wear, seasonal collections",
      "Kids’ fashion and trend-based apparel",
      "Sourced from certified factories worldwide",
      "Comfort, durability, and modern designs",
    ],
    description:
      "We offer a vast selection of men’s, women’s, and kids’ clothing—crafted for comfort, durability, and modern appeal, suited for regional and international demand.",
  },
  {
    key: "shoes",
    title: "Shoes Trading",
    tagline: "Bulk footwear supply built for comfort and demand.",
    image: "/Shoestrading.jpg",
    bullets: [
      "Men’s, women’s & kids’ shoes",
      "Sports, casual, formal, fashion & seasonal ranges",
      "Selected for durability, comfort, and market demand",
      "Bulk orders for retailers, wholesalers & distributors",
    ],
    description:
      "Our footwear division supports bulk supply across multiple regions with product lines tailored to comfort, durability, and fast-moving market preferences.",
  },
  {
    key: "gifts",
    title: "Gifts Trading",
    tagline: "Premium gifting for retail, wholesale, and corporate events.",
    image: "/Giftstrading.jpg",
    bullets: [
      "Decorative gifts and corporate souvenirs",
      "Seasonal gift sets and personalized items",
      "Trendy lifestyle gifts",
      "Focus on creativity and premium presentation",
    ],
    description:
      "We supply attractive gift selections designed for corporate events, retail stores, and wholesale distribution—emphasizing aesthetic appeal and presentation.",
  },
  {
    key: "novelties",
    title: "Novelties Trading",
    tagline: "Fast-moving novelty items that keep businesses competitive.",
    image: "/NoveltiesTrading.jpg", // ✅ if you don't have, replace with any existing image
    bullets: [
      "Fashion accessories and innovative gadgets",
      "Kids’ novelty products",
      "Trend-based lifestyle items",
      "New, trending, and high-demand supply",
    ],
    description:
      "Our novelty division focuses on fast-moving products ideal for retail and wholesale markets—helping you stay current with trending, high-demand items.",
  },
  {
    key: "brass",
    title: "Brass Items Trading (New Division)",
    tagline: "Craftsmanship, premium finishing, and strong market demand.",
    image: "/BrassItemsTrading.jpg", // ✅ if you don't have, replace with any existing image
    bullets: [
      "Home décor items and household accessories",
      "Religious & cultural products",
      "Traditional utensils and decorative pieces",
      "Custom-made brass items",
    ],
    description:
      "Sun Trading LLC now offers high-quality brass products sourced from trusted international manufacturers known for craftsmanship, durability, and premium finishing—high demand across UAE, India, Africa, and GCC markets.",
  },
];

export default function Page() {
  return (
    <main className={cn("min-h-screen", theme.pageBg, theme.text)}>
      {/* Top header */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-6 sm:pt-16">
        <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className={cn("h-2 w-2 rounded-full", "bg-[#7c3aed]")} />
          <span className={theme.accentText}>SUN TRADING LLC</span>
          <span className={cn("mx-1 h-1 w-1 rounded-full bg-slate-300")} />
          <span className={theme.subtleText}>Wholesale • Import & Export</span>
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Our Product Divisions
        </h1>

        <p
          className={cn(
            "mt-3 max-w-3xl text-sm leading-relaxed",
            theme.mutedText
          )}
        >
          Explore our core trading divisions—built for reliable sourcing, bulk
          supply, and consistent quality across regional and international
          markets.
        </p>
      </section>

      {/* Divisions */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-5 lg:grid-cols-2">
          {divisions.map((d) => (
            <article
              key={d.key}
              className={cn(
                "group overflow-hidden rounded-3xl border shadow-sm transition",
                theme.card,
                "hover:shadow-md"
              )}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56">
                <Image
                  src={d.image}
                  alt={d.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className={cn("h-1.5 w-14 rounded-full", theme.brandGrad)}
                  />
                  <h2 className="mt-3 text-xl font-semibold text-white">
                    {d.title}
                  </h2>
                  <p className="mt-1 text-sm text-white/80">{d.tagline}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className={cn("text-sm leading-relaxed", theme.mutedText)}>
                  {d.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {d.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm">
                      <span
                        className={cn(
                          "mt-2 h-2 w-2 shrink-0 rounded-full",
                          "bg-[#7c3aed]"
                        )}
                      />
                      <span className={theme.mutedText}>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer row */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
                      theme.accentBorder,
                      "bg-white"
                    )}
                  >
                    Bulk Supply Available
                  </span>

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
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className={cn("text-sm leading-relaxed", theme.mutedText)}>
            Looking for consistent wholesale supply across garments, footwear,
            gifts, novelties, or brass items? We support retailers, wholesalers,
            and distributors with competitive pricing, dependable sourcing, and
            smooth logistics.
          </p>
        </div>
      </section>
    </main>
  );
}
