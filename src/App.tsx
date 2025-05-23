import React, { useState, useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import HomePage from './pages/HomePage';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-neutral-900">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="mt-4 text-lg font-medium text-neutral-900 dark:text-white">Loading NexForgeStudio...</span>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <Layout>
        <HomePage />
      </Layout>
    </ThemeProvider>
  );
};

export default App;