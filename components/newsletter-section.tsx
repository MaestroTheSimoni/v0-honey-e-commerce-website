"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <section ref={ref} className="py-16 bg-[#0a0a0a] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h3 className="text-lg md:text-xl font-serif text-[#f5f0e6] mb-8">
            Subscribe To Our Newsletter, Discounts And Promotions
          </h3>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="flex-1 px-6 py-3 bg-transparent border border-[#c9a227]/30 text-[#f5f0e6] placeholder-[#f5f0e6]/40 text-sm focus:border-[#c9a227] focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-8 py-3 bg-[#1a1a1a] border border-[#c9a227]/30 text-[#f5f0e6] text-sm tracking-wide hover:border-[#c9a227] hover:bg-[#c9a227]/10 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
