import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiMysql, SiMongodb } from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-red-400" /> },
        { name: "Database Mgmt", icon: <FaDatabase className="text-gray-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-cyan-950 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white tracking-wide drop-shadow-lg">
          ⚡ Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-tr from-gray-800 to-cyan-900 
                         shadow-lg rounded-2xl p-6 sm:p-8 text-center 
                         hover:scale-105 hover:shadow-cyan-500/50 
                         transition-transform duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-6 text-cyan-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-xs sm:text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                  >
                    <div className="text-3xl sm:text-4xl md:text-5xl drop-shadow-lg">{skill.icon}</div>
                    <span className="mt-2">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
