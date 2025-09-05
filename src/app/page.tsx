import Aboutbar from "@/components/ui/About_Bar";
import Hero from "@/components/ui/Hero";
import ExpertiseBar from "@/components/ui/ExpertiseBar";
import StatsBar from "@/components/ui/StatsBar";

export default function Home() {
  return (
    <div className="font-[Montserrat] min-h-screen pb-20 gap-16">
      <main className="sm:items-start">
          <Hero />
          <Aboutbar />
          <ExpertiseBar />
          <StatsBar />
      </main>
    </div>
  );
}
