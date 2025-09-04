"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Logo.png"
import { useState } from "react";

export default function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-lg sticky top-0 z-50">
      {/* Logo / Brand */}
      <Link href="/" className="flex items-center">
        <Image src={Logo} alt="No Name Graphics Logo" className="h-8 w-auto" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 font-sans">
        <Link href="/" className="hover:text-gray-600 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-600 transition">
          About
        </Link>
        <Link href="/services" className="hover:text-gray-600 transition">
          Services
        </Link>
        <Link href="/contact" className="hover:text-gray-600 transition">
          Contact
        </Link>
        <Link href="/pricing" className="hover:text-gray-600 transition">
          Pricing
        </Link>
      </div>

      {/* CTA button (desktop) */}
      <Link
        href="/contact"
        className="hidden md:inline-block px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition font-sans"
      >
        Get Started
      </Link>
      {/* Hamburger Icon (mobile) */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span
          className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-black my-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 w-full bg-white/95 shadow-md flex flex-col items-center gap-4 py-6 font-sans z-40 transition-transform duration-300 md:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ minHeight: "100vh" }}
      >
        <Link
          href="/"
          className="hover:text-gray-600 transition text-lg"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-gray-600 transition text-lg"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          href="/services"
          className="hover:text-gray-600 transition text-lg"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="hover:text-gray-600 transition text-lg"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
        <Link
          href="/pricing"
          className="hover:text-gray-600 transition text-lg"
          onClick={() => setMenuOpen(false)}
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition font-sans mt-2"
          onClick={() => setMenuOpen(false)}
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
