// app/company/[id]/page.tsx
import { notFound } from "next/navigation";
import { companies } from "@/lib/companies";
import { cn } from "@/lib/utils";

// local components
import { CompanyHero } from "./_components/company-hero";
import { CompanySections } from "./_components/company-sections";
import { CompanyWhatsAppFloat } from "@/components/company-whatsapp-float";

export function generateStaticParams() {
  return companies.map((c) => ({ id: c.id }));
}

const heroBg: Record<string, string> = {
  "sun-trading": "/suntradinghero.jpg",
  "sun-prosperous": "/sun-prosperous.jpg",
  "venus-overseas": "/venus-overseas.jpg",
};

const sliderImages: Record<string, { src: string; alt: string }[]> = {
  "sun-trading": [
    {
      src: "/Globalsourcing&wholesaletrade.jpg",
      alt: "Global sourcing & wholesale trade",
    },
    {
      src: "/Ready-madegarmentfootwearsupply.jpg",
      alt: "Ready-made garments & footwear supply",
    },
    {
      src: "/Logisticsexportsdistribution.jpg",
      alt: "Logistics, exports & distribution",
    },
  ],
  "sun-prosperous": [
    {
      src: "/Multi-categorywholesaleFMCG.jpg",
      alt: "Multi-category wholesale & FMCG",
    },
    {
      src: "/Buildingmaterialsindustrialsupply.jpg",
      alt: "Building materials & industrial supply",
    },
    {
      src: "/it.png",
      alt: "IT, electronics & auto parts trading",
    },
  ],
  "venus-overseas": [
    {
      src: "/Internationaltradingoperations.jpg",
      alt: "International trading operations",
    },
    {
      src: "/Garmentsshoeslifestyleproducts.jpg",
      alt: "Garments, shoes & lifestyle products",
    },
    {
      src: "/Perfumescuratedgifting1.jpg",
      alt: "Perfumes and curated gifting",
    },
  ],
};

const sectionImage: Record<
  string,
  Record<string, { src: string; alt: string }>
> = {
  "sun-trading": {
    about: { src: "/import–export.jpg", alt: "About Sun Trading" },
    divisions: { src: "/Ready-MadeGarments.jpg", alt: "Product divisions" },
    expertise: {
      src: "/ImportExportExpertise.jpg",
      alt: "Import & export expertise",
    },
    quality: { src: "/QualityAssurance.jpg", alt: "Quality assurance" },
    markets: { src: "/MarketPresence.jpg", alt: "Market presence" },
    sustainability: {
      src: "/CommitmenttoSustainability.jpg",
      alt: "Sustainability",
    },
  },
  "sun-prosperous": {
    about: { src: "/FMCGTrading.png", alt: "About Sun Prosperous" },
    fmcg: { src: "/FMCG.jpg", alt: "FMCG" },
    apparel: { src: "/Garmentstextiles.jpg", alt: "Garments & textiles" },
    building: { src: "/buildingmaterials.jpg", alt: "Building materials" },
    perfumes: { src: "/Perfumesfragrances.jpg", alt: "Perfumes & fragrances" },
    oils: { src: "/DistalleOilProducts.jpg", alt: "Lubricants & oils" },
    it: { src: "/ITproducts.jpg", alt: "IT products" },
    electronics: { src: "/ElectronicsTrading.jpg", alt: "Electronics" },
    autoparts: { src: "/AutoPartsTrading.jpg", alt: "Auto parts" },
    advantages: {
      src: "/StrategicAdvantages.jpg",
      alt: "Strategic advantages",
    },
  },
  "venus-overseas": {
    about: { src: "/AboutVenusOverseas.jpg", alt: "About Venus Overseas" },
    garments: { src: "/Readymadegarments.jpg", alt: "Readymade garments" },
    shoes: { src: "/Shoestrading.jpg", alt: "Shoes trading" },
    perfumes: { src: "/PerfumeTrading.jpg", alt: "Perfume trading" },
    gifts: { src: "/Giftstrading.jpg", alt: "Gifts trading" },
    markets: { src: "/MarketFocus.jpg", alt: "Market focus" },
    why: { src: "/Whychooseus.jpg", alt: "Why choose us" },
    location: { src: "/Headofficelocation.jpg", alt: "Head office location" },
  },
};

export default function CompanyPage({ params }: { params: { id: string } }) {
  const id = params.id as string;
  const company = companies.find((c) => c.id === id);
  if (!company) return notFound();

  const hero = heroBg[company.id];
  const sImgs = sectionImage[company.id] ?? {};

  const text = (company as any).theme?.text ?? "text-slate-900";
  const muted = (company as any).theme?.mutedText ?? "text-slate-600";
  const subtle = (company as any).theme?.subtleText ?? "text-slate-500";
  const brandGrad =
    (company as any).theme?.brandGrad ??
    "bg-gradient-to-r from-black/10 via-black/5 to-transparent";

  return (
    <main
      id="top"
      className={cn(company.theme?.pageBg, "relative overflow-hidden")}
    >
      <CompanyHero
        company={company}
        hero={hero}
        brandGrad={brandGrad}
        sliderImages={sliderImages[company.id]}
      />

      <div className="container-shell mt-10 mb-12">
        <CompanySections
          company={company}
          sectionImages={sImgs}
          textClass={text}
          mutedClass={muted}
          subtleClass={subtle}
        />
      </div>

      <CompanyWhatsAppFloat company={company} />
    </main>
  );
}
