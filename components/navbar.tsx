"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Contact', href: '#contact' },
  { name: 'Gallery', href: '#gallery' },
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
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md' 
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

            {/* Desktop Navigation - Pill shaped container */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-1 px-2 py-2 border border-[#c9a227]/30 rounded-full bg-[#0a0a0a]/50">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      className="px-4 py-1.5 text-[#c9a227] hover:text-[#e8c547] transition-colors duration-300 text-sm tracking-wide"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side Actions - Hexagonal buttons */}
            <div className="hidden md:flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <Link
                  href="#signin"
                  className="relative group"
                >
                  <svg width="100" height="40" viewBox="0 0 100 40" className="absolute inset-0">
                    <polygon 
                      points="12,0 88,0 100,20 88,40 12,40 0,20" 
                      fill="transparent" 
                      stroke="#c9a227" 
                      strokeWidth="1"
                      className="group-hover:stroke-[#e8c547] transition-colors duration-300"
                    />
                  </svg>
                  <span className="relative z-10 block px-6 py-2.5 text-[#c9a227] group-hover:text-[#e8c547] text-sm tracking-wide transition-colors duration-300">
                    Sign In
                  </span>
                </Link>
                <Link
                  href="#signup"
                  className="relative group"
                >
                  <svg width="100" height="40" viewBox="0 0 100 40" className="absolute inset-0">
                    <polygon 
                      points="12,0 88,0 100,20 88,40 12,40 0,20" 
                      fill="transparent" 
                      stroke="#c9a227" 
                      strokeWidth="1"
                      className="group-hover:fill-[#c9a227]/10 transition-colors duration-300"
                    />
                  </svg>
                  <span className="relative z-10 block px-6 py-2.5 text-[#c9a227] text-sm tracking-wide">
                    Sign Up
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#f5f0e6]"
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
                    className="text-2xl text-[#f5f0e6] hover:text-[#c9a227] transition-colors"
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
                  className="px-8 py-3 text-[#c9a227] border border-[#c9a227] text-center"
                >
                  Sign In
                </Link>
                <Link
                  href="#signup"
                  className="px-8 py-3 bg-[#c9a227] text-[#0a0a0a] text-center"
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
