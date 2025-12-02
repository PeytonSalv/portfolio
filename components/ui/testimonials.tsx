"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./glass-card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Client Name",
    role: "CEO",
    company: "Alljoy Bike & Beach Rental",
    content: "Peyton built us a custom rental platform that completely transformed our business. Online bookings increased by 300% and the system runs flawlessly. His attention to detail and technical expertise made this project a huge success.",
  },
  {
    name: "Team Lead Name",
    role: "Engineering Manager",
    company: "Tech Company",
    content: "Working with Peyton was fantastic. He has a deep understanding of full-stack development and consistently delivers high-quality code. His ability to integrate complex APIs and build scalable infrastructure is impressive.",
  },
  {
    name: "Professor Name",
    role: "Computer Science Professor",
    company: "University of Alabama",
    content: "Peyton stands out as an exceptional student who applies academic concepts to real-world projects. His work ethic and technical skills are remarkable, and he's always willing to help fellow students.",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToTestimonial = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, nextTestimonial]);

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400">
            Testimonials
          </h2>
          <p className="text-neutral-700 dark:text-neutral-400 max-w-2xl mx-auto">
            What clients, colleagues, and mentors say about working with me
          </p>
        </motion.div>

        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <GlassCard className="relative">
                <Quote className="absolute top-6 left-6 text-primary opacity-20" size={48} />

                <div className="relative pt-12 pb-6 px-4">
                  <p className="text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900 dark:text-neutral-50">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-neutral-700 dark:text-neutral-400">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="glass p-3 rounded-full hover:glass-strong transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-neutral-900 dark:text-neutral-50" />
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToTestimonial(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-neutral-400 dark:bg-neutral-600"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="glass p-3 rounded-full hover:glass-strong transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-neutral-900 dark:text-neutral-50" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
