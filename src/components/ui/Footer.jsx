import { FaWhatsapp, FaInstagram, FaFacebook, FaBehance, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function FooterComponent() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    service: "",
    country: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Footer Form User",
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: `Country: ${formData.country}\nSubmitted from footer form.`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ service: "", country: "", phone: "", email: "" });
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to submit form");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      id="contact"
      className="w-full bg-neutral-900 px-4 py-10 font-titillium pb-24 md:px-8 md:py-6 md:pb-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left: Heading and Socials */}
        <div className="flex-1 min-w-[220px]">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-1">
            LET’S GET IN
            <br />
            TOUCH
          </h2>
          <div className="w-16 h-1.5 bg-red-600 mb-2" />
          <div className="flex gap-2 mt-1">
            <a
              href="https://wa.me/919667224157"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 text-xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/noname_graphics/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/nnmegraphics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.behance.net/nonamegraphics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 text-xl"
            >
              <FaBehance />
            </a>
            <a
              href="https://www.linkedin.com/company/no-name-graphic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        {/* Right: Contact Form */}
        {submitted ? (
          <div className="flex-1 w-full text-green-400 text-center py-8">
            <p className="text-lg font-bold">
              Thank you! We'll be in touch soon.
            </p>
          </div>
        ) : (
          <form
            className="flex-1 w-full flex flex-col gap-2 mt-4 md:mt-0"
            onSubmit={handleSubmit}
          >
            {error && (
              <div className="text-red-400 text-sm bg-red-900/20 p-2 rounded mb-2">
                {error}
              </div>
            )}
            {/* Dropdown for "What are you looking for" */}
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded px-3 py-1.5 bg-white text-black font-exo2 text-sm font-medium outline-none"
            >
              <option value="" disabled>
                What are you looking for
              </option>
              <option>Graphic Design</option>
              <option>Branding</option>
              <option>Logo Design</option>
              <option>Printables</option>
              <option>Wedding Invites</option>
              <option>Video Editing</option>
              <option>Monthly Packages</option>
              <option>Bulk Poster | Bulk reels</option>
            </select>

            <select
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
              className="w-full rounded px-3 py-1.5 bg-white text-black font-exo2 text-sm font-medium outline-none"
            >
              <option value="" disabled>
                Country
              </option>
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>Germany</option>
              <option>France</option>
              <option>Singapore</option>
              <option>UAE</option>
              <option>Other</option>
            </select>
            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                name="phone"
                required
                placeholder="Contact No."
                value={formData.phone}
                onChange={handleChange}
                className="rounded px-3 py-1.5 bg-white text-black font-exo2 text-sm font-medium placeholder:font-medium placeholder:text-gray-500 outline-none"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="rounded px-3 py-1.5 bg-white text-black font-exo2 text-sm font-medium placeholder:font-medium placeholder:text-gray-500 outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded px-3 py-1.5 bg-red-600 text-white text-sm font-bold font-[Montserrat] hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Let's Build Your Name"}
              </button>
            </div>
          </form>
        )}
      </div>
    </footer>
  );
}