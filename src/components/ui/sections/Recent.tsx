'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Recent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [
    "/projects/image1.png",
    "/projects/image2.png", 
    "/projects/image3.png"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative bg-[#0e0e0e] text-white px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Recent <span className="text-[#3B82F6]">Work</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col md:flex-row gap-8 items-center bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6"
      >
        {/* 🖼 Image Slideshow */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-md relative h-[400px]">
          {images.map((img, index) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: currentImageIndex === index ? 1 : 0,
                x: currentImageIndex === index ? 0 : -100
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={img}
                alt={`Project Image ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-md"
                priority={index === 0}
              />
            </motion.div>
          ))}
          
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentImageIndex === index ? 'bg-[#3B82F6] w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 💬 Description */}
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold text-white">
            🚀 Featured: <span className="text-[#3B82F6]">FixMySEO</span>
          </h3>
          <p className="text-gray-400 text-sm">
            FixMySEO is an AI-powered SEO analysis tool that audits your website, compares it to competitors, and provides real-time, actionable feedback.
            Built with React, OpenAI APIs, and custom scraping tools for domain-level insights.
          </p>
          <a
            href="https://fixmyseo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm text-[#3B82F6] hover:underline transition"
          >
            View Project →
          </a>
        </div>
      </motion.div>
    </section>
  )
}
