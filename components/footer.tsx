import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4 col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-600">50pluscircle</span>
            </Link>
            <p className="text-sm text-gray-500">
              Connecting like-minded people over dinner across England since 2025.
            </p>
            <div className="flex gap-4">
              {/* <Link href="#" className="text-gray-500 hover:text-green-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link> */}
              <Link href="https://www.instagram.com/50pluscircle" className="text-gray-500 hover:text-green-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              {/* <Link href="#" className="text-gray-500 hover:text-green-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link> */}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#locations" className="text-gray-500 hover:text-green-600">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-gray-500 hover:text-green-600">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-500 hover:text-green-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-500 hover:text-green-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Cities</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/locations/london" className="text-gray-500 hover:text-green-600">
                  London
                </Link>
              </li>
              <li>
                <Link href="/locations/manchester" className="text-gray-500 hover:text-green-600">
                  Manchester
                </Link>
              </li>
              <li>
                <Link href="/locations/birmingham" className="text-gray-500 hover:text-green-600">
                  Birmingham
                </Link>
              </li>
              <li>
                <Link href="/locations/liverpool" className="text-gray-500 hover:text-green-600">
                  Liverpool
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-gray-500 hover:text-green-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-500 hover:text-green-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies-policy" className="text-gray-500 hover:text-green-600">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:support@50pluscircle.com" className="text-gray-500 hover:text-green-600">
                  support@50pluscircle.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} 50pluscircle. All rights reserved.
            <br />
            50pluscircle is a brand of GrittyDigital Ltd.
          </p>
          <p className="text-xs text-gray-500 mt-4 md:mt-0">Designed with ❤️ in England</p>
        </div>
      </div>
    </footer>
  )
}
