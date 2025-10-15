// components/LoadingScreen.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket } from 'react-icons/fa';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 z-50 flex items-center justify-center"
    >
      <div className="text-center text-white">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8"
        >
          <FaRocket className="text-6xl mx-auto" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold mb-4"
        >
          Fullstack Software
        </motion.h1>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="h-1 bg-white rounded-full mx-auto mb-4"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-lg opacity-80"
        >
          Loading amazing experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;