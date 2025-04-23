'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-white/10 shadow-md"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* 💫 Logo with gradient */}
        <Link href="/" className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#3B82F6] to-cyan-400 bg-clip-text text-transparent">
          Peyton.dev
        </Link>

        {/* 🖥 Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-[#3B82F6] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* 📱 Mobile Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </Button>
        </div>
      </div>

      {/* 📱 Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-black/80 border-t border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-300 hover:text-[#3B82F6] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  )
}
