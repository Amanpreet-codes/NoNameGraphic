'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const banners = [
  {
    id: 1,
    src: '/banners/Banner1.jpg',
    alt: 'Need 30, 50, or 100+ posters & reels every month? Get bulk creative packages - Professional, on Time, Every Time',
    title: 'Bulk Creative Packages',
    description: 'Need 30, 50, or 100+ posters & reels every month?',
    ctaText: 'Get Quote Now',
    href: '/contact?service=bulk-packages'
  },
  {
    id: 2,
    src: '/banners/Banner2.png',
    alt: 'Running multiple brands & short on creative support? Get our monthly design package',
    title: 'Monthly Design Support',
    description: 'Running multiple brands & short on creative support?',
    ctaText: 'Contact Us',
    href: '/contact?service=monthly-packages'
  },
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <section 
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-black group"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      aria-label="Promotional banners"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 cursor-pointer"
          onClick={() => window.open(banners[currentIndex].href, '_self')}
        >
          <Image
            src={banners[currentIndex].src}
            alt={banners[currentIndex].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={currentIndex === 0}
            sizes="100vw"
            quality={85}
          />
          
          {/* Overlay with CTA */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
          
          {/* CTA Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-2xl backdrop-blur-sm border border-red-500/30 transition-all duration-200 font-titillium"
            >
              {banners[currentIndex].ctaText}
            </motion.button>
          </div>

          {/* Text Overlay (Mobile) */}
          <div className="absolute bottom-16 left-4 right-4 md:hidden text-white">
            <h3 className="text-lg font-bold mb-1 font-titillium drop-shadow-lg">
              {banners[currentIndex].title}
            </h3>
            <p className="text-sm opacity-90 font-exo2 drop-shadow-md">
              {banners[currentIndex].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Previous banner"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Next banner"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black ${
              currentIndex === index 
                ? 'bg-red-600 scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-500'} animate-pulse`} />
      </div>
    </section>
  );
}
