// components/Header.tsx

import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 py-4 px-6 shadow-md z-50 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <span className="text-lg font-bold">Consult</span>
      </div>

      <div className="block lg:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <ul className={`lg:flex lg:flex-row ${isMenuOpen ? 'flex-col' : 'flex-row'} space-x-8 lg:space-x-8 lg:mt-0 mt-4 lg:text-sm text-lg text-white ${isMenuOpen ? 'items-center justify-center' : ''}`}>
          <li><a href="#consulta" className="hover:underline">Consulta</a></li>
          <li><a href="#quem-somos" className="hover:underline">Quem Somos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
