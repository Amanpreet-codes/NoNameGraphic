"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
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
		desc: "The visionary behind No Name Graphic, leading the creative direction and ensuring every design reflects excellence.",
		fun: "Loves experimenting with bold color palettes.",
		img: amritpal,
	},
	{
		name: "Rohan Dev Kundalia",
		role: "Visual Design Lead",
		desc: "Expert in visual storytelling, Rohan ensures every project is visually stunning and on-brand.",
		fun: "Sketches ideas on napkins before moving to the screen.",
		img: rohan,
	},
	{
		name: "Sahil",
		role: "Graphic Designer",
		desc: "Crafting eye-catching visuals and designs that tell your brand's story beautifully.",
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
	// {
	// 	name: "Amanpreet Singh",
	// 	role: "Web Developer",
	// 	desc: "Bringing designs to life through functional, user-friendly, and modern web solutions.",
	// 	fun: "Can debug code and make chai at the same time.",
	// 	img: amritpal, 
	// },
];

const testimonials = [
	{
		quote: "Top-notch design services that bring ideas to life. Incredibly talented and professional team.",
		name: "Ankur",
		company: "Google Reviews",
	},
	{
		quote: "Consistently deliver high-quality work on time. Incredibly responsive and reliable creative service!",
		name: "Pankaj Gautam",
		company: "Google Reviews",
	},
	{
		quote: "Absolutely stunning designs! They understood our brand perfectly and delivered beyond expectations.",
		name: "Sahil Kumar",
		company: "Google Reviews",
	},
	{
		quote: "Always got way better than my own imagination ♥️♥️",
		name: "Sushant Sharma",
		company: "Google Reviews",
	},
	{
		quote: "Outstanding creativity and timely delivery. They don't just create designs, they create your brand's identity!",
		name: "Creative Factory 2.0",
		company: "Google Reviews",
	},
	{
		quote: "Awesome design, satisfying work.",
		name: "Deepak Mathur",
		company: "Google Reviews",
	},
];

// Reusable team card component
const TeamCard = ({ member, index }: { member: typeof team[0], index: number }) => (
	<motion.div
		initial={{ opacity: 0, y: 35 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ delay: index * 0.12, duration: 0.5, type: "spring" }}
		className={`flex flex-col md:flex-row items-center bg-neutral-800 rounded-2xl shadow-lg p-4 md:p-6 gap-4 md:gap-6 w-full
			${index % 2 === 1 ? "md:flex-row-reverse" : ""}
			border border-transparent transition-all duration-300
			group hover:bg-red-600 hover:border-red-600 hover:scale-[1.02] hover:shadow-2xl`}
	>
		<div className="flex-1 flex flex-col items-start">
			<h3 className="text-xl md:text-2xl font-bold font-titillium mb-1 transition-colors duration-300 text-red-500 group-hover:text-white">
				{member.name}
			</h3>
			<h4 className="text-base font-semibold text-white mb-2 font-titillium transition-colors duration-300 group-hover:text-white">
				{member.role}
			</h4>
			<p className="text-neutral-200 font-exo2 text-sm mb-2 transition-colors duration-300 group-hover:text-white">
				{member.desc}
			</p>
			{member.fun && (
				<span 
					className="text-xs text-red-200 font-exo2 italic group-hover:text-white transition-colors duration-300"
					aria-label={`Fun fact: ${member.fun}`}
				>
					{member.fun}
				</span>
			)}
		</div>
		<div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
			<Image
				src={member.img}
				alt={`${member.name}, ${member.role}`}
				className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-red-600 shadow-md group-hover:border-white group-hover:shadow-white/40 transition-all duration-300"
				loading="lazy"
				sizes="(max-width: 768px) 96px, 128px"
			/>
		</div>
	</motion.div>
);

// Testimonial card component
const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
	<div className="bg-neutral-800 rounded-xl p-4 shadow border border-neutral-700 flex-shrink-0 w-80 flex flex-col justify-between">
		<p className="text-neutral-100 font-exo2 text-sm mb-3">&ldquo;{testimonial.quote}&rdquo;</p>
		<div>
			<div className="text-red-400 font-bold font-titillium text-base">{testimonial.name}</div>
			<div className="text-neutral-400 text-xs font-exo2">{testimonial.company}</div>
		</div>
	</div>
);

export default function AboutUsPage() {
	const [isPaused, setIsPaused] = useState(false);

	return (
		<div className="min-h-screen w-full bg-gradient-to-b from-black via-neutral-900 to-black px-4 md:px-8 pb-10 font-exo2">
			{/* Hero Section */}
			<section className="container mx-auto flex flex-col md:flex-row items-center gap-8 pt-32 pb-16 min-h-screen max-w-7xl">
				<div className="flex-1 text-center md:text-left">
					<p className="uppercase tracking-widest text-red-400 font-bold mb-2 text-xs md:text-sm">Who We Are</p>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-titillium leading-tight">
						About Us
					</h1>
					<p className="text-neutral-200 text-base md:text-lg mb-4 font-exo2 leading-relaxed">
						Since 2022, No Name Graphic has been crafting powerful visual identities for clients across the globe. From Saudi Arabia, Oman, and the USA to every corner of India—from North to South, East to West—we&apos;ve delivered impactful design solutions tailored to diverse business needs.
					</p>
					<p className="text-neutral-400 text-sm md:text-base font-exo2 leading-relaxed">
						Backed by a team of skilled and passionate designers, we specialize in turning your ideas into visuals that not only look great but also drive results. Whether you&apos;re a startup or an established business, our mission is to design what works best for your goals, your audience, and your growth.
					</p>
				</div>
				<div className="flex-1 flex justify-center items-center w-full">
					<Image
						src={HeroImage}
						alt="No Name Graphic team working on creative designs"
						className="rounded-2xl shadow-2xl object-cover w-full max-w-lg aspect-[4/3]"
						priority
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</div>
			</section>

			{/* Meet the Team */}
			<section className="container mx-auto mb-16 max-w-6xl">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-12 font-titillium">
					Meet the Team
				</h2>
				<div className="flex flex-col gap-8">
					{team.map((member, index) => (
						<TeamCard key={member.name} member={member} index={index} />
					))}
				</div>
			</section>

			{/* Testimonials Carousel */}
			<section className="container mx-auto mb-16 max-w-7xl">
				<h2 className="text-3xl font-bold text-red-500 mb-8 font-titillium text-center">What Our Clients Say</h2>
				<div 
					className="relative overflow-hidden"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
				>
					<motion.div
						className="flex gap-6"
						animate={{
							x: [0, -(testimonials.length * 320)],
						}}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: "loop",
								duration: testimonials.length * 4,
								ease: "linear",
							},
						}}
						style={{
							animationPlayState: isPaused ? "paused" : "running",
						}}
					>
						{[...testimonials, ...testimonials].map((testimonial, index) => (
							<TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
						))}
					</motion.div>
				</div>
			</section>
		</div>
	)
}