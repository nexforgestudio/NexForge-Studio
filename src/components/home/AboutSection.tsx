import React from 'react';
import { AnimatedElement } from '../common/AnimatedElement';
import { SectionHeading } from '../common/SectionHeading';
import { motion } from 'framer-motion';
import { CheckCircle2, PenTool, Laptop, Users, Sparkles, Shield, Clock, HeartHandshake, Award, Instagram, Linkedin } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '3+' },
  { label: 'Projects Completed', value: '60+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Team Members', value: '5+' }
];

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  social: {
    instagram: string;
    linkedin: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Aritra Das',
    role: 'Founder & CEO',
    bio: 'Tech enthusiast and visionary leader with expertise in software development and digital transformation. Leading NexForgeStudio towards innovative solutions.',
    social: {
      instagram: 'https://www.instagram.com/aritra_7_jarvis/',
      linkedin: 'https://www.linkedin.com/in/aritradas07/'
    }
  },
  {
    name: 'Bristi Samanta',
    role: 'Co-founder & Creative Director',
    bio: 'Creative powerhouse driving our design vision and user experience strategies. Passionate about creating impactful digital experiences.',
    social: {
      instagram: 'https://www.instagram.com/bristisamanta_9/',
      linkedin: 'https://www.linkedin.com/in/bristi-samanta0305/'
    }
  },
  {
    name: 'Rupam Karmakar',
    role: 'Founder & CTO',
    bio: 'Technical mastermind behind our innovative solutions. Expert in AI, cloud architecture, and enterprise software development.',
    social: {
      instagram: 'https://www.instagram.com/rupamp26/',
      linkedin: 'https://www.linkedin.com/in/rupamp26/'
    }
  }
];

const values = [
  {
    icon: <PenTool className="h-6 w-6 text-primary-500" />,
    title: 'Quality Craftsmanship',
    description: 'We meticulously develop every solution with attention to detail and excellence.'
  },
  {
    icon: <Shield className="h-6 w-6 text-primary-500" />,
    title: 'Security First',
    description: 'Your data and systems safety is our priority in everything we build.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-primary-500" />,
    title: 'Innovative Thinking',
    description: 'We constantly explore cutting-edge technologies to deliver forward-thinking solutions.'
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-primary-500" />,
    title: 'Client Partnership',
    description: 'We build lasting relationships based on trust, transparency, and mutual success.'
  },
  {
    icon: <Laptop className="h-6 w-6 text-primary-500" />,
    title: 'Technical Excellence',
    description: 'Our team maintains the highest standards of technical expertise and best practices.'
  },
  {
    icon: <Clock className="h-6 w-6 text-primary-500" />,
    title: 'Timely Delivery',
    description: 'We respect deadlines and ensure on-time delivery without compromising quality.'
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section bg-neutral-50 dark:bg-neutral-800">
      <div className="container">
        <AnimatedElement>
          <SectionHeading 
            title="About NexForgeStudio" 
            subtitle="Learn about our mission, our team, and the values that drive our work."
            centered
          />
        </AnimatedElement>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <AnimatedElement animation="fadeInLeft">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                At NexForgeStudio, we're dedicated to transforming businesses through innovative digital solutions. Our mission is to forge next-generation technology that empowers organizations to achieve their full potential.
              </p>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                Founded in 2023, we've grown from a small team of passionate developers to a comprehensive digital agency with expertise across the entire software development spectrum.
              </p>
              
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 mt-8">
                Why Choose Us
              </h3>
              <ul className="space-y-3">
                {[
                  'End-to-end digital expertise under one roof',
                  'Dedicated team of industry experts',
                  'Customer-centric approach to every project',
                  'Cutting-edge technology implementation',
                  'Agile development methodology',
                  'Ongoing support and maintenance'
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeInRight">
            <div className="bg-white dark:bg-neutral-700 rounded-lg shadow-md overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500">
                <div className="grid grid-cols-2 sm:grid-cols-4">
                  {stats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="bg-white dark:bg-neutral-800 p-6 text-center"
                    >
                      <div className="text-3xl font-bold text-primary-500">
                        {stat.value}
                      </div>
                      <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                  Our Journey
                </h3>
                <div className="relative border-l-2 border-primary-500 pl-6 pb-2">
                  <div className="mb-6">
                    <div className="absolute -left-2 mt-1.5">
                      <div className="h-4 w-4 rounded-full bg-primary-500"></div>
                    </div>
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      2023 - Foundation
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Started as a boutique web development agency with a team of 5.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="absolute -left-2 mt-1.5">
                      <div className="h-4 w-4 rounded-full bg-primary-500"></div>
                    </div>
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      2023 - Expansion
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Expanded services to include mobile and enterprise solutions.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="absolute -left-2 mt-1.5">
                      <div className="h-4 w-4 rounded-full bg-primary-500"></div>
                    </div>
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      2025 - Rebrand & Innovation
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Launched our AI and blockchain development divisions.
                    </p>
                  </div>
                  
                  <div>
                    <div className="absolute -left-2 mt-1.5">
                      <div className="h-4 w-4 rounded-full bg-primary-500"></div>
                    </div>
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      Today
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      A full-service digital agency with expert team serving clients globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        <div className="mt-20">
          <AnimatedElement>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white text-center mb-12">
              Our Core Values
            </h3>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <AnimatedElement key={index} delay={index * 0.1}>
                <div className="bg-white dark:bg-neutral-700 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="bg-primary-100 dark:bg-primary-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {value.description}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
        
        <div className="mt-20">
          <AnimatedElement>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white text-center mb-12">
              Meet Our Leadership
            </h3>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedElement key={index} delay={index * 0.1}>
                <div className="bg-white dark:bg-neutral-700 rounded-lg shadow-md overflow-hidden p-6">
                  <div>
                    <h4 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {member.name}
                    </h4>
                    <p className="text-primary-500">{member.role}</p>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300 mt-4 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href={member.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <AnimatedElement>
            <div className="flex space-x-4">
              <a href="#careers" className="btn btn-outline">
                Join Our Team
              </a>
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};