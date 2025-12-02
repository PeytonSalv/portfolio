"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlassCard = ({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5 } : {}}
      className={cn(
        "glass rounded-2xl p-6 will-change-transform",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
