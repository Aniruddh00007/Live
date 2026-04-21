import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons
import ani from "../assets/anshu.jpg"
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about_me", label: "About" },
    { path: "/Project", label: "Projects" },
    { path: "/Skills", label: "Skills" },
    { path: "/Contact", label: "Contact" },
    { path: "/Service", label: "Services" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-cyan-900 shadow-md backdrop-blur-md">
      <nav className="flex items-center justify-between max-w-screen-xl px-6 py-4 mx-auto">

        {/* Logo / Profile Pic + Name */}
        <div className="flex items-center space-x-3">
          <img 
            src={ani} 
            alt="Aniruddh Logo" 
            className="w-10 h-10 rounded-full border-2 border-cyan-400 shadow-md hover:scale-105 transition-transform duration-300"
          />
          <span className="text-lg font-semibold text-cyan-400 tracking-wide hover:text-cyan-300 transition-colors duration-300">
            Aniruddh
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300
                ${isActive
                  ? "text-cyan-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-cyan-400 after:rounded-full"
                  : "text-gray-300 hover:text-cyan-300"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28}/> : <Menu size={28}/> }
        </button>
      </nav>

      {/* Mobile Nav (Dropdown) */}
      {isOpen && (
        <div className="lg:hidden bg-gray-900/95 backdrop-blur-md shadow-md px-6 py-4 space-y-4">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium rounded-md transition-colors
                ${isActive ? "text-cyan-400 bg-gray-800" : "text-gray-300 hover:text-cyan-300"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
