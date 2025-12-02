"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

export interface CarouselItem {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  gradient: string;
  github?: string;
  demo?: string;
}

interface ExpandableCarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  className?: string;
}

const CarouselCard = ({
  item,
  index,
  isActive,
  onHover,
}: {
  item: CarouselItem;
  index: number;
  isActive: boolean;
  onHover: () => void;
}) => {
  return (
    <motion.div
      onMouseEnter={onHover}
      className={cn(
        "relative h-[400px] rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 ease-out",
        isActive ? "flex-[5]" : "flex-[1]"
      )}
      layout
    >
      {/* Background Image or Gradient */}
      {item.image ? (
        <div className="absolute inset-0">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className={cn(
              "w-full h-full object-cover transition-all duration-500",
              !isActive && "scale-105 brightness-50"
            )}
          />
          {/* Stronger gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30" />
        </div>
      ) : (
        <div
          className={cn(
            "absolute inset-0 opacity-30 transition-opacity duration-500",
            isActive ? "opacity-50" : "opacity-30"
          )}
          style={{
            background: item.gradient,
          }}
        />
      )}

      {/* Glass overlay */}
      <div className={cn(
        "absolute inset-0 glass transition-all duration-500",
        !isActive && "backdrop-blur-sm"
      )} />

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-between">
        {/* Title - Always visible */}
        <div>
          <motion.h3
            className={cn(
              "font-bold text-white transition-all duration-500",
              isActive ? "text-3xl mb-4 drop-shadow-lg" : "text-xl writing-mode-vertical-rl rotate-180 drop-shadow-md"
            )}
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
            layout
          >
            {item.title}
          </motion.h3>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col justify-between"
            >
              {/* Description */}
              <div className="mb-4">
                <p className="text-neutral-100 text-sm leading-relaxed mb-4 drop-shadow-md">
                  {item.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-white/15 text-white border border-white/30 backdrop-blur-sm drop-shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm text-neutral-50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
                {item.demo && (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors text-sm text-neutral-50 border border-primary/30"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const ExpandableCarousel = ({
  items,
  autoPlay = true,
  className,
}: ExpandableCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!autoPlay || isHovering) return;

    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [autoPlay, isHovering, nextSlide]);

  return (
    <div
      className={cn("w-full", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex gap-4 h-[400px]">
        {items.map((item, index) => (
          <CarouselCard
            key={index}
            item={item}
            index={index}
            isActive={activeIndex === index}
            onHover={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              activeIndex === index
                ? "w-8 bg-primary"
                : "w-1.5 bg-neutral-400 dark:bg-neutral-600 hover:bg-neutral-500"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
