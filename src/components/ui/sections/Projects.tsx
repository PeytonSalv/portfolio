'use client'

import ProjectCard from '@/components/ui/ProjectCard'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Weather Station',
    description: 'IoT-powered real-time weather dashboard with ESP8266, Rock Pi, and live data streaming.',
    tags: ['IoT', 'React', 'WebSockets'],
    link: 'https://github.com/yourusername/weather-station',
  },
  {
    title: 'FixMySEO',
    description: 'AI-powered SEO tool that analyzes domain content and gives actionable insights.',
    tags: ['Next.js', 'OpenAI API', 'TailwindCSS'],
    link: 'https://fixmyseo.ai',
  },
  {
    title: 'Matrix Distance Calculator',
    description: 'Optimized logistics for delivery and pickup using Google Maps API and AWS Lambda.',
    tags: ['AWS', 'Python', 'API Integration'],
    link: 'https://alljoybikes.com',
  },
]

export default function Projects() {
  return (
    <section className="relative w-full bg-black text-white py-28 px-6 overflow-hidden">
      {/* 🌀 Glowing Grid Background */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(#3B82F6 1px, transparent 1px),
            radial-gradient(#3B82F6 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
          backgroundPosition: '0 0, 18px 18px',
          maskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)',
          opacity: 0.04,
        }}
      />

      {/* 🔊 Noise Overlay (optional) */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-screen pointer-events-none -z-10" />

      {/* 🧠 Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-4"
      >
        My{' '}
        <span className="text-[#3B82F6] relative">
          Projects
          <motion.span
            className="absolute -bottom-1 left-0 w-full h-1 bg-[#3B82F6]/50"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ transformOrigin: 'left' }}
            viewport={{ once: true }}
          />
        </span>
      </motion.h2>

      {/* 💬 Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
      >
        A curated showcase of the things I’ve built — from real-time apps to cloud-powered tools.
      </motion.p>

      {/* 📦 Project Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 z-10 relative">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.025 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
