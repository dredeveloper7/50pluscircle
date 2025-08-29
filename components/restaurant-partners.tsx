import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const restaurants = [
  { src: "/restaurant-partners/angus-logo.svg", alt: "Angus Restaurant", bg: "bg-black" },
  { src: "/restaurant-partners/camino-logo.svg", alt: "Camino", bg: "bg-white" },
  { src: "/restaurant-partners/patara-logo.png", alt: "Patara Restaurant", bg: "bg-white" },
  { src: "/restaurant-partners/bigeasy-logo.jpg", alt: "Big Easy", bg: "bg-white" },
  { src: "/restaurant-partners/dishoom-logo.jpg", alt: "Dishoom", bg: "bg-white" },
  { src: "/restaurant-partners/blacklock-logo.svg", alt: "Blacklock Restaurant", bg: "bg-white" },
  { src: "/restaurant-partners/faros-logo.png", alt: "Faros Restaurant", bg: "bg-white" },
  { src: "/restaurant-partners/ROKA_logo.svg", alt: "ROKA", bg: "bg-black" },
  { src: "/restaurant-partners/coppa-club.png", alt: "Coppa Club", bg: "bg-white" },
  { src: "/restaurant-partners/theivy-logo.svg", alt: "the ivy", bg: "bg-white" },
]

export default function RestaurantPartners() {
  return (
    <section id="dining-venues" className="py-16 bg-green-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Featured Dining Venues</h2>
          <p className="mt-2 text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl">
            We partner with venues across
            <span className="text-green-500 font-bold"> all price points</span> to suit
            <span className="text-green-500 font-bold underline"> everyone's budget</span>
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {restaurants.map((r, i) => (
            <Card key={i} className="flex items-center justify-center h-36 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="flex items-center justify-center h-full p-4">
                <Image
                  src={r.src}
                  alt={r.alt}
                  className="max-h-20 max-w-full object-contain"
                  width={160}
                  height={80}
                  style={{ maxHeight: '5rem', width: 'auto', height: 'auto' }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 font-medium mb-6">
            And many more exceptional venues waiting to be discovered...
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            <a href="https://app.50pluscircle.com/auth/sign-up">
              Join Us Today
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
} 