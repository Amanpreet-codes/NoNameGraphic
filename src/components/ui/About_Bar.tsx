import React from "react";

export default function Aboutbar() {
  return (
    <section className="w-full bg-neutral-900 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">About Us</h2>
        <p className="text-lg text-neutral-200 mb-6">
          No Name Graphics is a creative studio dedicated to elevating your brand
          through innovative design, compelling visuals, and strategic storytelling.
          With years of experience and a passion for creativity, we help businesses
          and individuals stand out in a crowded digital world.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <span className="inline-block bg-neutral-800 text-red-400 px-4 py-2 rounded-full text-sm font-semibold">
            Branding
          </span>
          <span className="inline-block bg-neutral-800 text-red-400 px-4 py-2 rounded-full text-sm font-semibold">
            Design
          </span>
          <span className="inline-block bg-neutral-800 text-red-400 px-4 py-2 rounded-full text-sm font-semibold">
            Motion Graphics
          </span>
          <span className="inline-block bg-neutral-800 text-red-400 px-4 py-2 rounded-full text-sm font-semibold">
            Printables
          </span>
          <span className="inline-block bg-neutral-800 text-red-400 px-4 py-2 rounded-full text-sm font-semibold">
            Video Editing
          </span>
        </div>
      </div>
    </section>
  );
}