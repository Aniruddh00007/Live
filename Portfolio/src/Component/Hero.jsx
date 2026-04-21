import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import ani from "../assets/anshu.jpg"



import ResumeButton from "./Resume_Button";

function Hero() {
  const logos = [
    {
      icon: <FaGithub className="text-2xl sm:text-3xl" />,
      link: "https://github.com/Aniruddh00007",
    },
    {
      icon: <FaLinkedin className="text-2xl sm:text-3xl text-blue-500" />,
      link: "https://in.linkedin.com/in/aniruddh-kumar-shaw-537570351",
    },
    {
      icon: <FaEnvelope className="text-2xl sm:text-3xl text-blue-500" />,
      link: "mailto:Aniiiii0007@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-12 md:px-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      {/* Left Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0"
      >
        <h3 className="text-lg sm:text-xl text-gray-400 mb-2">Hello, It's Me</h3>
        <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Aniruddh Kumar Shaw
        </h1>
        <h2 className="text-xl sm:text-2xl mt-3 text-gray-300">
          And I'm a{" "}
          <span className="text-cyan-400">Full Stack Developer</span>
        </h2>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-4 sm:gap-6 mt-6">
          {logos.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-2 sm:p-3 rounded-full border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
          <a
            href="/project"
            className="px-5 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-600 transition"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="px-5 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition"
          >
            Contact Me
          </a>

          <ResumeButton />
        </div>
      </motion.div>

      {/* Right Section (Profile Image) */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-4 border-cyan-400 shadow-[0px_0px_60px_-15px_cyan] overflow-hidden">
          <img
            src={ani}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
