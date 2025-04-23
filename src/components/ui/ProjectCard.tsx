'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

type Props = {
  title: string
  description: string
  tags: string[]
  link: string
}

export default function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group block bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl shadow-md hover:shadow-[#3B82F6]/40 transition-all duration-300 p-6"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-white group-hover:text-[#3B82F6] transition-colors">
          {title}
        </h3>
        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#3B82F6]" />
      </div>

      <p className="text-sm text-gray-300 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded-md border border-[#2a2a2a]"
          >
            #{tag}
          </span>
        ))}
      </div>
    </motion.a>
  )
}
