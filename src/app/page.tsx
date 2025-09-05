import Aboutbar from "@/components/ui/About_Bar";
import Hero from "@/components/ui/Hero";
import ExpertiseBar from "@/components/ui/ExpertiseBar";
import StatsBar from "@/components/ui/StatsBar";
import { Exo_2, Titillium_Web } from "next/font/google";

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });
const titillium = Titillium_Web({ subsets: ["latin"], variable: "--font-titillium", weight: ["400"] });

export default function Home() {
  return (
    <div className={`${titillium.variable} ${exo2.variable} min-h-screen pb-20 gap-16`}>
      <main className="sm:items-start">
          <Hero />
          <Aboutbar />
          <ExpertiseBar />
          <StatsBar />
      </main>
    </div>
  );
}
