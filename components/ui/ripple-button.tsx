"use client";

import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface RippleButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "glass";
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export const RippleButton = ({
  children,
  className,
  onClick,
  href,
  variant = "primary",
}: RippleButtonProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple: Ripple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);

    onClick?.();
  };

  const baseStyles = "relative overflow-hidden px-8 py-3 rounded-full transition-all duration-300";

  const variantStyles = {
    primary: "bg-black dark:bg-white/10 dark:backdrop-blur-md hover:bg-neutral-800 dark:hover:bg-white/20 hover:scale-105 text-white dark:text-neutral-50 font-semibold border-2 border-black dark:border-white/20 shadow-lg",
    secondary: "border-3 border-black dark:border-neutral-700 hover:bg-black dark:hover:bg-transparent hover:border-neutral-800 dark:hover:border-neutral-500 hover:scale-105 text-black hover:text-white dark:text-neutral-50 dark:hover:text-neutral-50 font-semibold shadow-md",
    glass: "glass hover:glass-strong text-black dark:text-neutral-50 hover:bg-neutral-200 dark:hover:bg-white/10 font-medium",
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={handleClick}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      <span className="relative z-10">{children}</span>

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full bg-white/30"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
            initial={{
              width: 0,
              height: 0,
              opacity: 1,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              width: 500,
              height: 500,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        ))}
      </AnimatePresence>
    </Component>
  );
};
