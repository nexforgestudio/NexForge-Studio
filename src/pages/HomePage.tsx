import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { PricingSection } from '../components/home/PricingSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { ContactSection } from '../components/home/ContactSection';
import { PortfolioSection } from '../components/home/PortfolioSection';
import { AboutSection } from '../components/home/AboutSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { CustomRequestSection } from '../components/home/CustomRequestSection';
import { BlogSection } from '../components/home/BlogSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PricingSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CustomRequestSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default HomePage;