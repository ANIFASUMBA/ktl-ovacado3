"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"

const products = [
  {
    id: 1,
    name: "Hass Avocados - Premium Box",
    price: "$24.99",
    image: "/hass-avocados-fresh-organic.jpg",
    description: "Our signature variety - creamy, rich, and perfect for any occasion",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Fuerte Avocados - Bulk Pack",
    price: "$32.99",
    image: "/fuerte-avocados-green-fresh.jpg",
    description: "Larger, buttery avocados ideal for families and meal prep",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Packed Avocados",
    price: "$29.99",
    image: "/packed.jpg",
    description: "Carefully packed fresh avocados ready for delivery",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Mixed Varieties Bundle",
    price: "$39.99",
    image: "/mixed-avocado-varieties-assorted.jpg",
    description: "Experience our full range of premium avocado varieties",
    rating: 5.0,
  },
]

export default function FeaturedProducts() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-[24rem] h-[24rem] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-[24rem] h-[24rem] bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="text-lg text-muted-foreground">Handpicked selections from our farm</p>
          </div>
          <Link
            href="/products"
            className="hidden md:inline-block group relative px-6 py-2 border-2 border-primary text-primary rounded-lg overflow-hidden transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg"
          >
            <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">View All</span>
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:scale-105 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${product.id * 100}ms` }}
            >
              <div className="relative overflow-hidden h-64 bg-muted">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary flex items-center gap-1">
                    <span className="text-yellow-500">★</span> {product.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/products"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
