// app/providers.tsx
"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { companies, type Company } from "@/lib/companies";
import { SiteShell } from "@/components/site-shell";
import { CompanyHeader } from "@/components/company-header";
import { CompanyFooter } from "@/components/company-footer";

const FALLBACK_COMPANY: Company =
  companies.find((c) => c.id === "sun-trading") ?? companies[0];

function resolveCompany(pathname: string): Company {
  // 1) /company/:id
  const m = pathname.match(/^\/company\/([^/]+)/);
  if (m?.[1]) {
    const found = companies.find((c) => c.id === (m[1] as Company["id"]));
    if (found) return found;
  }

  // 2) Map your custom routes to a company
  const routeMap: Array<{ prefix: string; id: Company["id"] }> = [
    { prefix: "/about-sun-trading", id: "sun-trading" },
    { prefix: "/divisions-sun-trading", id: "sun-trading" },
    { prefix: "/import-export-sun-trading", id: "sun-trading" },
    { prefix: "/quality-sun-trading", id: "sun-trading" },
    { prefix: "/contact-sun-trading", id: "sun-trading" },

    // Add others when you create them:

    { prefix: "/about-sun-prosperous", id: "sun-prosperous" },
    { prefix: "/fmcg-sun-prosperous", id: "sun-prosperous" },
    { prefix: "/building-materials-sun-prosperous", id: "sun-prosperous" },
    { prefix: "/perfumes-sun-prosperous", id: "sun-prosperous" },
    { prefix: "/contact-sun-prosperous", id: "sun-prosperous" },

    // { prefix: "/quality-venus-overseas", id: "venus-overseas" },

    { prefix: "/about-venus-overseas", id: "venus-overseas" },
    { prefix: "/garments-venuse-overseas", id: "venus-overseas" },
    { prefix: "/shoes-venuse-overseas", id: "venus-overseas" },
    { prefix: "/perfumes-venuse-overseas", id: "venus-overseas" },
    { prefix: "/contact-venuse-overseas", id: "venus-overseas" },
  ];

  const hit = routeMap.find((x) => pathname.startsWith(x.prefix));
  if (hit) {
    const found = companies.find((c) => c.id === hit.id);
    if (found) return found;
  }

  return FALLBACK_COMPANY;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Hide header/footer only on "/"
  if (pathname === "/") return <>{children}</>;

  const activeCompany = resolveCompany(pathname);

  return (
    <SiteShell className="relative overflow-hidden">
      <CompanyHeader company={activeCompany} />
      {children}
      <CompanyFooter company={activeCompany} />
    </SiteShell>
  );
}
