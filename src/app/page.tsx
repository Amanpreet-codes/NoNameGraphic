import Aboutbar from "@/components/ui/About_Bar";
import Hero from "@/components/ui/Hero";

export default function Home() {
  return (
    <div className="font-sans min-h-screen pb-20 gap-16">
      <main className="sm:items-start">
          <Hero />
          <Aboutbar />
      </main>
    </div>
  );
}
