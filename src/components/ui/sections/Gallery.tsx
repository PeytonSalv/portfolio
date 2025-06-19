'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  const images = [
    {
      src: "/projects/alljoybikehero.png",
      title: "Alljoy Bike & Beach Rental",
      description: "Custom rental platform with real-time booking and payment processing"
    },
    {
      src: "/projects/reapersharvest.png", 
      title: "Reaper&apos;s Harvest",
      description: "E-commerce platform with seamless WooCommerce integration and Stripe payments"
    },
    {
      src: "/projects/alljoydonutco.png",
      title: "Alljoy Donuts CO",
      description: "Static website optimized for performance and visual appeal"
    },
    {
      src: "/projects/cascade.png",
      title: "Cascade Core Solutions",
      description: "AI-powered workflow automation and business intelligence platform"
    },
    {
      src: "/projects/alljoybike.png",
      title: "Alljoy Bike Rental Dashboard",
      description: "Admin dashboard for rental management and analytics"
    }
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section className="relative bg-[#0e0e0e] text-white px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Project <span className="text-[#3B82F6]">Gallery</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
      >
        Take a visual tour through some of my recent work and see the interfaces I&apos;ve crafted.
      </motion.p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
            onClick={() => openModal(index)}
          >
            <div className="relative overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3B82F6]/50 transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium">
                    Click to view
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white mb-2">{image.title}</h3>
                <p className="text-sm text-gray-400">{image.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-[#3B82F6] transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#3B82F6] transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#3B82F6] transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                fill
                className="object-contain"
              />
            </div>

            {/* Image info */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                {images[selectedImage].title}
              </h3>
              <p className="text-gray-400">
                {images[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
} 