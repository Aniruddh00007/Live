import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-cyan-900 text-gray-300 py-6 shadow-md backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left - Copyright */}
        <p className="text-xs sm:text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-semibold">Aniruddh</span>. All Rights Reserved.
        </p>

        {/* Right - Social Links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/Aniruddh00007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://in.linkedin.com/in/aniruddh-kumar-shaw-537570351"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:Aniiiii0007@gmail.com"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
