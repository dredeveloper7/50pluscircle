import { Calendar, Clock, Users, AlertCircle, CheckCircle, RefreshCw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GroupingProcess() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Grouping Works</h2>
          <p className="mt-4 text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl">
            Our intelligent grouping system ensures you're always matched with the perfect dinner companions
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Initial Grouping */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Initial Grouping</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">
                Groups are formed the Monday before each dinner session. Last-minute bookings may take up to 2 days to process as we work to fit you into existing groups or add you to our waitlist.
              </p>
            </CardContent>
          </Card>

          {/* Confirmation Deadline */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Confirmation Deadline</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wednesday at 8pm is the confirmation cutoff. If you haven't confirmed by then, your booking will be automatically cancelled with no refund, and your spot will be given to a waitlister.
              </p>
            </CardContent>
          </Card>

          {/* Group Management */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Group Management</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">
                If there are dropouts or cancellations in your group, we'll replenish with waitlisters or regroup you. If this isn't possible, your booking will be auto-cancelled and rescheduled/refunded as requested.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info Box */}
        <div className="mt-8">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Important Notes</h3>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Always confirm your booking by Wednesday 8pm
                    </li>
                    <li className="flex items-center gap-2">
                      <RefreshCw className="h-4 w-4 text-green-600" />
                      Groups are dynamic and may change up until the dinner session
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-green-600" />
                      We aim for groups of 6 and will do our best to maintain this size, but cannot guarantee it due to last-minute changes.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 