"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const varieties = [
  {
    name: "Hass",
    season: "Year-round",
    flavor: "Rich & Creamy",
    texture: "Buttery",
    size: "Medium",
    image: "/hass-avocado-dark-green.jpg",
    description:
      "The most popular avocado variety worldwide. Hass avocados have a dark, bumpy skin and creamy, rich flesh. Perfect for guacamole, salads, and toast.",
    nutritionHighlights: ["High in potassium", "Rich in healthy fats", "Excellent source of fiber"],
  },
  {
    name: "Fuerte",
    season: "Fall & Winter",
    flavor: "Buttery & Smooth",
    texture: "Creamy",
    size: "Large",
    image: "/fuerte-avocado-light-green.jpg",
    description:
      "A larger variety with smooth, green skin. Fuerte avocados are known for their buttery texture and mild flavor. Great for families and meal prep.",
    nutritionHighlights: ["High in vitamin E", "Good source of folate", "Contains antioxidants"],
  },
  {
    name: "Hass Premium",
    season: "Year-round",
    flavor: "Rich & Creamy",
    texture: "Buttery",
    size: "Medium",
    image: "/hass 2.jpg",
    description:
      "Premium grade Hass avocados with exceptional creaminess and rich flavor. Carefully selected for superior quality and taste.",
    nutritionHighlights: ["High in potassium", "Rich in healthy fats", "Excellent source of fiber"],
  },
  {
    name: "Hass Select",
    season: "Year-round",
    flavor: "Rich & Creamy",
    texture: "Buttery",
    size: "Medium",
    image: "/hass 3.jpg",
    description:
      "Hand-selected Hass avocados offering the perfect balance of flavor and texture. Ideal for all your culinary needs.",
    nutritionHighlights: ["High in potassium", "Rich in healthy fats", "Excellent source of fiber"],
  },
]

export default function VarietiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Avocado <span className="text-primary">Varieties</span>
          </h1>
          <p className="text-lg text-muted-foreground">Explore our diverse selection of premium avocado varieties</p>
        </div>
      </section>

      {/* Varieties */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {varieties.map((variety, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-12 items-center pb-16 border-b border-border last:border-b-0"
            >
              {index % 2 === 0 ? (
                <>
                  <div>
                    <h2 className="text-4xl font-bold text-primary mb-4">{variety.name}</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{variety.description}</p>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Season</p>
                        <p className="font-semibold text-foreground">{variety.season}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Flavor Profile</p>
                        <p className="font-semibold text-foreground">{variety.flavor}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Texture</p>
                        <p className="font-semibold text-foreground">{variety.texture}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Size</p>
                        <p className="font-semibold text-foreground">{variety.size}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-foreground mb-3">Nutrition Highlights</p>
                      <ul className="space-y-2">
                        {variety.nutritionHighlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl"></div>
                    <img
                      src={variety.image || "/placeholder.svg"}
                      alt={variety.name}
                      className="relative rounded-2xl shadow-2xl w-full h-auto"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl"></div>
                    <img
                      src={variety.image || "/placeholder.svg"}
                      alt={variety.name}
                      className="relative rounded-2xl shadow-2xl w-full h-auto"
                    />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-primary mb-4">{variety.name}</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{variety.description}</p>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Season</p>
                        <p className="font-semibold text-foreground">{variety.season}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Flavor Profile</p>
                        <p className="font-semibold text-foreground">{variety.flavor}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Texture</p>
                        <p className="font-semibold text-foreground">{variety.texture}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Size</p>
                        <p className="font-semibold text-foreground">{variety.size}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-foreground mb-3">Nutrition Highlights</p>
                      <ul className="space-y-2">
                        {variety.nutritionHighlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
