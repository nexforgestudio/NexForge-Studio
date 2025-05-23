import React, { useState } from 'react';
import { AnimatedElement } from '../common/AnimatedElement';
import { SectionHeading } from '../common/SectionHeading';
import { Send, MapPin, Phone, Mail, MessageSquare, Calendar, Apple as WhatsApp } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    if (errors[name as keyof FormData]) {
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
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
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
    <section id="contact" className="section">
      <div className="container">
        <AnimatedElement>
          <SectionHeading 
            title="Get In Touch" 
            subtitle="Have a project in mind? Let's discuss how we can help you achieve your digital goals."
            centered
          />
        </AnimatedElement>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <AnimatedElement animation="fadeInLeft">
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 md:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                    <Send className="h-8 w-8 text-primary-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Your message has been received. We'll get back to you within 30 minutes.
                  </p>
                  <button
                    className="mt-6 btn btn-primary"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>
                  
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
                            : 'border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700'
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
                            : 'border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-error-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Service of Interest (Optional)
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select a service</option>
                      <option value="custom-software">Custom Software Development</option>
                      <option value="web-mobile">Website & Mobile App Development</option>
                      <option value="enterprise">Enterprise Software Solutions</option>
                      <option value="ai-ml">AI and Machine Learning</option>
                      <option value="cloud">Cloud Migration Services</option>
                      <option value="digital-ecosystem">Digital Ecosystem Development</option>
                      <option value="social-media">Social Media Management</option>
                      <option value="other">Other / Not Sure Yet</option>
                    </select>
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors.message
                          ? 'border-error-500 bg-error-50 dark:bg-error-900/10'
                          : 'border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700'
                      }`}
                      placeholder="Tell us about your project or requirements..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-error-500">
                        {errors.message}
                      </p>
                    )}
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeInRight">
            <div>
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 md:p-8">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-neutral-900 dark:text-white">
                        Office Location
                      </h4>
                      <p className="mt-1 text-neutral-600 dark:text-neutral-300">
                        City Center<br />
                        Haldia, 721657<br />
                        West Bengal, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-neutral-900 dark:text-white">
                        Phone
                      </h4>
                      <p className="mt-1">
                        <a href="tel:+917501954191" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400">
                          +91 7501954191
                        </a>
                      </p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        Available 24/7 for calls & WhatsApp
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-neutral-900 dark:text-white">
                        Email
                      </h4>
                      <p className="mt-1">
                        <a href="mailto:nexforgestudio@gmail.com" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400">
                          nexforgestudio@gmail.com
                        </a>
                      </p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        We aim to respond within 30 minutes
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-neutral-900 dark:text-white">
                        Schedule a Meeting
                      </h4>
                      <p className="mt-1 text-neutral-600 dark:text-neutral-300">
                        Book a free 30-minute consultation
                      </p>
                      <a 
                        href="https://calendly.com/nexforgestudio/30min" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-2 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium flex items-center"
                      >
                        Schedule Now
                        <Send className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                      <WhatsApp className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-neutral-900 dark:text-white">
                        WhatsApp Chat
                      </h4>
                      <p className="mt-1 text-neutral-600 dark:text-neutral-300">
                        Get instant support via WhatsApp
                      </p>
                      <a 
                        href="https://wa.me/917501954191" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-2 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium flex items-center"
                      >
                        Start WhatsApp Chat
                        <Send className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 md:p-8 overflow-hidden">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                  Our Location
                </h3>
                <div className="aspect-video bg-neutral-200 dark:bg-neutral-700 rounded-lg overflow-hidden">
                  <iframe
                    title="NexForgeStudio Office Location"
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.4029456784366!2d88.0681663!3d22.0467238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f0c1af6b2d49%3A0x168af7dc0c63855f!2sHaldia%20City%20Centre!5e0!3m2!1sen!2sin!4v1679900000000!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};