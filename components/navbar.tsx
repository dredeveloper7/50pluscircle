"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { trackSignUpClick } from "@/components/FacebookPixel"
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Handle sign-up button clicks
  const handleSignUpClick = (source: string) => {
    trackSignUpClick(source)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/50pluscircle-logo.png" alt="50pluscircle" width={104} height={104} />
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/#locations" className="text-sm font-medium hover:text-green-600 transition-colors">
            Locations
          </Link>
          <Link href="/#how-it-works" className="text-sm font-medium hover:text-green-600 transition-colors">
            How It Works
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-green-600 transition-colors">
            About Us
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:text-green-600 transition-colors">
            FAQ
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline">
            <Link href="https://app.50pluscircle.com/auth">Login</Link>
          </Button>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link 
              href="https://app.50pluscircle.com/auth/sign-up"
              onClick={() => handleSignUpClick('navbar-desktop')}
            >
              Sign Up
            </Link>
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container flex flex-col gap-4 py-4 px-4 md:px-6">
            <Link
              href="/#locations"
              className="text-sm font-medium hover:text-green-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm font-medium hover:text-green-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-green-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium hover:text-green-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild variant="outline" className="w-full">
                <Link href="https://app.50pluscircle.com/auth">Login</Link>
              </Button>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link 
                  href="https://app.50pluscircle.com/auth/sign-up"
                  onClick={() => {
                    handleSignUpClick('navbar-mobile')
                    setIsMenuOpen(false)
                  }}
                >
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
