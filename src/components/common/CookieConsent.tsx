import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);
  
  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show the consent banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };
  
  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white dark:bg-neutral-800 shadow-lg z-50"
        >
          <div className="container py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 pr-4">
                <h4 className="text-lg font-semibold mb-1 text-neutral-900 dark:text-white">We value your privacy</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setShowConsent(false)} 
                  className="btn-outline py-2 px-4 text-sm">
                  Manage Preferences
                </button>
                <button 
                  onClick={handleAccept} 
                  className="btn-primary py-2 px-4 text-sm">
                  Accept All
                </button>
              </div>
              <button 
                onClick={() => setShowConsent(false)} 
                className="absolute top-3 right-3 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white"
                aria-label="Close cookie consent"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};