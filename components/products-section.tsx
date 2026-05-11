"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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

        {/* Featured Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#c9a227]/20 p-6 max-w-xs">
            <div className="absolute top-4 left-4">
              <span className="text-xs text-[#c9a227] tracking-widest">BEESWAX</span>
            </div>
            <div className="h-32 flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#c9a227]/20 to-[#9a7b1c]/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">🍯</span>
              </div>
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
