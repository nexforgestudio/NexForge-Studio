import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Search, Moon, Sun, ChevronDown } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';
import { Logo } from '../common/Logo';

interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

interface SearchResult {
  title: string;
  description: string;
  link: string;
  category: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { 
    label: 'Services', 
    href: '#services',
    children: [
      { label: 'Entry-Level', href: '#entry-level' },
      { label: 'Mid-Range', href: '#mid-range' },
      { label: 'Advanced', href: '#advanced' },
      { label: 'Enterprise-Level', href: '#enterprise' },
      { label: 'System Management', href: '#system-management' },
      { label: 'Social Media', href: '#social-media' },
    ]
  },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const searchData: SearchResult[] = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions for your business needs',
    link: '#services',
    category: 'Services'
  },
  {
    title: 'Enterprise Solutions',
    description: 'Comprehensive enterprise-grade software solutions',
    link: '#enterprise',
    category: 'Services'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Advanced AI solutions for business automation',
    link: '#advanced',
    category: 'Services'
  },
  {
    title: 'About NexForgeStudio',
    description: 'Learn about our company and mission',
    link: '#about',
    category: 'Company'
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with our team',
    link: '#contact',
    category: 'Support'
  },
  {
    title: 'Pricing Plans',
    description: 'View our service pricing and packages',
    link: '#pricing',
    category: 'Pricing'
  }
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.nav-dropdown') && !target.closest('.nav-button')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSearchItemClick = (link: string) => {
    setSearchOpen(false);
    setSearchQuery('');
    document.querySelector(link)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavLinkClick = (link: NavLink) => {
    if (link.children) {
      setActiveDropdown(activeDropdown === link.label ? null : link.label);
      // Scroll to services section when clicking Services dropdown
      if (link.label === 'Services') {
        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setActiveDropdown(null);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-neutral-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Logo />
        
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <button
                className="nav-button nav-link flex items-center"
                onClick={() => handleNavLinkClick(link)}
                aria-expanded={activeDropdown === link.label}
                aria-haspopup={Boolean(link.children)}
              >
                {link.label}
                {link.children && (
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === link.label ? 'rotate-180' : ''
                  }`} />
                )}
              </button>
              
              {link.children && (
                <div 
                  className={`nav-dropdown absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-neutral-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                    activeDropdown === link.label 
                      ? 'opacity-100 translate-y-0 visible' 
                      : 'opacity-0 -translate-y-2 invisible'
                  }`}
                >
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                      onClick={() => {
                        setActiveDropdown(null);
                        setIsOpen(false);
                      }}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative" id="search-container">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-neutral-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-500"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            <motion.div
              initial={false}
              animate={searchOpen ? "open" : "closed"}
              variants={{
                open: { opacity: 1, y: 0, display: 'block' },
                closed: { opacity: 0, y: -20, transitionEnd: { display: 'none' } }
              }}
              className="absolute right-0 mt-2 w-96 bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search for services, information..."
                    className="w-full px-4 py-2 pr-10 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    autoFocus
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-neutral-400 dark:text-neutral-500" />
                </div>

                {searchResults.length > 0 && (
                  <div className="mt-4 max-h-64 overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearchItemClick(result.link)}
                        className="w-full text-left p-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md transition-colors"
                      >
                        <div className="flex items-start">
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-neutral-900 dark:text-white">
                              {result.title}
                            </h4>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                              {result.description}
                            </p>
                          </div>
                          <span className="text-xs text-primary-500 ml-2">
                            {result.category}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {searchQuery && searchResults.length === 0 && (
                  <div className="mt-4 text-center text-neutral-500 dark:text-neutral-400 py-3">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            </motion.div>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="text-neutral-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-500"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <a href="#contact" className="btn btn-primary">
            Get a Quote
          </a>
        </div>
        
        <button
          className="lg:hidden text-neutral-800 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 }
        }}
        className="fixed inset-0 z-50 lg:hidden bg-white dark:bg-neutral-900 overflow-hidden"
      >
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              className="text-neutral-800 dark:text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="mt-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search for services, information..."
                className="w-full px-4 py-2 pr-10 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-neutral-400 dark:text-neutral-500" />
            </div>

            {searchResults.length > 0 && (
              <div className="mt-4 max-h-64 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      handleSearchItemClick(result.link);
                      setIsOpen(false);
                    }}
                    className="w-full text-left p-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md transition-colors"
                  >
                    <div className="flex items-start">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-neutral-900 dark:text-white">
                          {result.title}
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                          {result.description}
                        </p>
                      </div>
                      <span className="text-xs text-primary-500 ml-2">
                        {result.category}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <nav className="mt-8">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {!link.children ? (
                    <a 
                      href={link.href}
                      className="block text-xl font-medium py-2 text-neutral-900 dark:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <div>
                      <button
                        className="flex items-center text-xl font-medium py-2 text-neutral-900 dark:text-white w-full"
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        aria-expanded={activeDropdown === link.label}
                      >
                        {link.label}
                        <ChevronDown className={`ml-2 h-5 w-5 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={activeDropdown === link.label ? "open" : "closed"}
                        variants={{
                          open: { opacity: 1, height: 'auto', marginTop: '0.5rem' },
                          closed: { opacity: 0, height: 0, marginTop: 0 }
                        }}
                        className="overflow-hidden pl-4 border-l-2 border-primary-500"
                      >
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-neutral-700 dark:text-neutral-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-8 flex flex-col space-y-4">
            <div className="flex justify-between">
              <button 
                onClick={toggleTheme}
                className="text-neutral-800 dark:text-white flex items-center"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
            
            <a href="#contact" className="btn btn-primary text-center" onClick={() => setIsOpen(false)}>
              Get a Quote
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
};