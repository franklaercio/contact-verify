// Footer.tsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-800 py-4 px-6 shadow-md z-50 flex justify-between items-center">
            <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-500">
                    <FaFacebookF size={20} />
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                    <FaTwitter size={20} />
                </a>
                <a href="#" className="text-white hover:text-blue-300">
                    <FaLinkedinIn size={20} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
