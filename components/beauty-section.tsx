"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function BeautySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-[#0a0a0a] relative">
      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : {}}
        className="absolute left-8 top-24"
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <polygon points="15,2 28,9 28,21 15,28 2,21 2,9" stroke="#c9a227" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#c9a227" strokeWidth="1.5" fill="none" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-serif text-[#f5f0e6]">Beauty</h2>
            </div>

            <div className="space-y-4 text-[#f5f0e6]/70 leading-relaxed">
              <p>
                Honey Is Not Only A Delicious Treat, But It Also Has Many Benefits For Your Skin. At Our Honey Online Shop, We Offer A Wide Range Of Beauty Products To Help You Achieve Healthy, Radiant Skin.
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

          {/* Hexagonal Image with skincare product */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div 
              className="relative w-64 h-72 md:w-80 md:h-[360px] overflow-hidden group"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/skincare-kMh7CGVbrPSaJ7oY8kqXoSyuBrqPU0.png"
                alt="Honey skincare product"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div 
                className="absolute inset-0 border-2 border-[#c9a227]/40 group-hover:border-[#c9a227] transition-colors duration-300 pointer-events-none" 
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
