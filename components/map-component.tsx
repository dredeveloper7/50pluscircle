"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useState } from "react"

// Fix default icon issue with Leaflet in React
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
})

const locations = [
  { id: 1, name: "London", lat: 51.5074, lng: -0.1278 },
  { id: 2, name: "Manchester", lat: 53.4808, lng: -2.2426 },
  { id: 3, name: "Birmingham", lat: 52.4862, lng: -1.8904 },
  { id: 4, name: "Liverpool", lat: 53.4084, lng: -2.9916 },
  { id: 5, name: "Leeds", lat: 53.8008, lng: -1.5491 },
  { id: 6, name: "Bristol", lat: 51.4545, lng: -2.5879 },
]

export default function MapComponent() {
  const [activeLocation, setActiveLocation] = useState<number | null>(null)

  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
      <MapContainer
        center={[53.5, -2.5]}
        zoom={6}
        style={{ height: "400px", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            eventHandlers={{
              mouseover: () => setActiveLocation(location.id),
              mouseout: () => setActiveLocation(null),
            }}
          >
            {activeLocation === location.id && (
              <Popup>{location.name}</Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md text-xs">
        <p className="font-medium">{locations.length} Active Locations</p>
        <p className="text-gray-500">More coming soon</p>
      </div>
    </div>
  )
} 