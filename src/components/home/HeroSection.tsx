import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 z-0"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-300"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-primary-200"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white leading-tight">
                All-in-One <span className="text-primary-500">Digital Craftsmanship</span>
              </h1>
              <p className="mt-6 text-xl text-neutral-700 dark:text-neutral-300">
                From custom software development to enterprise solutions, we craft digital experiences that transform businesses and drive growth.
              </p>
              
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2" />
                  <span className="text-neutral-700 dark:text-neutral-300">Tailored Solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2" />
                  <span className="text-neutral-700 dark:text-neutral-300">Cutting-Edge Tech</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2" />
                  <span className="text-neutral-700 dark:text-neutral-300">Scalable Growth</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2" />
                  <span className="text-neutral-700 dark:text-neutral-300">Expert Support</span>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn btn-primary">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#services" className="btn btn-outline">
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video bg-white dark:bg-neutral-800 rounded-lg shadow-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-full w-full rounded-lg overflow-hidden">
                  {/* Stylized illustration representing digital craftsmanship */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-neutral-900/20 z-10"></div>
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 p-8">
                    <div className="bg-primary-100 dark:bg-primary-900/30 rounded-lg"></div>
                    <div className="bg-neutral-100 dark:bg-neutral-700 rounded-lg col-span-2"></div>
                    <div className="bg-primary-200 dark:bg-primary-800/30 rounded-lg row-span-2"></div>
                    <div className="bg-neutral-200 dark:bg-neutral-600 rounded-lg"></div>
                    <div className="bg-primary-300 dark:bg-primary-700/30 rounded-lg"></div>
                    <div className="bg-neutral-100 dark:bg-neutral-700 rounded-lg col-span-2"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              className="absolute -left-6 top-1/4 bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-3"
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-center">
                <div className="h-8 w-8 bg-primary-500 rounded-full flex items-center justify-center text-neutral-900 font-bold text-xs">AI</div>
                <span className="ml-2 text-sm font-medium text-neutral-900 dark:text-white">AI Solutions</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -right-6 bottom-1/4 bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-3"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-center">
                <div className="h-8 w-8 bg-primary-500 rounded-full flex items-center justify-center text-neutral-900 font-bold text-xs">CX</div>
                <span className="ml-2 text-sm font-medium text-neutral-900 dark:text-white">Custom Experiences</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};