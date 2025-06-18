'use client'

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e0e0e] border-t border-[#1a1a1a] py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-300 mb-2">
          © {new Date().getFullYear()} Peyton Salvant. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Built with <span className="text-[#3B82F6]">Next.js</span> and <span className="text-[#3B82F6]">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 