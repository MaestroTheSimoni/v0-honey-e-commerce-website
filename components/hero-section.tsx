"use client"

import { motion, useAnimation } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'

export default function HeroSection() {
  const beeControls = useAnimation()

  useEffect(() => {
    const w = window.innerWidth
    const h = window.innerHeight

    // Dock position: fixed top-left, to the left of the navbar content
    const dockLeft = 140
    const dockTop = 20

    // Start position: center of screen, expressed as offset from dock point
    const startX = w / 2 - dockLeft
    const startY = h / 2 - dockTop

    const run = async () => {
      // Snap to start position before revealing
      beeControls.set({ x: startX, y: startY, rotate: 0, opacity: 0 })

      // Phase 1: appear and fly around the screen
      await beeControls.start({
        opacity: 1,
        x: [startX, startX + 220, startX - 180, startX + 100, startX - 240, startX + 60],
        y: [startY, startY - 180, startY + 120, startY - 280, startY + 60, startY - 120],
        rotate: [0, 18, -12, 22, -8, 4],
        transition: {
          duration: 2.2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        },
      })

      // Phase 2: swoop into navbar dock position
      await beeControls.start({
        x: 0,
        y: 0,
        rotate: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      })
    }

    run()
  }, [beeControls])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Bee — flies in on load, docks to the left of the navbar */}
      <motion.div
        animate={beeControls}
        initial={{ opacity: 0 }}
        className="fixed z-50 pointer-events-none"
        style={{ top: 20, left: 140, width: 52, height: 52 }}
      >
        <Image
          src="/bee.png"
          alt="bee"
          width={52}
          height={52}
          className="object-contain drop-shadow-[0_0_6px_rgba(201,162,39,0.5)]"
        />
      </motion.div>

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