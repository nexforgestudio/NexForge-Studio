import React from 'react';
import { AnimatedElement } from '../common/AnimatedElement';
import { SectionHeading } from '../common/SectionHeading';
import { motion } from 'framer-motion';
import { Zap, Award, Users, Lightbulb, Lock, MessageSquare, Code } from 'lucide-react';

interface Differentiator {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const differentiators: Differentiator[] = [
  {
    icon: <Zap className="h-10 w-10 text-primary-500" />,
    title: 'Integrated Service Offering',
    description: 'We provide end-to-end solutions under one roof, eliminating the need to manage multiple vendors and ensuring seamless project delivery.'
  },
  {
    icon: <Users className="h-10 w-10 text-primary-500" />,
    title: 'Client-Centric Solutions',
    description: 'Every solution is custom-tailored to your specific business challenges, goals, and workflows, ensuring maximum impact and ROI.'
  },
  {
    icon: <Lock className="h-10 w-10 text-primary-500" />,
    title: 'Quality, Security & Performance',
    description: 'We maintain rigorous standards for code quality, implement robust security measures, and optimize performance at every stage.'
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary-500" />,
    title: 'Cutting-Edge Innovation',
    description: 'Our team stays at the forefront of technological advances, bringing innovative approaches and fresh perspectives to your projects.'
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary-500" />,
    title: 'Professional Customer Service',
    description: 'We provide clear communication, responsive support, and transparent project management throughout our partnership.'
  },
  {
    icon: <Code className="h-10 w-10 text-primary-500" />,
    title: 'Agile & Scalable Team',
    description: 'Our flexible methodology adapts to your changing needs, while our diverse expertise scales to support projects of any size or complexity.'
  }
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary-500"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-primary-300"></div>
      </div>
      
      <div className="container relative z-10">
        <AnimatedElement>
          <SectionHeading 
            title="Why Choose NexForgeStudio" 
            subtitle="Discover what makes our approach to digital solutions unique and effective."
            centered
          />
        </AnimatedElement>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <AnimatedElement 
              key={index} 
              delay={index * 0.1}
              className="h-full"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="h-full bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="bg-primary-50 dark:bg-primary-900/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {item.description}
                </p>
              </motion.div>
            </AnimatedElement>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-400 rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <AnimatedElement animation="fadeInLeft">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  Ready to Transform Your Digital Presence?
                </h3>
                <p className="text-lg text-neutral-800 mb-6">
                  Let's discuss how NexForgeStudio can help you achieve your business goals with tailored digital solutions.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a href="#contact" className="btn bg-neutral-900 text-white hover:bg-neutral-800">
                    Contact Us Today
                  </a>
                  <a href="#services" className="btn bg-white text-neutral-900 hover:bg-neutral-100">
                    Explore Services
                  </a>
                </div>
              </AnimatedElement>
            </div>
            
            <div className="relative bg-neutral-900 flex items-center justify-center p-8 lg:p-0">
              <AnimatedElement animation="fadeInRight">
                <div className="max-w-md">
                  <div className="flex items-center mb-6">
                    <Award className="h-10 w-10 text-primary-500 mr-4" />
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        Award-Winning Solutions
                      </h4>
                      <p className="text-sm text-neutral-300">
                        Recognized for excellence in digital innovation
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {[
                      'Best Enterprise Solution, Tech Awards 2023',
                      'Top App Developer, Mobile Excellence 2022',
                      'Innovation in AI Implementation, Digital Future 2023',
                      'Excellence in UX Design, Design Global 2022'
                    ].map((award, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary-500 flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-bold text-neutral-900">
                          {index + 1}
                        </div>
                        <span className="text-neutral-200">
                          {award}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};