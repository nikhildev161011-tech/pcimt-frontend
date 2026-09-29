import React, { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import logo from '../assets/weblogo.jpg';

// Navigation items configuration array
const navItems = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About Us", href: "#about" },
  { id: 3, label: "Course", href: "#courses" },
  { id: 4, label: "Certificates", href: "#certificates" },
  { id: 5, label: "Gallery", href: "#gallery" },
  { id: 6, label: "Contact", href: "#contact" }
];

export default function Navbar() {
  // State to manage mobile navigation menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Main Liquid Glass Navbar */}
      <nav className="backdrop-blur-md bg-white/85 border-b border-slate-200/80 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          
          {/* Logo and Brand Title */}
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-md flex items-center justify-center">
              <img 
                src={logo} 
                alt="PCIMT Logo" 
                className="w-full h-full object-cover rounded-full bg-white"
              />
            </div>
            <span className="text-2xl font-black tracking-wider text-slate-800">
              PC<span className="text-blue-600">IMT</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 font-medium text-slate-700">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={item.href} 
                className="hover:text-blue-600 transition-colors text-sm"
              >
                {item.label}
              </a>
            ))}

            {/* Login Button */}
            <a 
              href="#login" 
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-md hover:opacity-90 transition-all"
            >
              Login
            </a>
          </div>

          {/* Mobile Right Controls: Login and Ultra-Modern Menu Button */}
          <div className="flex items-center lg:hidden space-x-3">
            <a 
              href="#login" 
              className="px-4 py-1.5 rounded-lg bg-blue-600 text-white font-semibold text-xs shadow-md"
            >
              Login
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/60 shadow-sm hover:bg-blue-100 active:scale-95 transition-all duration-300 focus:outline-none flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X size={22} className="rotate-90 transition-transform duration-300" />
              ) : (
                <SlidersHorizontal size={22} className="transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Modern Mobile Dropdown Menu with Glassmorphism */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-slate-200/80 py-6 px-8 shadow-2xl flex flex-col space-y-5 font-medium text-slate-700 animate-fadeIn transition-all">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={item.href} 
                onClick={() => setIsOpen(false)} 
                className="text-base hover:text-blue-600 transition-colors border-b border-slate-100 pb-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}