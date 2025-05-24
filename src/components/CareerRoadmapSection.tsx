
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Lock } from 'lucide-react';

const CareerRoadmapSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Confused about your career?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Kickstart your cybersecurity journey with our comprehensive roadmap. Download this free guide and discover exactly what to learn and how to land your dream job.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-12 justify-center">
            <div className="relative group">
              <div className="w-80 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-purple-500/50 transition-all duration-300 group-hover:scale-105">
                <div className="text-center">
                  <Lock className="w-20 h-20 text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">Secrets of Hacking</h3>
                  <p className="text-slate-300 text-lg">Career Roadmap 2024</p>
                  <Badge className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500">FREE Download</Badge>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-6 shadow-lg shadow-purple-500/25">
                <Download className="mr-2 w-6 h-6" />
                Download Free Guide
              </Button>
              <p className="text-slate-400 mt-4 text-sm">✓ No spam, just pure value</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerRoadmapSection;
