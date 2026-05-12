"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  about: [
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ],
  services: [
    { name: 'Terms Of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Store', href: '#' },
  ],
  help: [
    { name: 'Return', href: '#' },
    { name: 'Purches', href: '#' },
  ],
  contact: [
    { name: 'Email', href: 'mailto:info@goldenhivehoney.com' },
    { name: 'Phone', href: 'tel:+1234567890' },
    { name: 'Address', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] pt-16 pb-8 overflow-hidden">
      {/* Hexagonal background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,5 55,20 55,50 30,65 5,50 5,20' fill='none' stroke='%23c9a227' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Content - Links and Social */}
          <div className="flex-1">
            {/* Footer Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {/* About */}
              <div>
                <h4 className="text-[#f5f0e6] font-medium mb-4 text-sm">About</h4>
                <ul className="space-y-2">
                  {footerLinks.about.map((link) => (
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

            {/* Social Media Icons - Hexagonal style */}
            <div className="mb-8">
              <Image
                src="/socialmedia.png"
                alt="Social Media"
                width={153}
                height={51}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Right Content - Honey Jar Image - Positioned at top of footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden lg:block absolute right-8 xl:right-24 -top-16"
          >
            <Image
              src="/footerpic.png"
              alt="Honey Jar"
              width={300}
              height={400}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#c9a227]/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#c9a227]/40 flex items-center justify-center">
                <span className="text-[#c9a227] text-lg">🐝</span>
              </div>
              <span className="text-[#c9a227] font-semibold text-lg">Golden Hive Honey</span>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-[#f5f0e6]/60 text-sm">
                Created By Elinaui9
              </p>
              <p className="text-[#f5f0e6]/40 text-xs">
                Copyright © 2023 Golden Hive Honey. All Rights Reserved.
              </p>
            </div>

            {/* Empty space for balance */}
            <div className="hidden md:block w-[180px]"></div>
          </div>
        </div>
      </div>

      {/* Mobile Honey Jar - shown only on smaller screens */}
      <div className="lg:hidden flex justify-center mt-8">
        <Image
          src="/images/footerpic.png"
          alt="Honey Jar"
          width={200}
          height={280}
          className="object-contain"
        />
      </div>
    </footer>
  )
}
