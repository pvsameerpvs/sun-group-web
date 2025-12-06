import { Company } from "@/lib/companies";
import { BackToAllCompanies } from "@/components/site-shell";
import { cn } from "@/lib/utils";

export function CompanyFooter({ company }: { company: Company }) {
  const brandGrad =
    (company as any).theme?.brandGrad ??
    "bg-gradient-to-r from-black/10 via-black/5 to-transparent";

  return (
    <footer
      className={cn(
        "mt-14 w-full",
        brandGrad,
        "py-12 md:py-16" // ← bigger padding top & bottom
      )}
    >
      <div className="container-shell space-y-8 px-4">
        {/* MAIN FOOTER ROW */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1.5">
            <div className="text-base font-semibold text-slate-900">
              {company.name}
            </div>

            <div className="text-sm text-slate-700 leading-relaxed">
              {company.footerNote}
            </div>
          </div>

          <BackToAllCompanies />
        </div>

        {/* COPYRIGHT ROW */}
        <div className="pt-6 border-t border-black/10 text-center">
          <p className="text-xs text-slate-800">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
