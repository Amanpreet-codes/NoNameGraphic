import React from "react";
import Link from "next/link";

const tags = [
  { label: "Branding", href: "/portfolio?cat=branding" },
  { label: "Design", href: "/portfolio?cat=design" },
  { label: "Motion Graphics", href: "/portfolio?cat=motion-graphics" },
  { label: "Printables", href: "/portfolio?cat=printables" },
  { label: "Video Editing", href: "/portfolio?cat=video-editing" },
];

const ArrowUpRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block ml-1 mb-0.5"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    stroke="currentColor"
  >
    <path
      d="M4.667 11.333 11.334 4.667M11.334 4.667H5.334M11.334 4.667v6"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Welcome_Bar() {
  return (
    <section className="w-full bg-neutral-900 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Welcome To No Name Graphic</h2>
        <p className="text-lg text-neutral-200 mb-6">
          No Name Graphic is a creative studio dedicated to elevating your brand
          through innovative design, compelling visuals, and strategic storytelling.
          With years of experience and a passion for creativity, we help businesses
          and individuals stand out in a crowded digital world.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {tags.map((tag) => (
            <Link
              key={tag.label}
              href={tag.href}
              className="inline-block bg-neutral-800 text-red-400 px-4 py-2 rounded-full text-sm font-semibold transition hover:bg-red-600 hover:text-white"
            >
              {tag.label} {ArrowUpRight}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}