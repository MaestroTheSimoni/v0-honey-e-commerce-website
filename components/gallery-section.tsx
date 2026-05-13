"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// ============================================
// GALLERY IMAGES - Easy to manage!
// To add: Add a new object with id, src, and alt
// To remove: Delete the object from the array
// To change: Update the src URL
// ============================================
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=600&fit=crop",
    alt: "Beekeeper inspecting honeycomb frame",
  },
  {
    id: 2,
    src: "/rettore.png",
    alt: "Golden honey jar with dipper",
  },
  {
    id: 3,
    src: "/rettore2.png",
    alt: "Beekeeper working with hive",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=600&fit=crop",
    alt: "Sunflowers in golden light",
  },
  {
    id: 5,
    src: "/rettore.png",
    alt: "Honey dripping from spoon",
  },
  {
    id: 6,
    src: "/rettore2.png",
    alt: "Fresh honeycomb close-up",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1611070271242-e8e51acc128a?w=600&h=600&fit=crop",
    alt: "Bee on flower collecting pollen",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1571689230986-0c57a1f01fa5?w=600&h=600&fit=crop",
    alt: "Natural beehive in nature",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1563281746-48bb478e9b2d?w=600&h=600&fit=crop",
    alt: "Honey harvesting process",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1602523069888-af6b1e8f1c94?w=600&h=600&fit=crop",
    alt: "Beekeeping equipment",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1608449172276-43d0bc3d33e7?w=600&h=600&fit=crop",
    alt: "Honey in glass jar",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1555211652-5c6222f971c2?w=600&h=600&fit=crop",
    alt: "Bees working on honeycomb",
  },
]

const IMAGES_PER_PAGE = 6

export default function GallerySection() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE)

  const currentImages = galleryImages.slice(
    currentPage * IMAGES_PER_PAGE,
    (currentPage + 1) * IMAGES_PER_PAGE
  )

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,5 55,20 55,50 30,65 5,50 5,20' fill='none' stroke='%23c9a227' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#c9a227" strokeWidth="1.5" fill="none" />
          </svg>
          <h2 className="text-3xl md:text-4xl font-serif text-[#f5f0e6]">Gallery</h2>
        </div>

        {/* Hexagonal Gallery Grid - Mobile: 2x3, Desktop: 2x2 center with side hexagons */}

        {/* Mobile Layout - 2 columns, 3 rows */}
        <div className="grid grid-cols-2 gap-6 md:hidden justify-items-center mx-auto w-fit">
          {currentImages[0] && <HexagonImage key={currentImages[0].id} image={currentImages[0]} />}
          {currentImages[1] && <HexagonImage key={currentImages[1].id} image={currentImages[1]} />}
          {currentImages[2] && <HexagonImage key={currentImages[2].id} image={currentImages[2]} />}
          {currentImages[3] && <HexagonImage key={currentImages[3].id} image={currentImages[3]} />}
          {currentImages[4] && <HexagonImage key={currentImages[4].id} image={currentImages[4]} />}
          {currentImages[5] && <HexagonImage key={currentImages[5].id} image={currentImages[5]} />}
        </div>

        {/* Desktop Layout - 2x2 center with side hexagons */}
        <div className="hidden md:flex relative items-center justify-center gap-10 lg:gap-14">
          {/* Far Left - centered vertically */}
          <div className="flex items-center">
            {currentImages[4] && <HexagonImage key={currentImages[4].id} image={currentImages[4]} />}
          </div>

          {/* Center 2x2 Grid */}
          <div className="grid grid-cols-2 gap-12 lg:gap-16">
            {/* Top Left */}
            {currentImages[0] && <HexagonImage key={currentImages[0].id} image={currentImages[0]} />}
            {/* Top Right */}
            {currentImages[1] && <HexagonImage key={currentImages[1].id} image={currentImages[1]} />}
            {/* Bottom Left */}
            {currentImages[2] && <HexagonImage key={currentImages[2].id} image={currentImages[2]} />}
            {/* Bottom Right */}
            {currentImages[3] && <HexagonImage key={currentImages[3].id} image={currentImages[3]} />}
          </div>

          {/* Far Right - centered vertically */}
          <div className="flex items-center">
            {currentImages[5] && <HexagonImage key={currentImages[5].id} image={currentImages[5]} />}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={goToPrevious}
            className="p-2 text-[#c9a227] hover:text-[#f5f0e6] transition-colors duration-300 hover:bg-[#c9a227]/10 rounded-full"
            aria-label="Previous images"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Page Indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentPage
                  ? "bg-[#c9a227] w-6"
                  : "bg-[#c9a227]/30 hover:bg-[#c9a227]/50"
                  }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-2 text-[#c9a227] hover:text-[#f5f0e6] transition-colors duration-300 hover:bg-[#c9a227]/10 rounded-full"
            aria-label="Next images"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  )
}

function HexagonImage({
  image,
}: {
  image: { id: number; src: string; alt: string }
}) {
  return (
    <div
      className="relative w-32 h-36 sm:w-40 sm:h-44 md:w-48 md:h-52 lg:w-56 lg:h-64 overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10"
      style={{
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1024px) 224px, 256px"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/40 group-hover:opacity-0 transition-opacity duration-300" />
      {/* Border */}
      <div
        className="absolute inset-0 border-2 border-[#c9a227]/40 group-hover:border-[#c9a227] transition-colors duration-300 pointer-events-none"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />
    </div>
  )
}
