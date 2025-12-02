"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Home } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full glass z-[5000] px-8 py-4 items-center justify-center space-x-4",
          className
        )}
      >
        {/* Home Icon */}
        <Link
          href="/"
          className="text-neutral-900 dark:text-neutral-50 hover:text-primary dark:hover:text-primary transition-colors"
          aria-label="Home"
        >
          <Home size={20} />
        </Link>

        {/* Separator */}
        <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-700" />

        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 text-neutral-900 dark:text-neutral-50 hover:text-primary dark:hover:text-primary transition-colors font-medium"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}

        {/* Theme Toggle - Commented out for now */}
        {/* <div className="pl-2 ml-2 border-l border-neutral-300 dark:border-neutral-700">
          <ThemeToggle />
        </div> */}
      </motion.div>
    </AnimatePresence>
  );
};
