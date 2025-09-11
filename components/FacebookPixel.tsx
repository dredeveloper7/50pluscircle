'use client'

import Script from 'next/script'
import { useEffect } from 'react'

interface FacebookPixelProps {
  pixelId: string
}

declare global {
  interface Window {
    fbq: any
  }
}

export default function FacebookPixel({ pixelId }: FacebookPixelProps) {
  useEffect(() => {
    // Initialize Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('init', pixelId)
      window.fbq('track', 'PageView')
    }
  }, [pixelId])

  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}

// Utility functions for tracking events
export const trackFacebookEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters)
  }
}

export const trackCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters)
  }
}

// Common event tracking functions
export const trackSignUpClick = (source: string = 'homepage') => {
  trackFacebookEvent('Lead', {
    content_name: 'Sign Up Click',
    content_category: 'User Engagement',
    source: source
  })
}

export const trackSignUpComplete = (method: string = 'email') => {
  trackFacebookEvent('CompleteRegistration', {
    content_name: 'User Registration',
    content_category: 'Conversion',
    registration_method: method
  })
}

export const trackPageView = (pageName: string) => {
  trackFacebookEvent('ViewContent', {
    content_name: pageName,
    content_category: 'Page View'
  })
}
