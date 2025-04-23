'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Server,
  LayoutDashboard,
  Cloud,
  Sparkles,
  Terminal,
  Cpu,
  Network,
  Container,
  Brain,
} from 'lucide-react'

export default function About() {
  const stack = [
    { name: 'React', icon: <Sparkles className="w-5 h-5" /> },
    { name: 'Next.js', icon: <Server className="w-5 h-5" /> },
    { name: 'TypeScript', icon: <Code2 className="w-5 h-5" /> },
    { name: 'Python', icon: <Terminal className="w-5 h-5" /> },
    { name: 'C++', icon: <Cpu className="w-5 h-5" /> },
    { name: 'Tailwind CSS', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Node.js', icon: <Server className="w-5 h-5" /> },
    { name: 'PostgreSQL', icon: <Database className="w-5 h-5" /> },
    { name: 'AWS/GCP', icon: <Cloud className="w-5 h-5" /> },
    { name: 'RESTful APIs', icon: <Network className="w-5 h-5" /> },
    { name: 'Docker', icon: <Container className="w-5 h-5" /> },
    { name: 'AI/ML', icon: <Brain className="w-5 h-5" /> },
  ]

  return (
    <section className="bg-[#0e0e0e] text-white py-28 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-8"
      >
        About <span className="text-[#3B82F6]">Me</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-gray-300 text-lg leading-relaxed space-y-4 mb-12 max-w-3xl mx-auto"
      >
        <p>
          I'm a developer who loves building intuitive, performant web apps using tools like React, TypeScript, and TailwindCSS.
          I care about clean code, great UI/UX, and solving meaningful problems.
        </p>
        <p>
          My projects range from IoT dashboards and AI tools to full-stack SaaS apps.
          I enjoy turning ideas into scalable, beautiful experiences that people actually want to use.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center"
      >
        {stack.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 hover:shadow-[#3B82F6]/30 hover:shadow-md transition-all"
          >
            <div className="text-[#3B82F6] mb-2">{icon}</div>
            <span className="text-sm font-medium text-gray-300">{name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
