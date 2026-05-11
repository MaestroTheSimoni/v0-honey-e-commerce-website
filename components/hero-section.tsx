"use client"

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Large honeycomb pattern background */}
      <div className="absolute inset-0">
        <svg 
          className="w-full h-full opacity-20" 
          viewBox="0 0 1200 800" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="honeycomb" x="0" y="0" width="112" height="194" patternUnits="userSpaceOnUse">
              <g fill="none" stroke="#c9a227" strokeWidth="1">
                <polygon points="56,0 112,28 112,84 56,112 0,84 0,28" transform="translate(0,0)" />
                <polygon points="56,0 112,28 112,84 56,112 0,84 0,28" transform="translate(56,82)" />
              </g>
            </pattern>
            <radialGradient id="fade" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="fadeMask">
              <rect width="100%" height="100%" fill="url(#fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#honeycomb)" mask="url(#fadeMask)" />
        </svg>
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />

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
              whileHover={{ scale: 1.05 }}
              className="absolute top-1/3 -left-4 sm:left-0 cursor-pointer"
            >
              <div className="relative">
                <svg width="80" height="92" viewBox="0 0 80 92" className="sm:w-[100px] sm:h-[115px]">
                  <polygon 
                    points="40,0 80,23 80,69 40,92 0,69 0,23" 
                    fill="rgba(201, 162, 39, 0.15)" 
                    stroke="#c9a227" 
                    strokeWidth="1"
                    className="hover:fill-[rgba(201,162,39,0.25)] transition-colors duration-300"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[#c9a227] text-sm sm:text-base font-serif font-semibold">
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
              whileHover={{ scale: 1.05 }}
              className="absolute top-1/4 -right-4 sm:right-0 cursor-pointer"
            >
              <div className="relative">
                <svg width="80" height="92" viewBox="0 0 80 92" className="sm:w-[100px] sm:h-[115px]">
                  <polygon 
                    points="40,0 80,23 80,69 40,92 0,69 0,23" 
                    fill="rgba(201, 162, 39, 0.15)" 
                    stroke="#c9a227" 
                    strokeWidth="1"
                    className="hover:fill-[rgba(201,162,39,0.25)] transition-colors duration-300"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[#c9a227] text-sm sm:text-base font-serif font-semibold">
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
