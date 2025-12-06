export type NavItem = { label: string; href: string; description?: string };

export type Company = {
  id: "sun-trading" | "sun-prosperous" | "venus-overseas";
  name: string;
  tagline: string;
  established: string;
  logo: { src: string; alt: string };
  theme: {
    // Used for gradients and accents. Keep them as Tailwind classes for simple theming.
    pageBg: string;
    headerBg: string;
    accentText: string;
    accentBorder: string;
    button: string;
    card: string;
    text: string;
    mutedText:string;
    subtleText:string;
    brandGrad: string;
    brandGradSoft:string;
  };
  nav: NavItem[];
  sections: Array<{ id: string; title: string; body: string[] }>;
  footerNote: string;
};

export const companies: Company[] = [
  {
    id: "sun-trading",
    name: "SUN TRADING LLC",
    tagline: "Since 1997 — A Trusted Global Import & Export Partner",
    established: "Est. 1997",
    logo: { src: "/logos/sun-trading.png", alt: "Sun Trading LLC logo" },
  theme: {
  pageBg: "bg-gradient-to-b from-[#f5f1ff] via-[#ffffff] to-[#f6f7fb]",
  headerBg: "bg-white/85",

  text: "text-slate-900",
  mutedText: "text-slate-600",
  subtleText: "text-slate-500",

  accentText: "text-[#6d28d9]",
  accentBorder: "border-[#8b5cf6]/45",
  button: "bg-[#7c3aed] text-white hover:bg-[#8b5cf6]",
  card: "bg-white border-slate-200",

  brandGrad: "bg-gradient-to-r from-[#8b5cf6] via-[#6d28d9] to-[#a78bfa]",
  brandGradSoft: "bg-gradient-to-r from-[#ece6ff] via-[#ddd6fe] to-[#fff]",
},
    nav: [
      { label: "About", href: "#about", description: "Who we are" },
      { label: "Divisions", href: "#divisions", description: "What we trade" },
      { label: "Import/Export", href: "#expertise", description: "Capabilities" },
      { label: "Quality", href: "#quality", description: "Assurance process" },
      { label: "Markets", href: "#markets", description: "Where we serve" },
      { label: "Sustainability", href: "#sustainability", description: "Responsible trade" },
    ],
    sections: [
      {
        id: "about",
        title: "About Us",
        body: [
          "Founded in 1997, Sun Trading LLC is one of the UAE’s most established import–export and wholesale trading companies.",
          "Operating from the United Arab Emirates for over 28 years, we have built strong regional and international market presence through reliable supply, competitive pricing, and consistent service.",
          "We specialize in wholesale trading of ready-made garments, shoes & footwear, gifts & novelty items, brass items (new), and general trading products.",
        ],
      },
      {
        id: "divisions",
        title: "Our Product Divisions",
        body: [
          "Ready-Made Garments: casual wear, formal wear, kids’ fashion, seasonal collections, and trend-based apparel sourced from quality-approved factories worldwide.",
          "Shoes Trading: men’s, women’s & kids’ shoes, sports, casual, formal, and seasonal footwear selected for comfort, durability, and market demand.",
          "Gifts Trading: decorative gifts, corporate souvenirs, seasonal gift sets, personalized gift items, and trendy lifestyle gifts.",
          "Novelties Trading: fashion accessories, innovative gadgets, kids’ novelty products, and trend-based lifestyle items designed for fast-moving retail & wholesale markets.",
          "Brass Items Trading (New): brass home décor, religious & cultural products, traditional utensils, decorative pieces, household accessories, and custom-made brass items.",
        ],
      },
      {
        id: "expertise",
        title: "Import & Export Expertise",
        body: [
          "End-to-end import/export solutions covering global sourcing, supplier coordination, international logistics, customs clearance, documentation & compliance, container load handling, and wholesale/bulk shipments.",
          "A professional team focused on smooth, efficient, and timely operations.",
        ],
      },
      {
        id: "quality",
        title: "Quality Assurance",
        body: [
          "Strict quality standards through careful supplier selection, quality control inspections, product testing & verification, and compliance with international standards.",
          "Our goal is to meet or exceed customer expectations consistently.",
        ],
      },
      {
        id: "markets",
        title: "Market Presence",
        body: [
          "Serving customers across UAE, GCC countries, India, Africa, Asia, and selected European markets.",
          "Supplying retailers, wholesalers, distributors, supermarkets, boutiques, and exporters.",
        ],
      },
      {
        id: "sustainability",
        title: "Commitment to Sustainability",
        body: [
          "Supporting eco-friendly products, working with ethical manufacturers, reducing waste through efficient packaging, and optimizing shipping & logistics.",
        ],
      },
    ],
    footerNote:
      "With over 28 years of excellence, Sun Trading LLC continues to lead in the import–export sector through diverse products, strong sourcing, and customer-first values.",
  },

  {
    id: "sun-prosperous",
    name: "SUN PROSPEROUS GOODS WHOLESALERS CO. L.L.C",
    tagline:
      "FMCG • Garments • Building Materials • Perfumes • Distalle Oil • IT Products • Electronics • Auto Parts • General Trading",
    established: "Est. 2021",
    logo: { src: "/logos/sun-prosperous.jpg", alt: "Sun Prosperous logo" },
theme: {
  pageBg: "bg-gradient-to-b from-[#fff3eb] via-[#ffffff] to-[#f6f7fb]",
  headerBg: "bg-white/85",

  text: "text-slate-900",
  mutedText: "text-slate-600",
  subtleText: "text-slate-500",

  accentText: "text-[#ff6a00]",
  accentBorder: "border-[#ff8a2b]/55",
  button: "bg-[#ff8a2b] text-white hover:bg-[#ff9c4d]",
  card: "bg-white border-slate-200",

  brandGrad: "bg-gradient-to-r from-[#ff8a2b] via-[#ff6a00] to-[#ffb26b]",
  brandGradSoft: "bg-gradient-to-r from-[#ffe4d2] via-[#ffd1b0] to-[#fff]",
},

    nav: [
      { label: "About", href: "#about" },
      { label: "FMCG", href: "#fmcg" },
      { label: "Apparel", href: "#apparel" },
      { label: "Building Materials", href: "#building" },
      { label: "Perfumes", href: "#perfumes" },
      { label: "Oils", href: "#oils" },
      { label: "IT", href: "#it" },
      { label: "Electronics", href: "#electronics" },
      { label: "Auto Parts", href: "#autoparts" },
      { label: "Advantages", href: "#advantages" },
    ],
    sections: [
      {
        id: "about",
        title: "About Us",
        body: [
          "Established in 2021 in Dubai, United Arab Emirates, Sun Prosperous Goods Wholesalers Co. L.L.C is a diversified general trading and wholesale company engaged in multi-category import and export operations.",
          "We serve retailers, wholesalers, distributors, contractors, industries, and commercial buyers across the UAE, GCC, Asia, Africa, and Europe.",
          "Our commitment is built on quality, reliability, and long-term business partnerships.",
        ],
      },
      {
        id: "fmcg",
        title: "Fast-Moving Consumer Goods (FMCG)",
        body: [
          "Household essentials, beverages & snacks, cleaning & hygiene items, personal care products, and packaged foods.",
          "Consistent supply and competitive wholesale pricing.",
        ],
      },
      {
        id: "apparel",
        title: "Ready-Made Garments & Textiles",
        body: [
          "Men’s, women’s & kids’ clothing, casual/formal/seasonal wear, workwear & uniforms, fashion textiles & accessories.",
          "Trendy designs, durable fabrics, and strong global sourcing.",
        ],
      },
      {
        id: "building",
        title: "Building Materials Trading",
        body: [
          "Cement & steel, tiles & ceramics, electrical components, construction hardware, paints & accessories.",
          "Certified quality, durability, and reliable supply for residential, commercial & industrial sectors.",
        ],
      },
      {
        id: "perfumes",
        title: "Perfumes & Fragrance Trading",
        body: [
          "Designer-inspired perfumes, oud & oriental perfumes, gift sets, and bulk fragrances.",
          "Focused on authenticity and strong market demand.",
        ],
      },
      {
        id: "oils",
        title: "Distalle Oil Products (Lubricants & Oils)",
        body: [
          "Engine oils, hydraulic oils, gear oils, industrial lubricants, brake fluids & coolants.",
          "Suitable for workshops, fleets, construction firms, and factories.",
        ],
      },
      {
        id: "it",
        title: "IT Products Trading",
        body: [
          "Laptops & desktops, networking equipment, monitors & storage, POS machines & peripherals, Microsoft & antivirus licensing.",
          "Trusted by retailers, corporates, and IT integrators.",
        ],
      },
      {
        id: "electronics",
        title: "Electronics Trading",
        body: [
          "Mobile phones & accessories, speakers & smart gadgets, CCTV/security systems, LED TVs & display panels, and small home appliances.",
          "High-demand consumer & commercial electronics sourced from global suppliers.",
        ],
      },
      {
        id: "autoparts",
        title: "Auto Parts Trading (New Division)",
        body: [
          "Engine components, brake system parts, filters, suspension & steering, belts/bearings/bolts, lubricants & coolants, electrical components, and body parts & accessories.",
          "Serving workshops, spare parts traders, fleet operators, transport companies, and heavy machinery operators.",
        ],
      },
      {
        id: "advantages",
        title: "Strategic Advantages",
        body: [
          "Dubai as a trading hub with access to GCC, Asia, Africa & European routes.",
          "Efficient supply chain: fast deliveries, large stock capacity & container shipments.",
          "International sourcing network: direct purchase from factories & certified manufacturers.",
        ],
      },
    ],
    footerNote:
      "Sun Prosperous Goods Wholesalers Co. L.L.C continues to expand its trading capabilities to meet evolving global market demands.",
  },

  {
    id: "venus-overseas",
    name: "VENUS OVERSEAS INTERNATIONAL TRADING L.L.C",
    tagline: "Global Trading • Readymade Garments • Shoes • Perfumes • Gifts",
    established: "Est. 2024",
    logo: { src: "/logos/venus-overseas.png", alt: "Venus Overseas logo" },
theme: {
  pageBg: "bg-gradient-to-b from-[#f5f1ff] via-[#ffffff] to-[#f6f7fb]",
  headerBg: "bg-white/85",

  text: "text-slate-900",
  mutedText: "text-slate-600",
  subtleText: "text-slate-500",

  accentText: "text-[#6d28d9]",
  accentBorder: "border-[#8b5cf6]/45",
  button: "bg-[#7c3aed] text-white hover:bg-[#8b5cf6]",
  card: "bg-white border-slate-200",

  brandGrad: "bg-gradient-to-r from-[#8b5cf6] via-[#6d28d9] to-[#a78bfa]",
  brandGradSoft: "bg-gradient-to-r from-[#ece6ff] via-[#ddd6fe] to-[#fff]",
},
    nav: [
      { label: "About", href: "#about" },
      { label: "Garments", href: "#garments" },
      { label: "Shoes", href: "#shoes" },
      { label: "Perfumes", href: "#perfumes" },
      { label: "Gifts", href: "#gifts" },
      { label: "Markets", href: "#markets" },
      { label: "Why Us", href: "#why" },
      { label: "Location", href: "#location" },
    ],
    sections: [
      {
        id: "about",
        title: "About Us",
        body: [
          "Venus Overseas International Trading L.L.C, established in 2024, is a rapidly growing import and export company headquartered in Deira, Dubai, UAE.",
          "We trade a diverse range of high-quality products including readymade garments, shoes, perfumes, and gifts—catering to clients across international markets.",
          "We aim to become a reliable trading partner for businesses seeking premium products at competitive prices.",
        ],
      },
      {
        id: "garments",
        title: "Readymade Garments",
        body: [
          "Fashionable, comfortable, and high-quality clothing for men, women, and children.",
          "Casual wear, formal wear, seasonal clothing, kidswear, and trendy fashion collections.",
        ],
      },
      {
        id: "shoes",
        title: "Shoes Trading",
        body: [
          "Men’s, women’s & kids’ shoes, sports shoes, casual and formal footwear, and fashion collections.",
          "Quality, comfort, and style remain at the core of our selection.",
        ],
      },
      {
        id: "perfumes",
        title: "Perfume Trading",
        body: [
          "Premium-quality perfumes sourced from reputable manufacturers.",
          "Designer-inspired fragrances, oriental & oud perfumes, gift sets & premium EDPs, and seasonal collections.",
        ],
      },
      {
        id: "gifts",
        title: "Gifts Trading",
        body: [
          "Corporate gifts, decorative items, seasonal gifts, personal gifting products, and customized gift sets.",
          "Every gift is selected for quality, creativity, and appeal.",
        ],
      },
      {
        id: "markets",
        title: "Market Focus",
        body: [
          "India: a strong established market for garments, shoes, perfumes, and gifts.",
          "China: key sourcing and trading hub enabling competitive pricing and diverse availability.",
          "Hong Kong: a strategic gateway connecting global buyers and suppliers.",
        ],
      },
      {
        id: "why",
        title: "Why Choose Us",
        body: [
          "Wide portfolio across multiple consumer categories.",
          "Competitive pricing and reliable sourcing.",
          "Strong global supplier and buyer network.",
          "Fast and efficient logistics with transparent business practices.",
        ],
      },
      {
        id: "location",
        title: "Head Office",
        body: [
          "Office 102, Al Budoor Building, Baniyas Square, Deira, Dubai – U.A.E.",
        ],
      },
    ],
    footerNote:
      "Venus Overseas International Trading L.L.C is built on strong relationships, efficient logistics, and a commitment to long-term partnerships.",
  },
];

export function getCompany(id: Company["id"]) {
  const c = companies.find((x) => x.id === id);
  if (!c) throw new Error("Company not found");
  return c;
}
