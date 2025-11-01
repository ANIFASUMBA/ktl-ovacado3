"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ShoppingCart, Filter } from "lucide-react"

const allProducts = [
  {
    id: 1,
    name: "Hass Avocados - Premium Box",
    price: 24.99,
    category: "Fresh",
    rating: 4.9,
    reviews: 128,
    image: "/hass-avocados-fresh-organic.jpg",
    description: "Our signature variety - creamy, rich, and perfect for any occasion",
    inStock: true,
  },
  {
    id: 2,
    name: "Fuerte Avocados - Bulk Pack",
    price: 32.99,
    category: "Fresh",
    rating: 4.8,
    reviews: 95,
    image: "/fuerte-avocados-green-fresh.jpg",
    description: "Larger, buttery avocados ideal for families and meal prep",
    inStock: true,
  },
  {
    id: 3,
    name: "Avocado Oil - Cold Pressed",
    price: 18.99,
    category: "Oil",
    rating: 4.9,
    reviews: 156,
    image: "/packed.jpg",
    description: "Pure, cold-pressed oil for cooking and salads",
    inStock: true,
  },
  {
    id: 4,
    name: "Mixed Varieties Bundle",
    price: 39.99,
    category: "Fresh",
    rating: 5.0,
    reviews: 87,
    image: "/mixed-avocado-varieties-assorted.jpg",
    description: "Experience our full range of premium avocado varieties",
    inStock: true,
  },
  {
    id: 5,
    name: "Organic Avocado Spread",
    price: 12.99,
    category: "Spreads",
    rating: 4.7,
    reviews: 64,
    image: "/hass 2.jpg",
    description: "Creamy, organic avocado spread perfect for toast and snacks",
    inStock: true,
  },
  {
    id: 6,
    name: "Bacon Avocados - Seasonal",
    price: 28.99,
    category: "Fresh",
    rating: 4.6,
    reviews: 42,
    image: "/hass 3.jpg",
    description: "Mild and nutty flavor, available in fall and winter",
    inStock: false,
  }
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")
  const [cart, setCart] = useState<number[]>([])

  const categories = ["All", "Fresh", "Oil", "Spreads"]

  const filteredProducts =
    selectedCategory === "All" ? allProducts : allProducts.filter((p) => p.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating
    return 0
  })

  const addToCart = (id: number) => {
    setCart([...cart, id])
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: "url('/hass-avocados-fresh-organic.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="relative text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-primary">Product Catalog</span>
          </h1>
          <p className="relative text-xl text-white/90 max-w-2xl">
            Discover our complete range of premium avocados and avocado products
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter size={20} className="text-primary" />
                <h3 className="text-lg font-bold text-foreground">Filters</h3>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-4">Category</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                        selectedCategory === cat
                          ? "bg-primary text-primary-foreground font-semibold shadow-lg scale-105"
                          : "text-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="featured">Featured</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-8">
              <p className="text-muted-foreground">Showing {sortedProducts.length} products</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-card rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden h-64 bg-muted">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">Out of Stock</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="text-secondary font-semibold">★ {product.rating}</span>
                        <span className="text-muted-foreground text-xs ml-1">({product.reviews})</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
