import React, { useState } from 'react';

function Header({ onVideoClick, onEventClick, onContactClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full flex flex-col md:flex-row justify-between items-center px-8 py-6 text-white">
      <div className="flex items-center justify-between w-full md:w-auto space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
          <img
            src="../assets/images/logo.png"
            alt="Logo"
            className="rounded-full h-12 w-11 transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          <img
            src="../assets/images/infotsav.png"
            alt="Infotsav"
            className="h-8 transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>

        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          <svg className={`w-6 h-6 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Navigation and Sign In Button */}
      <nav className={`md:flex flex-grow justify-center space-x-6 ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <li>
            <button onClick={onEventClick} className="hover:text-gray-400">Events</button>
          </li>
          <li>
            <button onClick={onVideoClick} className="hover:text-gray-400">About</button>
          </li>
          <li>
            <button onClick={onContactClick} className="hover:text-gray-400">Contact Us</button>
          </li>
        </ul>
      </nav>

      <button className="bg-teal-400 hover:bg-teal-500 text-black px-6 py-2 rounded-lg font-bold hidden md:inline-block">
        Sign In
      </button>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-6 px-8 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
        <button className="self-end" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <nav>
          <ul className="space-y-4">
            <li>
              <button onClick={onEventClick} className="hover:text-gray-400">Events</button>
            </li>
            <li>
              <button onClick={onVideoClick} className="hover:text-gray-400">About</button>
            </li>
            <li>
              <button onClick={onContactClick} className="hover:text-gray-400">Contact Us</button>
            </li>
          </ul>
        </nav>

        <button className="bg-teal-400 hover:bg-teal-500 text-black px-6 py-2 rounded-lg font-bold">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;
