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
import { FileText, Search, User, Briefcase, Code2, Mail, ExternalLink, ArrowRight, Award } from "lucide-react";
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

// Case studies data
const caseStudies = [
  {
    title: "Alljoy Bike & Beach Rental: Complete Operations Automation",
    description: "A custom rental platform built from scratch featuring digital waivers, intelligent route optimization, and automated customer communications that transformed a local business into a digital-first operation.",
    metrics: ["2.5 hours saved daily", "Zero paper waivers", "Automated routing & alerts"],
    tags: ["Next.js", "AWS Lambda", "DocuSign", "Google Maps API", "Booqable"],
    slug: "alljoy-bike-rental",
    image: "/projects/alljoybike.png",
  },
];

export default function CaseStudiesPage() {
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
                  Case Studies
                </h1>
                <p className="text-xl md:text-2xl text-neutral-900 dark:text-neutral-300 max-w-3xl mx-auto">
                  Deep dives into real projects: challenges faced, solutions implemented, and measurable results achieved.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="relative py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 gap-8">
                {caseStudies.map((study, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Link href={`/case-studies/${study.slug}`}>
                      <GlassCard className="group cursor-pointer hover:scale-[1.02] transition-all duration-300">
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Image */}
                          <div className="relative h-64 md:h-full rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                            {study.image && (
                              <img
                                src={study.image}
                                alt={study.title}
                                className="w-full h-full object-cover"
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          </div>

                          {/* Content */}
                          <div className="flex flex-col justify-between">
                            <div>
                              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4 group-hover:text-primary transition-colors">
                                {study.title}
                              </h2>
                              <p className="text-neutral-800 dark:text-neutral-300 mb-6 leading-relaxed">
                                {study.description}
                              </p>

                              {/* Metrics */}
                              <div className="mb-6 space-y-2">
                                {study.metrics.map((metric, metricIdx) => (
                                  <div key={metricIdx} className="flex items-center gap-2">
                                    <ArrowRight size={16} className="text-primary flex-shrink-0" />
                                    <span className="text-sm text-neutral-700 dark:text-neutral-400">{metric}</span>
                                  </div>
                                ))}
                              </div>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-2">
                                {study.tags.map((tag, tagIdx) => (
                                  <span
                                    key={tagIdx}
                                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Read More Link */}
                            <div className="mt-6">
                              <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                                Read Full Case Study
                                <ExternalLink size={18} />
                              </span>
                            </div>
                          </div>
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
                    More Case Studies Coming Soon
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-400">
                    Currently documenting additional projects and their outcomes.
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
