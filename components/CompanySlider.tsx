// components/company-slider.tsx
"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

export function CompanySlider({
  images,
  accentText,
}: {
  images: { src: string; alt: string }[];
  accentText: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    const t = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => clearInterval(t);
  }, [emblaApi]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 shadow-soft overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((img, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%]">
              <div
                className="h-[200px] sm:h-[260px] md:h-[320px] lg:h-[360px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img.src})` }}
                role="img"
                aria-label={img.alt}
              />
              <div className="p-4 md:p-5 flex items-center justify-between gap-3">
                <div className="text-sm text-white/75">{img.alt}</div>
                <div className={cn("text-xs font-semibold", accentText)}>
                  {i + 1} / {images.length}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-4 md:px-5 md:pb-5 flex items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "h-2.5 w-2.5 rounded-full border border-white/20 transition",
              i === index ? "bg-white/70" : "bg-white/15 hover:bg-white/25"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
