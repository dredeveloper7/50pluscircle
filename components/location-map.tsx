"use client"

import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(
  () => import('./map-component'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Loading map...</p>
      </div>
    ),
  }
)

export default function LocationMap() {
  return <MapWithNoSSR />
}
