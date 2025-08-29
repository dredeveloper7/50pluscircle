import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, Calendar, MapPin, Utensils, Users } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="h-10 w-10 text-green-600" />,
      title: "Sign Up",
      description: "Create your profile and tell us about your interests, dietary preferences, and availability.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-green-600" />,
      title: "Select Location",
      description: "Choose the city and neighborhood where you'd like to have your dinner experience.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-green-600" />,
      title: "Choose a Date",
      description: "Select a date you wish to attend a dinner session from our available options.",
    },
    {
      icon: <Users className="h-10 w-10 text-green-600" />,
      title: "Get Grouped",
      description: "5 days before your dinner, you'll see your group and restaurant details in your account, and you'll receive an email confirming your group.",
    },
    {
      icon: <Utensils className="h-10 w-10 text-green-600" />,
      title: "Enjoy Dinner",
      description: "Meet your group and enjoy meaningful conversations over a delicious meal.",
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
      {steps.map((step, index) => (
        <Card key={index} className="border-none shadow-lg">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              {step.icon}
            </div>
            <div className="bg-green-600 text-white text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center mb-4">
              {index + 1}
            </div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
