"use client"

import { useRef, useEffect, useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import Script from "next/script"

declare global {
  interface Window {
    Vimeo: {
      Player: new (element: HTMLIFrameElement) => any;
    };
  }
}

interface MemberVideoShowcaseProps {
  videoId?: string
  videoType?: 'vimeo' | 'local'
  localVideoSrc?: string
  memberName?: string
  memberLocation?: string
  memberQuote?: string
}

export default function MemberVideoShowcase({
  videoId = "1084582621",
  videoType = 'vimeo',
  localVideoSrc = "/Mark Goodwill.MOV",
  memberName = "Mark Goodwill",
  memberLocation = "London",
  memberQuote = "These dinner gatherings have transformed how I connect with other like-minded people in my city.",
}: MemberVideoShowcaseProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPlayerReady, setIsPlayerReady] = useState(false)
  const playerRef = useRef<any>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (videoType === 'vimeo' && playerRef.current && isPlayerReady) {
            try {
              playerRef.current.play()
              setIsPlaying(true)
            } catch (error) {
              console.error('Error playing Vimeo video:', error)
            }
          } else if (videoType === 'local' && videoRef.current) {
            try {
              videoRef.current.play()
              setIsPlaying(true)
            } catch (error) {
              console.error('Error playing local video:', error)
            }
          }
        } else {
          if (videoType === 'vimeo' && playerRef.current && isPlayerReady) {
            try {
              playerRef.current.pause()
              setIsPlaying(false)
            } catch (error) {
              console.error('Error pausing Vimeo video:', error)
            }
          } else if (videoType === 'local' && videoRef.current) {
            try {
              videoRef.current.pause()
              setIsPlaying(false)
            } catch (error) {
              console.error('Error pausing local video:', error)
            }
          }
        }
      },
      { threshold: 0.5 }
    )
    
    observer.observe(sectionRef.current)
    return () => {
      observer.disconnect()
    }
  }, [isPlayerReady, videoType])

  const initializePlayer = (iframe: HTMLIFrameElement) => {
    if (typeof window === 'undefined' || !iframe) return;
    
    try {
      if (window.Vimeo && window.Vimeo.Player) {
        const player = new window.Vimeo.Player(iframe)
        playerRef.current = player
        setIsPlayerReady(true)
      } else {
        console.error('Vimeo Player API not loaded')
      }
    } catch (error) {
      console.error('Error initializing Vimeo player:', error)
    }
  }

  const handleLocalVideoPlay = () => {
    setIsPlaying(true)
  }

  const handleLocalVideoPause = () => {
    setIsPlaying(false)
  }

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      {videoType === 'vimeo' && (
        <Script 
          src="https://player.vimeo.com/api/player.js"
          strategy="afterInteractive"
          onLoad={() => {
            console.log('Vimeo Player API loaded')
          }}
          onError={(e) => {
            console.error('Error loading Vimeo Player API:', e)
          }}
        />
      )}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">A Dinner Session Review</h2>
          <p className="mt-4 text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl">
            Hear directly from our community about their experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl bg-black max-w-[500px] mx-auto"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative aspect-[4/3] w-full max-h-[500px]">
              {videoType === 'vimeo' ? (
                /* Vimeo Video */
                <div className="absolute inset-0">
                  <iframe
                    src={`https://player.vimeo.com/video/${videoId}?h=9044b0c09d&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=0&muted=1`}
                    className="absolute inset-0 w-full h-full object-cover"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    title="vlog-susana-with-cdc-with-captions"
                    ref={initializePlayer}
                  ></iframe>
                </div>
              ) : (
                /* Local Video */
                <div className="absolute inset-0">
                  <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    playsInline
                    onPlay={handleLocalVideoPlay}
                    onPause={handleLocalVideoPause}
                    controls
                  >
                    <source src={localVideoSrc} type="video/quicktime" />
                    <source src={localVideoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {/* Device Details */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-black flex items-center justify-center">
                <div className="w-1/4 h-1 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Member Quote */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-lg relative">
            <div className="absolute -top-4 left-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[16px] border-b-white"></div>
            <p className="text-gray-700 italic">&ldquo;{memberQuote}&rdquo;</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-1 w-6 bg-green-600 rounded-full"></div>
              <p className="text-sm font-medium text-green-600">{memberName}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
