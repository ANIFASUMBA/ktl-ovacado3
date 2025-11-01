"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const varieties = [
  {
    name: "Hass",
    season: "Year-round",
    flavor: "Rich & Creamy",
    image: "/hass-avocado-dark-green.jpg",
  },
  {
    name: "Fuerte",
    season: "Fall & Winter",
    flavor: "Buttery & Smooth",
    image: "/fuerte-avocado-light-green.jpg",
  },
  {
    name: "Hass Premium",
    season: "Year-round",
    flavor: "Rich & Creamy",
    image: "/hass 2.jpg",
  },
  {
    name: "Hass Select",
    season: "Year-round",
    flavor: "Rich & Creamy",
    image: "/hass 3.jpg",
  },
]

export default function VarietiesPreview() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 -right-28 w-[26rem] h-[26rem] bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-28 -left-28 w-[26rem] h-[26rem] bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Avocado <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Varieties</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse selection of premium avocado varieties
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {varieties.map((variety, index) => (
            <div
              key={index}
              className={`group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:scale-105 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={variety.image || "/placeholder.svg"}
                  alt={variety.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{variety.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-semibold text-foreground">Season:</span> {variety.season}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Flavor:</span> {variety.flavor}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/varieties"
            className="group relative inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg overflow-hidden transition-all duration-300 font-semibold hover:shadow-2xl hover:scale-105"
          >
            <span className="relative z-10">Explore All Varieties</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}
