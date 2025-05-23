import React from 'react';
import { Logo } from '../common/Logo';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Apple as WhatsApp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo variant="white" />
            <p className="mt-4 text-neutral-300">
              NexForgeStudio provides All-in-One Digital Craftsmanship with cutting-edge software solutions tailored to your business needs.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-primary-500 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary-500 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary-500 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://wa.me/917501954191" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-500 transition-colors" aria-label="WhatsApp">
                <WhatsApp className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#entry-level" className="text-neutral-300 hover:text-primary-500 transition-colors">Custom Software</a></li>
              <li><a href="#mid-range" className="text-neutral-300 hover:text-primary-500 transition-colors">Enterprise Solutions</a></li>
              <li><a href="#advanced" className="text-neutral-300 hover:text-primary-500 transition-colors">AI & Machine Learning</a></li>
              <li><a href="#enterprise" className="text-neutral-300 hover:text-primary-500 transition-colors">Digital Ecosystems</a></li>
              <li><a href="#system-management" className="text-neutral-300 hover:text-primary-500 transition-colors">IT Infrastructure</a></li>
              <li><a href="#social-media" className="text-neutral-300 hover:text-primary-500 transition-colors">Social Media Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-neutral-300 hover:text-primary-500 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-neutral-300 hover:text-primary-500 transition-colors">Portfolio</a></li>
              <li><a href="#blog" className="text-neutral-300 hover:text-primary-500 transition-colors">Blog</a></li>
              <li><a href="#careers" className="text-neutral-300 hover:text-primary-500 transition-colors">Careers</a></li>
              <li><a href="#privacy" className="text-neutral-300 hover:text-primary-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-neutral-300 hover:text-primary-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-neutral-300">City Center, Haldia, 721657, West Bengal, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                <a href="tel:+917501954191" className="text-neutral-300 hover:text-primary-500 transition-colors">+91 7501954191</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                <a href="mailto:nexforgestudio@gmail.com" className="text-neutral-300 hover:text-primary-500 transition-colors">nexforgestudio@gmail.com</a>
              </li>
              <li className="flex items-center">
                <WhatsApp className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                <a href="https://wa.me/917501954191" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-primary-500 transition-colors">Chat on WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-neutral-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-400">
            &copy; {currentYear} NexForgeStudio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-sm text-neutral-400 hover:text-primary-500 transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-sm text-neutral-400 hover:text-primary-500 transition-colors">Terms of Service</a>
            <a href="#cookies" className="text-sm text-neutral-400 hover:text-primary-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};