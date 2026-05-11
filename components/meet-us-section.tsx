"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

export default function MeetUsSection() {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#c9a227" strokeWidth="1.5" fill="none" />
          </svg>
          <h2 className="text-3xl md:text-4xl font-serif text-[#f5f0e6]">Meet Us</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl md:text-3xl font-serif text-[#c9a227] mb-2">
              The Art Of Beekeeping
            </h3>
            <p className="text-lg text-[#f5f0e6]/60 mb-6">The Art Of Beekeeping</p>

            <div className="space-y-4 text-[#f5f0e6]/70 leading-relaxed">
              <p>
                We Invite You To Discover A Virtual Tour Of Our Beehive Farm To See Firsthand How We Produce Our Premium Honey.
              </p>
              <p>
                Our Video Demonstrates The Daily Work Of Our Beekeepers And How They Care For Our Bees. You&apos;ll See How We Carefully Harvest The Honey, Ensuring That Our Bees Are Not Harmed And That Our Honey Is Of The Highest Quality.
              </p>
            </div>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-sm overflow-hidden border border-[#c9a227]/20">
              {/* Placeholder background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-amber-700/10" />
              
              {/* Play button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/play-EyZEe1drbsCy48oQJYXXpdnWovNmVx.png"
                    alt="Play video"
                    width={80}
                    height={80}
                    className="opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.button>

              {/* Decorative elements */}
              <div className="absolute bottom-4 left-4 text-[#c9a227]/40 text-xs tracking-widest">
                WATCH OUR STORY
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
