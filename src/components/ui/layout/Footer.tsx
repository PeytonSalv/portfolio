import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-700">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <p className="text-gray-500">
          Built with <span className="text-[#3B82F6]">Next.js</span> and <span className="text-[#3B82F6]">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 