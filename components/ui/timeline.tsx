"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItem {
  title: string;
  company?: string;
  location?: string;
  period: string;
  description: string;
  achievements?: string[];
}

export const Timeline = ({
  items,
  className,
}: {
  items: TimelineItem[];
  className?: string;
}) => {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

      <div className="space-y-12">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={cn(
              "relative grid grid-cols-1 md:grid-cols-2 gap-8",
              idx % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
            )}
          >
            {/* Left side (or right on mobile) */}
            <div className={cn("md:pr-12", idx % 2 === 0 ? "" : "md:order-2 md:pl-12 md:pr-0")}>
              <div className="glass rounded-2xl p-6 relative">
                {/* Timeline dot */}
                <div
                  className={cn(
                    "absolute top-8 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-background hidden md:block",
                    idx % 2 === 0 ? "-right-[34px]" : "-left-[34px]"
                  )}
                />

                {/* Mobile dot */}
                <div className="absolute -left-[42px] top-8 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-background md:hidden" />

                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">{item.title}</h3>
                {item.company && (
                  <p className="text-primary font-semibold mb-1">{item.company}</p>
                )}
                {item.location && (
                  <p className="text-neutral-700 dark:text-neutral-400 text-sm mb-2">{item.location}</p>
                )}
                <p className="text-neutral-800 dark:text-neutral-300 mb-4">{item.description}</p>

                {item.achievements && item.achievements.length > 0 && (
                  <ul className={cn("space-y-2", idx % 2 === 0 ? "md:text-right" : "")}>
                    {item.achievements.map((achievement, achievementIdx) => (
                      <li
                        key={achievementIdx}
                        className="text-neutral-700 dark:text-neutral-400 text-sm flex items-start gap-2"
                      >
                        <div className={cn("w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0", idx % 2 === 0 ? "md:order-2" : "")} />
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Right side (period) */}
            <div className={cn("flex items-center", idx % 2 === 0 ? "md:order-2 md:pl-12" : "md:pr-12")}>
              <div className={cn("glass rounded-full px-6 py-2 inline-block", idx % 2 === 0 ? "" : "md:ml-auto")}>
                <p className="text-neutral-800 dark:text-neutral-300 font-medium whitespace-nowrap">{item.period}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
