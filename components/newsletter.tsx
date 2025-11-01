"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useState(() => {
    setIsVisible(true)
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary/10 to-secondary/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`bg-card rounded-2xl border border-border p-12 text-center shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="mb-6 inline-block p-4 bg-primary/10 rounded-full animate-bounce" style={{ animationDuration: '3s' }}>
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get farming tips, health insights, and special offers delivered to your inbox
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <button
              type="submit"
              className="group relative px-8 py-3 bg-primary text-primary-foreground rounded-lg overflow-hidden transition-all duration-300 font-semibold hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10">Subscribe</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-sm text-primary font-semibold animate-in fade-in">
              Thank you for subscribing! Check your email for a welcome gift.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
