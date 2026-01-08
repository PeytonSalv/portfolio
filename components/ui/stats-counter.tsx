"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useSpring(0, { duration: 2000 });
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return () => unsubscribe();
  }, [rounded]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
}

export const StatsCounter = ({
  stats,
  className,
}: {
  stats: Stat[];
  className?: string;
}) => {
  return (
    <div className={cn("flex justify-center gap-6 flex-wrap", className)}>
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="glass rounded-2xl p-6 text-center hover:glass-strong transition-all duration-300"
        >
          {stat.icon && (
            <div className="flex justify-center mb-3 text-primary">{stat.icon}</div>
          )}
          <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </div>
          <p className="text-neutral-800 dark:text-neutral-300 text-sm md:text-base">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};
