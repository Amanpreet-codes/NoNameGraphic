"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import amritpal from "/public/team/amritpal.jpg"
import mohit from "/public/team/mohit.jpg"
import vanshika from "/public/team/vanshika.jpg"
import sahil from "/public/team/sahil.jpg"
import sidharth from "/public/team/sidharth.jpg"
import rohan from "/public/team/rohan.jpg"
import HeroImage from "/public/HeroAboutUs.jpg"

const team = [
	{
		name: "Amritpal Singh",
		role: "Founder & Design Head",
		desc: "The visionary behind No Name Graphics, leading the creative direction and ensuring every design reflects excellence.",
		fun: "Loves experimenting with bold color palettes.",
		img: amritpal,
	},
	{
		name: "Rohan Kundalia",
		role: "Visual Design Lead",
		desc: "Expert in visual storytelling, Rohan ensures every project is visually stunning and on-brand.",
		fun: "Sketches ideas on napkins before moving to the screen.",
		img: rohan,
	},
	{
		name: "Sahil",
		role: "Graphic Designer",
		desc: "Crafting eye-catching visuals and designs that tell your brand’s story beautifully.",
		fun: "Can turn any idea into a killer poster in minutes.",
		img: sahil,
	},
	{
		name: "Mohit",
		role: "Video Editor",
		desc: "Turning raw footage into engaging and polished videos that leave a lasting impact.",
		fun: "Edits videos faster than you can say 'render'.",
		img: mohit,
	},
	{
		name: "Siddharth",
		role: "Video Editor",
		desc: "Adding creativity and precision to every frame for videos that truly stand out.",
		fun: "Believes every story deserves a cinematic touch.",
		img: sidharth,
	},
	{
		name: "Vanshika",
		role: "Sales Head",
		desc: "Building strong client relationships and ensuring seamless communication for every project.",
		fun: "Knows every client by name and their favorite color.",
		img: vanshika,
	},
	{
		name: "Amanpreet Singh",
		role: "Web Developer",
		desc: "Bringing designs to life through functional, user-friendly, and modern web solutions.",
		fun: "Can debug code and make chai at the same time.",
		img: amritpal, 
	},
];


const testimonials = [
	{
		quote:
			"The team brought our vision to life in ways we couldn’t imagine. Professional, creative, and always on time.",
		name: "Sarah Lee",
		company: "CEO of BrightPath",
	},
	{
		quote:
			"No Name Graphics is our go-to for everything design. They just get it — and deliver every time.",
		name: "Rohit Sharma",
		company: "Marketing Lead, UrbanNest",
	},
	{
		quote:
			"Superb communication and even better results. Highly recommended for any creative project.",
		name: "Priya Mehra",
		company: "Founder, Craftly",
	},
	{
		quote:
			"From branding to web, they handled it all with flair. Our clients love the new look!",
		name: "Ankit Verma",
		company: "Director, Verma & Co.",
	},
	{
		quote:
			"Fast, reliable, and always on trend. We keep coming back for more.",
		name: "Emily Chen",
		company: "CMO, FreshMart",
	},
	{
		quote:
			"Creative, professional, and fun to work with. Our go-to agency for all things design.",
		name: "David Kim",
		company: "CEO, KimTech",
	},
];

export default function AboutUsPage() {
	const [isPaused, setIsPaused] = useState(false);
	const [hasMounted, setHasMounted] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const controls = useAnimation();

	const elapsedRef = useRef(0);
	const pauseStartRef = useRef<number | null>(null);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	const allTestimonials = [...testimonials, ...testimonials];

	useEffect(() => {
		if (!hasMounted) return;
		let animationFrame: number;
		let start: number | null = null;
		let currentX = 0;

		function setControls(x: number) {
			controls.set({ x });
		}

		const animate = (timestamp: number) => {
			if (isPaused) {
				pauseStartRef.current = timestamp;
				return;
			}
			if (!start) start = timestamp - elapsedRef.current;
			const elapsed = timestamp - start;
			elapsedRef.current = elapsed;
			const speed = 0.06; // px/ms, adjust for speed
			currentX = -((elapsed * speed) % (allTestimonials.length * 340)); // 340px per card incl. gap
			setControls(currentX);
			animationFrame = requestAnimationFrame(animate);
		};

		if (!isPaused) {
			animationFrame = requestAnimationFrame(animate);
		} else {
			if (pauseStartRef.current !== null) {
			}
		}

		return () => {
			cancelAnimationFrame(animationFrame);
		};
	}, [isPaused, allTestimonials.length, hasMounted, controls]);

	useEffect(() => {
		if (!isPaused && pauseStartRef.current !== null) {
			pauseStartRef.current = null;
		}
	}, [isPaused]);

	return (
		<div className="min-h-screen w-full bg-gradient-to-b from-black via-neutral-900 to-black px-2 pb-10 pl-10 font-exo2">
			{/* Hero Section */}
			<section className="w-[100vw] max-w-full mx-auto flex flex-col md:flex-row items-center gap-8 pt-32 mb-14 min-h-[100vh]">
				<div className="flex-1 text-left md:pr-6">
					<p className="uppercase tracking-widest text-red-400 font-bold mb-1 text-xs md:text-sm text-center md:text-left">Who We Are</p>
					<h1 className="text-4xl md:text-5xl font-bold text-center md:text-left text-white mb-4 font-titillium leading-tight">
						About Us
					</h1>
					<p className="text-neutral-200 text-base md:text-lg mb-3 font-exo2">
						Since 2022, No Name Graphics has been crafting powerful visual identities for clients across the globe. From Saudi Arabia, Oman, and the USA to every corner of India—from North to South, East to West—we’ve delivered impactful design solutions tailored to diverse business needs.

					</p>
					<p className="text-neutral-400 text-sm md:text-base font-exo2">
						Backed by a team of skilled and passionate designers, we specialize in turning your ideas into visuals that not only look great but also drive results. Whether you’re a startup or an established business, our mission is to design what works best for your goals, your audience, and your growth.
					</p>
				</div>
				<div className="flex-1 flex justify-center items-center w-full">
					<Image
						src={HeroImage}
						alt="About No Name Graphics"
						className="rounded-4xl shadow-lg object-cover w-full max-w-[320px] md:max-w-[780px] h-48 md:h-100"
					/>
				</div>
			</section>

			{/* Meet the Team */}
			<section className="w-[90vw] max-w-[1400px] mx-auto mb-6">
				<h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 mb-6 font-titillium tracking-tight">
					Meet the Team
				</h2>
				<div className="flex flex-col gap-6 w-full">
					{team.map((member, idx) => (
						<motion.div
							key={member.name}
							initial={{ opacity: 0, y: 35 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: idx * 0.12, duration: 0.5, type: "spring" }}
							className={`flex flex-col md:flex-row items-center bg-neutral-800 rounded-2xl shadow-lg p-4 md:p-7 gap-4 md:gap-7 w-full
								${idx % 2 === 1 ? "md:flex-row-reverse" : ""}
								border border-transparent transition-all duration-300
								group hover:bg-red-600 hover:border-red-600 hover:scale-[1.04] hover:shadow-2xl`}
						>
							<div className="flex-1 flex flex-col items-start md:items-start">
								<h3 className="text-xl md:text-2xl font-bold font-titillium mb-1 transition-colors duration-300 text-red-500 group-hover:text-white">
									{member.name}
								</h3>
								<h4 className="text-base font-semibold text-white mb-1 font-titillium transition-colors duration-300 group-hover:text-white">
									{member.role}
								</h4>
								<p className="text-neutral-200 font-exo2 text-sm mb-1 transition-colors duration-300 group-hover:text-white">
									{member.desc}
								</p>
								{member.fun && (
									<span className="text-xs text-red-200 font-exo2 italic group-hover:text-white transition-colors duration-300">
										{member.fun}
									</span>
								)}
							</div>
							<div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
								<Image
									src={member.img}
									alt={member.name}
									className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-red-600 shadow-md group-hover:border-white group-hover:shadow-white/40 transition-all duration-300"
								/>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* Testimonials Carousel */}
			<section className="w-[90vw] max-w-[1400px] mx-auto mb-6">
				<h2 className="text-2xl font-bold text-red-500 mb-4 font-titillium text-center">What Our Clients Say</h2>
				<div
					className="relative overflow-hidden"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
				>
					<div className="w-full">
						<motion.div
							ref={containerRef}
							animate={controls}
							className="flex gap-4"
							style={{ willChange: "transform" }}
						>
							{[...allTestimonials, ...allTestimonials].map((t, i) => (
								<div
									key={t.name + t.company + i}
									className="bg-neutral-800 rounded-xl p-4 shadow border border-neutral-700 flex-1 flex flex-col justify-between min-w-[250px] max-w-[250px]"
								>
									<p className="text-neutral-100 font-exo2 text-sm mb-3">&ldquo;{t.quote}&rdquo;</p>
									<div className="text-red-400 font-bold font-titillium text-base">{t.name}</div>
									<div className="text-neutral-400 text-xs font-exo2">{t.company}</div>
								</div>
							))}
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	)
}