// src/pages/DomainSearch.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiCheck, FiX, FiClock, FiTrendingUp } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const DomainSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [popularDomains, setPopularDomains] = useState([]);
  const inputRef = useRef(null);

  const { addToCart } = useCart();

  const tlds = ['.com', '.net', '.org', '.io', '.dev', '.app', '.co', '.ai'];

  useEffect(() => {
    // Load popular domains
    setPopularDomains([
      { name: 'yourbrand', available: false },
      { name: 'startup', available: true },
      { name: 'tech', available: false },
      { name: 'digital', available: true },
    ]);
  }, []);

  const searchDomains = async (searchQuery) => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    
    // Simulate API call with realistic timing
    await new Promise(resolve => setTimeout(resolve, 1500));

    const newResults = tlds.map(tld => {
      const isAvailable = Math.random() > 0.7;
      return {
        name: searchQuery + tld,
        available: isAvailable,
        price: isAvailable ? (8 + Math.floor(Math.random() * 25)) : null,
        premium: Math.random() > 0.9,
        popularity: Math.floor(Math.random() * 100)
      };
    });

    setResults(newResults);
    setIsSearching(false);
  };

  const handleAddToCart = (domain) => {
    addToCart({
      id: domain.name,
      name: domain.name,
      price: domain.price,
      type: 'domain'
    });
    toast.success(`${domain.name} added to cart!`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Domain
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Discover the perfect domain name for your website. Fast, easy, and secure registration.
            </p>

            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && searchDomains(query)}
                  placeholder="Find your perfect domain name..."
                  className="w-full px-6 py-5 text-lg rounded-2xl border-0 shadow-2xl focus:ring-4 focus:ring-blue-300/50 bg-white/10 backdrop-blur-md text-white placeholder-blue-200"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => searchDomains(query)}
                  disabled={isSearching}
                  className="absolute right-2 top-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-white p-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
                >
                  {isSearching ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <FiSearch className="w-6 h-6" />
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 w-4 h-4 bg-cyan-300/30 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-20 w-6 h-6 bg-blue-300/20 rounded-full"
        />
      </div>

      {/* Popular Domains */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trending Domains
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Popular domain names that are catching attention
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {popularDomains.map((domain, index) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
                domain.available ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
              }`}>
                {domain.available ? <FiCheck className="w-6 h-6" /> : <FiX className="w-6 h-6" />}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{domain.name}</h3>
              <p className={`text-sm font-medium ${
                domain.available ? 'text-green-600' : 'text-red-600'
              }`}>
                {domain.available ? 'Available' : 'Taken'}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Search Results */}
        <AnimatePresence>
          {results.length > 0 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden"
            >
              <div className="px-8 py-6 border-b border-gray-200/50">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <FiTrendingUp className="text-blue-600" />
                  Domain Results for "{query}"
                </h3>
              </div>

              <div className="divide-y divide-gray-200/50">
                {results.map((domain, index) => (
                  <motion.div
                    key={domain.name}
                    variants={itemVariants}
                    className="p-6 hover:bg-gray-50/50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          domain.available ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {domain.name}
                            {domain.premium && (
                              <span className="ml-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                Premium
                              </span>
                            )}
                          </h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                            <div className="flex items-center space-x-1">
                              <FiClock className="w-4 h-4" />
                              <span>Instant setup</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <div className="w-4 h-4 bg-blue-500 rounded-full" />
                              <span>{domain.popularity}% popularity</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6">
                        {domain.available ? (
                          <>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-gray-900">
                                ${domain.price}
                              </p>
                              <p className="text-sm text-gray-500">per year</p>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleAddToCart(domain)}
                              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                            >
                              Add to Cart
                            </motion.button>
                          </>
                        ) : (
                          <div className="text-right">
                            <p className="text-lg font-semibold text-red-600 flex items-center space-x-2">
                              <FiX className="w-5 h-5" />
                              <span>Not Available</span>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DomainSearch;