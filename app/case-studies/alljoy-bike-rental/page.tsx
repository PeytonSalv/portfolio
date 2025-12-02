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
import { StatsCounter } from "@/components/ui/stats-counter";
import { RippleButton } from "@/components/ui/ripple-button";
import {
  FileText,
  Search,
  User,
  Briefcase,
  Code2,
  Mail,
  ExternalLink,
  CheckCircle2,
  Zap,
  TrendingUp,
  Clock,
  ShoppingCart,
  Calendar,
  CreditCard,
  Server,
  Smartphone,
  Award,
  FileSignature,
  MapPin,
  Bell,
  Route,
  Package,
  LayoutDashboard,
  Layers,
  Type,
  Palette,
  Cloud,
  SendHorizontal,
  Database,
  Map,
  Plug,
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

const statsData = [
  { value: 2.5, suffix: "hrs", label: "Daily Time Saved", icon: <Clock size={24} /> },
  { value: 0, suffix: "", label: "Paper Waivers", icon: <FileSignature size={24} /> },
  { value: 24, suffix: "/7", label: "Booking Availability", icon: <Calendar size={24} /> },
  { value: 100, suffix: "%", label: "Route Automation", icon: <Route size={24} /> },
];

const techStack = [
  { name: "Next.js", category: "Frontend", gradient: "from-black to-gray-800", logo: "https://cdn.simpleicons.org/nextdotjs/white", fallback: <Layers size={24} /> },
  { name: "TypeScript", category: "Language", gradient: "from-blue-600 to-blue-800", logo: "https://cdn.simpleicons.org/typescript/white", fallback: <Type size={24} /> },
  { name: "Tailwind CSS", category: "Styling", gradient: "from-cyan-500 to-teal-500", logo: "https://cdn.simpleicons.org/tailwindcss/white", fallback: <Palette size={24} /> },
  { name: "AWS Lambda", category: "Backend", gradient: "from-orange-500 to-red-500", logo: "https://cdn.simpleicons.org/awslambda/white", fallback: <Server size={24} /> },
  { name: "AWS SES", category: "Email Alerts", gradient: "from-yellow-500 to-orange-500", icon: <SendHorizontal size={24} /> },
  { name: "Stripe", category: "Payments", gradient: "from-purple-500 to-indigo-600", logo: "https://cdn.simpleicons.org/stripe/white", fallback: <CreditCard size={24} /> },
  { name: "Booqable", category: "Inventory API", gradient: "from-green-500 to-emerald-500", icon: <Database size={24} /> },
  { name: "DocuSign", category: "Digital Waivers", gradient: "from-blue-600 to-indigo-700", logo: "https://cdn.simpleicons.org/docusign/white", fallback: <FileSignature size={24} /> },
  { name: "Google Maps", category: "Route Planning", gradient: "from-green-600 to-blue-600", logo: "https://cdn.simpleicons.org/googlemaps/white", fallback: <Map size={24} /> },
  { name: "Vercel", category: "Hosting", gradient: "from-black to-gray-900", logo: "https://cdn.simpleicons.org/vercel/white", fallback: <Cloud size={24} /> },
];

const features = [
  {
    title: "Digital Waiver System",
    description: "Integrated DocuSign API for secure, legally-binding digital waiver collection. Customers complete waivers electronically before pickup, reducing paperwork and improving check-in speed.",
    icon: <FileSignature size={24} />,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Intelligent Route Optimization",
    description: "Built custom route planning system using Google Maps Distance Matrix API to calculate the most efficient delivery routes. Saves hours of planning time and reduces fuel costs by optimizing daily pickup schedules.",
    icon: <Route size={24} />,
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "Automated Customer Alerts",
    description: "Implemented AWS SES for automated email notifications. Customers receive instant booking confirmations, delivery status updates when drivers are en route, and post-rental follow-ups.",
    icon: <Bell size={24} />,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Real-time Inventory Dashboard",
    description: "Connected Booqable API to custom admin dashboard showing live product availability, booking status, and revenue analytics. Enables staff to manage fleet from anywhere.",
    icon: <LayoutDashboard size={24} />,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Smart Booking Engine",
    description: "Advanced date selection with automatic pricing calculations based on rental duration, equipment type, and seasonal demand. Handles complex multi-item bookings with ease.",
    icon: <Calendar size={24} />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Secure Payment Processing",
    description: "Stripe integration for PCI-compliant payment processing with support for credit cards, Apple Pay, and Google Pay. Automatic receipt generation and refund handling.",
    icon: <CreditCard size={24} />,
    gradient: "from-purple-500 to-pink-500",
  },
];

const technicalDeepDive = [
  {
    title: "Route Optimization Engine",
    problem: "Manual route planning took 2-3 hours daily and resulted in inefficient delivery paths",
    solution: "Built a custom algorithm using Google Maps Distance Matrix API that calculates optimal multi-stop routes. The system considers delivery time windows, vehicle capacity, and real-time traffic data to generate efficient routes automatically.",
    tech: ["Google Maps Distance Matrix API", "AWS Lambda", "Custom routing algorithm"],
    impact: "Automated daily route planning, saving 2.5 hours per day",
  },
  {
    title: "Automated Communication Pipeline",
    problem: "Customers needed real-time updates about their rental status and delivery timing",
    solution: "Designed an event-driven notification system using AWS SES. Triggers send emails at key moments: booking confirmation, waiver completion reminder, delivery departure notification (\"Driver is 15 minutes away\"), and post-rental feedback requests.",
    tech: ["AWS SES", "AWS Lambda", "Event-driven architecture"],
    impact: "Eliminated manual customer communication, instant delivery updates",
  },
  {
    title: "Admin Dashboard Integration",
    problem: "Staff needed centralized visibility into bookings, inventory, and customer data",
    solution: "Created a real-time dashboard that aggregates data from Booqable, Stripe, and DocuSign APIs. Features include drag-and-drop booking management, inventory tracking with low-stock alerts, and revenue analytics with exportable reports.",
    tech: ["Next.js", "Booqable API", "Stripe API", "DocuSign API"],
    impact: "Centralized all operations into single real-time dashboard",
  },
  {
    title: "Digital Waiver Workflow",
    problem: "Paper waivers were slow, error-prone, and difficult to store securely",
    solution: "Integrated DocuSign API with booking flow. After payment, customers automatically receive waiver via email. System tracks completion status and prevents pickup without signed waiver. All documents stored securely in cloud.",
    tech: ["DocuSign API", "AWS Lambda", "Automated workflow triggers"],
    impact: "Eliminated all paper waivers, 100% digital compliance",
  },
];

export default function AlljoyBikeRentalCase() {
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
            <div className="max-w-7xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-sm font-semibold">
                    Full-Stack Platform
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-neutral-50">
                  Alljoy Bike & Beach Rental
                </h1>
                <p className="text-2xl md:text-3xl text-neutral-900 dark:text-neutral-300 max-w-4xl mx-auto mb-8">
                  A complete rental ecosystem featuring digital waivers, automated route planning, and real-time customer notifications
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <RippleButton href="https://alljoybike.com" variant="primary">
                    <span className="flex items-center gap-2">
                      View Live Site <ExternalLink size={18} />
                    </span>
                  </RippleButton>
                  <RippleButton href="/case-studies" variant="secondary">
                    All Case Studies
                  </RippleButton>
                </div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <img
                  src="/projects/alljoybike.png"
                  alt="Alljoy Bike Rental Platform"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="relative py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <StatsCounter stats={statsData} />
            </div>
          </section>

          {/* Overview Section */}
          <section className="relative py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <GlassCard>
                    <h2 className="text-3xl font-bold text-black dark:text-neutral-50 mb-4">The Challenge</h2>
                    <p className="text-neutral-900 dark:text-neutral-300 leading-relaxed mb-4">
                      Alljoy Bike & Beach Rental, a popular Hilton Head Island business, was struggling with an entirely manual operation. Every booking required a phone call, paper waivers created liability risks, and staff spent hours planning inefficient delivery routes.
                    </p>
                    <p className="text-neutral-900 dark:text-neutral-300 leading-relaxed mb-4">
                      The business needed a comprehensive digital solution that could:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Enable 24/7 online bookings without staff intervention",
                        "Handle digital waivers legally and securely",
                        "Sync with existing Booqable inventory management",
                        "Optimize daily delivery routes automatically",
                        "Send automated alerts to customers about delivery status",
                        "Process payments securely online",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="text-neutral-900 dark:text-neutral-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <GlassCard>
                    <h2 className="text-3xl font-bold text-black dark:text-neutral-50 mb-4">The Solution</h2>
                    <p className="text-neutral-900 dark:text-neutral-300 leading-relaxed mb-4">
                      I designed and built a comprehensive rental platform from scratch, integrating multiple third-party services into a seamless workflow that handles everything from booking to delivery.
                    </p>
                    <p className="text-neutral-900 dark:text-neutral-300 leading-relaxed mb-4">
                      The platform features:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "DocuSign integration for legally-binding digital waivers",
                        "Google Maps Distance Matrix API for optimized route planning",
                        "AWS SES automated email alerts for rental status updates",
                        "Real-time Booqable inventory synced to admin dashboard",
                        "Stripe payment processing with automatic receipts",
                        "Custom Next.js frontend optimized for mobile tourists",
                        "AWS Lambda serverless functions for business logic",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-1" />
                          <span className="text-neutral-900 dark:text-neutral-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="relative py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-neutral-50 mb-4">
                  Key Features
                </h2>
                <p className="text-xl text-neutral-900 dark:text-neutral-300 max-w-3xl mx-auto">
                  A complete ecosystem of integrated tools solving real operational challenges
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <GlassCard className="h-full">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-4`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-black dark:text-neutral-50 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-900 dark:text-neutral-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Deep Dive */}
          <section className="relative py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-neutral-50 mb-4">
                  Technical Deep Dive
                </h2>
                <p className="text-xl text-neutral-900 dark:text-neutral-300">
                  How each system was built and the impact it delivered
                </p>
              </motion.div>

              <div className="space-y-8">
                {technicalDeepDive.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <GlassCard>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-black dark:text-neutral-50 mb-4">
                            {item.title}
                          </h3>

                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Problem</h4>
                              <p className="text-neutral-900 dark:text-neutral-300">{item.problem}</p>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Solution</h4>
                              <p className="text-neutral-900 dark:text-neutral-300">{item.solution}</p>
                            </div>

                            <div>
                              <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-400 mb-2">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {item.tech.map((tech, techIdx) => (
                                  <span
                                    key={techIdx}
                                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="pt-4 border-t border-neutral-300 dark:border-neutral-700">
                              <div className="flex items-center gap-2">
                                <Zap size={18} className="text-accent" />
                                <span className="font-semibold text-accent">{item.impact}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="relative py-20 px-4 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-neutral-50 mb-4">
                  Technology Stack
                </h2>
                <p className="text-xl text-neutral-900 dark:text-neutral-300">
                  Modern tools orchestrated for maximum reliability
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {techStack.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <GlassCard className="text-center h-full flex flex-col items-center justify-center p-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center text-white mb-3 p-3`}>
                        {tech.icon ? (
                          tech.icon
                        ) : tech.logo ? (
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              if (target.nextSibling) {
                                (target.nextSibling as HTMLElement).style.display = 'block';
                              }
                            }}
                          />
                        ) : null}
                        {tech.fallback && (
                          <div className="hidden">{tech.fallback}</div>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-black dark:text-neutral-50 mb-1">
                        {tech.name}
                      </h3>
                      <p className="text-sm text-neutral-700 dark:text-neutral-400">
                        {tech.category}
                      </p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="relative py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-neutral-50 mb-4">
                  Results & Impact
                </h2>
                <p className="text-xl text-neutral-900 dark:text-neutral-300">
                  Measurable business transformation
                </p>
              </motion.div>

              <GlassCard className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-black dark:text-neutral-50 mb-4">
                      Operational Impact
                    </h3>
                    <ul className="space-y-4">
                      {[
                        { label: "Daily route planning", value: "Automated" },
                        { label: "Staff time saved daily", value: "2.5 hours" },
                        { label: "Manual waiver processing", value: "Eliminated" },
                        { label: "Booking availability", value: "24/7" },
                        { label: "Average load time", value: "< 2 seconds" },
                      ].map((item, idx) => (
                        <li key={idx} className="flex justify-between items-center">
                          <span className="text-neutral-900 dark:text-neutral-300">{item.label}</span>
                          <span className="text-2xl font-bold text-primary">{item.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-black dark:text-neutral-50 mb-4">
                      Technical Features
                    </h3>
                    <ul className="space-y-4">
                      {[
                        { label: "Digital waivers via DocuSign", value: "Live" },
                        { label: "Real-time inventory sync", value: "Active" },
                        { label: "Automated email alerts", value: "AWS SES" },
                        { label: "Route optimization", value: "Google Maps" },
                        { label: "Payment processing", value: "Stripe" },
                      ].map((item, idx) => (
                        <li key={idx} className="flex justify-between items-center">
                          <span className="text-neutral-900 dark:text-neutral-300">{item.label}</span>
                          <span className="text-2xl font-bold text-accent">{item.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-300 dark:border-neutral-700">
                  <blockquote className="text-center">
                    <p className="text-xl italic text-neutral-900 dark:text-neutral-300 mb-4">
                      "The platform eliminated hours of manual work. Routes are planned automatically, waivers are handled digitally, and customers get real-time delivery updates. It transformed how we operate."
                    </p>
                    <footer className="text-neutral-700 dark:text-neutral-400">
                      — Business Owner, Alljoy Bike & Beach Rental
                    </footer>
                  </blockquote>
                </div>
              </GlassCard>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <GlassCard>
                <Award size={48} className="mx-auto mb-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-neutral-50 mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-xl text-neutral-900 dark:text-neutral-300 mb-8">
                  I specialize in building integrated systems that solve real business problems. Let's discuss your project.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <RippleButton href="/#contact" variant="primary">
                    Start a Project
                  </RippleButton>
                  <RippleButton href="https://alljoybike.com" variant="secondary">
                    <span className="flex items-center gap-2">
                      View Live Site <ExternalLink size={18} />
                    </span>
                  </RippleButton>
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
