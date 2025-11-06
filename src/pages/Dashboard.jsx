// src/components/dashboard/Dashboard.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiGlobe, 
  FiServer, 
  FiCreditCard, 
  FiSettings,
  FiCalendar,
  FiCheckCircle,
  FiAlertCircle
} from 'react-icons/fi';

const Dashboard = () => {
  const userDomains = [
    { name: 'example.com', expiry: '2024-12-31', status: 'Active' },
    { name: 'mysite.net', expiry: '2024-11-15', status: 'Active' },
    { name: 'myblog.org', expiry: '2024-10-01', status: 'Expiring Soon' }
  ];

  const userHosting = [
    { plan: 'Business', domain: 'example.com', status: 'Active', storage: '45/50 GB' },
    { plan: 'Starter', domain: 'myblog.org', status: 'Active', storage: '8/10 GB' }
  ];

  const stats = [
    { 
      label: 'Domains', 
      value: '3', 
      icon: FiGlobe,
      color: 'from-blue-500 to-cyan-500',
      change: '+1'
    },
    { 
      label: 'Hosting Plans', 
      value: '2', 
      icon: FiServer,
      color: 'from-green-500 to-emerald-500',
      change: '+0'
    },
    { 
      label: 'Invoices', 
      value: '3', 
      icon: FiCreditCard,
      color: 'from-purple-500 to-pink-500',
      change: '+2'
    },
    { 
      label: 'Support Tickets', 
      value: '0', 
      icon: FiSettings,
      color: 'from-orange-500 to-red-500',
      change: '+0'
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'expiring soon':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'suspended':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return <FiCheckCircle className="w-4 h-4" />;
      case 'expiring soon':
        return <FiAlertCircle className="w-4 h-4" />;
      default:
        return <FiAlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-xl text-gray-600">Welcome back! Here's your hosting overview.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Domains Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-200/50 bg-white/50">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <FiGlobe className="w-5 h-5 text-blue-500" />
                Your Domains
              </h2>
            </div>
            <div className="divide-y divide-gray-200/50">
              {userDomains.map((domain, index) => (
                <motion.div
                  key={domain.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 hover:bg-gray-50/50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{domain.name}</h4>
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(domain.status)}`}>
                          {getStatusIcon(domain.status)}
                          {domain.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FiCalendar className="w-4 h-4" />
                        <span>Expires: {domain.expiry}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
                        Manage
                      </button>
                      <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                        Renew
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-gray-200/50 bg-white/50">
              <button className="w-full py-2 text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-2 transition-colors">
                <FiGlobe className="w-4 h-4" />
                Register New Domain
              </button>
            </div>
          </motion.div>

          {/* Hosting Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-200/50 bg-white/50">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <FiServer className="w-5 h-5 text-green-500" />
                Hosting Plans
              </h2>
            </div>
            <div className="divide-y divide-gray-200/50">
              {userHosting.map((hosting, index) => (
                <motion.div
                  key={hosting.domain}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 hover:bg-gray-50/50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{hosting.plan} Plan</h4>
                      <p className="text-sm text-gray-600">Domain: {hosting.domain}</p>
                    </div>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(hosting.status)}`}>
                      {getStatusIcon(hosting.status)}
                      {hosting.status}
                    </span>
                  </div>
                  
                  {/* Storage Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Storage</span>
                      <span>{hosting.storage}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${(parseInt(hosting.storage.split('/')[0]) / parseInt(hosting.storage.split('/')[1].split(' ')[0])) * 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
                      Manage
                    </button>
                    <button className="flex-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                      Upgrade
                    </button>
                    <button className="flex-1 px-3 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors">
                      cPanel
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-gray-200/50 bg-white/50">
              <button className="w-full py-2 text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-2 transition-colors">
                <FiServer className="w-4 h-4" />
                Add Hosting Plan
              </button>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-blue-100 text-sm mb-4">Our support team is here 24/7</p>
            <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg font-medium transition-colors">
              Contact Support
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
            <h3 className="font-semibold mb-2">Resources</h3>
            <p className="text-green-100 text-sm mb-4">Guides and documentation</p>
            <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg font-medium transition-colors">
              View Docs
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white">
            <h3 className="font-semibold mb-2">Billing</h3>
            <p className="text-orange-100 text-sm mb-4">Manage your invoices and payments</p>
            <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg font-medium transition-colors">
              View Invoices
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;