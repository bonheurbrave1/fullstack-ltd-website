// pages/Portfolio.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaFilter,
  FaMobile,
  FaLaptop,
  FaPalette,
  FaShoppingCart
} from 'react-icons/fa';
import proj1 from "../assets/projects/proj1.png"
import proj2 from "../assets/projects/proj2.png"
import proj3 from "../assets/projects/proj3.png"
import proj4 from "../assets/projects/proj4.png"


const Portfolio = ({ onCursorChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { key: 'all', label: 'All Projects', icon: FaFilter },
    { key: 'web', label: 'Web Apps', icon: FaLaptop },
    { key: 'mobile', label: 'Mobile Apps', icon: FaMobile },
    { key: 'design', label: 'UI/UX Design', icon: FaPalette },
    { key: 'ecommerce', label: 'E-commerce', icon: FaShoppingCart },
  ];

  const projects = [
    {
      id: 1,
      title: 'Pearl Capital LTD',
      category: 'web',
      description: 'A comprehensive financial website for the pearl capital ltd',
      image: proj1,
      technologies: ["HTML5","CSS","Bootstrap5" , "Tailwindcss"],
      features: ['Official website for ads'],
      liveUrl: 'https://pearlcapital.rw/',
      githubUrl: '#',
      client: 'FinTech Solutions Inc.',
      duration: '1 month',
      results: 'Increased user engagement by 45% and reduced reporting time by 70%'
    },
    {
      id: 2,
      title: 'Spark Holdings Group Ltd',
      category: 'web',
      description: 'A  website for the Spark Holdings Group Ltd',
      image: proj3,
      technologies: ["NextJS","Postgre Sql","Tailwindcss" , "Framer-motion"],
      features: ['Official website for spark holdings'],
      liveUrl: 'https://sparkholding.rw/',
      githubUrl: '#',
      client: 'Spark Holdings Group Ltd',
      duration: '2 Week',
      results: 'official website launched successfully'
    },
    
    {
      id: 3,
      title: 'Elimo Real Estate',
      category: 'web',
      description: 'A Real estate  website for the Elimo Real estate',
      image: proj2,
      technologies: ["PHP","CSS","HTML5" , "Bootstrap5"],
      features: ['Official website for ads'],
      liveUrl: 'https://elimo.rw/',
      githubUrl: '#',
      client: 'Elimo Real estate',
      duration: '2 Week',
      results: ''
    },
    
    {
      id: 4,
      title: 'Loan MS + Accounting system',
      category: 'web',
      description: 'A Real Web application for loan management and accounting system',
      image: proj4,
      technologies: ["Mysql","Crone","Bootstrap5" , "PHP"],
      features: ['Official Application for tracking the loans payment and management hance accounting management '],
      liveUrl: 'https://fullstack.rw/',
      githubUrl: '#',
      client: '',
      duration: '5 Months',
      results: ''
    },

    
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
        <div className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our successful projects and see how we've helped businesses achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <filter.icon className="text-sm" />
                <span>{filter.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={() => onCursorChange('hover')}
                  onMouseLeave={() => onCursorChange('default')}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map(tech => (
                            <span key={tech} className="px-2 py-1 bg-white/20 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                      <div className="flex space-x-2">
                        <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <FaExternalLinkAlt className="text-gray-600 text-xs" />
                        </button>
                        <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <FaGithub className="text-gray-600 text-xs" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.liveUrl}
                      className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.githubUrl}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:border-gray-400 transition-colors"
                    >
                      <FaGithub className="text-sm" />
                      <span>View Code</span>
                    </motion.a>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Project Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <span className="font-semibold text-gray-700">Client:</span>
                        <span className="ml-2 text-gray-600">{selectedProject.client}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Duration:</span>
                        <span className="ml-2 text-gray-600">{selectedProject.duration}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Results:</span>
                        <span className="ml-2 text-gray-600">{selectedProject.results}</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3 text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;