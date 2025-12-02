"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const Spotlight = ({ className }: { className?: string }) => {
  return (
    <>
      {/* Dark mode spotlight */}
      <div
        className={cn(
          "dark:block hidden animate-spotlight pointer-events-none absolute -top-40 left-0 md:left-60 md:-top-20 h-[169vh] w-[138vw] opacity-0",
          className
        )}
        style={{
          background:
            "linear-gradient(108deg, #6366f1 0%, transparent 40%)",
        }}
      >
        <style jsx>{`
          @keyframes spotlight {
            0% {
              opacity: 0;
              transform: translate(-72%, -62%) scale(0.5);
            }
            100% {
              opacity: 0.4;
              transform: translate(-50%, -50%) scale(1);
            }
          }
          .animate-spotlight {
            animation: spotlight 2s ease 0.2s 1 forwards;
          }
        `}</style>
      </div>

      {/* Light mode spotlight - more subtle */}
      <div
        className={cn(
          "dark:hidden block animate-spotlight-light pointer-events-none absolute -top-40 left-0 md:left-60 md:-top-20 h-[169vh] w-[138vw] opacity-0",
          className
        )}
        style={{
          background:
            "linear-gradient(108deg, #6366f1 0%, transparent 40%)",
        }}
      >
        <style jsx>{`
          @keyframes spotlight-light {
            0% {
              opacity: 0;
              transform: translate(-72%, -62%) scale(0.5);
            }
            100% {
              opacity: 0.15;
              transform: translate(-50%, -50%) scale(1);
            }
          }
          .animate-spotlight-light {
            animation: spotlight-light 2s ease 0.2s 1 forwards;
          }
        `}</style>
      </div>
    </>
  );
};
