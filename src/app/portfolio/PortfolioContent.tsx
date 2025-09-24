'use client';

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

const categories = [
  "Graphic Design",
  "Branding", 
  "Printables",
  "Brochures",
  "Video Services",
  "Wedding invites",
];

// Static image arrays for each category
const portfolioImages = {
  "Graphic Design": [
    "/portfolio/GraphicDesign/sm/Ad-Posters-.webp",
    "/portfolio/GraphicDesign/sm/Ad-Posters -.webp",
    "/portfolio/GraphicDesign/sm/Ad-Posters.webp",
    "/portfolio/GraphicDesign/sm/car-dealership.webp",
    "/portfolio/GraphicDesign/sm/fintech.webp",
    "/portfolio/GraphicDesign/sm/jewelery-stores.webp",
    "/portfolio/GraphicDesign/sm/logistic.webp",
    "/portfolio/GraphicDesign/sm/medical,-education.webp",
    "/portfolio/GraphicDesign/sm/product-design.webp",
    "/portfolio/GraphicDesign/sm/real-estate.webp",
    "/portfolio/GraphicDesign/sm/Restaurant,-Hotel and Food.webp",
    "/portfolio/GraphicDesign/sm/travel.webp",
    "/portfolio/GraphicDesign/Thumbnail/thumbnails.webp",
    "/portfolio/GraphicDesign/sm/Music-Covers.webp",
    "/portfolio/GraphicDesign/sm/Music-Posters.webp",
    "/portfolio/GraphicDesign/sm/Album-Covers.webp",
  ],
  "Branding": [
    "/portfolio/GraphicDesign/Branding/Business-Cards.webp",
    "/portfolio/GraphicDesign/Branding/I-Card.webp",
    "/portfolio/GraphicDesign/Branding/letterhead.webp",
    "/portfolio/GraphicDesign/Branding/Emblem-Logo.webp",
    "/portfolio/GraphicDesign/Branding/Wordmark-Logo.webp",
  ],
  "Printables": [
    "/portfolio/Printables/Standee.webp",
    "/portfolio/Printables/Standee_1.webp",
    "/portfolio/Printables/BillboardBanner.webp",
    "/portfolio/Printables/BillboardBanner_1.webp",
    "/portfolio/Printables/BillboardBanner_2.webp",
    "/portfolio/Printables/BillboardBanner_3.webp",
    "/portfolio/Printables/BillboardBanner_4.webp",
    "/portfolio/Printables/BillboardBanner_5.webp",
    "/portfolio/Printables/Book COver.webp",
    "/portfolio/Printables/BookCover.webp",
    "/portfolio/Printables/Diary.webp",
    "/portfolio/Printables/Magazine.webp",
    "/portfolio/Printables/Magazine_1.webp",
    "/portfolio/Printables/Menu.webp",
    "/portfolio/Printables/Menu_1.webp",
    "/portfolio/Printables/Menu_2.webp",
    "/portfolio/Printables/Mousepad - Calander.webp",
    "/portfolio/Printables/Product Design.webp",
    "/portfolio/Printables/Product Design_1.webp",
    "/portfolio/Printables/Product Design_2.webp",
    "/portfolio/Printables/Flyers/bifold.webp",
    "/portfolio/Printables/Flyers/flyer.webp",
    "/portfolio/Printables/Flyers/trifold.webp",
  ],
  "Brochures": [
    "/portfolio/Printables/Brochures/01.webp",
    "/portfolio/Printables/Brochures/02.webp",
    "/portfolio/Printables/Brochures/03.webp",
    "/portfolio/Printables/Brochures/04.webp",
  ],
  "Video Services": [

  ],
  "Wedding invites": [
    "/portfolio/Wedding-Invites/1.webp",
    "/portfolio/Wedding-Invites/2.webp",
    "/portfolio/Wedding-Invites/3.webp",
  ]
};

function getCategoryIndex(cat: string | null) {
  if (!cat) return 0;
  const idx = categories.findIndex(
    (c) => c.toLowerCase().replace(/\s+/g, "-") === cat
  );
  return idx === -1 ? 0 : idx;
}

export default function PortfolioContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const catParam = searchParams.get("cat");
  const active = getCategoryIndex(catParam);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (!catParam) {
      router.replace(`?cat=${categories[0].toLowerCase().replace(/\s+/g, "-")}`);
    }
    setIsInitialLoad(false);
  }, [catParam, router]);

  // Reset loaded images when category changes
  useEffect(() => {
    setImagesLoaded(new Set());
  }, [active]);

  const handleTabClick = useCallback((idx: number) => {
    router.push(`?cat=${categories[idx].toLowerCase().replace(/\s+/g, "-")}`);
  }, [router]);

  const currentImages = useMemo(() => 
    portfolioImages[categories[active] as keyof typeof portfolioImages] || [],
    [active]
  );

  const handleImageLoad = useCallback((index: number) => {
    setImagesLoaded(prev => new Set(prev).add(index));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black px-2 pb-10 font-exo2">
      <div className="max-w-7xl mx-auto pt-24">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-red-600 mb-2 tracking-wide font-exo2">
          OUR PORTFOLIO
        </h1>
        <p className="text-center text-neutral-200 max-w-2xl mx-auto mb-8 font-titillium">
          At No Name Graphics, creativity meets strategy. We bring your ideas to life with designs that captivate, engage, and leave a lasting impression. Explore our diverse portfolio across multiple services.
        </p>
        
        {/* Tabs */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8" role="tablist">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => handleTabClick(idx)}
              className={`relative px-2 md:px-4 pb-1 text-base md:text-lg font-semibold transition-colors duration-200 font-exo2 focus:outline-none
                ${active === idx ? "text-red-500" : "text-white hover:text-red-400"}
              `}
              role="tab"
              aria-selected={active === idx}
            >
              {cat}
              {active === idx && (
                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-red-500 rounded will-change-transform" />
              )}
            </button>
          ))}
        </nav>
        
        {/* Portfolio Images */}
        <div className="space-y-4 mb-8">
          {currentImages.map((imageSrc, index) => {
            const filename = imageSrc.split('/').pop()?.replace('.webp', '') || `Image ${index + 1}`;
            const isAboveFold = index === 0;
            
            return (
              <article key={`${active}-${index}`} className="w-full">
                <h2 
                  className="text-xl md:text-2xl font-bold text-red-500 text-left uppercase tracking-wider font-titillium mb-0.5 mt-0"
                >
                  {filename.replace(/-/g, ' ').replace(/,/g, ', ')}
                </h2>
                <div className="group relative overflow-hidden rounded-lg w-full h-64 md:h-[500px] lg:h-[600px] will-change-transform">
                  {!imagesLoaded.has(index) && (
                    <div className="absolute inset-0 bg-neutral-800" />
                  )}
                  
                  <Image
                    src={imageSrc}
                    alt={`${categories[active]} - ${filename}`}
                    fill
                    className={`object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform ${
                      imagesLoaded.has(index) ? 'opacity-100' : 'opacity-0'
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                    priority={isAboveFold}
                    loading={isAboveFold ? "eager" : "lazy"}
                    quality={75}
                    onLoad={() => handleImageLoad(index)}
                    decoding="async"
                  />
                  
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}