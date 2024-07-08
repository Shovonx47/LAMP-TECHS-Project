import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center w-full">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="hidden md:block h-10 w-10 md:h-12 md:w-12 mr-4" />
        <h1 className="text-lg md:text-xl">Coursera</h1>
      </div>
      <nav className="space-x-2 md:space-x-4">
        <a href="/" className="text-sm md:text-base transition-colors duration-300 ease-in-out hover:text-gray-400">Home</a>
        <a href="/programs" className="text-sm md:text-base transition-colors duration-300 ease-in-out hover:text-gray-400">Programs</a>
        <a href="/dashboard" className="text-sm md:text-base transition-colors duration-300 ease-in-out hover:text-gray-400">Dashboard</a>
        <a href="/profile" className="text-sm md:text-base transition-colors duration-300 ease-in-out hover:text-gray-400">Profile</a>
      </nav>
      <div className="relative">
        <img
          src="/avatar.png"
          alt="User Avatar"
          className="hidden md:block h-8 w-8 md:h-10 md:w-10 rounded-full cursor-pointer"
          onClick={toggleDropdown}
        />
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-36 md:w-48 bg-white text-black rounded-md shadow-lg">
            <a href="/settings" className="flex items-center px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-200">
              <FontAwesomeIcon icon={faCog} className="mr-2" /> Settings
            </a>
            <a href="/logout" className="flex items-center px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-200">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
