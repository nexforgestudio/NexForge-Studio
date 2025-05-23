import React, { useState } from 'react';
import { AnimatedElement } from '../common/AnimatedElement';
import { SectionHeading } from '../common/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  rating: number;
  industry: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajiv Kumar',
    position: 'Managing Director',
    company: '6 Ballygunge Place',
    quote: 'NexForgeStudio transformed our restaurant\'s digital presence. Their custom software solutions streamlined our operations and enhanced customer experience significantly. The online ordering system they developed increased our delivery orders by 40%.',
    rating: 5,
    industry: 'Restaurant & Hospitality'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'CEO',
    company: 'Artsy - Coffee & Culture',
    quote: 'Working with NexForgeStudio was a game-changer for our coffee house. Their social media management and digital marketing strategies helped us build a strong community around our brand. Our customer engagement has increased by 85%.',
    rating: 5,
    industry: 'Cafe & Entertainment'
  },
  {
    id: 3,
    name: 'Amit Banerjee',
    position: 'Operations Director',
    company: 'Roastery coffee house ! Kolkata',
    quote: 'The inventory management system developed by NexForgeStudio revolutionized how we track our coffee beans and supplies. Their solution helped us reduce waste by 30% and improve stock accuracy to 99%.',
    rating: 5,
    industry: 'Coffee House & Retail'
  },
  {
    id: 4,
    name: 'Sneha Patel',
    position: 'Head of Technology',
    company: 'RiseIn',
    quote: 'NexForgeStudio\'s enterprise solutions exceeded our expectations. Their custom CRM system perfectly aligned with our business processes, resulting in a 50% improvement in customer response time.',
    rating: 5,
    industry: 'Technology'
  },
  {
    id: 5,
    name: 'Arun Mehta',
    position: 'Director',
    company: 'TRUE iQPRO LLP',
    quote: 'The AI-powered analytics platform developed by NexForgeStudio gave us unprecedented insights into our business operations. Their expertise in advanced technologies helped us achieve a 45% increase in operational efficiency.',
    rating: 5,
    industry: 'Professional Services'
  }
];

const companyLogos = [
  'Artsy',
  '6 Ballygunge Place',
  'Roastery',
  'RiseIn',
  'TRUE iQPRO',
  'EcoSolutions',
  'MediaWorks',
  'ConstructionPro'
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-neutral-50 dark:bg-neutral-800">
      <div className="container">
        <AnimatedElement>
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Don't just take our word for it. Hear from businesses that have transformed their digital presence with NexForgeStudio."
            centered
          />
        </AnimatedElement>
        
        <div className="mt-12 relative">
          <AnimatedElement animation="fadeIn" className="relative overflow-hidden">
            <div className="relative">
              <button 
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-neutral-700 shadow-md rounded-full p-2 focus:outline-none hover:bg-primary-50 dark:hover:bg-neutral-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-neutral-700 dark:text-white" />
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-neutral-700 shadow-md rounded-full p-2 focus:outline-none hover:bg-primary-50 dark:hover:bg-neutral-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-neutral-700 dark:text-white" />
              </button>
              
              <div className="mx-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-neutral-700 rounded-xl shadow-md p-6 md:p-8"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4 flex flex-col items-center md:items-start">
                        <div className="w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary-500">
                            {testimonials[currentIndex].name.charAt(0)}
                          </span>
                        </div>
                        
                        <div className="mt-4 text-center md:text-left">
                          <h4 className="font-bold text-neutral-900 dark:text-white">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-sm text-neutral-500 dark:text-neutral-300">
                            {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                          </p>
                          
                          <div className="flex mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i}
                                className={`h-4 w-4 ${
                                  i < testimonials[currentIndex].rating
                                    ? 'text-primary-500 fill-primary-500'
                                    : 'text-neutral-300 dark:text-neutral-500'
                                }`}
                              />
                            ))}
                          </div>
                          
                          <span className="inline-block mt-2 px-2 py-1 bg-neutral-100 dark:bg-neutral-600 text-xs rounded text-neutral-700 dark:text-neutral-200">
                            {testimonials[currentIndex].industry}
                          </span>
                        </div>
                      </div>
                      
                      <div className="md:w-3/4">
                        <blockquote className="text-lg md:text-xl italic text-neutral-700 dark:text-neutral-200 relative">
                          <span className="absolute top-0 left-0 text-4xl text-primary-200 dark:text-primary-700">"</span>
                          <p className="pl-8">
                            {testimonials[currentIndex].quote}
                          </p>
                          <span className="absolute bottom-0 right-0 text-4xl text-primary-200 dark:text-primary-700">"</span>
                        </blockquote>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`mx-1 h-2 rounded-full transition-all ${
                    currentIndex === index
                      ? 'w-8 bg-primary-500'
                      : 'w-2 bg-neutral-300 dark:bg-neutral-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </AnimatedElement>
        </div>
        
        <div className="mt-16">
          <AnimatedElement>
            <h3 className="text-center text-lg text-neutral-500 dark:text-neutral-400 mb-6">
              Trusted by leading companies across industries
            </h3>
          </AnimatedElement>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyLogos.map((company, index) => (
              <AnimatedElement key={company} delay={index * 0.1}>
                <div className="h-20 bg-white dark:bg-neutral-700 rounded-md shadow-sm flex items-center justify-center p-4">
                  <div className="text-xl font-bold text-neutral-400 dark:text-neutral-300">
                    {company}
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};