import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import LocationMap from "@/components/location-map"
import TestimonialCarousel from "@/components/testimonial-carousel"
import HowItWorks from "@/components/how-it-works"
import MemberVideoShowcase from "@/components/member-video-showcase"
import RestaurantPartners from "@/components/restaurant-partners"
import CommunicationSection from "@/components/communication-section"
import GroupingProcess from "@/components/grouping-process"
import { trackSignUpClick, trackPageView } from "@/components/FacebookPixel"
import { useEffect } from "react"

export default function Home() {
  // Track page view when component mounts
  useEffect(() => {
    trackPageView('Homepage')
  }, [])

  // Handle sign-up button clicks
  const handleSignUpClick = (source: string) => {
    trackSignUpClick(source)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-white pt-8 pb-20 lg:pt-16 lg:pb-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 mb-4">
                Meaningful Connections Across England
              </div>
              <h1 className="text-6xl font-bold tracking-tighter">
                Connect with <span className="text-green-600">Like-Minded</span> <span className="text-green-600">People</span> Over Dinner
              </h1>
              <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join a curated dining experience with groups of 6 across England. Share meaningful conversations over
                delicious food in a welcoming atmosphere.
              </p>
              <div className="flex flex-row gap-3">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link 
                    href="https://app.50pluscircle.com/auth/sign-up"
                    onClick={() => handleSignUpClick('hero-section')}
                  >
                    Sign Up Now
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#how-it-works">Learn How It Works</Link>
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>24 new members joined this week</span>
              </div>
            </div>
            <div className="relative lg:pl-10">
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img
                  src="front-page-hero-image-3.jpg?height=600&width=800"
                  alt="A group of people enjoying dinner together"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {/* {[1, 2, 3].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                        <img
                          src={`/placeholder${i}.svg?height=40&width=40&text=${i}`}
                          alt="Member"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))} */}
                  </div>
                  <div>
                    <p className="text-sm font-medium">Next dinner session</p>
                    <p className="text-xs text-gray-500">Friday, 7:30 PM in London</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="py-16 bg-green-50" id="how-it-works">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="mt-4 text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl">
              Five simple steps to join our community and enjoy meaningful dinner conversations
            </p>
          </div>
          <HowItWorks />
        </div>
      </section>

      {/* Grouping Process Section */}
      <GroupingProcess />

      {/* Communication Section */}
      <CommunicationSection />


      {/* Rest of the page content remains the same */}
      {/* Locations Section */}
      <section className="py-16 bg-white" id="locations">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Where We Operate</h2>
            <p className="mt-4 text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl">
              Join our dinner sessions in these cities across England. We're constantly expanding to new locations.
            </p>
          </div>
          <LocationMap />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
            {["London", "Manchester", "Birmingham", "Liverpool", "Leeds", "Bristol"].map((city) => (
              <Card key={city} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <MapPin className="h-5 w-5 mx-auto mb-2 text-green-600" />
                  <p className="font-medium">{city}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Member Video Showcase */}
      <MemberVideoShowcase 
        videoType="local"
        localVideoSrc="/Mark Goodwill.MOV"
        memberName="Mark Goodwill"
        memberQuote="These dinner gatherings have transformed how I connect with other like-minded people in my city."
      />

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Members Say</h2>
            <p className="mt-4 text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl">
              Hear from people who have joined our dinner sessions
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Restaurant Partners Section */}
      {/* <RestaurantPartners /> */}

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Join Our Next Dinner?
              </h2>
              <p className="mt-4 text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up now to reserve your spot at our next dinner session in your city.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
              <Button asChild size="lg" variant="secondary">
                <Link href="https://app.50pluscircle.com/auth">Login</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Link 
                  href="https://app.50pluscircle.com/auth/sign-up"
                  onClick={() => handleSignUpClick('cta-section')}
                >
                  Sign Up Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
