import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Our Community</h1>
          <p className="text-gray-500 md:text-xl/relaxed">
            Learn more about our mission to connect like-minded people over dinner
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="text-gray-600">
              50pluscircle was founded in 2025 with a simple mission: to create meaningful
              connections in an increasingly disconnected world. We recognized that despite social media and technology
              bringing people closer together virtually, many people were feeling more isolated than ever.
            </p>
            <p className="text-gray-600">
              Our founder, after moving to a new city, struggled to find a community where they could have deep,
              meaningful conversations with like-minded individuals. After hosting a few dinner parties with carefully
              selected guests, they realized the power of curated dinner experiences in fostering genuine connections.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-gray-600">
              We believe that breaking bread together is one of the most powerful ways to build community. Our mission
              is to create spaces where people can connect authentically, share their stories, and build lasting
              relationships.
            </p>
            <p className="text-gray-600">
              Every dinner session is carefully curated to bring together 6 individuals who share common interests and
              values, but bring diverse perspectives and experiences to the table.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Values</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                <span className="font-medium">Authenticity:</span> We create spaces where people can be their true
                selves
              </li>
              <li>
                <span className="font-medium">Community:</span> We believe in the power of belonging and connection
              </li>
              <li>
                <span className="font-medium">Respect:</span> We honor diverse perspectives and experiences
              </li>
              <li>
                <span className="font-medium">Growth:</span> We encourage personal and spiritual development
              </li>
              <li>
                <span className="font-medium">Hospitality:</span> We create welcoming environments for everyone
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="https://app.50pluscircle.com/auth/sign-up">Join Our Community</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
