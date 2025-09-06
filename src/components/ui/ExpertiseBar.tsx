import React from "react";
import Link from "next/link";

const expertise = [
	{
		title: "Graphic Design",
		desc: "We craft eye-catching designs that bring your brand's vision to life. From logos to social media creatives, we make sure your brand stands out.",
		key: "design",
		icon: (
			<svg
				className="h-8 w-8 text-white"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				viewBox="0 0 24 24"
			>
				<rect x="4" y="4" width="16" height="16" rx="2" />
			</svg>
		),
	},
	{
		title: "Video Editing",
		desc: "Transforming raw footage into engaging stories with smooth transitions, effects, and music that keep viewers hooked.",
		key: "video-services",
		icon: (
			<svg
				className="h-8 w-8 text-white"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				viewBox="0 0 24 24"
			>
				<rect x="3" y="5" width="15" height="14" rx="2" />
				<polygon points="16 7 20 9.5 16 12" />
			</svg>
		),
	},
	{
		title: "Printables",
		subtitle: "(Flyers, Brochures, Standees, etc.)",
		desc: "High-quality printable designs that leave a lasting impression, perfect for promotions, events, and brand awareness.",
		key: "printables",
		icon: (
			<svg
				className="h-8 w-8 text-white"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				viewBox="0 0 24 24"
			>
				<rect x="6" y="3" width="12" height="18" rx="2" />
			</svg>
		),
	},
	{
		title: "Motion Graphics",
		desc: "Adding life to visuals with stunning animations and motion effects for ads, presentations, and digital campaigns.",
		key: "motion-graphics",
		icon: (
			<svg
				className="h-8 w-8 text-white"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				viewBox="0 0 24 24"
			>
				<circle cx="12" cy="12" r="10" />
				<path d="M8 12h8" />
			</svg>
		),
	},
	{
		title: "Wedding Invites",
		desc: "Personalized wedding invitations and e-cards designed with memorable elegance to make your celebrations memorable.",
		key: "wedding-invites",
		icon: (
			<svg
				className="h-8 w-8 text-white"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				viewBox="0 0 24 24"
			>
				<rect x="3" y="7" width="18" height="10" rx="2" />
				<path d="M3 7l9 6 9-6" />
			</svg>
		),
	},
];

export default function ExpertiseBar() {
	return (
		<section className="w-full bg-neutral-900 py-8 px-2 font-titillium">
			<h2 className="text-5xl font-bold text-center text-red-600 mb-8">
				Our Expertise:
			</h2>
			<div className="flex flex-wrap justify-center gap-6">
				{expertise.map((item, idx) => (
					<div
						key={item.title}
						className="w-72 bg-neutral-800 border border-neutral-700 rounded-lg p-6 flex flex-col items-start text-white transition
              hover:scale-105 hover:shadow-xl hover:border-red-500 hover:bg-neutral-700 font-titillium"
					>
						<div className="mb-4">{item.icon}</div>
						<h3 className="text-2xl font-semibold mb-1 text-red-500 font-titillium">
							{item.title}
						</h3>
						{item.subtitle && (
							<div className="text-sm text-neutral-300 mb-1 font-exo2">
								{item.subtitle}
							</div>
						)}
						<p className="text-sm mb-6 text-neutral-200 font-exo2">
							{item.desc}
						</p>
						<Link
							href={`/portfolio?cat=${item.key}`}
							className="mt-auto px-4 py-2 border border-red-500 rounded text-white hover:bg-red-600 hover:text-white transition font-semibold font-titillium"
						>
							EXPLORE NOW
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}
