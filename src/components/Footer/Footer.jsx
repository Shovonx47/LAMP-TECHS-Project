import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="space-x-4">
            <a href="/about" className="hover:text-gray-400">About Us</a>
            <a href="/contact" className="hover:text-gray-400">Contact</a>
            <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
          </div>
          <div className="space-x-4 flex items-center">
            <a href="https://facebook.com" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebook} size="x" />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} size="x" />
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} size="x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
