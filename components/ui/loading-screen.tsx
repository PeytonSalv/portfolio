"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Faster loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 25;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 dark:bg-gradient-to-br dark:from-neutral-950 dark:to-neutral-900"
        >
          <div className="relative">
            <div className="relative glass rounded-2xl p-8 min-w-[300px]">
              {/* Logo or Initial */}
              <div
                className="text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
              >
                PS
              </div>

              {/* Progress bar */}
              <div className="relative h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              {/* Loading text */}
              <p className="text-center text-neutral-600 dark:text-neutral-400 text-sm mt-4">
                Loading...
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
