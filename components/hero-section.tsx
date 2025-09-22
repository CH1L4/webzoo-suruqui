"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToCharacteristics = () => {
    const element = document.getElementById("characteristics")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/yellow-anaconda-in-natural-wetland-habitat-with-lu.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          <span className="gradient-text">Sucuri Amarela</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-balance leading-relaxed">
          <em>Eunectes notaeus</em> - Uma das maiores serpentes da América do Sul, conhecida por sua impressionante
          força e adaptação aos ambientes aquáticos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg hover-scale"
            onClick={scrollToCharacteristics}
          >
            Explorar Características
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Floating Animation Element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 float-animation">
        <ArrowDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  )
}
