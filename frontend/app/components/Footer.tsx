import React from "react";
import Logo from "./Logo";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-gray-500">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Logo />
          </div>
          <p className="text-sm">
            Copyright © 2024-2024 Contact Trust <br />
            Instituto Metrópole Digital, UFRN, BR
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#header" className="text-current hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-current hover:underline">
                Reviews
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2">
            <li>
              <a href="#footer" className="text-current hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#privacy" className="text-current hover:underline">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a href="#privacy" className="text-current hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#privacy" className="text-current hover:underline">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        Designed with ❤️ by Contact Trust Team
      </div>
    </footer>
  );
};

export default Footer;
