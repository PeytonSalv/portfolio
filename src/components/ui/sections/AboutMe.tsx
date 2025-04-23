'use client'

import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <section className="bg-[#0e0e0e] text-white px-6 py-24">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Hero Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m Peyton Salvant — an AI-focused software engineer passionate about building intelligent, end-to-end systems. I specialize in LLM integration, agent frameworks, and full-stack development. I thrive in experimental, fast-paced environments where I can rapidly prototype with AI tools to solve real user problems.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-[#3B82F6] mb-4">Education</h2>
          <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">University of Alabama</h3>
            <p className="text-gray-300">B.S. in Computer Science, Minor in Mathematics</p>
            <p className="text-gray-400">Expected May 2025</p>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-[#3B82F6] mb-4">Experience</h2>
          <div className="space-y-6">

            <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold">Cascade Core Solutions LLC</h3>
              <p className="text-gray-300 italic">AI Engineer · Aug 2023 – Present</p>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                <li>Deployed LLM-powered tools using OpenAI, Claude, and LangChain.</li>
                <li>Prototyped memory-backed agents and tool-calling systems for client dashboards.</li>
                <li>Automated workflows with Supabase, React, and custom eval scoring tools.</li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold">QA + RD Intern – Upwork</h3>
              <p className="text-gray-300 italic">Dec 2022 – Jun 2023</p>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                <li>Built real-time doc processing pipelines using FastAPI + Whisper + TTS.</li>
                <li>Explored automation of voice UI flows and tested LLM agent behaviors.</li>
              </ul>
            </div>

          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-[#3B82F6] mb-4">Featured Projects</h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="text-xl font-medium">AI Workflow Engine + Agent Playground</h4>
              <p>Developer tool for chaining LLMs, agents, and task graphs. Powered by LangChain and Supabase.</p>
            </div>
            <div>
              <h4 className="text-xl font-medium">Prompt DevKit + Versioning Utility</h4>
              <p>Experimental versioning tool with inline evals, memory chains, and scoring snapshots using pgvector.</p>
            </div>
            <div>
              <h4 className="text-xl font-medium">Voice Agent Prototyping</h4>
              <p>Helpdesk-style voice agent prototype using Whisper, TTS, and LiveKit with real-time voice flows.</p>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-[#3B82F6] mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-300">
            <span>OpenAI</span>
            <span>LangChain</span>
            <span>Node.js</span>
            <span>React</span>
            <span>Supabase</span>
            <span>FastAPI</span>
            <span>Docker</span>
            <span>PostgreSQL</span>
            <span>Vector Stores</span>
            <span>Python</span>
            <span>TypeScript</span>
            <span>Cursor</span>
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-[#3B82F6] mb-4">Soft Skills</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Product-minded thinker focused on fast prototype-to-deployment workflows</li>
            <li>Collaborative, low-ego team player</li>
            <li>Fluent in using AI tools to supercharge development speed and quality</li>
          </ul>
        </motion.div>

      </div>
    </section>
  )
}
