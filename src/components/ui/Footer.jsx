import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function FooterComponent() {
  return (
    <footer className="w-full bg-neutral-900 px-4 py-10 font-[Montserrat] pb-24 md:px-8 md:py-6 md:pb-6">
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
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 text-xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 text-xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        {/* Right: Contact Form */}
        <form className="flex-1 w-full flex flex-col gap-2 mt-4 md:mt-0">
          <input
            type="text"
            placeholder="WHAT ARE YOU LOOKING FOR"
            className="w-full rounded px-3 py-1.5 bg-white text-black font-[Inter] text-sm font-medium placeholder:font-medium placeholder:text-gray-500 outline-none"
          />
          <div className="flex flex-wrap gap-2">
            <select className="rounded px-3 py-1.5 bg-white text-black font-[Inter] text-sm font-medium outline-none">
              <option>INDIA</option>
              <option>USA</option>
              <option>UK</option>
              <option>Other</option>
            </select>
            <input
              type="text"
              placeholder="Contact No."
              className="rounded px-3 py-1.5 bg-white text-black font-[Inter] text-sm font-medium placeholder:font-medium placeholder:text-gray-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded px-3 py-1.5 bg-white text-black font-[Inter] text-sm font-medium placeholder:font-medium placeholder:text-gray-500 outline-none"
            />
            <button
              type="submit"
              className="rounded px-3 py-1.5 bg-red-600 text-white text-sm font-bold font-[Montserrat] hover:bg-red-700 transition"
            >
              Let’s Build Your Name
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
}