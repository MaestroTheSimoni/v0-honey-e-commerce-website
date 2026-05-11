"use client"

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Honeycomb background image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bg-Pic-pHwvNnfOyrpzbw4vjMlsqvocDJEb73.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#c9a227] mb-4 tracking-wide italic"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Golden Hive Honey
          </motion.h1>

          {/* Hero Visual with Main Honey Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-2xl"
          >
            {/* Main honeycomb goblet image */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.8, delay: 0.5 }
              }}
              className="relative w-full h-[400px] sm:h-[500px] md:h-[550px]"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/honey-UGkPqvXDJAWygXK4EXB2gg1udH5ibW.png"
                alt="Golden honeycomb goblet with dripping honey and bees"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Shop hexagon button - left side */}
            <motion.a
              href="#shop"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.08 }}
              className="absolute top-1/3 -left-4 sm:left-4 cursor-pointer group"
            >
              <div className="relative">
                <svg width="90" height="104" viewBox="0 0 90 104" className="sm:w-[110px] sm:h-[127px] drop-shadow-[0_0_15px_rgba(201,162,39,0.3)]">
                  <defs>
                    <linearGradient id="hexGradientShop" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c9a227" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#8b6914" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#c9a227" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                  <polygon 
                    points="45,2 88,26 88,78 45,102 2,78 2,26" 
                    fill="rgba(30, 25, 15, 0.85)" 
                    stroke="url(#hexGradientShop)" 
                    strokeWidth="2"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[#c9a227] text-sm sm:text-base font-serif font-bold tracking-wide group-hover:text-[#e8c547] transition-colors duration-300">
                  Shop
                </span>
              </div>
            </motion.a>

            {/* Catalog hexagon button - right side */}
            <motion.a
              href="#products"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.08 }}
              className="absolute top-1/4 -right-4 sm:right-4 cursor-pointer group"
            >
              <div className="relative">
                <svg width="90" height="104" viewBox="0 0 90 104" className="sm:w-[110px] sm:h-[127px] drop-shadow-[0_0_15px_rgba(201,162,39,0.3)]">
                  <defs>
                    <linearGradient id="hexGradientCatalog" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c9a227" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#8b6914" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#c9a227" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                  <polygon 
                    points="45,2 88,26 88,78 45,102 2,78 2,26" 
                    fill="rgba(30, 25, 15, 0.85)" 
                    stroke="url(#hexGradientCatalog)" 
                    strokeWidth="2"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[#c9a227] text-sm sm:text-base font-serif font-bold tracking-wide group-hover:text-[#e8c547] transition-colors duration-300">
                  Catalog
                </span>
              </div>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator - circular with arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#c9a227]/50 text-[#c9a227] hover:border-[#c9a227] transition-colors duration-300 cursor-pointer"
            >
              <ArrowDown size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
