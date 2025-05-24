
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import CompaniesSection from '@/components/CompaniesSection';
import TestimonialSection from '@/components/TestimonialSection';
import CareerRoadmapSection from '@/components/CareerRoadmapSection';
import TrustedSection from '@/components/TrustedSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CompaniesSection />
      <TestimonialSection />
      <CareerRoadmapSection />
      <TrustedSection />
      <Footer />
    </div>
  );
};

export default Index;
