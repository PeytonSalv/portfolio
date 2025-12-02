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
  CheckCircle2,
  XCircle,
  Zap,
  RefreshCw,
  Database,
  Shield,
  Eye,
  GitBranch,
  Cpu,
  BookOpen,
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
  { id: "deterministic-to-probabilistic", title: "Deterministic → Probabilistic UI" },
  { id: "dynamic-components", title: "Designing Components for Dynamic LLM Output" },
  { id: "handling-uncertainty", title: "Handling Uncertainty" },
  { id: "prompt-driven", title: "Prompt-Driven Micro-Frontends" },
  { id: "ui-patterns", title: "UI Patterns for AI Copilots" },
  { id: "real-world", title: "Real-World Systems" },
  { id: "architecture", title: "Architectural Requirements" },
  { id: "conclusion", title: "Conclusion" },
  { id: "citations", title: "Citations" },
];

export default function AIResearchPaper() {
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
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                    Research Paper
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-neutral-50 leading-tight">
                  AI-Native UI Design: Building Interfaces for Probabilistic Systems
                </h1>
                <p className="text-xl md:text-2xl text-neutral-900 dark:text-neutral-300 mb-8">
                  How AI is fundamentally reshaping frontend engineering—from deterministic UIs to probabilistic, model-influenced interfaces
                </p>

                <div className="flex gap-6 justify-center items-center text-neutral-700 dark:text-neutral-400 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>January 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>25 min read</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {["AI/ML", "UI/UX", "React", "Architecture", "LLMs"].map((tag, idx) => (
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
                  1. Introduction
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-4">
                    Historically, the UI has been the most <strong>deterministic layer</strong> of the software stack. Backend systems may involve randomness, distributed state, or network uncertainty, but the UI was always authored pixel-by-pixel and behavior-by-behavior. The rise of AI-native applications disrupts this foundation entirely.
                  </p>
                  <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-6">
                    Modern interfaces rely on generative models that can:
                  </p>
                  <GlassCard className="mb-6">
                    <ul className="space-y-3">
                      {[
                        "Stream text or structured data",
                        "Revise answers after they appear",
                        "Generate UI-ready JSON",
                        "Hallucinate or contradict themselves",
                        "Trigger new downstream UI or agentic actions",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Zap size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="text-neutral-900 dark:text-neutral-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                  <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed">
                    As a result, frontends are shifting from <strong>static screens</strong> to <strong>dynamic, conversational, and model-informed interfaces</strong>.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Deterministic to Probabilistic */}
          <section id="deterministic-to-probabilistic" className="relative py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  2. Deterministic UI → Probabilistic UI
                </h2>

                <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-8">
                  Traditional UIs follow a predictable loop, but AI-native UIs behave fundamentally differently.
                </p>

                {/* Visual Comparison */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Deterministic UI */}
                  <GlassCard className="border-2 border-green-500/30">
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4 flex items-center gap-2">
                      <CheckCircle2 size={24} className="text-green-500" />
                      Deterministic UI
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 p-4 rounded-lg border border-green-500/20">
                        <code className="text-sm text-neutral-900 dark:text-neutral-300">
                          State → UI → Action → New State
                        </code>
                      </div>
                      <ul className="space-y-2">
                        {[
                          { icon: <CheckCircle2 size={16} />, text: "Static layout" },
                          { icon: <CheckCircle2 size={16} />, text: "Predictable flows" },
                          { icon: <CheckCircle2 size={16} />, text: "Hard-coded text" },
                          { icon: <CheckCircle2 size={16} />, text: "No revision" },
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-neutral-900 dark:text-neutral-300">
                            <span className="text-green-500">{item.icon}</span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>

                  {/* AI-Native UI */}
                  <GlassCard className="border-2 border-purple-500/30">
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4 flex items-center gap-2">
                      <Zap size={24} className="text-purple-500" />
                      AI-Native UI
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 p-4 rounded-lg border border-purple-500/20">
                        <code className="text-sm text-neutral-900 dark:text-neutral-300">
                          State → Prompt → Probabilistic Output → Adaptive UI → Loop
                        </code>
                      </div>
                      <ul className="space-y-2">
                        {[
                          { icon: <Zap size={16} />, text: "Dynamic layouts" },
                          { icon: <GitBranch size={16} />, text: "Branching flows" },
                          { icon: <Cpu size={16} />, text: "LLM-influenced microcopy" },
                          { icon: <RefreshCw size={16} />, text: "Frequent revisions" },
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-neutral-900 dark:text-neutral-300">
                            <span className="text-purple-500">{item.icon}</span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </div>

                {/* Flow Diagram */}
                <GlassCard>
                  <h4 className="text-lg font-bold text-black dark:text-neutral-50 mb-6 text-center">
                    Flow Architecture Comparison
                  </h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: Deterministic */}
                    <div className="space-y-4">
                      <div className="text-center font-semibold text-green-600 dark:text-green-400 mb-4">
                        Deterministic Flow
                      </div>
                      {["State", "UI", "Action", "New State"].map((step, idx) => (
                        <div key={idx}>
                          <div className="bg-green-500/10 border-2 border-green-500/30 rounded-lg p-4 text-center">
                            <span className="font-medium text-neutral-900 dark:text-neutral-300">{step}</span>
                          </div>
                          {idx < 3 && (
                            <div className="flex justify-center py-2">
                              <ArrowRight size={24} className="text-green-500 rotate-90" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Right: AI-Native */}
                    <div className="space-y-4">
                      <div className="text-center font-semibold text-purple-600 dark:text-purple-400 mb-4">
                        AI-Native Flow
                      </div>
                      {["State", "Prompt", "LLM Output", "Adaptive UI", "New Loop"].map((step, idx) => (
                        <div key={idx}>
                          <div className="bg-purple-500/10 border-2 border-purple-500/30 rounded-lg p-4 text-center relative">
                            <span className="font-medium text-neutral-900 dark:text-neutral-300">{step}</span>
                            {step === "LLM Output" && (
                              <div className="absolute -right-2 -top-2">
                                <div className="w-6 h-6 bg-yellow-500 rounded-full animate-pulse" />
                              </div>
                            )}
                          </div>
                          {idx < 4 && (
                            <div className="flex justify-center py-2">
                              <GitBranch size={24} className="text-purple-500 rotate-90" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Dynamic Components */}
          <section id="dynamic-components" className="relative py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  3. Designing Components for Dynamic LLM Output
                </h2>

                <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-6">
                  In AI-native environments, components no longer simply render data—they <strong>interpret it</strong>. Components must be able to:
                </p>

                <GlassCard className="mb-8">
                  <ol className="space-y-3">
                    {[
                      "Parse model output",
                      "Validate using schemas",
                      "Repair missing or malformed fields",
                      "Render dynamic UI",
                      "Handle streaming and revisions",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-neutral-900 dark:text-neutral-300 mt-0.5">{item}</span>
                      </li>
                    ))}
                  </ol>
                </GlassCard>

                <h3 className="text-2xl font-bold text-black dark:text-neutral-50 mb-4">
                  The "Interpreter Component" Pattern
                </h3>

                <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-6">
                  Instead of a traditional component that receives a fixed prop shape, interpreter components take in raw or semi-structured AI output and enforce stability.
                </p>

                {/* Pipeline Visual */}
                <GlassCard>
                  <h4 className="text-lg font-bold text-black dark:text-neutral-50 mb-6 text-center">
                    Interpreter Component Pipeline
                  </h4>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="bg-red-500/10 border-2 border-red-500/30 rounded-lg p-4 text-center">
                        <div className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Input</div>
                        <div className="font-medium text-neutral-900 dark:text-neutral-300">Raw LLM Output</div>
                        <div className="text-xs text-neutral-700 dark:text-neutral-400 mt-2">May be malformed</div>
                      </div>
                    </div>

                    <ArrowRight size={32} className="text-primary hidden md:block" />
                    <div className="md:hidden"><ArrowRight size={32} className="text-primary rotate-90" /></div>

                    <div className="flex-1">
                      <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg p-4 text-center">
                        <div className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 mb-2">Process</div>
                        <div className="font-medium text-neutral-900 dark:text-neutral-300">Interpreter</div>
                        <div className="text-xs text-neutral-700 dark:text-neutral-400 mt-2">Parse + Validate</div>
                      </div>
                    </div>

                    <ArrowRight size={32} className="text-primary hidden md:block" />
                    <div className="md:hidden"><ArrowRight size={32} className="text-primary rotate-90" /></div>

                    <div className="flex-1">
                      <div className="bg-green-500/10 border-2 border-green-500/30 rounded-lg p-4 text-center">
                        <div className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Output</div>
                        <div className="font-medium text-neutral-900 dark:text-neutral-300">UI Renderer</div>
                        <div className="text-xs text-neutral-700 dark:text-neutral-400 mt-2">Safe to display</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-neutral-300 dark:border-neutral-700">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-2">
                        <Shield size={18} className="text-yellow-500 flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold text-neutral-900 dark:text-neutral-300 text-sm">Hallucination Handling</div>
                          <div className="text-xs text-neutral-700 dark:text-neutral-400">Detect and flag uncertain content</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Database size={18} className="text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold text-neutral-900 dark:text-neutral-300 text-sm">Schema Enforcement</div>
                          <div className="text-xs text-neutral-700 dark:text-neutral-400">Zod/Valibot validation</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                {/* Code Example */}
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-black dark:text-neutral-50 mb-4">Example Implementation</h4>
                  <GlassCard className="bg-neutral-900 dark:bg-neutral-950 border border-neutral-800">
                    <pre className="text-sm text-green-400 overflow-x-auto">
{`// Interpreter Component Pattern
import { z } from 'zod';

const TaskSchema = z.object({
  title: z.string(),
  priority: z.enum(['low', 'medium', 'high']),
  completed: z.boolean().default(false)
});

function TaskInterpreter({ llmOutput }: { llmOutput: unknown }) {
  try {
    // Parse and validate LLM output
    const validated = TaskSchema.parse(llmOutput);

    return <TaskCard task={validated} />;
  } catch (error) {
    // Graceful degradation
    return <ErrorFallback error={error} />;
  }
}`}
                    </pre>
                  </GlassCard>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Handling Uncertainty */}
          <section id="handling-uncertainty" className="relative py-20 px-4 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  4. Handling Uncertainty: Streaming, Revisions, and Corrections
                </h2>

                <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-8">
                  AI output introduces <strong>temporal uncertainty</strong>—answers often change mid-stream.
                </p>

                {/* Three Patterns */}
                <div className="space-y-6 mb-8">
                  {/* Streaming UIs */}
                  <GlassCard>
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4 flex items-center gap-2">
                      <Zap size={24} className="text-blue-500" />
                      4.1 Streaming UIs
                    </h3>
                    <p className="text-neutral-900 dark:text-neutral-300 mb-4">Requirements:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Token-level rendering",
                        "Interim UI states",
                        "Backpressure handling",
                        "Optimistic streaming",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-neutral-900 dark:text-neutral-300">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>

                  {/* Revision UIs */}
                  <GlassCard>
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4 flex items-center gap-2">
                      <RefreshCw size={24} className="text-purple-500" />
                      4.2 Revision UIs
                    </h3>
                    <p className="text-neutral-900 dark:text-neutral-300 mb-4">
                      Modern LLMs revise earlier text during generation. The UI must support:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Rollback animations",
                        "Semantic diffing",
                        "Preserving scroll positions",
                        "Visual diff indicators",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-neutral-900 dark:text-neutral-300">
                          <div className="w-2 h-2 rounded-full bg-purple-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>

                  {/* Hallucination Policing */}
                  <GlassCard>
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4 flex items-center gap-2">
                      <Shield size={24} className="text-red-500" />
                      4.3 Hallucination Policing
                    </h3>
                    <p className="text-neutral-900 dark:text-neutral-300 mb-4">
                      Frontends must prevent model errors from misleading users through:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Fact validation",
                        "Trust indicators",
                        "Citation badges",
                        "Uncertainty highlighting",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-neutral-900 dark:text-neutral-300">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>

                {/* Timeline Visual */}
                <GlassCard>
                  <h4 className="text-lg font-bold text-black dark:text-neutral-50 mb-6 text-center">
                    Streaming & Revision Timeline
                  </h4>
                  <div className="relative">
                    {/* Timeline bar */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2" />

                    {/* Timeline steps */}
                    <div className="relative flex justify-between items-center">
                      {[
                        { label: "Token Stream", color: "blue" },
                        { label: "Revision", color: "purple" },
                        { label: "Finalized", color: "green" },
                      ].map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full bg-${step.color}-500 flex items-center justify-center text-white font-bold shadow-lg z-10 mb-2`}>
                            {idx + 1}
                          </div>
                          <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-300 text-center">
                            {step.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 text-center text-sm text-neutral-700 dark:text-neutral-400">
                    Earlier text can be overwritten as the model refines its output
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Prompt-Driven Micro-Frontends */}
          <section id="prompt-driven" className="relative py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  5. Prompt-Driven Micro-Frontends
                </h2>

                <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-6">
                  One of the most powerful emerging concepts is the <strong>prompt-driven micro-frontend</strong>. Instead of manually coding every UI variation, the LLM generates structured UI instructions.
                </p>

                {/* JSON Example */}
                <GlassCard className="mb-8 bg-neutral-900 dark:bg-neutral-950 border border-neutral-800">
                  <div className="text-sm font-semibold text-green-400 mb-2">Example LLM Output:</div>
                  <pre className="text-sm text-neutral-300 overflow-x-auto">
{`{
  "component": "CardList",
  "items": [
    {
      "title": "Fix broken test",
      "priority": "high",
      "assignee": "Alice"
    },
    {
      "title": "Add login flow",
      "priority": "medium",
      "assignee": "Bob"
    }
  ]
}`}
                  </pre>
                </GlassCard>

                <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-6">
                  The frontend then:
                </p>

                <GlassCard className="mb-8">
                  <ol className="space-y-4">
                    {[
                      { step: "Parses JSON", desc: "Extract structured data from LLM response" },
                      { step: "Maps to component", desc: "Match component name to registered components" },
                      { step: "Renders dynamically", desc: "Generate UI from data" },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <div>
                          <div className="font-semibold text-neutral-900 dark:text-neutral-300">{item.step}</div>
                          <div className="text-sm text-neutral-700 dark:text-neutral-400">{item.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </GlassCard>

                <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-8">
                  This is how products like <strong>Notion AI</strong>, <strong>Figma AI</strong>, and <strong>Cursor</strong> generate modular UI blocks.
                </p>

                {/* Cycle Diagram */}
                <GlassCard>
                  <h4 className="text-lg font-bold text-black dark:text-neutral-50 mb-6 text-center">
                    Prompt-Driven UI Cycle
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "User Prompt", icon: <User size={24} />, color: "blue" },
                      { label: "LLM Generates JSON", icon: <Cpu size={24} />, color: "purple" },
                      { label: "Component Mapper", icon: <Code2 size={24} />, color: "orange" },
                      { label: "Rendered UI", icon: <Eye size={24} />, color: "green" },
                    ].map((step, idx) => (
                      <div key={idx} className="relative">
                        <div className={`bg-${step.color}-500/10 border-2 border-${step.color}-500/30 rounded-lg p-4 text-center`}>
                          <div className="flex justify-center mb-2 text-neutral-900 dark:text-neutral-300">
                            {step.icon}
                          </div>
                          <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-300">
                            {step.label}
                          </div>
                        </div>
                        {idx < 3 && (
                          <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                            <ArrowRight size={20} className="text-primary" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center gap-2 text-primary">
                      <RefreshCw size={18} />
                      <span className="text-sm font-semibold">Feedback loop for iterative refinement</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* UI Patterns for AI Copilots */}
          <section id="ui-patterns" className="relative py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  6. UI Patterns for AI Copilots and Autonomous Assistants
                </h2>

                <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-8">
                  AI copilots introduce new multi-phase UI patterns that traditional interfaces never needed.
                </p>

                <div className="space-y-6 mb-8">
                  {/* Observability Panels */}
                  <GlassCard>
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4">6.1 Observability Panels</h3>
                    <p className="text-neutral-900 dark:text-neutral-300 mb-4">Copilots require transparent state displays:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {["Logs", "Reasoning traces", "Tool invocation status", "Context windows"].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-neutral-900 dark:text-neutral-300">
                          <Eye size={16} className="text-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>

                  {/* Multi-State Message Blocks */}
                  <GlassCard>
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4">6.2 Multi-State Message Blocks</h3>
                    <p className="text-neutral-900 dark:text-neutral-300 mb-4">Messages may transition through multiple states:</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: "loading", color: "gray" },
                        { label: "streaming", color: "blue" },
                        { label: "revising", color: "yellow" },
                        { label: "invoking tool", color: "orange" },
                        { label: "finalizing", color: "green" },
                      ].map((state, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 text-sm rounded-full bg-${state.color}-500/20 border border-${state.color}-500/40 text-${state.color}-700 dark:text-${state.color}-300`}
                        >
                          {state.label}
                        </span>
                      ))}
                    </div>
                  </GlassCard>

                  {/* Prediction-Aware UI */}
                  <GlassCard>
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4">6.3 Prediction-Aware UI</h3>
                    <p className="text-neutral-900 dark:text-neutral-300 mb-4">The UI may show uncertainty metrics:</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-500/10 to-transparent rounded-lg border border-green-500/20">
                        <span className="text-neutral-900 dark:text-neutral-300">Model confidence</span>
                        <span className="font-bold text-green-600 dark:text-green-400">High (92%)</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-lg border border-yellow-500/20">
                        <span className="text-neutral-900 dark:text-neutral-300">Uncertainty</span>
                        <span className="font-bold text-yellow-600 dark:text-yellow-400">Medium</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-500/10 to-transparent rounded-lg border border-blue-500/20">
                        <span className="text-neutral-900 dark:text-neutral-300">Alternative suggestions</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">3 available</span>
                      </div>
                    </div>
                  </GlassCard>

                  {/* Agentic UI Zones */}
                  <GlassCard>
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4">6.4 Agentic UI Zones</h3>
                    <p className="text-neutral-900 dark:text-neutral-300 mb-4">
                      Sections of the UI where the AI can act autonomously (similar to GitHub Copilot or Playwright Healer Agent).
                    </p>
                    <div className="bg-purple-500/10 border-2 border-purple-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                        <span className="font-semibold text-neutral-900 dark:text-neutral-300">Agent Active</span>
                      </div>
                      <div className="text-sm text-neutral-700 dark:text-neutral-400">
                        AI is making autonomous changes to your code...
                      </div>
                    </div>
                  </GlassCard>
                </div>

                {/* State Machine */}
                <GlassCard>
                  <h4 className="text-lg font-bold text-black dark:text-neutral-50 mb-6 text-center">
                    AI Copilot State Machine
                  </h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      { state: "idle", color: "gray" },
                      { state: "generating", color: "blue" },
                      { state: "streaming", color: "cyan" },
                      { state: "revising", color: "yellow" },
                      { state: "invoking tool", color: "orange" },
                      { state: "tool result", color: "purple" },
                      { state: "final", color: "green" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`px-4 py-2 rounded-lg bg-${item.color}-500/20 border-2 border-${item.color}-500/40`}>
                          <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-300">{item.state}</span>
                        </div>
                        {idx < 6 && <ArrowRight size={18} className="text-primary hidden lg:block" />}
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Real-World Systems */}
          <section id="real-world" className="relative py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  7. Real-World Systems Exhibiting AI-Native UI Patterns
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      name: "Notion AI",
                      features: ["Generates content blocks", "Revises and restructures documents", "Structured block-level output"],
                      gradient: "from-blue-500 to-purple-500",
                    },
                    {
                      name: "Figma AI",
                      features: ["Generates UI layouts", "Interprets design constraints", "Suggests auto-layout configurations"],
                      gradient: "from-purple-500 to-pink-500",
                    },
                    {
                      name: "Cursor",
                      features: ["Streaming diff-based code editing", "Agentic tool executions with visible results", "Revision-aware overlays"],
                      gradient: "from-orange-500 to-red-500",
                    },
                    {
                      name: "Playwright Healer Agent",
                      features: ["Generates repair suggestions for broken tests", "Automatically updates selectors and code", "Uses structured output enforced by schemas"],
                      gradient: "from-green-500 to-emerald-500",
                    },
                  ].map((system, idx) => (
                    <GlassCard key={idx} className="hover:scale-[1.02] transition-transform">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${system.gradient} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                          {idx + 1}
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

                {/* Comparison Table */}
                <div className="mt-8">
                  <GlassCard>
                    <h4 className="text-lg font-bold text-black dark:text-neutral-50 mb-4 text-center">
                      Feature Comparison Matrix
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-neutral-300 dark:border-neutral-700">
                            <th className="text-left p-3 text-neutral-900 dark:text-neutral-300">Feature</th>
                            <th className="text-center p-3 text-neutral-900 dark:text-neutral-300">Notion</th>
                            <th className="text-center p-3 text-neutral-900 dark:text-neutral-300">Figma</th>
                            <th className="text-center p-3 text-neutral-900 dark:text-neutral-300">Cursor</th>
                            <th className="text-center p-3 text-neutral-900 dark:text-neutral-300">Playwright</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { feature: "Streaming", values: [true, false, true, false] },
                            { feature: "Revisions", values: [true, true, true, true] },
                            { feature: "Micro-frontends", values: [true, true, false, false] },
                            { feature: "Structured JSON", values: [true, true, false, true] },
                            { feature: "Tool Invocation", values: [false, false, true, true] },
                          ].map((row, idx) => (
                            <tr key={idx} className="border-b border-neutral-200 dark:border-neutral-800">
                              <td className="p-3 font-medium text-neutral-900 dark:text-neutral-300">{row.feature}</td>
                              {row.values.map((value, valueIdx) => (
                                <td key={valueIdx} className="p-3 text-center">
                                  {value ? (
                                    <CheckCircle2 size={20} className="text-green-500 mx-auto" />
                                  ) : (
                                    <XCircle size={20} className="text-neutral-400 mx-auto" />
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Architectural Requirements */}
          <section id="architecture" className="relative py-20 px-4 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  8. Architectural Requirements for AI-Native Frontends
                </h2>

                <div className="space-y-6">
                  {/* RSC */}
                  <GlassCard>
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4 flex items-center gap-2">
                      <Code2 size={24} className="text-blue-500" />
                      8.1 Server Streaming with React Server Components (RSC)
                    </h3>
                    <p className="text-neutral-900 dark:text-neutral-300 mb-4">RSC enables:</p>
                    <ul className="space-y-2">
                      {["Server-side token streaming", "Partial hydration", "Fast low-latency renders"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-neutral-900 dark:text-neutral-300">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>

                  {/* Schema Validation */}
                  <GlassCard>
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4 flex items-center gap-2">
                      <Shield size={24} className="text-green-500" />
                      8.2 Schema Validation (Zod, Valibot)
                    </h3>
                    <p className="text-neutral-900 dark:text-neutral-300">
                      Essential for preventing malformed LLM output from breaking the UI. Type-safe parsing ensures runtime safety.
                    </p>
                  </GlassCard>

                  {/* Conversational State Machines */}
                  <GlassCard>
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4 flex items-center gap-2">
                      <GitBranch size={24} className="text-purple-500" />
                      8.3 Conversational State Machines
                    </h3>
                    <p className="text-neutral-900 dark:text-neutral-300 mb-4">AI UIs require:</p>
                    <ul className="space-y-2">
                      {["Multi-step reasoning flows", "Tool invocation chains", "Context accumulation"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-neutral-900 dark:text-neutral-300">
                          <div className="w-2 h-2 rounded-full bg-purple-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>

                  {/* Vector Store Integration */}
                  <GlassCard>
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4 flex items-center gap-2">
                      <Database size={24} className="text-orange-500" />
                      8.4 Vector Store Integration
                    </h3>
                    <p className="text-neutral-900 dark:text-neutral-300 mb-4">Frontends may require session memory for:</p>
                    <ul className="space-y-2">
                      {["Personalization", "Conversation continuity", "Context retrieval"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-neutral-900 dark:text-neutral-300">
                          <div className="w-2 h-2 rounded-full bg-orange-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>

                  {/* User Agency */}
                  <GlassCard>
                    <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-4 flex items-center gap-2">
                      <Eye size={24} className="text-red-500" />
                      8.5 User Agency and Safety
                    </h3>
                    <p className="text-neutral-900 dark:text-neutral-300 mb-4">AI-native systems must provide:</p>
                    <ul className="space-y-2">
                      {["Undo controls", "Inspectability of model actions", "Correction tools", "Transparent reasoning"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-neutral-900 dark:text-neutral-300">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="relative py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  9. Conclusion
                </h2>

                <GlassCard className="mb-8">
                  <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-4">
                    AI-native UIs represent the <strong>biggest shift in frontend engineering since React itself</strong>. Deterministic UIs are giving way to probabilistic, adaptive, and model-influenced interfaces.
                  </p>
                  <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed mb-4">
                    Engineers must now build interfaces that:
                  </p>
                  <ul className="space-y-3 mb-4">
                    {[
                      "Interpret uncertain output",
                      "Manage revisions in real-time",
                      "Orchestrate agentic behavior",
                      "Maintain trust through transparency",
                      "Enforce safety through validation",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Zap size={20} className="text-primary flex-shrink-0 mt-1" />
                        <span className="text-neutral-900 dark:text-neutral-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed font-semibold">
                    AI-native UI design is not merely a trend—it is a foundational new discipline. The developers who understand it will design the next generation of software.
                  </p>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Citations */}
          <section id="citations" className="relative py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-6">
                  10. Citations
                </h2>

                <GlassCard>
                  <ol className="space-y-4">
                    {[
                      'OpenAI. "GPT-5 Technical Report." 2025.',
                      'Anthropic. "Claude 3 Model Architecture." 2024.',
                      'Figma. "AI & Auto Layout Research Notes." 2024.',
                      'GitHub. "Copilot Interaction Model." 2023.',
                      'Microsoft. "Playwright Healer Agent Research Paper." 2025.',
                      'Notion. "Notion AI Content Block System." 2023.',
                      'Meta Engineering. "React Server Components: Architecture Overview." 2024.',
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
                  Interested in AI-Native Development?
                </h2>
                <p className="text-xl text-neutral-900 dark:text-neutral-300 mb-8">
                  I specialize in building cutting-edge AI-powered applications with modern frontend architectures.
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
