'use client';

import React, { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Exo_2, Titillium_Web } from "next/font/google";

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });
const titillium = Titillium_Web({ subsets: ["latin"], variable: "--font-titillium", weight: ["400"] });

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
    "/portfolio/GraphicDesign/sm/car-dealerships.webp",
    "/portfolio/GraphicDesign/sm/fintech.webp",
    "/portfolio/GraphicDesign/sm/jewelery-stores.webp",
    "/portfolio/GraphicDesign/sm/logistic.webp",
    "/portfolio/GraphicDesign/sm/medical,-edu.webp",
    "/portfolio/GraphicDesign/sm/Music-Covers.webp",
    "/portfolio/GraphicDesign/sm/Music-Posters.webp",
    "/portfolio/GraphicDesign/sm/Album-Covers.webp",
    "/portfolio/GraphicDesign/sm/product.webp",
    "/portfolio/GraphicDesign/sm/real-estater.webp",
    "/portfolio/GraphicDesign/sm/Restaurant,-Hotel,-Food.webp",
    "/portfolio/GraphicDesign/sm/sm.webp",
    "/portfolio/GraphicDesign/sm/sm-1.webp",
    "/portfolio/GraphicDesign/sm/sm2.webp",
    "/portfolio/GraphicDesign/sm/travel.webp",
    "/portfolio/GraphicDesign/Thumbnail/thumbnails.webp",
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

  useEffect(() => {
    if (!catParam) {
      router.replace(`?cat=${categories[0].toLowerCase().replace(/\s+/g, "-")}`);
    }
    // eslint-disable-next-line
  }, []);

  const handleTabClick = (idx: number) => {
    router.push(`?cat=${categories[idx].toLowerCase().replace(/\s+/g, "-")}`);
  };

  const currentImages = portfolioImages[categories[active] as keyof typeof portfolioImages];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black px-2 pb-10 ${exo2.className}`}>
      <div className="max-w-7xl mx-auto pt-24">
        <h1 className={`text-center text-4xl md:text-5xl font-bold text-red-600 mb-2 tracking-wide ${exo2.className}`}>
          OUR PORTFOLIO
        </h1>
        <p className={`text-center text-neutral-200 max-w-2xl mx-auto mb-8 ${titillium.className}`}>
          At No Name Graphics, creativity meets strategy. We bring your ideas to life with designs that captivate, engage, and leave a lasting impression. Explore our diverse portfolio across multiple services.
        </p>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => handleTabClick(idx)}
              className={`relative px-2 md:px-4 pb-1 text-base md:text-lg font-semibold transition ${exo2.className}
                ${active === idx ? "text-red-500" : "text-white hover:text-red-400"}
              `}
              style={{ outline: "none" }}
            >
              {cat}
              {active === idx && (
                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-red-500 rounded" />
              )}
            </button>
          ))}
        </div>
        
        {/* Portfolio Images - Block Layout */}
        <div className="space-y-4 mb-8">
          {currentImages.map((imageSrc, index) => {
            // Extract filename from path for subheading
            const filename = imageSrc.split('/').pop()?.replace('.webp', '') || `Image ${index + 1}`;
            
            return (
              <div key={index} className="w-full">
                <h3 className={`text-xl md:text-2xl font-bold text-red-500 text-left uppercase tracking-wider ${titillium.className}`} style={{ marginBottom: '2px', marginTop: '0' }}>
                  {filename.replace(/-/g, ' ').replace(/,/g, ', ')}
                </h3>
                <div className="group relative overflow-hidden rounded-lg w-full h-64 md:h-[500px] lg:h-[600px]">
                  <Image
                    src={imageSrc}
                    alt={`${categories[active]} - ${filename}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}