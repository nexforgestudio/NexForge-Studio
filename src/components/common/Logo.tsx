import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-neutral-900 dark:text-white';
  
  return (
    <a href="#home" className="flex items-center">
      <div className="relative h-10 w-10 mr-2">
        <div className="absolute top-0 left-0 h-10 w-10 bg-primary-500 rounded-md"></div>
        <div className="absolute bottom-0 right-0 h-5 w-5 bg-neutral-900 dark:bg-white rounded-sm"></div>
      </div>
      <div className={`font-bold text-xl ${textColor}`}>
        <span>NexForge</span>
        <span className="block -mt-1">Studio</span>
      </div>
    </a>
  );
};