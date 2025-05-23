import React, { useState } from 'react';
import { AnimatedElement } from '../common/AnimatedElement';
import { SectionHeading } from '../common/SectionHeading';
import { motion } from 'framer-motion';
import { ExternalLink, Filter, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  industry: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Enterprise CRM Transformation',
    category: 'Enterprise Software',
    industry: 'Healthcare',
    image: 'https://images.pexels.com/photos/6893633/pexels-photo-6893633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Complete redesign and implementation of an integrated CRM system for a leading healthcare provider.',
    challenge: 'The client\'s outdated CRM system was hindering growth, causing data silos, and creating inefficient workflows across departments.',
    solution: 'Developed a custom enterprise CRM with automated workflows, unified data architecture, and integrated analytics.',
    result: 'Reduced administrative time by 35%, improved patient satisfaction by 28%, and enabled data-driven decision making.'
  },
  {
    id: 2,
    title: 'Supply Chain IoT Integration',
    category: 'IoT Development',
    industry: 'Logistics',
    image: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'IoT solution for real-time tracking and optimization of global logistics operations.',
    challenge: 'The client needed real-time visibility across their international supply chain to reduce delays and improve efficiency.',
    solution: 'Implemented IoT sensors and developed a centralized dashboard with predictive analytics and alert systems.',
    result: 'Decreased shipping delays by 47%, reduced operational costs by 23%, and improved delivery time accuracy to 98%.'
  },
  {
    id: 3,
    title: 'AI-Powered Customer Service',
    category: 'AI & Machine Learning',
    industry: 'Retail',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Intelligent chatbot and analytics platform for enhanced customer engagement.',
    challenge: 'The retail client was experiencing high customer service costs and inconsistent response quality across channels.',
    solution: 'Designed an AI-powered chatbot with natural language processing and sentiment analysis, integrated with existing CRM.',
    result: 'Reduced customer service costs by 35%, improved response time by 87%, and increased customer satisfaction scores.'
  },
  {
    id: 4,
    title: 'Financial Blockchain Platform',
    category: 'Blockchain Development',
    industry: 'Finance',
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Secure blockchain solution for transparent transactions and regulatory compliance.',
    challenge: 'The financial institution needed to improve transaction security, reduce fraud, and ensure regulatory compliance.',
    solution: 'Developed a private blockchain platform with smart contracts, multi-signature authentication, and automated compliance reporting.',
    result: 'Eliminated transaction fraud, reduced settlement times by 96%, and streamlined compliance reporting by 78%.'
  },
  {
    id: 5,
    title: 'Mobile ERP Application',
    category: 'Mobile App Development',
    industry: 'Manufacturing',
    image: 'https://images.pexels.com/photos/3912992/pexels-photo-3912992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Cross-platform mobile ERP solution for manufacturing process management.',
    challenge: 'The manufacturing client needed to give floor managers and executives real-time access to production data from anywhere.',
    solution: 'Created a mobile ERP application with real-time dashboards, inventory management, and production tracking.',
    result: 'Increased production efficiency by 22%, improved inventory accuracy to 99.8%, and reduced decision-making time by 65%.'
  },
  {
    id: 6,
    title: 'Digital Marketing Ecosystem',
    category: 'Social Media Management',
    industry: 'Hospitality',
    image: 'https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Integrated marketing platform with analytics and automated campaign management.',
    challenge: 'The hospitality chain needed to unify their digital marketing efforts across 50+ locations and measure ROI effectively.',
    solution: 'Built a centralized marketing platform with automated content distribution, performance analytics, and campaign optimization.',
    result: 'Increased social media engagement by 145%, improved marketing ROI by 67%, and reduced marketing operational costs by 28%.'
  }
];

const categories = Array.from(new Set(projects.map(project => project.category)));
const industries = Array.from(new Set(projects.map(project => project.industry)));

export const PortfolioSection: React.FC = () => {
  const [filters, setFilters] = useState({
    category: '',
    industry: ''
  });
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const filteredProjects = projects.filter(project => {
    return (
      (filters.category === '' || project.category === filters.category) &&
      (filters.industry === '' || project.industry === filters.industry)
    );
  });
  
  const clearFilters = () => {
    setFilters({
      category: '',
      industry: ''
    });
  };
  
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <AnimatedElement>
          <SectionHeading 
            title="Our Work" 
            subtitle="Explore our portfolio of successful projects across industries and technologies."
            centered
          />
        </AnimatedElement>
        
        <AnimatedElement delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="flex flex-wrap gap-3 mb-4 md:mb-0">
              <div className="inline-flex items-center">
                <Filter className="w-4 h-4 mr-2 text-neutral-500 dark:text-neutral-400" />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Filters:
                </span>
              </div>
              
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="px-3 py-1 text-sm bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md text-neutral-700 dark:text-neutral-300"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={filters.industry}
                onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
                className="px-3 py-1 text-sm bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-md text-neutral-700 dark:text-neutral-300"
              >
                <option value="">All Industries</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              
              {(filters.category !== '' || filters.industry !== '') && (
                <button 
                  onClick={clearFilters}
                  className="inline-flex items-center px-3 py-1 text-sm bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                >
                  <X className="w-3 h-3 mr-1" />
                  Clear
                </button>
              )}
            </div>
            
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <AnimatedElement key={project.id} delay={index * 0.1} className="h-full">
              <div 
                className="group h-full card overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-medium"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent flex items-end">
                    <div className="p-4">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-primary-500 text-neutral-900 rounded-md mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-neutral-200">{project.industry}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-neutral-600 dark:text-neutral-300">{project.description}</p>
                  <button 
                    className="mt-3 inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm"
                  >
                    View Case Study
                    <ExternalLink className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div 
                className="fixed inset-0 bg-neutral-900/75 transition-opacity" 
                aria-hidden="true"
                onClick={() => setSelectedProject(null)}
              ></div>
              
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative inline-block align-bottom bg-white dark:bg-neutral-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
              >
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white dark:bg-neutral-700 rounded-md text-neutral-400 dark:text-neutral-300 hover:text-neutral-500 dark:hover:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    onClick={() => setSelectedProject(null)}
                  >
                    <span className="sr-only">Close</span>
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="overflow-hidden">
                  <div className="relative aspect-video">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-primary-500 text-neutral-900 rounded-md mb-2">
                        {selectedProject.category} | {selectedProject.industry}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedProject.title}</h3>
                    </div>
                  </div>
                  
                  <div className="px-6 py-8">
                    <div className="prose dark:prose-invert max-w-none">
                      <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                        {selectedProject.description}
                      </p>
                      
                      <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">The Challenge</h4>
                      <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                        {selectedProject.challenge}
                      </p>
                      
                      <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Our Solution</h4>
                      <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                        {selectedProject.solution}
                      </p>
                      
                      <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">The Results</h4>
                      <p className="text-neutral-600 dark:text-neutral-300">
                        {selectedProject.result}
                      </p>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                      <button
                        type="button"
                        className="btn btn-primary"
                      >
                        Download Case Study
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <AnimatedElement>
            <a href="#contact" className="btn btn-primary">
              Discuss Your Project
            </a>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};