import Link from "next/link"
import { Facebook } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.jpg" 
                alt="KTL Farming Limited" 
                className="h-10 w-auto object-contain"
              />
              <span className="font-bold text-lg">KTL Farming Limited</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Premium, sustainably-grown avocados from farm to your table.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-background/80 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-background/80 hover:text-background transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-background/80 hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-background/80 hover:text-background transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-background/80 hover:text-background transition-colors">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background/20 rounded-lg hover:bg-background/30 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/80">
            <p>&copy; {currentYear} KTL Farming Limited. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-background transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
