'use client'

import ProjectCard from '@/components/ui/ProjectCard'
import ProjectCardSkeleton from '@/components/ui/ProjectCardSkeleton'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const projects = [
  {
    title: 'Alljoy Bike & Beach Rental',
    description: 'Custom rental platform built from the ground up using Next.js, AWS infrastructure, Stripe payments, and Booqable API integration. Features advanced booking logic, real-time availability, and automated pricing calculations.',
    tags: ['Next.js', 'AWS', 'Stripe', 'Booqable API', 'TypeScript', 'Tailwind CSS'],
    link: 'https://alljoybike.com',
    type: 'Web Application',
    results: ['300% Increase in Online Bookings', '40k+ Lines of Custom Code', '85% Faster Checkout Process', '99.9% System Uptime']
  },
  {
    title: 'Reaper&apos;s Harvest',
    description: 'Custom Next.js e-commerce platform with seamless WooCommerce backend integration and Stripe payment processing. Implemented advanced animations, optimized performance, and created a fluid, modern shopping experience.',
    tags: ['Next.js', 'WooCommerce', 'Stripe', 'Framer Motion', 'TypeScript', 'GraphQL'],
    link: 'https://darkersideofhalloween.com',
    type: 'Online Store',
    results: ['250% Conversion Rate Increase', '1.2s Average Load Time', '65% Bounce Rate Reduction', '45% Higher Average Order Value']
  },
  {
    title: 'Alljoy Donuts CO',
    description: 'Stunning static website optimized for performance and visual appeal. Implemented responsive design, beautiful product galleries, and smooth animations that bring the brand to life online while maintaining lightning-fast load times.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'TypeScript', 'Responsive Design'],
    link: 'https://alljoydonutco.com',
    type: 'Brand Website',
    results: ['0.8s Average Load Time', '100% Mobile Optimized', '95+ Lighthouse Score', '300% Online Engagement Boost']
  },
  {
    title: 'Acadian Plant Health',
    description: 'Comprehensive digital platform for a leading biostimulant non-profit organization. Features interactive product showcases, scientific data visualization, and educational content management focused on sustainable agriculture solutions.',
    tags: ['Next.js', 'Content Management', 'SEO Optimization', 'Analytics', 'Responsive Design', 'Performance'],
    link: 'https://acadianplanthealth.com',
    type: 'Non-Profit Website'
  },
  {
    title: 'FixMySEO',
    description: 'Cutting-edge AI-powered SEO intelligence platform that leverages advanced web scraping and machine learning to analyze competitor strategies. Provides users with actionable game plans to dominate their market through data-driven insights and automated competitive analysis.',
    tags: ['Next.js', 'AI/ML', 'Web Scraping', 'Supabase', 'AWS', 'OpenAI', 'TypeScript'],
    link: '#',
    type: 'AI Platform',
    results: ['Advanced Competitor Analysis', 'AI-Powered Insights', 'Automated SEO Strategy', 'Real-time Market Intelligence']
  },
]

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time and ensure smooth rendering
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0e0e0e] to-black text-white py-32 px-6 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #3B82F6 0px, transparent 50%),
            radial-gradient(circle at 75% 75%, #3B82F6 0px, transparent 50%),
            radial-gradient(#3B82F6 1px, transparent 1px)
          `,
          backgroundSize: '800px 800px, 800px 800px, 40px 40px',
          backgroundPosition: '0 0, 100% 100%, 0 0',
          opacity: 0.03,
        }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#3B82F6] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#3B82F6] to-white bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A curated showcase of full-stack applications, AI-powered tools, and modern web experiences 
            I&apos;ve built for clients and personal exploration.
          </motion.p>
        </motion.div>

        {/* Enhanced Project Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 z-10 relative">
          {isLoading ? (
            // Show skeleton loading cards
            Array.from({ length: 5 }).map((_, index) => (
              <div key={`skeleton-${index}`}>
                <ProjectCardSkeleton />
              </div>
            ))
          ) : (
            // Show actual project cards
            projects.map((project, index) => (
              <div key={project.title} className="group">
                <ProjectCard {...project} index={index} />
              </div>
            ))
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            Interested in working together?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white font-medium rounded-lg hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 shadow-lg hover:shadow-[#3B82F6]/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
