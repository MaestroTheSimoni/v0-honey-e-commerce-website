"use client"

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background honeycomb pattern */}
      <div className="absolute inset-0 honeycomb-bg opacity-30" />
      
      {/* Decorative hexagon elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-32 left-20 w-24 h-28 border border-[#c9a227]/30"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-40 right-32 w-32 h-36 border border-[#c9a227]/20"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.9 }}
        className="absolute top-60 right-10 w-16 h-18 border border-[#c9a227]/20"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#c9a227] mb-4 tracking-wide"
          >
            Golden Hive Honey
          </motion.h1>

          {/* Hero Visual with Main Honey Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-xl"
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/honey-ncUtv5iLKtDOCOj1oimxD6Rdvrp2wH.jpg"
                alt="Golden honeycomb goblet with dripping honey and bees"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Shop hexagon button - top left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-16 left-0 sm:left-8"
            >
              <div 
                className="w-20 h-24 sm:w-24 sm:h-28 flex items-center justify-center border border-[#c9a227]/50 bg-[#c9a227]/10 hover:bg-[#c9a227]/20 cursor-pointer transition-colors duration-300"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <span className="text-[#c9a227] text-sm font-serif">Shop</span>
              </div>
            </motion.div>

            {/* Freebies hexagon button - top right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute top-8 right-0 sm:right-8"
            >
              <div 
                className="w-20 h-24 sm:w-24 sm:h-28 flex items-center justify-center border border-[#c9a227]/50 bg-[#c9a227]/10 hover:bg-[#c9a227]/20 cursor-pointer transition-colors duration-300"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <span className="text-[#c9a227] text-sm font-serif">Freebies</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-4"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-[#c9a227]/60"
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
