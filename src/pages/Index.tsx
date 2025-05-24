
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden relative">
      {/* Global Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none"></div>
      <div className="fixed inset-0 cyber-grid opacity-5 pointer-events-none"></div>
      
      {/* Floating ambient elements */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl float-animation pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl float-animation-delayed pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl float-animation-slow pointer-events-none transform -translate-x-1/2 -translate-y-1/2"></div>
      
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
