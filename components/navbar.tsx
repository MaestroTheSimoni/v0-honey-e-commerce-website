"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Shop', href: '#shop' },
  //{ name: 'Products', href: '#products' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#c9a227]/20' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-VT97wsB2zlCVbDIyJCWicTitsAcw81.png"
                alt="Golden Hive Honey"
                width={180}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation - Sharp edge hexagon container */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-0 px-1 py-1 border border-[#c9a227]/50 bg-[#0a0a0a]/30 relative"
                style={{
                  clipPath: 'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)'
                }}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      className="px-4 py-2 text-[#c9a227] hover:text-[#e8c547] hover:bg-[#c9a227]/10 transition-all duration-300 text-sm tracking-wide border-r border-[#c9a227]/20 last:border-r-0"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side Actions - Sharp hexagon buttons */}
            <div className="hidden md:flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <Link
                  href="#signin"
                  className="relative group overflow-hidden"
                  style={{
                    clipPath: 'polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)'
                  }}
                >
                  <div className="absolute inset-0 bg-[#c9a227]/20 group-hover:bg-[#c9a227]/30 transition-colors duration-300"></div>
                  <div className="absolute inset-0 border border-[#c9a227]/60 group-hover:border-[#e8c547] transition-colors duration-300"></div>
                  <span className="relative z-10 block px-6 py-2 text-[#c9a227] group-hover:text-[#e8c547] text-sm tracking-wide transition-colors duration-300">
                    Sign In
                  </span>
                </Link>
                <Link
                  href="#signup"
                  className="relative group overflow-hidden"
                  style={{
                    clipPath: 'polygon(12% 0%, 88% 0%, 100% 50%, 88% 100%, 12% 100%, 0% 50%)'
                  }}
                >
                  <div className="absolute inset-0 bg-[#c9a227]/20 group-hover:bg-[#c9a227]/30 transition-colors duration-300"></div>
                  <div className="absolute inset-0 border border-[#c9a227]/60 group-hover:border-[#e8c547] transition-colors duration-300"></div>
                  <span className="relative z-10 block px-6 py-2 text-[#c9a227] group-hover:text-[#e8c547] text-sm tracking-wide transition-colors duration-300">
                    Sign Up
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#c9a227]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] md:hidden pt-20"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl text-[#c9a227] hover:text-[#e8c547] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-4 mt-8"
              >
                <Link
                  href="#signin"
                  className="px-8 py-3 text-[#c9a227] border border-[#c9a227]/60 text-center hover:bg-[#c9a227]/10 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="#signup"
                  className="px-8 py-3 bg-[#c9a227]/20 border border-[#c9a227]/60 text-[#c9a227] text-center hover:bg-[#c9a227]/30 transition-colors"
                >
                  Sign Up
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
