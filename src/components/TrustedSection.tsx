
import React from 'react';
import { Globe, Eye } from 'lucide-react';

const TrustedSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Trusted Worldwide by <span className="text-white">1.2 Million</span> Learners
        </h2>
        <div className="flex justify-center items-center gap-12">
          <Globe className="w-20 h-20 text-purple-400 animate-pulse" />
          <div className="text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">1,200,000+</div>
          <Eye className="w-20 h-20 text-blue-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
