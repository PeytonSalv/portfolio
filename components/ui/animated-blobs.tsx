"use client";

import { motion } from "framer-motion";

export const AnimatedBlobs = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blob 1 - Top Left */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 dark:opacity-20"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          filter: "blur(80px)",
          willChange: "transform",
        }}
        animate={{
          x: [-100, 100, -100],
          y: [-100, 50, -100],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Blob 2 - Top Right */}
      <motion.div
        className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full opacity-10 dark:opacity-15"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          filter: "blur(80px)",
          willChange: "transform",
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};
