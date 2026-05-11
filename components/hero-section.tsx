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
          src="/Hero.png"
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
