import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PositioningStrip from "@/components/PositioningStrip";
import SelectedSystems from "@/components/SelectedSystems";
import LatestThinking from "@/components/LatestThinking";

export default function Home() {
  return (
    <main className="min-h-[100dvh] relative min-w-full">
     
      <Navbar />
      <Hero />
      <PositioningStrip />
      <SelectedSystems />
      <LatestThinking />
    </main>
  );
}
