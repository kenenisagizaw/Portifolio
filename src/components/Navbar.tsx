import React, { useState } from "react";

const Navbar = ({ toggleTheme, theme }: { toggleTheme: () => void; theme: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Kenenisa Gizaw
          </a>

          {/* Desktop Links + Toggle */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 text-gray-800 dark:text-gray-200 font-medium">
              <li><a href="#about" className="hover:text-indigo-500">About</a></li>
              <li><a href="#projects" className="hover:text-indigo-500">Projects</a></li>
              <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
            </ul>

            <button
              className="text-xl focus:outline-none"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              className="text-xl focus:outline-none"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            <button
              className="text-2xl focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 pt-2 space-y-2 text-gray-800 dark:text-gray-200 font-medium shadow">
          <a href="#about" className="block hover:text-indigo-500" onClick={toggleMenu}>About</a>
          <a href="#projects" className="block hover:text-indigo-500" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="block hover:text-indigo-500" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
