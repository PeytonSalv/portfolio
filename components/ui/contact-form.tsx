"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = ({ className }: { className?: string }) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setStatus("success");
      reset();

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-6", className)}>
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-900 dark:text-neutral-300 mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Name is required" })}
          className={cn(
            "w-full px-4 py-3 rounded-lg glass text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 dark:placeholder-neutral-500",
            "focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
            "border border-transparent",
            errors.name && "border-red-500"
          )}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-900 dark:text-neutral-300 mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          className={cn(
            "w-full px-4 py-3 rounded-lg glass text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 dark:placeholder-neutral-500",
            "focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
            "border border-transparent",
            errors.email && "border-red-500"
          )}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-900 dark:text-neutral-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message", { required: "Message is required" })}
          className={cn(
            "w-full px-4 py-3 rounded-lg glass text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 dark:placeholder-neutral-500",
            "focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none",
            "border border-transparent",
            errors.message && "border-red-500"
          )}
          placeholder="Your message..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "w-full px-6 py-3 rounded-lg font-medium transition-all",
          "flex items-center justify-center gap-2",
          status === "success"
            ? "bg-green-600 hover:bg-green-700"
            : status === "error"
            ? "bg-red-600 hover:bg-red-700"
            : "bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50",
          status === "loading" && "opacity-70 cursor-not-allowed",
          "text-white"
        )}
      >
        {status === "loading" && (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        )}
        {status === "success" && (
          <>
            <Check size={20} />
            Message sent!
          </>
        )}
        {status === "error" && (
          <>
            <AlertCircle size={20} />
            Failed to send
          </>
        )}
        {status === "idle" && (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </motion.button>

      {/* Success/Error Messages */}
      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-400 text-center text-sm"
        >
          Thank you for reaching out! I&apos;ll get back to you soon.
        </motion.p>
      )}
    </form>
  );
};
