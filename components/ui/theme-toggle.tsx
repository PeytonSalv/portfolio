"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="glass p-2 rounded-full w-10 h-10" />
    );
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative glass p-2 rounded-full hover:glass-strong transition-all overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        {/* Sun Icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-amber-500"
          initial={false}
          animate={{
            scale: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : 180,
            opacity: theme === "light" ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <Sun size={20} />
        </motion.div>

        {/* Moon Icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-blue-400"
          initial={false}
          animate={{
            scale: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : -180,
            opacity: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <Moon size={20} />
        </motion.div>
      </div>

      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
    </motion.button>
  );
};
