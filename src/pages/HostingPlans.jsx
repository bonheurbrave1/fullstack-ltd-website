// src/pages/HostingPlans.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiServer, FiZap, FiShield, FiGlobe } from 'react-icons/fi';
import { FaCrown, FaRocket } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const HostingPlans = () => {
  const [billingCycle, setBillingCycle] = useState('yearly');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { addToCart } = useCart();

  const plans = [
    {
      id: 1,
      name: 'Starter',
      icon: FiServer,
      price: { monthly: 9.99, yearly: 99.99 },
      description: 'Perfect for personal websites and blogs',
      features: [
        '1 Website',
        '10 GB SSD Storage',
        'Unmetered Bandwidth',
        'Free SSL Certificate',
        'cPanel Control Panel',
        'WordPress Optimized'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Business',
      icon: FaRocket,
      price: { monthly: 19.99, yearly: 199.99 },
      description: 'Ideal for growing businesses and e-commerce',
      features: [
        '10 Websites',
        '50 GB NVMe Storage',
        'Unmetered Bandwidth',
        'Free SSL Certificate',
        'Free Domain',
        '24/7 Priority Support',
        'Daily Backups',
        'WordPress Pre-installed'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'Enterprise',
      icon: FaCrown,
      price: { monthly: 49.99, yearly: 499.99 },
      description: 'Maximum power for high-traffic websites',
      features: [
        'Unlimited Websites',
        '200 GB NVMe Storage',
        'Unmetered Bandwidth',
        'Free SSL Certificate',
        'Free Domain',
        '24/7 Premium Support',
        'Daily Backups',
        'Advanced Security Suite',
        'Dedicated IP',
        'CDN Included'
      ],
      popular: false,
      color: 'from-amber-500 to-orange-500'
    }
  ];

  const features = [
    { icon: FiZap, title: 'Lightning Fast', description: 'NVMe storage and optimized servers' },
    { icon: FiShield, title: 'Secure', description: 'Free SSL and advanced security' },
    { icon: FiGlobe, title: 'Global CDN', description: 'Fast loading worldwide' },
    { icon: FiServer, title: '99.9% Uptime', description: 'Reliable hosting guarantee' }
  ];

  const handleAddToCart = (plan) => {
    addToCart({
      id: `hosting-${plan.id}`,
      name: `${plan.name} Hosting`,
      price: plan.price[billingCycle],
      type: 'hosting',
      billingCycle
    });
    toast.success(`${plan.name} hosting added to cart!`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Powerful <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hosting</span> Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Scale your online presence with our high-performance hosting packages. 
            From personal blogs to enterprise applications, we've got you covered.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200/50 mb-16"
        >
          {['monthly', 'yearly'].map((cycle) => (
            <button
              key={cycle}
              onClick={() => setBillingCycle(cycle)}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                billingCycle === cycle
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {cycle === 'yearly' ? 'Yearly (Save 20%)' : 'Monthly'}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Plans */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => setSelectedPlan(plan.id)}
              onHoverEnd={() => setSelectedPlan(null)}
              className={`relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border-2 transition-all duration-500 ${
                plan.popular 
                  ? 'border-purple-500/50 scale-105' 
                  : 'border-transparent hover:border-blue-500/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <plan.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-5xl font-bold text-gray-900">
                      ${plan.price[billingCycle]}
                    </span>
                    <span className="text-gray-500 text-lg">
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-green-600 font-semibold mt-2">
                      Save ${(plan.price.monthly * 12 - plan.price.yearly).toFixed(2)} yearly
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center space-x-3 text-gray-700"
                    >
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <FiCheck className="w-4 h-4 text-green-600" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAddToCart(plan)}
                  className={`w-full py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden"
        >
          <div className="px-8 py-6 border-b border-gray-200/50">
            <h3 className="text-2xl font-bold text-gray-900">Plan Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200/50">
                  <th className="text-left p-6 font-semibold text-gray-900">Feature</th>
                  {plans.map(plan => (
                    <th key={plan.id} className="p-6 text-center font-semibold text-gray-900">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {['Websites', 'Storage', 'Bandwidth', 'Free Domain', 'Support'].map((feature, index) => (
                  <tr key={feature} className="border-b border-gray-200/50 hover:bg-gray-50/50 transition-colors">
                    <td className="p-6 font-medium text-gray-700">{feature}</td>
                    {plans.map(plan => (
                      <td key={plan.id} className="p-6 text-center text-gray-600">
                        {feature === 'Websites' && (plan.id === 1 ? '1' : plan.id === 2 ? '10' : 'Unlimited')}
                        {feature === 'Storage' && (plan.id === 1 ? '10 GB' : plan.id === 2 ? '50 GB' : '200 GB')}
                        {feature === 'Bandwidth' && 'Unmetered'}
                        {feature === 'Free Domain' && (plan.id === 1 ? 'No' : 'Yes')}
                        {feature === 'Support' && (plan.id === 1 ? 'Basic' : plan.id === 2 ? 'Priority' : 'Premium')}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HostingPlans;