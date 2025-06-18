'use client'

import { motion } from 'framer-motion'
import { ExternalLink, TrendingUp } from 'lucide-react'
import { useState, useEffect } from 'react'

type Props = {
  title: string
  description: string
  tags: string[]
  link: string
  type?: string
  results?: string[]
  index?: number
}

export default function ProjectCard({ title, description, tags, link, type, results, index = 0 }: Props) {
  const [isVisible, setIsVisible] = useState(false)

  // Fallback to ensure cards always render
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100 + index * 50) // Stagger the fallback

    return () => clearTimeout(timer)
  }, [index])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl shadow-md hover:shadow-[#3B82F6]/40 transition-all duration-300 p-6 ${
        isVisible ? 'opacity-100' : ''
      }`}
      style={{ minHeight: '400px' }} // Prevent layout shift
    >
      {/* Project Type Badge */}
      {type && (
        <div className="inline-block px-2 py-1 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-md mb-3">
          <span className="text-xs text-[#3B82F6] font-medium">{type}</span>
        </div>
      )}

      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-white group-hover:text-[#3B82F6] transition-colors">
          {title}
        </h3>
        {link && link !== '#' && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#3B82F6] transition-colors flex-shrink-0 ml-2"
            aria-label={`Visit ${title} website`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Results Section */}
      {results && results.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-[#3B82F6]" />
            <span className="text-sm font-medium text-[#3B82F6]">Results</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {results.slice(0, 4).map((result, resultIndex) => (
              <div 
                key={`${title}-result-${resultIndex}`} 
                className="text-xs text-gray-400 bg-[#1a1a1a] rounded-md p-2 border border-[#2a2a2a]"
              >
                {result}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, tagIndex) => (
          <span
            key={`${title}-tag-${tagIndex}`}
            className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded-md border border-[#2a2a2a]"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Coming Soon Badge for placeholder links */}
      {link === '#' && (
        <div className="mt-auto">
          <div className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-md">
            <span className="text-xs text-yellow-500 font-medium">Link Coming Soon</span>
          </div>
        </div>
      )}
    </motion.div>
  )
}
