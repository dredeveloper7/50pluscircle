"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      name: "Margaret",
      age: 58,
      occupation: "Retired Teacher",
      quote:
        "I've made genuine connections that have lasted beyond the dinner table. The curated groups ensure meaningful conversations every time.",
      image: "/placeholder.svg?height=80&width=80&text=M",
    },
    {
      id: 2,
      name: "Robert",
      age: 62,
      occupation: "Retired Accountant",
      quote:
        "As someone new to London, these dinners have been the perfect way to meet like-minded people and explore the city's restaurants.",
      image: "/placeholder.svg?height=80&width=80&text=R",
    },
    {
      id: 3,
      name: "Patricia",
      age: 55,
      occupation: "Healthcare Administrator",
      quote:
        "The conversations are always stimulating and the groups are perfectly balanced. I look forward to these dinners every other week.",
      image: "/placeholder.svg?height=80&width=80&text=P",
    },
    {
      id: 4,
      name: "Michael",
      age: 67,
      occupation: "Retired Engineer",
      quote:
        "I appreciate how well-organized everything is. The process is seamless from signup to the actual dinner experience.",
      image: "/placeholder.svg?height=80&width=80&text=M",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024)

  // Only handle window resize events
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, []) // No dependencies related to component state

  // Calculate visible count based on window width
  const getVisibleCount = () => {
    if (windowWidth >= 1024) return 3
    if (windowWidth >= 640) return 2
    return 1
  }

  const visibleCount = getVisibleCount()

  // Calculate visible testimonials directly from current state
  const visibleTestimonials = testimonials.slice(activeIndex, Math.min(activeIndex + visibleCount, testimonials.length))

  const nextSlide = () => {
    setActiveIndex((prev) => Math.min(prev + 1, testimonials.length - visibleCount))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Member Testimonials</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={prevSlide} disabled={activeIndex === 0} className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={activeIndex >= testimonials.length - visibleCount}
            className="h-8 w-8"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial) => (
          <Card key={testimonial.id} className="h-full">
            <CardContent className="p-6 flex flex-col h-full">
              <Quote className="h-8 w-8 text-green-200 mb-4" />
              <p className="text-gray-600 flex-grow mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-green-100">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">
                    {testimonial.name}, {testimonial.age}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.occupation}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
