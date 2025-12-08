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
    brandGradSoft: "bg-gradient-to-r from-[#ece6ff] via-[#ddd6fe] to-[#fff]"
  },

  nav: [
     { label: "Home", href: "/company/sun-trading", description: "Home" },
    { label: "About", href: "/about-sun-trading", description: "Who we are" },
    { label: "Divisions", href: "/divisions-sun-trading", description: "What we trade" },
    { label: "Import/Export", href: "/import-export-sun-trading", description: "Capabilities" },
    { label: "Quality", href: "/quality-sun-trading", description: "Assurance process" },
    { label: "Markets", href: "#markets", description: "Where we serve" },
    { label: "Sustainability", href: "#sustainability", description: "Responsible trade" }
  ],

  sections: [
    {
      id: "about",
      title: "About Us",
      body: [
        "Founded in 1997, Sun Trading LLC is one of the UAE’s most established and reputable import–export and wholesale trading companies.",
        "With over 28 years of operational excellence, we have built a strong regional and international presence by delivering reliable products, competitive pricing, and unmatched service.",
        "We specialize in the wholesale trading of ready-made garments, shoes & footwear, gifts, novelty items, brass items (new division), and general trading products.",
        "Our long-standing relationships with global manufacturers and suppliers enable us to source high-quality products that meet international standards.",
        "Sun Trading LLC continues to expand its footprint across the UAE, GCC, India, Africa, Asia, and selected European markets."
      ]
    },

    {
      id: "divisions",
      title: "Our Product Divisions",
      body: [
        // READY-MADE GARMENTS
        "Ready-Made Garments: We offer a vast selection of men’s, women’s, and kids’ clothing including casual wear, formal wear, seasonal collections, kids’ fashion, and trend-based apparel sourced from certified factories worldwide.",
        "Our garment range focuses on comfort, durability, and modern designs suited for diverse markets.",

        // SHOES TRADING
        "Shoes Trading: Our footwear division includes men's, women's, and kids’ shoes, sports shoes, casual footwear, formal footwear, fashion shoes, and seasonal collections selected for durability, comfort, and market demand.",
        "We supply bulk footwear orders for retailers, wholesalers, and distributors across multiple regions.",

        // GIFTS TRADING
        "Gifts Trading: We supply decorative gifts, corporate souvenirs, seasonal gift sets, personalized items, and lifestyle gifts ideal for corporate events, retail stores, and wholesale distribution.",
        "Our gift items focus on aesthetic appeal, creativity, and premium presentation.",

        // NOVELTIES TRADING
        "Novelties Trading: Our novelty division distributes fashion accessories, innovative gadgets, kids’ novelty products, and trend-based lifestyle items that are fast-moving and ideal for retail & wholesale markets.",
        "We ensure a supply of new, trending, and high-demand novelty items to keep businesses competitive.",

        // BRASS ITEMS TRADING
        "Brass Items Trading (New Division): Sun Trading LLC now offers high-quality brass products including home décor items, religious and cultural products, traditional utensils, decorative pieces, household accessories, and custom-made brass items.",
        "Our brass collection is sourced from trusted international manufacturers known for craftsmanship, durability, and premium finishing.",
        "These brass items are in strong demand across UAE, India, Africa, and GCC markets."
      ]
    },

    {
      id: "expertise",
      title: "Import & Export Expertise",
      body: [
        "With nearly three decades of trading expertise, we offer complete end-to-end import/export services covering global sourcing, supplier coordination, international logistics, customs clearance, documentation, and international compliance.",
        "We manage container loading, consolidated shipments, bulk orders, and cross-border supply operations across multiple continents.",
        "Our experienced logistics team ensures smooth, fast, and efficient delivery tailored to client requirements.",
        "We maintain strong relationships with global carriers, shipping partners, and international suppliers to ensure reliability and consistency."
      ]
    },

    {
      id: "quality",
      title: "Quality Assurance",
      body: [
        "Quality is central to every division at Sun Trading LLC. We adhere to strict inspection and verification standards to ensure every product meets or exceeds customer expectations.",
        "Our process includes careful supplier evaluation, on-site inspections, product testing, packaging verification, and compliance with global standards.",
        "We partner only with ethical and certified manufacturers to maintain quality and reliability at every stage of sourcing and distribution."
      ]
    },

    {
      id: "markets",
      title: "Market Presence",
      body: [
        "We serve customers across the UAE, GCC, India, Africa, Asia, and selected European markets.",
        "Our clients include retailers, wholesalers, supermarkets, distributors, fashion boutiques, corporate buyers, and export houses.",
        "Sun Trading LLC has established a stable and trusted distribution network that supports large-volume orders, seasonal demand, and long-term procurement partnerships."
      ]
    },

    {
      id: "sustainability",
      title: "Commitment to Sustainability",
      body: [
        "We support eco-friendly products, environmentally responsible manufacturing, and ethical sourcing.",
        "Our packaging process emphasizes waste reduction, optimized shipment loads, and sustainability-focused materials.",
        "Sun Trading LLC works with manufacturers who follow fair labor practices, ethical production, and global safety standards.",
        "We continuously adopt sustainable business practices to reduce environmental impact while supporting responsible global trade."
      ]
    }
  ],

  footerNote:
    "With over 28 years of excellence, Sun Trading LLC continues to lead the import–export sector through diversified product ranges, strong sourcing networks, and customer-first values. Whether you need garments, footwear, gifts, novelties, or brass items, we ensure premium quality and dependable service."
}
,
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
    brandGradSoft: "bg-gradient-to-r from-[#ffe4d2] via-[#ffd1b0] to-[#fff]"
  },

  nav: [
    { label: "Home", href: "/company/sun-prosperous" },
    { label: "About", href: "/about-sun-prosperous" },
    { label: "FMCG", href: "/fmcg-sun-prosperous" },
    { label: "Building Materials", href: "/building-materials-sun-prosperous" },
    { label: "Perfumes", href: "/perfumes-sun-prosperous" },
    { label: "Oils", href: "#oils" },
    { label: "IT", href: "#it" },
    { label: "Electronics", href: "#electronics" },
    { label: "Auto Parts", href: "#autoparts" },
    { label: "Advantages", href: "#advantages" }
  ],

  sections: [
    {
      id: "about",
      title: "About Us",
      body: [
        "Sun Prosperous Goods Wholesalers Co. L.L.C, established in 2021 in Dubai, United Arab Emirates, is a diversified general trading and wholesale company engaged in multi-category import and export operations.",
        "We specialize in wholesale distribution of FMCG products, ready-made garments, textiles, building materials, perfumes, Distalle Oil products, IT products, electronics, and auto parts.",
        "With a strong global supplier network, competitive pricing, and efficient logistics, we serve retailers, wholesalers, distributors, contractors, industries, and commercial buyers across UAE, GCC, Asia, Africa, and Europe.",
        "Our foundation is built on quality, reliability, and long-term partnerships, making us a trusted name in the wholesale and trading sector."
      ]
    },

    {
      id: "fmcg",
      title: "Fast-Moving Consumer Goods (FMCG)",
      body: [
        "We supply a wide range of high-demand FMCG products including household essentials, beverages, snacks, cleaning and hygiene products, personal care items, and packaged foods.",
        "Our FMCG division ensures consistent supply, competitive wholesale pricing, and reliable delivery for supermarkets, retailers, and distributors.",
        "We focus on stocking fast-moving products that maintain steady market demand across diverse consumer groups."
      ]
    },

    {
      id: "apparel",
      title: "Ready-Made Garments & Textiles",
      body: [
        "Our garments and textiles division includes men's, women's, and kids’ clothing across casual, formal, and seasonal wear categories.",
        "We supply workwear, uniforms, and fashion textiles, including accessories and fabric-based products.",
        "Our apparel products are sourced from quality-driven factories, offering trendy designs, durable fabrics, and competitive pricing to meet retail and wholesale market needs."
      ]
    },

    {
      id: "building",
      title: "Building Materials Trading",
      body: [
        "We supply robust and certified building materials for residential, commercial, and industrial projects.",
        "Our product range includes cement, steel, tiles, ceramics, electrical components, construction hardware, paints, and other essential building materials.",
        "We ensure durable, high-quality supplies backed by reliable logistics and fast delivery timelines."
      ]
    },

    {
      id: "perfumes",
      title: "Perfumes & Fragrance Trading",
      body: [
        "We supply premium-quality fragrances including designer-inspired perfumes, oud and oriental perfumes, bulk perfumes, and gift sets.",
        "Our fragrances are sourced from reliable global suppliers and are popular across both wholesale and retail markets.",
        "We focus on authenticity, elegant packaging, and strong demand-driven product selection."
      ]
    },

    {
      id: "oils",
      title: "Distalle Oil Products (Lubricants & Oils)",
      body: [
        "We distribute automotive and industrial lubricant solutions including engine oils, hydraulic oils, gear oils, brake fluids, coolants, and high-performance industrial lubricants.",
        "Our products serve workshops, transport fleets, construction companies, heavy machinery operators, and manufacturing industries.",
        "All lubricants are sourced from trusted producers ensuring durability and efficiency for diverse applications."
      ]
    },

    {
      id: "it",
      title: "IT Products Trading",
      body: [
        "We supply wholesale IT hardware and software including laptops, desktops, servers, networking equipment, monitors, POS systems, and storage solutions.",
        "We provide corporate licensing for Microsoft products, antivirus solutions, and software packages.",
        "Our IT products are trusted by retailers, corporate offices, system integrators, and technology distributors across the region."
      ]
    },

    {
      id: "electronics",
      title: "Electronics Trading",
      body: [
        "We distribute consumer and commercial electronics including mobile phones, smart gadgets, speakers, CCTV/security systems, LED TVs, display panels, and small home appliances.",
        "Our electronics category focuses on high-demand products sourced from global manufacturers.",
        "We support wholesale and export markets with bulk orders, fast deliveries, and competitive pricing."
      ]
    },

    {
      id: "autoparts",
      title: "Auto Parts Trading (New Division)",
      body: [
        "Our new automotive division supplies a wide range of auto spare parts for passenger and commercial vehicles.",
        "The product line includes engine parts, brake pads, filters, suspension and steering components, belts, bearings, bolts, lubricants, electrical parts, coolants, and body accessories.",
        "Industries served include auto workshops, spare parts traders, fleet operators, transport companies, and heavy machinery operators.",
        "All auto parts are sourced from certified and reliable manufacturers ensuring performance, durability, and compatibility."
      ]
    },

    {
      id: "advantages",
      title: "Strategic Advantages",
      body: [
        "Dubai as a trading hub provides seamless access to GCC, Asian, African, and European markets with efficient logistics and global shipping routes.",
        "Our efficient supply chain ensures fast deliveries, high-volume stock capacity, and container shipments for bulk buyers.",
        "We maintain an international sourcing network with direct procurement from factories, certified manufacturers, and global suppliers.",
        "Our integrated operations support professional documentation, compliance, warehousing, and secure export/import handling."
      ]
    }
  ],

  footerNote:
    "Sun Prosperous Goods Wholesalers Co. L.L.C continues to expand its multi-category trading capabilities with a focus on quality, reliability, and long-term partnerships across global markets."
}
,

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
    brandGradSoft: "bg-gradient-to-r from-[#ece6ff] via-[#ddd6fe] to-[#fff]"
  },

  nav: [
    { label: "Home", href: "/company/venus-overseas" },
    { label: "About", href: "/about-venus-overseas" },
    { label: "Garments", href: "/garments-venuse-overseas" },
    { label: "Shoes", href: "/shoes-venuse-overseas" },
    { label: "Perfumes", href: "/perfumes-venuse-overseas" },
    { label: "Gifts", href: "#gifts" },
    { label: "Markets", href: "#markets" },
    { label: "Why Us", href: "#why" },
    { label: "Location", href: "#location" }
  ],

  sections: [
    {
      id: "about",
      title: "About Us",
      body: [
        "Venus Overseas International Trading L.L.C, established in 2024, is a rapidly growing import and export company headquartered at Office 102, Al Budoor Building, Baniyas Square, Deira, Dubai – U.A.E.",
        "We specialize in trading a diverse range of high-quality products including readymade garments, shoes, perfumes, and gifts, serving clients across multiple international markets.",
        "Our goal is to build a trusted reputation as a reliable trading partner for businesses seeking premium-quality products at competitive wholesale pricing.",
        "Our primary focus markets include India, China, and Hong Kong, where we maintain strong sourcing and distribution networks supported by deep market knowledge and supplier relationships."
      ]
    },

    {
      id: "garments",
      title: "Readymade Garments",
      body: [
        "We offer a comprehensive collection of fashionable, comfortable, and high-quality clothing for men, women, and children.",
        "Our garment range includes casual wear, formal wear, seasonal collections, kidswear, and trend-based fashion items tailored to meet diverse customer preferences.",
        "We prioritize premium fabric quality, modern design, and competitive pricing suitable for both retail and wholesale buyers.",
        "With strong sourcing channels across Asia, we ensure continuous product availability and updated fashion lines."
      ]
    },

    {
      id: "shoes",
      title: "Shoes Trading",
      body: [
        "Our footwear division supplies a wide range of stylish, durable, and market-demand shoes for adults and children.",
        "We deal in men's, women's & kids’ shoes, sports shoes, casual and formal footwear, and fashion-focused seasonal collections.",
        "Quality, comfort, and contemporary design trends are at the core of our footwear selection.",
        "We source from trusted manufacturers ensuring consistent product quality and competitive wholesale rates."
      ]
    },

    {
      id: "perfumes",
      title: "Perfume Trading",
      body: [
        "We supply premium-quality perfumes sourced from reputable global fragrance manufacturers.",
        "Our perfume collection includes designer-inspired fragrances, oriental & oud perfumes, elegant gift sets, premium EDPs, and seasonal fragrance selections.",
        "We cater to international retailers, wholesalers, and distributors seeking high-quality fragrances with strong market appeal.",
        "Each product is selected for longevity, presentation, and its ability to match current fragrance trends."
      ]
    },

    {
      id: "gifts",
      title: "Gifts Trading",
      body: [
        "Our curated gifts range includes corporate gifts, decorative items, seasonal gifts, personalized gifting products, and custom gift sets.",
        "We focus on high-quality, stylish, and unique items that cater to both individual customers and corporate buyers.",
        "Each gift item is selected based on creativity, market appeal, and material quality.",
        "We support bulk orders, seasonal gifting campaigns, corporate requirements, and international shipments."
      ]
    },

    {
      id: "markets",
      title: "Market Focus",
      body: [
        "India: One of our strongest markets, where we supply garments, shoes, perfumes, and gift items through a robust distributor network.",
        "China: A major sourcing and trading hub that enables competitive pricing, diverse product availability, and rapid production cycles.",
        "Hong Kong: A strategic gateway ensuring access to international suppliers, global logistics routes, and cross-border trading efficiency.",
        "We continue to expand our market presence while maintaining strong partnerships and exploring new trading opportunities."
      ]
    },

    {
      id: "why",
      title: "Why Choose Us",
      body: [
        "A wide and diverse product portfolio covering multiple fast-moving consumer categories.",
        "Competitive pricing backed by reliable global sourcing networks.",
        "Strong relationships with international suppliers and buyers ensuring steady product flow.",
        "Strategic operational location in Dubai, providing seamless import/export access to global markets.",
        "Fast and efficient logistics supported by trusted transport partners.",
        "Transparent business practices and professional communication.",
        "Commitment to building long-term partnerships and client satisfaction."
      ]
    },

    {
      id: "location",
      title: "Head Office",
      body: [
        "Office 102, Al Budoor Building, Baniyas Square, Deira, Dubai – U.A.E.",
        "Located in one of Dubai’s most active commercial trading districts, providing easy access to global suppliers and logistics partners."
      ]
    }
  ],

  footerNote:
    "Venus Overseas International Trading L.L.C is committed to excellence, strong global partnerships, and delivering high-quality products with professional trading standards."
}

];

export function getCompany(id: Company["id"]) {
  const c = companies.find((x) => x.id === id);
  if (!c) throw new Error("Company not found");
  return c;
}
