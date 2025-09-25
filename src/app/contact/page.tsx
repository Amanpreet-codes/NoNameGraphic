"use client"

import Link from "next/link"
import React, { useState, useCallback, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"

function ContactForm() {
  const searchParams = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Failed to submit form')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [formData])

  // Pre-populate service field from URL parameter
  useEffect(() => {
    const serviceParam = searchParams?.get('service')
    if (serviceParam) {
      const serviceMapping: Record<string, string> = {
        'bulk-packages': 'Bulk Poster | Bulk reels',
        'monthly-packages': 'Monthly Packages'
      }
      
      const mappedService = serviceMapping[serviceParam] || serviceParam
      setFormData(prev => ({
        ...prev,
        service: mappedService
      }))
    }
  }, [searchParams])

  return (
    <div className="w-full max-w-xl bg-neutral-900 rounded-2xl shadow-xl border border-neutral-800 p-8">
      <h1 className="text-4xl font-bold text-red-600 mb-2 text-center font-titillium">Contact Us</h1>
      <p className="text-neutral-300 text-center mb-8 font-exo2">
        Let&apos;s talk about your project, idea, or collaboration. Fill out the form and we&apos;ll get back to you soon!
      </p>
      {submitted ? (
        <div className="text-green-400 text-center text-lg font-bold py-12" role="alert">
          Thank you! We&apos;ll be in touch soon.
        </div>
      ) : (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
          {error && (
            <div className="text-red-400 text-center text-sm bg-red-900/20 p-3 rounded">
              {error}
            </div>
          )}
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="rounded px-4 py-2 bg-white/90 text-black font-exo2 outline-none focus:ring-2 focus:ring-red-500 transition-shadow"
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="rounded px-4 py-2 bg-white/90 text-black font-exo2 outline-none focus:ring-2 focus:ring-red-500 transition-shadow"
            autoComplete="email"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="rounded px-4 py-2 bg-white/90 text-black font-exo2 outline-none focus:ring-2 focus:ring-red-500 transition-shadow"
            autoComplete="tel"
          />
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="rounded px-4 py-2 bg-white/90 text-black font-exo2 outline-none focus:ring-2 focus:ring-red-500 transition-shadow"
          >
            <option value="" disabled>
              What are you looking for?
            </option>
              <option>Graphic Design</option>
              <option>Branding</option>
              <option>Logo Design</option>
              <option>Printables</option>
              <option>Wedding Invites</option>
              <option>Video Editing</option>
              <option>Music Videos</option>
              <option>Monthly Packages</option>
              <option>Bulk Poster | Bulk reels</option>
              <option>Other</option>
          </select>
          <textarea
            name="message"
            required
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="rounded px-4 py-2 bg-white/90 text-black font-exo2 outline-none min-h-[100px] focus:ring-2 focus:ring-red-500 transition-shadow resize-vertical"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg text-lg font-bold text-white uppercase bg-red-600 hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
      <div className="text-center text-neutral-400 mt-8 font-exo2">
        Or email us at{" "}
        <a href="mailto:info@nonamegraphic.com" className="text-red-400 underline">
          info@nonamegraphic.com
        </a>
      </div>
      <div className="text-center text-neutral-400 mt-2 font-exo2">
        Or call us at{" "}
        <Link href="tel:+919667224157" className="text-red-400 underline"> +91 96672 24157</Link>
      </div>
      <div className="text-center text-xs text-neutral-500 mt-6 font-exo2">
        By submitting this form, you agree to our{" "}
        <Link href="/privacy-policy" className="text-red-400 underline hover:text-red-300">
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black px-4 py-16 flex items-center justify-center font-titillium">
      <Suspense fallback={
        <div className="w-full max-w-xl bg-neutral-900 rounded-2xl shadow-xl border border-neutral-800 p-8">
          <div className="text-center text-neutral-300">Loading...</div>
        </div>
      }>
        <ContactForm />
      </Suspense>
    </div>
  )
}
