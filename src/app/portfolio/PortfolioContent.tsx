'use client';

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import YouTube from 'react-youtube';

const categories = [
  "Graphic Design",
  "Branding", 
  "Printables",
  "Video Services",
  "Wedding Invites", 
];

// Define file counts for each category and subcategory
const categoryFileCounts = {
  "Graphic Design": {
    "Advertising": [
      "/portfolio/GraphicDesign/sm/Ad-Posters-.webp",
      "/portfolio/GraphicDesign/sm/Ad-Posters -.webp", 
      "/portfolio/GraphicDesign/sm/Ad-Posters.webp"
    ],
    "Business / Corporate": [
      "/portfolio/GraphicDesign/sm/car-dealership.webp",
      "/portfolio/GraphicDesign/sm/fintech.webp",
      "/portfolio/GraphicDesign/sm/jewelery-stores.webp", 
      "/portfolio/GraphicDesign/sm/logistic.webp",
      "/portfolio/GraphicDesign/sm/medical,-education.webp",
      "/portfolio/GraphicDesign/sm/real-estate.webp"
    ],
    "Hospitality & Travel": [
      "/portfolio/GraphicDesign/sm/Restaurant,-Hotel and Food.webp",
      "/portfolio/GraphicDesign/sm/travel.webp"
    ],
    "Product & Branding": [
      "/portfolio/GraphicDesign/sm/product-design.webp",
      "/portfolio/GraphicDesign/Thumbnail/thumbnails.webp"
    ],
    "Music / Entertainment": [
      "/portfolio/GraphicDesign/sm/Music-Covers.webp",
      "/portfolio/GraphicDesign/sm/Music-Posters.webp",
      "/portfolio/GraphicDesign/sm/Album-Covers.webp"
    ]
  },
  "Branding": {
    "Stationery": [
      "/portfolio/GraphicDesign/Branding/Business-Cards.webp",
      "/portfolio/GraphicDesign/Branding/I-Card.webp",
      "/portfolio/GraphicDesign/Branding/letterhead.webp"
    ],
    "Logos": [
      "/portfolio/GraphicDesign/Branding/Emblem-Logo.webp",
      "/portfolio/GraphicDesign/Branding/Wordmark-Logo.webp"
    ]
  },
  "Printables": {
    "Large Displays": [
      "/portfolio/Printables/Standee1.webp",
      "/portfolio/Printables/Standee2.webp",
      "/portfolio/Printables/BillboardBanner_1.webp",
      "/portfolio/Printables/BillboardBanner_2.webp",
      "/portfolio/Printables/BillboardBanner_3.webp",
      "/portfolio/Printables/BillboardBanner_4.webp",
      "/portfolio/Printables/BillboardBanner_5.webp",
      "/portfolio/Printables/BillboardBanner_6.webp"
    ],
    "Books & Magazines": [
      "/portfolio/Printables/BookCover.webp",
      "/portfolio/Printables/BookCover2.webp",
      "/portfolio/Printables/BookCover3.webp",
      "/portfolio/Printables/Magazine.webp",
      "/portfolio/Printables/Magazine2.webp"
    ],
    "Menus": [
      "/portfolio/Printables/Menu1.webp",
      "/portfolio/Printables/Menu2.webp",
      "/portfolio/Printables/Menu3.webp"
    ],
    "Product Design": [
      "/portfolio/Printables/Mousepad-Calendar.webp", 
      "/portfolio/Printables/ProductDesign1.webp",
      "/portfolio/Printables/ProductDesign2.webp",
      "/portfolio/Printables/ProductDesign3.webp"
    ],
    "Flyers": [
      "/portfolio/Printables/Flyers/bifold.webp",
      "/portfolio/Printables/Flyers/flyer.webp",
      "/portfolio/Printables/Flyers/trifold.webp"
    ],
    "Brochures": [
      "/portfolio/Printables/Brochures/01.webp",
      "/portfolio/Printables/Brochures/02.webp",
      "/portfolio/Printables/Brochures/03.webp",
      "/portfolio/Printables/Brochures/04.webp",
    ]
  },
  "Video Services": {
    "Logo Intro": 4,
    "Motion Graphics": 20,
    "Social Media Reel": 21,
    "Influencer": 6,
    "Music Videos": [
      "https://www.youtube.com/watch?v=iBOMnKrFOWc&ab_channel=AFLATOON",
      "https://www.youtube.com/watch?v=zS2P0adEzmQ&ab_channel=AFLATOON", 
      "https://www.youtube.com/watch?v=1qjO_mFt5b8&ab_channel=NoNameMusic",
      "https://www.youtube.com/watch?v=2uyadmdVPao&ab_channel=NoNameMusic"
    ],
    "Podcast": [
      "https://www.youtube.com/watch?v=AGAjpBs47Jc&ab_channel=MHIS",
      "https://www.youtube.com/watch?v=fvebkJwOqwQ"
    ]
  },
  "Wedding Invites": {
    "Wedding Cards": [
      "/portfolio/Wedding-Invites/1.webp",
      "/portfolio/Wedding-Invites/2.webp",
      "/portfolio/Wedding-Invites/3.webp",
    ],
    "Wedding Videos": 10
  }
};

const generateFilePaths = (category: string, subCategory: string, count: number | string[]) => {
  if (Array.isArray(count)) {
    return count;
  }
  
  const paths = [];
  for (let i = 1; i <= count; i++) {
    if (category === "Video Services") {
      paths.push(`/portfolio/Video/${subCategory}/${i}`);
    } else if (category === "Wedding Invites" && subCategory === "Wedding Videos") {
      paths.push(`/portfolio/Wedding invite/${i}`);
    }
  }
  return paths;
};

function getCategoryIndex(cat: string | null) {
  if (!cat) return 0;
  const idx = categories.findIndex(
    (c) => c.toLowerCase().replace(/\s+/g, "-") === cat
  );
  return idx === -1 ? 0 : idx;
}
const VideoPlayer = ({ src, onLoad }: { src: string, onLoad: () => void }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleLoadedData = useCallback(() => {
    setIsLoaded(true);
    onLoad();
  }, [onLoad]);

  const getVideoSources = (src: string) => {
    if (src.includes('/Wedding invite/')) {
      const filename = src.split('/').pop();
      return {
        webm: `/portfolio/Wedding-Invites/webms/${filename}.webm`,
        mp4: `/portfolio/Wedding-Invites/mp4s/${filename}.mp4`
      };
    } else if (src.includes('/Video/')) {
      // Extract category and filename from the path
      const pathParts = src.split('/');
      const category = pathParts[pathParts.length - 2];
      const filename = pathParts[pathParts.length - 1];
      return {
        webm: `/portfolio/Video/${category}/webms/${filename}.webm`,
        mp4: `/portfolio/Video/${category}/mp4s/${filename}.mp4`
      };
    } else {
      return {
        webm: src.replace('/portfolio/Video/', '/portfolio/Video/').replace(/\/([^\/]+)$/, '/webms/$1.webm'),
        mp4: src.replace('/portfolio/Video/', '/portfolio/Video/').replace(/\/([^\/]+)$/, '/mp4s/$1.mp4')
      };
    }
  };

  const videoSources = getVideoSources(src);

  return (
    <div ref={ref} className="group relative overflow-hidden rounded-lg w-full" style={{ aspectRatio: '9/16' }}>
      {!inView ? (
        <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
          <div className="text-neutral-400 text-sm">Video will load when visible...</div>
        </div>
      ) : (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
              <div className="text-neutral-400 text-sm">Loading video...</div>
            </div>
          )}
          
          <video
            className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            controls
            preload="metadata"
            onLoadedData={handleLoadedData}
            playsInline
            muted
          >
            <source src={videoSources.webm} type="video/webm" />
            <source src={videoSources.mp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
        </>
      )}
    </div>
  );
};

// Simple YouTube component using react-youtube
const YouTubeVideoCard = ({ url }: { url: string }) => {
  const getVideoId = (url: string) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : '';
  };

  const videoId = getVideoId(url);

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className="aspect-video bg-neutral-800 rounded-lg overflow-hidden">
      <YouTube videoId={videoId} opts={opts} className="w-full h-full" />
    </div>
  );
};

export default function PortfolioContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const catParam = searchParams.get("cat");
  const active = getCategoryIndex(catParam);
  const [imagesLoaded, setImagesLoaded] = useState<Set<string>>(new Set());
  const [currentSubCategory, setCurrentSubCategory] = useState(0);

  useEffect(() => {
    if (!catParam) {
      router.replace(`?cat=${categories[0].toLowerCase().replace(/\s+/g, "-")}`);
    }
  }, [catParam, router]);

  const handleTabClick = useCallback((idx: number) => {
    router.push(`?cat=${categories[idx].toLowerCase().replace(/\s+/g, "-")}`);
  }, [router]);

  const handleImageLoad = useCallback((imageSrc: string) => {
    setImagesLoaded(prev => new Set(prev).add(imageSrc));
  }, []);

  // Get grouped images for current category
  const groupedImages = useMemo(() => {
    const categoryName = categories[active];
    const categoryData = categoryFileCounts[categoryName as keyof typeof categoryFileCounts] || {};
    
    const result: Record<string, string[]> = {};
    Object.entries(categoryData).forEach(([subCat, count]) => {
      result[subCat] = generateFilePaths(categoryName, subCat, count);
    });
    
    return result;
  }, [active]);

  const subCategories = useMemo(() => Object.keys(groupedImages), [groupedImages]);
  const currentSubCategoryImages = useMemo(() => {
    const subCat = subCategories[currentSubCategory];
    return subCat ? groupedImages[subCat] : [];
  }, [groupedImages, subCategories, currentSubCategory]);

  useEffect(() => {
    setImagesLoaded(new Set());
    setCurrentSubCategory(0);
  }, [active]);

  const handleSubCategoryClick = useCallback((idx: number) => {
    setCurrentSubCategory(idx);
    setImagesLoaded(new Set());
  }, []);

  // Check if current category has videos or YouTube videos
  const isVideoCategory = useMemo(() => {
    const categoryName = categories[active];
    return categoryName === "Video Services" || 
           (categoryName === "Wedding Invites" && subCategories[currentSubCategory] === "Wedding Videos");
  }, [active, subCategories, currentSubCategory]);

  const isMusicVideoCategory = useMemo(() => {
    const categoryName = categories[active];
    return categoryName === "Video Services" && (subCategories[currentSubCategory] === "Music Videos" || subCategories[currentSubCategory] === "Podcast");
  }, [active, subCategories, currentSubCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black px-2 pb-10 font-exo2">
      <div className="max-w-7xl mx-auto pt-24">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-red-600 mb-2 tracking-wide font-exo2">
          OUR PORTFOLIO
        </h1>
        <p className="text-center text-neutral-200 max-w-2xl mx-auto mb-8 font-titillium">
          At No Name Graphic, creativity meets strategy. We bring your ideas to life with designs that captivate, engage, and leave a lasting impression. Explore our diverse portfolio across multiple services.
        </p>
        
        {/* Main Category Tabs */}
        <nav className="flex flex-wrap justify-center gap-6 mb-6" role="tablist">
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

        {/* Sub-category Tabs */}
        {subCategories.length > 1 && (
          <nav className="flex flex-wrap justify-center gap-4 mb-8" role="tablist">
            {subCategories.map((subCat, idx) => (
              <button
                key={subCat}
                onClick={() => handleSubCategoryClick(idx)}
                className={`relative px-3 py-2 text-sm md:text-base font-medium transition-all duration-200 font-exo2 focus:outline-none rounded-lg
                  ${currentSubCategory === idx 
                    ? "bg-red-600 text-white" 
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white"}
                `}
                role="tab"
                aria-selected={currentSubCategory === idx}
              >
                {subCat}
              </button>
            ))}
          </nav>
        )}
        
        {/* Current Sub-category Title */}
        {subCategories[currentSubCategory] && (
          <h2 className="text-2xl md:text-3xl font-bold text-red-500 text-center uppercase tracking-wider font-titillium mb-8">
            {subCategories[currentSubCategory]}
          </h2>
        )}

        {/* Portfolio Content */}
        {isMusicVideoCategory ? (
          // YouTube Music Videos Grid
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {currentSubCategoryImages.map((videoUrl, index) => (
              <YouTubeVideoCard key={videoUrl} url={videoUrl} />
            ))}
          </div>
        ) : isVideoCategory ? (
          // Video Grid Layout
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
            {currentSubCategoryImages.map((videoSrc, index) => (
              <article key={videoSrc} className="w-full">
                <VideoPlayer 
                  src={videoSrc}
                  onLoad={() => handleImageLoad(videoSrc)}
                />
              </article>
            ))}
          </div>
        ) : (
          // Image Layout (existing)
          <div className="space-y-6 mb-8">
            {currentSubCategoryImages.map((imageSrc, index) => {
              const isAboveFold = index === 0;
              const isLoaded = imagesLoaded.has(imageSrc);
              
              return (
                <article key={imageSrc} className="w-full">
                  <div className="group relative overflow-hidden rounded-lg w-full h-64 md:h-[500px] lg:h-[600px] will-change-transform">
                    {!isLoaded && (
                      <div className="absolute inset-0 bg-neutral-800" />
                    )}
                    
                    <Image
                      src={imageSrc}
                      alt={`${categories[active]} - ${subCategories[currentSubCategory]} ${index + 1}`}
                      fill
                      className={`object-contain transition-transform duration-300 group-hover:scale-105 will-change-transform ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                      priority={isAboveFold}
                      fetchPriority={isAboveFold ? "high" : "auto"}
                      loading={isAboveFold ? "eager" : "lazy"}
                      quality={75}
                      onLoad={() => handleImageLoad(imageSrc)}
                      decoding="async"
                    />
                    
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Navigation Info */}
        {subCategories.length > 1 && (
          <div className="text-center text-neutral-400 text-sm font-exo2">
            Showing {currentSubCategoryImages.length} {isVideoCategory || isMusicVideoCategory ? 'videos' : 'items'} in {subCategories[currentSubCategory]}
            <br />
            {currentSubCategory + 1} of {subCategories.length} categories
          </div>
        )}
      </div>
    </div>
  );
}