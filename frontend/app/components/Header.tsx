// components/Header.tsx
import React, { useState } from "react";
import Logo from "./Logo";
//import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      id="header"
      className="fixed top-0 left-0 w-full py-4 px-6 shadow-md z-50 flex justify-between items-center bg-background border-b border-gray-900"
    >
      <div className="flex items-center space-x-4">
        <Logo />
      </div>

      <div className="block lg:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
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

      <nav className={`lg:flex ${isMenuOpen ? "block" : "hidden"} lg:block`}>
        <ul
          className={`lg:flex lg:flex-row ${
            isMenuOpen ? "flex-col" : "flex-row"
          } space-x-8 lg:space-x-8 lg:mt-0 mt-4 lg:text-base text-lg font-mono ${
            isMenuOpen ? "items-center justify-center" : ""
          }`}
        >
          <li>
            <a href="#search" className="hover:underline">
              Consulta
            </a>
          </li>
          <li>
            <a href="#history" className="hover:underline">
              Histórico de Consultas
            </a>
          </li>
          <li>
            <a href="#privacy" className="hover:underline">
              Política de Privacidade
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              Quem Somos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
