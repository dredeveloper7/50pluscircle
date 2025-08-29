"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, CheckCircle, Bell, Monitor } from "lucide-react"
import Image from "next/image"

export default function CommunicationSection() {
  return (
    <section className="py-20 bg-transparent border-t border-b border-green-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div 
            className="h-20 w-20 rounded-full bg-green-600 flex items-center justify-center mb-6 shadow-lg"
            style={{
              animation: 'fadeInUp 0.8s ease-out forwards',
              opacity: 0,
              transform: 'translateY(30px)'
            }}
          >
            <MessageCircle className="h-10 w-10 text-white" />
          </div>
          <h2 
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-900 mb-4"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.2s forwards',
              opacity: 0,
              transform: 'translateY(30px)'
            }}
          >
            Stay Connected
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.4s forwards',
              opacity: 0,
              transform: 'translateY(30px)'
            }}
          >
            Receive instant confirmations and updates through WhatsApp and email to keep you informed every step of the way
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Features */}
          <div 
            className="space-y-6"
            style={{
              animation: 'fadeInLeft 0.8s ease-out 0.6s forwards',
              opacity: 0,
              transform: 'translateX(-30px)'
            }}
          >
            <Card className="border border-green-200 shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp Confirmations</h3>
                    <p className="text-gray-600">
                      Get instant WhatsApp messages confirming your dinner details, group matches, and important updates
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-green-200 shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Bell className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Notifications</h3>
                    <p className="text-gray-600">
                      Receive comprehensive email confirmations with all the details you need for your dinner experience
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-green-200 shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Monitor className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Web App Confirmations</h3>
                    <p className="text-gray-600">
                      View your table mates, manage your booking, and see all dinner details in our easy-to-use web app
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - WhatsApp iPhone Image */}
          <div 
            className="flex justify-center lg:justify-end"
            style={{
              animation: 'fadeInRight 0.8s ease-out 0.8s forwards',
              opacity: 0,
              transform: 'translateX(30px)'
            }}
          >
            <div className="relative">
              <Image
                src="/whatsapp-iphone.png"
                alt="WhatsApp confirmation message from 50pluscircle"
                width={320}
                height={400}
                className="rounded-2xl"
                priority
                unoptimized
                style={{
                  background: 'transparent !important',
                  backgroundColor: 'transparent !important',
                  filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
                  transform: 'scale(1.5)' // Makes it 50% larger
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Ensure PNG transparency is preserved */
        img[src*="whatsapp-iphone.png"] {
          background: transparent !important;
        }
      `}</style>
    </section>
  )
} 