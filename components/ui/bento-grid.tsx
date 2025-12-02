"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BentoGridItem {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  image?: string;
  demo?: string;
  size: "large" | "medium" | "small";
}

interface BentoGridProps {
  items: BentoGridItem[];
}

export const BentoGrid = ({ items }: BentoGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 auto-rows-[200px]">
      {items.map((item, idx) => (
        <BentoCard key={idx} item={item} index={idx} />
      ))}
    </div>
  );
};

const BentoCard = ({ item, index }: { item: BentoGridItem; index: number }) => {
  const sizeClasses = {
    large: "md:col-span-4 md:row-span-2",
    medium: "md:col-span-3 md:row-span-2 lg:col-span-4",
    small: "md:col-span-3 md:row-span-1 lg:col-span-4",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl glass hover:glass-strong transition-all duration-300",
        sizeClasses[item.size]
      )}
    >
      {/* Background Image/Gradient */}
      <div
        className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
        style={{
          background: item.image
            ? `url(${item.image}) center/cover`
            : item.gradient,
        }}
      />

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-2xl font-bold text-black dark:text-white group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            {item.demo && (
              <a
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-all hover:scale-110"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={20} className="text-primary" />
              </a>
            )}
          </div>
          <p className="text-neutral-800 dark:text-neutral-300 leading-relaxed mb-4">
            {item.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {item.tech.slice(0, item.size === "large" ? 6 : item.size === "medium" ? 4 : 3).map((tech, techIdx) => (
            <span
              key={techIdx}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
          {item.tech.length > (item.size === "large" ? 6 : item.size === "medium" ? 4 : 3) && (
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30">
              +{item.tech.length - (item.size === "large" ? 6 : item.size === "medium" ? 4 : 3)}
            </span>
          )}
        </div>
      </div>

      {/* Hover Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
        style={{ background: item.gradient }}
      />
    </motion.div>
  );
};
