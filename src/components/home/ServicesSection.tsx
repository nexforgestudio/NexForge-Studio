import React, { useState } from 'react';
import { AnimatedElement } from '../common/AnimatedElement';
import { SectionHeading } from '../common/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Laptop, Server, BrainCircuit, Fingerprint, BarChart3, ChevronRight, Globe, Smartphone, Wrench, Database, Shield, Cloud, Layout, TestTube, Network, Bot, LineChart, Boxes, RockingChair as Chain, Lock, GitBranch, AppWindow, Glasses, Brain, Building, Cpu, Workflow, Monitor, HardDrive, Cog, Users, Share2, MessageCircle, BarChart, TrendingUp, Zap } from 'lucide-react';

interface ServiceItem {
  name: string;
  icon: JSX.Element;
  description?: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  icon: JSX.Element;
  services: ServiceItem[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'entry-level',
    title: 'Entry-Level Services',
    icon: <Code className="w-5 h-5" />,
    services: [
      { name: 'Custom software development for specific business needs', icon: <Code className="w-4 h-4" /> },
      { name: 'Website design and development', icon: <Globe className="w-4 h-4" /> },
      { name: 'Mobile app development (iOS/Android)', icon: <Smartphone className="w-4 h-4" /> },
      { name: 'Basic IT consulting and support', icon: <Wrench className="w-4 h-4" /> },
      { name: 'Software maintenance and updates', icon: <Cog className="w-4 h-4" /> },
      { name: 'Small-scale data management', icon: <Database className="w-4 h-4" /> },
      { name: 'Bug fixing and quality assurance', icon: <Shield className="w-4 h-4" /> }
    ]
  },
  {
    id: 'mid-range',
    title: 'Mid-Range Services',
    icon: <Laptop className="w-5 h-5" />,
    services: [
      { name: 'Enterprise software solutions', icon: <Building className="w-4 h-4" /> },
      { name: 'Custom CRM systems', icon: <Users className="w-4 h-4" /> },
      { name: 'ERP implementation', icon: <Workflow className="w-4 h-4" /> },
      { name: 'Content management systems', icon: <Layout className="w-4 h-4" /> },
      { name: 'E-commerce platform development', icon: <Share2 className="w-4 h-4" /> },
      { name: 'API development and integration', icon: <Zap className="w-4 h-4" /> },
      { name: 'Database design and optimization', icon: <Database className="w-4 h-4" /> },
      { name: 'UI/UX design and testing', icon: <Layout className="w-4 h-4" /> },
      { name: 'Software testing and quality assurance', icon: <TestTube className="w-4 h-4" /> },
      { name: 'IT infrastructure management', icon: <Network className="w-4 h-4" /> },
      { name: 'Cloud migration services', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Software product development', icon: <AppWindow className="w-4 h-4" /> }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Services',
    icon: <BrainCircuit className="w-5 h-5" />,
    services: [
      { name: 'AI and machine learning solutions', icon: <Bot className="w-4 h-4" /> },
      { name: 'Big data analytics and implementation', icon: <LineChart className="w-4 h-4" /> },
      { name: 'IoT application development', icon: <Cpu className="w-4 h-4" /> },
      { name: 'Blockchain development', icon: <Chain className="w-4 h-4" /> },
      { name: 'Cybersecurity services and solutions', icon: <Lock className="w-4 h-4" /> },
      { name: 'DevOps implementation and management', icon: <GitBranch className="w-4 h-4" /> },
      { name: 'SaaS product development', icon: <Cloud className="w-4 h-4" /> },
      { name: 'AR/VR applications', icon: <Glasses className="w-4 h-4" /> },
      { name: 'Natural language processing solutions', icon: <MessageCircle className="w-4 h-4" /> },
      { name: 'Computer vision systems', icon: <Brain className="w-4 h-4" /> },
      { name: 'Digital transformation consulting', icon: <Workflow className="w-4 h-4" /> },
      { name: 'Enterprise architecture design', icon: <Building className="w-4 h-4" /> },
      { name: 'High-performance computing solutions', icon: <Cpu className="w-4 h-4" /> },
      { name: 'Edge computing implementations', icon: <Boxes className="w-4 h-4" /> }
    ]
  },
  {
    id: 'enterprise',
    title: 'Enterprise-Level Services',
    icon: <Server className="w-5 h-5" />,
    services: [
      { name: 'Full digital ecosystem development', icon: <Boxes className="w-4 h-4" /> },
      { name: 'Multi-platform enterprise systems integration', icon: <Network className="w-4 h-4" /> },
      { name: 'Quantum computing applications', icon: <Cpu className="w-4 h-4" /> },
      { name: 'Advanced predictive analytics', icon: <LineChart className="w-4 h-4" /> },
      { name: 'Custom AI model development and training', icon: <Brain className="w-4 h-4" /> },
      { name: 'Mission-critical systems', icon: <Shield className="w-4 h-4" /> },
      { name: 'Industry-specific regulatory compliance solutions', icon: <Lock className="w-4 h-4" /> },
      { name: 'Large-scale distributed systems architecture', icon: <Building className="w-4 h-4" /> },
      { name: 'Enterprise-wide digital transformation strategy', icon: <Workflow className="w-4 h-4" /> },
      { name: 'Proprietary technology research and development', icon: <BrainCircuit className="w-4 h-4" /> }
    ]
  },
  {
    id: 'system-management',
    title: 'System Management Services',
    icon: <Fingerprint className="w-5 h-5" />,
    services: [
      { name: 'IT infrastructure monitoring and management', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Network administration and optimization', icon: <Network className="w-4 h-4" /> },
      { name: 'Server setup, maintenance, and administration', icon: <Server className="w-4 h-4" /> },
      { name: 'Cloud infrastructure management', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Virtualization services', icon: <Boxes className="w-4 h-4" /> },
      { name: 'Backup and disaster recovery solutions', icon: <HardDrive className="w-4 h-4" /> },
      { name: 'IT asset management', icon: <Database className="w-4 h-4" /> },
      { name: 'System integration services', icon: <Workflow className="w-4 h-4" /> },
      { name: 'Performance monitoring and optimization', icon: <LineChart className="w-4 h-4" /> },
      { name: 'Patch management and system updates', icon: <Cog className="w-4 h-4" /> },
      { name: 'On-call support and incident response', icon: <Shield className="w-4 h-4" /> },
      { name: 'Configuration management', icon: <Wrench className="w-4 h-4" /> },
      { name: 'Capacity planning and scaling solutions', icon: <TrendingUp className="w-4 h-4" /> },
      { name: 'IT compliance management', icon: <Lock className="w-4 h-4" /> },
      { name: 'Remote systems management', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Hybrid cloud management', icon: <Cloud className="w-4 h-4" /> }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Management Services',
    icon: <BarChart3 className="w-5 h-5" />,
    services: [
      { name: 'Social media strategy development', icon: <Workflow className="w-4 h-4" /> },
      { name: 'Content creation and curation', icon: <Layout className="w-4 h-4" /> },
      { name: 'Social media account setup and branding', icon: <Users className="w-4 h-4" /> },
      { name: 'Community management and engagement', icon: <MessageCircle className="w-4 h-4" /> },
      { name: 'Social media analytics and reporting', icon: <BarChart className="w-4 h-4" /> },
      { name: 'Paid social media advertising campaigns', icon: <TrendingUp className="w-4 h-4" /> },
      { name: 'Influencer partnership management', icon: <Users className="w-4 h-4" /> },
      { name: 'Social listening and brand monitoring', icon: <Share2 className="w-4 h-4" /> },
      { name: 'Crisis management on social platforms', icon: <Shield className="w-4 h-4" /> },
      { name: 'Social media contests and promotions', icon: <Zap className="w-4 h-4" /> },
      { name: 'Cross-platform content strategy', icon: <Layout className="w-4 h-4" /> },
      { name: 'Social media integration', icon: <Share2 className="w-4 h-4" /> },
      { name: 'Social commerce implementation', icon: <Share2 className="w-4 h-4" /> },
      { name: 'Social CRM integration', icon: <Users className="w-4 h-4" /> },
      { name: 'Automated social media marketing tools', icon: <Bot className="w-4 h-4" /> },
      { name: 'Social media training and workshops', icon: <Users className="w-4 h-4" /> },
      { name: 'Social media audit and competitive analysis', icon: <LineChart className="w-4 h-4" /> }
    ]
  }
];

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="services" className="section bg-neutral-50 dark:bg-neutral-800">
      <div className="container">
        <AnimatedElement>
          <SectionHeading 
            title="Our Comprehensive Services" 
            subtitle="From concept to deployment and beyond, we offer end-to-end digital solutions to power your business growth."
            centered
          />
        </AnimatedElement>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {serviceCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              className={`px-6 py-3 rounded-lg flex items-center gap-3 transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-neutral-900 shadow-lg shadow-primary-500/20'
                  : 'bg-white dark:bg-neutral-700 text-neutral-700 dark:text-white hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:shadow-md'
              }`}
            >
              <div className={`${
                activeCategory === category.id
                  ? 'text-neutral-900'
                  : 'text-primary-500'
              }`}>
                {category.icon}
              </div>
              <span className="text-sm font-medium whitespace-nowrap">{category.title}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <div className="bg-white dark:bg-neutral-700 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6 flex items-center">
                  {serviceCategories.find(c => c.id === activeCategory)?.icon}
                  <span className="ml-2">
                    {serviceCategories.find(c => c.id === activeCategory)?.title}
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {serviceCategories
                    .find(c => c.id === activeCategory)
                    ?.services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="flex items-start gap-3 p-4 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors group"
                      >
                        <div className="mt-1 p-1.5 rounded-md bg-primary-100 dark:bg-primary-900/30 text-primary-500 group-hover:bg-primary-500 group-hover:text-neutral-900 transition-colors">
                          {service.icon}
                        </div>
                        <span className="text-sm text-neutral-600 dark:text-neutral-300">
                          {service.name}
                        </span>
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-neutral-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
              <Code className="w-6 h-6 text-primary-500 group-hover:text-neutral-900" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
              Custom Software Development
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Tailored software solutions designed to meet your specific business needs and requirements.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-neutral-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
              <Laptop className="w-6 h-6 text-primary-500 group-hover:text-neutral-900" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
              Website & Mobile App Development
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Professional websites and mobile applications with responsive design and intuitive user experience.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-neutral-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
              <Server className="w-6 h-6 text-primary-500 group-hover:text-neutral-900" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
              IT Consulting and Support
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Expert advice and ongoing support to optimize your technology investments and operations.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-neutral-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
              <BrainCircuit className="w-6 h-6 text-primary-500 group-hover:text-neutral-900" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
              Software Maintenance
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Continuous updates, bug fixes, and enhancements to keep your software running smoothly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};