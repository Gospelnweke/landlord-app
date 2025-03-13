import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/" className="text-slate-700">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Landlord</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form
          action=""
          className="flex justify-evenly items-center bg-slate-100 p-2 rounded-lg"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500 ml-2" />
        </form>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <XIcon className="h-6 w-6 text-slate-700" />
            ) : (
              <MenuIcon className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>
        <ul className={`flex gap-4 ${isMenuOpen ? 'block' : 'hidden'} sm:flex`}>
          <li className="hover:cursor-pointer hover:underline text-slate-700">
            Home
          </li>
          <li className="relative hover:cursor-pointer hover:underline text-slate-700">
            <button
              onClick={toggleDropdown}
              className="focus:outline-none hover:cursor-pointer hover:underline"
            >
              About
            </button>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg"
              >
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100">Our Story</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Team</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Careers</li>
                </ul>
              </div>
            )}
          </li>
          <li className="hover:cursor-pointer hover:underline text-slate-700">
            Sign in
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
