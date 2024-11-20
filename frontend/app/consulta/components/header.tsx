// Header.tsx
import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-gray-800 py-4 px-6 shadow-md z-50 flex justify-between">
            <div className="flex items-center space-x-4">
                <img src="/logo.png" alt="Logo" className="h-8" />
                <span className="text-lg font-bold">Consult</span>
            </div>
            <nav>
                <ul className="flex space-x-8">
                    <li><a href="/consulta" className="hover:underline">Consulta</a></li>
                    <li><a href="/quem-somos" className="hover:underline">Quem somos</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
