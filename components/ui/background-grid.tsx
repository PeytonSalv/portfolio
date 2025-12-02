import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundGrid = ({ className }: { className?: string }) => {
  return (
    <div className={cn("fixed inset-0 -z-10 pointer-events-none", className)}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  );
};

export const BackgroundDots = ({ className }: { className?: string }) => {
  return (
    <div className={cn("fixed inset-0 -z-10 pointer-events-none", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent opacity-90" />
    </div>
  );
};
