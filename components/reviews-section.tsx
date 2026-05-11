"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    avatar: 'S',
    rating: 5,
    text: 'Absolutely Delicious! The Golden Hive Honey Has Such A Rich, Natural Taste. You Can Really Tell The Difference From Store-Bought Honey.',
  },
  {
    id: 2,
    name: 'Michael T.',
    avatar: 'M',
    rating: 5,
    text: 'Best Honey I&apos;ve Ever Had! The Quality Is Outstanding And The Packaging Is Beautiful. Perfect For Gifting.',
  },
  {
    id: 3,
    name: 'Emily R.',
    avatar: 'E',
    rating: 5,
    text: 'I Use This Honey Every Day In My Tea. It&apos;s Pure, Natural, And Has Helped With My Seasonal Allergies.',
  },
]

export default function ReviewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-[#0a0a0a] relative">
      {/* Background elements */}
      <div className="absolute inset-0 honeycomb-bg opacity-10" />
      
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#c9a227" strokeWidth="1.5" fill="none" />
          </svg>
          <h2 className="text-3xl md:text-4xl font-serif text-[#f5f0e6]">Reviews</h2>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              {/* Hexagonal avatar */}
              <div className="flex justify-center mb-4">
                <div 
                  className="w-16 h-18 flex items-center justify-center bg-gradient-to-br from-[#c9a227]/20 to-[#9a7b1c]/10 border border-[#c9a227]/40"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <span className="text-[#c9a227] text-xl font-serif">{review.avatar}</span>
                </div>
              </div>

              {/* Review content */}
              <div className="text-center">
                <p className="text-[#f5f0e6]/70 text-sm leading-relaxed mb-4 italic">
                  &quot;{review.text}&quot;
                </p>
                
                {/* Star rating */}
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#c9a227] text-[#c9a227]" />
                  ))}
                </div>
                
                <p className="text-[#c9a227] text-sm">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-12">
          <div className="w-8 h-1 bg-[#c9a227] rounded-full" />
          <div className="w-8 h-1 bg-[#c9a227]/30 rounded-full" />
          <div className="w-8 h-1 bg-[#c9a227]/30 rounded-full" />
        </div>
      </div>
    </section>
  )
}
