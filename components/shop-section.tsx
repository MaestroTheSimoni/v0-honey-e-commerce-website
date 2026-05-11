"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

const shopItems = [
  {
    id: 1,
    name: 'Flavored Elboesom Honey',
    description: 'Flavor - Flavored Honey Has A Delicate, Sweet Taste With Subtly Floral Notes. It Has A Smooth And Creamy Texture That Melts In Your Mouth.',
    details: 'Health Benefits: - Elboesom Honey Is Rich In Antioxidants, Vitamins, And Minerals. It Has Antibacterial And Anti-Inflammatory Properties, Making It A Natural Remedy For Sore Throats, Coughs, And Cuts.',
    origin: 'Forest Areas Of India',
    price: 'Rs. 500/-',
    weight: '500ml - Bottle',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic-jar-OEFjjrehSd3m4Su81yIyoywuGk5j4X.png'
  },
  {
    id: 2,
    name: 'Premium Jarrah Honey',
    description: 'A rich, dark honey collected from pristine Australian forests. Bold flavor with earthy undertones and exceptional purity.',
    details: 'Health Benefits: - Rich in enzymes and natural minerals. Known for its high antimicrobial activity. Perfect for immune support and daily wellness.',
    origin: 'Australian Forests',
    price: 'Rs. 650/-',
    weight: '500ml - Bottle',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/honey-jar-2naKDpnQ2zzTy7iIh25Mp0AiOdgfq4.png'
  },
]

export default function ShopSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)

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
          <h2 className="text-3xl md:text-4xl font-serif text-[#f5f0e6]">Shop</h2>
        </motion.div>

        {/* Shop Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#111111] border border-[#c9a227]/20 rounded-sm overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-sm flex items-center justify-center p-8">
                <div className="relative w-full h-full">
                  <Image
                    src={shopItems[currentSlide].image}
                    alt={shopItems[currentSlide].name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-sm text-[#c9a227] bg-[#0a0a0a]/80 px-3 py-1 rounded">
                {shopItems[currentSlide].name}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-[#c9a227]/60 tracking-widest uppercase">Flavor</span>
                  <p className="text-[#f5f0e6]/80 text-sm mt-1 leading-relaxed">
                    {shopItems[currentSlide].description}
                  </p>
                </div>

                <div>
                  <p className="text-[#f5f0e6]/60 text-xs leading-relaxed">
                    {shopItems[currentSlide].details}
                  </p>
                </div>

                <div className="flex items-center gap-8 pt-4 border-t border-[#c9a227]/10">
                  <div>
                    <span className="text-xs text-[#c9a227]/60">Origin:</span>
                    <p className="text-[#f5f0e6] text-sm">{shopItems[currentSlide].origin}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#c9a227]/60">Weight:</span>
                    <p className="text-[#f5f0e6] text-sm">{shopItems[currentSlide].weight}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div>
                    <span className="text-xs text-[#c9a227]/60">Price:</span>
                    <p className="text-[#c9a227] text-2xl font-medium">{shopItems[currentSlide].price}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-[#c9a227] text-[#0a0a0a] text-sm tracking-wide font-medium hover:bg-[#e8c547] transition-all duration-300"
                  >
                    Add To Cart
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {shopItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#c9a227]' 
                  : 'bg-[#c9a227]/30 hover:bg-[#c9a227]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
