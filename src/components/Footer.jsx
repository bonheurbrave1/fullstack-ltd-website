// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = ({ onCursorChange }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebookF, href: '#', color: 'hover:text-blue-600' },
    { icon: FaXTwitter, href: 'https://x.com/software36770?s=11', color: 'hover:text-blue-400' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/fullstack-software-aa01153b3', color: 'hover:text-blue-700' },
    { icon: FaInstagram, href: 'https://www.instagram.com/fullstack_software?igsh=MWI3b2k0em1mYXdobA%3D%3D&utm_source=qr', color: 'hover:text-pink-600' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Cloud Solutions',
    'DevOps',
    'Consulting'
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">FS</span>
              </div>
              <span className="text-2xl font-bold">Fullstack</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building digital experiences that transform businesses and create lasting impact through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors duration-300 ${social.color}`}
                  onMouseEnter={() => onCursorChange('hover')}
                  onMouseLeave={() => onCursorChange('default')}
                >
                  <social.icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                    onMouseEnter={() => onCursorChange('hover')}
                    onMouseLeave={() => onCursorChange('default')}
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 cursor-pointer">
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    <span>{service}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <FaMapMarkerAlt className="text-purple-500" />
                <span>Remera - Kigali, Rwanda</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FaPhone className="text-purple-500" />
                <span>(+250) 796 688 978</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FaEnvelope className="text-purple-500" />
                <span>info@fullstack.rw</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Fullstack Software Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;