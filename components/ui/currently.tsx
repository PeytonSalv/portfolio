"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./glass-card";
import { Book, Code, Lightbulb, Rocket, Sparkles } from "lucide-react";

interface CurrentlyItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  pulse?: boolean;
}

const currentlyItems: CurrentlyItem[] = [
  {
    icon: <Rocket size={28} />,
    title: "Shipping FixMySEO",
    description: "Building an AI-powered SEO intelligence platform that analyzes competitors and generates data-driven optimization strategies.",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    pulse: true,
  },
  {
    icon: <Code size={28} />,
    title: "Deep Diving into Go",
    description: "Mastering Go for high-performance microservices and exploring distributed systems patterns at scale.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
  },
  {
    icon: <Book size={28} />,
    title: "Graduating May 2025",
    description: "Wrapping up my B.S. in Computer Science with Math minor at University of Alabama—3.8 GPA while shipping production software.",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Seeking New Grad Roles",
    description: "Looking for Summer 2025 opportunities in AI/ML engineering, full-stack development, or cloud infrastructure—ready to build at scale.",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    pulse: true,
  },
];

export const Currently = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400">
            What I'm Up To
          </h2>
          <p className="text-neutral-700 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            Current focus, learning, and what's next
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {currentlyItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Gradient border glow on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />

              <GlassCard className="h-full relative group-hover:glass-strong transition-all duration-300">
                <div className="flex items-start gap-5">
                  {/* Icon with gradient background and optional pulse */}
                  <div className="relative flex-shrink-0">
                    {item.pulse && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-xl opacity-30 blur-md`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                    <div className={`relative p-4 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}>
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-3 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-800 dark:text-neutral-300 leading-relaxed group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
