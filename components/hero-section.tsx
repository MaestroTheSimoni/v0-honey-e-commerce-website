"use client"

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#c9a227] mb-8 tracking-wide"
          >
            Golden Hive Honey
          </motion.h1>

          {/* Hero Visual with Honeycomb Structure */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-2xl h-[400px] sm:h-[450px] md:h-[500px]"
          >
            {/* SVG Honeycomb Structure */}
            <svg viewBox="0 0 500 450" className="w-full h-full">
              <defs>
                <linearGradient id="honeyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c9a227" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#9a7b1c" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="honeyFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e8c547" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#c9a227" stopOpacity="0.6" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Top left hexagon - Shop */}
              <motion.g
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <polygon
                  points="70,90 120,60 170,90 170,150 120,180 70,150"
                  fill="url(#honeyGradient)"
                  stroke="#c9a227"
                  strokeWidth="1"
                  strokeOpacity="0.5"
                />
                <text x="120" y="125" textAnchor="middle" fill="#c9a227" fontSize="11" fontFamily="serif">Shop</text>
              </motion.g>

              {/* Top right hexagon - Freebies */}
              <motion.g
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <polygon
                  points="330,90 380,60 430,90 430,150 380,180 330,150"
                  fill="url(#honeyGradient)"
                  stroke="#c9a227"
                  strokeWidth="1"
                  strokeOpacity="0.5"
                />
                <text x="380" y="125" textAnchor="middle" fill="#c9a227" fontSize="11" fontFamily="serif">Freebies</text>
              </motion.g>

              {/* Center main hexagon with honey drip visual */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                filter="url(#glow)"
              >
                <polygon
                  points="175,180 250,130 325,180 325,280 250,330 175,280"
                  fill="url(#honeyGradient)"
                  stroke="#c9a227"
                  strokeWidth="2"
                  strokeOpacity="0.7"
                />
                {/* Inner honey drop visualization */}
                <ellipse cx="250" cy="230" rx="40" ry="50" fill="url(#honeyFill)" opacity="0.6" />
                <ellipse cx="250" cy="220" rx="25" ry="30" fill="#e8c547" opacity="0.4" />
              </motion.g>

              {/* Bottom left hexagon */}
              <motion.g
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <polygon
                  points="100,280 150,250 200,280 200,340 150,370 100,340"
                  fill="url(#honeyGradient)"
                  stroke="#c9a227"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                />
              </motion.g>

              {/* Bottom right hexagon */}
              <motion.g
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <polygon
                  points="300,280 350,250 400,280 400,340 350,370 300,340"
                  fill="url(#honeyGradient)"
                  stroke="#c9a227"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                />
              </motion.g>

              {/* Honey drip effect from top */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                d="M250 0 Q250 50 250 80 Q260 100 250 130"
                stroke="url(#honeyFill)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
              />
              <motion.circle
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                cx="250"
                cy="130"
                r="12"
                fill="#e8c547"
              />
            </svg>

            {/* Floating honey jar visual */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.8, delay: 0.5 }
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-40"
            >
              {/* Stylized honey jar */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-20 h-28 bg-gradient-to-b from-[#e8c547]/80 to-[#c9a227]/60 rounded-lg relative overflow-hidden border border-[#c9a227]/50">
                  {/* Jar lid */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1a1a1a] rounded-t-sm border border-[#c9a227]/30" />
                  {/* Honey level */}
                  <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-[#c9a227] to-[#e8c547]/80" />
                  {/* Shine effect */}
                  <div className="absolute top-6 left-2 w-2 h-8 bg-white/20 rounded-full" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
