import React from 'react';
import { AnimatedElement } from '../common/AnimatedElement';
import { SectionHeading } from '../common/SectionHeading';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of AI in Business Software',
    excerpt: 'Explore how artificial intelligence is transforming enterprise software and creating new opportunities for business growth.',
    category: 'Artificial Intelligence',
    date: 'Jun 12, 2023',
    author: 'Alex Morgan',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    title: 'Optimizing Cloud Infrastructure for Scale',
    excerpt: 'Learn best practices for designing and managing cloud infrastructure that can efficiently scale with your business needs.',
    category: 'Cloud Computing',
    date: 'May 23, 2023',
    author: 'Sophia Chen',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    title: 'Securing Your Digital Ecosystem',
    excerpt: 'Discover comprehensive strategies to protect your business from evolving cyber threats and ensure data integrity.',
    category: 'Cybersecurity',
    date: 'Apr 18, 2023',
    author: 'Marcus Wilson',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const resources = [
  'Complete Guide to Digital Transformation',
  'Blockchain Technology Explained',
  'Modern UX/UI Design Principles',
  'Enterprise Software Selection Checklist'
];

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="section">
      <div className="container">
        <AnimatedElement>
          <SectionHeading 
            title="Insights & Resources" 
            subtitle="Stay ahead with our latest insights, industry trends, and helpful resources."
            centered
          />
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <AnimatedElement key={post.id} delay={index * 0.1}>
              <div className="h-full card hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 m-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500 text-neutral-900 rounded-md">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    {post.excerpt}
                  </p>
                  <a 
                    href={`#blog/${post.id}`}
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatedElement animation="fadeInLeft">
            <div className="bg-neutral-100 dark:bg-neutral-700 rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                Get the latest industry insights, technology updates, and exclusive content delivered to your inbox.
              </p>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Subscribe Now
                </button>
              </form>
              
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-4">
                By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeInRight">
            <div className="bg-neutral-100 dark:bg-neutral-700 rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                Downloadable Resources
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                Free guides and resources to help you navigate the digital landscape and make informed technology decisions.
              </p>
              
              <ul className="space-y-4">
                {resources.map((resource, index) => (
                  <li key={index} className="flex items-center justify-between p-3 bg-white dark:bg-neutral-800 rounded-md">
                    <span className="font-medium text-neutral-900 dark:text-white">
                      {resource}
                    </span>
                    <button className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <a href="#resources" className="btn btn-outline w-full text-center">
                  View All Resources
                </a>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};