'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function AboutMe() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="bg-[#0e0e0e] text-white px-6 py-24">
      <motion.div 
        className="max-w-5xl mx-auto space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >

        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#3B82F6] to-white bg-clip-text text-transparent">
            Peyton Salvant
          </h1>
          <div className="text-gray-300 space-y-1">
            <p>Panama City Beach, FL | +1 (225) 328-4200</p>
            <p>peytonsalvant5461@outlook.com</p>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-[#3B82F6] mb-4 border-b border-[#3B82F6] pb-2">SUMMARY</h2>
          <p className="text-gray-300 leading-relaxed">
            Full-stack engineer with a focus on AI integrations, scalable infrastructure, and polished UI/UX. 
            Experienced in building end-to-end applications using React, Next.js, AWS, Stripe, and third-party APIs. 
            Passionate about solving real problems through automation and clean code.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-[#3B82F6] mb-4 border-b border-[#3B82F6] pb-2">EDUCATION</h2>
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg font-semibold text-white">University of Alabama</h3>
              <span className="text-gray-400">Tuscaloosa, AL</span>
            </div>
            <p className="text-gray-300">B.S. Computer Science, Minor in Mathematics</p>
            <p className="text-gray-400">Expected May 2025</p>
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-[#3B82F6] mb-4 border-b border-[#3B82F6] pb-2">TECHNICAL SKILLS</h2>
          <div className="space-y-2">
            <div><span className="font-semibold text-white">Languages:</span> <span className="text-gray-300">Python, TypeScript, Go, JavaScript, C++, SQL, HTML/CSS</span></div>
            <div><span className="font-semibold text-white">Frameworks:</span> <span className="text-gray-300">Next.js, React, Node.js, FastAPI</span></div>
            <div><span className="font-semibold text-white">Cloud/Infra:</span> <span className="text-gray-300">AWS (Lambda, S3, SES), Supabase, Vercel, Firebase, Docker</span></div>
            <div><span className="font-semibold text-white">Databases:</span> <span className="text-gray-300">PostgreSQL, MySQL, MongoDB</span></div>
            <div><span className="font-semibold text-white">Tools:</span> <span className="text-gray-300">Git, Linux CLI, Stripe API, Booqable API, DocuSign, Zapier, LaTeX</span></div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-[#3B82F6] mb-4 border-b border-[#3B82F6] pb-2">EXPERIENCE</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-white">Cascade Core Solutions LLC — Software Developer</h3>
                <span className="text-gray-400 italic">Aug 2023 – Present</span>
              </div>
              <p className="text-gray-300">
                Architected and deployed commercial-grade web applications. Automated operational workflows for clients using custom API integrations and serverless functions on AWS. Designed customer portals and internal dashboards with full payment, contract, and email flows using Stripe, DocuSign, and SES.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-white">QA Intern — Upwork</h3>
                <span className="text-gray-400 italic">Dec 2022 – Jun 2023</span>
              </div>
              <p className="text-gray-300">
                Built Python-based QA tools to automate test suites and deployment checks. Supported early-stage product teams by debugging backend pipelines, analyzing voice data, and improving dev processes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-[#3B82F6] mb-4 border-b border-[#3B82F6] pb-2">PROJECTS</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Alljoy Bike & Beach Rental Platform — <span className="text-gray-400 italic font-normal">Next.js, Stripe, Booqable API, AWS</span></h3>
              <p className="text-gray-300 mb-2">
                Custom rental platform with advanced booking logic, real-time inventory sync, and automated pricing. Integrated Stripe for payment, DocuSign for contracts, and AWS Lambda for delivery routing logic. Resulted in:
              </p>
              <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                <li>300% increase in online bookings</li>
                <li>85% faster checkout</li>
                <li>99.9% system uptime</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Reaper's Harvest E-Commerce Store — <span className="text-gray-400 italic font-normal">Next.js, WooCommerce, Stripe, Framer Motion</span></h3>
              <p className="text-gray-300 mb-2">
                Modern e-commerce experience built over a WooCommerce backend. Implemented real-time checkout via Stripe, with high-performance animation and UX optimization. Achieved:
              </p>
              <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                <li>250% conversion rate increase</li>
                <li>1.2s average load time</li>
                <li>45% higher average order value</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Earnings Call Analyzer — <span className="text-gray-400 italic font-normal">Python, AWS Lambda, Supabase, NLP</span></h3>
              <p className="text-gray-300">
                Built a pipeline that scraped SEC filings, detected earnings call timestamps, and transcribed calls via Otter.ai. Used AWS Lambda for real-time transcription triggering and applied sentiment scoring models for instant report generation.
              </p>
            </div>



            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Alljoy Donuts Static Site — <span className="text-gray-400 italic font-normal">Next.js, Tailwind CSS, Framer Motion, Vercel</span></h3>
              <p className="text-gray-300">
                Brand site for a local business showcasing artisanal donuts. Delivered a fast-loading, mobile-optimized static site that captured the shop's visual identity and boosted customer traffic.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Acadian Plant Health Corporate Site — <span className="text-gray-400 italic font-normal">Next.js, CMS, SEO, Analytics</span></h3>
              <p className="text-gray-300">
                Built a content-heavy platform for a biotech firm. Prioritized SEO, performance, and scientific communication. Reached 50+ countries with global reach.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-[#3B82F6] mb-4 border-b border-[#3B82F6] pb-2">LEADERSHIP</h2>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Head Philanthropy Chair – Phi Kappa Psi</h3>
            <p className="text-gray-300">
              Led a record-breaking fundraising campaign for Hunter's Pledge, multiplying previous donation levels by 20x.
            </p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}
