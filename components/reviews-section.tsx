"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

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
    text: 'Best Honey I\'ve Ever Had! The Quality Is Outstanding And The Packaging Is Beautiful. Perfect For Gifting.',
  },
  {
    id: 3,
    name: 'Emily R.',
    avatar: 'E',
    rating: 5,
    text: 'I Use This Honey Every Day In My Tea. It\'s Pure, Natural, And Has Helped With My Seasonal Allergies.',
  },
  {
    id: 4,
    name: 'James K.',
    avatar: 'J',
    rating: 5,
    text: 'The Flavor Profile Is Incredible — Floral Notes With A Warm Finish. Nothing Compares To This Level Of Quality And Craftsmanship.',
  },
  {
    id: 5,
    name: 'Laura B.',
    avatar: 'L',
    rating: 5,
    text: 'I Gifted This To My Whole Family And Everyone Was Blown Away. The Packaging Alone Is Gift-Worthy, And The Honey Is Even Better.',
  },
  {
    id: 6,
    name: 'Daniel W.',
    avatar: 'D',
    rating: 5,
    text: 'Raw, Unfiltered, And Full Of Life. You Can Taste The Difference Immediately. I\'ve Made It A Staple In My Morning Routine.',
  },
  {
    id: 7,
    name: 'Olivia P.',
    avatar: 'O',
    rating: 5,
    text: 'Absolutely Wonderful. Smooth Texture, Gorgeous Color, And The Sweetness Is So Well-Balanced. This Is Honey At Its Finest.',
  },
  {
    id: 8,
    name: 'Nathan C.',
    avatar: 'N',
    rating: 5,
    text: 'Ordered Three Jars And Already Planning My Next Order. This Is Hands Down The Best Artisan Honey I\'ve Tasted In Years.',
  },
  {
    id: 9,
    name: 'Sophie L.',
    avatar: 'S',
    rating: 5,
    text: 'The Quality Speaks For Itself. Straight From The Hive To My Table — You Can Taste The Purity In Every Spoonful.',
  },
]

const REVIEWS_PER_PAGE = 3

export default function ReviewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(0) // -1 left, 1 right

  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE)
  const currentReviews = reviews.slice(
    currentPage * REVIEWS_PER_PAGE,
    currentPage * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE
  )

  const goNext = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1)
      setCurrentPage((p) => p + 1)
    }
  }

  const goPrev = () => {
    if (currentPage > 0) {
      setDirection(-1)
      setCurrentPage((p) => p - 1)
    }
  }

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  }

  return (
    <section ref={ref} className="py-24 bg-[#0a0a0a] relative">
      {/* Background elements */}
      <div className="absolute inset-0 honeycomb-bg opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <polygon
              points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5"
              stroke="#c9a227"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <h2 className="text-3xl md:text-4xl font-serif text-[#f5f0e6]">Reviews</h2>
        </motion.div>

        {/* Carousel wrapper */}
        <div className="relative flex items-center gap-4">

          {/* Left Arrow */}
          <motion.button
            onClick={goPrev}
            disabled={currentPage === 0}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={currentPage > 0 ? { scale: 1.1 } : {}}
            whileTap={currentPage > 0 ? { scale: 0.95 } : {}}
            className="shrink-0 w-10 h-10 flex items-center justify-center border border-[#c9a227]/40 rounded-full transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed hover:enabled:border-[#c9a227] hover:enabled:bg-[#c9a227]/10"
            aria-label="Previous reviews"
          >
            <ChevronLeft size={18} className="text-[#c9a227]" />
          </motion.button>

          {/* Reviews Grid (animated) */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="grid md:grid-cols-3 gap-6"
              >
                {currentReviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="relative"
                  >
                    {/* Hexagonal avatar */}
                    <div className="flex justify-center mb-4">
                      <div
                        className="w-16 h-18 flex items-center justify-center bg-gradient-to-br from-[#c9a227]/20 to-[#9a7b1c]/10 border border-[#c9a227]/40"
                        style={{
                          clipPath:
                            'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        }}
                      >
                        <span className="text-[#c9a227] text-xl font-serif">
                          {review.avatar}
                        </span>
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
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#c9a227] text-[#c9a227]"
                          />
                        ))}
                      </div>

                      <p className="text-[#c9a227] text-sm">{review.name}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <motion.button
            onClick={goNext}
            disabled={currentPage === totalPages - 1}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={currentPage < totalPages - 1 ? { scale: 1.1 } : {}}
            whileTap={currentPage < totalPages - 1 ? { scale: 0.95 } : {}}
            className="shrink-0 w-10 h-10 flex items-center justify-center border border-[#c9a227]/40 rounded-full transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed hover:enabled:border-[#c9a227] hover:enabled:bg-[#c9a227]/10"
            aria-label="Next reviews"
          >
            <ChevronRight size={18} className="text-[#c9a227]" />
          </motion.button>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentPage ? 1 : -1)
                setCurrentPage(i)
              }}
              aria-label={`Go to page ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === currentPage
                  ? 'w-8 bg-[#c9a227]'
                  : 'w-8 bg-[#c9a227]/30 hover:bg-[#c9a227]/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}