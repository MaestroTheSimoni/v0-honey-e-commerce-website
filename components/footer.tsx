"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const footerLinks = {
  shop: [
    { name: 'Products', href: '#products' },
    { name: 'Best Sellers', href: '#' },
    { name: 'New Arrivals', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
  services: [
    { name: 'Terms Of Services', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Returns', href: '#' },
  ],
  help: [
    { name: 'Help Center', href: '#' },
    { name: 'Real Gifts', href: '#' },
    { name: 'Brand', href: '#' },
  ],
  contact: [
    { name: 'Email', href: 'mailto:info@goldenhivehoney.com' },
    { name: 'Phone', href: 'tel:+1234567890' },
    { name: 'Address', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#c9a227]/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Shop */}
          <div>
            <h4 className="text-[#f5f0e6] font-medium mb-4 text-sm">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-[#f5f0e6]/50 hover:text-[#c9a227] text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#f5f0e6] font-medium mb-4 text-sm">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-[#f5f0e6]/50 hover:text-[#c9a227] text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h4 className="text-[#f5f0e6] font-medium mb-4 text-sm">Help Center</h4>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-[#f5f0e6]/50 hover:text-[#c9a227] text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-[#f5f0e6] font-medium mb-4 text-sm">Contact Us</h4>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-[#f5f0e6]/50 hover:text-[#c9a227] text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="#"
            className="w-10 h-10 flex items-center justify-center border border-[#c9a227]/30 text-[#f5f0e6]/60 hover:text-[#c9a227] hover:border-[#c9a227] transition-all"
          >
            <Facebook size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="#"
            className="w-10 h-10 flex items-center justify-center border border-[#c9a227]/30 text-[#f5f0e6]/60 hover:text-[#c9a227] hover:border-[#c9a227] transition-all"
          >
            <Twitter size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="#"
            className="w-10 h-10 flex items-center justify-center border border-[#c9a227]/30 text-[#f5f0e6]/60 hover:text-[#c9a227] hover:border-[#c9a227] transition-all"
          >
            <Instagram size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="#"
            className="w-10 h-10 flex items-center justify-center border border-[#c9a227]/30 text-[#f5f0e6]/60 hover:text-[#c9a227] hover:border-[#c9a227] transition-all"
          >
            <Youtube size={18} />
          </motion.a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#c9a227]/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-VT97wsB2zlCVbDIyJCWicTitsAcw81.png"
                alt="Golden Hive Honey"
                width={140}
                height={30}
                className="h-6 w-auto opacity-60"
              />
            </div>

            {/* Copyright */}
            <p className="text-[#f5f0e6]/40 text-xs text-center">
              Copyright © 2024 Golden Hive Honey. All Rights Reserved.
            </p>

            {/* Powered by */}
            <p className="text-[#f5f0e6]/30 text-xs">
              Made with 🍯
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
