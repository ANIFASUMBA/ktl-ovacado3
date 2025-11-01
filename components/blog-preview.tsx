"use client"

import Link from "next/link"
import { Calendar, User } from "lucide-react"

const posts = [
  {
    id: 1,
    title: "Sustainable Farming Practices for Avocado Orchards",
    excerpt: "Learn how we implement regenerative agriculture to maintain soil health and biodiversity.",
    author: "Maria Garcia",
    date: "Oct 15, 2024",
    image: "/avocado-farm-sustainable-agriculture.jpg",
    category: "Farming",
  },
  {
    id: 2,
    title: "The Perfect Avocado: How to Choose and Store",
    excerpt: "Expert tips on selecting ripe avocados and keeping them fresh for longer.",
    author: "James Chen",
    date: "Oct 10, 2024",
    image: "/fresh-avocados-selection-ripeness.jpg",
    category: "Tips",
  },
  {
    id: 3,
    title: "From Seed to Harvest: A Year in Our Orchard",
    excerpt: "Follow our avocado trees through the complete growing cycle and discover what it takes.",
    author: "Sofia Rodriguez",
    date: "Oct 5, 2024",
    image: "/avocado-orchard-harvest-season.jpg",
    category: "Stories",
  },
]

export default function BlogPreview() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest from Our <span className="text-primary">Blog</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Farming tips and stories from our community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Read More Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
