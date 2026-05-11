"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-24 bg-[#0a0a0a] relative">
      {/* Decorative bee icon */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="absolute left-8 top-24"
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M15 5L25 15L15 25L5 15L15 5Z" stroke="#c9a227" strokeWidth="1" fill="none" />
          <circle cx="15" cy="15" r="3" fill="#c9a227" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#c9a227" strokeWidth="1.5" fill="none" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-serif text-[#f5f0e6]">About Us</h2>
            </div>

            <div className="space-y-4 text-[#f5f0e6]/70 leading-relaxed">
              <p>
                At Golden Hive Honey, We Are Passionate About Providing Our Customers With The Finest Quality Honey Products Straight From Our Beekeeping Farms. Our Journey Began Years Ago When Our Founders, A Group...
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 px-8 py-3 border border-[#c9a227]/50 text-[#c9a227] text-sm tracking-wide hover:border-[#c9a227] hover:bg-[#c9a227]/10 transition-all duration-300"
            >
              More
            </motion.button>
          </motion.div>

          {/* Hexagonal Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[400px]"
          >
            <div className="absolute top-0 right-0 w-40 h-44 overflow-hidden" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
              <div className="w-full h-full bg-gradient-to-br from-[#c9a227]/20 to-[#9a7b1c]/10 border border-[#c9a227]/30" />
            </div>
            <div className="absolute top-20 right-32 w-32 h-36 overflow-hidden" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
              <div className="w-full h-full bg-gradient-to-br from-[#c9a227]/30 to-[#9a7b1c]/20 border border-[#c9a227]/40" />
            </div>
            <div className="absolute bottom-10 right-10 w-36 h-40 overflow-hidden" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
              <div className="w-full h-full bg-gradient-to-br from-[#c9a227]/25 to-[#9a7b1c]/15 border border-[#c9a227]/35" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
