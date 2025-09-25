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
				<path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" />
				<path d="M12 22V12" />
				<path d="M2 7L12 12L22 7" />
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
				<polygon points="23 7 16 12 23 17 23 7" />
				<rect x="1" y="5" width="15" height="14" rx="2" />
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
				<polyline points="6,9 6,2 18,2 18,9" />
				<path d="M6,18H4A2,2 0 0,1 2,16V11A2,2 0 0,1 4,9H20A2,2 0 0,1 22,11V16A2,2 0 0,1 20,18H18" />
				<rect x="6" y="14" width="12" height="8" />
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
				<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
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
				<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
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
              				hover:scale-105 hover:shadow-xl hover:border-red-500 group hover:bg-red-600 hover:text-white font-titillium"
					>
						<div className="mb-4">{item.icon}</div>
						<h3 className="text-2xl font-semibold mb-1 text-red-500 group-hover:text-white font-titillium">
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
							className="mt-auto px-4 py-2 border-3 border-red-500 group-hover:border-white rounded text-white hover:bg-red-600 hover:text-white transition font-semibold font-titillium"
						>
							EXPLORE NOW
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}
