"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const products = [
  { name: 'BEESWAX', icon: '🐝' },
  { name: 'RAW HONEY', icon: '🍯' },
  { name: 'HONEYCOMB', icon: '⬡' },
  { name: 'PROPOLIS', icon: '🌿' },
  { name: 'ROYAL JELLY', icon: '👑' },
]

export default function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="products" ref={ref} className="py-24 bg-[#0a0a0a] relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#c9a227" strokeWidth="1.5" fill="none" />
          </svg>
          <h2 className="text-3xl md:text-4xl font-serif text-[#f5f0e6]">Products</h2>
        </motion.div>

        {/* Hexagonal Product Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer"
            >
              {/* Hexagon shape */}
              <div
                className="w-24 h-28 md:w-28 md:h-32 flex flex-col items-center justify-center bg-[#1a1a1a] border border-[#c9a227]/30 group-hover:border-[#c9a227] transition-all duration-300"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <span className="text-2xl mb-2 opacity-60 group-hover:opacity-100 transition-opacity">{product.icon}</span>
                <span className="text-[10px] md:text-xs text-[#c9a227] tracking-wider text-center px-2">{product.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Product Card with actual honey jar image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#c9a227]/20 p-6 max-w-xs">
            <div className="absolute top-4 left-4 z-10">
              <span className="text-xs text-[#c9a227] tracking-widest">BEESWAX</span>
            </div>
            <div className="h-40 flex items-center justify-center relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic-jar-OEFjjrehSd3m4Su81yIyoywuGk5j4X.png"
                alt="Premium Honey Jar"
                width={120}
                height={160}
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-[#f5f0e6]/70">Premium Quality</p>
              <p className="text-xs text-[#c9a227]/60 mt-1">100% Natural</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
