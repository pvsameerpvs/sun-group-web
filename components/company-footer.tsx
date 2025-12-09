// file: components/company-footer.tsx
import { Company } from "@/lib/companies";
import { BackToAllCompanies } from "@/components/site-shell";
import { cn } from "@/lib/utils";
import { MapPin, Phone, Mail } from "lucide-react";

export function CompanyFooter({ company }: { company: Company }) {
  const brandGrad =
    (company as any).theme?.brandGrad ??
    "bg-gradient-to-r from-black/10 via-black/5 to-transparent";

  const sharjahWarehouse = {
    title: "Sharjah Warehouse",
    lines: [
      "Plot No. 121, Warehouse C22",
      "Sharjah Industrial Area, United Arab Emirates",
    ],
  };

  return (
    <footer
      className={cn(
        "mt-14 w-full",
        brandGrad,
        "py-14 md:py-20 border-t border-black/10"
      )}
    >
      <div className="container-shell px-4 space-y-12">
        {/* TOP (CENTER) */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
            {company.name}
          </h3>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            {company.footerNote}
          </p>
        </div>

        {/* BOTTOM (ROW: Locations + Contact) */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* LOCATIONS CARD */}
            <div className="bg-white/70 backdrop-blur-sm shadow-sm border border-black/10 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-slate-900/5 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-slate-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">
                    Locations
                  </h4>
                  <p className="text-xs text-slate-600">Warehouses & offices</p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-black/10 bg-white/60 p-4">
                  <div className="text-sm font-semibold text-slate-900">
                    {sharjahWarehouse.title}
                  </div>
                  <address className="mt-2 not-italic text-sm text-slate-700 space-y-1">
                    {sharjahWarehouse.lines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </address>
                </div>

                {company.contact?.addressLines?.length ? (
                  <div className="rounded-xl border border-black/10 bg-white/60 p-4">
                    <div className="text-sm font-semibold text-slate-900">
                      Office Address
                    </div>
                    <address className="mt-2 not-italic text-sm text-slate-700 space-y-1">
                      {company.contact.addressLines.map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                      {company.contact.poBox && (
                        <div>P.O. Box: {company.contact.poBox}</div>
                      )}
                    </address>
                  </div>
                ) : null}
              </div>
            </div>

            {/* CONTACT CARD */}
            <div className="bg-white/70 backdrop-blur-sm shadow-sm border border-black/10 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-slate-900/5 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-slate-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">
                    Contact
                  </h4>
                  <p className="text-xs text-slate-600">
                    Phone & email details
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-6">
                {company.contact?.phones?.length ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <Phone className="h-4 w-4" />
                      <span>Phone</span>
                    </div>
                    <div className="space-y-1 text-sm text-slate-700">
                      {company.contact.phones.map((p, i) => (
                        <a
                          key={i}
                          href={`tel:${p}`}
                          className="block hover:text-slate-900 transition"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-slate-600">No phone available.</p>
                )}

                {company.contact?.email ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <Mail className="h-4 w-4" />
                      <span>Email</span>
                    </div>
                    <a
                      href={`mailto:${company.contact.email}`}
                      className="text-sm text-slate-700 hover:text-slate-900 transition break-all"
                    >
                      {company.contact.email}
                    </a>
                  </div>
                ) : (
                  <p className="text-sm text-slate-600">No email available.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center">
          <BackToAllCompanies />
        </div>
      </div>
    </footer>
  );
}
