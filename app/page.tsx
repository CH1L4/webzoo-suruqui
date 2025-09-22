import { HeroSection } from "@/components/hero-section"
import { CharacteristicsSection } from "@/components/characteristics-section"
import { HabitatSection } from "@/components/habitat-section"
import { FeedingSection } from "@/components/feeding-section"
import { BehaviorSection } from "@/components/behavior-section"
import { ConservationSection } from "@/components/conservation-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <CharacteristicsSection />
        <HabitatSection />
        <FeedingSection />
        <BehaviorSection />
        <ConservationSection />
      </main>
      <Footer />
    </div>
  )
}
