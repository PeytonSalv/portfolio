'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const x = (clientX / innerWidth) * 100
      const y = (clientY / innerHeight) * 100

      if (bgRef.current) {
        bgRef.current.style.setProperty('--mouse-x', `${x}%`)
        bgRef.current.style.setProperty('--mouse-y', `${y}%`)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-black text-white">
      {/* 🌀 Radial glow that follows cursor */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 pointer-events-none transition-all duration-200 ease-out"
        style={{
          background: `
            radial-gradient(
              circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              rgba(59, 130, 246, 0.25),
              transparent 60%
            )
          `,
        }}
      />

      {/* 🌌 Particle grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle,#3B82F6_1px,transparent_1px)] bg-[length:30px_30px]" />
      </div>

      {/* 🎛 Noise overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-5 mix-blend-screen pointer-events-none" />

      {/* 👑 Content */}
      <div className="z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4"
        >
          Hey, I&rsquo;m{' '}
          <span className="bg-gradient-to-r from-[#3B82F6] to-cyan-400 bg-clip-text text-transparent">
            Peyton
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-6"
        >
          I build clean, performant full-stack systems using modern tools like React, Node.js, and PostgreSQL, with expertise in both frontend and backend development.
        </motion.p>

        {/* 🚀 Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/projects">
            <Button
              size="lg"
              className="text-base font-medium bg-[#3B82F6] hover:bg-[#2563EB] shadow-xl hover:shadow-[#3B82F6]/40 transition-all duration-300"
            >
              View My Work
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
