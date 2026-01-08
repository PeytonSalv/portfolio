"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { AnimatedBlobs } from "@/components/ui/animated-blobs";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { GlassCard } from "@/components/ui/glass-card";
import { Card3D } from "@/components/ui/card-3d";
import { Timeline } from "@/components/ui/timeline";
import { StatsCounter } from "@/components/ui/stats-counter";
import { ContactForm } from "@/components/ui/contact-form";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { Footer } from "@/components/ui/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { BentoGrid, type BentoGridItem } from "@/components/ui/bento-grid";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { RippleButton } from "@/components/ui/ripple-button";
import { Currently } from "@/components/ui/currently";
import { motion } from "framer-motion";
import {
  Linkedin,
  Mail,
  Code2,
  Briefcase,
  User,
  Award,
  Target,
  FileText,
  Search,
} from "lucide-react";

const navItems = [
  { name: "About", link: "#about", icon: <User size={18} /> },
  { name: "Experience", link: "#experience", icon: <Briefcase size={18} /> },
  { name: "Projects", link: "#projects", icon: <Code2 size={18} /> },
  { name: "Resume", link: "/resume", icon: <Award size={18} /> },
  { name: "Case Studies", link: "/case-studies", icon: <FileText size={18} /> },
  { name: "Research", link: "/research", icon: <Search size={18} /> },
  { name: "Contact", link: "#contact", icon: <Mail size={18} /> },
];

const experienceData = [
  {
    title: "Software Engineer",
    company: "Gemini Sports AI",
    location: "Miami, FL (Remote)",
    period: "Jul 2025 - Present",
    description:
      "Lead frontend development for AI-powered scouting and player evaluation tools using React Native + TypeScript.",
    achievements: [
      "Scope, architect, and ship end-to-end product features in a fast-moving startup environment",
      "Design and implement high-performance UI systems optimized for real-time data, drag-and-drop interactions, and complex workflows",
      "Build automated test coverage (unit + E2E with Playwright) to improve reliability and prevent regressions",
      "Own the full lifecycle of Big Boards, a Kanban-style player management system used by scouts and analysts across sports organizations",
      "Delivered interactive board layouts, tagging systems, and smooth DnD experiences that drove adoption as a core feature of the platform",
      "Partner cross-functionally with founders, data engineers, and product to define requirements, UX flows, and long-term technical direction",
    ],
  },
  {
    title: "Software Engineer",
    company: "Cascade Core Solutions",
    location: "Remote",
    period: "Aug 2023 - Nov 2025",
    description:
      "Managed client relationships from initial outreach to project delivery, ensuring alignment with technical solutions.",
    achievements: [
      "Developed user-friendly websites and applications using React, Next.js, and Tailwind CSS",
      "Automated backend processes through API integration, creating a delivery optimization system via AWS Lambda",
      "Built end-to-end applications serving real businesses with production-level quality",
    ],
  },
  {
    title: "Head of Philanthropy Committee",
    company: "Phi Kappa Psi Fraternity",
    location: "Tuscaloosa, AL",
    period: "Dec 2023 - Dec 2024",
    description:
      "Organized and led fundraising events through strategic planning, team coordination, and effective communication.",
    achievements: [
      "Led record-breaking fundraising campaign that multiplied previous donation levels by 20x for Hunter's Pledge",
      "Strengthened community engagement and support through successful event execution",
      "Coordinated cross-functional teams to ensure alignment and maximize impact",
    ],
  },
  {
    title: "Project Development Manager Intern",
    company: "Upwork",
    location: "San Francisco Bay Area (Remote)",
    period: "Dec 2022 - May 2023",
    description:
      "Involved in design and development of software products with focus on automation and efficiency improvements.",
    achievements: [
      "Automated installation and testing processes to reduce testing time by 30%",
      "Assisted clients with technical issues and worked closely with lead developers to relay important information, resulting in timely issue resolution and improved client satisfaction",
      "Provided key support to project managers by conducting research, analyzing data, and preparing reports, resulting in a 20% improvement in project efficiency",
    ],
  },
];

const statsData = [
  { value: 3, suffix: "+", label: "Years Experience", icon: <Award size={24} /> },
  { value: 5, suffix: "", label: "Production Apps", icon: <Target size={24} /> },
];

const projectsData: BentoGridItem[] = [
  {
    title: "Alljoy Bike & Beach Rental",
    description: "Custom rental platform built from the ground up using Next.js, AWS infrastructure, Stripe payments, and Booqable API integration. Features advanced booking logic, real-time availability, and automated pricing calculations. Achieved 300% increase in online bookings with 99.9% system uptime.",
    tech: ["Next.js", "AWS", "Stripe", "Booqable API", "TypeScript", "Tailwind CSS"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    image: "/projects/alljoybike.png",
    demo: "https://alljoybike.com",
    size: "large",
  },
  {
    title: "Alljoy Donuts CO",
    description: "Stunning static website optimized for performance and visual appeal. Implemented responsive design, beautiful product galleries, and smooth animations that bring the brand to life online while maintaining lightning-fast load times. Achieved 0.8s load time with 95+ Lighthouse score.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel", "TypeScript"],
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    image: "/projects/alljoydonutco.png",
    demo: "https://alljoydonutco.com",
    size: "small",
  },
  {
    title: "Acadian Plant Health",
    description: "Comprehensive digital platform for a leading biostimulant non-profit organization. Features interactive product showcases, scientific data visualization, and educational content management focused on sustainable agriculture solutions.",
    tech: ["Next.js", "Content Management", "SEO Optimization", "Analytics", "Responsive Design"],
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    demo: "https://acadianplanthealth.com",
    size: "small",
  },
];

export default function Home() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <ScrollProgress />
      <BackToTop />
      <CustomCursor />

      <main className="relative min-h-screen w-full overflow-hidden">
        <AnimatedBlobs />
        <FloatingNav navItems={navItems} />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
          <Spotlight />

          <div className="relative z-10 max-w-7xl mx-auto w-full pt-20 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.h1
                className="text-4xl md:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400">
                  Hi, I&apos;m{" "}
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Peyton Salvant
                </span>
              </motion.h1>

              <TextGenerateEffect
                words="Full-stack engineer specializing in AI integrations, scalable infrastructure, and polished UI/UX"
                className="text-xl md:text-2xl text-neutral-900 dark:text-neutral-300 max-w-3xl mx-auto mb-8"
              />

              <motion.div
                className="flex gap-4 justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <RippleButton href="#contact" variant="primary">
                  Get in touch
                </RippleButton>
                <RippleButton href="#projects" variant="secondary">
                  View work
                </RippleButton>
              </motion.div>

              <motion.div
                className="flex gap-6 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a
                  href="https://linkedin.com/in/peytonsalvant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 dark:text-neutral-400 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:peytonsalvant5461@outlook.com"
                  className="text-neutral-900 dark:text-neutral-400 hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <StatsCounter stats={statsData} />
          </div>
        </section>

        {/* Currently Section */}
        <Currently />

        {/* About Section */}
        <section id="about" className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-neutral-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400">
              About Me
            </h2>

            <GlassCard className="max-w-4xl mx-auto">
              <p className="text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed mb-4">
                I&apos;m a software engineer specializing in AI-powered applications, real-time interfaces,
                and high-performance UI systems. Currently leading frontend development at Gemini Sports AI,
                where I build React Native tools for professional scouts and analysts using AI to evaluate
                players across sports organizations. I graduated from the University of Alabama in 2025 with
                a B.S. in Computer Science and a Mathematics minor.
              </p>
              <p className="text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed mb-4">
                My career started with an internship at Upwork in 2022, where I automated testing processes
                and improved project efficiency by 20%. I then founded Cascade Core Solutions, building
                production applications for real businesses—from rental platforms processing thousands of
                bookings to e-commerce sites with Stripe payments and AI-powered SEO tools. My work focuses
                on creating end-to-end solutions using React, Next.js, TypeScript, and AWS.
              </p>
              <p className="text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed">
                Beyond coding, I&apos;m passionate about leadership and community impact. During my time at
                University of Alabama, I led a record-breaking fundraising campaign as Head of Philanthropy
                at Phi Kappa Psi that multiplied previous donations by 20x for Hunter&apos;s Pledge. In my free
                time, I practice jiu jitsu, workout, play video games, and cook. I also enjoy exploring new
                technologies, contributing to open source, and researching the future of AI-native interfaces.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neutral-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400">
              Experience
            </h2>

            <Timeline items={experienceData} />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-neutral-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400">
              Skills & Technologies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Languages", skills: ["TypeScript", "Python", "JavaScript", "C++", "Go", "SQL"] },
                { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
                { title: "Backend", skills: ["Node.js", "FastAPI", "PostgreSQL", "MongoDB", "Supabase"] },
                { title: "Cloud & Tools", skills: ["AWS", "Docker", "Vercel", "Stripe", "Git"] },
              ].map((category, idx) => (
                <GlassCard key={idx}>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIdx) => (
                      <li key={skillIdx} className="text-neutral-800 dark:text-neutral-300 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-neutral-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400">
              Featured Projects
            </h2>

            <BentoGrid items={projectsData} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-20 px-4 pb-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-neutral-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400">
              Get In Touch
            </h2>

            <div className="max-w-2xl mx-auto">
              <GlassCard>
                <p className="text-lg text-neutral-800 dark:text-neutral-300 mb-6 text-center">
                  I&apos;m always open to new opportunities and collaborations. Feel free to reach
                  out if you&apos;d like to work together!
                </p>
                <ContactForm />
              </GlassCard>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
