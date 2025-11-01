"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32">
      {/* Animated decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-1/3 w-3 h-3 bg-secondary/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '3.5s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} flex flex-col`}
          >
            <div className="flex-grow mb-8 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <Image
                src="/logo.jpg"
                alt="KTL Avocados Logo"
                width={800}
                height={600}
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">Fresh from Farm</span> to Your Table
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Discover premium, sustainably-grown avocados and join a community passionate about health, flavor, and
              responsible farming. From farm-to-market stories to expert tips, we bring you the best of avocado
              culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="group relative px-8 py-3 bg-primary text-primary-foreground rounded-lg overflow-hidden transition-all duration-300 font-semibold text-center hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">Shop Products</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/about"
                className="group relative px-8 py-3 border-2 border-primary text-primary rounded-lg overflow-hidden transition-all duration-300 font-semibold text-center hover:shadow-lg hover:scale-105"
              >
                <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">Our Story</span>
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="/fresh-avocados-on-tree-farm-sustainable-agricultur.jpg"
                alt="Fresh avocados from our farm"
                className="relative rounded-2xl shadow-2xl w-full h-auto transform transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
