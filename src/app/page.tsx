import WelcomeBar from "@/components/ui/Welcome_Bar";
import Hero from "@/components/ui/Hero";
import ExpertiseBar from "@/components/ui/ExpertiseBar";
import StatsBar from "@/components/ui/StatsBar";
import { Exo_2, Titillium_Web } from "next/font/google";
import Image from "next/image";
import Banner1 from "/public/banners/Banner1.jpg"

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });
const titillium = Titillium_Web({ subsets: ["latin"], variable: "--font-titillium", weight: ["400"] });

export default function Home() {
  return (
    <div className={`${titillium.variable} ${exo2.variable} min-h-screen pb-20 gap-16`}>
      <main className="sm:items-start bg-neutral-900">
          <Hero />
          <WelcomeBar />
          <ExpertiseBar />
          <StatsBar />
            <div className="w-auto max-w-6xl mx-auto mt-8 bg-neutral-900">
            <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer">
              <Image
              src={Banner1}
              alt="banner"
              className="w-full h-auto object-cover rounded-lg"
              priority
              />
            </a>
            </div>
      </main>
    </div>
  );
}
