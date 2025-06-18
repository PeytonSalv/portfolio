'use client'

import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <section className="bg-[#0e0e0e] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-[#3B82F6] to-white bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            Self-employed software engineer with a strong foundation in full-stack development, automation, and project delivery. 
            Specializing in AI-forward web applications and custom infrastructure, with expertise in TypeScript, serverless architecture, 
            and rapid iteration using Cursor IDE. Known for transforming underperforming websites into high-performing digital experiences.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-[#3B82F6] mb-6">Education</h2>
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-300 mb-1">The University of Alabama, 2025</p>
            <p className="text-gray-400">Minor in Mathematics · GPA: 3.33</p>
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-[#3B82F6] mb-6">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-3">Languages</h3>
              <p className="text-gray-300">TypeScript, JavaScript, Python, GoLang, C++, HTML/CSS</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-3">Frameworks & Tools</h3>
              <p className="text-gray-300">Next.js, Tailwind CSS, Framer Motion, React, Node.js, GraphQL</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-3">Platforms & Infrastructure</h3>
              <p className="text-gray-300">AWS, Vercel, Supabase, Stripe, Booqable API, WooCommerce API, Zapier</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-3">Databases & Other Tools</h3>
              <p className="text-gray-300">MySQL, MongoDB, Google Maps API, Git, Postman, Cursor (IDE), Docker</p>
            </div>
          </div>
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 rounded-xl mt-6">
            <h3 className="text-lg font-semibold text-white mb-3">Specialties</h3>
            <p className="text-gray-300">AI-assisted automation, SEO tooling, geospatial optimization, serverless functions</p>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-[#3B82F6] mb-6">Experience</h2>
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 rounded-xl">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white">Founder & Lead Developer</h3>
              <p className="text-gray-300">Cascade Core Solutions / Self-Employed</p>
              <p className="text-gray-400">2022 – Present · Remote / Baton Rouge, LA</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Alljoy Bike & Beach Rental</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Developed a custom rental platform using Next.js, AWS, Stripe, and Booqable API to replace limited WordPress integrations</li>
                  <li>Implemented dynamic pricing, real-time availability, and automated checkout workflows</li>
                  <li>Built a delivery matrix calculator using Google Maps API and AWS Lambda, optimizing rental drop-off routes by distance and travel time</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-white mb-2">FixMySEO</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Designed and deployed an AI-powered web scraper that analyzes site structure and competitor data (CPC, metadata, on-page SEO)</li>
                  <li>Generates custom SEO strategy game plans for outperforming top competitors in SERPs</li>
                  <li>Uses OpenAI for content analysis and automation workflows via Supabase edge functions</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-white mb-2">Reaper's Harvest (E-commerce)</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Built a custom Next.js storefront integrated with WooCommerce API and Stripe</li>
                  <li>Added animated UI components with Framer Motion and improved performance across the board</li>
                  <li>Over $40K in online orders within the first 3 months</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-white mb-2">Alljoy Donuts Co</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Created a visually rich, performant static site showcasing products and branding</li>
                  <li>0.8s average load time and optimized mobile responsiveness</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-white mb-2">Acadian Plant Health</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Delivered a CMS-powered corporate site with SEO, educational content, and custom product visualization to reach an international audience</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-[#3B82F6] mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-3">FixMySEO – AI-Powered SEO Game Plan Generator</h3>
              <p className="text-gray-300 mb-3">
                An AI-driven web scraper that analyzes competitors' websites, CPC data, and on-page SEO to deliver actionable SEO game plans.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Built using OpenAI API, Supabase Edge Functions, and headless scraping architecture</li>
                <li>Automates keyword analysis and generates strategic content recommendations</li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-3">Delivery Route Matrix Optimizer</h3>
              <p className="text-gray-300 mb-3">
                Created a delivery matrix calculator to find the fastest route for rental drop-offs.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Utilizes Google Maps API and AWS Lambda to calculate travel time and optimize delivery efficiency</li>
                <li>Integrated directly into Alljoy Bike's custom rental platform to streamline logistics in real-time</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Leadership & Initiatives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-[#3B82F6] mb-6">Leadership & Initiatives</h2>
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 rounded-xl">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Phi Kappa Psi – Philanthropy Chair</h3>
                <p className="text-gray-300">Raised $20K in a single event—20x the previous record.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Freelance Development Leadership</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Led multiple freelance development efforts, managing project scopes, timelines, and deliverables directly with business owners</li>
                  <li>Built internal tools and client-facing portals for local businesses such as Salvant Environmental Services</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
