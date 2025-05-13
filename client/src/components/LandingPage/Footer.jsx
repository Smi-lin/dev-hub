import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-gray-400 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="mb-4 md:mb-0">&copy; 2025 Rokeebat Olajide. All rights reserved.</p>

        <div className="flex space-x-4">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 hover:text-green-400 transition" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-green-400 transition" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-green-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;