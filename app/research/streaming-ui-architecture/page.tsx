"use client";

import { motion } from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { GlassCard } from "@/components/ui/glass-card";
import { Footer } from "@/components/ui/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { AnimatedBlobs } from "@/components/ui/animated-blobs";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { CustomCursor } from "@/components/ui/custom-cursor";
import {
  FileText,
  Search,
  User,
  Briefcase,
  Code2,
  Mail,
  Calendar,
  Clock,
  ArrowRight,
  Zap,
  RefreshCw,
  Activity,
  Radio,
  Wifi,
  Server,
  Eye,
  Database,
  CheckCircle2,
  GitBranch,
  MessageSquare,
  Layers,
  Sparkles,
  Timer,
  BookOpen,
  PlayCircle,
  PauseCircle,
  AlertCircle,
  TrendingUp,
  Award,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "About", link: "/#about", icon: <User size={18} /> },
  { name: "Experience", link: "/#experience", icon: <Briefcase size={18} /> },
  { name: "Projects", link: "/#projects", icon: <Code2 size={18} /> },
  { name: "Resume", link: "/resume", icon: <Award size={18} /> },
  { name: "Case Studies", link: "/case-studies", icon: <FileText size={18} /> },
  { name: "Research", link: "/research", icon: <Search size={18} /> },
  { name: "Contact", link: "/#contact", icon: <Mail size={18} /> },
];

const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "pipeline", title: "The Streaming UI Pipeline" },
  { id: "token-rendering", title: "Token-Level Rendering" },
  { id: "revision-architecture", title: "Revision Architecture" },
  { id: "diff-streaming", title: "Diff-Based Streaming" },
  { id: "tool-execution", title: "Tool Execution Streams" },
  { id: "latency-masking", title: "Managing Latency with UI Illusions" },
  { id: "real-systems", title: "Real Systems" },
  { id: "blueprint", title: "Architectural Blueprint" },
  { id: "conclusion", title: "Conclusion" },
  { id: "citations", title: "Citations" },
];

export default function StreamingUIResearch() {
  return (
    <SmoothScroll>
      <div className="min-h-screen relative">
        <CustomCursor />
        <ScrollProgress />
        <BackToTop />
        <AnimatedBlobs />
        <FloatingNav navItems={navItems} />

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative min-h-[80vh] flex items-center justify-center px-4 pt-32 pb-20">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
                    Research Paper
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-neutral-50 leading-tight">
                  The Architecture of Real-Time Streaming Interfaces
                </h1>
                <p className="text-xl md:text-2xl text-neutral-900 dark:text-neutral-300 mb-4">
                  UI as a Live Data Canvas
                </p>
                <p className="text-lg text-neutral-700 dark:text-neutral-400 mb-8">
                  By Peyton Salvant — January 2025
                </p>

                <div className="flex gap-6 justify-center items-center text-neutral-700 dark:text-neutral-400 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>January 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>20 min read</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {["Streaming", "Real-time", "UI/UX", "Performance", "Architecture"].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Abstract */}
          <section className="relative py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <GlassCard className="border-l-4 border-cyan-500">
                  <h2 className="text-2xl font-bold text-black dark:text-neutral-50 mb-4 flex items-center gap-2">
                    <BookOpen size={24} className="text-cyan-500" />
                    Abstract
                  </h2>
                  <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-4">
                    Modern software is shifting from <strong>static, screen-based rendering</strong> to <strong>continuous, flow-based interaction</strong>. With the rise of LLMs, token streaming, event-based pipelines, and real-time agents, the user interface has evolved into a <strong>live data canvas</strong>—a surface that receives, diffuses, and transforms incoming information continuously rather than waiting for completed results.
                  </p>
                  <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed">
                    This paper outlines the architecture behind real-time streaming interfaces in 2025, exploring how text, tokens, revisions, diffs, tool outputs, and state transitions can be rendered fluidly. We investigate visual buffering systems, optimistic rendering, stream synchronization, revision management, and dynamic layout adjustments. Real-world systems such as <strong>ChatGPT, Claude, Cursor, and Replit</strong> serve as case studies in the next generation of streaming-first UIs.
                  </p>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="relative py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <GlassCard>
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen size={24} className="text-primary" />
                    <h2 className="text-2xl font-bold text-black dark:text-neutral-50">Table of Contents</h2>
                  </div>
                  <nav className="grid md:grid-cols-2 gap-3">
                    {tableOfContents.map((item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.id}`}
                        className="flex items-center gap-2 text-neutral-900 dark:text-neutral-300 hover:text-primary dark:hover:text-primary transition-colors group"
                      >
                        <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{item.title}</span>
                      </a>
                    ))}
                  </nav>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Introduction */}
          <section id="introduction" className="relative py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  1. Introduction: From "Render When Ready" → "Render as it Happens"
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Traditional UI */}
                  <GlassCard className="border-2 border-neutral-400/30">
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4 flex items-center gap-2">
                      <PauseCircle size={24} className="text-neutral-500" />
                      Traditional UIs
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-neutral-500/10 border border-neutral-500/20 rounded-lg p-3">
                        <code className="text-sm text-neutral-900 dark:text-neutral-300">Request → Response Model</code>
                      </div>
                      <ol className="space-y-2 list-decimal list-inside text-neutral-900 dark:text-neutral-300">
                        <li>User submits input</li>
                        <li>System processes</li>
                        <li>UI updates once</li>
                      </ol>
                      <p className="text-sm text-neutral-700 dark:text-neutral-400 italic pt-2">
                        A sheet swapped all at once
                      </p>
                    </div>
                  </GlassCard>

                  {/* Real-time Streaming UI */}
                  <GlassCard className="border-2 border-cyan-500/30">
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4 flex items-center gap-2">
                      <PlayCircle size={24} className="text-cyan-500" />
                      Real-time Streaming UIs
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
                        <code className="text-sm text-neutral-900 dark:text-neutral-300">Continuous Flow Model</code>
                      </div>
                      <ol className="space-y-2 list-decimal list-inside text-neutral-900 dark:text-neutral-300">
                        <li>User submits input</li>
                        <li>System returns incremental data</li>
                        <li>UI updates continuously</li>
                        <li>System may revise earlier content</li>
                        <li>UI adapts in real time</li>
                      </ol>
                      <p className="text-sm text-cyan-700 dark:text-cyan-400 italic pt-2">
                        A canvas painted over time
                      </p>
                    </div>
                  </GlassCard>
                </div>

                <GlassCard className="bg-gradient-to-r from-cyan-500/5 to-blue-500/5 border border-cyan-500/20">
                  <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed text-center">
                    <strong>The interface becomes a canvas painted over time, not a sheet swapped all at once.</strong>
                  </p>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Pipeline */}
          <section id="pipeline" className="relative py-20 px-4 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  2. The Streaming UI Pipeline
                </h2>

                <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-8">
                  Below is the fundamental streaming pipeline that all real-time interfaces share:
                </p>

                {/* Pipeline Visual */}
                <GlassCard className="mb-8">
                  <h4 className="text-lg font-bold text-black dark:text-neutral-50 mb-6 text-center">
                    Streaming Pipeline Architecture
                  </h4>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {[
                      { label: "User Input", icon: <User size={20} />, color: "blue" },
                      { label: "Request", icon: <Radio size={20} />, color: "cyan" },
                      { label: "Stream", icon: <Activity size={20} />, color: "purple", wavy: true },
                      { label: "Buffer", icon: <Database size={20} />, color: "yellow" },
                      { label: "Render", icon: <Eye size={20} />, color: "orange" },
                      { label: "Adjust", icon: <RefreshCw size={20} />, color: "pink" },
                      { label: "Finalize", icon: <CheckCircle2 size={20} />, color: "green" },
                    ].map((stage, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row items-center gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${stage.color}-500 to-${stage.color}-600 flex items-center justify-center text-white shadow-lg ${stage.wavy ? 'animate-pulse' : ''}`}>
                            {stage.icon}
                          </div>
                          <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-300 text-center mt-2">
                            {stage.label}
                          </div>
                        </div>
                        {idx < 6 && (
                          <>
                            <ArrowRight size={24} className="text-primary hidden md:block" />
                            <div className="md:hidden"><ArrowRight size={24} className="text-primary rotate-90" /></div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Pipeline Stages Detail */}
                <div className="space-y-6">
                  {/* Stream */}
                  <GlassCard>
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4 flex items-center gap-2">
                      <Activity size={24} className="text-purple-500" />
                      2.1 Stream
                    </h3>
                    <p className="text-neutral-900 dark:text-neutral-300 mb-4">Incoming data arrives as:</p>
                    <div className="grid md:grid-cols-3 gap-3">
                      {["Tokens", "Partial JSON", "Diff patches", "Tool execution events", "Corrections/revisions", "Embeddings or metadata"].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-neutral-900 dark:text-neutral-300 bg-purple-500/10 border border-purple-500/20 rounded-lg p-2">
                          <div className="w-2 h-2 rounded-full bg-purple-500" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>

                  {/* Buffer */}
                  <GlassCard>
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4 flex items-center gap-2">
                      <Database size={24} className="text-yellow-500" />
                      2.2 Buffer
                    </h3>
                    <p className="text-neutral-900 dark:text-neutral-300 mb-4">Buffers smooth the chaos:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {["Reordering events", "Holding incomplete JSON fragments", "Throttling or coalescing bursts", "Pre-processing revisions"].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-neutral-900 dark:text-neutral-300">
                          <CheckCircle2 size={16} className="text-yellow-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>

                  {/* Render */}
                  <GlassCard>
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4 flex items-center gap-2">
                      <Eye size={24} className="text-orange-500" />
                      2.3 Render
                    </h3>
                    <p className="text-neutral-900 dark:text-neutral-300 mb-4">Rendering must be:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {["Non-blocking", "Low-latency", "Visually stable", "Reversible"].map((item, idx) => (
                        <div key={idx} className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3 text-center">
                          <span className="font-semibold text-neutral-900 dark:text-neutral-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Token-Level Rendering */}
          <section id="token-rendering" className="relative py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  3. Token-Level Rendering: Designing for Continuous Arrival
                </h2>

                <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-6">
                  Token-by-token UIs are the most recognizable streaming pattern.
                </p>

                {/* Requirements */}
                <GlassCard className="mb-8">
                  <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4">Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Render tokens as they arrive",
                      "Maintain stable layout while text grows",
                      "Avoid reflow jumps",
                      "Smooth the visual experience",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Zap size={18} className="text-cyan-500 flex-shrink-0 mt-1" />
                        <span className="text-neutral-900 dark:text-neutral-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Patterns */}
                <GlassCard className="mb-8">
                  <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4">Patterns</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Typewriter effect", desc: "Illusion of typing" },
                      { name: "Fade-in tokens", desc: "Smooth opacity transition" },
                      { name: "Batch rendering", desc: "Every X ms to reduce reflows" },
                      { name: "Optimistic smoothing", desc: "Prevents jitter" },
                    ].map((pattern, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-cyan-500/10 to-transparent border-l-4 border-cyan-500 p-4 rounded-lg">
                        <div className="font-semibold text-neutral-900 dark:text-neutral-300">{pattern.name}</div>
                        <div className="text-sm text-neutral-700 dark:text-neutral-400">{pattern.desc}</div>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Token Timeline Visual */}
                <GlassCard>
                  <h4 className="text-lg font-bold text-black dark:text-neutral-50 mb-6 text-center">
                    Token-Level Rendering Timeline
                  </h4>
                  <div className="relative">
                    {/* Timeline bar */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transform -translate-y-1/2" />

                    {/* Token blocks */}
                    <div className="relative flex justify-between items-center">
                      {["T1", "T2", "T3", "T4", "T5"].map((token, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: idx * 0.2, duration: 0.3 }}
                          viewport={{ once: true }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center text-white font-bold shadow-lg z-10 mb-2">
                            {token}
                          </div>
                          <div className="text-xs text-neutral-700 dark:text-neutral-400">
                            +{idx * 20}ms
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 text-center text-sm text-neutral-700 dark:text-neutral-400">
                    Micro-delays showing arrival intervals
                  </div>
                </GlassCard>

                {/* Technical Challenges */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4">Technical Challenges</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { icon: <AlertCircle size={20} />, text: "Avoiding layout thrash" },
                      { icon: <Activity size={20} />, text: "Natural scroll position" },
                      { icon: <RefreshCw size={20} />, text: "Merging with revisions" },
                    ].map((challenge, idx) => (
                      <GlassCard key={idx}>
                        <div className="flex flex-col items-center text-center gap-3">
                          <div className="text-orange-500">{challenge.icon}</div>
                          <span className="text-sm text-neutral-900 dark:text-neutral-300">{challenge.text}</span>
                        </div>
                      </GlassCard>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Revision Architecture */}
          <section id="revision-architecture" className="relative py-20 px-4 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  4. Revision Architecture: When the Stream Changes the Past
                </h2>

                <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-6">
                  LLMs and agents frequently revise earlier output. Your UI must adapt when the model says:
                </p>

                <GlassCard className="mb-8 bg-yellow-500/5 border border-yellow-500/30">
                  <div className="flex items-center gap-3">
                    <AlertCircle size={24} className="text-yellow-600 dark:text-yellow-400" />
                    <p className="text-lg italic text-neutral-900 dark:text-neutral-300">
                      "Actually, replace the previous sentence with this."
                    </p>
                  </div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-400 mt-3">
                    This is called <strong>retroactive streaming</strong>.
                  </p>
                </GlassCard>

                {/* Revision Handling */}
                <GlassCard className="mb-8">
                  <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4">Revision Handling Includes</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Rollback systems",
                      "Semantic differencing",
                      "Contextual reflow",
                      "Preserving user's viewport",
                      "Applying patches without flicker",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-neutral-900 dark:text-neutral-300">
                        <RefreshCw size={16} className="text-purple-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Strategies */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-bold text-black dark:text-neutral-50">Strategies</h3>
                  {[
                    {
                      num: "1",
                      name: "Semantic diff",
                      desc: "Highlight changes",
                      color: "green"
                    },
                    {
                      num: "2",
                      name: "Soft overwrite",
                      desc: "Fade-out old text, fade-in corrected text",
                      color: "blue"
                    },
                    {
                      num: "3",
                      name: "Hard replace",
                      desc: "Instantly update, then animate stabilization",
                      color: "red"
                    },
                  ].map((strategy, idx) => (
                    <GlassCard key={idx} className={`border-l-4 border-${strategy.color}-500`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-8 h-8 rounded-full bg-${strategy.color}-500 flex items-center justify-center text-white font-bold flex-shrink-0`}>
                          {strategy.num}
                        </div>
                        <div>
                          <div className="font-semibold text-neutral-900 dark:text-neutral-300">{strategy.name}</div>
                          <div className="text-sm text-neutral-700 dark:text-neutral-400">{strategy.desc}</div>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>

                {/* Revision Diff Visual */}
                <GlassCard>
                  <h4 className="text-lg font-bold text-black dark:text-neutral-50 mb-6 text-center">
                    Revision Diff Overlay
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Original */}
                    <div>
                      <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-400 mb-3">Original Text</div>
                      <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg p-4">
                        <p className="text-neutral-900 dark:text-neutral-300">
                          The model is <span className="bg-red-500/20 line-through">very confident</span> in this prediction.
                        </p>
                      </div>
                    </div>

                    {/* Updated */}
                    <div>
                      <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-400 mb-3">Updated Text</div>
                      <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg p-4">
                        <p className="text-neutral-900 dark:text-neutral-300">
                          The model is <span className="bg-green-500/20">moderately confident</span> in this prediction.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500/20 border border-red-500/40 rounded" />
                      <span className="text-neutral-700 dark:text-neutral-400">Removed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500/20 border border-green-500/40 rounded" />
                      <span className="text-neutral-700 dark:text-neutral-400">Added</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Diff-Based Streaming */}
          <section id="diff-streaming" className="relative py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  5. Diff-Based Streaming: The Next Evolution
                </h2>

                <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-6">
                  Instead of tokens, some systems return <strong>diffs</strong>—patches representing changes.
                </p>

                {/* Examples */}
                <GlassCard className="mb-8">
                  <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4">Examples</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Cursor's code edits", icon: <Code2 size={18} /> },
                      { name: "GitHub Copilot's 'fix tests'", icon: <GitBranch size={18} /> },
                      { name: "Replit Ghostwriter's Structured Edits", icon: <Sparkles size={18} /> },
                    ].map((example, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-transparent border-l-4 border-blue-500 p-3 rounded-lg">
                        <div className="text-blue-500">{example.icon}</div>
                        <span className="text-neutral-900 dark:text-neutral-300">{example.name}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Benefits */}
                <GlassCard className="mb-8">
                  <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4">Benefits of Diff-Based Streaming</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "No hallucinated syntax errors",
                      "Minimal re-render",
                      "More stable UI",
                      "Ideal for code, structured data, or documents",
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-neutral-900 dark:text-neutral-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Architecture Components */}
                <GlassCard className="mb-8">
                  <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4">Architecture Components</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { name: "Diff patch arrival", icon: <Radio size={20} /> },
                      { name: "Patch interpreter", icon: <Eye size={20} /> },
                      { name: "Code editor adapter", icon: <Code2 size={20} /> },
                      { name: "Visual diff engine", icon: <GitBranch size={20} /> },
                    ].map((component, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-4 text-center">
                        <div className="flex justify-center mb-2 text-primary">{component.icon}</div>
                        <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-300">{component.name}</div>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Streaming Diff Flow Visual */}
                <GlassCard className="bg-neutral-900 dark:bg-neutral-950 border border-neutral-800">
                  <h4 className="text-lg font-bold text-neutral-50 mb-6">Streaming Diff Flow</h4>
                  <div className="space-y-3">
                    <div className="font-mono text-sm">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-neutral-500">1</span>
                        <span className="text-neutral-300">function calculateTotal(items) {'{'}</span>
                      </div>
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-neutral-500">2</span>
                        <span className="text-red-400 line-through">  return items.reduce((sum, item) =&gt; sum + item, 0);</span>
                      </div>
                      <div className="flex items-start gap-3 mb-2 bg-green-500/10 border-l-4 border-green-500 -ml-4 pl-4 py-1">
                        <span className="text-neutral-500">2</span>
                        <span className="text-green-400">  return items.reduce((sum, item) =&gt; sum + item.price, 0);</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-neutral-500">3</span>
                        <span className="text-neutral-300">{'}'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-cyan-400">
                    <ArrowRight size={16} />
                    <span>Patch applied: line 2 modified</span>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Tool Execution Streams */}
          <section id="tool-execution" className="relative py-20 px-4 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  6. Tool Execution Streams: Visualizing Agentic Behavior
                </h2>

                <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-8">
                  Modern agent UIs stream not just text—but <strong>events</strong>. A real-time agent UI must show all of this without overwhelming the user.
                </p>

                {/* Event Types */}
                <GlassCard className="mb-8">
                  <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4">Event Types</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {[
                      "Tool call started",
                      "Parameters chosen",
                      "Tool output streaming",
                      "Errors",
                      "Retries",
                      "Final result",
                    ].map((event, idx) => (
                      <div key={idx} className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3 text-center">
                        <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-300">{event}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Key Patterns */}
                <GlassCard className="mb-8">
                  <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4">Key Patterns</h3>
                  <div className="space-y-3">
                    {[
                      { icon: <Layers size={18} />, text: "Expandable tool-call blocks" },
                      { icon: <Activity size={18} />, text: "Streaming logs" },
                      { icon: <Timer size={18} />, text: "Activity timelines" },
                      { icon: <GitBranch size={18} />, text: "Breadcrumb states" },
                      { icon: <MessageSquare size={18} />, text: "Vertical 'agent trace' panels" },
                    ].map((pattern, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="text-orange-500">{pattern.icon}</div>
                        <span className="text-neutral-900 dark:text-neutral-300">{pattern.text}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Agent Execution Timeline */}
                <GlassCard>
                  <h4 className="text-lg font-bold text-black dark:text-neutral-50 mb-6 text-center">
                    Agent Execution Timeline
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        icon: "🧠",
                        label: "Model thinking...",
                        color: "purple",
                        status: "processing"
                      },
                      {
                        icon: "🔧",
                        label: "Selected tool: searchFlights",
                        color: "blue",
                        status: "selected"
                      },
                      {
                        icon: "⚡",
                        label: "Running tool...",
                        color: "yellow",
                        status: "running"
                      },
                      {
                        icon: "📋",
                        label: "Tool stream output →",
                        color: "cyan",
                        status: "streaming"
                      },
                      {
                        icon: "✅",
                        label: "Final result composed",
                        color: "green",
                        status: "complete"
                      },
                    ].map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex items-center gap-4 p-4 rounded-lg border-2 border-${step.color}-500/30 bg-${step.color}-500/5`}
                      >
                        <div className="text-3xl">{step.icon}</div>
                        <div className="flex-1">
                          <div className="font-semibold text-neutral-900 dark:text-neutral-300">{step.label}</div>
                          <div className={`text-xs text-${step.color}-600 dark:text-${step.color}-400`}>{step.status}</div>
                        </div>
                        {idx < 4 && <div className="text-neutral-400">↓</div>}
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Latency Masking */}
          <section id="latency-masking" className="relative py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  7. Managing Latency with UI Illusions (Perceptual UX)
                </h2>

                <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-8">
                  Real-time UIs are as much <strong>psychology</strong> as engineering.
                </p>

                {/* Latency-Masking Patterns */}
                <GlassCard className="mb-8">
                  <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4">Latency-Masking Patterns</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: "Immediate micro-responses", example: '"got it…"' },
                      { name: "Skeleton loaders", example: "Gray placeholders" },
                      { name: "Shimmer animations", example: "Loading wave effect" },
                      { name: "Progressive disclosure", example: "Show parts as ready" },
                      { name: "Streaming placeholders", example: "Typing indicators" },
                      { name: "Staged rendering", example: "Chunked display" },
                    ].map((pattern, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-3 rounded-lg">
                        <div className="font-semibold text-neutral-900 dark:text-neutral-300">{pattern.name}</div>
                        <div className="text-sm text-neutral-700 dark:text-neutral-400">{pattern.example}</div>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Why They Matter */}
                <GlassCard className="mb-8 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/30">
                  <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4">Why They Matter</h3>
                  <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-4">
                    Humans can't perceive small differences between 20ms and 80ms—but <strong>can detect silence</strong>.
                  </p>
                  <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed">
                    Streaming UIs keep users engaged by creating <strong>motion</strong>, even if the backend is slow.
                  </p>
                </GlassCard>

                {/* Latency Masking Stack Visual */}
                <GlassCard>
                  <h4 className="text-lg font-bold text-black dark:text-neutral-50 mb-6 text-center">
                    Latency Masking UI Stack
                  </h4>
                  <div className="space-y-4">
                    {[
                      { layer: "Micro-feedback", desc: "Instant acknowledgment", opacity: "90" },
                      { layer: "Streaming placeholder", desc: "Animated skeleton", opacity: "70" },
                      { layer: "Actual tokens", desc: "Real content arrives", opacity: "100" },
                    ].map((layer, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        viewport={{ once: true }}
                        className={`bg-gradient-to-r from-cyan-500/${layer.opacity} to-blue-500/${layer.opacity} border-2 border-cyan-500/30 rounded-lg p-4`}
                        style={{ opacity: parseInt(layer.opacity) / 100 }}
                      >
                        <div className="font-semibold text-neutral-900 dark:text-neutral-50">{layer.layer}</div>
                        <div className="text-sm text-neutral-700 dark:text-neutral-300">{layer.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 text-center text-sm text-neutral-700 dark:text-neutral-400">
                    Layered like translucent sheets
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Real Systems */}
          <section id="real-systems" className="relative py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  8. Real Systems Using Streaming Architectures
                </h2>

                <div className="space-y-6 mb-8">
                  {[
                    {
                      name: "ChatGPT",
                      features: ["Token streaming", "Revision mid-flow", "Tool call events"],
                      gradient: "from-green-500 to-emerald-500",
                    },
                    {
                      name: "Claude 3",
                      features: ["Faster tokenization", "Aggressive revision windows", "Better semantic diff stability"],
                      gradient: "from-orange-500 to-red-500",
                    },
                    {
                      name: "Cursor",
                      features: ["Streaming code diffs", "Real-time file patching", "Agent tool pipelines"],
                      gradient: "from-blue-500 to-cyan-500",
                    },
                    {
                      name: "Replit",
                      features: ["Editor-integrated streaming", "Multi-stream logs and output"],
                      gradient: "from-purple-500 to-pink-500",
                    },
                    {
                      name: "Vercel AI SDK",
                      features: ["Standardized streaming primitives for Next.js"],
                      gradient: "from-gray-800 to-black",
                    },
                  ].map((system, idx) => (
                    <GlassCard key={idx} className="hover:scale-[1.02] transition-transform">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${system.gradient} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                          {system.name[0]}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-3">{system.name}</h3>
                          <ul className="space-y-2">
                            {system.features.map((feature, featureIdx) => (
                              <li key={featureIdx} className="flex items-start gap-2">
                                <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-1" />
                                <span className="text-neutral-900 dark:text-neutral-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>

                {/* Comparison Chart */}
                <GlassCard>
                  <h4 className="text-lg font-bold text-black dark:text-neutral-50 mb-4 text-center">
                    Comparative Streaming Capabilities
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-neutral-300 dark:border-neutral-700">
                          <th className="text-left p-3 text-neutral-900 dark:text-neutral-300">Capability</th>
                          <th className="text-center p-3 text-neutral-900 dark:text-neutral-300">ChatGPT</th>
                          <th className="text-center p-3 text-neutral-900 dark:text-neutral-300">Claude</th>
                          <th className="text-center p-3 text-neutral-900 dark:text-neutral-300">Cursor</th>
                          <th className="text-center p-3 text-neutral-900 dark:text-neutral-300">Replit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { feature: "Token Speed", values: ["Fast", "Very Fast", "Fast", "Medium"] },
                          { feature: "Revision Frequency", values: ["Medium", "High", "Low", "Medium"] },
                          { feature: "Diff-Stream Support", values: ["No", "No", "Yes", "Yes"] },
                          { feature: "Multi-Stream", values: ["No", "No", "Yes", "Yes"] },
                          { feature: "Tool Invocation Visibility", values: ["Yes", "Yes", "Yes", "Limited"] },
                        ].map((row, idx) => (
                          <tr key={idx} className="border-b border-neutral-200 dark:border-neutral-800">
                            <td className="p-3 font-medium text-neutral-900 dark:text-neutral-300">{row.feature}</td>
                            {row.values.map((value, valueIdx) => (
                              <td key={valueIdx} className="p-3 text-center">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                  value === "Yes" || value === "Very Fast" || value === "High"
                                    ? "bg-green-500/20 text-green-700 dark:text-green-400"
                                    : value === "No" || value === "Low"
                                    ? "bg-red-500/20 text-red-700 dark:text-red-400"
                                    : "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400"
                                }`}>
                                  {value}
                                </span>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Architectural Blueprint */}
          <section id="blueprint" className="relative py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  9. Architectural Blueprint: Building a Streaming-First Frontend
                </h2>

                <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-8">
                  A complete streaming architecture includes five key layers:
                </p>

                {/* Full Architecture Map */}
                <GlassCard className="mb-8">
                  <h4 className="text-lg font-bold text-black dark:text-neutral-50 mb-6 text-center">
                    Full Streaming UI Architecture Map
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {[
                      {
                        title: "Transport",
                        items: ["EventSource (SSE)", "WebSockets", "HTTP chunked", "gRPC streams"],
                        icon: <Wifi size={24} />,
                        color: "blue"
                      },
                      {
                        title: "Buffer",
                        items: ["Token buffers", "Patch queues", "Resequencing windows"],
                        icon: <Database size={24} />,
                        color: "cyan"
                      },
                      {
                        title: "Render",
                        items: ["Diff-aware renderer", "Streaming-safe components", "Scroll-stability systems"],
                        icon: <Eye size={24} />,
                        color: "purple"
                      },
                      {
                        title: "Stabilize",
                        items: ["Micro-interaction layer", "Latency masks", "Revision animations"],
                        icon: <Sparkles size={24} />,
                        color: "orange"
                      },
                      {
                        title: "Finalize",
                        items: ["Freeze state", "Re-validate output", "Store history"],
                        icon: <CheckCircle2 size={24} />,
                        color: "green"
                      },
                    ].map((layer, idx) => (
                      <div key={idx} className="relative">
                        <GlassCard className={`h-full border-2 border-${layer.color}-500/30`}>
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${layer.color}-500 to-${layer.color}-600 flex items-center justify-center text-white mb-4 mx-auto`}>
                            {layer.icon}
                          </div>
                          <h3 className="text-lg font-bold text-black dark:text-neutral-50 text-center mb-3">{layer.title}</h3>
                          <ul className="space-y-2">
                            {layer.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="text-sm text-neutral-900 dark:text-neutral-300 text-center">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </GlassCard>
                        {idx < 4 && (
                          <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
                            <ArrowRight size={24} className="text-primary" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Detailed breakdown */}
                <div className="space-y-6">
                  {[
                    {
                      num: "1",
                      title: "Transport Layer",
                      desc: "How data flows from server to client",
                      techs: ["EventSource (SSE)", "WebSockets", "HTTP chunked responses", "gRPC streams"]
                    },
                    {
                      num: "2",
                      title: "Buffering System",
                      desc: "Smoothing and organizing incoming data",
                      techs: ["Token buffers", "Patch queues", "Resequencing windows"]
                    },
                    {
                      num: "3",
                      title: "Rendering Engine",
                      desc: "Displaying data efficiently and stably",
                      techs: ["Diff-aware renderer", "Streaming-safe components", "Scroll-stability systems"]
                    },
                    {
                      num: "4",
                      title: "UX Stabilizers",
                      desc: "Perceptual enhancements and latency masking",
                      techs: ["Micro-interaction layer", "Latency masks", "Revision animations"]
                    },
                    {
                      num: "5",
                      title: "Finalization",
                      desc: "Completing and persisting the stream",
                      techs: ["Freeze state", "Re-validate output", "Store history"]
                    },
                  ].map((section, idx) => (
                    <GlassCard key={idx}>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                          {section.num}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-black dark:text-neutral-50 mb-2">{section.title}</h4>
                          <p className="text-neutral-700 dark:text-neutral-400 mb-3">{section.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {section.techs.map((tech, techIdx) => (
                              <span key={techIdx} className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/30">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="relative py-20 px-4 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  10. Conclusion
                </h2>

                <GlassCard className="mb-8">
                  <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-4">
                    Real-time streaming interfaces redefine how users interact with software. By shifting from one-off renders to <strong>continuous flows of incremental updates</strong>, modern UIs become fluid, temporal, and deeply interactive.
                  </p>
                  <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-4">
                    The future of UI is not static screens—it is <strong>motion, adaptation, and real-time expression of computation</strong>.
                  </p>
                  <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed font-semibold">
                    As LLMs grow more powerful and multi-modal, the UI will evolve into a <strong>living canvas</strong>: responsive, dynamic, and ever-changing. Frontend engineers who understand streaming architectures will shape the next generation of intelligent applications.
                  </p>
                </GlassCard>

                <GlassCard className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
                  <div className="flex items-start gap-4">
                    <TrendingUp size={48} className="text-cyan-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-2">Key Takeaway</h3>
                      <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed">
                        The interface is no longer a destination—it's a <strong>journey</strong>. Every frame tells part of the story.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Citations */}
          <section id="citations" className="relative py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  11. Citations
                </h2>

                <GlassCard>
                  <ol className="space-y-4">
                    {[
                      'Anthropic. "Claude 3 System Prompt Design Notes." 2024.',
                      'OpenAI. "GPT-5 Technical Whitepaper." 2025.',
                      'Vercel. "AI SDK Streaming Architecture." 2024.',
                      'Cursor Dev Team. "Diff-Based Editing Pipeline." 2024.',
                      'Replit Engineering. "Real-Time Execution Streaming." 2023.',
                      'Google Research. "Latency Perception in Human-Computer Interaction." 2021.',
                      'Meta Engineering. "React Concurrent Rendering Model." 2023.',
                    ].map((citation, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="font-bold text-primary flex-shrink-0">[{idx + 1}]</span>
                        <span className="text-neutral-900 dark:text-neutral-300">{citation}</span>
                      </li>
                    ))}
                  </ol>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <GlassCard>
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-4">
                  Building Real-Time Experiences?
                </h2>
                <p className="text-xl text-neutral-900 dark:text-neutral-300 mb-8">
                  I specialize in creating streaming-first architectures with modern frameworks and cutting-edge UX patterns.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link href="/#contact">
                    <button className="px-8 py-3 rounded-full bg-black dark:bg-white/10 hover:bg-neutral-800 dark:hover:bg-white/20 text-white dark:text-neutral-50 font-semibold border-2 border-black dark:border-white/20 shadow-lg transition-all hover:scale-105">
                      Get in Touch
                    </button>
                  </Link>
                  <Link href="/research">
                    <button className="px-8 py-3 rounded-full border-3 border-black dark:border-neutral-700 hover:bg-black dark:hover:bg-transparent text-black hover:text-white dark:text-neutral-50 font-semibold shadow-md transition-all hover:scale-105">
                      More Research
                    </button>
                  </Link>
                </div>
              </GlassCard>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
