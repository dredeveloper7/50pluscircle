import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "How much does it cost to join?",
      answer:
        "There is a membership fee of £6.99, which gives you access to join a dinner group. The cost of your meal at the restaurant is not included; you pay for your own food and drinks at the dinner.",
    },
    {
      question: "How does the matching process work?",
      answer:
        "Our algorithm matches you with 5 other like-minded people based on your preferences, interests, and availability. Each dinner group is carefully curated to ensure meaningful connections and diverse perspectives.",
    },
    {
      question: "How often are the dinners held?",
      answer:
        "Dinners are held bi-weekly, giving you plenty of time to connect with your group and look forward to meeting new people at the next event. You can choose to attend as many or as few dinners as you like.",
    },
    {
      question: "What's included in the booking?",
      answer:
        "Each booking includes access to our curated dinner events, smart matching algorithm, and conversation starter app. We handle all the restaurant arrangements and group coordination. You only pay for your meals at the restaurants.",
    },
    {
      question: "Can I bring a friend?",
      answer:
        "While we encourage everyone to join individually to meet new people, you can certainly invite friends to sign up as well. They'll go through the same matching process and might end up in different dinner groups, expanding everyone's network.",
    },
    {
      question: "What if I need to cancel?",
      answer: (
        <div className="space-y-3">
          <p>We understand that plans can change. Here's our cancellation policy:</p>
          
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-semibold">•</span>
              <span>You can cancel your attendance up to 48 hours before the dinner without incurring a cancellation fee.</span>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-semibold">•</span>
              <span>You have the option to reschedule once per booking (up to 48 hours before the dinner).</span>
            </div>
            
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-semibold">•</span>
              <span>If you need to cancel a second time, you'll need to make a new booking to attend a future dinner.</span>
            </div>
          </div>
          
          <p className="pt-2">
            To keep our prices reasonable, we generally do not offer refunds for cancellations unless there are extreme circumstances. This policy helps us maintain affordable pricing for all our members while ensuring the best possible experience for everyone.
          </p>
        </div>
      ),
    },
    {
      question: "What if I don't show up?",
      answer:
        "If you don't show up to your scheduled dinner without prior cancellation, you will be charged a no-show fee of £20. Additionally, a strike will be recorded against your account.\n\nOur strike policy is as follows:\n• First no-show: £20 fee and one strike\n• Second no-show: £20 fee and second strike\n• After two strikes: Your account will be blocked from all 50pluscircle events (including dinners, social gatherings, and any other events) for one year\n\nThis policy helps us maintain the quality of our service and ensures that all members can enjoy their dining experience as planned.",
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h1>
          <p className="text-gray-500 md:text-xl/relaxed">
            Find answers to common questions about our dinner community
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center space-y-4 pt-8">
          <h2 className="text-xl font-bold">Still have questions?</h2>
          <p className="text-gray-600">
            If you couldn't find the answer to your question, please feel free to contact us directly.
          </p>
          <div className="flex justify-center">
            <a href="mailto:support@50pluscircle.com" className="text-green-600 hover:text-green-700 font-medium">
              support@50pluscircle.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
