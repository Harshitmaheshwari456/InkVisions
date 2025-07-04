import React, { useState } from "react";
import ThemeToggle from './themetoggler';

const Navbar = ({ navigateTo, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-teal-950 px-4 lg:px-6 py-4">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="flex items-center">
          <span 
            onClick={() => navigateTo('landing')} 
            className="self-center text-xl font-semibold whitespace-nowrap cursor-pointer dark:text-white"
          >
            Page Palette
          </span>
        </div>
        
        <div className="flex items-center lg:order-2">
          <ThemeToggle />
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        
        {/* Desktop navigation menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
                onClick={() => navigateTo('home')}
                className={`cursor-pointer block py-2 pr-4 pl-3 ${currentPage === 'home' ? 'text-yellow-600 dark:text-yellow-500' : 'text-gray-700 dark:text-white'} rounded bg-transparent lg:p-0`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => navigateTo('about')}
                className={`cursor-pointer block py-2 pr-4 pl-3 ${currentPage === 'about' ? 'text-yellow-600 dark:text-yellow-500' : 'text-gray-700 dark:text-white'} rounded lg:hover:bg-transparent lg:p-0`}
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => navigateTo('services')}
                className={`cursor-pointer block py-2 pr-4 pl-3 ${currentPage === 'services' ? 'text-yellow-600 dark:text-yellow-500' : 'text-gray-700 dark:text-white'} rounded lg:hover:bg-transparent lg:p-0`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => navigateTo('pricing')}
                className={`cursor-pointer block py-2 pr-4 pl-3 ${currentPage === 'pricing' ? 'text-yellow-600 dark:text-yellow-500' : 'text-gray-700 dark:text-white'} rounded lg:hover:bg-transparent lg:p-0`}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                onClick={() => navigateTo('contact')}
                className={`cursor-pointer block py-2 pr-4 pl-3 ${currentPage === 'contact' ? 'text-yellow-600 dark:text-yellow-500' : 'text-gray-700 dark:text-white'} rounded lg:hover:bg-transparent lg:p-0`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;