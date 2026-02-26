// pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUsers,
  FaAward,
  FaRocket,
  FaHeart,
  FaLinkedin,
  FaTwitter,
  FaGithub
} from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPython } from 'react-icons/si';

const About = ({ onCursorChange }) => {
  const stats = [
    { number: '420+', label: 'Projects Completed', icon: FaRocket },
    { number: '12+', label: 'Years Experience', icon: FaAward },
    { number: '95%', label: 'Client Satisfaction', icon: FaHeart },
    { number: '50+', label: 'Team Members', icon: FaUsers },
  ];

  const team = [
    {
      name: 'Willy Liambi',
      role: 'Chief Operation Officer',
      image: '/api/placeholder/300/300',
      bio: '15+ years in tech industry. Passionate about building innovative solutions.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Jean Ntazinda',
      role: 'Chief Finance Officer',
      image: '/api/placeholder/300/300',
      bio: 'Expert in cloud architecture and scalable systems. Loves solving complex problems.',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Agatesi Chartine',
      role: 'Administrative Assistant',
      image: '/api/placeholder/300/300',
      bio: 'Award-winning designer with a passion for user-centered design principles.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Bonheur Ndikumwenayo',
      role: 'Lead Developer',
      image: '/api/placeholder/300/300',
      bio: 'Full-stack wizard specializing in React, Node.js, and cloud technologies.',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'ISHIMWE GHISLAIN',
      role: 'Software Developer',
      image: '/api/placeholder/300/300',
      bio: 'Full-Stack Engineer | Next.js, React, Node | PostgreSQL, MongoDB | TypeScript | Mobile & Blockchain DApps |',
      social: { linkedin: '#', github: '#' }
    },
  ];

  const values = [
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'We love what we do and it shows in every project we deliver.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in success.'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge technology.'
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in everything we do.'
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We are a passionate team of innovators, designers, and developers dedicated to
              creating digital solutions that make a real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="text-white text-2xl" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2013, Fullstack Software Ltd started as a small team of passionate
                developers with a vision to create digital solutions that make a difference.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Over the years, we've grown into a full-service digital agency, but our core
                mission remains the same: to deliver exceptional software that helps businesses
                thrive in the digital age.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                >
                  Meet Our Team
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-purple-500 transition-colors"
                >
                  View Timeline
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-600 to-blue-500 rounded-3xl p-8 text-white">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FaAward className="text-4xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Award Winning</h3>
                  <p className="opacity-90 mb-6">
                    Recognized as one of the top software development companies
                    for innovation and excellence.
                  </p>
                  <div className="flex justify-center space-x-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-sm opacity-80">Industry Awards</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">95%</div>
                      <div className="text-sm opacity-80">Client Retention</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-purple-200 mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <FaLinkedin className="text-sm" />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={member.social.twitter}
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <FaTwitter className="text-sm" />
                    </motion.a>
                  )}
                  {member.social.github && (
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={member.social.github}
                      className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <FaGithub className="text-sm" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;