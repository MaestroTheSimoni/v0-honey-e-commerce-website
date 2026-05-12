"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop',
    alt: 'Honey jar with golden honey'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop',
    alt: 'Fresh honeycomb'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?w=400&h=400&fit=crop',
    alt: 'Beekeeper working'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1601063476271-2207a31bb5e3?w=400&h=400&fit=crop',
    alt: 'Honey dripping'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1607471926456-3dc98a0fb1b4?w=400&h=400&fit=crop',
    alt: 'Beehive closeup'
  },
]

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="gallery" ref={ref} className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background honeycomb */}
      <div className="absolute inset-0 honeycomb-bg opacity-20" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#c9a227" strokeWidth="1.5" fill="none" />
          </svg>
          <h2 className="text-3xl md:text-4xl font-serif text-[#f5f0e6]">Gallery</h2>
        </motion.div>

        {/* Hexagonal Gallery Grid */}
        <div className="relative">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {galleryImages.slice(0, 3).map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative w-28 h-32 sm:w-36 sm:h-40 md:w-44 md:h-48 overflow-hidden group cursor-pointer"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/60 group-hover:opacity-0 transition-opacity duration-300" />
                <div
                  className="absolute inset-0 border-2 border-[#c9a227]/30 group-hover:border-[#c9a227] transition-colors duration-300"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                />
              </motion.div>
            ))}
          </div>

          {/* Row 2 - offset */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 -mt-4 md:-mt-6">
            {galleryImages.slice(3, 5).map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative w-28 h-32 sm:w-36 sm:h-40 md:w-44 md:h-48 overflow-hidden group cursor-pointer"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/60 group-hover:opacity-0 transition-opacity duration-300" />
                <div
                  className="absolute inset-0 border-2 border-[#c9a227]/30 group-hover:border-[#c9a227] transition-colors duration-300"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
