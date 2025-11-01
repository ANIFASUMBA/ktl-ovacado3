import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import FarmToMarket from "@/components/farm-to-market"
import HealthBenefits from "@/components/health-benefits"
import FeaturedProducts from "@/components/featured-products"
import VarietiesPreview from "@/components/varieties-preview"
import BlogPreview from "@/components/blog-preview"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      <Navigation />
      <Hero />
      <FarmToMarket />
      <HealthBenefits />
      <FeaturedProducts />
      <VarietiesPreview />
      <BlogPreview />
      <Newsletter />
      <Footer />
    </main>
  )
}
