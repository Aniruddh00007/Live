import React from 'react'
import { FaUserGraduate, FaTools, FaCertificate } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import ResumeButton from './Resume_Button';

function About_Me() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 py-12 sm:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-20 sm:top-40 left-10 sm:left-20 w-40 sm:w-72 h-40 sm:h-72 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-60 sm:w-96 h-60 sm:h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Name */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-10 sm:mb-12 animate-fade-in-down text-center md:text-left">
        Aniruddh Kumar Shaw
      </h1>

      {/* Professional Summary */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-4 sm:mb-6 flex items-center gap-2 border-b border-cyan-500 pb-2 animate-fade-in-left">
          <MdWork className="text-cyan-400" /> Professional Summary
        </h2>
        <div className="bg-gray-800/60 backdrop-blur-lg p-5 sm:p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/40 transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up">
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg max-w-4xl">
            Motivated <span className="text-cyan-400 font-semibold">Full Stack Developer</span> with academic and internship 
            experience in building responsive web applications using 
            <span className="text-cyan-400"> Java, JavaScript, HTML, CSS, and MySQL</span>. 
            Proficient in <span className="text-blue-400">frontend & backend development</span>, REST APIs, and version control (Git). 
            Skilled in debugging, collaborating in Agile teams, and adapting quickly to new frameworks.
          </p>
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-6 sm:mb-8 flex items-center gap-2 border-b border-cyan-500 pb-2 animate-fade-in-right">
          <FaUserGraduate className="text-cyan-400" /> Education
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {/* MCA */}
          <div className="bg-gray-800/60 backdrop-blur-lg p-5 sm:p-6 rounded-2xl shadow-xl hover:shadow-blue-500/40 transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Maharishi Dayanand University
              <span className="block text-gray-400 text-sm mt-1">2024 – 2026</span>
            </h3>
            <p className="text-gray-300 mt-3">Master of Computer Applications (MCA) — Pursuing</p>
          </div>

          {/* BCA */}
          <div className="bg-gray-800/60 backdrop-blur-lg p-5 sm:p-6 rounded-2xl shadow-xl hover:shadow-cyan-500/40 transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up delay-200">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Chandigarh Group of Colleges, Landran
              <span className="block text-gray-400 text-sm mt-1">2020 – 2023</span>
            </h3>
            <p className="text-gray-300 mt-3">Bachelors of Computer Applications (BCA)</p>
          </div>
        </div>
      </div>
          
      {/* Technical Skills */}
      <div>
        <h2 className="mt-12 sm:mt-16 text-2xl sm:text-3xl font-semibold text-cyan-400 mb-6 sm:mb-8 flex items-center gap-2 border-b border-cyan-500 pb-2 animate-fade-in-right">
          <FaTools className="text-cyan-400" /> Technical Skills
        </h2>
        <div className="bg-gray-800/60 backdrop-blur-lg p-5 sm:p-6 rounded-2xl shadow-xl hover:shadow-cyan-500/40 transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up delay-200">
          <p><span className="font-bold text-white">Programming:</span> <span className="text-gray-300">Java (JSE, JEE), OOPs, JavaScript, HTML5, CSS3</span></p>
          <p><span className="font-bold text-white">Frontend Tools:</span> <span className="text-gray-300">React.js, Redux, Bootstrap, Responsive Web Design</span></p>
          <p><span className="font-bold text-white">Backend Technologies:</span> <span className="text-gray-300">JSP, Servlet, JDBC, Spring Boot (CRUD, MVC), RESTful APIs</span></p>
          <p><span className="font-bold text-white">Database & Tools:</span> <span className="text-gray-300">MySQL, XAMPP, Apache Tomcat, Postman, STS, Ant, Git</span></p>
          <p><span className="font-bold text-white">Other Skills:</span> <span className="text-gray-300">Debugging, System Troubleshooting, PC Assembly, Networking (CCNA Basics)</span></p>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="mt-12 sm:mt-16 text-2xl sm:text-3xl font-semibold text-cyan-400 mb-6 sm:mb-8 flex items-center gap-3 border-b border-cyan-500 pb-3 animate-fade-in-right">
          <FaCertificate className="text-cyan-400 text-2xl sm:text-3xl" /> Certifications
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-800/70 backdrop-blur-lg p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/40 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-3">
              <span className="text-cyan-400">💻</span> Java Full Stack Developer
            </h3>
            <p className="text-gray-400 mt-2">Excellence Technology</p> <br />
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-3">
              <span className="text-cyan-400">🔐</span> IT Networking & Cybersecurity (CCNA)
            </h3>
            <p className="text-gray-400 mt-2">NS3 Education</p>
          </div>
        </div>
      </div>

      {/* Resume Button */}
      <div className="mt-8 sm:mt-10 flex justify-center md:justify-start">
        <ResumeButton />
      </div>

    </div>
  )
}

export default About_Me;
