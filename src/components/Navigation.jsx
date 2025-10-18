// components/Navigation.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/logo.jpeg"
const Navigation = ({ onCursorChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-black py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center space-x-3 group"
            onMouseEnter={() => onCursorChange('hover')}
            onMouseLeave={() => onCursorChange('default')}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <img src={logo} alt="no internet connection" />
            </motion.div>
            <motion.span 
              className={`text-2xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Fullstack
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-purple-600'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-purple-600' 
                      : 'text-white/90 hover:text-white'
                }`}
                onMouseEnter={() => onCursorChange('hover')}
                onMouseLeave={() => onCursorChange('default')}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                  />
                )}
              </Link>
            ))}
            
            <Link target='_blank' to={"https://fullstacksoftware.ltd/index.php"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => onCursorChange('cta')}
              onMouseLeave={() => onCursorChange('default')}
              >
              Domain Names Registration
            </motion.button>
              </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-2xl ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg mt-4 rounded-2xl shadow-xl"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-6 py-3 font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-6 py-3">
              <Link target='_blank' to={"https://fullstacksoftware.ltd/index.php"}>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                Domain Names Registration
              </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;