// pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaLightbulb, FaArrowRight } from 'react-icons/fa';
import { SiReact, SiVuedotjs, SiAngular, SiNodedotjs, SiPython } from 'react-icons/si';
import { FaAws } from "react-icons/fa6";


const Home = ({ onCursorChange }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const technologies = [
    { icon: SiReact, name: 'React', color: 'text-cyan-400' },
    { icon: SiVuedotjs, name: 'Vue.js', color: 'text-green-500' },
    { icon: SiAngular, name: 'Angular', color: 'text-red-500' },
    { icon: SiNodedotjs, name: 'Node.js', color: 'text-green-600' },
    { icon: SiPython, name: 'Python', color: 'text-yellow-500' },
    { icon: FaAws, name: 'AWS', color: 'text-orange-500' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="min-h-screen flex items-center"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <motion.div variants={itemVariants} className="text-white">
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-8"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Trusted by 200+ companies worldwide</span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
                >
                  We Design & Build{' '}
                  <span className="bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
                    Digital Products
                  </span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-xl text-gray-300 mb-8 leading-relaxed"
                >
                  As a 12-year industry , our software team - 420 strong - forms our talents 
                  more effectively and deliver robust experiences while managing total cost of ownership.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center space-x-2"
                    onMouseEnter={() => onCursorChange('cta')}
                    onMouseLeave={() => onCursorChange('default')}
                  >
                    <span>Get Started</span>
                    <FaArrowRight className="text-sm" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
                    onMouseEnter={() => onCursorChange('hover')}
                    onMouseLeave={() => onCursorChange('default')}
                  >
                    View Portfolio
                  </motion.button>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-8"
                >
                  {[
                    { number: '420+', label: 'Projects Delivered' },
                    { number: '12+', label: 'Years Experience' },
                    { number: '95%', label: 'Client Satisfaction' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Hero Visual */}
              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                    <div className="bg-gray-900 rounded-2xl p-6">
                      {/* Code Window */}
                      <div className="flex space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                      </div>
                      <pre className="text-green-400 text-sm font-mono">
                        {`// Building the future
function innovate() {
  return (
    <DigitalSolution 
      creativity={true}
      technology="cutting-edge"
      impact="transformative"
    />
  );
}`}
                      </pre>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{
                      y: [0, -30, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1
                    }}
                    className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl"
                  >
                    <FaRocket className="text-white text-xl" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 2
                    }}
                    className="absolute -bottom-4 -right-4 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-2xl"
                  >
                    <FaLightbulb className="text-white text-lg" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks for modern digital solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                onMouseEnter={() => onCursorChange('hover')}
                onMouseLeave={() => onCursorChange('default')}
              >
                <tech.icon className={`text-4xl mx-auto mb-3 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                <div className="font-semibold text-gray-800">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's transform your ideas into reality with our expert team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
                onMouseEnter={() => onCursorChange('cta')}
                onMouseLeave={() => onCursorChange('default')}
              >
                Get in Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
                onMouseEnter={() => onCursorChange('hover')}
                onMouseLeave={() => onCursorChange('default')}
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;