"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface ShopItem {
  id: number
  name: string
  flavor: string
  healthBenefits: string
  color: string
  region: string
  sizes: { label: string; icon: string; price: number; priceDisplay: string }[]
  weight: string
  image: string
  stripeProductId: string
  stripePriceId: string
  badge?: string
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
const shopItems: ShopItem[] = [
  {
    id: 1,
    name: 'Fireweed Blossom Honey',
    flavor:
      'Fireweed Honey Has A Delicate, Sweet Flavor With Subtle Floral Notes. It Has A Smooth And Creamy Texture That Melts In Your Mouth.',
    healthBenefits:
      'Fireweed Honey Is Rich In Antioxidants, Vitamins, And Minerals. It Has Antibacterial And Anti-Inflammatory Properties, Making It A Natural Remedy For Sore Throats, Coughs, And Colds.',
    color: 'Amber',
    region: 'Forest Areas Of India',
    sizes: [
      { label: '250ml', icon: '/small-jar (1).png', price: 120, priceDisplay: '$120' },
      { label: '500ml', icon: '/middle-jar.png', price: 200, priceDisplay: '$200' },
      { label: '1L', icon: '/big-jar.png', price: 350, priceDisplay: '$350' },
    ],
    weight: '500ml - Bottle',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic-jar-OEFjjrehSd3m4Su81yIyoywuGk5j4X.png',
    stripeProductId: 'prod_XXXXXXXXXXXXXXX',
    stripePriceId: 'price_XXXXXXXXXXXXXXX',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Royal Manuka Honey',
    flavor:
      'Manuka Honey Carries An Earthy, Slightly Bitter Richness With Hints Of Caramel. Thick And Velvety With An Unmistakable Depth.',
    healthBenefits:
      'Celebrated For Its Exceptional UMF Rating, Manuka Supports Gut Health, Wound Healing, And Immune Defense. One Of Nature\'s Most Potent Superfoods.',
    color: 'Dark Amber',
    region: 'New Zealand',
    sizes: [
      { label: '250ml', icon: '/small-jar (1).png', price: 180, priceDisplay: '$180' },
      { label: '500ml', icon: '/middle-jar.png', price: 350, priceDisplay: '$350' },
      { label: '1L', icon: '/big-jar.png', price: 620, priceDisplay: '$620' },
    ],
    weight: '500ml - Bottle',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/honey-jar-2naKDpnQ2zzTy7iIh25Mp0AiOdgfq4.png',
    stripeProductId: 'prod_XXXXXXXXXXXXXXX',
    stripePriceId: 'price_XXXXXXXXXXXXXXX',
    badge: 'Premium',
  },
  {
    id: 3,
    name: 'Wild Acacia Honey',
    flavor:
      'Light And Translucent With A Mild, Clean Sweetness And Delicate Vanilla Undertones. The Purest Expression Of Wildflower Nectar.',
    healthBenefits:
      'High In Fructose, Acacia Honey Stays Liquid Longer And Is Gentle On Blood Sugar. Excellent For Digestion And As A Natural Energy Booster.',
    color: 'Pale Gold',
    region: 'Romanian Carpathians',
    sizes: [
      { label: '250ml', icon: '/small-jar (1).png', price: 150, priceDisplay: '$150' },
      { label: '500ml', icon: '/middle-jar.png', price: 280, priceDisplay: '$280' },
      { label: '1L', icon: '/big-jar.png', price: 500, priceDisplay: '$500' },
    ],
    weight: '500ml - Bottle',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pic-jar-OEFjjrehSd3m4Su81yIyoywuGk5j4X.png',
    stripeProductId: 'prod_XXXXXXXXXXXXXXX',
    stripePriceId: 'price_XXXXXXXXXXXXXXX',
  },
  {
    id: 4,
    name: 'Black Forest Honey',
    flavor:
      'Bold And Complex — A Symphony Of Malt, Caramel, And Woodland Herbs. Dense And Luxurious With A Long, Satisfying Finish.',
    healthBenefits:
      'Rich In Oligosaccharides And Minerals, Forest Honey Supports Gut Flora And Provides Sustained Energy. A Powerhouse Of Trace Elements.',
    color: 'Deep Mahogany',
    region: 'Black Forest, Germany',
    sizes: [
      { label: '250ml', icon: '/small-jar (1).png', price: 170, priceDisplay: '$170' },
      { label: '500ml', icon: '/middle-jar.png', price: 320, priceDisplay: '$320' },
      { label: '1L', icon: '/big-jar.png', price: 580, priceDisplay: '$580' },
    ],
    weight: '500ml - Bottle',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/honey-jar-2naKDpnQ2zzTy7iIh25Mp0AiOdgfq4.png',
    stripeProductId: 'prod_XXXXXXXXXXXXXXX',
    stripePriceId: 'price_XXXXXXXXXXXXXXX',
    badge: 'New',
  },
]

// ─── STRIPE CHECKOUT HELPER ───────────────────────────────────────────────────
/**
 * Call your API route /api/checkout which creates a Stripe Checkout Session.
 * The API route (pages/api/checkout.ts or app/api/checkout/route.ts) should:
 *   1. Import stripe from 'stripe'
 *   2. Create session: stripe.checkout.sessions.create({ line_items, mode:'payment', ... })
 *   3. Return { url: session.url }
 * Then redirect the browser to that URL.
 */
async function handleStripeCheckout(item: ShopItem, selectedSize: string) {
  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        priceId: item.stripePriceId,
        productId: item.stripeProductId,
        name: item.name,
        size: selectedSize,
        quantity: 1,
      }),
    })
    const { url } = await res.json()
    if (url) window.location.href = url
  } catch (err) {
    console.error('Stripe checkout error:', err)
  }
}

// ─── HEX DOT ─────────────────────────────────────────────────────────────────
function HexDot({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} aria-label="Select product" className="group p-1">
      <svg width="18" height="20" viewBox="0 0 18 20">
        <polygon
          points="9,1 17,5.5 17,14.5 9,19 1,14.5 1,5.5"
          fill={active ? '#c9a227' : 'none'}
          stroke="#c9a227"
          strokeWidth={active ? '0' : '1.2'}
          className="transition-all duration-300"
          style={{ opacity: active ? 1 : 0.35 }}
        />
      </svg>
    </button>
  )
}

// ─── SIZE BUTTON ─────────────────────────────────────────────────────────────
function SizeButton({
  size,
  active,
  onClick,
}: {
  size: { label: string; icon: string; price: number; priceDisplay: string }
  active: boolean
  onClick: () => void
}) {
  const isImageUrl = size.icon.startsWith('/')

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 px-3 py-2 rounded border transition-all duration-300 ${active
        ? 'border-[#c9a227] bg-[#c9a227]/10 text-[#c9a227]'
        : 'border-[#c9a227]/20 text-[#f5f0e6]/40 hover:border-[#c9a227]/50 hover:text-[#f5f0e6]/70'
        }`}
    >
      {isImageUrl ? (
        <div className="relative w-5 h-5">
          <Image src={size.icon} alt={size.label} fill className="object-contain" />
        </div>
      ) : (
        <span className="text-xl">{size.icon}</span>
      )}
      <span className="text-[10px] tracking-wider">{size.label}</span>
    </button>
  )
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ShopSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [current, setCurrent] = useState(0)
  const [selectedSize, setSelectedSize] = useState(0)
  const [loading, setLoading] = useState(false)
  const [added, setAdded] = useState(false)
  const total = shopItems.length

  // Reset size selection when slide changes
  useEffect(() => { setSelectedSize(0); setAdded(false) }, [current])

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const item = shopItems[current]

  const onAddToCart = async () => {
    setLoading(true)
    await handleStripeCheckout(item, item.sizes[selectedSize].label)
    setLoading(false)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <section
      ref={ref}
      id="shop"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a227]/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-14"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#f5f0e6] tracking-wide">Shop</h2>
            <div className="h-px w-64 bg-gradient-to-r from-[#c9a227] to-transparent mt-2" />
          </div>
        </motion.div>

        {/* ── Slider wrapper ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main card */}
          <div className="bg-[#111111] border border-[#c9a227]/20 rounded-sm overflow-hidden relative z-10">

            {/* Badge */}
            <AnimatePresence mode="wait">
              {item.badge && (
                <motion.div
                  key={item.badge}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-4 right-4 z-20 bg-[#c9a227] text-[#0a0a0a] text-[10px] tracking-[0.15em] uppercase font-semibold px-3 py-1"
                >
                  {item.badge}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid md:grid-cols-2 gap-0">

              {/* ── Left: Product Image ── */}
              <div className="relative bg-gradient-to-br from-[#161616] to-[#0d0d0d] p-10 flex flex-col items-center justify-center min-h-[440px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 0.92, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.92, x: 20 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full max-w-[280px] aspect-square"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Product name tag */}
                <div className="mt-6 text-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={item.name}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-[#c9a227] text-sm tracking-wide font-medium"
                    >
                      {item.name}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Arrow nav */}
                <div className="absolute inset-y-0 left-3 flex items-center">
                  <button
                    onClick={prev}
                    aria-label="Previous product"
                    className="w-8 h-8 flex items-center justify-center text-[#c9a227]/40 hover:text-[#c9a227] transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
                <div className="absolute inset-y-0 right-3 flex items-center">
                  <button
                    onClick={next}
                    aria-label="Next product"
                    className="w-8 h-8 flex items-center justify-center text-[#c9a227]/40 hover:text-[#c9a227] transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* ── Right: Product Details ── */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current + '-details'}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 md:p-10 flex flex-col justify-center gap-5 border-l border-[#c9a227]/10"
                >

                  {/* Flavor */}
                  <div>
                    <p className="text-sm text-[#f5f0e6]/80 leading-relaxed">
                      <span className="text-[#c9a227] font-semibold">Flavor : </span>
                      {item.flavor}
                    </p>
                  </div>

                  {/* Health Benefits */}
                  <div>
                    <p className="text-sm text-[#f5f0e6]/60 leading-relaxed">
                      <span className="text-[#c9a227] font-semibold">Health Benefits : </span>
                      {item.healthBenefits}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#c9a227]/10" />

                  {/* Size selector */}
                  <div>
                    <span className="text-xs text-[#c9a227]/60 tracking-widest uppercase block mb-3">Size :</span>
                    <div className="flex items-center gap-3">
                      {item.sizes.map((s, i) => (
                        <SizeButton
                          key={s.label}
                          size={s}
                          active={selectedSize === i}
                          onClick={() => setSelectedSize(i)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Color + Region */}
                  <div className="flex items-start gap-6">
                    <div>
                      <span className="text-xs text-[#c9a227]/60 tracking-widest uppercase">Color :</span>
                      <p className="text-[#f5f0e6] text-sm mt-0.5">{item.color}</p>
                    </div>
                    <div>
                      <span className="text-xs text-[#c9a227]/60 tracking-widest uppercase">Region :</span>
                      <p className="text-[#f5f0e6] text-sm mt-0.5">{item.region}</p>
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <span className="text-xs text-[#c9a227]/60 tracking-widest uppercase block">Price :</span>
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={item.sizes[selectedSize].priceDisplay}
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-[#c9a227] text-3xl font-medium tracking-tight mt-0.5"
                        >
                          {item.sizes[selectedSize].priceDisplay}
                        </motion.p>
                      </AnimatePresence>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={onAddToCart}
                      disabled={loading}
                      className={`px-8 py-3 text-sm tracking-widest uppercase font-semibold transition-all duration-300 relative overflow-hidden
                        ${added
                          ? 'bg-green-700 text-white'
                          : 'bg-[#c9a227] text-[#0a0a0a] hover:bg-[#e8c547]'
                        }`}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeLinecap="round" />
                          </svg>
                          Processing...
                        </span>
                      ) : added ? (
                        '✓ Added!'
                      ) : (
                        'Add To Cart'
                      )}
                    </motion.button>
                  </div>

                  {/* Secure payment note */}
                  <p className="text-[10px] text-[#f5f0e6]/25 tracking-wider flex items-center gap-1.5 pt-1">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                      <path d="M5 1L9 2.5V6C9 8.5 7 10.5 5 11C3 10.5 1 8.5 1 6V2.5L5 1Z"
                        stroke="currentColor" strokeWidth="1" fill="none" />
                    </svg>
                    Secure checkout powered by Stripe
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* ── Hex Dots ── */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {shopItems.map((_, i) => (
            <HexDot key={i} active={i === current} onClick={() => setCurrent(i)} />
          ))}
        </div>

        {/* ── Product quick-nav strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8"
        >
          {shopItems.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setCurrent(i)}
              className={`flex items-center gap-3 p-3 border rounded-sm text-left transition-all duration-300 ${i === current
                ? 'border-[#c9a227]/50 bg-[#c9a227]/5'
                : 'border-[#c9a227]/10 bg-[#111111] hover:border-[#c9a227]/30'
                }`}
            >
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image src={p.image} alt={p.name} fill className="object-contain" />
              </div>
              <div className="min-w-0">
                <p className={`text-xs font-medium truncate transition-colors ${i === current ? 'text-[#c9a227]' : 'text-[#f5f0e6]/60'}`}>
                  {p.name}
                </p>
                <p className="text-[10px] text-[#c9a227]/60 mt-0.5">{p.sizes[0].priceDisplay}</p>
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}