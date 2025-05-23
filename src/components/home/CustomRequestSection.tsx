import React, { useState } from 'react';
import { AnimatedElement } from '../common/AnimatedElement';
import { SectionHeading } from '../common/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CustomRequest {
  description: string;
  requirements: string;
  timeline: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
}

export const CustomRequestSection: React.FC = () => {
  const [formData, setFormData] = useState<CustomRequest>({
    description: '',
    requirements: '',
    timeline: '',
    budget: '',
    name: '',
    email: '',
    phone: ''
  });
  
  const [errors, setErrors] = useState<Partial<CustomRequest>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = () => {
    const newErrors: Partial<CustomRequest> = {};
    
    if (!formData.description.trim()) {
      newErrors.description = 'Project description is required';
    }
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    if (errors[name as keyof CustomRequest]) {
      setErrors(prevState => ({
        ...prevState,
        [name]: undefined
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/nexforgestudio@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          description: '',
          requirements: '',
          timeline: '',
          budget: '',
          name: '',
          email: '',
          phone: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="custom-request" className="section bg-neutral-50 dark:bg-neutral-800">
      <div className="container">
        <AnimatedElement>
          <SectionHeading 
            title="Request Custom Services" 
            subtitle="Need something specific that's not in our standard offerings? We'll create a tailored solution just for you."
            centered
          />
        </AnimatedElement>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
          <div className="lg:col-span-3">
            <AnimatedElement animation="fadeInLeft">
              <div className="bg-white dark:bg-neutral-700 rounded-lg shadow-md p-6 md:p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="h-8 w-8 text-primary-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                      Request Received!
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 max-w-md">
                      Thank you for submitting your custom service request. Our team will review your requirements and get back to you within 30 minutes with a personalized response.
                    </p>
                    <button
                      className="mt-6 btn btn-primary"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                        Tell Us About Your Project
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300">
                        Provide details about your custom service needs, and we'll create a tailored solution for you.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                          Project Description *
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          rows={4}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                            errors.description
                              ? 'border-error-500 bg-error-50 dark:bg-error-900/10'
                              : 'border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800'
                          }`}
                          placeholder="Describe your project or service needs in detail"
                        />
                        {errors.description && (
                          <p className="mt-1 text-sm text-error-500">
                            {errors.description}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="requirements" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                          Specific Requirements (Optional)
                        </label>
                        <textarea
                          id="requirements"
                          name="requirements"
                          value={formData.requirements}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="List any specific features, functionalities, or requirements you need"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                            Desired Timeline (Optional)
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          >
                            <option value="">Select timeline</option>
                            <option value="ASAP">As soon as possible</option>
                            <option value="1-month">Within 1 month</option>
                            <option value="3-months">Within 3 months</option>
                            <option value="6-months">Within 6 months</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                            Budget Range (Optional)
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-5k">Under ₹5,000</option>
                            <option value="5k-10k">₹5,000 - ₹10,000</option>
                            <option value="10k-25k">₹10,000 - ₹25,000</option>
                            <option value="25k-50k">₹25,000 - ₹50,000</option>
                            <option value="50k-100k">₹50,000 - ₹100,000</option>
                            <option value="over-100k">Over ₹100,000</option>
                            <option value="not-sure">Not sure / Need guidance</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-600">
                        <h4 className="text-lg font-medium text-neutral-900 dark:text-white mb-4">
                          Contact Information
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                              Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                                errors.name
                                  ? 'border-error-500 bg-error-50 dark:bg-error-900/10'
                                  : 'border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800'
                              }`}
                              placeholder="Your full name"
                            />
                            {errors.name && (
                              <p className="mt-1 text-sm text-error-500">
                                {errors.name}
                              </p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                              Email *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                                errors.email
                                  ? 'border-error-500 bg-error-50 dark:bg-error-900/10'
                                  : 'border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800'
                              }`}
                              placeholder="your.email@example.com"
                            />
                            {errors.email && (
                              <p className="mt-1 text-sm text-error-500">
                                {errors.email}
                              </p>
                            )}
                          </div>
                          
                          <div className="md:col-span-2">
                            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                              Phone (Optional)
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                              placeholder="Your phone number"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="btn btn-primary w-full flex items-center justify-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Submit Custom Request
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedElement>
          </div>
          
          <div className="lg:col-span-2">
            <AnimatedElement animation="fadeInRight">
              <div className="bg-white dark:bg-neutral-700 rounded-lg shadow-md p-6 md:p-8 mb-6">
                <div className="flex items-center mb-4">
                  <HelpCircle className="h-6 w-6 text-primary-500 mr-2" />
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    FAQs About Custom Requests
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white">
                      How does the custom request process work?
                    </h4>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                      After submission, our team will review your request, reach out to clarify any details, and provide a tailored proposal within 30 minutes.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white">
                      What types of custom services do you offer?
                    </h4>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                      We can customize any of our standard services or create entirely new solutions based on your specific business needs and challenges.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white">
                      How do you determine pricing for custom projects?
                    </h4>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                      Pricing depends on project scope, complexity, timeline, and resource requirements. We provide transparent, detailed quotes with no hidden costs.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-white">
                      Can I request changes to the proposal?
                    </h4>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                      Absolutely! Our proposals are starting points for discussion. We'll work with you to refine the scope and approach until it perfectly meets your needs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-500 rounded-lg shadow-md p-6 md:p-8 text-neutral-900">
                <h3 className="text-xl font-bold mb-4">
                  Why Request a Custom Service?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Tailored specifically to your unique business challenges',
                    'Optimized for your existing workflows and systems',
                    'Focused on your specific industry requirements',
                    'Scalable to grow with your business needs',
                    'Exclusive features not available in standard packages'
                  ].map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <a href="#contact" className="inline-flex items-center font-medium text-neutral-900 hover:underline">
                    Questions? Contact our team
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};