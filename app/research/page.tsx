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
import { FileText, Search, User, Briefcase, Code2, Mail, ExternalLink, Calendar, Clock, Award } from "lucide-react";
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

// Research articles data
const researchArticles = [
  {
    title: "The Architecture of Real-Time Streaming Interfaces: UI as a Live Data Canvas",
    description: "An exploration of how modern software is shifting from static screens to continuous, flow-based interaction. Examining token streaming, revision management, diff-based rendering, and the psychology of real-time UX.",
    date: "2025-01",
    readTime: "20 min read",
    tags: ["Streaming", "Real-time", "UI/UX", "Performance", "Architecture"],
    slug: "streaming-ui-architecture",
    category: "Research Paper",
  },
  {
    title: "AI-Native UI Design: Building Interfaces for Probabilistic Systems",
    description: "A comprehensive exploration of how AI is fundamentally reshaping frontend engineering—from deterministic UIs to probabilistic, model-influenced interfaces that stream, revise, and adapt in real-time.",
    date: "2025-01",
    readTime: "25 min read",
    tags: ["AI/ML", "UI/UX", "React", "Architecture", "LLMs"],
    slug: "ai-native-ui-design",
    category: "Research Paper",
  },
];

export default function ResearchPage() {
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
          <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-32 pb-20">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-neutral-50">
                  Research & Writing
                </h1>
                <p className="text-xl md:text-2xl text-neutral-900 dark:text-neutral-300 max-w-3xl mx-auto">
                  Technical articles, engineering insights, and deep dives into modern software development.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Research Articles Grid */}
          <section className="relative py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {researchArticles.map((article, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Link href={`/research/${article.slug}`}>
                      <GlassCard className="group cursor-pointer hover:scale-[1.02] transition-all duration-300 h-full flex flex-col">
                        {/* Category Badge */}
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-accent border border-accent/30">
                            {article.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3 group-hover:text-primary transition-colors">
                          {article.title}
                        </h2>

                        {/* Description */}
                        <p className="text-neutral-800 dark:text-neutral-300 mb-4 leading-relaxed flex-grow">
                          {article.description}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center gap-4 mb-4 text-sm text-neutral-700 dark:text-neutral-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{article.readTime}</span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="px-2 py-1 text-xs rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Read More Link */}
                        <div className="mt-auto">
                          <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                            Read Article
                            <ExternalLink size={16} />
                          </span>
                        </div>
                      </GlassCard>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Coming Soon Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <GlassCard className="text-center py-12">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
                    More Articles Coming Soon
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-400 mb-4">
                    Currently working on new technical deep dives and engineering insights.
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-500">
                    Want to be notified? <Link href="/#contact" className="text-primary hover:underline">Get in touch</Link>
                  </p>
                </GlassCard>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
