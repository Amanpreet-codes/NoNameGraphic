'use client';

import React, { useState } from "react";

const categories = [
  "Social Media",
  "Branding",
  "Printables",
  "Video Services",
  "Wedding invites",
];

export default function PortfolioPage() {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black px-2 pb-10 font-[Montserrat]">
      <div className="max-w-7xl mx-auto pt-24">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-red-600 mb-2 tracking-wide">
          OUR PORTFOLIO
        </h1>
        <p className="text-center text-neutral-200 max-w-2xl mx-auto mb-8 font-[Inter]">
          At No Name Graphics, creativity meets strategy. We bring your ideas to life with designs that captivate, engage, and leave a lasting impression. Explore our diverse portfolio across multiple services.
        </p>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActive(idx)}
              className={`relative px-2 md:px-4 pb-1 text-base md:text-lg font-semibold transition
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
        {/* Example: Section for portfolio items */}
        <div className="text-neutral-400 text-center italic mb-8">
          
          <p>Portfolio items for <span className="text-red-400">{categories[active]}</span> will appear here.</p>
        </div>
      </div>
    </div>
  );
}
