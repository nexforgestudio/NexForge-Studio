import React, { useState } from 'react';
import { AnimatedElement } from '../common/AnimatedElement';
import { SectionHeading } from '../common/SectionHeading';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

interface PricingPlan {
  id: string;
  title: string;
  description: string;
  price: number;
  features: {
    text: string;
    included: boolean;
  }[];
  popular?: boolean;
}

interface ServiceCategory {
  id: string;
  title: string;
  plans: PricingPlan[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'entry-level',
    title: 'Entry-Level Services',
    plans: [
      {
        id: 'basic',
        title: 'Basic',
        description: 'Essential services for small businesses and startups',
        price: 24999,
        features: [
          { text: 'Custom website development', included: true },
          { text: 'Basic IT consulting', included: true },
          { text: 'Software maintenance (6 months)', included: true },
          { text: 'Bug fixing support', included: true },
          { text: 'Data management', included: false },
          { text: 'Mobile app development', included: false },
        ]
      },
      {
        id: 'standard',
        title: 'Standard',
        description: 'Complete package for growing businesses',
        price: 44999,
        popular: true,
        features: [
          { text: 'Custom website development', included: true },
          { text: 'Basic IT consulting', included: true },
          { text: 'Software maintenance (1 year)', included: true },
          { text: 'Bug fixing support', included: true },
          { text: 'Data management', included: true },
          { text: 'Mobile app development', included: true },
        ]
      }
    ]
  },
  {
    id: 'mid-range',
    title: 'Mid-Range Services',
    plans: [
      {
        id: 'professional',
        title: 'Professional',
        description: 'Enterprise solutions for medium businesses',
        price: 49999,
        features: [
          { text: 'Enterprise software solutions', included: true },
          { text: 'Custom CRM systems', included: true },
          { text: 'ERP implementation', included: true },
          { text: 'API development', included: true },
          { text: 'Cloud migration', included: false },
          { text: 'UI/UX design', included: false },
        ]
      },
      {
        id: 'advanced',
        title: 'Advanced',
        description: 'Complete enterprise package',
        price: 94999,
        popular: true,
        features: [
          { text: 'Enterprise software solutions', included: true },
          { text: 'Custom CRM systems', included: true },
          { text: 'ERP implementation', included: true },
          { text: 'API development', included: true },
          { text: 'Cloud migration', included: true },
          { text: 'UI/UX design', included: true },
        ]
      }
    ]
  },
  {
    id: 'advanced-services',
    title: 'Advanced Services',
    plans: [
      {
        id: 'ai-basic',
        title: 'AI Basic',
        description: 'Essential AI and ML solutions',
        price: 59999,
        features: [
          { text: 'AI/ML implementation', included: true },
          { text: 'Big data analytics', included: true },
          { text: 'IoT solutions', included: true },
          { text: 'Blockchain basics', included: true },
          { text: 'AR/VR development', included: false },
          { text: 'Enterprise architecture', included: false },
        ]
      },
      {
        id: 'ai-premium',
        title: 'AI Premium',
        description: 'Advanced AI and emerging tech solutions',
        price: 84999,
        popular: true,
        features: [
          { text: 'AI/ML implementation', included: true },
          { text: 'Big data analytics', included: true },
          { text: 'IoT solutions', included: true },
          { text: 'Blockchain basics', included: true },
          { text: 'AR/VR development', included: true },
          { text: 'Enterprise architecture', included: true },
        ]
      }
    ]
  },
  {
    id: 'enterprise',
    title: 'Enterprise-Level Services',
    plans: [
      {
        id: 'enterprise-basic',
        title: 'Enterprise Basic',
        description: 'Core enterprise digital solutions',
        price: 74999,
        features: [
          { text: 'Digital ecosystem development', included: true },
          { text: 'Systems integration', included: true },
          { text: 'Predictive analytics', included: true },
          { text: 'Custom AI development', included: true },
          { text: 'Quantum computing', included: false },
          { text: 'Mission-critical systems', included: false },
        ]
      },
      {
        id: 'enterprise-premium',
        title: 'Enterprise Premium',
        description: 'Complete enterprise transformation',
        price: 139999,
        popular: true,
        features: [
          { text: 'Digital ecosystem development', included: true },
          { text: 'Systems integration', included: true },
          { text: 'Predictive analytics', included: true },
          { text: 'Custom AI development', included: true },
          { text: 'Quantum computing', included: true },
          { text: 'Mission-critical systems', included: true },
        ]
      }
    ]
  },
  {
    id: 'system-management',
    title: 'System Management Services',
    plans: [
      {
        id: 'system-basic',
        title: 'System Basic',
        description: 'Essential IT infrastructure management',
        price: 194999,
        features: [
          { text: 'Infrastructure monitoring', included: true },
          { text: 'Network administration', included: true },
          { text: 'Cloud management', included: true },
          { text: 'Backup solutions', included: true },
          { text: 'Performance optimization', included: false },
          { text: '24/7 support', included: false },
        ]
      },
      {
        id: 'system-premium',
        title: 'System Premium',
        description: 'Complete system management solution',
        price: 249999,
        popular: true,
        features: [
          { text: 'Infrastructure monitoring', included: true },
          { text: 'Network administration', included: true },
          { text: 'Cloud management', included: true },
          { text: 'Backup solutions', included: true },
          { text: 'Performance optimization', included: true },
          { text: '24/7 support', included: true },
        ]
      }
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Management Services',
    plans: [
      {
        id: 'social-basic',
        title: 'Social Basic',
        description: 'Essential social media management',
        price: 14999,
        features: [
          { text: 'Strategy development', included: true },
          { text: 'Content creation', included: true },
          { text: 'Social media account setup and branding', included: true },
          { text: 'Basic analytics', included: true },
          { text: 'Paid advertising', included: false },
          { text: 'Influencer management', included: false },
        ]
      },
      {
        id: 'social-premium',
        title: 'Social Premium',
        description: 'Complete social media solution',
        price: 24999,
        popular: true,
        features: [
          { text: 'Strategy development', included: true },
          { text: 'Content creation', included: true },
          { text: 'Social media account setup and branding', included: true },
          { text: 'Advanced analytics', included: true },
          { text: 'Paid advertising', included: true },
          { text: 'Influencer management', included: true },
        ]
      }
    ]
  }
];

export const PricingSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('entry-level');

  const formatPrice = (price: number) => {
    return `₹${(price).toLocaleString('en-IN')}`;
  };

  return (
    <section id="pricing" className="section">
      <div className="container">
        <AnimatedElement>
          <SectionHeading 
            title="Transparent Pricing Plans" 
            subtitle="Choose the plan that fits your business needs. All plans include our exceptional support and quality standards."
            centered
          />
        </AnimatedElement>
        
        <AnimatedElement delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-neutral-900'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCategories
            .find(category => category.id === activeCategory)
            ?.plans.map((plan, index) => (
              <AnimatedElement key={plan.id} delay={0.1 * index}>
                <div className={`h-full card border-2 transition-all duration-300 hover:shadow-medium relative ${
                  plan.popular 
                    ? 'border-primary-500 dark:border-primary-500' 
                    : 'border-transparent'
                }`}>
                  {plan.popular && (
                    <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                      <span className="bg-primary-500 text-neutral-900 text-xs font-bold px-3 py-1 rounded-full inline-block">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                      {plan.title}
                    </h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-400 min-h-[3rem]">
                      {plan.description}
                    </p>
                    
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-neutral-900 dark:text-white">
                        {formatPrice(plan.price)}
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400">
                        /one-time
                      </span>
                    </div>
                    
                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          {feature.included ? (
                            <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="h-5 w-5 text-neutral-400 dark:text-neutral-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                          <span className={feature.included 
                            ? 'text-neutral-800 dark:text-neutral-200' 
                            : 'text-neutral-500 dark:text-neutral-400'
                          }>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6">
                      <a 
                        href="#contact" 
                        className={`block text-center py-3 px-4 rounded-md font-medium transition-colors ${
                          plan.popular
                            ? 'bg-primary-500 text-neutral-900 hover:bg-primary-600' 
                            : 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100'
                        }`}
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
          ))}
        </div>
        
        <div className="mt-16 bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="md:flex-1">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center">
                Need a custom solution?
                <HelpCircle className="ml-2 h-5 w-5 text-primary-500" />
              </h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                We offer tailor-made packages for businesses with specific requirements. Contact us for a personalized quote.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a href="#custom-request" className="btn btn-primary">
                Request Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};