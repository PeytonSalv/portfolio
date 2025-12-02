"use client";

import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/peytonsalvant", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/peytonsalvant", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/peytonsalvant", label: "Twitter" },
    { icon: <Mail size={20} />, href: "mailto:peytonsalvant5461@outlook.com", label: "Email" },
  ];

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-neutral-300 dark:border-neutral-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand / Logo */}
          <div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
              Peyton Salvant
            </h3>
            <p className="text-neutral-700 dark:text-neutral-400 text-sm">
              Full-stack engineer building scalable solutions with AI and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-neutral-900 dark:text-neutral-50 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-700 dark:text-neutral-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-neutral-900 dark:text-neutral-50 font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-full hover:glass-strong text-neutral-700 dark:text-neutral-400 hover:text-primary transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-300 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-700 dark:text-neutral-400 text-sm">
            &copy; {currentYear} Peyton Salvant. All rights reserved.
          </p>
          <p className="text-neutral-700 dark:text-neutral-400 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-current" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};
