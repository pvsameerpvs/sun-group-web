// components/company-whatsapp-float.tsx

import { companies } from "@/lib/companies";
import { cn } from "@/lib/utils";

type Company = (typeof companies)[number];

type CompanyWhatsAppFloatProps = {
  company: Company;
  fallbackNumber?: string; // optional override
};

export function CompanyWhatsAppFloat({
  company,
  fallbackNumber = "971543756775",
}: CompanyWhatsAppFloatProps) {
  // Pick company-level WhatsApp number if present, else fallback
  const whatsAppNumber = (company as any).whatsAppNumber ?? fallbackNumber;

  // Auto-insert company name into the message
  const whatsAppMessage = encodeURIComponent(
    `Hello, I would like to inquire about products and services from ${company.name}. Please assist.`
  );

  // WhatsApp redirect URL
  const whatsAppHref = `https://wa.me/${whatsAppNumber}?text=${whatsAppMessage}`;

  return (
    <a
      href={whatsAppHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${company.name} on WhatsApp`}
      className={cn(
        "fixed bottom-5 right-5 z-50",
        "flex h-14 w-14 items-center justify-center rounded-full",
        "bg-[#25D366] hover:bg-[#1ebe5a]",
        "shadow-xl shadow-black/30",
        "transition-transform duration-200 hover:scale-110"
      )}
    >
      {/* CLEAN HIGH-QUALITY WHATSAPP ICON */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-white"
      >
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.64.858 5.086 2.307 7.07L4 29l7.145-2.26A11.96 11.96 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10c-1.88 0-3.676-.523-5.238-1.43l-.37-.22-4.24 1.34 1.378-4.11-.24-.38A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10zm-3.078 6.023c-.18-.405-.367-.414-.676-.423-.176-.006-.377-.01-.578-.01-.202 0-.532.076-.81.38-.277.304-1.066 1.04-1.066 2.53 0 1.49 1.092 2.93 1.244 3.13.153.202 2.113 3.38 5.215 4.6 2.575 1.014 3.06.81 3.61.76.55-.05 1.776-.725 2.027-1.425.25-.7.25-1.3.176-1.425-.074-.126-.277-.202-.578-.354s-1.776-.876-2.053-.975c-.277-.1-.48-.15-.677.15-.197.304-.776.975-.95 1.176-.175.202-.35.228-.651.076-.302-.15-1.273-.47-2.43-1.498-1.14-1.02-1.91-2.27-2.137-2.572-.227-.303-.025-.47.15-.622.152-.152.303-.405.455-.608.152-.202.202-.354.303-.578.1-.228.05-.43-.025-.607-.074-.152-.65-1.61-.9-2.207z" />
      </svg>
    </a>
  );
}
