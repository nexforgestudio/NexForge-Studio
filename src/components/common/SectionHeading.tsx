import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  withLine?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  withLine = true
}) => {
  const alignment = centered ? 'text-center mx-auto' : '';
  
  return (
    <div className={`mb-12 ${alignment}`} style={{ maxWidth: centered ? '800px' : 'none' }}>
      {withLine && (
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: centered ? '120px' : '80px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`h-1 bg-primary-500 mb-4 ${centered ? 'mx-auto' : ''}`}
        />
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};