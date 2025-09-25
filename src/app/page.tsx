import WelcomeBar from "@/components/ui/Welcome_Bar";
import Hero from "@/components/ui/Hero";
import ExpertiseBar from "@/components/ui/ExpertiseBar";
import ClientsCarousel from "@/components/ui/ClientsCarousel";
import StatsBar from "@/components/ui/StatsBar";
import BannerCarousel from "@/components/ui/BannerCarousel";
import { Exo_2, Titillium_Web } from "next/font/google";
import VideoCarousel from "@/components/ui/VideoCarousel";

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });
const titillium = Titillium_Web({ subsets: ["latin"], variable: "--font-titillium", weight: ["400"] });

export default function Home() {
  return (
    <div className={`${titillium.variable} ${exo2.variable} min-h-screen pb-20 gap-16 bg-neutral-900`}>
      <main className="sm:items-start">
          <Hero />
          <WelcomeBar />
          <VideoCarousel />
          <ExpertiseBar />
          <ClientsCarousel />
          <StatsBar />
          <BannerCarousel />
      </main>
    </div>
  );
}