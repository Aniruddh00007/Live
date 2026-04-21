import React, { useState } from "react";

function AboutProject() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: "🌿 Plants & Ayurveda Service",
      overview:
        "The Go-Green Plantation & Ayurveda Service is a web-based application designed to connect people with nature by promoting plant adoption, plantation drives, Ayurveda awareness, and eco-friendly practices. It provides an interactive platform for users to explore plants, donate/adopt trees, book services online, and learn about Ayurvedic benefits.",
      keyFeatures: [
        "Plant Donation – Users can donate plants.",
        "Plant Adoption – Individuals can adopt and track plants.",
        "Tree Plantation Drive – Book plantation events.",
        "Plants Exhibition – Explore trees with details.",
        "Ayurveda Services – Learn medicinal uses.",
        "Contact/Email – Integrated mail service.",
        "Admin Panel – Manage services & data.",
      ],
      technologies: [
        "Frontend: HTML, CSS, JS, Bootstrap 5",
        "Backend: JSP, Servlets, Java (J2EE)",
        "Database: MySQL",
        "Tools & Server: Tomcat, XAMPP, Git/GitHub",
      ],
      workflow: [
        "Homepage → User Login",
        "Select Service",
        "Database Interaction",
        "Email Notification",
        "Admin Dashboard",
      ],
      deployment: ["Local: Tomcat + MySQL (XAMPP)", "Live: Render"],
      benefits: [
        "Promotes environmental awareness",
        "Easy plant adoption & donation",
        "Ayurveda awareness for wellness",
        "Scalable & user-friendly",
      ],
    },

    
    {
      title: "📝 ToDo List Application",
      overview:
        "The ToDo List Application is a web-based task management tool that helps users organize their daily activities efficiently. It allows users to create, edit, and delete tasks, mark them as complete, and manage their to-do lists with a user-friendly interface.",
      keyFeatures: [
        "Add New Task – Users can create a new todo with title & description.",
        "Update Task – Modify existing tasks.",
        "Delete Task – Remove tasks from the list.",
        "Mark as Completed – Track finished tasks.",
        "Task List View – Displays all tasks with status.",
        "REST APIs – Provides API endpoints for CRUD operations.",
        "Responsive UI",
      ],
      technologies: [
        "Frontend: React.js / HTML, Tailwind, JavaScript",
        "API Calls: Axios / Fetch API",
        "Backend: Spring Boot (REST APIs)",
        "Database: MySQL",
        "ORM: JPA / Hibernate",
        "Security: Spring Security",
        "Tools: Postman, Git/GitHub",
      ],
      workflow: [
        "User clicks “Add Task” → Sends request to backend via Axios/Fetch",
        " REST endpoints defined in @RestController (e.g., /api/todos) ",
        "Handles HTTP requests (GET, POST, PUT, DELETE)",
        "Database Interaction Stores task records in MySQL using JPA/Hibernate",
        "Display Tasks",
      ],
      deployment: ["Localhost", "Live: Render"],
      benefits: [
        "Efficient task management",
        "User-friendly interface",
        "Responsive design",
      ],
    },
    {
      title: "⛽ Fuel Service Management",
      overview:
        "A web application to manage fuel pump operations, including fuel services, vehicle mileage calculation, and analytics.",
      keyFeatures: [
        "Fuel Sales Management (Petrol, Diesel, etc.)",
        "Vehicle Mileage Calculator",
      ],
    },
  ];

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="Projects"
      className="py-12 sm:py-16 bg-gradient-to-b from-cyan-950 to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 sm:mb-14 text-white tracking-wide">
          🚀 About Projects
        </h1>

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/60 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl transition-all duration-500 mb-6"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex justify-between items-center text-cyan-200 font-bold text-xl sm:text-2xl mb-2 text-left focus:outline-none"
            >
              {project.title}
              <span className="text-cyan-400 text-lg">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="mt-4 space-y-6 text-left animate-fade-in text-gray-300">
                {/* Overview */}
                <div>
                  <h3 className="text-cyan-100 text-lg sm:text-xl font-semibold mb-2">
                    📌 Project Overview
                  </h3>
                  <p className="border-b border-cyan-400 pb-2">
                    {project.overview}
                  </p>
                </div>

                {/* Features */}
                {project.keyFeatures && (
                  <div>
                    <h3 className="text-cyan-100 text-lg sm:text-xl font-semibold mb-2">
                      🎯 Key Features
                    </h3>
                    <ul className="list-disc ml-6 space-y-1">
                      {project.keyFeatures?.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {project.technologies && (
                  <div>
                    <h3 className="text-cyan-100 text-lg sm:text-xl font-semibold mb-2">
                      ⚙️ Technologies Used
                    </h3>
                    <ul className="list-disc ml-6 space-y-1">
                      {project.technologies?.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Workflow */}
                {project.workflow && (
                  <div>
                    <h3 className="text-cyan-100 text-lg sm:text-xl font-semibold mb-2">
                      🖼️ Workflow
                    </h3>
                    <ul className="list-disc ml-6 space-y-1">
                      {project.workflow?.map((w, i) => (
                        <li key={i}>{w}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Deployment */}
                {project.deployment && (
                  <div>
                    <h3 className="text-cyan-100 text-lg sm:text-xl font-semibold mb-2">
                      🚀 Deployment
                    </h3>
                    <ul className="list-disc ml-6 space-y-1">
                      {project.deployment?.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Benefits */}
                {project.benefits && (
                  <div>
                    <h3 className="text-cyan-100 text-lg sm:text-xl font-semibold mb-2">
                      📊 Benefits
                    </h3>
                    <ul className="list-disc ml-6 space-y-1">
                      {project.benefits?.map((b, i) => (
                        <li key={i}>✅ {b}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutProject;
