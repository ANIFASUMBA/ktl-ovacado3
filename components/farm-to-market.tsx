"use client"

import { Leaf, Truck, Users, Award } from "lucide-react"
import { useEffect, useState } from "react"

const stories = [
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description:
      "We practice regenerative agriculture to ensure healthy soil and thriving ecosystems for generations to come.",
  },
  {
    icon: Truck,
    title: "Farm to Table",
    description: "Direct from our orchards to your doorstep within 48 hours, ensuring peak freshness and quality.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "We support and partner with farmers by providing extension services from orchard establishment, management, and marketing, linking to sustainable markets.",
  },
  {
    icon: Award,
    title: "Quality Certified",
    description: "Our nursery is a high health nursery certified by the national body of KEPHIS. We are Global GAP, SMETA certified, and in the process of Chinese market certification.",
  },
]

export default function FarmToMarket() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            From Farm to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Your Table</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to quality, sustainability, and community excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stories.map((story, index) => {
            const Icon = story.icon
            return (
              <div
                key={index}
                className={`group p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:scale-105 cursor-pointer transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="w-6 h-6 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{story.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{story.description}</p>
              </div>
            )
          })}
        </div>

        {/* Beautiful Farm Gallery */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Journey</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the journey of our premium avocados from seed to harvest
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative h-96 overflow-hidden">
                <img
                  src="/seed.jpg"
                  alt="Quality Seeds"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold mb-2">Quality Seeds</h4>
                <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Premium avocado seeds for optimal growth
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative h-96 overflow-hidden">
                <img
                  src="/pluck.jpg"
                  alt="Avocado Seedlings"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold mb-2">Seedlings</h4>
                <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Nurturing young avocado trees with care
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative h-96 overflow-hidden">
                <img
                  src="/fresh-avocados-on-tree-farm-sustainable-agricultur.jpg"
                  alt="Thriving Orchards"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold mb-2">Thriving Orchards</h4>
                <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Sun-kissed avocados ready for harvest
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Beautiful Gallery - Community & Impact */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Community</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building relationships and making a positive impact together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative h-96 overflow-hidden">
                <img
                  src="/trees.jpg"
                  alt="Our Trees"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold mb-2">Thriving Trees</h4>
                <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Healthy avocado trees nurtured with care
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative h-96 overflow-hidden">
                <img
                  src="/meet.jpg"
                  alt="Meet Our Team"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold mb-2">Our Community</h4>
                <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  A strong network of avocado enthusiasts and farmers
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative h-96 overflow-hidden">
                <img
                  src="/charity.jpg"
                  alt="Community Impact"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold mb-2">Community Impact</h4>
                <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Giving back to our community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
