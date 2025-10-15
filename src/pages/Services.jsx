// pages/Services.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaMobile, 
  FaLaptopCode, 
  FaPalette, 
  FaCloud,
  FaCode,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaCheck,
  FaArrowRight
} from 'react-icons/fa';

const Services = ({ onCursorChange }) => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: FaMobile,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: [
        'iOS & Android Development',
        'React Native & Flutter',
        'Performance Optimization',
        'App Store Deployment',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaLaptopCode,
      title: 'Web Development',
      description: 'Scalable web applications built with modern frameworks and best practices.',
      features: [
        'Responsive Web Design',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'API Integration',
        'Performance Optimization',
        'SEO Optimization'
      ],
      technologies: ['React', 'Vue.js', 'Next.js', 'Node.js'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that prioritize user experience and accessibility.',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Design Systems',
        'Interaction Design',
        'Accessibility Compliance',
        'Brand Identity'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: FaCloud,
      title: 'Cloud Solutions',
      description: 'Robust cloud infrastructure and deployment solutions for scalable applications.',
      features: [
        'Cloud Architecture',
        'DevOps & CI/CD',
        'Microservices',
        'Containerization',
        'Serverless Computing',
        'Monitoring & Analytics'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Powerful server-side solutions with robust APIs and database management.',
      features: [
        'REST & GraphQL APIs',
        'Database Design',
        'Authentication & Authorization',
        'Caching Strategies',
        'Message Queues',
        'Security Implementation'
      ],
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Security & DevOps',
      description: 'Secure infrastructure and streamlined development operations.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Monitoring & Logging',
        'Disaster Recovery'
      ],
      technologies: ['Terraform', 'Jenkins', 'GitLab CI', 'Prometheus'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive digital solutions tailored to drive your business growth and success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Services List */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-4">
                {services.map((service, index) => (
                  <motion.button
                    key={service.title}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveService(index)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                      activeService === index
                        ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 shadow-lg'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onMouseEnter={() => onCursorChange('hover')}
                    onMouseLeave={() => onCursorChange('default')}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                        <service.icon className="text-white text-lg" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Service Details */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r text-white ${services[activeService].color} rounded-2xl flex items-center justify-center`}>
                    {services[activeService].icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {services[activeService].title}
                      </h2>
                      <p className="text-gray-600 mt-2">
                        {services[activeService].description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        What We Offer
                      </h3>
                      <ul className="space-y-3">
                        {services[activeService].features.map((feature, index) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <FaCheck className="text-green-600 text-xs" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {services[activeService].technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Ready to get started?
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Let's discuss your project requirements and create a tailored solution.
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2"
                        >
                          <span>Get Free Consultation</span>
                          <FaArrowRight className="text-sm" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology for delivering successful projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We understand your goals and requirements through detailed analysis.'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Creating intuitive user experiences and beautiful interfaces.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building robust, scalable solutions with best practices.'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Thorough testing and seamless deployment to production.'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;