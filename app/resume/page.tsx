"use client";

import { motion } from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { GlassCard } from "@/components/ui/glass-card";
import { Footer } from "@/components/ui/footer";
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
  Download,
  MapPin,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Calendar,
  Award,
  Zap,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "About", link: "/#about", icon: <User size={18} /> },
  { name: "Experience", link: "/#experience", icon: <Briefcase size={18} /> },
  { name: "Projects", link: "/#projects", icon: <Code2 size={18} /> },
  { name: "Case Studies", link: "/case-studies", icon: <FileText size={18} /> },
  { name: "Research", link: "/research", icon: <Search size={18} /> },
  { name: "Contact", link: "/#contact", icon: <Mail size={18} /> },
];

const contactInfo = [
  { icon: <Mail size={16} />, text: "peytonsalvant5461@outlook.com", link: "mailto:peytonsalvant5461@outlook.com" },
  { icon: <Phone size={16} />, text: "(850) 555-0123", link: "tel:8505550123" },
  { icon: <MapPin size={16} />, text: "Miami, FL (Remote)", link: null },
  { icon: <Linkedin size={16} />, text: "linkedin.com/in/peytonsalvant", link: "https://linkedin.com/in/peytonsalvant" },
  { icon: <Github size={16} />, text: "github.com/peytonsalvant", link: "https://github.com/peytonsalvant" },
];

const experience = [
  {
    title: "Software Engineer",
    company: "Gemini Sports AI",
    location: "Miami, FL (Remote)",
    period: "Jul 2025 - Present",
    achievements: [
      "Lead frontend development for AI-powered scouting tools using React Native + TypeScript",
      "Architected and shipped Big Boards, a Kanban-style player management system used by professional scouts",
      "Implemented high-performance UI systems optimized for real-time data and drag-and-drop interactions",
      "Built automated test coverage with Playwright to improve reliability and prevent regressions",
      "Partner with founders, data engineers, and product to define technical direction",
    ],
  },
  {
    title: "Software Engineer",
    company: "Cascade Core Solutions",
    location: "Remote",
    period: "Aug 2023 - Nov 2025",
    achievements: [
      "Developed user-friendly websites and applications using React, Next.js, and Tailwind CSS",
      "Automated backend processes through API integration using AWS Lambda",
      "Managed client relationships from outreach to delivery, ensuring technical alignment",
      "Built production applications serving real businesses with 99.9% uptime",
    ],
  },
  {
    title: "Head of Philanthropy Committee",
    company: "Phi Kappa Psi Fraternity",
    location: "Tuscaloosa, AL",
    period: "Dec 2023 - Dec 2024",
    achievements: [
      "Led record-breaking fundraising campaign that multiplied donations by 20x for Hunter's Pledge",
      "Coordinated cross-functional teams through strategic planning and communication",
      "Strengthened community engagement through successful event execution",
    ],
  },
  {
    title: "Project Development Manager Intern",
    company: "Upwork",
    location: "San Francisco Bay Area (Remote)",
    period: "Dec 2022 - May 2023",
    achievements: [
      "Automated installation and testing processes, reducing testing time by 30%",
      "Improved project efficiency by 20% through research, data analysis, and reporting",
      "Assisted clients with technical issues and coordinated with lead developers",
    ],
  },
];

const projects = [
  {
    name: "Alljoy Bike & Beach Rental",
    description: "Custom rental platform with Next.js, AWS, Stripe payments, and Booqable API integration",
    impact: "300% increase in online bookings, 99.9% uptime",
    tech: ["Next.js", "AWS Lambda", "Stripe", "TypeScript", "Booqable API"],
    link: "https://alljoybike.com",
  },
  {
    name: "FixMySEO",
    description: "AI-powered SEO intelligence platform with web scraping and competitive analysis",
    impact: "Actionable insights for market domination",
    tech: ["Next.js", "OpenAI", "Web Scraping", "Supabase", "TypeScript"],
    link: "https://fixmyseo.com",
  },
  {
    name: "Reaper's Harvest",
    description: "E-commerce platform with WooCommerce integration and Stripe payment processing",
    impact: "250% conversion rate increase, 1.2s load time",
    tech: ["Next.js", "WooCommerce", "Stripe", "GraphQL", "TypeScript"],
    link: "https://darkersideofhalloween.com",
  },
  {
    name: "Alljoy Donuts CO",
    description: "Performance-optimized static website with responsive design and animations",
    impact: "0.8s load time, 95+ Lighthouse score",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    link: "https://alljoydonutco.com",
  },
];

const skills = {
  "Languages": ["TypeScript", "JavaScript", "Python", "C++", "Go", "SQL"],
  "Frontend": ["React", "React Native", "Next.js", "Tailwind CSS", "Framer Motion"],
  "Backend": ["Node.js", "FastAPI", "PostgreSQL", "MongoDB", "Supabase"],
  "Cloud & Tools": ["AWS Lambda", "Docker", "Vercel", "Git", "Playwright"],
  "APIs & Integrations": ["Stripe", "OpenAI", "AWS SES", "DocuSign", "REST APIs"],
};

const publications = [
  {
    title: "AI-Native UI Design: Building Interfaces for Probabilistic Systems",
    venue: "Personal Research",
    date: "January 2025",
    link: "/research/ai-native-ui-design",
  },
  {
    title: "The Architecture of Real-Time Streaming Interfaces: UI as a Live Data Canvas",
    venue: "Personal Research",
    date: "January 2025",
    link: "/research/streaming-ui-architecture",
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen relative">
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <FloatingNav navItems={navItems} />

        <main className="relative z-10">
          {/* Header Section */}
          <section className="relative min-h-[40vh] flex items-center justify-center px-4 pt-32 pb-12">
            <div className="max-w-5xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black dark:text-neutral-50">
                      Peyton Salvant
                    </h1>
                    <p className="text-2xl text-neutral-700 dark:text-neutral-300 mb-4">
                      Software Engineer
                    </p>
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="px-6 py-3 rounded-full bg-black dark:bg-white/10 hover:bg-neutral-800 dark:hover:bg-white/20 text-white dark:text-neutral-50 font-semibold border-2 border-black dark:border-white/20 shadow-lg transition-all hover:scale-105 flex items-center gap-2"
                  >
                    <Download size={18} />
                    Download PDF
                  </button>
                </div>

                {/* Contact Info */}
                <GlassCard>
                  <div className="flex flex-wrap gap-4">
                    {contactInfo.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-primary">{item.icon}</span>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-neutral-900 dark:text-neutral-300 hover:text-primary transition-colors"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <span className="text-sm text-neutral-900 dark:text-neutral-300">{item.text}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Professional Summary */}
          <section className="relative py-12 px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-black dark:text-neutral-50 mb-6 flex items-center gap-3">
                  <User size={28} className="text-primary" />
                  Professional Summary
                </h2>
                <GlassCard>
                  <p className="text-lg text-neutral-900 dark:text-neutral-300 leading-relaxed">
                    Software engineer specializing in AI-powered applications, real-time interfaces, and high-performance UI systems.
                    Currently leading frontend development at Gemini Sports AI, building React Native tools for professional scouts
                    using AI to evaluate players. Proven track record of shipping production applications that drive measurable business
                    results—from 300% booking increases to 250% conversion rate improvements. Strong expertise in React, Next.js,
                    TypeScript, and AWS with a focus on creating scalable, user-centric solutions.
                  </p>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Experience */}
          <section className="relative py-12 px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-black dark:text-neutral-50 mb-6 flex items-center gap-3">
                  <Briefcase size={28} className="text-primary" />
                  Professional Experience
                </h2>
                <div className="space-y-6">
                  {experience.map((job, idx) => (
                    <div key={idx}>
                      <GlassCard className="hover:scale-[1.01] transition-transform">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-black dark:text-neutral-50">{job.title}</h3>
                            <p className="text-lg text-primary font-semibold">{job.company}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-400">
                              <Calendar size={16} />
                              <span className="text-sm">{job.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-400 mt-1">
                              <MapPin size={16} />
                              <span className="text-sm">{job.location}</span>
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, achievementIdx) => (
                            <li key={achievementIdx} className="flex items-start gap-3">
                              <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-1" />
                              <span className="text-neutral-900 dark:text-neutral-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </GlassCard>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="relative py-12 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-black dark:text-neutral-50 mb-6 flex items-center gap-3">
                  <Code2 size={28} className="text-primary" />
                  Featured Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {projects.map((project, idx) => (
                    <div key={idx}>
                      <GlassCard className="h-full hover:scale-[1.02] transition-transform">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-black dark:text-neutral-50">{project.name}</h3>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-accent transition-colors"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                        <p className="text-neutral-900 dark:text-neutral-300 mb-3">{project.description}</p>
                        <div className="flex items-center gap-2 mb-3">
                          <Zap size={16} className="text-accent" />
                          <span className="text-sm font-semibold text-accent">{project.impact}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </GlassCard>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Skills */}
          <section className="relative py-12 px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-black dark:text-neutral-50 mb-6 flex items-center gap-3">
                  <Zap size={28} className="text-primary" />
                  Technical Skills
                </h2>
                <GlassCard>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(skills).map(([category, skillList], idx) => (
                      <div key={idx}>
                        <h3 className="text-lg font-bold text-black dark:text-neutral-50 mb-3">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {skillList.map((skill, skillIdx) => (
                            <span
                              key={skillIdx}
                              className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-neutral-900 dark:text-neutral-300 border border-primary/20 hover:border-primary/40 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Publications/Research */}
          <section className="relative py-12 px-4 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-black dark:text-neutral-50 mb-6 flex items-center gap-3">
                  <FileText size={28} className="text-primary" />
                  Research & Publications
                </h2>
                <div className="space-y-4">
                  {publications.map((pub, idx) => (
                    <div key={idx}>
                      <Link href={pub.link}>
                        <GlassCard className="hover:scale-[1.01] transition-transform cursor-pointer">
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-black dark:text-neutral-50 mb-2 group-hover:text-primary transition-colors">
                                {pub.title}
                              </h3>
                              <div className="flex items-center gap-4 text-sm text-neutral-700 dark:text-neutral-400">
                                <span>{pub.venue}</span>
                                <span>•</span>
                                <span>{pub.date}</span>
                              </div>
                            </div>
                            <ExternalLink size={18} className="text-primary flex-shrink-0" />
                          </div>
                        </GlassCard>
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Education */}
          <section className="relative py-12 px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-black dark:text-neutral-50 mb-6 flex items-center gap-3">
                  <Award size={28} className="text-primary" />
                  Education
                </h2>
                <GlassCard>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-black dark:text-neutral-50">Bachelor of Science in Computer Science</h3>
                      <p className="text-lg text-primary font-semibold">University of Alabama</p>
                      <p className="text-neutral-700 dark:text-neutral-400 mt-2">Minor in Mathematics</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-400">
                        <Calendar size={16} />
                        <span className="text-sm">2021 - 2025</span>
                      </div>
                      <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-400 mt-1">
                        <MapPin size={16} />
                        <span className="text-sm">Tuscaloosa, AL</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-20 px-4">
            <div className="max-w-5xl mx-auto text-center">
              <GlassCard>
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-4">
                  Let's Work Together
                </h2>
                <p className="text-xl text-neutral-900 dark:text-neutral-300 mb-8">
                  I'm always open to new opportunities and collaborations.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link href="/#contact">
                    <button className="px-8 py-3 rounded-full bg-black dark:bg-white/10 hover:bg-neutral-800 dark:hover:bg-white/20 text-white dark:text-neutral-50 font-semibold border-2 border-black dark:border-white/20 shadow-lg transition-all hover:scale-105">
                      Get in Touch
                    </button>
                  </Link>
                  <a href="mailto:peytonsalvant5461@outlook.com">
                    <button className="px-8 py-3 rounded-full border-3 border-black dark:border-neutral-700 hover:bg-black dark:hover:bg-transparent text-black hover:text-white dark:text-neutral-50 font-semibold shadow-md transition-all hover:scale-105">
                      Send Email
                    </button>
                  </a>
                </div>
              </GlassCard>
            </div>
          </section>
        </main>

        <Footer />
    </div>
  );
}
