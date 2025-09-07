"use client"

import Link from "next/link"
import React, { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black px-4 py-16 flex items-center justify-center font-titillium">
      <div className="w-full max-w-xl bg-neutral-900 rounded-2xl shadow-xl border border-neutral-800 p-8">
        <h1 className="text-4xl font-bold text-red-600 mb-2 text-center font-titillium">Contact Us</h1>
        <p className="text-neutral-300 text-center mb-8 font-exo2">
          Let's talk about your project, idea, or collaboration. Fill out the form and we'll get back to you soon!
        </p>
        {submitted ? (
          <div className="text-green-400 text-center text-lg font-bold py-12">Thank you! We'll be in touch soon.</div>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={e => {
              e.preventDefault()
              setSubmitted(true)
            }}
          >
            <input
              type="text"
              required
              placeholder="Your Name"
              className="rounded px-4 py-2 bg-white/90 text-black font-exo2 outline-none"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              className="rounded px-4 py-2 bg-white/90 text-black font-exo2 outline-none"
            />
            <input
              type="text"
              placeholder="Phone (optional)"
              className="rounded px-4 py-2 bg-white/90 text-black font-exo2 outline-none"
            />
            <select
              required
              className="rounded px-4 py-2 bg-white/90 text-black font-exo2 outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                What are you looking for?
              </option>
              <option>Branding</option>
              <option>Logo Design</option>
              <option>Graphic Design</option>
              <option>Social Media Poster</option>
              <option>Social Media Story</option>
              <option>Social Cover</option>
              <option>Youtube Thumbnail</option>
              <option>Printables</option>
              <option>Visiting Card</option>
              <option>Letterhead</option>
              <option>ID Card</option>
              <option>A4 Flyer</option>
              <option>Menu Design</option>
              <option>Brochure</option>
              <option>Banner</option>
              <option>Standee</option>
              <option>Packaging Design</option>
              <option>Wedding Invites</option>
              <option>Video Editing</option>
              <option>Social Media Reels</option>
              <option>Motion Graphic Explainer Reel</option>
              <option>Influencer Video</option>
              <option>Podcast Editing</option>
              <option>Web Solutions</option>
              <option>Other</option>
            </select>
            <textarea
              required
              placeholder="Your Message"
              className="rounded px-4 py-2 bg-white/90 text-black font-exo2 outline-none min-h-[100px]"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-lg font-bold text-white uppercase bg-red-600 hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="text-center text-neutral-400 mt-8 font-exo2">
          Or email us at{" "}
          <a href="mailto:info@nonamegraphics.com" className="text-red-400 underline">
            info@nonamegraphic.com
          </a>
        </div>
        <div className="text-center text-neutral-400 mt-2 font-exo2">
          Or call us at{" "}
          <Link href="tel:+919667224157" className="text-red-400 underline"> +91 96672 24157</Link>
        </div>
      </div>
    </div>
  )
}
