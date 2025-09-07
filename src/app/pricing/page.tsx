"use client"

import React from "react"

const packages = [
  {
    name: "Starter Pack",
    price: "₹14,999",
    color: "red",
    features: [
      { label: "Social Media Poster", included: true },
      { label: "Social Media Story", included: true },
      { label: "Social Cover", included: true },
      { label: "Youtube Thumbnail", included: true },
      { label: "Logo Design", included: false },
      { label: "Visiting Card", included: false },
      { label: "Letterhead", included: false },
      { label: "ID Card", included: false },
      { label: "A4 Flyer", included: false },
      { label: "Menu Design", included: false },
      { label: "Brochure", included: false },
      { label: "Banner", included: false },
      { label: "Standee", included: false },
      { label: "Packaging Design", included: false },
      { label: "Wedding Invites", included: false },
      { label: "Social Media Reels (up to 1 min)", included: false },
      { label: "Motion Graphic Explainer Reel", included: false },
      { label: "Influencer Video", included: false },
      { label: "Podcast Editing", included: false },
    ],
    cta: "ENQUIRE NOW",
  },
  {
    name: "Growth Pack",
    price: "₹19,999",
    color: "blue",
    features: [
      { label: "Social Media Poster", included: true },
      { label: "Social Media Story", included: true },
      { label: "Social Cover", included: true },
      { label: "Youtube Thumbnail", included: true },
      { label: "Logo Design", included: true },
      { label: "Visiting Card", included: true },
      { label: "Letterhead", included: true },
      { label: "ID Card", included: true },
      { label: "A4 Flyer", included: true },
      { label: "Menu Design", included: true },
      { label: "Brochure", included: true },
      { label: "Banner", included: true },
      { label: "Standee", included: true },
      { label: "Packaging Design", included: true },
      { label: "Wedding Invites", included: true },
      { label: "Social Media Reels (up to 1 min)", included: true },
      { label: "Motion Graphic Explainer Reel", included: true },
      { label: "Influencer Video", included: false },
      { label: "Podcast Editing", included: false },
    ],
    cta: "ENQUIRE NOW",
  },
  {
    name: "Premium Pack",
    price: "₹24,999",
    color: "red",
    features: [
      { label: "Social Media Poster", included: true },
      { label: "Social Media Story", included: true },
      { label: "Social Cover", included: true },
      { label: "Youtube Thumbnail", included: true },
      { label: "Logo Design", included: true },
      { label: "Visiting Card", included: true },
      { label: "Letterhead", included: true },
      { label: "ID Card", included: true },
      { label: "A4 Flyer", included: true },
      { label: "Menu Design", included: true },
      { label: "Brochure", included: true },
      { label: "Banner", included: true },
      { label: "Standee", included: true },
      { label: "Packaging Design", included: true },
      { label: "Wedding Invites", included: true },
      { label: "Social Media Reels (up to 1 min)", included: false },
      { label: "Motion Graphic Explainer Reel", included: false },
      { label: "Influencer Video", included: false },
      { label: "Podcast Editing", included: false },
    ],
    cta: "ENQUIRE NOW",
  },
  {
    name: "Ultimate Pack",
    price: "₹29,999",
    color: "blue",
    features: [
      { label: "Premium Poster Design", included: true },
      { label: "Photo Manipulation / Color Grading", included: true },
      { label: "Social Media Poster", included: true },
      { label: "Social Media Story", included: true },
      { label: "Social Cover", included: true },
      { label: "Youtube Thumbnail", included: true },
      { label: "Logo Design", included: true },
      { label: "Visiting Card", included: true },
      { label: "Letterhead", included: true },
      { label: "Envelope", included: true },
      { label: "ID Card", included: true },
      { label: "A4 Flyer", included: true },
      { label: "Menu Design", included: true },
      { label: "Brochure", included: true },
      { label: "Banner", included: true },
      { label: "Standee", included: true },
      { label: "Packaging Design", included: true },
      { label: "Wedding Invites", included: true },
      { label: "Social Media Reels (up to 1 min)", included: true },
      { label: "Motion Graphic Explainer Reel", included: true },
      { label: "Influencer Video", included: true },
      { label: "Podcast Editing", included: true },
      { label: "Any other graphic & video edit work", included: true },
    ],
    cta: "ENQUIRE NOW",
  },
];

function getColor(color: string) {
  return color === "red"
    ? "from-red-600 to-red-500"
    : "from-blue-700 to-blue-500";
}

function getButtonColor(color: string) {
  return color === "red"
    ? "bg-red-600 hover:bg-red-700"
    : "bg-blue-700 hover:bg-blue-800";
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black px-2 py-16 font-titillium">
      <div className="w-[98vw] max-w-[1800px] mx-auto">
        <h1 className="text-5xl font-bold text-center text-red-600 mb-2 font-titillium">
          Monthly Packages
        </h1>
        <p className="text-center text-neutral-200 max-w-2xl mx-auto mb-12 font-exo2 text-lg">
          Choose the plan that fits your business needs. All packages are billed monthly and include a wide range of design, print, and digital services.
        </p>
        <div className="flex flex-row flex-wrap md:flex-nowrap justify-center gap-8 w-full items-stretch">
          {packages.map((pack, idx) => (
            <div
              key={pack.name}
              className={`flex flex-col max-w-xs rounded-2xl shadow-xl border-2 border-neutral-800 bg-neutral-900 overflow-hidden hover:scale-[1.03] transition-transform duration-300 flex-shrink-0 h-auto`}
              style={{ width: "100%", minWidth: "260px" }}
            >
              <div
                className={`w-full py-5 px-6 text-center font-bold text-3xl text-white bg-gradient-to-r ${getColor(
                  pack.color
                )} shadow`}
              >
                {pack.name}
              </div>
              <div className="w-full px-6 text-center flex flex-col items-center">
                <span className="text-sm text-neutral-400 mb-0.5 font-exo2 tracking-wide font-semibold" style={{ letterSpacing: "0.05em" }}>
                  Starts at
                </span>
                <div className="py-2 text-4xl font-extrabold text-white leading-tight">
                  {pack.price}
                </div>
              </div>
              <div className="px-6 pb-4 flex flex-col flex-grow">
                <div className="text-left text-sm font-semibold text-neutral-400 mb-2">
                  INCLUSION:
                </div>
                <ul className="mb-6 space-y-1 flex-grow">
                  {pack.features.map((f, i) => (
                    <li key={f.label} className="flex items-center gap-2 text-base font-exo2">
                      {f.included ? (
                        <span className="text-green-400">✔</span>
                      ) : (
                        <span className="text-red-400">✘</span>
                      )}
                      <span className={f.included ? "text-white" : "text-neutral-500 line-through"}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg text-lg font-bold text-white uppercase mt-auto ${getButtonColor(
                    pack.color
                  )} transition`}
                >
                  {pack.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
