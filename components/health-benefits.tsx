"use client"

import { Heart, Brain, Zap, Shield } from "lucide-react"
import { useEffect, useState } from "react"

const benefits = [
  {
    icon: Heart,
    title: "Heart Health",
    description: "Rich in monounsaturated fats that support cardiovascular health and reduce bad cholesterol.",
  },
  {
    icon: Brain,
    title: "Brain Function",
    description: "Contains lutein and zeaxanthin, powerful antioxidants that support cognitive health.",
  },
  {
    icon: Zap,
    title: "Energy Boost",
    description: "Packed with potassium and B vitamins for sustained energy throughout your day.",
  },
  {
    icon: Shield,
    title: "Immune Support",
    description: "High in vitamin C and antioxidants to strengthen your immune system naturally.",
  },
]

export default function HealthBenefits() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-[26rem] h-[26rem] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-[26rem] h-[26rem] bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nutritional <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Powerhouse</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why avocados are nature's perfect superfood
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className={`group p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-4 inline-block p-3 bg-secondary/20 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-secondary/30">
                  <Icon className="w-6 h-6 text-secondary group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
