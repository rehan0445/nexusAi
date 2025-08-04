import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // or "../../assets/logo.jpg" if needed


const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/home" className="flex items-center space-x-3 group">
          <img
  src={logo}
  alt="Nexus Logo"
  className="w-12 h-12 object-contain transform group-hover:scale-110 transition-all duration-300"
/>


          <span className="text-gold text-2xl font-bold tracking-wide">NEXUS</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/home"
            className={`text-base font-medium transition-all duration-300 hover:text-gold hover:scale-105 ${
              isActive('/home') ? 'text-gold' : 'text-gray-300'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-base font-medium transition-all duration-300 hover:text-gold hover:scale-105 ${
              isActive('/about') ? 'text-gold' : 'text-gray-300'
            }`}
          >
            About
          </Link>
          <Link
            to="/waitlist"
            className={`text-base font-medium transition-all duration-300 hover:text-gold hover:scale-105 ${
              isActive('/waitlist') ? 'text-gold' : 'text-gray-300'
            }`}
          >
            Waitlist
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Link
            to="/waitlist"
            className="text-gold font-medium hover:scale-105 transition-all duration-300"
          >
            Waitlist
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;